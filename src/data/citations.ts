// Citation counts for the Publications page, refreshed weekly into citations.json
// by scripts/fetch-citations.mjs (the "Update citations and CV" GitHub Action).
import data from './citations.json';
import type { Publication } from './publications';
import { pubLink } from './publications';

interface PaperCitations {
  cites: number;
  doi: string | null;
}

export const citationStats = data as {
  updated: string | null;
  source: string;
  author: { citations: number; hIndex: number | null; works: number } | null;
  papers: Record<string, PaperCitations>;
};

// Must match key() in scripts/fetch-citations.mjs.
export const citationKey = (title: string) =>
  title.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '').slice(0, 80);

export const citationsFor = (p: Publication): PaperCitations | undefined => citationStats.papers[citationKey(p.title)];

// Prefer a DOI found by the citation lookup over a PubMed search link.
export function paperLink(p: Publication): string {
  const doi = citationsFor(p)?.doi;
  return !p.url && !p.doi && doi ? `https://doi.org/${doi}` : pubLink(p);
}

export const totalCitations = (pubs: Publication[]) => pubs.reduce((n, p) => n + (citationsFor(p)?.cites ?? 0), 0);
