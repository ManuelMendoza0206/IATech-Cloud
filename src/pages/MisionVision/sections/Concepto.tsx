import { useState } from 'react';

const VIDEO_ID = 'VC5nUToiD4c';
const VIDEO_TITLE = 'Qué es MISIÓN y VISIÓN de una EMPRESA';

const CONCEPTS = [
  {
    code: 'A',
    title: 'Misión · el presente',
    text: 'Describe lo que la organización hace hoy y por qué lo hace. Es una afirmación sobre la realidad actual: el terreno sobre el que se decide.',
  },
  {
    code: 'B',
    title: 'Visión · el futuro',
    text: 'Describe hacia dónde quiere llegar y qué será distinto cuando llegue. No es una meta lejana, sino un estado concreto que todavía no existe.',
  },
  {
    code: 'C',
    title: 'Por qué importa',
    text: 'No es decoración. Una misión escrita en serio sirve para decidir: si una propuesta técnica no encaja con ella, es la propuesta la que se revise.',
  },
];

export default function Concepto() {
  const [playing, setPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  return (
    <section id="concepto" className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(var(--color-navy-950, #050b18) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-6 border-b border-ink-15 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-15 bg-surface px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-ink-60">
              <i className="bx bx-play-circle text-sm text-accent" aria-hidden="true" />
              Concepto primero
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Antes de leerlas, entendé el concepto
            </h2>
            <p className="mt-4 text-ink-60">
              Misión y visión son dos piezas con una diferencia de fondo: una mira hacia atrás y la
              otra hacia adelante. Este video introduce esa diferencia en cuatro minutos, antes de
              mostrar las declaraciones del área.
            </p>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500">
            Ref. externa · YouTube
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
          {/* Click-to-play: el player de YouTube no se descarga hasta que se pide */}
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-ink/5" />

            <div className="relative aspect-video overflow-hidden rounded-2xl border border-ink-15 bg-ink shadow-xl">
              {playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                  title={VIDEO_TITLE}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group relative block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  <img
                    src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                    alt={`Miniatura del video: ${VIDEO_TITLE}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={() => setThumbError(true)}
                  />
                  <span className="absolute inset-0 bg-ink/45 transition group-hover:bg-ink/30" />

                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-ink/80 text-accent shadow-lg backdrop-blur-sm transition group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                      <i className="bx bx-play text-2xl translate-x-0.5" aria-hidden="true" />
                    </span>
                  </span>

                  <span className="absolute bottom-0 left-0 right-0 flex flex-col gap-1 bg-gradient-to-t from-ink/95 to-transparent p-4 text-left">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                      Ver el video
                    </span>
                    <span className="font-display text-sm font-semibold text-paper">{VIDEO_TITLE}</span>
                  </span>

                  {thumbError && (
                    <span className="sr-only">No se pudo cargar la miniatura. Al activar el control se abre el video.</span>
                  )}
                </button>
              )}
            </div>

            <p className="mt-3 text-sm text-ink-60">
              Fuente:{' '}
              <a
                href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-signal underline-offset-4 transition hover:text-ink"
              >
                Ver directamente en YouTube
              </a>
            </p>
          </div>

          {/* Los tres conceptos */}
          <ul className="flex flex-col gap-4">
            {CONCEPTS.map((c) => (
              <li
                key={c.code}
                className="group relative overflow-hidden rounded-2xl border border-ink-15 bg-surface p-6 shadow-sm transition hover:border-accent/40 hover:shadow-md"
              >
                <span
                  className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                  style={{ backgroundColor: 'var(--color-signal, #38d6c8)' }}
                  aria-hidden="true"
                />
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-[11px] font-semibold text-accent"
                    aria-hidden="true"
                  >
                    {c.code}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-60">{c.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
