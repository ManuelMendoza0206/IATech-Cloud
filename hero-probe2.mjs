import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('console', (m) => console.log('PAGE:', m.text()));
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

const data = await page.evaluate(() => {
  const section = document.querySelector('main section');
  const sticky = section.firstElementChild;
  const frame = sticky.children[1];
  const stage = sticky.children[2];
  const r = (el) => {
    const b = el.getBoundingClientRect();
    return { x: Math.round(b.x * 100) / 100, y: Math.round(b.y * 100) / 100, w: Math.round(b.width * 100) / 100, h: Math.round(b.height * 100) / 100 };
  };
  return {
    innerWidth: window.innerWidth,
    clientWidth: document.documentElement.clientWidth,
    innerHeight: window.innerHeight,
    dpr: window.devicePixelRatio,
    section: r(section),
    sticky: r(sticky),
    stickyStyle: { display: getComputedStyle(sticky).display, h: getComputedStyle(sticky).height },
    copy: r(sticky.children[0]),
    frame: r(frame),
    frameStyle: { w: getComputedStyle(frame).width, h: getComputedStyle(frame).height, flex: getComputedStyle(frame).flex },
    stage: r(stage),
    fontsStatus: document.fonts.status,
  };
});
console.log(JSON.stringify(data, null, 2));
await browser.close();