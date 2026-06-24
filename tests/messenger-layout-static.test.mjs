import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8');

test('messages page renders a messenger-style three column shell', () => {
  assert.match(source, /data-route="\$\{h\(route\.name\)\}" data-section="\$\{h\(route\.section \|\| ''\)\}"/);
  assert.match(source, /<div class="messenger-list-head">/);
  assert.match(source, /<section class="messages-thread-panel panel">/);
  assert.match(source, /function renderMessageDetailsRail\(companyId, conversation\)/);
  assert.match(source, /<aside class="message-details-rail">/);
  assert.match(source, /renderMessageDetailsRail\(companyId, selected\)/);
});

test('messages composer uses icon attach and send controls around the input', () => {
  assert.match(source, /<form class="message-composer"/);
  assert.match(source, /class="icon-button message-attach-button"/);
  assert.match(source, /<input name="body" placeholder="Message \$\{h\(conversation\.title\)\}"/);
  assert.match(source, /<button class="icon-button btn-primary" type="submit" title="Send">/);
});

test('messenger styling keeps chat-first layout across desktop and mobile', () => {
  assert.match(styles, /\/\* Messenger-style chat app surface \*\//);
  assert.match(styles, /@media \(min-width: 981px\) \{[\s\S]*\.quest-app\[data-section="messages"\] \{\s*height: 100dvh;[\s\S]*height: 100vh;[\s\S]*overflow-y: hidden;/);
  assert.match(styles, /@media \(min-width: 981px\) \{[\s\S]*\.quest-app\[data-section="messages"\] \.work-surface \{[\s\S]*height: calc\(100vh - 64px\);[\s\S]*overflow-y: hidden;/);
  assert.match(styles, /grid-template-columns: minmax\(260px, 304px\) minmax\(560px, 1fr\) minmax\(220px, 272px\);/);
  assert.match(styles, /height: min\(820px, calc\(100vh - 180px\)\);/);
  assert.match(styles, /\.message-bubble\.own \.message-card \{\s*background: var\(--msg-blue\);/);
  assert.match(styles, /\.message-details-rail \{\s*display: grid;/);
  assert.match(styles, /\.messages-page \.mobile-thread-back \{\s*display: none;/);
  assert.match(styles, /@media \(max-width: 980px\)[\s\S]*\.messages-page \.mobile-thread-back \{\s*display: inline-flex;/);
  assert.match(styles, /@media \(max-width: 980px\)[\s\S]*\.message-details-rail \{\s*display: none;/);
});
