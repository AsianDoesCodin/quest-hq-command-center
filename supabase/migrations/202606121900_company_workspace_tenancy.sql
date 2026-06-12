create table if not exists public.company_memberships (
  company_id text not null references public.companies(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  role text not null default 'member',
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (company_id, profile_id),
  constraint company_memberships_role_check check (
    role in ('member', 'worker', 'sales', 'supervisor', 'admin', 'developer', 'construction_supervisor')
  ),
  constraint company_memberships_status_check check (
    status in ('active', 'pending', 'disabled')
  )
);

alter table public.company_memberships
  add column if not exists status text not null default 'active',
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

create index if not exists company_memberships_profile_id_idx
  on public.company_memberships(profile_id);

create index if not exists company_memberships_company_status_idx
  on public.company_memberships(company_id, status);

insert into public.company_memberships (company_id, profile_id, role, status)
select company_id, profiles.id, profiles.role, 'active'
from public.profiles
cross join lateral unnest(public.profiles.company_ids) as company_id
where company_id is not null and company_id <> ''
on conflict (company_id, profile_id) do update
set role = excluded.role,
    status = excluded.status,
    updated_at = now();

drop trigger if exists company_memberships_set_updated_at on public.company_memberships;
create trigger company_memberships_set_updated_at
before update on public.company_memberships
for each row execute function public.set_updated_at();

alter table public.job_files
  alter column job_id drop not null,
  add column if not exists folder text not null default 'shared';

update public.job_files
set folder = case
  when lower(category) like '%photo%' then 'photos'
  when lower(category) like '%permit%' then 'permits'
  when lower(category) like '%contract%' then 'contracts'
  when lower(category) like '%form%' then 'forms'
  when lower(category) like '%archive%' then 'archive'
  when job_id is not null then 'jobs'
  else 'shared'
end
where folder = 'shared';

create index if not exists job_files_company_folder_idx
  on public.job_files(company_id, folder, created_at desc);

create or replace function public.refresh_job_file_count(target_job_id uuid)
returns void
language sql
set search_path = public
as $$
  update public.jobs
  set file_count = (
    select count(*)::integer
    from public.job_files
    where job_id = target_job_id
      and deleted_at is null
  )
  where target_job_id is not null
    and id = target_job_id;
$$;

create or replace function public.job_files_refresh_job_count()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if tg_op = 'DELETE' then
    if old.job_id is not null then
      perform public.refresh_job_file_count(old.job_id);
    end if;
    return old;
  end if;

  if new.job_id is not null then
    perform public.refresh_job_file_count(new.job_id);
  end if;

  if tg_op = 'UPDATE' and old.job_id is distinct from new.job_id and old.job_id is not null then
    perform public.refresh_job_file_count(old.job_id);
  end if;

  return new;
end;
$$;
