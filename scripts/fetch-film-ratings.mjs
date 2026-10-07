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
    // IMDb blocks automated page requests, so ratings come from the Cinemeta catalogue,
    // which mirrors IMDb ratings by IMDb id.
    const res = await fetch(`https://v3-cinemeta.strem.io/meta/movie/${id}.json`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rating = Number((await res.json())?.meta?.imdbRating);
    if (!rating) throw new Error('no rating found');
    ratings[id] = { rating, checked: today };
    console.log(`${id}: ${rating}`);
  } catch (err) {
    console.warn(`skipped ${id}: ${err.message}`);
  }
}

await writeFile(outFile, JSON.stringify(ratings, null, 2) + '\n');
