// Temporary: collects candidate funder logos (official sites + Wikimedia Commons) for review.
import { writeFile, mkdir } from 'node:fs/promises';
const out = new URL('../public/images/funders/candidates/', import.meta.url);
await mkdir(out, { recursive: true });
const UA = { 'User-Agent': 'CourtneyGroupWebsite/1.0 (https://davidgcourtney.com; david.courtney@qub.ac.uk)' };
const funders = {
  erc: { pages: ['https://erc.europa.eu/', 'https://erc.europa.eu/managing-your-project/communicate-your-project'], commons: ['European Research Council logo', 'ERC logo'] },
  mrc: { pages: ['https://www.ukri.org/councils/mrc/', 'https://www.ukri.org/about-us/logos-and-brand-guidelines/'], commons: ['Medical Research Council logo', 'UKRI MRC logo'] },
  msca: { pages: ['https://marie-sklodowska-curie-actions.ec.europa.eu/', 'https://marie-sklodowska-curie-actions.ec.europa.eu/document-library'], commons: ['Marie Sklodowska-Curie Actions logo', 'MSCA logo'] },
  churchill: { pages: ['https://www.churchillfellowship.org/'], commons: ['Churchill Fellowship logo', 'Winston Churchill Memorial Trust logo'] },
};
const manifest = [];
let n = 0;
async function save(name, url, note) {
  try {
    const res = await fetch(url, { headers: UA });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(new URL(name, out), buf);
    manifest.push({ file: name, url, note, bytes: buf.length });
  } catch (e) {
    manifest.push({ file: null, url, note, error: e.message });
  }
}
for (const [key, f] of Object.entries(funders)) {
  for (const page of f.pages) {
    try {
      const html = await (await fetch(page, { headers: UA })).text();
      const urls = new Set();
      for (const m of html.matchAll(/(?:src|href|data-src)="([^"]+)"/g)) {
        const u = m[1];
        if (/logo|emblem|brand/i.test(u) && /\.(svg|png|jpe?g)(\?|$)/i.test(u)) urls.add(new URL(u.replace(/&amp;/g, '&'), page).href);
      }
      let i = 0;
      for (const u of [...urls].slice(0, 8)) {
        const ext = (u.match(/\.(svg|png|jpe?g)/i) || ['.png'])[0].toLowerCase();
        await save(`${key}-site-${n++}${ext}`, u, `from ${page}`);
        i++;
      }
      let j = 0;
      for (const m of html.matchAll(/<svg[\s\S]*?<\/svg>/g)) {
        if (!/logo|brand/i.test(m[0].slice(0, 400)) || m[0].length < 500) continue;
        const name = `${key}-inline-${n++}.svg`;
        const svg = m[0].includes('xmlns=') ? m[0] : m[0].replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
        await writeFile(new URL(name, out), svg);
        manifest.push({ file: name, url: page, note: 'inline svg' });
        if (++j >= 3) break;
      }
    } catch (e) {
      manifest.push({ url: page, error: e.message });
    }
  }
  for (const q of f.commons) {
    const api = new URL('https://commons.wikimedia.org/w/api.php');
    Object.entries({ action: 'query', format: 'json', generator: 'search', gsrnamespace: '6', gsrsearch: q, gsrlimit: '5', prop: 'imageinfo', iiprop: 'url|extmetadata', iiurlwidth: '600' }).forEach(([k, v]) => api.searchParams.set(k, v));
    try {
      const data = await (await fetch(api, { headers: UA })).json();
      for (const p of Object.values(data.query?.pages ?? {})) {
        const ii = p.imageinfo?.[0];
        if (!ii) continue;
        await save(`${key}-commons-${n++}.png`, ii.thumburl ?? ii.url, `${p.title} | ${ii.extmetadata?.LicenseShortName?.value ?? '?'} | ${ii.descriptionurl}`);
      }
    } catch (e) {
      manifest.push({ url: api.href, error: e.message });
    }
  }
}
await writeFile(new URL('manifest.json', out), JSON.stringify(manifest, null, 2));
console.log(JSON.stringify(manifest, null, 2));
