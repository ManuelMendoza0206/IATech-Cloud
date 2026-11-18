import { useState } from 'react';
import { SectionHeader } from '../../../components/content';

const VIDEOS = [
  {
    id: 'Y-c_xw9bHFw',
    titulo: 'Qué es FinOps y cómo maximiza el valor tecnológico',
    canal: 'FinOps Foundation · modelo operativo y práctica cultural',
    watch: 'https://www.youtube.com/watch?v=Y-c_xw9bHFw',
    puntos: [
      'Qué es FinOps y cómo conecta equipos de ingeniería, finanzas y negocio',
      'Visibilidad del gasto y responsabilidad compartida sobre el consumo cloud',
      'Decisiones informadas para equilibrar velocidad, costo y calidad',
    ],
  },
  {
    id: 'hhQ6rhtLDRA',
    titulo: 'Presupuesto y pronóstico de costos en la nube',
    canal: 'Jon Myer Show · planificación financiera con enfoque FinOps',
    watch: 'https://www.youtube.com/watch?v=hhQ6rhtLDRA',
    puntos: [
      'Cómo elaborar presupuestos y pronósticos para el consumo en la nube',
      'Seguimiento del gasto para comparar lo planificado con lo ejecutado',
      'Prácticas para mejorar el control financiero sin frenar la operación',
    ],
  },
  {
    id: 'UcnHCjp20YQ',
    titulo: 'FinOps explicado: control y valor del gasto en la nube',
    canal: 'Abhishek Veeramalla · introducción práctica a FinOps',
    watch: 'https://www.youtube.com/watch?v=UcnHCjp20YQ',
    puntos: [
      'Conceptos clave para entender el gasto y el valor en entornos cloud',
      'Por qué la visibilidad y la colaboración son centrales en FinOps',
      'Relación entre optimización de costos y objetivos del negocio',
    ],
  },
];

function LazyPlayer({ id, titulo }: { id: string; titulo: string }) {
  const [playing, setPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden border border-ink-15 bg-ink">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={titulo}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Reproducir: ${titulo}`}
          className="group absolute inset-0 h-full w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
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

export default function Video() {
  return (
    <section className="border-t border-ink bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="04"
          title="Recursos en video"
          description="Videos para complementar la planificación presupuestaria, la visibilidad del consumo y la gestión financiera en la nube."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {VIDEOS.map((v) => (
            <div key={v.id}>
              <LazyPlayer id={v.id} titulo={v.titulo} />
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{v.titulo}</h3>
              <p className="swiss-label mt-1.5">{v.canal}</p>
              <ul className="mt-4 space-y-2">
                {v.puntos.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-ink-60">{p}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-60">
                Fuente:{' '}
                <a
                  href={v.watch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swiss-source inline-flex items-center gap-1"
                >
                  Ver en YouTube
                  <i className="bx bx-link-external text-[0.9em] leading-none" aria-hidden="true" />
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
