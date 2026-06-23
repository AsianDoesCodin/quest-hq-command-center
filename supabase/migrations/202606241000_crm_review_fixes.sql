-- Review fixes for the CRM core migration.

-- Activities are an audit/timeline; deleting an account should not erase them.
alter table public.activities drop constraint if exists activities_account_id_fkey;
alter table public.activities
  add constraint activities_account_id_fkey
  foreign key (account_id) references public.accounts(id) on delete set null;

-- Widen money columns so large commercial deals/contacts don't overflow numeric(12,2).
alter table public.deals alter column value type numeric(14, 2);
alter table public.contacts alter column value type numeric(14, 2);
