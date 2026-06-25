create extension if not exists pgcrypto;

alter table public.company_plugins
  drop constraint if exists company_plugins_known_plugin_check;

alter table public.company_plugins
  add constraint company_plugins_known_plugin_check check (
    plugin_id in ('crm', 'crm_2', 'underwriter', 'files', 'forms', 'finance', 'messages', 'calendar', 'time_clock', 'approvals', 'reporting', 'client_portal')
  );

create or replace function app_private.plugin_ids_for_preset(preset_code text)
returns text[]
language sql
stable
set search_path = public, app_private, pg_temp
as $$
  select case lower(trim(coalesce(preset_code, 'generic')))
    when 'roofing' then array['crm_2', 'underwriter', 'files', 'forms', 'finance', 'messages', 'calendar', 'approvals', 'reporting']::text[]
    when 'construction' then array['files', 'forms', 'finance', 'messages', 'calendar', 'time_clock', 'approvals', 'reporting']::text[]
    else array['crm', 'files', 'messages']::text[]
  end;
$$;

revoke all on function app_private.plugin_ids_for_preset(text) from public, anon;
grant execute on function app_private.plugin_ids_for_preset(text) to authenticated;

create or replace function app_private.permission_plugin_ids(permission text)
returns text[]
language sql
stable
set search_path = public, app_private, pg_temp
as $$
  select case
    when permission like 'crm.%' then array['crm', 'crm_2']::text[]
    when permission like 'underwriter.%' then array['underwriter']::text[]
    when permission like 'files.%' then array['files']::text[]
    when permission like 'forms.%' then array['forms']::text[]
    when permission like 'finance.%' then array['finance']::text[]
    when permission like 'messages.%' then array['messages']::text[]
    when permission like 'calendar.%' then array['calendar']::text[]
    when permission like 'client_portals.%' then array['client_portal']::text[]
    when permission in ('time.track', 'clock.manage') then array['time_clock']::text[]
    when permission like 'approvals.%' then array['approvals']::text[]
    when permission = 'team.view' then array['reporting']::text[]
    else array[]::text[]
  end;
$$;

revoke all on function app_private.permission_plugin_ids(text) from public, anon;
grant execute on function app_private.permission_plugin_ids(text) to authenticated;

create or replace function app_private.permission_plugin_id(permission text)
returns text
language sql
stable
set search_path = public, app_private, pg_temp
as $$
  select (app_private.permission_plugin_ids(permission))[1];
$$;

revoke all on function app_private.permission_plugin_id(text) from public, anon;
grant execute on function app_private.permission_plugin_id(text) to authenticated;

create or replace function app_private.permission_plugin_available(target_company_id text, permission text)
returns boolean
language sql
security definer
set search_path = public, app_private, pg_temp
stable
as $$
  with plugins as (
    select app_private.permission_plugin_ids(permission) as plugin_ids
  )
  select coalesce(array_length(plugin_ids, 1), 0) = 0
    or exists (
      select 1
      from unnest(plugin_ids) as plugin_id
      where app_private.company_has_plugin(target_company_id, plugin_id)
    )
  from plugins;
$$;

revoke all on function app_private.permission_plugin_available(text, text) from public, anon;
grant execute on function app_private.permission_plugin_available(text, text) to authenticated;

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

  if clean_plugin_id not in ('crm', 'crm_2', 'underwriter', 'files', 'forms', 'finance', 'messages', 'calendar', 'time_clock', 'approvals', 'reporting', 'client_portal') then
    raise exception 'Unsupported plugin';
  end if;

  if clean_status not in ('installed', 'disabled') then
    raise exception 'Unsupported plugin status';
  end if;

  if clean_status = 'installed' and clean_plugin_id in ('crm', 'crm_2') then
    update public.company_plugins cp
    set status = 'disabled',
        disabled_at = now(),
        updated_at = now()
    where cp.company_id = clean_company_id
      and cp.plugin_id in ('crm', 'crm_2')
      and cp.plugin_id <> clean_plugin_id
      and cp.status = 'installed';
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

create table if not exists public.client_portals (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete cascade,
  job_id uuid references public.jobs(id) on delete set null,
  title text not null,
  client_name text,
  client_email text,
  token_hash text not null unique,
  password_hash text,
  password_salt text,
  status text not null default 'active',
  created_by uuid references public.profiles(id) on delete set null,
  last_opened_at timestamptz,
  revoked_at timestamptz,
  archived_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint client_portals_status_check check (status in ('active', 'revoked', 'archived'))
);

create table if not exists public.client_portal_documents (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete cascade,
  portal_id uuid not null references public.client_portals(id) on delete cascade,
  bucket_id text not null default 'quest-client-portal-documents',
  object_path text not null unique,
  file_name text not null,
  mime_type text not null default 'application/octet-stream',
  size_bytes bigint not null default 0 check (size_bytes >= 0),
  page_count integer,
  uploaded_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.client_portal_annotations (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete cascade,
  portal_id uuid not null references public.client_portals(id) on delete cascade,
  document_id uuid references public.client_portal_documents(id) on delete cascade,
  page_number integer not null default 1,
  guest_name text,
  annotation_type text not null default 'comment',
  payload jsonb not null default '{}'::jsonb,
  resolved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.client_portal_events (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete cascade,
  portal_id uuid not null references public.client_portals(id) on delete cascade,
  event_type text not null,
  guest_name text,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists client_portals_company_status_idx on public.client_portals(company_id, status, updated_at desc);
create index if not exists client_portal_documents_portal_idx on public.client_portal_documents(portal_id, created_at desc);
create index if not exists client_portal_annotations_portal_idx on public.client_portal_annotations(portal_id, document_id, page_number, created_at);
create index if not exists client_portal_events_portal_idx on public.client_portal_events(portal_id, created_at desc);

drop trigger if exists client_portals_set_updated_at on public.client_portals;
create trigger client_portals_set_updated_at before update on public.client_portals
for each row execute function public.set_updated_at();

drop trigger if exists client_portal_documents_set_updated_at on public.client_portal_documents;
create trigger client_portal_documents_set_updated_at before update on public.client_portal_documents
for each row execute function public.set_updated_at();

drop trigger if exists client_portal_annotations_set_updated_at on public.client_portal_annotations;
create trigger client_portal_annotations_set_updated_at before update on public.client_portal_annotations
for each row execute function public.set_updated_at();

alter table public.client_portals enable row level security;
alter table public.client_portal_documents enable row level security;
alter table public.client_portal_annotations enable row level security;
alter table public.client_portal_events enable row level security;

create policy "members read client portals" on public.client_portals
for select to authenticated
using (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.view'));

create policy "managers insert client portals" on public.client_portals
for insert to authenticated
with check (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.manage'));

create policy "managers update client portals" on public.client_portals
for update to authenticated
using (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.manage'))
with check (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.manage'));

create policy "members read portal documents" on public.client_portal_documents
for select to authenticated
using (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.view'));

create policy "managers insert portal documents" on public.client_portal_documents
for insert to authenticated
with check (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.manage'));

create policy "managers update portal documents" on public.client_portal_documents
for update to authenticated
using (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.manage'))
with check (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.manage'));

create policy "members read portal annotations" on public.client_portal_annotations
for select to authenticated
using (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.view'));

create policy "managers update portal annotations" on public.client_portal_annotations
for update to authenticated
using (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.manage'))
with check (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.manage'));

create policy "members read portal events" on public.client_portal_events
for select to authenticated
using (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.view'));

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'quest-client-portal-documents',
  'quest-client-portal-documents',
  false,
  52428800,
  array['application/pdf', 'image/png', 'image/jpeg', 'image/jpg']::text[]
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

create policy "client portal documents read staff" on storage.objects
for select to authenticated
using (
  bucket_id = 'quest-client-portal-documents'
  and app_private.is_company_member(split_part(name, '/', 1))
  and app_private.subscription_allows_access(split_part(name, '/', 1))
  and app_private.has_company_permission(split_part(name, '/', 1), 'client_portals.view')
);

create policy "client portal documents insert staff" on storage.objects
for insert to authenticated
with check (
  bucket_id = 'quest-client-portal-documents'
  and app_private.is_company_member(split_part(name, '/', 1))
  and app_private.subscription_allows_access(split_part(name, '/', 1))
  and app_private.has_company_permission(split_part(name, '/', 1), 'client_portals.manage')
);

create policy "client portal documents delete staff" on storage.objects
for delete to authenticated
using (
  bucket_id = 'quest-client-portal-documents'
  and app_private.is_company_member(split_part(name, '/', 1))
  and app_private.has_company_permission(split_part(name, '/', 1), 'client_portals.manage')
);

grant select, insert, update on public.client_portals, public.client_portal_documents, public.client_portal_annotations to authenticated;
grant select on public.client_portal_events to authenticated;

insert into public.company_plugins (company_id, plugin_id, status, installed_by, installed_at, disabled_at, updated_at)
values ('lumen', 'client_portal', 'installed', null, now(), null, now())
on conflict (company_id, plugin_id) do update
  set status = 'installed',
      disabled_at = null,
      updated_at = now();
