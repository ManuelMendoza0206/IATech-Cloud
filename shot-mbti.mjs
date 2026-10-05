import { chromium } from 'playwright';

const URL = 'http://localhost:5199/mbti';
const OUT = 'C:/Users/mfjm0/AppData/Local/Temp/opencode/mbti';

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const browser = await chromium.launch();

for (const vp of VIEWPORTS) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));

  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  // Full page: forces every onScroll reveal to fire.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.6;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 220));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 500));
  });
  await page.waitForTimeout(1400);

  // Horizontal overflow check
  const overflow = await page.evaluate(() => ({
    docW: document.documentElement.scrollWidth,
    winW: window.innerWidth,
  }));

  await page.screenshot({ path: `${OUT}-${vp.name}-full.png`, fullPage: true });

  // Section-by-section frames for design review
  const targets = ['#teoria', '#evidencia', '#equipo'];
  for (const t of targets) {
    const el = await page.$(t);
    if (el) await el.screenshot({ path: `${OUT}-${vp.name}-${t.slice(1)}.png` });
  }

  console.log(vp.name, JSON.stringify(overflow), 'errors:', errors.length ? errors : 'none');
  await page.close();
}

await browser.close();