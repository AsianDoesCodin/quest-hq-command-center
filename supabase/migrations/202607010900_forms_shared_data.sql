create table if not exists public.forms (
  id text primary key,
  company_id text not null references public.companies(id) on delete cascade,
  title text not null default 'Untitled form',
  description text not null default '',
  type text not null default 'Internal',
  status text not null default 'Draft',
  audience text not null default 'Internal',
  creator_id text,
  linked_job_id text,
  theme_color text not null default '#f0b23b',
  background text not null default 'clean',
  submit_label text not null default 'Submit',
  collect_email boolean not null default true,
  require_approval boolean not null default false,
  questions jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint forms_status_check check (status in ('Draft', 'Published', 'Archived')),
  constraint forms_questions_array_check check (jsonb_typeof(questions) = 'array')
);

create table if not exists public.form_responses (
  id text primary key,
  company_id text not null references public.companies(id) on delete cascade,
  form_id text not null references public.forms(id) on delete cascade,
  submitted_by text not null default 'Anonymous',
  submitter_email text not null default '',
  answers jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint form_responses_answers_object_check check (jsonb_typeof(answers) = 'object')
);

create index if not exists forms_company_updated_idx
  on public.forms(company_id, updated_at desc);

create index if not exists forms_company_status_idx
  on public.forms(company_id, status);

create index if not exists forms_linked_job_idx
  on public.forms(company_id, linked_job_id)
  where linked_job_id is not null;

create index if not exists form_responses_company_created_idx
  on public.form_responses(company_id, created_at desc);

create index if not exists form_responses_form_created_idx
  on public.form_responses(form_id, created_at desc);

drop trigger if exists forms_set_updated_at on public.forms;
create trigger forms_set_updated_at
before update on public.forms
for each row execute function public.set_updated_at();

alter table public.forms enable row level security;
alter table public.form_responses enable row level security;

drop policy if exists "members read company forms" on public.forms;
create policy "members read company forms" on public.forms
for select to authenticated
using (
  app_private.is_company_member(company_id)
  and app_private.has_company_permission(company_id, 'forms.view')
);

drop policy if exists "managers create company forms" on public.forms;
create policy "managers create company forms" on public.forms
for insert to authenticated
with check (
  app_private.is_company_member(company_id)
  and app_private.has_company_permission(company_id, 'forms.manage')
);

drop policy if exists "managers update company forms" on public.forms;
create policy "managers update company forms" on public.forms
for update to authenticated
using (
  app_private.is_company_member(company_id)
  and app_private.has_company_permission(company_id, 'forms.manage')
)
with check (
  app_private.is_company_member(company_id)
  and app_private.has_company_permission(company_id, 'forms.manage')
);

drop policy if exists "managers delete company forms" on public.forms;
create policy "managers delete company forms" on public.forms
for delete to authenticated
using (
  app_private.is_company_member(company_id)
  and app_private.has_company_permission(company_id, 'forms.manage')
);

drop policy if exists "members read company form responses" on public.form_responses;
create policy "members read company form responses" on public.form_responses
for select to authenticated
using (
  app_private.is_company_member(company_id)
  and app_private.has_company_permission(company_id, 'forms.view')
);

drop policy if exists "members submit company form responses" on public.form_responses;
create policy "members submit company form responses" on public.form_responses
for insert to authenticated
with check (
  app_private.is_company_member(company_id)
  and app_private.has_company_permission(company_id, 'forms.view')
  and exists (
    select 1
    from public.forms f
    where f.id = form_id
      and f.company_id = form_responses.company_id
  )
);

drop policy if exists "managers update company form responses" on public.form_responses;
create policy "managers update company form responses" on public.form_responses
for update to authenticated
using (
  app_private.is_company_member(company_id)
  and app_private.has_company_permission(company_id, 'forms.manage')
)
with check (
  app_private.is_company_member(company_id)
  and app_private.has_company_permission(company_id, 'forms.manage')
);

drop policy if exists "managers delete company form responses" on public.form_responses;
create policy "managers delete company form responses" on public.form_responses
for delete to authenticated
using (
  app_private.is_company_member(company_id)
  and app_private.has_company_permission(company_id, 'forms.manage')
);

grant select, insert, update, delete on public.forms to authenticated;
grant select, insert, update, delete on public.form_responses to authenticated;
