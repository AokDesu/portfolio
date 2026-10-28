// Uses the optional chrome-devtools-axi CLI and Chrome; no npm test dependency.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { delimiter, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.webp': 'image/webp', '.svg': 'image/svg+xml' };
const browserPath = process.env.CHROME_DEVTOOLS_AXI_EXECUTABLE_PATH || [
  ...(process.env.PATH || '').split(delimiter).flatMap(dir =>
    ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'chrome.exe'].map(name => join(dir, name))),
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ...['PROGRAMFILES', 'PROGRAMFILES(X86)', 'LOCALAPPDATA'].filter(key => process.env[key])
    .map(key => join(process.env[key], 'Google/Chrome/Application/chrome.exe')),
].find(existsSync);

const browser = (session, args, script) => new Promise((resolve, reject) => {
  const child = execFile('chrome-devtools-axi', args, {
    env: { ...process.env, CHROME_DEVTOOLS_AXI_SESSION: session, ...(browserPath ? { CHROME_DEVTOOLS_AXI_EXECUTABLE_PATH: browserPath } : {}) },
    timeout: 60_000,
    maxBuffer: 1024 * 1024,
  }, (error, stdout, stderr) => {
    if (error) reject(Object.assign(error, { stdout, stderr }));
    else resolve(stdout);
  });
  child.stdin.end(script);
});

test('the opened Projects menu and its names fit phone viewports', async t => {
  if (!process.env.CHROME_DEVTOOLS_AXI_BROWSER_URL && process.env.CHROME_DEVTOOLS_AXI_AUTO_CONNECT !== '1'
      && (!browserPath || !existsSync(browserPath))) {
    t.skip('Chrome/Chromium unavailable; install a browser or set CHROME_DEVTOOLS_AXI_EXECUTABLE_PATH.');
    return;
  }
  const session = `portfolio-menu-test-${process.pid}`;
  try {
    await browser(session, ['newpage', 'about:blank']);
  } catch (error) {
    if (error.code === 'ENOENT') {
      t.skip('chrome-devtools-axi unavailable; install the CLI to run the browser regression.');
      return;
    }
    throw error;
  }
  t.after(() => browser(session, ['stop']));

  const server = createServer(async (request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const file = resolve(dist, `.${pathname.endsWith('/') ? `${pathname}index.html` : pathname}`);
    if (!file.startsWith(dist.endsWith(sep) ? dist : `${dist}${sep}`)) {
      response.writeHead(403).end();
      return;
    }
    try {
      response.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
      response.end(await readFile(file));
    } catch {
      response.writeHead(404).end();
    }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => {
    server.closeAllConnections();
    server.close(resolve);
  }));
  const url = `http://127.0.0.1:${server.address().port}/`;

  for (const width of [360, 375, 390]) {
    await t.test(`${width}px`, async () => {
      await browser(session, ['emulate', '--viewport', `${width}x844x1,mobile,touch`]);
      const output = await browser(session, ['run'], `
        await page.open(${JSON.stringify(url)});
        await page.eval(async () => { await document.fonts.ready; });
        await page.click('.projects-menu summary');
        console.log(JSON.stringify(await page.eval(() => {
          const panel = document.querySelector('.menu-panel');
          const box = panel.getBoundingClientRect();
          return {
            viewport: innerWidth,
            documentWidth: document.documentElement.scrollWidth,
            left: box.left, right: box.right, height: box.height,
            open: document.querySelector('.projects-menu').open,
            names: [...panel.querySelectorAll('.name')].map(name => {
              const range = document.createRange();
              range.selectNodeContents(name);
              return { text: name.textContent, lines: [...range.getClientRects()].map(r => ({ left: r.left, right: r.right })) };
            }),
          };
        })));
      `);
      const menu = JSON.parse(output);
      assert.equal(menu.viewport, width, 'real emulated viewport');
      assert.ok(menu.open && menu.height > 0, 'menu is open and rendered');
      assert.ok(menu.left >= 0 && menu.right <= width, `panel spans ${menu.left}..${menu.right} at ${width}px`);
      assert.ok(menu.documentWidth <= width, 'no horizontal scrolling');
      assert.equal(menu.names.length, 9, 'all projects are present');
      for (const name of menu.names) {
        for (const line of name.lines) {
          assert.ok(line.left >= 0 && line.right <= width, `${name.text} is fully inside the viewport`);
        }
      }
    });
  }
});
