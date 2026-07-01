import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8');
const migrationDir = new URL('../supabase/migrations/', import.meta.url);
const migrationFiles = readdirSync(migrationDir).filter((name) => name.endsWith('.sql')).sort();
const portalMigrationName = migrationFiles.find((name) => {
  const sql = readFileSync(new URL(`../supabase/migrations/${name}`, import.meta.url), 'utf8');
  return /client_portals/.test(sql) && /quest-client-portal-documents/.test(sql);
});
const portalMigration = portalMigrationName ? readFileSync(new URL(`../supabase/migrations/${portalMigrationName}`, import.meta.url), 'utf8') : '';

test('client portal plugin is registered, gated, and permissioned', () => {
  assert.match(source, /id: 'client_portal'[\s\S]*module_ids: \['client-portals'\]/);
  assert.match(source, /\['client_portals\.view', 'View client portals'\]/);
  assert.match(source, /\['client_portals\.manage', 'Manage client portals'\]/);
  assert.match(source, /\{ id: 'client-portals'[\s\S]*label: 'Client portals'[\s\S]*permission: 'client_portals\.view'/);
  assert.match(source, /if \(route\.section === 'client-portals'\) return renderClientPortalsPage\(route, companyId\);/);
  assert.match(source, /if \(clean\.startsWith\('client_portals\.'\)\) return \['client_portal'\];/);
});

test('public portal route bypasses workspace auth and renders client shell', () => {
  assert.match(source, /const CLIENT_PORTAL_SESSION_KEY = 'quest-client-portal-session-v1';/);
  assert.match(source, /if \(path\.startsWith\('\/portal\/'\)\) return \{ name: 'client-portal'/);
  assert.match(source, /if \(state\.route\.name === 'client-portal'\) \{/);
  assert.match(source, /renderClientPortalPublicPage\(state\.route\)/);
  assert.match(source, /class="client-portal-public"/);
});

test('public portal auto-opens and only asks for a password when required', () => {
  assert.match(source, /function shouldAutoOpenClientPortal\(token\)/);
  assert.match(source, /ensureClientPortalPublicOpen\(state\.route\.token\)/);
  assert.match(source, /function renderClientPortalPasswordGate\(token, portal\)/);
  assert.match(source, /payload\?\.password_required/);
  assert.match(source, /state\.clientPortalPublic = \{ token, loading: true \}/);
  assert.match(source, /body: JSON\.stringify\(\{ token, guest_name: CLIENT_PORTAL_GUEST_NAME, password: password \|\| '' \}\)/);
  assert.match(source, /<input type="hidden" name="token" value="\$\{h\(token\)\}" \/>/);
  assert.match(source, /<label><span>Portal password<\/span><input name="password" type="password"/);
  assert.doesNotMatch(source, /name="guest_name"/);
  assert.doesNotMatch(source, /Your name/);
});

test('staff portal workspace supports create, upload, copy, revoke, and annotation review', () => {
  assert.match(source, /function renderClientPortalsPage\(route, companyId\)/);
  assert.match(source, /data-action="open-client-portal-form"/);
  assert.match(source, /data-client-portal-form/);
  assert.match(source, /data-client-portal-document-form/);
  assert.match(source, /copy-client-portal-link/);
  assert.match(source, /regenerate-client-portal-link/);
  assert.match(source, /revoke-client-portal/);
  assert.match(source, /clientPortalAnnotationsForPortal/);
});

test('annotate engine renders shared owner + guest blueprint review surface', () => {
  // Shared annotate renderer, driven by mode.
  assert.match(source, /function renderClientPortalAnnotate\(mode\)/);
  assert.match(source, /ensureClientPortalAnnotateState\('owner'/);
  assert.match(source, /ensureClientPortalAnnotateState\('guest'/);
  assert.match(source, /async function mountClientPortalAnnotate\(\)/);
  // Full markup tool set (normalized-coordinate engine).
  assert.match(source, /const CP_TOOLS = \[/);
  for (const tool of ['freehand', 'line', 'rect', 'circle', 'arrow', 'highlight', 'label', 'comment', 'measure', 'marker']) {
    assert.match(source, new RegExp(`id: '${tool}'`), `tool ${tool} missing`);
  }
  // New action surface.
  assert.match(source, /action === 'cp-tool'/);
  assert.match(source, /action === 'cp-doc-status'/);
  assert.match(source, /action === 'cp-delete-annotation'/);
  assert.match(source, /data-cp-reply-form/);
  // PDF base rendered from a resolved URL (signed url / data url), cached for zoom.
  assert.match(source, /async function cpResolveBase\(doc, page\)/);
  assert.match(source, /window\.pdfjsLib\.getDocument\(url\)/);
  assert.match(source, /async function cpDocumentSourceUrl\(doc\)/);
  // Threads live in payload.thread.
  assert.match(source, /function normalizeClientPortalThread\(thread\)/);
  assert.match(source, /async function cpAddThreadReply\(id, text\)/);
  // Local/demo fallback so the guest link opens without the serverless backend.
  assert.match(source, /async function openClientPortalLocally\(token, password = ''\)/);
  assert.match(source, /function clientPortalByToken\(token\)/);
  assert.match(source, /if \(await openClientPortalLocally\(token, password\)\) return;/);
  // Styles for the annotate engine + the public shell.
  assert.match(styles, /\.client-portal-public/);
  assert.match(styles, /\.cp-annotate/);
  assert.match(styles, /\.cp-frame/);
});

test('document versions and per-document review status are modeled and persisted', () => {
  assert.match(source, /version_group_id/);
  assert.match(source, /function portalDocumentGroups\(portalId\)/);
  assert.match(source, /function nextVersionNumber\(portalId, groupId\)/);
  assert.match(source, /review_status/);
  assert.match(source, /CLIENT_PORTAL_REVIEW_STATUSES = \['pending', 'approved', 'revision', 'rejected'\]/);
  assert.match(source, /async function cpSetDocStatus\(status\)/);
  // Upgrade migration adds the new columns + policies (authored, not yet deployed).
  const upgradeName = migrationFiles.find((name) => /client_portal_review_upgrade/.test(name));
  assert.ok(upgradeName, 'Expected client_portal_review_upgrade migration');
  const upgrade = readFileSync(new URL(`../supabase/migrations/${upgradeName}`, import.meta.url), 'utf8');
  assert.match(upgrade, /add column if not exists version_group_id uuid/);
  assert.match(upgrade, /add column if not exists review_status text not null default 'pending'/);
  assert.match(upgrade, /managers insert portal annotations/);
  assert.match(upgrade, /managers insert portal events/);
});

test('guest annotation API supports per-annotation upsert, delete, and document status', () => {
  const apiDir = new URL('../api/', import.meta.url);
  const annotations = readFileSync(new URL('client-portal-annotations.js', apiDir), 'utf8');
  assert.match(annotations, /resolution=merge-duplicates/);
  assert.match(annotations, /body\.action === 'delete'/);
  assert.match(annotations, /payload\.author = 'guest'/);
  assert.ok(existsSync(new URL('client-portal-document-status.js', apiDir)), 'document-status endpoint should exist');
  const status = readFileSync(new URL('client-portal-document-status.js', apiDir), 'utf8');
  assert.match(status, /REVIEW_STATUSES/);
  assert.match(status, /client_portal_documents\?id=eq\./);
});

test('client portal migration creates tables, RLS, bucket, grants, and plugin allowlist updates', () => {
  assert.ok(portalMigrationName, 'Expected client portal migration');
  assert.match(portalMigration, /create table if not exists public\.client_portals/);
  assert.match(portalMigration, /create table if not exists public\.client_portal_documents/);
  assert.match(portalMigration, /create table if not exists public\.client_portal_annotations/);
  assert.match(portalMigration, /create table if not exists public\.client_portal_events/);
  assert.match(portalMigration, /insert into storage\.buckets[\s\S]*quest-client-portal-documents/);
  assert.match(portalMigration, /alter table public\.client_portals enable row level security;/);
  assert.match(portalMigration, /app_private\.has_company_permission\(company_id, 'client_portals\.view'\)/);
  assert.match(portalMigration, /app_private\.has_company_permission\(company_id, 'client_portals\.manage'\)/);
  assert.match(portalMigration, /plugin_id in \('crm', 'crm_2', 'underwriter'[\s\S]*'client_portal'/);
  assert.match(portalMigration, /when permission like 'client_portals\.%' then array\['client_portal'\]/);
  assert.match(portalMigration, /grant select, insert, update on public\.client_portals/);
});

test('client portal Vercel APIs exist and do not expose raw token or password fields', () => {
  const apiDir = new URL('../api/', import.meta.url);
  for (const name of ['client-portal-open.js', 'client-portal-document-url.js', 'client-portal-document-file.js', 'client-portal-annotations.js', 'client-portal-export-event.js']) {
    assert.ok(existsSync(new URL(name, apiDir)), `${name} should exist`);
    const api = readFileSync(new URL(name, apiDir), 'utf8');
    assert.match(api, /SUPABASE_SERVICE_ROLE_KEY/);
    assert.match(api, /function isSupabaseSecretKey/);
    assert.match(api, /function supabaseHeaders/);
    assert.match(api, /isSupabaseSecretKey\(\) \? \{\} : \{ Authorization: `Bearer \$\{serviceKey\(\)\}` \}/);
    assert.match(api, /sha256/);
    assert.doesNotMatch(api, /select=token/);
    assert.doesNotMatch(api, /select=password/);
  }
});
