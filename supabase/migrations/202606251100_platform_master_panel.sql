create or replace function public.list_platform_companies()
returns table (
  company_id text,
  company_name text,
  short_name text,
  color text,
  label text,
  pill text,
  status text,
  plan_code text,
  amount_cents integer,
  currency text,
  owner_profile_id uuid,
  owner_name text,
  owner_email text,
  member_count integer,
  active_member_count integer,
  pending_member_count integer,
  disabled_member_count integer,
  trial_ends_at timestamptz,
  current_period_end timestamptz,
  grace_ends_at timestamptz,
  created_at timestamptz,
  updated_at timestamptz
)
language plpgsql
security definer
set search_path = public, app_private, pg_temp
as $$
begin
  if not app_private.is_quest_admin() then
    raise exception 'Platform admin access required';
  end if;

  return query
  select
    c.id as company_id,
    coalesce(c.name, c.short_name, c.id) as company_name,
    c.short_name,
    c.color,
    c.label,
    c.pill,
    coalesce(cs.status, 'pending_review') as status,
    coalesce(cs.plan_code, 'manual') as plan_code,
    coalesce(cs.amount_cents, 0) as amount_cents,
    coalesce(cs.currency, 'usd') as currency,
    owner_row.profile_id as owner_profile_id,
    owner_row.full_name as owner_name,
    owner_row.email as owner_email,
    coalesce(member_counts.member_count, 0)::integer as member_count,
    coalesce(member_counts.active_member_count, 0)::integer as active_member_count,
    coalesce(member_counts.pending_member_count, 0)::integer as pending_member_count,
    coalesce(member_counts.disabled_member_count, 0)::integer as disabled_member_count,
    cs.trial_ends_at,
    cs.current_period_end,
    cs.grace_ends_at,
    coalesce(cs.created_at, c.created_at) as created_at,
    coalesce(cs.updated_at, c.created_at) as updated_at
  from public.companies c
  left join public.company_subscriptions cs on cs.company_id = c.id
  left join lateral (
    select cm.profile_id, p.full_name, p.email
    from public.company_memberships cm
    left join public.profiles p on p.id = cm.profile_id
    where cm.company_id = c.id
      and cm.role = 'owner'
    order by case when cm.status = 'active' then 0 else 1 end, cm.created_at asc
    limit 1
  ) owner_row on true
  left join lateral (
    select
      count(*) as member_count,
      count(*) filter (where cm.status = 'active') as active_member_count,
      count(*) filter (where cm.status = 'pending') as pending_member_count,
      count(*) filter (where cm.status in ('disabled', 'left')) as disabled_member_count
    from public.company_memberships cm
    where cm.company_id = c.id
  ) member_counts on true
  order by
    case coalesce(cs.status, 'pending_review')
      when 'pending_review' then 0
      when 'active' then 1
      when 'trialing' then 2
      when 'suspended' then 3
      when 'canceled' then 4
      else 5
    end,
    coalesce(c.name, c.short_name, c.id);
end;
$$;

revoke all on function public.list_platform_companies() from public, anon;
grant execute on function public.list_platform_companies() to authenticated;

create or replace function public.list_platform_company_members(target_company_id text default null)
returns table (
  company_id text,
  profile_id uuid,
  member_id text,
  full_name text,
  email text,
  role text,
  role_label text,
  role_id uuid,
  status text,
  created_at timestamptz,
  updated_at timestamptz,
  disabled_at timestamptz,
  left_at timestamptz,
  last_active_at timestamptz
)
language plpgsql
security definer
set search_path = public, app_private, pg_temp
as $$
declare
  clean_company_id text := nullif(trim(coalesce(target_company_id, '')), '');
begin
  if not app_private.is_quest_admin() then
    raise exception 'Platform admin access required';
  end if;

  return query
  select
    cm.company_id,
    cm.profile_id,
    coalesce(p.member_id, '') as member_id,
    coalesce(p.full_name, tm.full_name, p.email, cm.profile_id::text) as full_name,
    coalesce(p.email, tm.email, '') as email,
    cm.role,
    coalesce(r.name, initcap(replace(cm.role, '_', ' '))) as role_label,
    ura.role_id,
    cm.status,
    cm.created_at,
    cm.updated_at,
    cm.disabled_at,
    cm.left_at,
    cm.last_active_at
  from public.company_memberships cm
  left join public.profiles p on p.id = cm.profile_id
  left join public.team_members tm on tm.id = p.member_id
  left join lateral (
    select assignment.role_id
    from public.user_role_assignments assignment
    where assignment.company_id = cm.company_id
      and assignment.profile_id = cm.profile_id
    order by assignment.created_at desc
    limit 1
  ) ura on true
  left join public.roles r on r.id = ura.role_id
  where clean_company_id is null
     or cm.company_id = clean_company_id
  order by cm.company_id, case when cm.status = 'active' then 0 else 1 end, coalesce(p.full_name, tm.full_name, p.email, cm.profile_id::text);
end;
$$;

revoke all on function public.list_platform_company_members(text) from public, anon;
grant execute on function public.list_platform_company_members(text) to authenticated;

create or replace function public.manage_platform_company(
  target_company_id text,
  platform_action text,
  review_note text default null
)
returns text
language plpgsql
security definer
set search_path = public, app_private, pg_temp
as $$
declare
  clean_company_id text := trim(coalesce(target_company_id, ''));
  clean_action text := lower(trim(coalesce(platform_action, '')));
  next_status text;
begin
  if not app_private.is_quest_admin() then
    raise exception 'Platform admin access required';
  end if;

  if clean_company_id = '' then
    raise exception 'Company is required';
  end if;

  if not exists (select 1 from public.companies c where c.id = clean_company_id) then
    raise exception 'Company not found';
  end if;

  next_status := case clean_action
    when 'approve' then 'active'
    when 'activate' then 'active'
    when 'reactivate' then 'active'
    when 'suspend' then 'suspended'
    when 'disable' then 'suspended'
    when 'archive' then 'canceled'
    when 'delete' then 'canceled'
    when 'cancel' then 'canceled'
    when 'pending' then 'pending_review'
    else ''
  end;

  if next_status = '' then
    raise exception 'Unsupported platform action';
  end if;

  insert into public.company_subscriptions (
    company_id,
    status,
    plan_code,
    amount_cents,
    currency,
    current_period_end,
    updated_at
  )
  values (
    clean_company_id,
    next_status,
    case when clean_company_id = 'lumen' then 'manual_platform' else 'quest_company_300' end,
    case when clean_company_id = 'lumen' then 0 else 30000 end,
    'usd',
    case when next_status = 'active' then now() + interval '30 days' else null end,
    now()
  )
  on conflict (company_id) do update
    set status = excluded.status,
        plan_code = coalesce(public.company_subscriptions.plan_code, excluded.plan_code),
        amount_cents = coalesce(public.company_subscriptions.amount_cents, excluded.amount_cents),
        currency = coalesce(public.company_subscriptions.currency, excluded.currency),
        current_period_end = case
          when excluded.status = 'active' then coalesce(public.company_subscriptions.current_period_end, excluded.current_period_end)
          else public.company_subscriptions.current_period_end
        end,
        updated_at = now();

  if next_status in ('suspended', 'canceled') then
    update public.company_invites
    set status = case when next_status = 'canceled' then 'revoked' else status end,
        updated_at = now()
    where company_id = clean_company_id
      and status = 'pending';

    update public.company_join_requests
    set status = case when next_status = 'canceled' then 'canceled' else status end,
        reviewed_by = auth.uid(),
        updated_at = now()
    where company_id = clean_company_id
      and status = 'pending';
  end if;

  insert into public.audit_events (company_id, actor_profile_id, event_type, target_type, target_id, details)
  values (
    clean_company_id,
    auth.uid(),
    'platform.company.' || clean_action,
    'company',
    clean_company_id,
    jsonb_build_object('action', clean_action, 'status', next_status, 'note', coalesce(review_note, ''))
  );

  return next_status;
end;
$$;

revoke all on function public.manage_platform_company(text, text, text) from public, anon;
grant execute on function public.manage_platform_company(text, text, text) to authenticated;
