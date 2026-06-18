# Quest HQ Production QA Checklist

Use this checklist against `https://quest-hq-command-center.vercel.app` after every meaningful deployment.

## Access

- `/login` loads.
- Temporary login works with `lumen123` / `lumen123`.
- Sign out returns to `/login`.
- Company switcher shows one entry each for Drafting, Lumen, and Roofing.

## Route Smoke Matrix

Check each enabled module for `roofing`, `drafting`, and `lumen`:

- `/company/:companyId/jobs`
- `/company/:companyId/tasks`
- `/company/:companyId/files`
- `/company/:companyId/forms`
- `/company/:companyId/analytics`
- `/company/:companyId/crm`
- `/company/:companyId/finance`
- `/company/:companyId/users`
- `/company/:companyId/settings`
- `/company/:companyId/time`
- `/company/:companyId/approvals`
- `/company/:companyId/calendar`
- `/company/:companyId/messages`
- `/company/:companyId/clock`
- `/company/:companyId/team-chart`

Automated first pass:

- `npm run smoke:prod`

## Legacy Redirects

- `/crm.html` redirects into the active company CRM route.
- `/crm` redirects into the active company CRM route.
- `/finance.html` redirects into the active company Finance route.
- `/finance` redirects into the active company Finance route.
- `/files.html`, `/forms.html`, and `/jobs.html` still land in company-scoped routes.

## Core Workflows

- Jobs: create/edit modal opens, saves, cancels, and closes cleanly.
- Tasks: new/detail/edit modals or drawer open and close cleanly.
- Files: folder/create/upload/detail flows do not break the route.
- Forms: new form modal, preview modal, and manage modal open and close cleanly.
- CRM: customer modal opens from the table, closes back to CRM, and links to Jobs/Tasks/Files.
- Finance: invoice, payment, expense, vendor, and report modals open and close cleanly.

## Tenant Security QA

Run these with at least two real Supabase users after pending migrations are applied:

- Create Company A Owner and Company B Owner.
- Company A user cannot open Company B routes by direct URL.
- Company A user cannot read Company B jobs, files, forms, CRM, finance, messages, users, settings, or calendar records.
- Disabled or left users cannot open workspace routes by direct URL.
- Pending users see the blocking/request screen and cannot load workspace data.
- Last active Owner cannot be disabled, removed, or allowed to leave until another Owner exists.
- Worker invited to Company A can accept that company only.
- Same email invited by Company B joins as the same person account with a separate membership, not a duplicate account.

## Sensitive Files And Finance QA

Run after the secure finance/files migrations are applied:

- User with `files.view` can see allowed file metadata.
- User without `files.view` cannot see Files sidebar, Files route content, or file metadata by URL.
- User with `files.manage` can upload/delete files.
- User without `files.manage` cannot upload/delete files even if they trigger hidden actions.
- Private storage object URLs are not public.
- Signed download URLs are issued only for users with file access.
- User with `finance.view` can see finance records and reports.
- User without `finance.view` cannot see Finance sidebar, Finance route content, or finance records by URL.
- User with `finance.view` but not `finance.manage` cannot create/edit invoices, payments, expenses, or vendors.
- User with `finance.manage` can create invoice, record payment, add expense, and add vendor.
- Company A user cannot query Company B finance tables directly through Supabase.
- Finance-denied users do not receive finance inbox notifications.

## Mobile

- Check at phone width.
- Topbar does not crowd or overlap.
- Tables collapse into readable rows.
- CRM and Finance modal action buttons stack cleanly.
- No obvious horizontal overflow.

## Release Gate

- `node --check src/main.js`
- `npm run build`
- `npm run build:pages`
- `npm run smoke:prod`
- `git diff --check`
- Commit, push, and deploy with `npx vercel --prod --yes`.
