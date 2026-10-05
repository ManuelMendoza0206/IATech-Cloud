/**
 * Registro central de fuentes verificables del sitio.
 *
 * Toda cifra o afirmación nueva debe existir acá antes de llegar a una
 * sección. Si no está en este archivo, no se publica: es la regla que
 * sostiene la promesa de "información comprobada".
 *
 * `kind` distingue el tipo de evidencia para que la UI pueda presentarla
 * con el tratamiento correcto.
 */

export type SourceKind = 'estandar' | 'informe' | 'guia' | 'academico';

export interface SourceEntry {
  /** Clave estable, usada por componentes. */
  id: string;
  /** Nombre corto visible. */
  short: string;
  /** Título completo de la publicación. */
  title: string;
  /** Editor o entidad que publica. */
  publisher: string;
  /** Año de la edición citada. */
  year: string;
  href: string;
  kind: SourceKind;
  /** Qué sostiene esta fuente, en una línea. */
  note: string;
}

export const SOURCES: SourceEntry[] = [
  {
    id: 'iso-38500-2024',
    short: 'ISO/IEC 38500:2024',
    title: 'Information technology — Governance of IT for the organization',
    publisher: 'ISO/IEC JTC 1/SC 40',
    year: '2024',
    href: 'https://www.iso.org/standard/81684.html',
    kind: 'estandar',
    note: 'Gobernanza de TI. Tercera edición; seis elementos de framework y tres acciones (evaluar, dirigir, monitorear).',
  },
  {
    id: 'iso-25010-2011',
    short: 'ISO/IEC 25010:2011',
    title: 'Systems and software engineering — SQuaRE — System and software quality models',
    publisher: 'ISO/IEC JTC 1/SC 7',
    year: '2011',
    href: 'https://committee.iso.org/standard/35733.html',
    kind: 'estandar',
    note: 'Modelo de calidad de producto con ocho características, y modelo de calidad en uso con cinco.',
  },
  {
    id: 'iso-31320-1-2012',
    short: 'ISO/IEC/IEEE 31320-1:2012',
    title: 'Information technology — Modeling Languages — Part 1: Syntax and Semantics for IDEF0',
    publisher: 'ISO/IEC JTC 1/SC 7',
    year: '2012',
    href: 'https://www.iso.org/standard/60615.html',
    kind: 'estandar',
    note: 'Norma vigente de IDEF0. Revisada y confirmada por ISO en 2024.',
  },
  {
    id: 'fips-pub-183',
    short: 'FIPS PUB 183',
    title: 'Integration Definition for Function Modeling (IDEF0)',
    publisher: 'National Institute of Standards and Technology (NIST)',
    year: '1993',
    href: 'https://nvlpubs.nist.gov/nistpubs/Legacy/FIPS/fipspub183.pdf',
    kind: 'estandar',
    note: 'Adopción federal de IDEF0. Retirado como norma federal en 2008 (73 FR 51276).',
  },
  {
    id: 'iso-11179-3-2023',
    short: 'ISO/IEC 11179-3:2023',
    title: 'Information technology — Metadata registries (MDR) — Part 3: Metamodel for registry common facilities',
    publisher: 'ISO/IEC JTC 1/SC 32',
    year: '2023',
    href: 'https://www.iso.org/standard/78915.html',
    kind: 'estandar',
    note: 'Cómo se registran y definen los elementos de datos que nombran las flechas de un modelo.',
  },
  {
    id: 'iso-16290-2013',
    short: 'ISO 16290:2013',
    title: 'Space systems — Definition of the Technology Readiness Levels (TRLs) and their criteria of assessment',
    publisher: 'ISO/TC 20/SC 14',
    year: '2013',
    href: 'https://www.iso.org/standard/56064.html',
    kind: 'estandar',
    note: 'Definición normalizada de los nueve niveles de madurez tecnológica. Confirmada en 2024.',
  },
  {
    id: 'nasa-trl',
    short: 'NASA · TRL',
    title: 'Technology Readiness Levels',
    publisher: 'NASA',
    year: '2023',
    href: 'https://www.nasa.gov/technology/technology-readiness-levels',
    kind: 'estandar',
    note: 'Descripción pública de cada nivel del 1 al 9.',
  },
  {
    id: 'dora-2024',
    short: 'DORA 2024',
    title: 'Accelerate State of DevOps Report 2024',
    publisher: 'DevOps Research and Assessment (Google Cloud)',
    year: '2024',
    href: 'https://dora.dev/research/2024/dora-report/2024-dora-accelerate-state-of-devops-report.pdf',
    kind: 'informe',
    note: 'Cinco métricas de desempeño de entrega, agrupadas en throughput y estabilidad.',
  },
  {
    id: 'dora-metrics-history',
    short: 'DORA · historia de métricas',
    title: 'A history of DORA’s software delivery metrics',
    publisher: 'DevOps Research and Assessment (Google Cloud)',
    year: '2025',
    href: 'https://dora.dev/insights/dora-metrics-history/',
    kind: 'informe',
    note: 'Explica por qué en 2024 se agregó deployment rework rate como quinta métrica.',
  },
  {
    id: 'finops-2025',
    short: 'State of FinOps 2025',
    title: 'The State of FinOps Report 2025',
    publisher: 'FinOps Foundation (Linux Foundation)',
    year: '2025',
    href: 'http://data.finops.org/2025-report',
    kind: 'informe',
    note: '861 respondientes y unos 69.000 millones de USD de gasto cloud.',
  },
  {
    id: 'finops-2026',
    short: 'State of FinOps 2026',
    title: 'State of FinOps Survey: AI Value and Skills Top Priorities',
    publisher: 'FinOps Foundation (Linux Foundation)',
    year: '2026',
    href: 'https://www.linuxfoundation.org/press/state-of-finops-survey-ai-value-and-skills-top-priorities-as-finops-matures-across-technology-value-98-manage-ai-90-saas-64-licensing-48-data-center-1',
    kind: 'informe',
    note: '1.192 respondientes y más de 83.000 millones de USD. El 78% reporta al CTO o CIO.',
  },
  {
    id: 'harness-finops-2025',
    short: 'Harness · FinOps in Focus 2025',
    title: 'FinOps in Focus 2025',
    publisher: 'Harness',
    year: '2025',
    href: 'https://www.prnewswire.com/news-releases/44-5-billion-in-infrastructure-cloud-waste-projected-for-2025-due-to-finops-and-developer-disconnect-finds-finops-in-focus-report-from-harness-302385580.html',
    kind: 'informe',
    note: 'Estima 21% del gasto enterprise en infraestructura cloud desperdiciado.',
  },
  {
    id: 'scrum-guide-revisions',
    short: 'Scrum Guides · revisiones',
    title: 'Scrum Guide Revision History',
    publisher: 'ScrumGuides.org (Schwaber y Sutherland)',
    year: '2020',
    href: 'https://scrumguides.org/revisions.html',
    kind: 'guia',
    note: 'Cambios oficiales entre las ediciones 2017 y 2020 de la Scrum Guide.',
  },
  {
    id: 'scrum-guide',
    short: 'Scrum Guide 2020',
    title: 'The Scrum Guide',
    publisher: 'ScrumGuides.org',
    year: '2020',
    href: 'https://scrumguides.org/scrum-guide',
    kind: 'guia',
    note: 'Texto vigente de la Scrum Guide, publicada el 18 de noviembre de 2020.',
  },
  {
    id: 'scrum-org-comparison',
    short: 'Scrum.org · comparativa',
    title: 'Scrum Guide 2020 and 2017: A Side-by-Side Comparison',
    publisher: 'Scrum.org',
    year: '2020',
    href: 'https://www.scrum.org/resources/blog/scrum-guide-2020-and-2017-side-side-comparison',
    kind: 'guia',
    note: 'Comparación línea por línea de ambas ediciones.',
  },
  {
    id: 'infoq-scrum-2020',
    short: 'InfoQ · Scrum 2020',
    title: 'Changes in the 2020 Scrum Guide: Q&A with Ken Schwaber and Jeff Sutherland',
    publisher: 'InfoQ',
    year: '2020',
    href: 'https://www.infoq.com/articles/changes-2020-Scrum-guide',
    kind: 'guia',
    note: 'Los autores explican el motivo de cada cambio de la edición 2020.',
  },
  {
    id: 'wipo-gii-2025',
    short: 'WIPO · GII 2025',
    title: 'Global Innovation Index 2025 — end of year edition',
    publisher: 'World Intellectual Property Organization (WIPO)',
    year: '2025',
    href: 'https://www.wipo.int/en/web/global-innovation-index/w/blogs/2025/end-of-year-edition',
    kind: 'informe',
    note: 'Gasto mundial en I+D estimado en 2,87 billones de USD en 2024, frente a 2,78 billones en 2023.',
  },
  {
    id: 'erford-2025',
    short: 'Erford et al. (2025)',
    title:
      'A 25-Year Review and Psychometric Synthesis of the Myers-Briggs Type Indicator (MBTI) — Form M',
    publisher: 'Journal of Psychological Type Research Digest; Journal of Counseling & Development 103(4), 403-407',
    year: '2025',
    href: 'https://www.myersbriggs.org/research-and-library/journal-psychological-type/A-25-Year-Review-and-Psychometric-Synthesis-of-the-Myers-Briggs-Type-Indicator-Form-M?articleID=159&d=86',
    kind: 'academico',
    note: '193 estudios entre 1999 y 2024. Consistencia interna de 0.845 a 0.921.',
  },
  {
    id: 'myersbriggs-criticisms',
    short: 'Myers-Briggs · críticas frecuentes',
    title: 'MBTI Facts & Common Criticisms',
    publisher: 'The Myers-Briggs Company',
    year: '2026',
    href: 'https://www.themyersbriggs.com/en-us/access-resources/articles/mbti-facts-common-criticisms',
    kind: 'academico',
    note: 'Fiabilidad-retest de 0.81 a 0.86 en las cuatro parejas de preferencia para MBTI Global Step I.',
  },
  {
    id: 'boyle-1995',
    short: 'Boyle (1995)',
    title: 'Myers-Briggs Type Indicator (MBTI): Some psychometric limitations',
    publisher: 'Australian Psychologist 30(1), 71-74',
    year: '1995',
    href: 'https://psycnet.apa.org/record/1995-35436-001',
    kind: 'academico',
    note: 'Recomienda precaución en el uso organizacional del instrumento.',
  },
];

export const SOURCES_BY_ID: Record<string, SourceEntry> = Object.fromEntries(
  SOURCES.map((source) => [source.id, source])
);

export const KIND_LABELS: Record<SourceKind, string> = {
  estandar: 'Norma',
  informe: 'Informe',
  guia: 'Guía',
  academico: 'Estudio',
};
