alter table public.company_memberships disable trigger company_memberships_prevent_last_owner_loss;

do $$
declare
  duplicate_companies text[] := array['lumen-marketting', 'lumen-marketting-344b8a', 'lumen-marketting-200481'];
begin
  update public.profiles p
  set company_ids = array(
    select distinct company_id
    from unnest(coalesce(p.company_ids, '{}'::text[])) as company_id
    where company_id <> all(duplicate_companies)
  )
  where p.company_ids && duplicate_companies;

  update public.team_members tm
  set company_ids = array(
    select distinct company_id
    from unnest(coalesce(tm.company_ids, '{}'::text[])) as company_id
    where company_id <> all(duplicate_companies)
  )
  where tm.company_ids && duplicate_companies;

  delete from public.message_attachments where company_id = any(duplicate_companies);
  delete from public.messages where company_id = any(duplicate_companies);
  delete from public.message_reads where company_id = any(duplicate_companies);
  delete from public.message_conversation_access where company_id = any(duplicate_companies);
  delete from public.message_conversations where company_id = any(duplicate_companies);
  delete from public.finance_payments where company_id = any(duplicate_companies);
  delete from public.finance_expenses where company_id = any(duplicate_companies);
  delete from public.finance_invoices where company_id = any(duplicate_companies);
  delete from public.finance_vendors where company_id = any(duplicate_companies);
  delete from public.job_files where company_id = any(duplicate_companies);
  delete from public.notifications where company_id = any(duplicate_companies);
  delete from public.tasks where company_id = any(duplicate_companies);
  delete from public.activities where company_id = any(duplicate_companies);
  delete from public.calendar_events where company_id = any(duplicate_companies);
  delete from public.deals where company_id = any(duplicate_companies);
  delete from public.jobs where company_id = any(duplicate_companies);
  delete from public.contacts where company_id = any(duplicate_companies);
  delete from public.accounts where company_id = any(duplicate_companies);
  delete from public.clients where company_id = any(duplicate_companies);
  delete from public.pipeline_stages where company_id = any(duplicate_companies);
  delete from public.resource_acl where company_id = any(duplicate_companies);
  delete from public.field_permissions where company_id = any(duplicate_companies);
  delete from public.company_join_requests where company_id = any(duplicate_companies);
  delete from public.company_invites where company_id = any(duplicate_companies);
  delete from public.user_role_assignments where company_id = any(duplicate_companies);
  delete from public.role_permissions
  where role_id in (select id from public.roles where company_id = any(duplicate_companies));
  delete from public.roles where company_id = any(duplicate_companies);
  delete from public.company_memberships where company_id = any(duplicate_companies);
  delete from public.company_subscriptions where company_id = any(duplicate_companies);
  delete from public.audit_events where company_id = any(duplicate_companies);
  delete from public.companies where id = any(duplicate_companies);
end;
$$;

alter table public.company_memberships enable trigger company_memberships_prevent_last_owner_loss;
