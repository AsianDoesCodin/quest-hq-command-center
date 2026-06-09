create extension if not exists pgcrypto;

create table if not exists public.companies (
  id text primary key,
  name text not null,
  short_name text not null,
  color text,
  created_at timestamptz not null default now()
);

create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete restrict,
  name text not null,
  contact_name text,
  email text,
  phone text,
  address text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete restrict,
  client_id uuid references public.clients(id) on delete set null,
  client_name text,
  name text not null,
  contact_name text,
  site_address text,
  job_type text not null default 'Roofing',
  stage text not null default 'Lead',
  priority text not null default 'Medium',
  owner_name text,
  scope text,
  start_date date,
  due_date date,
  estimate_total numeric(12, 2) not null default 0,
  invoice_total numeric(12, 2) not null default 0,
  task_count integer not null default 0,
  file_count integer not null default 0,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.job_activity (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  source text not null default 'Quest HQ',
  event_type text not null,
  message text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists clients_company_id_idx on public.clients(company_id);
create index if not exists jobs_company_id_idx on public.jobs(company_id);
create index if not exists jobs_client_id_idx on public.jobs(client_id);
create index if not exists jobs_stage_idx on public.jobs(stage);
create index if not exists jobs_priority_idx on public.jobs(priority);
create index if not exists job_activity_job_id_created_at_idx on public.job_activity(job_id, created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists clients_set_updated_at on public.clients;
create trigger clients_set_updated_at
before update on public.clients
for each row execute function public.set_updated_at();

drop trigger if exists jobs_set_updated_at on public.jobs;
create trigger jobs_set_updated_at
before update on public.jobs
for each row execute function public.set_updated_at();

alter table public.companies enable row level security;
alter table public.clients enable row level security;
alter table public.jobs enable row level security;
alter table public.job_activity enable row level security;

drop policy if exists "demo_read_companies" on public.companies;
create policy "demo_read_companies" on public.companies for select to anon, authenticated using (true);

drop policy if exists "demo_insert_companies" on public.companies;
create policy "demo_insert_companies" on public.companies for insert to anon, authenticated with check (true);

drop policy if exists "demo_update_companies" on public.companies;
create policy "demo_update_companies" on public.companies for update to anon, authenticated using (true) with check (true);

drop policy if exists "demo_delete_companies" on public.companies;
create policy "demo_delete_companies" on public.companies for delete to anon, authenticated using (true);

drop policy if exists "demo_read_clients" on public.clients;
create policy "demo_read_clients" on public.clients for select to anon, authenticated using (true);

drop policy if exists "demo_read_jobs" on public.jobs;
create policy "demo_read_jobs" on public.jobs for select to anon, authenticated using (true);

drop policy if exists "demo_insert_jobs" on public.jobs;
create policy "demo_insert_jobs" on public.jobs for insert to anon, authenticated with check (true);

drop policy if exists "demo_update_jobs" on public.jobs;
create policy "demo_update_jobs" on public.jobs for update to anon, authenticated using (true) with check (true);

drop policy if exists "demo_delete_jobs" on public.jobs;
create policy "demo_delete_jobs" on public.jobs for delete to anon, authenticated using (true);

drop policy if exists "demo_read_job_activity" on public.job_activity;
create policy "demo_read_job_activity" on public.job_activity for select to anon, authenticated using (true);

insert into public.companies (id, name, short_name, color) values
  ('quest-roofing', 'Quest Roofing', 'Roofing', '#f45d22'),
  ('quest-drafting', 'Quest Drafting', 'Drafting', '#2563eb'),
  ('lumen', 'Lumen', 'Lumen', '#7c3aed')
on conflict (id) do update set name = excluded.name, short_name = excluded.short_name, color = excluded.color;
