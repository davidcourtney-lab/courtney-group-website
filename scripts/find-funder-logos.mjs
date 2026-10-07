// Temporary: second pass for MSCA logo and Churchill brand colour.
import { writeFile, mkdir } from 'node:fs/promises';
const out = new URL('../public/images/funders/candidates2/', import.meta.url);
await mkdir(out, { recursive: true });
const UA = { 'User-Agent': 'CourtneyGroupWebsite/1.0 (https://davidgcourtney.com; david.courtney@qub.ac.uk)' };
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
const pages = [
  'https://marie-sklodowska-curie-actions.ec.europa.eu/about-msca',
  'https://marie-sklodowska-curie-actions.ec.europa.eu/news',
  'https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships',
  'https://rea.ec.europa.eu/funding-and-grants/horizon-europe-marie-sklodowska-curie-actions_en',
  'https://msca-alumni.eu/',
];
for (const page of pages) {
  try {
    const html = await (await fetch(page, { headers: UA })).text();
    const urls = new Set();
    for (const m of html.matchAll(/(?:src|href|data-src|srcset)="([^"\s]+)/g)) {
      const u = m[1];
      if (/msca|marie|curie/i.test(u) && /\.(svg|png|jpe?g)(\?|$)/i.test(u)) urls.add(new URL(u.replace(/&amp;/g, '&'), page).href);
    }
    for (const u of [...urls].slice(0, 10)) {
      const ext = (u.match(/\.(svg|png|jpe?g)/i) || ['.png'])[0].toLowerCase();
      await save(`msca-${n++}${ext}`, u, `from ${page}`);
    }
  } catch (e) {
    manifest.push({ url: page, error: e.message });
  }
}
for (const q of ['Marie Skłodowska-Curie Actions logo', 'MSCA logo Marie Curie', 'Marie Curie Actions']) {
  const api = new URL('https://commons.wikimedia.org/w/api.php');
  Object.entries({ action: 'query', format: 'json', generator: 'search', gsrnamespace: '6', gsrsearch: `${q} filetype:bitmap|drawing`, gsrlimit: '8', prop: 'imageinfo', iiprop: 'url|extmetadata', iiurlwidth: '600' }).forEach(([k, v]) => api.searchParams.set(k, v));
  try {
    const data = await (await fetch(api, { headers: UA })).json();
    for (const p of Object.values(data.query?.pages ?? {})) {
      const ii = p.imageinfo?.[0];
      if (ii) await save(`msca-commons-${n++}.png`, ii.thumburl ?? ii.url, `${p.title} | ${ii.extmetadata?.LicenseShortName?.value ?? '?'} | ${ii.descriptionurl}`);
    }
  } catch (e) {
    manifest.push({ url: api.href, error: e.message });
  }
}
// Churchill brand colour used by the inline logo (fill="var(--red)").
try {
  const html = await (await fetch('https://www.churchillfellowship.org/', { headers: UA })).text();
  const found = [...html.matchAll(/--red\s*:\s*([^;}"]+)/g)].map((m) => m[1]);
  for (const m of html.matchAll(/<link[^>]+href="([^"]+\.css[^"]*)"/g)) {
    const css = await (await fetch(new URL(m[1].replace(/&amp;/g, '&'), 'https://www.churchillfellowship.org/'), { headers: UA })).text();
    found.push(...[...css.matchAll(/--red\s*:\s*([^;}]+)/g)].map((x) => x[1]));
  }
  manifest.push({ churchillRed: found });
} catch (e) {
  manifest.push({ churchill: e.message });
}
await writeFile(new URL('manifest.json', out), JSON.stringify(manifest, null, 2));
