-- Real CRM core: accounts (organizations), deals (opportunities), activities
-- (unified timeline). Contacts become people linked to an account; jobs link
-- back to the account + originating deal. All company-scoped, same RLS shape
-- as contacts/pipeline_stages (active company member, or company in profile).

-- ---------------------------------------------------------------------------
-- Accounts (organizations / customers)
-- ---------------------------------------------------------------------------
create table if not exists public.accounts (
  id text primary key,
  company_id text not null references public.companies(id) on delete cascade,
  name text not null,
  type text not null default 'Customer',
  industry text not null default '',
  website text not null default '',
  phone text not null default '',
  email text not null default '',
  address text not null default '',
  owner_name text not null default '',
  status text not null default 'Active',
  notes text not null default '',
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Deals (sales opportunities) -> stage resolves via pipeline_stages kind=deals
-- ---------------------------------------------------------------------------
create table if not exists public.deals (
  id text primary key,
  company_id text not null references public.companies(id) on delete cascade,
  account_id text references public.accounts(id) on delete set null,
  primary_contact_id text references public.contacts(id) on delete set null,
  name text not null,
  stage text not null default '',
  status text not null default 'open',
  value numeric(14, 2) not null default 0,
  probability integer not null default 0,
  close_date date,
  owner_name text not null default '',
  source text not null default '',
  job_id uuid references public.jobs(id) on delete set null,
  notes text not null default '',
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint deals_status_check check (status in ('open', 'won', 'lost'))
);

-- ---------------------------------------------------------------------------
-- Activities (unified timeline across accounts/contacts/deals/jobs)
-- ---------------------------------------------------------------------------
create table if not exists public.activities (
  id text primary key,
  company_id text not null references public.companies(id) on delete cascade,
  type text not null default 'note',
  subject text not null default '',
  body text not null default '',
  related_type text not null default '',
  related_id text not null default '',
  account_id text references public.accounts(id) on delete set null,
  due_at timestamptz,
  completed_at timestamptz,
  owner_name text not null default '',
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint activities_type_check check (type in ('note', 'call', 'email', 'meeting', 'task', 'stage_change', 'system'))
);

-- ---------------------------------------------------------------------------
-- Extend contacts (people) and jobs with CRM links
-- ---------------------------------------------------------------------------
alter table public.contacts
  add column if not exists account_id text references public.accounts(id) on delete set null,
  add column if not exists title text not null default '',
  add column if not exists source text not null default '',
  add column if not exists last_activity_at timestamptz;

alter table public.jobs
  add column if not exists account_id text references public.accounts(id) on delete set null,
  add column if not exists deal_id text references public.deals(id) on delete set null;

-- ---------------------------------------------------------------------------
-- Indexes
-- ---------------------------------------------------------------------------
create index if not exists accounts_company_idx on public.accounts(company_id, name);
create index if not exists deals_company_stage_idx on public.deals(company_id, stage);
create index if not exists deals_account_idx on public.deals(account_id);
create index if not exists deals_contact_idx on public.deals(primary_contact_id);
create index if not exists activities_related_idx on public.activities(company_id, related_type, related_id, created_at desc);
create index if not exists activities_account_idx on public.activities(account_id, created_at desc);
create index if not exists contacts_account_idx on public.contacts(account_id);
create index if not exists jobs_account_idx on public.jobs(account_id);
create index if not exists jobs_deal_idx on public.jobs(deal_id);

-- ---------------------------------------------------------------------------
-- updated_at triggers
-- ---------------------------------------------------------------------------
drop trigger if exists accounts_set_updated_at on public.accounts;
create trigger accounts_set_updated_at before update on public.accounts
for each row execute function public.set_updated_at();

drop trigger if exists deals_set_updated_at on public.deals;
create trigger deals_set_updated_at before update on public.deals
for each row execute function public.set_updated_at();

drop trigger if exists activities_set_updated_at on public.activities;
create trigger activities_set_updated_at before update on public.activities
for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- RLS: active company member, or company present in caller's profile
-- ---------------------------------------------------------------------------
alter table public.accounts enable row level security;
alter table public.deals enable row level security;
alter table public.activities enable row level security;

do $$
declare
  t text;
  op text;
begin
  foreach t in array array['accounts', 'deals', 'activities'] loop
    execute format('drop policy if exists "%s members read" on public.%I', t, t);
    execute format($p$create policy "%s members read" on public.%I for select to authenticated
      using (company_id = any(public.current_company_ids()) or app_private.is_company_member(company_id))$p$, t, t);

    execute format('drop policy if exists "%s members insert" on public.%I', t, t);
    execute format($p$create policy "%s members insert" on public.%I for insert to authenticated
      with check (company_id = any(public.current_company_ids()) or app_private.is_company_member(company_id))$p$, t, t);

    execute format('drop policy if exists "%s members update" on public.%I', t, t);
    execute format($p$create policy "%s members update" on public.%I for update to authenticated
      using (company_id = any(public.current_company_ids()) or app_private.is_company_member(company_id))
      with check (company_id = any(public.current_company_ids()) or app_private.is_company_member(company_id))$p$, t, t);

    execute format('drop policy if exists "%s members delete" on public.%I', t, t);
    execute format($p$create policy "%s members delete" on public.%I for delete to authenticated
      using (company_id = any(public.current_company_ids()) or app_private.is_company_member(company_id))$p$, t, t);
  end loop;
end;
$$;

grant select, insert, update, delete on public.accounts to authenticated;
grant select, insert, update, delete on public.deals to authenticated;
grant select, insert, update, delete on public.activities to authenticated;

-- ---------------------------------------------------------------------------
-- Allow a 'deals' pipeline kind, then seed a default deals pipeline
-- ---------------------------------------------------------------------------
alter table public.pipeline_stages drop constraint if exists pipeline_stages_kind_check;
alter table public.pipeline_stages add constraint pipeline_stages_kind_check check (kind in ('jobs', 'contacts', 'deals'));

insert into public.pipeline_stages (company_id, kind, name, color, position)
select c.id, 'deals', s.name, s.color, s.position
from (values ('roofing'), ('drafting'), ('lumen'), ('quest-roofing'), ('quest-drafting')) as c(id)
cross join (values
  ('Prospect', '#9AA0A8', 0),
  ('Qualified', '#378ADD', 1),
  ('Proposal sent', '#3C7BD0', 2),
  ('Negotiation', '#C08A2B', 3),
  ('Verbal commit', '#7F77DD', 4),
  ('Won', '#639922', 5),
  ('Lost', '#E24B4A', 6)
) as s(name, color, position)
where exists (select 1 from public.companies pc where pc.id = c.id)
on conflict (company_id, kind, name) do nothing;
