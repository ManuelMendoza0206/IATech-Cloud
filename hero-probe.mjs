import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);

const probe = async (label) => {
  const data = await page.evaluate(() => {
    const arrow = document.querySelector('.hero-arrow');
    const img = document.querySelector('.hero-photo');
    const stage = document.querySelector('[class*="will-change:clip-path"]');
    const copy = document.querySelector('.hero-title')?.parentElement;
    const rect = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)];
    };
    const cs = (el, props) => {
      if (!el) return null;
      const s = getComputedStyle(el);
      return Object.fromEntries(props.map((p) => [p, s[p]]));
    };
    return {
      arrowRect: rect(arrow),
      arrowStyle: cs(arrow, ['opacity', 'zIndex', 'visibility', 'position']),
      imgRect: rect(img),
      imgStyle: cs(img, ['transform', 'translate', 'width', 'height']),
      imgNatural: img ? [img.naturalWidth, img.naturalHeight] : null,
      stageClip: stage ? getComputedStyle(stage).clipPath : null,
      stageRect: rect(stage),
      copyInert: copy ? copy.inert : null,
      section: rect(document.querySelector('main section')),
      sticky: rect(document.querySelector('main section')?.firstElementChild),
    };
  });
  console.log(label, JSON.stringify(data, null, 2));
};

await probe('scroll0');
for (const y of [90, 260, 450, 675, 900]) {
  await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
  await page.waitForTimeout(400);
  await probe('scroll' + y);
}

await browser.close();