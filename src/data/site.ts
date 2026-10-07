export const SITE = {
  name: 'The Courtney Group',
  shortName: 'Courtney Group',
  pi: 'David Courtney',
  tagline: 'Molecular virology and RNA biology at Queen’s University Belfast',
  description:
    'The Courtney Group, led by Dr David Courtney at Queen’s University Belfast, studies how influenza A virus hijacks host RNA machinery, and how that knowledge can lead to RNA therapeutics and fairer access to treatments and vaccines.',
  url: 'https://davidgcourtney.com',
  email: 'david.courtney@qub.ac.uk',
  address: [
    'Wellcome-Wolfson Institute for Experimental Medicine',
    'Queen’s University Belfast',
    '97 Lisburn Road',
    'Belfast BT9 7BL',
    'United Kingdom',
  ],
  // Fill these in as profiles are confirmed. Empty values are hidden on the site.
  profiles: {
    qub: 'https://www.qub.ac.uk/schools/mdbs/Research/find-a-phd-supervisor/dr-david-courtney.html',
    pure: 'https://pure.qub.ac.uk/en/persons/david-courtney',
    linkedin: '',
    orcid: 'https://orcid.org/0000-0002-0677-1194',
    scholar: '',
    x: 'https://x.com/TheCourtneyLab',
    bluesky: '',
  },
};

export const NAV = [
  { href: '/research/', label: 'Research' },
  { href: '/team/', label: 'Team' },
  { href: '/publications/', label: 'Publications' },
  { href: '/news/', label: 'News' },
  { href: '/citizenship/', label: 'Citizenship' },
  { href: '/join/', label: 'Join us' },
];

// Conserved termini of influenza A vRNA segments, used as a decorative strand.
export const VRNA_5 = 'AGUAGAAACAAGG';
export const VRNA_3 = 'CCUGCUUUUGCU';
