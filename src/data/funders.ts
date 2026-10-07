// Funders shown in the banner on the home page and on David's profile.
// To show an official logo instead of the name, put the file in public/images/funders/
// and set `logo` to its path (for example '/images/funders/erc.svg').
export interface Funder {
  name: string;
  short: string;
  note: string;
  href: string;
  logo?: string;
}

export const funders: Funder[] = [
  {
    name: 'European Research Council',
    short: 'ERC',
    note: 'Starting Grant',
    href: 'https://erc.europa.eu/',
  },
  {
    name: 'Medical Research Council',
    short: 'MRC',
    note: 'UK Research and Innovation',
    href: 'https://www.ukri.org/councils/mrc/',
  },
  {
    name: 'Marie Skłodowska-Curie Actions',
    short: 'MSCA',
    note: 'Global Fellowship',
    href: 'https://marie-sklodowska-curie-actions.ec.europa.eu/',
  },
  {
    name: 'Winston Churchill Memorial Trust',
    short: 'Churchill',
    note: 'Churchill Fellowship',
    href: 'https://www.churchillfellowship.org/',
  },
];
