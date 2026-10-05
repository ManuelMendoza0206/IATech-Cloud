import { chromium } from 'playwright';

const url = process.env.URL || 'http://localhost:5173/';
const out = process.env.OUT || 'C:/Users/mfjm0/AppData/Local/Temp/opencode/hero';
const tag = process.env.TAG || 'new';

const browser = await chromium.launch();

async function shots(width, height, prefix, positions) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);

  const metrics = await page.evaluate(() => {
    const section = document.querySelector('main section');
    const sticky = section?.firstElementChild;
    return {
      sectionTop: section?.getBoundingClientRect().top ?? 0,
      sectionHeight: section?.offsetHeight ?? 0,
      stickyHeight: sticky?.getBoundingClientRect().height ?? 0,
      docHeight: document.documentElement.scrollHeight,
      vh: window.innerHeight,
      vw: window.innerWidth,
    };
  });
  console.log(prefix, JSON.stringify(metrics));

  for (const [name, y] of Object.entries(positions)) {
    await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y(metrics));
    await page.waitForTimeout(700);
    await page.screenshot({ path: `${out}-${tag}-${prefix}-${name}.png` });
  }
  await page.close();
}

const range = (m) => Math.max(0, m.sectionHeight - m.stickyHeight);

await shots(1440, 900, 'desktop', {
  rest: () => 0,
  drift: (m) => Math.round(range(m) * 0.1),
  mid: (m) => Math.round(range(m) * 0.42),
  full: (m) => Math.round(range(m) * 0.75),
  past: (m) => Math.round(range(m) + m.vh * 1.2),
});

await shots(390, 844, 'mobile', {
  rest: () => 0,
  past: (m) => Math.round(m.vh * 1.5),
});

await browser.close();