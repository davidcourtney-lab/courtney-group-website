// Downloads the openly licensed science images listed in src/data/science-images.json
// into public/images/science/ before each build. Images already present are skipped.
// A failed download never fails the build; that image is simply left out of the site.
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';

const list = JSON.parse(await readFile(new URL('../src/data/science-images.json', import.meta.url), 'utf8'));
const dir = new URL('../public/images/science/', import.meta.url);
await mkdir(dir, { recursive: true });

for (const img of list) {
  const target = new URL(img.file, dir);
  try {
    await access(target);
    continue;
  } catch {}
  try {
    const res = await fetch(img.source, {
      headers: { 'User-Agent': 'CourtneyGroupWebsite/1.0 (https://davidgcourtney.com; david.courtney@qub.ac.uk)' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(target, Buffer.from(await res.arrayBuffer()));
    console.log(`fetched ${img.file}`);
  } catch (err) {
    console.warn(`skipped ${img.file}: ${err.message}`);
  }
}
