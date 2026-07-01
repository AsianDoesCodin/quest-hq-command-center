# Change Documentation — 2026-07-01

Summary of the changes on `main` (working tree). Three feature areas plus supporting
API and schema work. App code is **not yet deployed**; the Supabase migrations below
have been **applied** to the live project `rqundirizvojpzhljtdn`.

---

## 1. Client Portal → Blueprint Review & Annotation

The client portal (owner management + public `/portal/{token}` viewer) was rebuilt into
a full blueprint review and markup engine in [src/main.js](../src/main.js).

**Highlights**
- 11 markup tools, threaded comment pins, status markers, measure-with-calibration,
  zoom/pan, and multi-page PDF rendering.
- Per-document **review status** (`pending` / `approved` / `revision` / `rejected`).
- Document **versions** (version group + version number + `is_current`).
- One shared annotation engine drives both the owner surface (`mode:'owner'`, direct
  Supabase) and the public guest surface (`mode:'guest'`, `/api/client-portal-*`).
- Annotations use normalized 0–1 coordinates in `client_portal_annotations.payload`,
  with threaded replies under `payload.thread`.

**API changes**
- [api/client-portal-annotations.js](../api/client-portal-annotations.js) now supports
  granular operations instead of only bulk replace:
  - `action: 'delete'` — a guest may remove **only their own** markups.
  - single-annotation **upsert** (create / move / thread reply) that no longer disturbs
    markups authored by staff or other guests.
  - bulk replace kept for legacy "Save markups".
  - Author attribution is **server-enforced** (`payload.author = 'guest'`,
    `guest_name` from the signed session).
- [api/client-portal-open.js](../api/client-portal-open.js) now returns only current
  document versions (`is_current=eq.true`) and includes the new version / status / scale
  columns.
- New endpoint [api/client-portal-document-status.js](../api/client-portal-document-status.js)
  lets a guest set a document's review status; the update is scoped to the session's
  portal + company and each change is logged to `client_portal_events`.

**Migrations (applied)**
- `202607011000_client_portal_review_upgrade.sql` — adds document
  `version_group_id` / `version_number` / `is_current` / `review_status` / `scale`,
  annotation `author_profile_id`, backfills existing rows, and adds manager
  INSERT/DELETE RLS for annotations plus INSERT for events.
- `202607011200_client_portal_scale_unit.sql` — adds `scale_unit` (`ft` / `in` / `cm`)
  for the calibrated ruler.

---

## 2. Workspace Builder (rich no-code module)

The "Workspaces" plugin was replaced with a deep port of the rich no-code builder into
[src/main.js](../src/main.js) (all `wb*`-prefixed).

**Highlights**
- 14 configurable field types (category/status options + colors, relationship,
  calculation, money/number formatting).
- Formatted item tables, an automations builder + execution engine, and reports with
  donut / bar / timeline charts.
- Workspace members (real company members), per-workspace activity feed, drag-reorder
  fields, and an app-settings tab.
- A single `mountWorkspaceBuilder()` binds content + modal interactions after each render.

**Persistence & migration (applied)**
- `202607011400_workspace_builder_state.sql` — one JSON document per company in
  `workspace_builder_state(company_id pk, doc jsonb, …)`, RLS gated by
  `workspaces.view` / `workspaces.manage`. Last-write-wins per company (no realtime);
  localStorage fallback.

---

## 3. Contacts — structured global address + map picker

The "+New contact" modal gained a structured address editor
(country / province / city / barangay cascade, international dial code, and map
coordinates) backed by a Leaflet map picker.

- [index.html](../index.html) loads Leaflet 1.9.4 (CSS + JS). It is **optional** — the
  contact form degrades to plain text if the CDN fails to load.
- Migration `202607010900_contacts_structured_address.sql` (applied) adds additive,
  nullable-safe TEXT columns: `country_code`, `country`, `province`, `city`, `barangay`,
  `street`, `block_no`, `zip`, `lat`, `lng`. The existing `location` text stays the
  human-readable summary.

---

## Other

- Static tests updated: `client-portal-plugin-static`, `lead-quote-crm-static`,
  `workspace-builder-static`.
- `.gitignore` now also ignores `.vercel` and `.env*`.

## Deployment notes

- All four migrations are **live** on project `rqundirizvojpzhljtdn`.
- The front-end code still runs from local `vite dev` and has **not** been deployed to
  hosting. `vite dev` does not serve `/api/*`, so the public guest link falls back to a
  local opener in development.
