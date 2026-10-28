// Checks on the built site (run `npm run build` first; `npm test` does both).
// Node's built-in test runner only: no test dependency.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { PROJECTS } from '../src/data/projects.ts';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
const page = path => readFileSync(join(dist, path), 'utf8');
const walk = dir => readdirSync(dir).flatMap(name => {
  const full = join(dir, name);
  return statSync(full).isDirectory() ? walk(full) : [full];
});

// The owner's collection order (direction board, 2026-10-28).
const ORDER = ['scamreport', 'poke-rules-helper', 'droneaid', 'nummailai', 'dev-memory-ai',
  'neural-network-from-scratch', 'basic-memory-access-benchmark', 'firstmate', 'spaceship-titanic'];
const CREDIT = 'Solo rebuild of the 5-person CSC234 team project, built with AI coding agents I directed.';

const hrefsIn = (html, pattern) => [...html.matchAll(pattern)].map(m => m[1]);
const mainOf = html => html.slice(html.indexOf('<main'), html.indexOf('</main>'));

test('the data, the home tabs, the home chapters and the menu follow the owner\'s order', () => {
  assert.deepEqual(PROJECTS.map(p => p.slug), ORDER);
  const home = page('index.html');
  const main = mainOf(home);
  const tabs = hrefsIn(main.slice(0, main.indexOf('id="work"')), /class="folder field[^"]*"[^>]*href="\/projects\/([^/]+)\/"/g);
  assert.deepEqual(tabs, ORDER);
  const chapters = hrefsIn(main, /class="chapter field"[^>]*data-vt-field="([^"]+)"/g);
  assert.deepEqual(chapters, ORDER);
  const menu = home.slice(home.indexOf('class="menu-panel"'), home.indexOf('</details>'));
  assert.deepEqual(hrefsIn(menu, /href="\/projects\/([^/]+)\/"/g), ORDER);
});

test('every project page links to the next project, and the last wraps to the first', () => {
  ORDER.forEach((slug, i) => {
    const html = page(`projects/${slug}/index.html`);
    const band = html.slice(html.indexOf('aria-label="Next project"'));
    assert.match(band, new RegExp(`href="/projects/${ORDER[(i + 1) % ORDER.length]}/"`), slug);
  });
});

test('the ScamReport page shows v2: its five captures, credit line and own repository', () => {
  const html = page('projects/scamreport/index.html');
  const main = mainOf(html);
  assert.ok(main.includes('ScamReport v2'));
  assert.ok(main.includes(CREDIT), 'credit line verbatim');
  assert.match(main, /href="https:\/\/github\.com\/AokDesu\/scamreport-v2"/);
  assert.ok(!html.includes('CSC234-UserCenteredMobileApp'), 'no team repository link');
  for (const old of ['Flutter', 'guest-feed', 'moderation-queue', 'feed-search', 'user-report']) assert.ok(!main.includes(old), old);
  const imgs = [...main.matchAll(/<img [^>]*>/g)].map(m => m[0]);
  assert.equal(imgs.length, 5);
  const ratios = imgs.map(tag => {
    const w = Number(tag.match(/ width="(\d+)"/)?.[1]);
    const h = Number(tag.match(/ height="(\d+)"/)?.[1]);
    assert.ok(w > 0 && h > 0, 'every capture has width and height');
    assert.match(tag, / alt="[^"]{12,}"/, 'every capture has alt text');
    return w / h;
  });
  assert.equal(ratios.filter(r => Math.abs(r - 390 / 844) < 0.01).length, 3, 'three 390x844 phone captures, uncropped');
  assert.equal(ratios.filter(r => r > 1.5).length, 2, 'two console captures');
});

test('the Rules Helper page uses the confirmed open-exam wording and keeps the repository private', () => {
  const main = mainOf(page('projects/poke-rules-helper/index.html'));
  assert.ok(main.includes('Built as the CSC493 Intelligent Systems open-exam project.'));
  assert.ok(main.includes('Individual Project · CSC493 open-exam project'));
  assert.ok(main.includes('Private repository'));
  assert.ok(!/preparation/i.test(main));
  assert.ok(!/github\.com\/[^"\s]*poke-rules-helper/i.test(main), 'no repository link or name');
});

test('both about.md copies drop the private repository name and the exam-preparation wording', () => {
  for (const base of ['content', 'src/content/projects']) {
    const text = readFileSync(join(root, base, 'ai-data/poke-rules-helper/about.md'), 'utf8');
    assert.ok(!text.includes('AokDesu/poke-rules-helper'), base);
    assert.ok(!/preparation/i.test(text), base);
    assert.ok(text.includes('CSC493 open-exam project'), base);
  }
});

test('content/ mirrors src/content/projects/ exactly', () => {
  const a = walk(join(root, 'content')).map(f => relative(join(root, 'content'), f)).sort();
  const b = walk(join(root, 'src/content/projects')).map(f => relative(join(root, 'src/content/projects'), f)).sort();
  assert.deepEqual(a, b);
  for (const file of a) {
    assert.ok(readFileSync(join(root, 'content', file)).equals(readFileSync(join(root, 'src/content/projects', file))), file);
  }
});

test('no client or marketplace name, contact detail, other profile or 3D leftover ships', () => {
  const files = [...walk(dist).filter(f => /\.(html|js|css|xml|txt)$/.test(f)),
    ...['README.md', 'PRODUCT.md', 'DESIGN.md'].map(f => join(root, f)).filter(existsSync)];
  for (const file of files) {
    const text = readFileSync(file, 'utf8');
    const where = relative(root, file);
    assert.ok(!/thaiway|zoon\s*studio|fastwork/i.test(text), `client or marketplace name in ${where}`);
    if (!where.startsWith('dist')) continue;
    for (const banned of ['poly.pizza', 'WebGLRenderer', '.glb', 'mailto:', 'tel:', 'Three.js']) {
      assert.ok(!text.includes(banned), `${banned} in ${where}`);
    }
    for (const [, owner] of text.matchAll(/github\.com\/([A-Za-z0-9-]+)/g)) {
      assert.ok(['AokDesu', 'kunchenguid'].includes(owner), `github.com/${owner} in ${where}`);
    }
  }
  assert.ok(!existsSync(join(root, 'public/models')));
  const pkg = readFileSync(join(root, 'package.json'), 'utf8') + readFileSync(join(root, 'package-lock.json'), 'utf8');
  assert.ok(!/"(node_modules\/)?three"/.test(pkg), 'three is not a dependency');
});

test('the only personal details are the name, the role line and the GitHub profile', () => {
  const home = page('index.html');
  assert.ok(home.includes('Aekarut Phetpradit'));
  assert.ok(home.includes('KMUTT student · Software Developer'));
  assert.ok(home.includes('href="https://github.com/AokDesu"'));
  assert.ok(!/@[a-z0-9-]+\.(com|net|org|th|ac)\b/i.test(home.replace(/@fontsource[^"']*/g, '')), 'no email address');
});

const luminance = hex => {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map(c => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
test('every chapter colour reads at 4.5:1 or more with its text colour', () => {
  for (const p of PROJECTS) {
    const [hi, lo] = [luminance(p.color), luminance(p.ink)].sort((x, y) => y - x);
    assert.ok((hi + 0.05) / (lo + 0.05) >= 4.5, `${p.slug} ${p.color}/${p.ink}`);
  }
});

test('content is never hidden by CSS unless script runs and motion is allowed', () => {
  const css = walk(dist).filter(f => f.endsWith('.css')).map(f => readFileSync(f, 'utf8')).join('\n')
    + walk(dist).filter(f => f.endsWith('.html')).map(f => [...readFileSync(f, 'utf8').matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map(m => m[1]).join('\n')).join('\n');
  for (const match of css.matchAll(/([^{}]+)\{[^{}]*opacity:\s*0[;}]/g)) {
    const selector = match[1].trim();
    if (selector.startsWith('to') || selector.startsWith('from') || /^\d/.test(selector)) continue;
    assert.ok(selector.includes('.js'), `hidden without the script gate: ${selector}`);
    const before = css.slice(0, match.index);
    const media = before.lastIndexOf('@media');
    assert.ok(media >= 0 && before.slice(media).includes('prefers-reduced-motion:no-preference'), `hidden outside the motion query: ${selector}`);
  }
});
