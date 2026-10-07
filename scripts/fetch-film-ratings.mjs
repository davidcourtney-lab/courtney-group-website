// Looks up the IMDb rating of each team member's favourite film and saves it to
// src/data/film-ratings.json. Run weekly by the "Update film ratings" GitHub Action.
// A failed lookup keeps the last known rating.
import { readFile, writeFile, readdir } from 'node:fs/promises';

const teamDir = new URL('../src/content/team/', import.meta.url);
const outFile = new URL('../src/data/film-ratings.json', import.meta.url);

const ids = new Set();
for (const f of await readdir(teamDir)) {
  const m = (await readFile(new URL(f, teamDir), 'utf8')).match(/^imdb:\s*['"]?(tt\d+)/m);
  if (m) ids.add(m[1]);
}

let ratings = {};
try {
  ratings = JSON.parse(await readFile(outFile, 'utf8'));
} catch {}

const today = new Date().toISOString().slice(0, 10);
for (const id of ids) {
  try {
    const res = await fetch(`https://www.imdb.com/title/${id}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36',
        'Accept-Language': 'en-GB,en;q=0.9',
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const m = html.match(/"aggregateRating":\{[^}]*"ratingValue":\s*([\d.]+)/);
    if (!m) throw new Error('no rating found');
    ratings[id] = { rating: Number(m[1]), checked: today };
    console.log(`${id}: ${m[1]}`);
  } catch (err) {
    console.warn(`skipped ${id}: ${err.message}`);
  }
}

await writeFile(outFile, JSON.stringify(ratings, null, 2) + '\n');
