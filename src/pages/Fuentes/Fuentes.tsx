import { Link } from 'react-router-dom';
import { RailHeader } from '../../components/content';
import { Reveal } from '../../components/ui/Reveal';
import { SOURCES, KIND_LABELS, type SourceKind } from '../../data/sources';

const KIND_ORDER: SourceKind[] = ['estandar', 'informe', 'guia', 'academico'];

const KIND_DESCRIPTION: Record<SourceKind, string> = {
  estandar: 'Normas internacionales y documentos oficiales, citados por número y edición.',
  informe: 'Encuestas y reportes de industria con metodología y muestra publicadas.',
  guia: 'Documentos de referencia de guías y marcos de trabajo, con su historial de versiones.',
  academico: 'Publicaciones revisadas por pares y literatura de investigación.',
};

/**
 * Índice de fuentes.
 *
 * No es un adorno: es el contrato de verificación del sitio. Cada
 * cifra nueva que aparece en cualquier sección tiene una entrada acá, y
 * cada sección enlaza de vuelta a esta página.
 */
export default function Fuentes() {
  const grouped = KIND_ORDER.map((kind) => ({
    kind,
    entries: SOURCES.filter((source) => source.kind === kind),
  })).filter((group) => group.entries.length > 0);

  return (
    <div>
      {/* Hero compacto */}
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid py-20 sm:py-28">
            <div className="col-span-full sm:col-span-8">
              <Link
                to="/"
                className="swiss-label inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <i className="bx bx-left-arrow-alt text-base" aria-hidden="true" />
                Volver al inicio
              </Link>

              <Reveal asHero>
                <h1 className="swiss-display mt-8 text-ink">
                  De dónde sale <span className="text-accent">cada dato</span>
                </h1>

                <p className="hero-item mt-10 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  El contenido previo de este sitio fue verificado antes de publicarse. Para todo
                  lo agregado después, la regla es simple: si una afirmación no tiene una fuente
                  en esta página, no se publica. Abajo están todas, con enlace a la publicación
                  original.
                </p>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 sm:col-span-3 sm:col-start-10 sm:mt-0 sm:self-end">
              <p className="swiss-numeral hero-item text-accent">
                {String(SOURCES.length).padStart(2, '0')}
              </p>
              <p className="swiss-label mt-2 border-t border-ink pt-3">Fuentes citadas</p>
            </div>
          </div>
        </div>
      </section>

      {grouped.map((group) => (
        <section
          key={group.kind}
          id={group.kind}
          className="border-b border-ink bg-paper py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <RailHeader
              label={KIND_LABELS[group.kind]}
              title={
                group.kind === 'estandar'
                  ? 'Normas y documentos oficiales'
                  : group.kind === 'informe'
                    ? 'Informes de industria'
                    : group.kind === 'guia'
                      ? 'Guías y marcos de trabajo'
                      : 'Estudios publicados'
              }
              aside={<p>{KIND_DESCRIPTION[group.kind]}</p>}
            />

            <ul className="mt-10 border-t border-ink">
              {group.entries.map((source) => (
                <li key={source.id} id={source.id} className="border-b border-ink-15 py-6">
                  <div className="swiss-grid gap-y-3">
                    <div className="col-span-full sm:col-span-3">
                      <p className="swiss-rail swiss-label">
                        {source.short} · {source.year}
                      </p>
                    </div>
                    <div className="col-span-full sm:col-span-9">
                      <p className="font-display text-base font-bold leading-snug tracking-[-0.02em] text-ink sm:text-lg">
                        {source.title}
                      </p>
                      <p className="swiss-label mt-2">{source.publisher}</p>
                      <p className="mt-3 max-w-[66ch] text-sm leading-relaxed text-ink-60">
                        {source.note}
                      </p>
                      <p className="mt-3">
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="swiss-source inline-flex items-center gap-1"
                        >
                          Abrir publicación original
                          <i
                            className="bx bx-link-external text-[0.9em] leading-none"
                            aria-hidden="true"
                          />
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <p className="swiss-label">Criterio</p>
          <h2 className="swiss-display-sm mt-6 text-ink">Qué no está acá</h2>
          <div className="mt-6 max-w-[62ch] space-y-4 leading-relaxed text-ink-60">
            <p>
              No hay testimonios de clientes, cifras de ahorro propias, benchmarks comparativos ni
              costos publicados, porque el área no tiene esos datos ni los publica. Las secciones
              que citan benchmarks de mercado los identifican explícitamente como externos, para
              que nadie los lea como una medición propia.
            </p>
            <p>
              Cuando un dato de mercado cambia de edición —Flexera publica el State of the Cloud
              todos los años, DORA también— se cita la edición exacta, con su año. Un porcentaje
              sin año no es un dato: es una anécdota.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
