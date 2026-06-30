# Client Portal Plan Review Design

Date: 2026-07-01

## Scope

Upgrade only the public customer portal plan review screen. This does not redesign the staff dashboard, admin client portal management screen, intake form, payments, or project hub.

The goal is a customer-simple review tool: powerful enough for plan notes and markups, but simple enough that a non-technical client can open a shared portal link, review a floor plan, leave notes, and export or submit marked plans without learning a complex drafting product.

## Current State

The current portal can load a PDF through the secure same-origin document endpoint, display the plan, select markup tools, save annotations, and export a marked PDF. Recent fixes also prevent tool clicks from remounting the PDF.

The missing product layer is the richer review workflow from the team's DraftTrack-style prototype:

- Comment pins with notes in the sidebar.
- Page thumbnails and page navigation.
- Zoom and fit controls.
- Clear customer-facing tool organization.
- Comment, layer, and page side panels.
- Stamp choices, undo, stroke width, and easier color selection.
- Measurement scale controls.
- Export output that includes comments, not just visible drawing marks.

## User Experience

The screen should open directly into the review workspace, not a landing page. The layout should be stable and familiar:

- Left rail: plan set files and page thumbnails for the selected plan.
- Center: PDF canvas with annotation overlay.
- Top toolbar: icon buttons for pan, pen, line, arrow, box, comment, stamp, measure, undo, zoom, fit, and export.
- Right rail: tabs for Comments, Layers, and Pages.
- Bottom or compact status area: current page, zoom level, selected tool, and save status.

The toolbar should use icons with accessible labels and hover tooltips. It should avoid text-heavy button labels, but still be understandable through titles and aria labels.

## Comment Notes

Comments are the core feature for this pass.

When the customer selects the comment tool and clicks the plan:

1. A small note editor opens near the click or in the right Comments panel.
2. The customer types a note.
3. Saving creates a numbered pin on the plan.
4. The note appears in the Comments tab with page number, author label, timestamp, and status.
5. Clicking a pin selects the matching sidebar note.
6. Clicking a sidebar note highlights the pin and scrolls the plan into view.

Comment statuses should be simple:

- Open
- Resolved

Staff-facing approval workflow can interpret these later, but the public customer screen should not expose complex internal statuses.

## Markup Tools

The first implementation should support:

- Pan
- Freehand pen
- Line
- Arrow
- Rectangle
- Comment pin
- Stamp
- Measure
- Undo last markup
- Clear current page markups, guarded by confirmation

Stamp choices should be limited and customer-friendly:

- Approved
- Revise
- Question
- Received

Color choices should be swatches instead of a raw color picker as the primary control. Stroke width should offer small, medium, and large choices.

## Pages, Zoom, And Measurement

PDFs should support multiple pages:

- Render selected page.
- Show page count.
- Allow previous/next page controls.
- Show thumbnails when practical.
- Store annotations by document and page.

Zoom controls should include zoom in, zoom out, and fit to page. Tool selection and color selection must not reload or remount the PDF.

Measurement should be useful but not overcomplicated:

- Provide common architectural scale presets.
- Allow a custom pixels-per-foot value.
- Display measurement labels on the plan.
- Save measurement annotations like other markups.

## Data And Safety

The public portal must continue using the existing portal session and secure document file endpoint. The browser should not need a public storage URL for protected documents.

Annotations should continue saving through server APIs with:

- Company ID from the portal session.
- Portal ID from the portal session.
- Document ID.
- Page number.
- Tool type.
- Coordinates normalized to the rendered page.
- Guest name.
- Comment text when applicable.
- Timestamp from the server or persisted record.

Client-entered notes must be treated as untrusted text:

- Escape rendered note content.
- Avoid injecting note text into HTML without escaping.
- Keep exported PDF text as plain text.

## Export

Export should produce a marked PDF for the selected document. The export should include:

- Visible markups on each page.
- Comment pins.
- A comment summary page listing note number, page, author, timestamp, status, and text.
- Stamp summary when stamps are used.

If full multi-page export is too large for the first implementation, the implementation must still preserve the API surface so multi-page export can be completed without redesigning annotation storage.

## Error Handling

The customer should see direct, plain-language states:

- Loading plan.
- Could not open portal.
- Could not load plan file.
- Could not save note.
- Saved.
- Offline or save pending.

Save failures should not erase local annotations. Failed annotations should remain visible with a pending/error state until retried or the page is refreshed.

## Testing

Implementation should include:

- Static tests that tool clicks do not call the full page render path.
- Tests for escaping comment note content.
- Tests for annotation normalization including document ID and page number.
- Browser QA on the deployed Vercel URL using a real uploaded floor plan.
- Manual QA for comment pin creation, sidebar note selection, zoom, page switching, export, and reload persistence.

## Non-Goals

This pass does not include:

- Staff dashboard redesign.
- Client intake redesign.
- Payment workflows.
- Auth model changes.
- Replacing Supabase storage.
- Rewriting the app in a new framework.
- Full CAD or DWG editing.

## Recommended Implementation Order

1. Restructure the public portal workspace layout while keeping existing data APIs.
2. Add comment note creation, sidebar rendering, selection, and persistence.
3. Add page number, zoom, fit, undo, swatches, stroke width, and stamp picker controls.
4. Add layers/pages tabs and page thumbnails.
5. Improve export to include comment summary.
6. Run tests, deploy, and QA the public portal URL in the in-app browser.
