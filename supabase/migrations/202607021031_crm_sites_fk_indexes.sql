create index if not exists crm_sites_contact_fk_idx
  on public.crm_sites(contact_id)
  where contact_id is not null;

create index if not exists crm_sites_created_by_idx
  on public.crm_sites(created_by)
  where created_by is not null;
