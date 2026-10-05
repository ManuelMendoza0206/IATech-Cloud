import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5199/mbti', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);

await page.evaluate(async () => {
  const step = window.innerHeight * 0.5;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 250));
  }
});
await page.waitForTimeout(2500);

const report = await page.evaluate(() => {
  const sel = ['.reveal-stamp', '.reveal-prose', '.reveal-figure', '.reveal-edge-right', '.reveal', '.reveal-rule'];
  const out = {};
  for (const s of sel) {
    out[s] = [...document.querySelectorAll(s)].map((el) => {
      const cs = getComputedStyle(el);
      return {
        text: (el.textContent || '').trim().slice(0, 14),
        opacity: +(+cs.opacity).toFixed(2),
        transform: cs.transform === 'none' ? 'none' : cs.transform.slice(0, 40),
        clip: cs.clipPath,
      };
    });
  }
  return out;
});
console.log(JSON.stringify(report, null, 1));
await browser.close();