import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const envExample = readFileSync(new URL('../.env.example', import.meta.url), 'utf8');
const productionQa = readFileSync(new URL('../PRODUCTION_QA_CHECKLIST.md', import.meta.url), 'utf8');
const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');

test('launch config supports public read-only demo and manual billing mode', () => {
  assert.match(source, /demoModeEnabled:\s*import\.meta\.env\.VITE_DEMO_MODE_ENABLED !== 'false'/);
  assert.match(source, /demoReadonly:\s*import\.meta\.env\.VITE_DEMO_READONLY !== 'false'/);
  assert.match(source, /billingMode:\s*import\.meta\.env\.VITE_BILLING_MODE \|\| 'manual'/);
  assert.match(source, /function isReadOnlyDemo\s*\(/);
  assert.match(source, /function requireMutableWorkspace\s*\(/);
  assert.match(source, /if \(!CONFIG\.demoModeEnabled\) return '';/);
  assert.match(source, /Read-only sample workspace/);
  assert.match(source, /Manual approval/);
  assert.match(envExample, /VITE_DEMO_MODE_ENABLED=true/);
  assert.match(envExample, /VITE_DEMO_READONLY=true/);
  assert.match(envExample, /VITE_BILLING_MODE=manual/);
});

test('production docs no longer describe legacy local login or three demo companies as release criteria', () => {
  assert.doesNotMatch(productionQa, /lumen123/);
  assert.doesNotMatch(productionQa, /Company switcher shows one entry each for Drafting, Lumen, and Roofing/);
  assert.match(productionQa, /Demo opens as read-only sample data/);
  assert.match(productionQa, /Manual approval/);
  assert.doesNotMatch(readme, /lumen123/);
  assert.match(readme, /read-only demo/i);
});
