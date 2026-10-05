import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);

for (const y of [0, 100, 225, 450, 675, 900, 1000]) {
  await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
  await page.waitForTimeout(350);
  const p = await page.evaluate(() => window.__p);
  const clip = await page.evaluate(() => getComputedStyle(document.querySelector('[class*="will-change:clip-path"]')).clipPath);
  const arrow = await page.evaluate(() => getComputedStyle(document.querySelector('.hero-arrow')).opacity);
  console.log('scrollY', y, 'progress', p, 'clip', clip, 'arrowOpacity', arrow);
}
await browser.close();