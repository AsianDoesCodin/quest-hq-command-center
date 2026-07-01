import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const source = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8');
const migrationUrl = new URL('../supabase/migrations/202606270800_workspace_builder_plugin.sql', import.meta.url);
const migration = existsSync(migrationUrl) ? readFileSync(migrationUrl, 'utf8') : '';

test('workspace builder is integrated as a current app plugin, not an old standalone clone', () => {
  assert.match(source, /id: 'workspace_builder'/);
  assert.match(source, /label: 'Workspace Builder'/);
  assert.match(source, /module_ids: \['workspaces'\]/);
  assert.match(source, /permissions: \['workspaces.view', 'workspaces.manage'\]/);
  assert.match(source, /id: 'workspaces'[\s\S]*label: 'Workspaces'[\s\S]*permission: 'workspaces.view'/);
  assert.match(source, /\{ label: 'Work', ids: \['dashboard', 'tasks', 'workspaces', 'underwriter'\] \}/);
  assert.match(source, /if \(route\.section === 'workspaces'\) return renderWorkspaceBuilderPage\(route, companyId\);/);
  assert.match(source, /function renderWorkspaceBuilderPage\(route, companyId\)/);
  assert.doesNotMatch(source, /id="companyCard"/);
  assert.doesNotMatch(source, /const KEY='qhq_cc_workspaces_v1'/);
});

test('workspace builder is the rich no-code module, Supabase-backed per company', () => {
  // Per-company doc persisted to Supabase with a localStorage fallback.
  assert.match(source, /const WORKSPACE_BUILDER_STORAGE_PREFIX = 'qhq_workspace_builder_v1';/);
  assert.match(source, /function ensureWorkspaceBuilderLoaded\(companyId\)/);
  assert.match(source, /async function saveWorkspaceBuilderDoc\(companyId\)/);
  assert.match(source, /function normalizeWorkspaceBuilderDoc\(doc\)/);
  assert.match(source, /from\('workspace_builder_state'\)/);
  // Real company members, not a mock directory.
  assert.match(source, /function wbMembers\(companyId\)/);
  assert.match(source, /companyAccessUsers\(companyId\)/);
  // 14 field types incl. the rich ones.
  assert.match(source, /const WB_FIELD_TYPES = \{/);
  for (const type of ['relationship', 'calculation', 'category', 'status', 'money', 'checkbox', 'textarea']) {
    assert.match(source, new RegExp(`\\b${type}: \\{ label:`), `field type ${type} missing`);
  }
  // The company IS the workspace — the tab shows its apps directly.
  assert.match(source, /function wbCompanyWorkspace\(companyId\)/);
  assert.match(source, /function wbViewCompanyHome\(companyId, workspace\)/);
  assert.match(source, /function wbViewApp\(route, companyId, workspace, app\)/);
  assert.match(source, /function renderWorkspaceBuilderModal\(\)/);
  assert.match(source, /function wbSubmitModal\(\)/);
  assert.match(source, /function wbRunAutomations\(companyId, workspace, app, item, event, prev\)/);
  assert.match(source, /function wbComputeCalc\(app, field, values\)/);
  assert.match(source, /function wbDonutSVG\(/);
  assert.match(source, /function wbBarsHTML\(/);
  assert.match(source, /function mountWorkspaceBuilder\(\)/);
  // Plugin install still reveals the nav module.
  assert.match(source, /function revealPluginModulesInNavigation\(plugin\)/);
  assert.match(source, /localStorage\.setItem\(SIDEBAR_COLLAPSED_KEY, 'false'\)/);
  // The legacy basic builder is gone.
  assert.doesNotMatch(source, /function handleWorkspaceBuilderAction\(node\)/);
  assert.doesNotMatch(source, /function seedWorkspaceBuilderState\(companyId\)/);
});

test('workspace builder UI is scoped and styled for dense command-center use', () => {
  assert.match(styles, /\.wb-card\s*\{/);
  assert.match(styles, /\.wb-grid\s*\{/);
  assert.match(styles, /\.wb-field-row\s*\{/);
  assert.match(styles, /\.wb-table\s*\{/);
  assert.match(styles, /\.wb-palette-item\s*\{/);
  assert.match(styles, /\.wb-modal\s*\{/);
  assert.match(styles, /\.wb-auto-row\s*\{/);
});

test('workspace builder state migration creates the per-company table with RLS', () => {
  const upgradeUrl = new URL('../supabase/migrations/202607011400_workspace_builder_state.sql', import.meta.url);
  assert.ok(existsSync(upgradeUrl), 'Expected workspace_builder_state migration');
  const upgrade = readFileSync(upgradeUrl, 'utf8');
  assert.match(upgrade, /create table if not exists public\.workspace_builder_state/);
  assert.match(upgrade, /doc jsonb not null/);
  assert.match(upgrade, /enable row level security/);
  assert.match(upgrade, /has_company_permission\(company_id, 'workspaces\.view'\)/);
  assert.match(upgrade, /has_company_permission\(company_id, 'workspaces\.manage'\)/);
});

test('workspace builder plugin is allowed by Supabase plugin RPCs', () => {
  assert.ok(migration, 'Expected workspace builder plugin migration');
  assert.match(migration, /drop constraint if exists company_plugins_known_plugin_check/);
  assert.match(migration, /plugin_id in \([\s\S]*'workspace_builder'/);
  assert.match(migration, /when permission like 'workspaces\.%'/);
  assert.match(migration, /public\.set_company_plugin/);
  assert.match(migration, /clean_plugin_id not in \([\s\S]*'workspace_builder'/);
  assert.match(migration, /public\.company_plugins \(company_id, plugin_id, status/);
  assert.match(migration, /values \('lumen', 'workspace_builder', 'installed'/);
});
