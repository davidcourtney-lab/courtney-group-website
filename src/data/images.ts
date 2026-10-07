import { existsSync } from 'node:fs';
import list from './science-images.json';

export interface ScienceImage {
  file: string;
  src: string;
  source: string;
  sourcePage: string;
  alt: string;
  caption: string;
  credit: string;
  licence: string;
  page: string;
  available: boolean;
}

export const allScienceImages: ScienceImage[] = list.map((img) => ({
  ...img,
  src: `/images/science/${img.file}`,
  available: existsSync(`${process.cwd()}/public/images/science/${img.file}`),
}));

// Only images that were downloaded successfully are shown on pages.
export const scienceImages = allScienceImages.filter((i) => i.available);
