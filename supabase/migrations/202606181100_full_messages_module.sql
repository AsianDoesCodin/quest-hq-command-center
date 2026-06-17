create extension if not exists pgcrypto;

create table if not exists public.message_conversations (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete cascade,
  title text not null,
  type text not null default 'custom',
  created_by uuid references public.profiles(id) on delete set null,
  last_message_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint message_conversations_type_check check (type in ('company', 'role', 'custom', 'direct'))
);

create table if not exists public.message_conversation_access (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete cascade,
  conversation_id uuid not null references public.message_conversations(id) on delete cascade,
  target_type text not null,
  target_id text not null,
  created_at timestamptz not null default now(),
  unique (conversation_id, target_type, target_id),
  constraint message_conversation_access_target_type_check check (target_type in ('all_company', 'role', 'profile'))
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete cascade,
  conversation_id uuid not null references public.message_conversations(id) on delete cascade,
  sender_profile_id uuid not null references public.profiles(id) on delete cascade,
  body text not null default '',
  message_type text not null default 'text',
  deleted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint messages_message_type_check check (message_type in ('text', 'attachment', 'system'))
);

create table if not exists public.message_attachments (
  id uuid primary key default gen_random_uuid(),
  company_id text not null references public.companies(id) on delete cascade,
  conversation_id uuid not null references public.message_conversations(id) on delete cascade,
  message_id uuid not null references public.messages(id) on delete cascade,
  bucket_id text not null default 'quest-message-attachments',
  object_path text not null,
  file_name text not null,
  mime_type text not null default 'application/octet-stream',
  size_bytes bigint not null default 0 check (size_bytes >= 0),
  created_at timestamptz not null default now(),
  unique (bucket_id, object_path)
);

create table if not exists public.message_reads (
  company_id text not null references public.companies(id) on delete cascade,
  conversation_id uuid not null references public.message_conversations(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  last_read_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (conversation_id, profile_id)
);

create index if not exists message_conversations_company_last_idx on public.message_conversations(company_id, last_message_at desc nulls last, updated_at desc);
create index if not exists message_conversation_access_lookup_idx on public.message_conversation_access(company_id, conversation_id, target_type, target_id);
create index if not exists messages_conversation_created_idx on public.messages(conversation_id, created_at);
create index if not exists messages_company_created_idx on public.messages(company_id, created_at desc);
create index if not exists message_attachments_message_idx on public.message_attachments(message_id);
create index if not exists message_reads_profile_idx on public.message_reads(profile_id, updated_at desc);

drop trigger if exists message_conversations_set_updated_at on public.message_conversations;
create trigger message_conversations_set_updated_at before update on public.message_conversations
for each row execute function public.set_updated_at();

drop trigger if exists messages_set_updated_at on public.messages;
create trigger messages_set_updated_at before update on public.messages
for each row execute function public.set_updated_at();

drop trigger if exists message_reads_set_updated_at on public.message_reads;
create trigger message_reads_set_updated_at before update on public.message_reads
for each row execute function public.set_updated_at();

create or replace function public.message_touch_conversation()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  update public.message_conversations
  set last_message_at = new.created_at,
      updated_at = now()
  where id = new.conversation_id;
  return new;
end;
$$;

drop trigger if exists messages_touch_conversation on public.messages;
create trigger messages_touch_conversation after insert on public.messages
for each row execute function public.message_touch_conversation();

create or replace function app_private.has_company_permission(target_company_id text, permission text)
returns boolean
language sql
security definer
set search_path = public, pg_temp
stable
as $$
  with membership as (
    select cm.role
    from public.company_memberships cm
    where cm.company_id = target_company_id
      and cm.profile_id = auth.uid()
      and cm.status = 'active'
    limit 1
  ),
  assigned as (
    select rp.effect
    from public.user_role_assignments ura
    join public.role_permissions rp on rp.role_id = ura.role_id
    where ura.company_id = target_company_id
      and ura.profile_id = auth.uid()
      and (rp.permission_key = permission or rp.permission_key = '*')
  )
  select
    exists (select 1 from membership where role in ('owner', 'developer'))
    or (
      exists (select 1 from membership)
      and not exists (select 1 from assigned where effect = 'deny')
      and (
        exists (select 1 from assigned where effect = 'allow')
        or permission in (
          'jobs.view',
          'tasks.view',
          'files.view',
          'forms.view',
          'users.view',
          'messages.view',
          'messages.send',
          'messages.attach_files',
          'messages.delete_own'
        )
      )
    );
$$;

create or replace function app_private.can_access_message_conversation(target_conversation_id uuid)
returns boolean
language sql
security definer
set search_path = public, pg_temp
stable
as $$
  select exists (
    select 1
    from public.message_conversations mc
    where mc.id = target_conversation_id
      and app_private.is_company_member(mc.company_id)
      and app_private.subscription_allows_access(mc.company_id)
      and app_private.has_company_permission(mc.company_id, 'messages.view')
      and (
        mc.created_by = auth.uid()
        or exists (
          select 1
          from public.message_conversation_access access
          where access.conversation_id = mc.id
            and access.target_type = 'all_company'
        )
        or exists (
          select 1
          from public.message_conversation_access access
          where access.conversation_id = mc.id
            and access.target_type = 'profile'
            and access.target_id = auth.uid()::text
        )
        or exists (
          select 1
          from public.message_conversation_access access
          join public.user_role_assignments ura
            on ura.company_id = mc.company_id
           and ura.profile_id = auth.uid()
           and ura.role_id::text = access.target_id
          where access.conversation_id = mc.id
            and access.target_type = 'role'
        )
      )
  );
$$;

revoke all on function app_private.can_access_message_conversation(uuid) from public, anon;
grant execute on function app_private.can_access_message_conversation(uuid) to authenticated;

alter table public.message_conversations enable row level security;
alter table public.message_conversation_access enable row level security;
alter table public.messages enable row level security;
alter table public.message_attachments enable row level security;
alter table public.message_reads enable row level security;

drop policy if exists "message conversations select access" on public.message_conversations;
create policy "message conversations select access" on public.message_conversations
for select to authenticated
using (app_private.can_access_message_conversation(id));

drop policy if exists "message conversations insert allowed" on public.message_conversations;
create policy "message conversations insert allowed" on public.message_conversations
for insert to authenticated
with check (
  app_private.is_company_member(company_id)
  and app_private.subscription_allows_access(company_id)
  and created_by = auth.uid()
  and (
    (type = 'direct' and app_private.has_company_permission(company_id, 'messages.send'))
    or (type <> 'direct' and app_private.has_company_permission(company_id, 'messages.create_group'))
  )
);

drop policy if exists "message conversations update managers" on public.message_conversations;
create policy "message conversations update managers" on public.message_conversations
for update to authenticated
using (
  app_private.is_company_member(company_id)
  and (
    app_private.has_company_permission(company_id, 'messages.manage_groups')
    or app_private.has_company_permission(company_id, 'messages.manage')
  )
)
with check (
  app_private.is_company_member(company_id)
  and (
    app_private.has_company_permission(company_id, 'messages.manage_groups')
    or app_private.has_company_permission(company_id, 'messages.manage')
  )
);

drop policy if exists "message access select visible" on public.message_conversation_access;
create policy "message access select visible" on public.message_conversation_access
for select to authenticated
using (
  app_private.can_access_message_conversation(conversation_id)
  or (
    app_private.is_company_member(company_id)
    and (
      app_private.has_company_permission(company_id, 'messages.manage_groups')
      or app_private.has_company_permission(company_id, 'messages.manage')
    )
  )
);

drop policy if exists "message access insert creator or manager" on public.message_conversation_access;
create policy "message access insert creator or manager" on public.message_conversation_access
for insert to authenticated
with check (
  app_private.is_company_member(company_id)
  and exists (
    select 1
    from public.message_conversations mc
    where mc.id = conversation_id
      and mc.company_id = company_id
      and (
        mc.created_by = auth.uid()
        or app_private.has_company_permission(company_id, 'messages.manage_groups')
        or app_private.has_company_permission(company_id, 'messages.manage')
      )
  )
);

drop policy if exists "message access update managers" on public.message_conversation_access;
create policy "message access update managers" on public.message_conversation_access
for update to authenticated
using (
  app_private.is_company_member(company_id)
  and (
    app_private.has_company_permission(company_id, 'messages.manage_groups')
    or app_private.has_company_permission(company_id, 'messages.manage')
  )
)
with check (
  app_private.is_company_member(company_id)
  and (
    app_private.has_company_permission(company_id, 'messages.manage_groups')
    or app_private.has_company_permission(company_id, 'messages.manage')
  )
);

drop policy if exists "message access delete managers" on public.message_conversation_access;
create policy "message access delete managers" on public.message_conversation_access
for delete to authenticated
using (
  app_private.is_company_member(company_id)
  and (
    app_private.has_company_permission(company_id, 'messages.manage_groups')
    or app_private.has_company_permission(company_id, 'messages.manage')
  )
);

drop policy if exists "messages select conversation access" on public.messages;
create policy "messages select conversation access" on public.messages
for select to authenticated
using (app_private.can_access_message_conversation(conversation_id));

drop policy if exists "messages insert senders" on public.messages;
create policy "messages insert senders" on public.messages
for insert to authenticated
with check (
  sender_profile_id = auth.uid()
  and app_private.can_access_message_conversation(conversation_id)
  and app_private.has_company_permission(company_id, 'messages.send')
  and exists (
    select 1
    from public.message_conversations mc
    where mc.id = conversation_id
      and mc.company_id = company_id
  )
);

drop policy if exists "messages update delete permissions" on public.messages;
create policy "messages update delete permissions" on public.messages
for update to authenticated
using (
  app_private.can_access_message_conversation(conversation_id)
  and (
    (sender_profile_id = auth.uid() and app_private.has_company_permission(company_id, 'messages.delete_own'))
    or app_private.has_company_permission(company_id, 'messages.delete_any')
  )
)
with check (
  app_private.can_access_message_conversation(conversation_id)
  and (
    (sender_profile_id = auth.uid() and app_private.has_company_permission(company_id, 'messages.delete_own'))
    or app_private.has_company_permission(company_id, 'messages.delete_any')
  )
);

drop policy if exists "message attachments select conversation access" on public.message_attachments;
create policy "message attachments select conversation access" on public.message_attachments
for select to authenticated
using (app_private.can_access_message_conversation(conversation_id));

drop policy if exists "message attachments insert allowed" on public.message_attachments;
create policy "message attachments insert allowed" on public.message_attachments
for insert to authenticated
with check (
  app_private.can_access_message_conversation(conversation_id)
  and app_private.has_company_permission(company_id, 'messages.attach_files')
  and exists (
    select 1
    from public.messages m
    where m.id = message_id
      and m.conversation_id = conversation_id
      and m.company_id = company_id
      and m.sender_profile_id = auth.uid()
  )
);

drop policy if exists "message reads select own" on public.message_reads;
create policy "message reads select own" on public.message_reads
for select to authenticated
using (profile_id = auth.uid() and app_private.can_access_message_conversation(conversation_id));

drop policy if exists "message reads upsert own" on public.message_reads;
create policy "message reads upsert own" on public.message_reads
for insert to authenticated
with check (profile_id = auth.uid() and app_private.can_access_message_conversation(conversation_id));

drop policy if exists "message reads update own" on public.message_reads;
create policy "message reads update own" on public.message_reads
for update to authenticated
using (profile_id = auth.uid() and app_private.can_access_message_conversation(conversation_id))
with check (profile_id = auth.uid() and app_private.can_access_message_conversation(conversation_id));

insert into storage.buckets (id, name, public, file_size_limit)
values ('quest-message-attachments', 'quest-message-attachments', false, 52428800)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit;

drop policy if exists "message attachment objects read" on storage.objects;
create policy "message attachment objects read" on storage.objects
for select to authenticated
using (
  bucket_id = 'quest-message-attachments'
  and exists (
    select 1
    from public.message_attachments ma
    where ma.bucket_id = storage.objects.bucket_id
      and ma.object_path = storage.objects.name
      and app_private.can_access_message_conversation(ma.conversation_id)
  )
);

drop policy if exists "message attachment objects insert" on storage.objects;
create policy "message attachment objects insert" on storage.objects
for insert to authenticated
with check (
  bucket_id = 'quest-message-attachments'
  and app_private.is_company_member(split_part(name, '/', 1))
  and app_private.subscription_allows_access(split_part(name, '/', 1))
  and app_private.has_company_permission(split_part(name, '/', 1), 'messages.attach_files')
);

drop policy if exists "message attachment objects delete managers" on storage.objects;
create policy "message attachment objects delete managers" on storage.objects
for delete to authenticated
using (
  bucket_id = 'quest-message-attachments'
  and app_private.is_company_member(split_part(name, '/', 1))
  and (
    app_private.has_company_permission(split_part(name, '/', 1), 'messages.manage_groups')
    or app_private.has_company_permission(split_part(name, '/', 1), 'messages.manage')
  )
);

grant select, insert, update on public.message_conversations to authenticated;
grant select, insert, update, delete on public.message_conversation_access to authenticated;
grant select, insert, update on public.messages to authenticated;
grant select, insert on public.message_attachments to authenticated;
grant select, insert, update on public.message_reads to authenticated;

do $$
begin
  alter publication supabase_realtime add table public.messages;
exception
  when duplicate_object then null;
  when undefined_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.message_attachments;
exception
  when duplicate_object then null;
  when undefined_object then null;
end $$;
