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
- `git diff --check`
- Commit, push, and deploy with `npx vercel --prod --yes`.
