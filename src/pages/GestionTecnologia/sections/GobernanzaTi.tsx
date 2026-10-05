import { RailHeader, Sources, SourceList } from '../../../components/content';

/**
 * ISO/IEC 38500:2024 — Information technology, Governance of IT for the
 * organization (3.ª edición, publicada en febrero de 2024).
 *
 * La tercera edición se alinea con ISO 37000 (gobernanza de organizaciones) y
 * adopta sus principios. El framework de gobernanza identifica seis elementos:
 * Dirección, Capacidad, Política, Delegación, Desempeño y Rendición de cuentas.
 */

interface Element {
  code: string;
  name: string;
  definition: string;
}

const FRAMEWORK_ELEMENTS: Element[] = [
  {
    code: '7.2.2',
    name: 'Dirección',
    definition:
      'La dirección del uso de la TI se revisa y se alinea con los objetivos de la organización, considerando tecnologías emergentes y necesidades de los grupos de interés externos.',
  },
  {
    code: '7.2.3',
    name: 'Capacidad',
    definition:
      'Las capacidades digitales esenciales para sostener los objetivos de la organización se identifican, se orquestan y se gestionan.',
  },
  {
    code: '7.2.4',
    name: 'Política',
    definition:
      'Las políticas de uso de la TI se traducen en decisiones, controles y prácticas de la organización.',
  },
  {
    code: '7.2.5',
    name: 'Delegación',
    definition:
      'La delegación de autoridad y responsabilidad sobre el uso de la TI se respalda mediante prácticas de gobernanza y con supervisión cuidadosa.',
  },
  {
    code: '7.2.6',
    name: 'Desempeño',
    definition:
      'El desempeño se monitorea con métricas explícitas contra las expectativas declaradas por el órgano de gobierno.',
  },
  {
    code: '7.2.7',
    name: 'Rendición de cuentas',
    definition:
      'Se demuestra el cumplimiento de las políticas de TI mediante mecanismos efectivos, considerando la adaptación de la IA y la aseguranza automatizada.',
  },
];

const ACTIONS = [
  {
    verb: 'Evaluar',
    text: 'El uso actual y futuro de la TI se considera en contexto, con juicios sobre circunstancias y oportunidades internas y externas.',
  },
  {
    verb: 'Dirigir',
    text: 'Planes y políticas para asegurar que el uso de la TI satisfaga los requisitos del negocio.',
  },
  {
    verb: 'Monitorear',
    text: 'Verificar que la TI se conforme a las políticas y rinda contra lo planificado, incluida la revisión de cumplimiento normativo.',
  },
];

const PRINCIPLES = [
  'Responsabilidad',
  'Estrategia',
  'Adquisición',
  'Desempeño',
  'Conformidad',
  'Comportamiento humano',
];

const SOURCES = [
  {
    label: 'ISO/IEC 38500:2024 · ficha oficial',
    href: 'https://www.iso.org/standard/81684.html',
  },
  {
    label: 'ISO/IEC JTC 1/SC 40 · white paper sobre los cambios de la 3.ª edición',
    href: 'https://committee.iso.org/sites/jtc1sc40/home/projects/wg-1/published-wg1/content-left-area/isoiec-sc-40-wg-1-develops-the-s/white-paper-on-the-differences-b.html',
  },
  {
    label: 'ISO 37000 · Governanza de organizaciones (referencia normativa)',
    href: 'https://www.iso.org/standard/82940.html',
  },
];

export function GobernanzaTi() {
  return (
    <section id="gobernanza" className="border-b border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Marco de referencia"
          title="Gobernanza de la tecnología, no gestión"
          aside={
            <>
              <p>
                <code className="font-mono text-[0.95em] text-ink">ISO/IEC 38500</code> es el
                estándar internacional de gobernanza de TI. Su tercera edición, de febrero de 2024,
                se alinea con ISO 37000 y redefine la gobernanza como un sistema humano de{' '}
                <em>dirigir, supervisar y rendir cuentas</em>.
              </p>
              <p className="mt-4">
                El cambio no es cosmético. Separa explícitamente la gobernanza —que pertenece al
                órgano máximo y no se delega— de la gestión, que sí se delega en la gerencia
                operativa. Por eso el área de Cloud no decide la dirección tecnológica de la
                organización: la ejecuta dentro de un marco que alguien más fijó.
              </p>
            </>
          }
        />

        {/* Tres acciones del ciclo de gobernanza */}
        <div className="mt-14 swiss-grid gap-y-8">
          {ACTIONS.map((action, index) => (
            <div key={action.verb} className="col-span-full sm:col-span-4">
              <div className="swiss-figure h-full">
                <p className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-none tracking-[-0.04em] text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-4 font-display text-xl font-bold tracking-[-0.02em] text-ink">
                  {action.verb}
                </p>
                <p className="mt-2 max-w-[38ch] leading-relaxed text-ink-60">{action.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Seis elementos del framework */}
        <div className="mt-16 swiss-grid gap-y-8">
          <div className="col-span-full sm:col-span-3">
            <p className="swiss-rail swiss-label">Elementos del framework</p>
          </div>
          <div className="col-span-full sm:col-span-9">
            <ul className="border-t border-ink">
              {FRAMEWORK_ELEMENTS.map((element) => (
                <li
                  key={element.code}
                  className="grid gap-x-6 gap-y-2 border-b border-ink-15 py-5 sm:grid-cols-[7rem_1fr]"
                >
                  <span className="swiss-label pt-1 text-accent">{element.code}</span>
                  <div>
                    <p className="font-display text-lg font-bold leading-tight tracking-[-0.02em] text-ink">
                      {element.name}
                    </p>
                    <p className="mt-1.5 max-w-[62ch] leading-relaxed text-ink-60">
                      {element.definition}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Seis principios de buena gobernanza */}
        <div className="mt-16 swiss-grid gap-y-8 border-t border-ink pt-12">
          <div className="col-span-full sm:col-span-3">
            <p className="swiss-rail swiss-label">Principios</p>
          </div>
          <div className="col-span-full sm:col-span-9">
            <p className="max-w-[62ch] text-base leading-relaxed text-ink-60">
              Los seis principios son deliberadamente pocos. No describen un proceso: describen
              criterios de decisión, pensados para que un órgano de gobierno los aplique cuando la
              respuesta no es obvia.
            </p>
            <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {PRINCIPLES.map((principle) => (
                <li
                  key={principle}
                  className="swiss-chip px-4 py-2.5 text-center font-display text-sm font-bold tracking-[-0.01em]"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Sources>
          <SourceList items={SOURCES} />
        </Sources>
      </div>
    </section>
  );
}

export default GobernanzaTi;
