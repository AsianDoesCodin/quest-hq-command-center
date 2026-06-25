create or replace function app_private.workspace_icon_keys()
returns text[]
language sql
stable
security definer
set search_path = app_private, pg_temp
as $$
  select array[
    'home',
    'building',
    'store',
    'warehouse',
    'briefcase',
    'tools',
    'tool',
    'hammer',
    'helmet',
    'ruler',
    'truck',
    'delivery',
    'users',
    'messages',
    'calendar',
    'folder',
    'chart',
    'shield',
    'star',
    'contacts',
    'checklist',
    'approved',
    'map-pin',
    'map',
    'paint',
    'plugin',
    'alerts',
    'book',
    'receipt',
    'clock',
    'camera',
    'photo',
    'file',
    'database',
    'lock',
    'key',
    'flag',
    'partner',
    'support',
    'target',
    'rocket',
    'bolt',
    'package',
    'desktop',
    'cloud',
    'mail',
    'phone',
    'headset'
  ]::text[];
$$;

create or replace function app_private.normalize_workspace_icon_key(input_icon_key text)
returns text
language sql
stable
security definer
set search_path = app_private, pg_temp
as $$
  select case
    when lower(trim(coalesce(input_icon_key, ''))) = any(app_private.workspace_icon_keys())
      then lower(trim(coalesce(input_icon_key, '')))
    else 'home'
  end;
$$;

revoke all on function app_private.workspace_icon_keys() from public, anon;
revoke all on function app_private.normalize_workspace_icon_key(text) from public, anon;

update public.companies
set icon_key = app_private.normalize_workspace_icon_key(icon_key)
where icon_key is null
   or icon_key <> app_private.normalize_workspace_icon_key(icon_key);

alter table public.companies
  drop constraint if exists companies_icon_key_check;

alter table public.companies
  add constraint companies_icon_key_check
  check (
    icon_key in (
      'home',
      'building',
      'store',
      'warehouse',
      'briefcase',
      'tools',
      'tool',
      'hammer',
      'helmet',
      'ruler',
      'truck',
      'delivery',
      'users',
      'messages',
      'calendar',
      'folder',
      'chart',
      'shield',
      'star',
      'contacts',
      'checklist',
      'approved',
      'map-pin',
      'map',
      'paint',
      'plugin',
      'alerts',
      'book',
      'receipt',
      'clock',
      'camera',
      'photo',
      'file',
      'database',
      'lock',
      'key',
      'flag',
      'partner',
      'support',
      'target',
      'rocket',
      'bolt',
      'package',
      'desktop',
      'cloud',
      'mail',
      'phone',
      'headset'
    )
  );

create or replace function public.create_company_workspace(
  company_name text,
  preset_code text default 'generic',
  icon_key text default 'home',
  owner_email text default null
)
returns text
language plpgsql
security definer
set search_path = public, app_private, pg_temp
as $$
declare
  clean_name text := trim(coalesce(company_name, ''));
  clean_preset text := lower(trim(coalesce(preset_code, 'generic')));
  clean_icon text := app_private.normalize_workspace_icon_key(icon_key);
  clean_owner_email text := lower(trim(coalesce(owner_email, '')));
  base_id text;
  v_company_id text;
  owner_profile_id uuid := auth.uid();
  owner_role_id uuid;
  desired_plugins text[] := app_private.plugin_ids_for_preset(clean_preset);
  desired_plugin_id text;
  creator_is_platform_admin boolean := app_private.is_quest_admin();
  owned_workspace_count integer := 0;
begin
  if auth.uid() is null then
    raise exception 'Authentication required';
  end if;

  if clean_name = '' then
    raise exception 'Company name is required';
  end if;

  if clean_preset not in ('roofing', 'construction', 'generic') then
    clean_preset := 'generic';
    desired_plugins := app_private.plugin_ids_for_preset(clean_preset);
  end if;

  if clean_owner_email <> '' and not creator_is_platform_admin then
    raise exception 'Platform admin access required to create for another owner';
  end if;

  if clean_owner_email <> '' then
    select p.id
      into owner_profile_id
    from public.profiles p
    where lower(p.email) = clean_owner_email
    limit 1;

    if owner_profile_id is null then
      raise exception 'Owner profile not found';
    end if;
  end if;

  select count(distinct cm.company_id)::integer
    into owned_workspace_count
  from public.company_memberships cm
  where cm.profile_id = owner_profile_id
    and cm.role = 'owner'
    and cm.status = 'active';

  if not creator_is_platform_admin and owned_workspace_count >= 3 then
    raise exception 'Workspace limit reached'
      using detail = 'Users can own up to 3 workspaces.';
  end if;

  base_id := trim(both '-' from regexp_replace(lower(clean_name), '[^a-z0-9]+', '-', 'g'));
  if base_id = '' then
    base_id := 'company';
  end if;

  v_company_id := base_id;
  while exists (select 1 from public.companies c where c.id = v_company_id) loop
    v_company_id := base_id || '-' || lower(substr(replace(gen_random_uuid()::text, '-', ''), 1, 6));
  end loop;

  insert into public.companies (id, name, short_name, color, label, pill, icon_key)
  values (v_company_id, clean_name, clean_name, '#f0b23b', clean_name, 'pill-' || v_company_id, clean_icon);

  insert into public.company_subscriptions (company_id, status)
  values (v_company_id, 'pending_review')
  on conflict (company_id) do update
    set status = 'pending_review',
        updated_at = now();

  insert into public.company_memberships (company_id, profile_id, role, status)
  values (v_company_id, owner_profile_id, 'owner', 'active')
  on conflict (company_id, profile_id) do update
    set role = 'owner',
        status = 'active',
        updated_at = now();

  update public.profiles p
  set approved = true,
      role = case when p.role = 'member' then 'admin' else p.role end,
      company_ids = array(
        select distinct unnest(coalesce(p.company_ids, '{}'::text[]) || array[v_company_id])
      )
  where p.id = owner_profile_id;

  insert into public.roles (company_id, name, color, priority, is_system, created_by)
  values (v_company_id, 'Owner', '#f0b23b', 1000, true, auth.uid())
  returning id into owner_role_id;

  insert into public.role_permissions (role_id, permission_key, effect)
  values (owner_role_id, '*', 'allow')
  on conflict (role_id, permission_key) do nothing;

  insert into public.user_role_assignments (company_id, profile_id, role_id, assigned_by)
  values (v_company_id, owner_profile_id, owner_role_id, auth.uid())
  on conflict do nothing;

  foreach desired_plugin_id in array desired_plugins loop
    insert into public.company_plugins (company_id, plugin_id, status, installed_by, installed_at, disabled_at, updated_at)
    values (v_company_id, desired_plugin_id, 'installed', auth.uid(), now(), null, now())
    on conflict (company_id, plugin_id) do nothing;
  end loop;

  insert into public.audit_events (company_id, actor_profile_id, event_type, target_type, target_id, details)
  values (
    v_company_id,
    auth.uid(),
    'company.created',
    'company',
    v_company_id,
    jsonb_build_object(
      'name',
      clean_name,
      'access_status',
      'pending_review',
      'preset_code',
      clean_preset,
      'plugin_ids',
      desired_plugins,
      'icon_key',
      clean_icon,
      'owner_profile_id',
      owner_profile_id,
      'owner_email',
      clean_owner_email
    )
  );

  return v_company_id;
end;
$$;

revoke all on function public.create_company_workspace(text, text, text, text) from public, anon;
grant execute on function public.create_company_workspace(text, text, text, text) to authenticated;

create or replace function public.update_company_workspace(
  target_company_id text,
  workspace_name text,
  icon_key text
)
returns text
language plpgsql
security definer
set search_path = public, app_private, pg_temp
as $$
declare
  clean_company_id text := trim(coalesce(target_company_id, ''));
  clean_name text := trim(coalesce(workspace_name, ''));
  clean_icon text := app_private.normalize_workspace_icon_key(icon_key);
begin
  if auth.uid() is null then
    raise exception 'Authentication required';
  end if;

  if clean_company_id = '' then
    raise exception 'Company is required';
  end if;

  if clean_name = '' then
    raise exception 'Workspace name is required';
  end if;

  if not (app_private.is_company_admin(clean_company_id) or app_private.is_quest_admin()) then
    raise exception 'Workspace admin access required';
  end if;

  update public.companies c
  set name = clean_name,
      short_name = clean_name,
      label = clean_name,
      icon_key = clean_icon
  where c.id = clean_company_id;

  if not found then
    raise exception 'Company not found';
  end if;

  insert into public.audit_events (company_id, actor_profile_id, event_type, target_type, target_id, details)
  values (
    clean_company_id,
    auth.uid(),
    'company.updated',
    'company',
    clean_company_id,
    jsonb_build_object('name', clean_name, 'icon_key', clean_icon)
  );

  return clean_company_id;
end;
$$;

revoke all on function public.update_company_workspace(text, text, text) from public, anon;
grant execute on function public.update_company_workspace(text, text, text) to authenticated;
