create table if not exists app_private.platform_admins (
  profile_id uuid primary key references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  created_by uuid references public.profiles(id) on delete set null
);

revoke all on table app_private.platform_admins from public, anon, authenticated;

create or replace function app_private.is_quest_admin()
returns boolean
language sql
security definer
set search_path = app_private, public, pg_temp
stable
as $$
  select exists (
    select 1
    from app_private.platform_admins pa
    where pa.profile_id = auth.uid()
  );
$$;

revoke all on function app_private.is_quest_admin() from public, anon;
grant execute on function app_private.is_quest_admin() to authenticated;

create or replace function public.is_platform_admin()
returns boolean
language sql
security definer
set search_path = app_private, public, pg_temp
stable
as $$
  select app_private.is_quest_admin();
$$;

revoke all on function public.is_platform_admin() from public, anon;
grant execute on function public.is_platform_admin() to authenticated;

insert into public.companies (id, name, short_name, color, label, pill)
values ('lumen', 'Lumen Marketing', 'Lumen', '#0f766e', 'Lumen', 'Platform')
on conflict (id) do update
  set name = excluded.name,
      short_name = excluded.short_name,
      color = excluded.color,
      label = excluded.label,
      pill = excluded.pill;

insert into public.company_subscriptions (company_id, status, plan_code, amount_cents, currency, current_period_end, updated_at)
values ('lumen', 'active', 'manual_platform', 0, 'usd', now() + interval '1 year', now())
on conflict (company_id) do update
  set status = 'active',
      plan_code = 'manual_platform',
      amount_cents = 0,
      currency = 'usd',
      current_period_end = coalesce(public.company_subscriptions.current_period_end, excluded.current_period_end),
      updated_at = now();

insert into public.roles (company_id, name, color, priority, is_system)
select 'lumen', 'Owner', '#0f766e', 1000, true
where not exists (
  select 1 from public.roles r
  where r.company_id = 'lumen'
    and lower(r.name) = 'owner'
);

insert into public.role_permissions (role_id, permission_key, effect)
select r.id, '*', 'allow'
from public.roles r
where r.company_id = 'lumen'
  and lower(r.name) = 'owner'
on conflict (role_id, permission_key) do nothing;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public, app_private, pg_temp
as $$
declare
  v_email text := lower(coalesce(new.email, ''));
  v_member_id text := coalesce(nullif(public.slugify_member_id(split_part(coalesce(new.email, new.id::text), '@', 1)), ''), 'member-' || left(new.id::text, 8));
  v_full_name text := coalesce(nullif(new.raw_user_meta_data ->> 'full_name', ''), nullif(new.raw_user_meta_data ->> 'name', ''), split_part(coalesce(new.email, new.id::text), '@', 1));
  v_is_lumen_owner boolean := v_email = 'info@lumenmarketingusa.com';
  v_role text := case when v_is_lumen_owner then 'admin' else 'member' end;
  v_approved boolean := v_is_lumen_owner;
  v_company_ids text[] := case when v_is_lumen_owner then array['lumen'] else '{}'::text[] end;
  v_owner_role_id uuid;
begin
  insert into public.team_members (id, name, full_name, email, color, active, company_ids)
  values (v_member_id, split_part(v_full_name, ' ', 1), v_full_name, new.email, '#' || substr(md5(coalesce(new.email, new.id::text)), 1, 6), v_approved, v_company_ids)
  on conflict (id) do update set
    name = excluded.name,
    full_name = excluded.full_name,
    email = excluded.email,
    active = excluded.active,
    company_ids = excluded.company_ids;

  insert into public.profiles (id, email, full_name, approved, role, email_verified, member_id, company_ids)
  values (new.id, new.email, v_full_name, v_approved, v_role, false, v_member_id, v_company_ids)
  on conflict (id) do update set
    email = excluded.email,
    full_name = excluded.full_name,
    member_id = excluded.member_id;

  if v_is_lumen_owner then
    insert into app_private.platform_admins (profile_id)
    values (new.id)
    on conflict (profile_id) do nothing;

    insert into public.company_memberships (company_id, profile_id, role, status)
    values ('lumen', new.id, 'owner', 'active')
    on conflict (company_id, profile_id) do update
      set role = 'owner',
          status = 'active',
          updated_at = now();

    select r.id into v_owner_role_id
    from public.roles r
    where r.company_id = 'lumen'
      and lower(r.name) = 'owner'
    limit 1;

    if v_owner_role_id is not null then
      insert into public.role_permissions (role_id, permission_key, effect)
      values (v_owner_role_id, '*', 'allow')
      on conflict (role_id, permission_key) do nothing;

      insert into public.user_role_assignments (company_id, profile_id, role_id, assigned_by)
      values ('lumen', new.id, v_owner_role_id, new.id)
      on conflict do nothing;
    end if;
  end if;

  return new;
end;
$$;

revoke execute on function public.handle_new_user() from public, anon, authenticated;

drop trigger if exists on_auth_user_created_taskmanagement on auth.users;
drop trigger if exists on_auth_user_created_quest_hq on auth.users;
create trigger on_auth_user_created_quest_hq
after insert on auth.users
for each row execute function public.handle_new_user();

do $$
declare
  v_profile_id uuid;
  v_member_id text;
  v_owner_role_id uuid;
begin
  select p.id, p.member_id
    into v_profile_id, v_member_id
  from public.profiles p
  where lower(p.email) = 'info@lumenmarketingusa.com'
  limit 1;

  if v_profile_id is not null then
    update public.profiles p
    set approved = true,
        role = case when p.role = 'member' then 'admin' else p.role end,
        company_ids = array(select distinct unnest(coalesce(p.company_ids, '{}'::text[]) || array['lumen']))
    where p.id = v_profile_id;

    update public.team_members tm
    set active = true,
        company_ids = array(select distinct unnest(coalesce(tm.company_ids, '{}'::text[]) || array['lumen']))
    where tm.id = v_member_id;

    insert into app_private.platform_admins (profile_id)
    values (v_profile_id)
    on conflict (profile_id) do nothing;

    insert into public.company_memberships (company_id, profile_id, role, status)
    values ('lumen', v_profile_id, 'owner', 'active')
    on conflict (company_id, profile_id) do update
      set role = 'owner',
          status = 'active',
          updated_at = now();

    select r.id into v_owner_role_id
    from public.roles r
    where r.company_id = 'lumen'
      and lower(r.name) = 'owner'
    limit 1;

    if v_owner_role_id is not null then
      insert into public.role_permissions (role_id, permission_key, effect)
      values (v_owner_role_id, '*', 'allow')
      on conflict (role_id, permission_key) do nothing;

      insert into public.user_role_assignments (company_id, profile_id, role_id, assigned_by)
      values ('lumen', v_profile_id, v_owner_role_id, v_profile_id)
      on conflict do nothing;
    end if;
  end if;
end;
$$;

drop policy if exists "demo_read_clients" on public.clients;
drop policy if exists "demo_read_job_activity" on public.job_activity;

drop policy if exists "role users can read tasks" on public.tasks;
create policy "role users can read tasks" on public.tasks
for select to authenticated
using (
  public.current_profile_role() = 'developer'
  or (
    company_id = any(public.current_company_ids())
    and (
      public.current_profile_role() in ('admin', 'construction_supervisor')
      or (
        public.current_profile_role() = 'supervisor'
        and (
          assignee_id = public.current_member_id()
          or creator_id = public.current_member_id()
          or exists (
            select 1 from public.profiles p
            where p.member_id = public.tasks.assignee_id
              and p.supervisor_id = public.current_member_id()
          )
        )
      )
      or (
        public.current_profile_role() = 'worker'
        and (assignee_id = public.current_member_id() or creator_id = public.current_member_id())
      )
    )
  )
);

drop policy if exists "role users can update tasks" on public.tasks;
create policy "role users can update tasks" on public.tasks
for update to authenticated
using (
  public.current_profile_role() = 'developer'
  or (
    company_id = any(public.current_company_ids())
    and (
      public.current_profile_role() in ('admin', 'construction_supervisor')
      or (
        public.current_profile_role() = 'supervisor'
        and (
          assignee_id = public.current_member_id()
          or creator_id = public.current_member_id()
          or exists (
            select 1 from public.profiles p
            where p.member_id = public.tasks.assignee_id
              and p.supervisor_id = public.current_member_id()
          )
        )
      )
      or (
        public.current_profile_role() = 'worker'
        and (assignee_id = public.current_member_id() or creator_id = public.current_member_id())
      )
    )
  )
)
with check (
  public.current_profile_role() = 'developer'
  or (
    company_id = any(public.current_company_ids())
    and (
      public.current_profile_role() in ('admin', 'construction_supervisor')
      or (
        public.current_profile_role() = 'supervisor'
        and (
          assignee_id = public.current_member_id()
          or creator_id = public.current_member_id()
          or exists (
            select 1 from public.profiles p
            where p.member_id = public.tasks.assignee_id
              and p.supervisor_id = public.current_member_id()
          )
        )
      )
      or (
        public.current_profile_role() = 'worker'
        and (assignee_id = public.current_member_id() or creator_id = public.current_member_id())
      )
    )
  )
);

do $$
declare
  demo_companies text[] := array['roofing', 'drafting', 'quest-roofing', 'quest-drafting'];
begin
  update public.jobs set deal_id = null where company_id = any(demo_companies);
  update public.deals set job_id = null where company_id = any(demo_companies);

  delete from public.message_attachments where company_id = any(demo_companies);
  delete from public.messages where company_id = any(demo_companies);
  delete from public.message_reads where company_id = any(demo_companies);
  delete from public.message_conversation_access where company_id = any(demo_companies);
  delete from public.message_conversations where company_id = any(demo_companies);

  delete from public.finance_payments where company_id = any(demo_companies);
  delete from public.finance_expenses where company_id = any(demo_companies);
  delete from public.finance_invoices where company_id = any(demo_companies);
  delete from public.finance_vendors where company_id = any(demo_companies);

  delete from public.job_activity ja
  using public.jobs j
  where ja.job_id = j.id
    and j.company_id = any(demo_companies);

  delete from public.job_files where company_id = any(demo_companies);
  delete from public.notifications where company_id = any(demo_companies) or task_id = 'general-shift';
  delete from public.tasks where company_id = any(demo_companies) or id = 'general-shift';
  delete from public.activities where company_id = any(demo_companies);
  delete from public.calendar_events where company_id = any(demo_companies);
  delete from public.deals where company_id = any(demo_companies);
  delete from public.jobs where company_id = any(demo_companies);
  delete from public.contacts where company_id = any(demo_companies);
  delete from public.accounts where company_id = any(demo_companies);
  delete from public.clients where company_id = any(demo_companies);
  delete from public.pipeline_stages where company_id = any(demo_companies);
  delete from public.resource_acl where company_id = any(demo_companies);
  delete from public.field_permissions where company_id = any(demo_companies);
  delete from public.company_join_requests where company_id = any(demo_companies);
  delete from public.company_invites where company_id = any(demo_companies);
  delete from public.user_role_assignments where company_id = any(demo_companies);
  delete from public.role_permissions
  where role_id in (select id from public.roles where company_id = any(demo_companies));
  delete from public.roles where company_id = any(demo_companies);
  delete from public.company_memberships where company_id = any(demo_companies);
  delete from public.company_subscriptions where company_id = any(demo_companies);
  delete from public.audit_events where company_id = any(demo_companies);

  update public.team_members tm
  set company_ids = coalesce((
    select array_agg(company_id)
    from unnest(tm.company_ids) as company_id
    where company_id <> all(demo_companies)
  ), '{}'::text[])
  where tm.company_ids && demo_companies;

  delete from public.companies where id = any(demo_companies);
end;
$$;
