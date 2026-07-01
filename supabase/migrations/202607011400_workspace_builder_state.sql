-- Workspace Builder: shared, Supabase-backed state for the no-code workspace builder
-- plugin. The builder's nested data (workspaces -> apps -> fields/items/automations/
-- activity) is stored as a single JSON document per company so it can be shared across
-- users and devices. Access is gated by the existing workspaces.view / workspaces.manage
-- permissions (this is the per-company builder, NOT the company tenancy).

create table if not exists public.workspace_builder_state (
  company_id text primary key references public.companies(id) on delete cascade,
  doc jsonb not null default '{"workspaces":[]}'::jsonb,
  updated_by uuid references public.profiles(id) on delete set null,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

drop trigger if exists workspace_builder_state_set_updated_at on public.workspace_builder_state;
create trigger workspace_builder_state_set_updated_at before update on public.workspace_builder_state
for each row execute function public.set_updated_at();

alter table public.workspace_builder_state enable row level security;

drop policy if exists "members read workspace builder" on public.workspace_builder_state;
create policy "members read workspace builder" on public.workspace_builder_state
for select to authenticated
using (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'workspaces.view'));

drop policy if exists "managers insert workspace builder" on public.workspace_builder_state;
create policy "managers insert workspace builder" on public.workspace_builder_state
for insert to authenticated
with check (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'workspaces.manage'));

drop policy if exists "managers update workspace builder" on public.workspace_builder_state;
create policy "managers update workspace builder" on public.workspace_builder_state
for update to authenticated
using (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'workspaces.manage'))
with check (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'workspaces.manage'));

grant select, insert, update on public.workspace_builder_state to authenticated;
