// Prints the /cv/ page of the built site to public/david-courtney-cv.pdf.
// Run after `npm run build` by the "Update citations and CV" GitHub Action.
// Needs Playwright with Chromium (the Action installs both).
import { spawn } from 'node:child_process';
import { chromium } from 'playwright';

const port = 4329;
const server = spawn('npx', ['astro', 'preview', '--port', String(port)], { stdio: 'ignore' });
try {
  const url = `http://localhost:${port}/cv/`;
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(url)).ok) break;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: 'public/david-courtney-cv.pdf', format: 'A4', printBackground: true, preferCSSPageSize: true });
  await browser.close();
  console.log('wrote public/david-courtney-cv.pdf');
} finally {
  server.kill();
}
