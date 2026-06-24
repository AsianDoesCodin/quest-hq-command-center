alter table public.company_plugins
  drop constraint if exists company_plugins_known_plugin_check;

alter table public.company_plugins
  add constraint company_plugins_known_plugin_check check (
    plugin_id in ('crm', 'crm_2', 'files', 'forms', 'finance', 'messages', 'calendar', 'time_clock', 'approvals', 'reporting')
  );

create or replace function app_private.plugin_ids_for_preset(preset_code text)
returns text[]
language sql
stable
set search_path = public, app_private, pg_temp
as $$
  select case lower(trim(coalesce(preset_code, 'generic')))
    when 'roofing' then array['crm', 'crm_2', 'files', 'forms', 'finance', 'messages', 'calendar', 'approvals', 'reporting']::text[]
    when 'construction' then array['files', 'forms', 'finance', 'messages', 'calendar', 'time_clock', 'approvals', 'reporting']::text[]
    else array['crm', 'files', 'messages']::text[]
  end;
$$;

revoke all on function app_private.plugin_ids_for_preset(text) from public, anon;
grant execute on function app_private.plugin_ids_for_preset(text) to authenticated;

create or replace function app_private.permission_plugin_id(permission text)
returns text
language sql
stable
set search_path = public, app_private, pg_temp
as $$
  select case
    when permission like 'crm.%' then 'crm'
    when permission like 'underwriter.%' then 'crm_2'
    when permission like 'files.%' then 'files'
    when permission like 'forms.%' then 'forms'
    when permission like 'finance.%' then 'finance'
    when permission like 'messages.%' then 'messages'
    when permission like 'calendar.%' then 'calendar'
    when permission in ('time.track', 'clock.manage') then 'time_clock'
    when permission like 'approvals.%' then 'approvals'
    when permission = 'team.view' then 'reporting'
    else null
  end;
$$;

revoke all on function app_private.permission_plugin_id(text) from public, anon;
grant execute on function app_private.permission_plugin_id(text) to authenticated;

create or replace function public.set_company_plugin(
  target_company_id text,
  target_plugin_id text,
  next_status text
)
returns text
language plpgsql
security definer
set search_path = public, app_private, pg_temp
as $$
declare
  clean_company_id text := trim(coalesce(target_company_id, ''));
  clean_plugin_id text := lower(trim(coalesce(target_plugin_id, '')));
  clean_status text := lower(trim(coalesce(next_status, '')));
begin
  if auth.uid() is null then
    raise exception 'Authentication required';
  end if;

  if not (app_private.is_company_admin(clean_company_id) or app_private.is_quest_admin()) then
    raise exception 'Plugin admin access required';
  end if;

  if clean_plugin_id not in ('crm', 'crm_2', 'files', 'forms', 'finance', 'messages', 'calendar', 'time_clock', 'approvals', 'reporting') then
    raise exception 'Unsupported plugin';
  end if;

  if clean_status not in ('installed', 'disabled') then
    raise exception 'Unsupported plugin status';
  end if;

  insert into public.company_plugins (
    company_id,
    plugin_id,
    status,
    installed_by,
    installed_at,
    disabled_at,
    updated_at
  )
  values (
    clean_company_id,
    clean_plugin_id,
    clean_status,
    case when clean_status = 'installed' then auth.uid() else null end,
    case when clean_status = 'installed' then now() else null end,
    case when clean_status = 'disabled' then now() else null end,
    now()
  )
  on conflict (company_id, plugin_id) do update
    set status = excluded.status,
        installed_by = case when excluded.status = 'installed' then auth.uid() else public.company_plugins.installed_by end,
        installed_at = case when excluded.status = 'installed' then coalesce(public.company_plugins.installed_at, now()) else public.company_plugins.installed_at end,
        disabled_at = case when excluded.status = 'disabled' then now() else null end,
        updated_at = now();

  insert into public.audit_events (company_id, actor_profile_id, event_type, target_type, target_id, details)
  values (
    clean_company_id,
    auth.uid(),
    case when clean_status = 'installed' then 'plugin.installed' else 'plugin.disabled' end,
    'company_plugin',
    clean_plugin_id,
    jsonb_build_object('plugin_id', clean_plugin_id, 'status', clean_status)
  );

  return clean_status;
end;
$$;

revoke all on function public.set_company_plugin(text, text, text) from public, anon;
grant execute on function public.set_company_plugin(text, text, text) to authenticated;

insert into public.company_plugins (company_id, plugin_id, status, installed_by, installed_at, updated_at)
select 'lumen', 'crm_2', 'installed', null, now(), now()
on conflict (company_id, plugin_id) do update
  set status = 'installed',
      disabled_at = null,
      updated_at = now();
