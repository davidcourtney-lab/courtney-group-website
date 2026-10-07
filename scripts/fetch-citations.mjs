// Looks up how many times each paper on the Publications page has been cited, plus David's
// overall citation count and h-index, and writes them to src/data/citations.json.
// Run weekly by the "Update citations and CV" GitHub Action. Sources: OpenAlex (by ORCID),
// with Crossref as a fallback for single papers. A lookup that fails keeps the previous value,
// so a bad week never wipes the numbers from the site.
import { readFile, writeFile } from 'node:fs/promises';
import { publications } from '../src/data/publications.ts';

const ORCID = '0000-0002-0677-1194';
const MAILTO = 'david.courtney@qub.ac.uk';
const OUT = new URL('../src/data/citations.json', import.meta.url);
const HEADERS = { 'User-Agent': `CourtneyGroupWebsite/1.0 (https://davidgcourtney.com; mailto:${MAILTO})` };

// Must match citationKey() in src/data/publications.ts.
const key = (title) => title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '').slice(0, 80);
const cleanDoi = (doi) => (doi ? doi.toLowerCase().replace(/^https?:\/\/(dx\.)?doi\.org\//, '') : undefined);
const sameTitle = (a, b) => {
  const ka = key(a ?? '');
  const kb = key(b ?? '');
  return ka.length > 20 && kb.length > 20 && (ka.startsWith(kb.slice(0, 60)) || kb.startsWith(ka.slice(0, 60)));
};

function openAlexUrl(path, params = {}) {
  const url = new URL(`https://api.openalex.org/${path}`);
  url.searchParams.set('mailto', MAILTO);
  if (process.env.OPENALEX_API_KEY) url.searchParams.set('api_key', process.env.OPENALEX_API_KEY);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  return url;
}

async function getJson(url) {
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url.toString().replace(/api_key=[^&]+/, 'api_key=…')}`);
  return res.json();
}

let previous = { papers: {} };
try {
  previous = JSON.parse(await readFile(OUT, 'utf8'));
} catch {}

const out = { updated: previous.updated ?? null, source: 'OpenAlex and Crossref', author: previous.author ?? null, papers: {} };
let changed = false;

// David's whole record on OpenAlex.
let works = [];
try {
  const author = await getJson(openAlexUrl(`authors/orcid:${ORCID}`));
  out.author = {
    citations: author.cited_by_count,
    hIndex: author.summary_stats?.h_index ?? null,
    works: author.works_count,
  };
  const authorId = author.id.split('/').pop();
  let cursor = '*';
  while (cursor) {
    const page = await getJson(
      openAlexUrl('works', {
        filter: `author.id:${authorId}`,
        'per-page': '200',
        cursor,
        select: 'id,doi,title,publication_year,cited_by_count',
      }),
    );
    works.push(...page.results);
    cursor = page.meta?.next_cursor;
    if (!page.results.length) break;
  }
  console.log(`OpenAlex: ${works.length} works, ${out.author.citations} citations, h-index ${out.author.hIndex}`);
  changed = true;
} catch (err) {
  console.warn(`OpenAlex author lookup failed: ${err.message}`);
}

for (const p of publications) {
  const k = key(p.title);
  const doi = cleanDoi(p.doi);
  let hit = works.find((w) => (doi && cleanDoi(w.doi) === doi) || sameTitle(w.title, p.title));

  if (!hit) {
    try {
      const found = await getJson(openAlexUrl('works', { search: p.title, 'per-page': '5', select: 'id,doi,title,cited_by_count' }));
      hit = found.results.find((w) => (doi && cleanDoi(w.doi) === doi) || sameTitle(w.title, p.title));
    } catch (err) {
      console.warn(`OpenAlex search failed for "${p.title}": ${err.message}`);
    }
  }

  if (!hit) {
    try {
      if (doi) {
        const cr = await getJson(new URL(`https://api.crossref.org/works/${encodeURIComponent(doi)}?mailto=${MAILTO}`));
        hit = { doi: cr.message.DOI, cited_by_count: cr.message['is-referenced-by-count'] };
      } else {
        const url = new URL('https://api.crossref.org/works');
        url.searchParams.set('query.bibliographic', p.title);
        url.searchParams.set('query.author', 'Courtney');
        url.searchParams.set('rows', '3');
        url.searchParams.set('mailto', MAILTO);
        const cr = await getJson(url);
        const item = cr.message.items.find((i) => sameTitle(i.title?.[0], p.title));
        if (item) hit = { doi: item.DOI, cited_by_count: item['is-referenced-by-count'] };
      }
    } catch (err) {
      console.warn(`Crossref lookup failed for "${p.title}": ${err.message}`);
    }
  }

  if (hit) {
    out.papers[k] = { cites: hit.cited_by_count ?? 0, doi: cleanDoi(hit.doi) ?? doi ?? null };
    changed = true;
    console.log(`${String(out.papers[k].cites).padStart(5)}  ${p.title}`);
  } else if (previous.papers?.[k]) {
    out.papers[k] = previous.papers[k];
    console.warn(`kept previous value for "${p.title}"`);
  } else {
    console.warn(`no match for "${p.title}"`);
  }
}

if (changed) out.updated = new Date().toISOString().slice(0, 10);
await writeFile(OUT, JSON.stringify(out, null, 2) + '\n');
