-- Client portal upgrade: blueprint review & annotation system.
-- Adds document versions, per-document review status, measure calibration scale,
-- staff annotation attribution, and the RLS policies the owner side needs to
-- create annotations and log activity events directly.

-- ---------------------------------------------------------------------------
-- Document versions + review status + measure scale
-- ---------------------------------------------------------------------------
alter table public.client_portal_documents
  add column if not exists version_group_id uuid,
  add column if not exists version_number integer not null default 1,
  add column if not exists is_current boolean not null default true,
  add column if not exists review_status text not null default 'pending',
  add column if not exists scale numeric;

-- Backfill: existing rows are their own (single) version group.
update public.client_portal_documents
  set version_group_id = id
  where version_group_id is null;

alter table public.client_portal_documents
  alter column version_group_id set default gen_random_uuid();

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'client_portal_documents_review_status_check'
  ) then
    alter table public.client_portal_documents
      add constraint client_portal_documents_review_status_check
      check (review_status in ('pending', 'approved', 'revision', 'rejected'));
  end if;
end$$;

create index if not exists client_portal_documents_version_idx
  on public.client_portal_documents(portal_id, version_group_id, version_number);

-- ---------------------------------------------------------------------------
-- Annotation staff attribution (guest_name + payload.author cover the rest)
-- ---------------------------------------------------------------------------
alter table public.client_portal_annotations
  add column if not exists author_profile_id uuid references public.profiles(id) on delete set null;

create index if not exists client_portal_annotations_author_idx
  on public.client_portal_annotations(author_profile_id)
  where author_profile_id is not null;

-- ---------------------------------------------------------------------------
-- RLS: let managers create/delete annotations and log events (owner side).
-- The original migration only granted members SELECT + managers UPDATE on
-- annotations, and members SELECT on events, so staff could not author markups
-- or record activity from the authenticated app.
-- ---------------------------------------------------------------------------
drop policy if exists "managers insert portal annotations" on public.client_portal_annotations;
create policy "managers insert portal annotations" on public.client_portal_annotations
for insert to authenticated
with check (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.manage'));

drop policy if exists "managers delete portal annotations" on public.client_portal_annotations;
create policy "managers delete portal annotations" on public.client_portal_annotations
for delete to authenticated
using (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.manage'));

drop policy if exists "managers insert portal events" on public.client_portal_events;
create policy "managers insert portal events" on public.client_portal_events
for insert to authenticated
with check (app_private.is_company_member(company_id) and app_private.subscription_allows_access(company_id) and app_private.has_company_permission(company_id, 'client_portals.manage'));

grant delete on public.client_portal_annotations to authenticated;
grant insert on public.client_portal_events to authenticated;
