import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');

test('crm navigation uses leads quotes and production funnels', () => {
  assert.match(source, /\{ id: 'contacts', group: 'Leads · Top of Funnel', label: 'Leads'/);
  assert.match(source, /\{ id: 'deals', group: 'Quotes · Bottom of Funnel', label: 'Quotes'/);
  assert.match(source, /\{ id: 'jobs', group: 'Production', label: 'Jobs'/);
  assert.match(source, /\{ label: 'Leads · Top of Funnel', ids: \['contacts'\] \}/);
  assert.match(source, /\{ label: 'Quotes · Bottom of Funnel', ids: \['deals'\] \}/);
});

test('lead and quote funnels match the provided crm model', () => {
  assert.match(source, /const DEFAULT_CONTACT_STAGES = \[\s*\{ name: 'Prospect'/);
  assert.match(source, /\{ name: 'Contacted', color:/);
  assert.match(source, /\{ name: 'Nurturing', color:/);
  assert.match(source, /const DEFAULT_DEAL_STAGES = \[\s*\{ name: 'Underwriting'/);
  assert.match(source, /\{ name: 'Estimate Sent', color:/);
  assert.match(source, /\{ name: 'Contract Sent', color:/);
  assert.match(source, /\{ name: 'Waiting to Sign', color:/);
  assert.match(source, /\{ name: 'Won', color:/);
});

test('record detail routes read as leads and quotes instead of contacts and deals', () => {
  assert.match(source, /All Leads <span class="sf-tab-kind">\| Leads<\/span>/);
  assert.match(source, /\$\{h\(contact\.name\)\} <span class="sf-tab-kind">\| Lead<\/span>/);
  assert.match(source, /<div class="sf-record-label">Lead<\/div>/);
  assert.match(source, /All Quotes <span class="sf-tab-kind">\| Quotes<\/span>/);
  assert.match(source, /\$\{h\(deal\.name\)\} <span class="sf-tab-kind">\| Quote<\/span>/);
  assert.match(source, /<div class="sf-record-label">Quote<\/div>/);
  assert.match(source, /Convert to Job/);
});

test('account record tabs use leads and quotes language', () => {
  assert.doesNotMatch(source, /\['contacts', 'Contacts'/);
  assert.doesNotMatch(source, /\['deals', 'Deals'/);
  assert.match(source, /\['contacts', 'Leads', contacts\.length\]/);
  assert.match(source, /\['deals', 'Quotes', deals\.length\]/);
});
