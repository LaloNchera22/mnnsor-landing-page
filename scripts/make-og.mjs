import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/og-cover.png');

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=Instrument+Serif:ital@0;1&family=Inter:wght@500;600&display=swap" rel="stylesheet">
<style>
  *{margin:0;box-sizing:border-box}
  body{width:1200px;height:630px;background:#0a0a0a;color:#fff;font-family:'Inter',sans-serif;
    display:flex;flex-direction:column;justify-content:space-between;padding:72px;position:relative;overflow:hidden}
  .grid{position:absolute;inset:0;opacity:.10;
    background-image:linear-gradient(to right,rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.5) 1px,transparent 1px);
    background-size:64px 64px;-webkit-mask-image:radial-gradient(70% 70% at 50% 40%,#000,transparent)}
  .top{display:flex;align-items:center;gap:16px;position:relative}
  .top img{width:44px;height:44px;filter:invert(0)}
  .top span{font-size:30px;font-weight:600;letter-spacing:-.02em}
  .eyebrow{font-family:'IBM Plex Mono',monospace;font-size:18px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.5);position:relative;margin-bottom:26px}
  h1{font-family:'Instrument Serif',serif;font-size:92px;line-height:1.0;letter-spacing:-.02em;position:relative;max-width:960px}
  h1 i{color:rgba(255,255,255,.62)}
  .foot{display:flex;justify-content:space-between;align-items:flex-end;position:relative}
  .foot p{color:rgba(255,255,255,.55);font-size:22px;max-width:560px;line-height:1.4}
  .url{font-family:'IBM Plex Mono',monospace;font-size:20px;color:rgba(255,255,255,.7)}
</style></head>
<body>
  <div class="grid"></div>
  <div class="top">
    <img src="https://__ASSET__/1.png"/>
    <span>mnnsor</span>
  </div>
  <div>
    <div class="eyebrow">Sistema Autónomo de Obra</div>
    <h1>La inteligencia que construye <i>el mañana</i></h1>
  </div>
  <div class="foot">
    <p>Agentes de IA que planifican, coordinan y auditan tus obras.</p>
    <div class="url">mnnsor.io</div>
  </div>
</body></html>`;

// Use the environment's pre-installed Chromium when present; otherwise fall
// back to Playwright's own resolution (`npx playwright install` locally).
const { existsSync } = await import('node:fs');
const pinned = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const browser = await chromium.launch(
  existsSync(pinned) ? { executablePath: pinned } : {},
);
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
// serve the local asset inline by intercepting
await page.route('https://__ASSET__/**', async (route) => {
  const fs = await import('node:fs/promises');
  const buf = await fs.readFile(resolve(__dirname, '../public/1.png'));
  await route.fulfill({ status: 200, contentType: 'image/png', body: buf });
});
await page.setContent(html, { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.screenshot({ path: out });
await browser.close();
console.log('wrote', out);
