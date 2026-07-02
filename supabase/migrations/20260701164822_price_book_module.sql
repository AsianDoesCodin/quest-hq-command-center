create table if not exists public.pricebook_vendors (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete cascade,
  name text not null,
  type text not null default 'supply_house',
  account_ref text,
  color text not null default '#ED4E0D',
  last_synced_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(company_id, name)
);

create table if not exists public.pricebook_materials (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete cascade,
  name text not null,
  category text not null default 'Uncategorized',
  unit text not null default 'each',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(company_id, name)
);

create table if not exists public.pricebook_vendor_prices (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete cascade,
  vendor_id uuid not null references public.pricebook_vendors(id) on delete cascade,
  material_id uuid not null references public.pricebook_materials(id) on delete cascade,
  sku text,
  unit_cost numeric(12, 2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(company_id, vendor_id, material_id)
);

alter table public.pricebook_vendors enable row level security;
alter table public.pricebook_materials enable row level security;
alter table public.pricebook_vendor_prices enable row level security;

drop policy if exists pricebook_vendors_member_access on public.pricebook_vendors;
create policy pricebook_vendors_member_access on public.pricebook_vendors
  for all using (public.is_company_member(company_id))
  with check (public.is_company_member(company_id));

drop policy if exists pricebook_materials_member_access on public.pricebook_materials;
create policy pricebook_materials_member_access on public.pricebook_materials
  for all using (public.is_company_member(company_id))
  with check (public.is_company_member(company_id));

drop policy if exists pricebook_vendor_prices_member_access on public.pricebook_vendor_prices;
create policy pricebook_vendor_prices_member_access on public.pricebook_vendor_prices
  for all using (public.is_company_member(company_id))
  with check (public.is_company_member(company_id));

grant select, insert, update, delete on public.pricebook_vendors to authenticated;
grant select, insert, update, delete on public.pricebook_materials to authenticated;
grant select, insert, update, delete on public.pricebook_vendor_prices to authenticated;
