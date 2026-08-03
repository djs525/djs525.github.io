/**
 * Regenerates the @keyframes in src/studio/Signature.module.css.
 *
 * Distance along the signature's route is not the same as ink appearing:
 * stretches of it cross already-inked areas or empty space, and the pen is
 * wider than a stroke, so crossing one reveals a large piece at once. Advancing
 * the dash at a constant rate looks like dump, freeze, dump, freeze.
 *
 * This samples the reveal at 160 points, measures the inked area at each, and
 * inverts that curve so equal slices of time land equal slices of ink. Paste
 * the output over the @keyframes block.
 *
 * Playwright is not a dependency of this project — it is needed only here, to
 * rasterise the reveal and count pixels. Install it for the one run:
 *
 *   npm i --no-save playwright && npx playwright install chromium --only-shell
 *   node scripts/signature-timing.mjs [penWidth]
 */
import { readFileSync } from 'node:fs';
import { chromium } from 'playwright';
const src = readFileSync(new URL('../src/studio/signature-path.ts', import.meta.url), 'utf8');
const GLYPH = src.match(/SIGNATURE_GLYPH =\s*\n\s*"([\s\S]*?)";/)[1];
const ROUTE = src.match(/SIGNATURE_ROUTE =\s*\n\s*"([\s\S]*?)";/)[1];
const PEN = Number(process.argv[2] ?? src.match(/PEN_WIDTH = (\d+)/)[1]);
const N = 160;

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1080, height: 240 } });
await p.setContent(`<body style="margin:0">
<svg id="s" xmlns="http://www.w3.org/2000/svg" viewBox="0 -200 1080 232" width="1080" height="232">
  <defs><clipPath id="c"><path d="${GLYPH}"/></clipPath></defs>
  <g clip-path="url(#c)"><path id="pen" d="${ROUTE}" fill="none" stroke="#000" stroke-width="${PEN}"
    stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dasharray="1 1" stroke-dashoffset="1"/></g>
</svg></body>`);

const area = await p.evaluate(async (N) => {
  const svg = document.getElementById('s'), pen = document.getElementById('pen');
  const cv = document.createElement('canvas'); cv.width = 540; cv.height = 116;
  const cx = cv.getContext('2d', { willReadFrequently: true });
  const out = [];
  for (let i = 0; i <= N; i++) {
    pen.setAttribute('stroke-dashoffset', String(1 - i/N));
    const img = new Image();
    await new Promise(r => { img.onload = r; img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(new XMLSerializer().serializeToString(svg)); });
    cx.clearRect(0,0,cv.width,cv.height); cx.drawImage(img,0,0,cv.width,cv.height);
    const d = cx.getImageData(0,0,cv.width,cv.height).data;
    let ink = 0; for (let k=3;k<d.length;k+=4) if (d[k]>40) ink++;
    out.push(ink);
  }
  return out;
}, N);
await b.close();

const total = area.at(-1);
// Monotone: ink can only grow.
for (let i=1;i<area.length;i++) if (area[i] < area[i-1]) area[i] = area[i-1];

// Invert: for each even slice of ink, find the progress that reveals it.
const STOPS = 20;
const rows = [];
for (let k = 0; k <= STOPS; k++) {
  const target = (k / STOPS) * total;
  let i = area.findIndex(v => v >= target);
  if (i < 0) i = N;
  // linear interpolation between samples
  let prog = i / N;
  if (i > 0 && area[i] !== area[i-1]) {
    const f = (target - area[i-1]) / (area[i] - area[i-1]);
    prog = (i - 1 + f) / N;
  }
  rows.push({ t: k / STOPS, p: prog });
}
console.log(`pen ${PEN}, coverage total ${total}px`);
console.log('CSS keyframes (time% -> dashoffset):');
for (const r of rows) {
  console.log(`  ${(r.t*100).toFixed(0).padStart(3)}% { stroke-dashoffset: ${(1-r.p).toFixed(4)}; }`);
}
