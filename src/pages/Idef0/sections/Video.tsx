import { VideoEmbed } from '../../../components/content';

export function Video() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] lg:items-start lg:gap-16">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink-70/60">
              Sección 10
            </span>
            <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
              IDEF0 en video
            </h2>
            <p className="mt-5 leading-relaxed text-ink-70/80">
              Una introducción visual al método: qué representa cada flecha, cómo se construye un
              árbol de nodos y por qué el modelo sigue siendo útil decades después de haber sido
              publicado.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'La caja central y su frontera de responsabilidad',
                'Entradas, controles, mecanismos y salidas en un ejemplo real',
                'Cómo se descompone A-0 en nodos hijos',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-ink-70/80">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <VideoEmbed
              src="https://www.youtube.com/embed/k9OYt2QEZ8A"
              title="IDEF0 — introducción al modelado de funciones"
            />
            <p className="mt-3 text-sm text-ink-70/60">
              Fuente:{' '}
              <a
                href="https://www.youtube.com/watch?v=k9OYt2QEZ8A"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-signal underline-offset-4 hover:text-ink"
              >
                Ver en YouTube
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
