-- Client portal: measurement unit for the calibrated ruler scale (ft / in / cm).
alter table public.client_portal_documents
  add column if not exists scale_unit text not null default 'ft';

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'client_portal_documents_scale_unit_check'
  ) then
    alter table public.client_portal_documents
      add constraint client_portal_documents_scale_unit_check
      check (scale_unit in ('ft', 'in', 'cm'));
  end if;
end$$;
