import { useState } from 'react';

const VIDEOS = [
  {
    id: 'rqbt91MzALE',
    title: 'BPMN: introducción al modelado de procesos',
    watch: 'https://www.youtube.com/watch?v=rqbt91MzALE',
    points: [
      'Qué problema resuelve BPMN frente a un diagrama de flujo común',
      'Los cinco elementos y cómo se combinan en un proceso real',
      'Cuándo un diagrama está listo para automatizarse',
    ],
  },
  {
    id: 'E4yHqTh7NMA',
    title: 'BPMN: notación y simbología en detalle',
    watch: 'https://www.youtube.com/watch?v=E4yHqTh7NMA',
    points: [
      'Eventos de inicio, intermedios y fin con ejemplos',
      'Gateways exclusivos, paralelos e inclusivos comparados',
      'Pools y lanes: cómo repartir responsabilidades',
    ],
  },
];

function LazyPlayer({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden border border-ink-15 bg-ink">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Reproducir: ${title}`}
          className="group absolute inset-0 h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          {!thumbError && (
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              aria-hidden="true"
              loading="lazy"
              onError={() => setThumbError(true)}
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition group-hover:opacity-75"
            />
          )}
          <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center bg-accent text-paper transition group-hover:bg-ink">
              <i className="bx bx-play text-3xl" aria-hidden="true" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

export function Video() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            BPMN en video
          </h2>
          <p className="mt-5 leading-relaxed text-ink-60">
            Dos piezas complementarias: la primera introduce el método y la segunda profundiza en
            la notación. Los reproductores no se descargan hasta que se piden.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-8">
          {VIDEOS.map((v) => (
            <div key={v.id}>
              <LazyPlayer id={v.id} title={v.title} />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{v.title}</h3>
              <ul className="mt-3 space-y-2">
                {v.points.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-ink-60">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-ink-60">
                Fuente:{' '}
                <a
                  href={v.watch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-signal underline-offset-4 hover:text-ink"
                >
                  Ver en YouTube
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
