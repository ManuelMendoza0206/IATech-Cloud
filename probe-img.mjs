import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5199/mbti', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
const r = await page.evaluate(() => {
  const img = document.querySelector('img[src*="mbti-cubo"]');
  if (!img) return 'no img';
  const cs = getComputedStyle(img);
  const box = img.getBoundingClientRect();
  const nat = { w: img.naturalWidth, h: img.naturalHeight };
  return {
    className: img.className,
    filter: cs.filter,
    objectFit: cs.objectFit,
    renderedBox: { w: Math.round(box.width), h: Math.round(box.height) },
    natural: nat,
    aspect: (box.width / box.height).toFixed(3),
    grayscaleRuleFound: [...document.styleSheets].some((s) => {
      try { return [...s.cssRules].some((r) => r.selectorText === '.grayscale'); } catch { return false; }
    }),
  };
});
console.log(JSON.stringify(r, null, 1));
await browser.close();