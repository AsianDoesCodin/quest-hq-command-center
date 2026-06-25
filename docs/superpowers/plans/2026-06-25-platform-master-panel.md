# Platform Master Panel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give the Lumen platform owner a real master panel to review companies, inspect members, approve/suspend/reactivate/archive company access, and keep destructive actions auditable.

**Architecture:** Add Supabase security-definer RPCs gated by `app_private.platform_admins`, then consume them from the existing Settings page. The frontend stores platform rows separately from normal tenant state and degrades to the existing local/demo data for non-Supabase demos.

**Tech Stack:** Vite, vanilla JavaScript, CSS, Supabase Postgres/RPC, Node test runner.

---

### Task 1: Platform RPC Migration

**Files:**
- Create: `supabase/migrations/202606251100_platform_master_panel.sql`
- Test: `tests/platform-master-panel-static.test.mjs`

- [ ] Add `public.list_platform_companies()` returning company, subscription, owner, and member counts for platform admins.
- [ ] Add `public.list_platform_company_members(text)` returning company member details for platform admins.
- [ ] Add `public.manage_platform_company(text, text, text)` mapping approve/reactivate to `active`, suspend to `suspended`, and archive/delete/cancel to `canceled`.
- [ ] Revoke public/anon access and grant authenticated execute.

### Task 2: Frontend State And Data Loading

**Files:**
- Modify: `src/main.js`
- Test: `tests/platform-master-panel-static.test.mjs`

- [ ] Add `platformCompanies` and `platformCompanyMembers` to app state.
- [ ] Load platform RPC data when `is_platform_admin()` returns true.
- [ ] Merge returned platform companies/subscriptions into existing company/subscription state.

### Task 3: Master Settings Tab

**Files:**
- Modify: `src/main.js`
- Modify: `src/styles.css`
- Test: `tests/platform-master-panel-static.test.mjs`

- [ ] Add a `Master` Settings tab only for platform admins.
- [ ] Render company cards/table rows with status, owner, members, and action buttons.
- [ ] Render expandable member rows per company.

### Task 4: Company Management Actions

**Files:**
- Modify: `src/main.js`
- Test: `tests/platform-master-panel-static.test.mjs`

- [ ] Add `data-action="platform-company-action"` handler.
- [ ] Call `manage_platform_company()` for Supabase sessions.
- [ ] Update local state after success and refresh platform lists.

### Task 5: Verification

**Files:**
- Test: `src/main.js`, `src/styles.css`, `tests/*.test.mjs`

- [ ] Run `node --check src/main.js`.
- [ ] Run `node --test tests/*.test.mjs`.
- [ ] Run `npm run build`.
- [ ] Commit, push, deploy to Vercel, and run `npm run smoke:prod`.
