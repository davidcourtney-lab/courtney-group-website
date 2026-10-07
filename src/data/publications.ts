// Selected publications. Newest first. `lab` marks papers from the Courtney Group at QUB.
// Add new papers to the top of the list. A DOI makes the title link straight to the paper;
// without one, the title links to a PubMed search.
export interface Publication {
  year: number;
  title: string;
  authors: string;
  journal: string;
  doi?: string;
  url?: string;
  lab?: boolean;
}

export const publications: Publication[] = [
  {
    year: 2026,
    title: 'Myoferlin is a component of late-stage vRNP trafficking vesicles for enveloped RNA viruses',
    authors: 'Bonazza S, Turkington HL, Sukumar S, Peate E, Coutts HL, Montgomery JJ, Hawthorn C, Getty EMPE, Touzelet O, Barabas J, Power UF, Courtney DG',
    journal: 'Nature Communications 17',
    lab: true,
  },
  {
    year: 2026,
    title: 'Age-dependent expression and antiviral activity of interferon epsilon in respiratory epithelium',
    authors: 'McCabe M, Groves HE, Getty E, Campbell E, Bamford CGG, Courtney DG, Lopez Campos G, Shields M, Power UF',
    journal: 'Journal of Virology 100(6)',
  },
  {
    year: 2025,
    title: 'Influenza A virus RNA localisation and the interceding trafficking pathways of the host cell',
    authors: 'Bonazza S, Courtney DG',
    journal: 'PLoS Pathogens 21(4): e1013090',
    lab: true,
  },
  {
    year: 2025,
    title: 'Preclinical screening platform identifies azatadine-dimaleate as a potent repurposed therapeutic against SARS-CoV-2 infection',
    authors: 'Ali A, Courtney D, Broadbent L, Sharma P, Bamford CGG, et al.',
    journal: 'Journal of Medical Virology 97(11): e70713',
  },
  {
    year: 2024,
    title: 'Identifying cellular RNA-binding proteins during infection uncovers a role for MKRN2 in influenza mRNA trafficking',
    authors: 'Bonazza S, Coutts HL, Sukumar S, Turkington HL, Courtney DG',
    journal: 'PLoS Pathogens 20(5): e1012231',
    lab: true,
  },
  {
    year: 2024,
    title: 'The RBPome of influenza A virus mRNA reveals a role for TDP-43 in viral replication',
    authors: 'Dupont M, Krischuns T, Giai-Gianetto Q, Paisant S, Bonazza S, Brault J, Douché T, Perez-Perri JI, Hentze MW, Cusack S, Matondo M, Isel C, Courtney DG#, Naffakh N#',
    journal: 'Nucleic Acids Research',
    doi: '10.1093/nar/gkae291',
    lab: true,
  },
  {
    year: 2024,
    title: 'Identifying individual pseudouridine (Ψ) sites across transcripts from HIV-1 infected cells',
    authors: 'Coutts LH, Courtney DG',
    journal: 'HIV Protocols. Methods in Molecular Biology, vol 2807',
    lab: true,
  },
  {
    year: 2019,
    title: 'Epitranscriptomic regulation of HIV-1 gene expression by m5C',
    authors: 'Courtney DG, Tsai K, Bogerd HP, et al.',
    journal: 'Cell Host & Microbe 26(2): 217–227',
    doi: '10.1016/j.chom.2019.07.005',
  },
  {
    year: 2019,
    title: 'Extensive epitranscriptomic methylation of A and C residues on murine leukemia virus transcripts enhances viral gene expression',
    authors: 'Courtney DG, Chalem A, Bogerd HP, et al.',
    journal: 'mBio 10(3): e01209-19',
  },
  {
    year: 2018,
    title: 'Influenza A virus-derived siRNAs increase in the absence of NS1 yet fail to inhibit virus replication',
    authors: 'Tsai K, Courtney DG, Kennedy EM, Cullen BR',
    journal: 'RNA',
  },
  {
    year: 2018,
    title: 'Addition of m6A to SV40 late mRNAs enhances viral structural gene expression and replication',
    authors: 'Tsai K, Courtney DG, Cullen BR',
    journal: 'PLoS Pathogens 14(2): e1006919',
  },
  {
    year: 2017,
    title: 'Epitranscriptomic enhancement of influenza A virus gene expression and replication',
    authors: 'Courtney DG, Kennedy EM, Dumm RE, et al.',
    journal: 'Cell Host & Microbe 22(3): 377–386',
  },
  {
    year: 2017,
    title: 'Towards personalised allele-specific CRISPR gene editing to treat autosomal dominant disorders',
    authors: 'Christie KA, Courtney DG, DeDionisio LA, et al.',
    journal: 'Scientific Reports 7(1): 16174',
  },
  {
    year: 2016,
    title: 'Keratin 12 missense mutation induces the unfolded protein response and apoptosis in Meesmann epithelial corneal dystrophy',
    authors: 'Allen EHA*, Courtney DG*, Atkinson SD, et al.',
    journal: 'Human Molecular Genetics 25(6): 1176–1191',
  },
  {
    year: 2015,
    title: 'CRISPR/Cas9 DNA cleavage at SNP-derived PAM enables both in vitro and in vivo KRT12 mutation-specific targeting',
    authors: 'Courtney DG, Moore JE, Atkinson SD, et al.',
    journal: 'Gene Therapy 23(1): 108–112',
  },
  {
    year: 2015,
    title: 'Protein composition of TGFBI-R124C- and TGFBI-R555W-associated aggregates suggests multiple mechanisms leading to lattice and granular corneal dystrophy',
    authors: 'Courtney DG, Toftgaard Poulsen E, Kennedy S, et al.',
    journal: 'Investigative Ophthalmology & Visual Science 56: 4653–4661',
  },
  {
    year: 2014,
    title: 'siRNA silencing of the mutant keratin 12 allele in corneal limbal epithelial cells grown from patients with Meesmann’s epithelial corneal dystrophy',
    authors: 'Courtney DG, Atkinson SD, Allen EHA, et al.',
    journal: 'Investigative Ophthalmology & Visual Science 55: 3352–3360',
  },
  {
    year: 2014,
    title: 'Development of allele-specific gene silencing siRNAs for TGFBI Arg124Cys in lattice corneal dystrophy type I',
    authors: 'Courtney DG, Atkinson SD, Moore JE, et al.',
    journal: 'Investigative Ophthalmology & Visual Science 55: 977–985',
  },
];

export function pubLink(p: Publication): string {
  if (p.url) return p.url;
  if (p.doi) return `https://doi.org/${p.doi}`;
  return `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(p.title)}`;
}
