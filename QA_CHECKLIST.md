# Quest HQ Browser QA Checklist

Production target: https://quest-hq-command-center-gamma.vercel.app
Date: 2026-06-25

## Legend

- [ ] Not tested
- [x] Passed
- [!] Failed or unstable
- [-] Blocked or not applicable in this pass

## Access And Session

- [x] Production app loads without getting stuck on "Signing in..."
- [x] Existing Lumen master account can sign in. Browser session was already authenticated on production; local preview sign-in also worked with the Lumen account.
- [x] Refresh on a company route keeps the user signed in.
- [-] Switching browser tab away and back does not aggressively reload the app. Not reliably testable from this automation surface.
- [-] Sign out returns to the login screen. Skipped to avoid disturbing the active production session.
- [-] Read-only demo clearly shows demo state and blocks writes. Skipped in this pass to avoid switching the production session mode.

## Workspace And Tenant

- [x] Lumen workspace opens as a real workspace, not demo.
- [x] Single-company account does not show an unnecessary company dropdown. It shows a workspace link/card instead.
- [-] Workspace creation form gives visible success/error feedback. Skipped because creating a real production workspace is a write action.
- [-] Pending workspace access screen does not silently clear typed data. Skipped because it requires creating/requesting another production workspace.
- [x] Company member counts match visible members. Users page and master panel both showed 1 active member.

## Navigation And Routing

- [x] Main sidebar top-level items route correctly.
- [!] Contacts stage items reproduced the stale-route bug from a contact record: Leads opened, then Nurturing did not change the route before the fix.
- [x] Quotes stage items route/filter correctly and remain clickable in the current CRM 2 install.
- [!] Jobs stage items reproduced the stale-route bug: Scheduled opened, then Unscheduled did not change the route before the fix.
- [x] Direct URL refresh works for Home, Jobs, CRM/Contacts, Messages, Users, Settings, and Plugins.
- [x] Uninstalled plugin routes show a plugin-not-installed state instead of blank or broken content.

## CRM And Jobs

- [x] CRM 1 and CRM 2 are mutually exclusive in plugin settings. CRM is disabled and warns that installing it disables CRM 2; CRM 2 is installed.
- [x] CRM 2 sidebar contains Contacts, Quotes, and Jobs with the expected stages.
- [-] CRM 1 keeps its own quote/job stages. CRM 1 is currently disabled in Lumen, so this was not browser-tested.
- [x] Contact record opens and renders the Salesforce-style record shell.
- [-] Job record opens and its sub-tabs/actions still work. Blocked because the Lumen workspace currently has 0 jobs and QA avoided creating production data.
- [x] Underwriter is separate from CRM 2 and appears as its own installed plugin.

## Plugins

- [x] Settings -> Plugins loads installed, disabled, available, and coming soon states.
- [-] Installing a plugin updates navigation without a full broken reload. Skipped because it changes production workspace configuration.
- [-] Disabling a plugin hides navigation and blocks direct route access. Direct route block was tested; disabling was skipped as a production write.
- [x] CRM variant install warns that the other CRM variant will be disabled.
- [x] Platform master can see plugin state per company.

## Messages

- [x] Messages page opens with a Messenger-style layout.
- [x] Empty conversation list is usable and not overly cramped.
- [-] Opening a conversation updates the thread. Blocked because Lumen currently has 0 conversations and QA avoided creating production messages.
- [-] Message composer is visible without page-level scrolling. Blocked because no conversation exists.
- [-] Sending a message either persists or shows a clear read-only/error state. Skipped as a production write.

## Profile And Users

- [x] Users page loads member rows without fake/demo count inflation.
- [x] Profile modal opens.
- [x] Profile modal Close button works.
- [-] Cancel button closes the profile modal. Close was verified; Cancel was not clicked separately.
- [x] Avatar upload preview removes the fallback yellow background for saved image avatars.
- [x] Avatar crop/zoom controls are present and usable before saving.

## Master Panel

- [x] Master tab appears for the platform owner.
- [x] Master panel lists companies.
- [x] Master panel shows members per company. Coordinate click opened the member details.
- [-] Master panel supports disable/suspend without deleting data by accident. Buttons exist; skipped action because it changes production access.
- [-] Master panel supports company deletion only behind a destructive confirmation. No delete action was visible; Archive exists but was not clicked.

## Responsive And Layout

- [!] Desktop pages do not create unnecessary body scroll when content fits. Home, Settings -> Plugins, Underwriter, and Contact record had vertical body scroll; some is legitimate content, but Underwriter/contact record should be tightened.
- [x] Mobile bottom navigation does not overlap content in local preview.
- [x] Messages layout works at phone width in local preview, but no conversation thread existed to test composer behavior.
- [x] Profile modal fits and can be closed in the tested viewport.
- [x] Sidebar stage lists remain readable at normal desktop zoom.

## Browser Findings

Record failures here during the browser pass:

- Reproduced stale-route stage navigation: from `/company/lumen/contacts?stage=Leads`, clicking the sidebar `Nurturing` stage did not update the URL or visible filtered list. Same pattern reproduced on Jobs from `Scheduled` to `Unscheduled`.
- Root cause: `setPipelineStage()` updated in-memory state and called `render()` when already on the same section. Because the URL still had the old `?stage=...`, render restored the old filter.
- Fix implemented: `setPipelineStage()` now always routes through `navigate(nextPath, ...)`, keeping route params and UI state aligned.
- Added regression test: `pipeline stage changes update the URL instead of rendering against stale route params`.
- Verified locally: `node --check src/main.js`, `node --test tests/*.test.mjs`, and `npm run build`.
- Screenshots saved:
  - `exports/qa-messages.png`
  - `exports/qa-plugins.png`
  - `exports/qa-master.png`
