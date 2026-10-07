// David's career details. Used by the profile page (/david-courtney/), the printable CV (/cv/)
// and the downloadable PDF CV, so a change here updates all three.
// Newest first in every list.

export interface CvItem {
  when: string;
  title: string;
  where?: string;
  detail?: string;
}

export const headline = 'Senior Lecturer in Molecular Virology, Queen’s University Belfast';

export const summary =
  'Molecular virologist and RNA biologist. David leads The Courtney Group at Queen’s University Belfast, which studies how influenza A virus RNA recruits host machinery to be modified, exported, translated and trafficked, and how those dependencies can be turned into RNA-based therapeutics. He holds an ERC Starting Grant and represents the United Kingdom as an Ambassador for the European Research Council.';

export const positions: CvItem[] = [
  { when: '2025 –', title: 'Senior Lecturer in Molecular Virology', where: 'Queen’s University Belfast, UK' },
  {
    when: '2021 – 2025',
    title: 'ERC Research Fellow in Molecular Virology',
    where: 'Queen’s University Belfast, UK',
    detail: 'Founded The Courtney Group with an ERC Starting Grant.',
  },
  {
    when: '2020 – 2021',
    title: 'Postdoctoral Research Fellow in Molecular Virology',
    where: 'Queen’s University Belfast, UK',
    detail: 'High-throughput drug repurposing screens against SARS-CoV-2 in airway epithelial cells.',
  },
  {
    when: '2019 – 2020',
    title: 'Marie Skłodowska-Curie Fellow, Virology and Epitranscriptomics',
    where: 'Institut Pasteur, Paris, France',
    detail: 'Developed methods to identify the host RNA-binding proteins of influenza A virus RNAs.',
  },
  {
    when: '2016 – 2019',
    title: 'Postdoctoral Research Fellow, Virology and Epitranscriptomics',
    where: 'Duke University, North Carolina, USA',
    detail: 'Showed how m6A and m5C RNA modifications regulate influenza A virus, HIV-1 and other viruses.',
  },
  {
    when: '2015',
    title: 'Postdoctoral Research Associate, CRISPR gene editing',
    where: 'Ulster University, UK',
    detail: 'Allele-specific CRISPR/Cas9 therapy for an inherited corneal dystrophy, tested in vivo.',
  },
  {
    when: '2010 – 2011',
    title: 'Industrial placement, BioPharm R&D',
    where: 'GlaxoSmithKline, UK',
    detail: 'Twelve months in molecular expression and cell line development.',
  },
];

export const education: CvItem[] = [
  {
    when: '2012 – 2015',
    title: 'PhD, Molecular Biology',
    where: 'Ulster University, UK',
    detail: 'The development of personalised medicines for corneal dystrophies (siRNA and CRISPR therapeutics).',
  },
  {
    when: '2008 – 2012',
    title: 'BSc (Hons) Biomedical Sciences with industrial studies, First Class',
    where: 'Ulster University, UK',
  },
];

export const roles: CvItem[] = [
  {
    when: '2025 –',
    title: 'UK Ambassador for the European Research Council',
    where: 'Ambassadors for the ERC network',
    detail: 'One of 32 ERC grantees chosen to make the case for frontier research to policymakers, the media and the research community.',
  },
  { when: 'Current', title: 'STEM NI Ambassador', where: 'Northern Ireland' },
  { when: '2014 –', title: 'Fellow of the Winston Churchill Memorial Trust', where: 'Churchill Fellowship, UK' },
];

export const grants: CvItem[] = [
  {
    when: '2020',
    title: 'ERC Starting Grant',
    where: 'European Research Council',
    detail: '€1,568,010 over five years to establish The Courtney Group and study the regulation of influenza A virus RNAs.',
  },
  {
    when: '2017',
    title: 'Marie Skłodowska-Curie Global Fellowship',
    where: 'European Commission',
    detail: '€260,000 for three years of research at Duke University and Institut Pasteur.',
  },
  { when: '2015', title: 'Postgraduate Student of the Year (John RE Scott Convocation award)', where: 'Ulster University' },
  { when: '2015', title: 'EMBO Travel Grant', where: 'EMBO' },
  {
    when: '2014',
    title: 'Churchill Fellowship',
    where: 'Winston Churchill Memorial Trust',
    detail: 'Research visits to Modena, Italy and Aarhus, Denmark.',
  },
  { when: '2013', title: 'Young Investigator Award, best oral presentation', where: 'Irish Society of Human Genetics' },
];

export const patents: CvItem[] = [
  {
    when: '2019',
    title: 'Compositions and methods for enhanced gene expression and viral replication',
    where: 'US patent application 16/091,822',
    detail: 'Using m6A-associated cellular machinery to boost transgene expression or viral replication.',
  },
  {
    when: '2019',
    title: 'Single guide RNA/CRISPR/Cas9 systems, and methods of use thereof',
    where: 'US patent application 16/326,908',
    detail: 'Allele-specific CRISPR/Cas9 systems for treating corneal dystrophies.',
  },
];

export const memberships = ['Microbiology Society', 'American Society for Virology', 'RNA Society'];

export const expertise = [
  'Influenza A virus and respiratory virus biology',
  'Viral RNA modifications (m6A, m5C, pseudouridine)',
  'RNA–protein interactions and RNA-binding proteomics',
  'RNA therapeutics: siRNA and allele-specific CRISPR',
  'Antiviral screening and drug repurposing',
  'Host–pathogen interactions in airway epithelium',
];
