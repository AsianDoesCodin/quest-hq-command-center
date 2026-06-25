import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');

test('pipeline stage sidebar clicks leave detail records for filtered pipeline lists', () => {
  assert.match(source, /function pipelineStageRouteParams\s*\(/);
  assert.match(source, /function isPipelineDetailRoute\s*\(/);
  assert.match(source, /route\.params\.has\('contact_id'\)/);
  assert.match(source, /route\.params\.has\('deal_id'\)/);
  assert.match(source, /route\.params\.has\('job_id'\)/);
  assert.match(source, /const nextPath = companyPath\(kind,\s*pipelineStageRouteParams\(nextStage\),\s*activeCompanyId\(\)\)/);
  assert.match(source, /navigate\(nextPath/);
});

test('pipeline stage changes update the URL instead of rendering against stale route params', () => {
  const match = source.match(/function setPipelineStage\(kind, stage, forceNav\) \{[\s\S]*?\n\}/);
  assert.ok(match, 'setPipelineStage function should exist');
  assert.match(match[0], /const nextPath = companyPath\(kind,\s*pipelineStageRouteParams\(nextStage\),\s*activeCompanyId\(\)\)/);
  assert.match(match[0], /navigate\(nextPath(?:,|\))/);
  assert.doesNotMatch(match[0], /else render\(\)/);
});
