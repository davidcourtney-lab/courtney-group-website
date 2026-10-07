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
  'Molecular virologist and RNA biologist. David leads The Courtney Group at Queen’s University Belfast, which studies how influenza A virus RNA recruits host machinery to be modified, exported, translated and trafficked, and how those dependencies can be turned into RNA-based therapeutics. He has won over €1.8M in competitive funding as sole PI, sits on BBSRC and European funding panels, and represents the United Kingdom as an Ambassador for the European Research Council.';

export const positions: CvItem[] = [
  { when: '2025 –', title: 'Senior Lecturer in Molecular Virology', where: 'Queen’s University Belfast, UK' },
  {
    when: '2021 – 2025',
    title: 'Lecturer and ERC Research Fellow',
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
    title: 'Marie Skłodowska-Curie Postdoctoral Fellow',
    where: 'Institut Pasteur, Paris, France',
    detail: 'Developed methods to identify the host RNA-binding proteins of influenza A virus RNAs.',
  },
  {
    when: '2016 – 2019',
    title: 'Marie Skłodowska-Curie Postdoctoral Fellow',
    where: 'Duke University, North Carolina, USA',
    detail: 'Showed how m6A and m5C RNA modifications regulate influenza A virus, HIV-1 and other viruses.',
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
  { when: 'Current', title: 'Vice-Chair, Marie Skłodowska-Curie Actions Postdoctoral Fellowships panel', where: 'European Commission' },
  { when: '2024 –', title: 'Member, BBSRC Panel of Experts', where: 'UK Research and Innovation' },
  { when: 'Current', title: 'Elected member, Virology Division Committee', where: 'Microbiology Society' },
  {
    when: '2024',
    title: 'Chair and organiser, UK ERC Showcase',
    where: 'Queen’s University Belfast',
    detail: 'Flagship event with panels featuring Nobel Laureate Prof Emmanuelle Charpentier and Prof Teresa Lambe OBE.',
  },
  {
    when: '2023 – 2024',
    title: 'Contributor, US National Academies report “Toward Sequencing and Mapping of RNA Modifications”',
    where: 'US National Academy of Sciences',
    detail: 'Invited ideation panel delegate (2023) and co-author of a commissioned paper (2024).',
  },
  {
    when: '2021 – 2024',
    title: 'Grant reviewer',
    where: 'MSCA (reviewer and rapporteur), US National Science Foundation panel, Swiss National Science Foundation, Polish National Science Centre',
  },
  { when: 'Current', title: 'Module Coordinator, MSc Research Project', where: 'Wellcome-Wolfson Institute for Experimental Medicine, Queen’s' },
  { when: 'Current', title: 'STEM NI Ambassador', where: 'Northern Ireland' },
  { when: '2014 –', title: 'Fellow of the Winston Churchill Memorial Trust', where: 'Churchill Fellowship, UK' },
];

export const grants: CvItem[] = [
  {
    when: '2021 – 2026',
    title: 'ERC Starting Grant: PTFLU, post-transcriptional regulation of influenza A virus RNA',
    where: 'European Research Council · sole PI · grant 948834',
    detail: '€1,568,010 to establish The Courtney Group.',
  },
  {
    when: '2023 – 2026',
    title: 'MRC research grant: host ATPases in rhinovirus replication',
    where: 'UKRI Medical Research Council · co-investigator · MR/X020371/1',
    detail: '£458,574.',
  },
  {
    when: '2024 – 2025',
    title: 'Royal Society Partnership Grant',
    where: 'The Royal Society · with Regent House School',
    detail: 'A research project run with secondary school pupils.',
  },
  {
    when: '2017 – 2020',
    title: 'Marie Skłodowska-Curie Global Fellowship: IAV-m6A',
    where: 'European Commission · sole PI · Duke University and Institut Pasteur',
    detail: '€260,000 to study m6A RNA methylation in influenza A virus replication and pathogenesis.',
  },
  { when: '2015', title: 'Postgraduate Student of the Year (John RE Scott Convocation award)', where: 'Ulster University' },
  {
    when: '2014 – 2015',
    title: 'Churchill Fellowship',
    where: 'Winston Churchill Memorial Trust',
    detail: '€7,600 for research stays in Italy and Denmark.',
  },
];

export const patents: CvItem[] = [
  {
    when: '2024',
    title: 'Novel compounds for the treatment of viral infections',
    where: 'US patent application 18/550,005',
  },
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

export const mentoring = [
  'Mentored Dr Hannah Turkington to a competitive three-year BBSRC Postdoctoral Fellowship (2024).',
  'PhD graduates went straight to postdoctoral posts at the University of Cambridge and the University of Copenhagen.',
  'MSc graduates have moved into government science roles, including Forensic Science NI.',
  'EMBO Laboratory Leadership course and UKRI Future Leaders Fellows leadership retreat (2024).',
];

export const media = [
  'Regular expert voice on BBC television and national radio during the COVID-19 pandemic, explaining viral mutation, immune escape and variant surveillance.',
  'Long-form articles for The Conversation reaching international readers.',
  'Works with regional health bodies and schools to promote influenza vaccination awareness.',
];

export const talks: CvItem[] = [
  { when: '2026', title: 'Invited speaker: Building ERC-competitive research', where: 'University of Split, Croatia' },
  { when: '2024', title: 'Event chair: UK ERC Showcase', where: 'Queen’s University Belfast' },
  { when: '2023', title: 'Delegate: ideation panel on RNA modification mapping', where: 'US National Academy of Sciences' },
  { when: '2020', title: 'Invited speaker: ANRS International Symposium on RNA Modifications', where: 'Institut Cochin, Paris' },
];

export const memberships = ['Microbiology Society', 'American Society for Virology', 'RNA Society'];

export const expertise = [
  'Influenza A virus and respiratory virus biology',
  'Viral RNA modifications (m6A, m5C, pseudouridine)',
  'RNA–protein interactions and RNA-binding proteomics',
  'RNA therapeutics: siRNA and allele-specific CRISPR',
  'Antiviral discovery, screening and drug repurposing',
  'Host–pathogen interactions in airway epithelium',
];
