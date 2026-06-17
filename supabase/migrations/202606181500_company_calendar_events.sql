create table if not exists public.calendar_events (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete cascade,
  title text not null,
  description text not null default '',
  event_type text not null default 'Company event',
  starts_at timestamptz not null,
  ends_at timestamptz,
  all_day boolean not null default false,
  visibility text not null default 'company' check (visibility in ('company', 'private')),
  linked_type text not null default '' check (linked_type in ('', 'job', 'task', 'form', 'invoice')),
  linked_id text not null default '',
  assigned_profile_id text not null default '',
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists calendar_events_company_starts_idx on public.calendar_events(company_id, starts_at);
create index if not exists calendar_events_assigned_profile_idx on public.calendar_events(company_id, assigned_profile_id);
create index if not exists calendar_events_created_by_idx on public.calendar_events(company_id, created_by);
create index if not exists calendar_events_link_idx on public.calendar_events(company_id, linked_type, linked_id);

drop trigger if exists set_calendar_events_updated_at on public.calendar_events;
create trigger set_calendar_events_updated_at
before update on public.calendar_events
for each row execute function public.set_updated_at();

alter table public.calendar_events enable row level security;

drop policy if exists "calendar events visible to allowed members" on public.calendar_events;
create policy "calendar events visible to allowed members"
on public.calendar_events
for select
to authenticated
using (
  app_private.is_company_member(company_id)
  and app_private.has_company_permission(company_id, 'calendar.view')
  and (
    visibility = 'company'
    or created_by = (select auth.uid())
    or assigned_profile_id in (
      (select auth.uid())::text,
      coalesce((select member_id from public.profiles where id = (select auth.uid())), '')
    )
    or app_private.has_company_permission(company_id, 'calendar.view_team')
  )
);

drop policy if exists "calendar events insert by managers" on public.calendar_events;
create policy "calendar events insert by managers"
on public.calendar_events
for insert
to authenticated
with check (
  app_private.is_company_member(company_id)
  and app_private.has_company_permission(company_id, 'calendar.manage')
  and created_by = (select auth.uid())
);

drop policy if exists "calendar events update by managers or creator" on public.calendar_events;
create policy "calendar events update by managers or creator"
on public.calendar_events
for update
to authenticated
using (
  app_private.is_company_member(company_id)
  and (
    app_private.has_company_permission(company_id, 'calendar.manage')
    or created_by = (select auth.uid())
  )
)
with check (
  app_private.is_company_member(company_id)
  and (
    app_private.has_company_permission(company_id, 'calendar.manage')
    or created_by = (select auth.uid())
  )
);

drop policy if exists "calendar events delete by managers or creator" on public.calendar_events;
create policy "calendar events delete by managers or creator"
on public.calendar_events
for delete
to authenticated
using (
  app_private.is_company_member(company_id)
  and (
    app_private.has_company_permission(company_id, 'calendar.manage')
    or created_by = (select auth.uid())
  )
);

grant select, insert, update, delete on public.calendar_events to authenticated;

insert into public.role_permissions (role_id, permission_key, effect)
select id, 'calendar.view', 'allow'
from public.roles
where lower(name) in ('owner', 'admin', 'manager', 'staff', 'member')
on conflict (role_id, permission_key) do nothing;

insert into public.role_permissions (role_id, permission_key, effect)
select id, permission_key, 'allow'
from public.roles
cross join (values ('calendar.manage'), ('calendar.view_team')) as permissions(permission_key)
where lower(name) in ('owner', 'admin', 'manager')
on conflict (role_id, permission_key) do nothing;
