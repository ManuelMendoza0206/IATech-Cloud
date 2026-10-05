import { chromium } from "playwright";
const shots = [
  { name: "desktop-declaraciones", w: 1440, h: 1000, y: 900 },
  { name: "desktop-pilares", w: 1440, h: 1000, y: 2400 },
  { name: "mobile-declaraciones", w: 390, h: 844, y: 700 },
  { name: "mobile-pilares", w: 390, h: 844, y: 2600 },
];
const b = await chromium.launch();
for (const s of shots) {
  const p = await b.newPage({ viewport: { width: s.w, height: s.h } });
  const errs = [];
  p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
  await p.goto("http://localhost:5199/mision-vision", { waitUntil: "networkidle" });
  await p.waitForTimeout(1200);
  await p.evaluate((y) => window.scrollTo(0, y), s.y);
  await p.waitForTimeout(2000);
  await p.screenshot({ path: `C:/Users/mfjm0/AppData/Local/Temp/opencode/${s.name}.png` });
  console.log(s.name, "errors:", errs.length ? errs.join(" | ") : "none");
  await p.close();
}
await b.close();
