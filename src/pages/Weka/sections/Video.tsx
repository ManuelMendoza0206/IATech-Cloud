import { useState } from 'react';

const VIDEOS = [
  {
    id: 'TF1yh5PKaqI',
    titulo: 'Weka en la práctica: del dataset al modelo',
    canal: 'Google for Developers · Machine Learning Recipes',
    watch: 'https://www.youtube.com/watch?v=TF1yh5PKaqI',
    puntos: [
      'Abrir Weka y cargar un dataset en formato ARFF',
      'Mirar el atributo clase y su histograma antes de clasificar',
      'Entrenar un árbol J48 y leer la salida del modelo',
      'Diferenciar exactitud sobre entrenamiento y sobre prueba',
      'Matriz de confusión y por qué la exactitud sola engaña',
      'Selección de atributos por ganancia de información',
    ],
  },
  {
    id: 'Exe4Dc8FmiM',
    titulo: 'Data Mining with Weka: introducción',
    canal: 'University of Waikato · curso oficial',
    watch: 'https://www.youtube.com/watch?v=Exe4Dc8FmiM',
    puntos: [
      'Qué es un banco de trabajo de minería de datos y qué incluye',
      'Los algoritmos de clasificación, preprocesado y selección de variables',
      'El estructura del curso: evaluación, clasificadores simples y combinados',
      'La advertencia sobre las trampas clásicas del$data mining',
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

export function Video() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <span className="swiss-label block text-accent">Sección 08</span>
          <h2 className="swiss-display-sm mt-6 text-ink">Weka en video</h2>
          <p className="mt-8 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
            El primero recorre la herramienta de punta a punta sobre un dataset clínico. El
            segundo es la introducción del curso oficial de la Universidad de Waikato, grabado por
            el propio autor de Weka. Los reproductores no se descargan hasta que se piden.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-8">
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
