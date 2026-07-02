-- CRM linked transfer model:
-- Contacts remain the shared customer/person record. Sites hold property/address
-- data once, then quotes and jobs reference the same site instead of copying it.

create table if not exists public.crm_sites (
  id text primary key,
  company_id text not null references public.companies(id) on delete cascade,
  contact_id text references public.contacts(id) on delete cascade,
  account_id text references public.accounts(id) on delete set null,
  label text not null default 'Primary site',
  address text not null default '',
  roof_system text not null default '',
  secondary_roof_system text not null default '',
  has_multiple_roof_systems boolean not null default false,
  notes text not null default '',
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.deals
  add column if not exists site_id text references public.crm_sites(id) on delete set null;

alter table public.jobs
  add column if not exists contact_id text references public.contacts(id) on delete set null,
  add column if not exists site_id text references public.crm_sites(id) on delete set null;

alter table public.activities
  add column if not exists contact_id text references public.contacts(id) on delete set null,
  add column if not exists site_id text references public.crm_sites(id) on delete set null,
  add column if not exists deal_id text references public.deals(id) on delete set null,
  add column if not exists job_id uuid references public.jobs(id) on delete set null;

create index if not exists crm_sites_company_contact_idx on public.crm_sites(company_id, contact_id);
create index if not exists crm_sites_account_idx on public.crm_sites(account_id) where account_id is not null;
create index if not exists deals_site_idx on public.deals(site_id) where site_id is not null;
create index if not exists jobs_contact_idx on public.jobs(contact_id) where contact_id is not null;
create index if not exists jobs_site_idx on public.jobs(site_id) where site_id is not null;
create index if not exists activities_contact_idx on public.activities(contact_id, created_at desc) where contact_id is not null;
create index if not exists activities_site_idx on public.activities(site_id, created_at desc) where site_id is not null;
create index if not exists activities_deal_idx on public.activities(deal_id, created_at desc) where deal_id is not null;
create index if not exists activities_job_idx on public.activities(job_id, created_at desc) where job_id is not null;

drop trigger if exists crm_sites_set_updated_at on public.crm_sites;
create trigger crm_sites_set_updated_at before update on public.crm_sites
for each row execute function public.set_updated_at();

alter table public.crm_sites enable row level security;

drop policy if exists "crm_sites members read" on public.crm_sites;
create policy "crm_sites members read" on public.crm_sites for select to authenticated
  using (company_id = any(public.current_company_ids()) or app_private.is_company_member(company_id));

drop policy if exists "crm_sites members insert" on public.crm_sites;
create policy "crm_sites members insert" on public.crm_sites for insert to authenticated
  with check (company_id = any(public.current_company_ids()) or app_private.is_company_member(company_id));

drop policy if exists "crm_sites members update" on public.crm_sites;
create policy "crm_sites members update" on public.crm_sites for update to authenticated
  using (company_id = any(public.current_company_ids()) or app_private.is_company_member(company_id))
  with check (company_id = any(public.current_company_ids()) or app_private.is_company_member(company_id));

drop policy if exists "crm_sites members delete" on public.crm_sites;
create policy "crm_sites members delete" on public.crm_sites for delete to authenticated
  using (company_id = any(public.current_company_ids()) or app_private.is_company_member(company_id));

grant select, insert, update, delete on public.crm_sites to authenticated;
