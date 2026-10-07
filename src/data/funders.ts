// Funders shown in the banner on the home page and on David's profile.
// Logos live in public/images/funders/. With `withName`, the funder's name is shown beside the logo.
export interface Funder {
  name: string;
  short: string;
  note: string;
  href: string;
  logo?: string;
  withName?: boolean;
}

export const funders: Funder[] = [
  {
    name: 'European Research Council',
    short: 'ERC',
    note: 'Starting Grant',
    href: 'https://erc.europa.eu/',
    logo: '/images/funders/erc.png',
  },
  {
    name: 'Medical Research Council',
    short: 'MRC',
    note: 'Research grant',
    href: 'https://www.ukri.org/councils/mrc/',
    logo: '/images/funders/mrc.png',
  },
  {
    name: 'Marie Skłodowska-Curie Actions',
    short: 'MSCA',
    note: 'Global Fellowship',
    href: 'https://marie-sklodowska-curie-actions.ec.europa.eu/',
    logo: '/images/funders/eu-flag.svg',
    withName: true,
  },
  {
    name: 'Winston Churchill Memorial Trust',
    short: 'Churchill',
    note: 'Churchill Fellowship',
    href: 'https://www.churchillfellowship.org/',
    logo: '/images/funders/churchill.svg',
  },
];
