create table if not exists public.proposal_documents (
  id text primary key,
  company_id text not null references public.companies(id) on delete cascade,
  proposal_no text not null default '',
  title text not null default 'Proposal',
  status text not null default 'Draft',
  related_type text not null default 'deal',
  related_id text not null default '',
  contact_id text,
  deal_id text,
  job_id text,
  client jsonb not null default '{}'::jsonb,
  draft jsonb not null default '{}'::jsonb,
  total numeric not null default 0,
  public_token text not null default '',
  accepted_by text not null default '',
  accepted_email text not null default '',
  accepted_at timestamptz,
  declined_at timestamptz,
  viewed_at timestamptz,
  sent_at timestamptz,
  created_by text not null default '',
  created_by_label text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint proposal_documents_status_check check (status in ('Draft', 'Sent', 'Viewed', 'Accepted', 'Declined')),
  constraint proposal_documents_related_type_check check (related_type in ('contact', 'deal', 'job')),
  constraint proposal_documents_client_object_check check (jsonb_typeof(client) = 'object'),
  constraint proposal_documents_draft_object_check check (jsonb_typeof(draft) = 'object'),
  constraint proposal_documents_total_check check (total >= 0)
);

create unique index if not exists proposal_documents_public_token_uidx
  on public.proposal_documents(public_token)
  where public_token <> '';

create index if not exists proposal_documents_company_updated_idx
  on public.proposal_documents(company_id, updated_at desc);

create index if not exists proposal_documents_company_status_idx
  on public.proposal_documents(company_id, status);

create index if not exists proposal_documents_related_idx
  on public.proposal_documents(company_id, related_type, related_id);

drop trigger if exists proposal_documents_set_updated_at on public.proposal_documents;
create trigger proposal_documents_set_updated_at
before update on public.proposal_documents
for each row execute function public.set_updated_at();

alter table public.proposal_documents enable row level security;

drop policy if exists "members read company proposals" on public.proposal_documents;
create policy "members read company proposals" on public.proposal_documents
for select to authenticated
using (
  app_private.is_company_member(company_id)
  and app_private.subscription_allows_access(company_id)
  and app_private.has_company_permission(company_id, 'crm.view')
);

drop policy if exists "members create company proposals" on public.proposal_documents;
create policy "members create company proposals" on public.proposal_documents
for insert to authenticated
with check (
  app_private.is_company_member(company_id)
  and app_private.subscription_allows_access(company_id)
  and app_private.has_company_permission(company_id, 'crm.view')
);

drop policy if exists "members update company proposals" on public.proposal_documents;
create policy "members update company proposals" on public.proposal_documents
for update to authenticated
using (
  app_private.is_company_member(company_id)
  and app_private.subscription_allows_access(company_id)
  and app_private.has_company_permission(company_id, 'crm.view')
)
with check (
  app_private.is_company_member(company_id)
  and app_private.subscription_allows_access(company_id)
  and app_private.has_company_permission(company_id, 'crm.view')
);

drop policy if exists "members delete company proposals" on public.proposal_documents;
create policy "members delete company proposals" on public.proposal_documents
for delete to authenticated
using (
  app_private.is_company_member(company_id)
  and app_private.subscription_allows_access(company_id)
  and app_private.has_company_permission(company_id, 'crm.view')
);

grant select, insert, update, delete on public.proposal_documents to authenticated;

create or replace function public.public_proposal_by_token(proposal_token text)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  clean_token text := trim(coalesce(proposal_token, ''));
  proposal_row public.proposal_documents%rowtype;
begin
  if clean_token = '' then
    raise exception 'Proposal token is required';
  end if;

  select *
    into proposal_row
  from public.proposal_documents
  where public_token = clean_token
    and status in ('Sent', 'Viewed', 'Accepted', 'Declined')
  limit 1;

  if proposal_row.id is null then
    raise exception 'Proposal not found';
  end if;

  if proposal_row.status = 'Sent' then
    update public.proposal_documents
    set status = 'Viewed',
        viewed_at = coalesce(viewed_at, now()),
        updated_at = now()
    where id = proposal_row.id
    returning * into proposal_row;
  end if;

  return jsonb_build_object(
    'id', proposal_row.id,
    'company_id', proposal_row.company_id,
    'proposal_no', proposal_row.proposal_no,
    'title', proposal_row.title,
    'status', proposal_row.status,
    'related_type', proposal_row.related_type,
    'related_id', proposal_row.related_id,
    'client', proposal_row.client,
    'draft', proposal_row.draft,
    'total', proposal_row.total,
    'public_token', proposal_row.public_token,
    'accepted_by', proposal_row.accepted_by,
    'accepted_email', proposal_row.accepted_email,
    'accepted_at', proposal_row.accepted_at,
    'declined_at', proposal_row.declined_at,
    'viewed_at', proposal_row.viewed_at,
    'sent_at', proposal_row.sent_at,
    'created_at', proposal_row.created_at,
    'updated_at', proposal_row.updated_at
  );
end;
$$;

revoke all on function public.public_proposal_by_token(text) from public;
grant execute on function public.public_proposal_by_token(text) to anon, authenticated;

create or replace function public.accept_public_proposal(
  proposal_token text,
  signer_name text,
  signer_email text default '',
  decision text default 'accept'
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  clean_token text := trim(coalesce(proposal_token, ''));
  clean_name text := trim(coalesce(signer_name, ''));
  clean_email text := trim(coalesce(signer_email, ''));
  clean_decision text := lower(trim(coalesce(decision, 'accept')));
  proposal_row public.proposal_documents%rowtype;
begin
  if clean_token = '' then
    raise exception 'Proposal token is required';
  end if;

  if clean_name = '' then
    raise exception 'Signer name is required';
  end if;

  if clean_decision not in ('accept', 'decline') then
    raise exception 'Unsupported proposal decision';
  end if;

  select *
    into proposal_row
  from public.proposal_documents
  where public_token = clean_token
    and status in ('Sent', 'Viewed')
  limit 1;

  if proposal_row.id is null then
    raise exception 'Proposal is no longer open';
  end if;

  update public.proposal_documents
  set status = case when clean_decision = 'decline' then 'Declined' else 'Accepted' end,
      accepted_by = case when clean_decision = 'decline' then accepted_by else clean_name end,
      accepted_email = case when clean_decision = 'decline' then accepted_email else clean_email end,
      accepted_at = case when clean_decision = 'decline' then accepted_at else now() end,
      declined_at = case when clean_decision = 'decline' then now() else declined_at end,
      updated_at = now()
  where id = proposal_row.id
  returning * into proposal_row;

  insert into public.activities (
    id,
    company_id,
    type,
    subject,
    body,
    related_type,
    related_id,
    completed_at,
    owner_name,
    updated_at
  )
  values (
    'activity-' || gen_random_uuid()::text,
    proposal_row.company_id,
    'system',
    case when proposal_row.status = 'Declined' then 'Proposal declined' else 'Proposal accepted' end,
    'Customer: ' || clean_name || case when clean_email <> '' then ' <' || clean_email || '>' else '' end,
    proposal_row.related_type,
    proposal_row.related_id,
    now(),
    clean_name,
    now()
  );

  return jsonb_build_object(
    'id', proposal_row.id,
    'company_id', proposal_row.company_id,
    'proposal_no', proposal_row.proposal_no,
    'title', proposal_row.title,
    'status', proposal_row.status,
    'related_type', proposal_row.related_type,
    'related_id', proposal_row.related_id,
    'client', proposal_row.client,
    'draft', proposal_row.draft,
    'total', proposal_row.total,
    'public_token', proposal_row.public_token,
    'accepted_by', proposal_row.accepted_by,
    'accepted_email', proposal_row.accepted_email,
    'accepted_at', proposal_row.accepted_at,
    'declined_at', proposal_row.declined_at,
    'viewed_at', proposal_row.viewed_at,
    'sent_at', proposal_row.sent_at,
    'created_at', proposal_row.created_at,
    'updated_at', proposal_row.updated_at
  );
end;
$$;

revoke all on function public.accept_public_proposal(text, text, text, text) from public;
grant execute on function public.accept_public_proposal(text, text, text, text) to anon, authenticated;
