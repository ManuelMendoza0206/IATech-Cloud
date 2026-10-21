import { SectionHeader } from '../../../components/content';
import { PASOS_EXPLORER } from '../data/weka';

export function Practica() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="06"
          title="El flujo en el Explorer"
          description="Seis pasos, siempre en el mismo orden. Cada uno deja el resultado visible en pantalla, y eso es lo que hace que el análisis se pueda reproducir y defender."
        />

        <ol className="mt-12 flex flex-col gap-4">
          {PASOS_EXPLORER.map((p) => (
            <li
              key={p.paso}
              className="group grid gap-5 border border-ink-15 bg-surface p-6 transition hover:border-ink-40 sm:p-8 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1.5fr)] lg:gap-10"
            >
              <div className="flex items-baseline gap-4 lg:border-r lg:border-ink-15 lg:pr-8">
                <span className="font-display text-4xl font-black leading-none text-accent">
                  {p.paso}
                </span>
                <h3 className="font-display text-lg font-bold leading-tight text-ink">
                  {p.titulo}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-ink-60">{p.detalle}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <div className="border border-ink-15 bg-surface p-6 sm:p-7">
            <span className="swiss-label block text-accent">Lo que devuelve cada corrida</span>
            <ul className="mt-4 space-y-2.5">
              {[
                'La salida del modelo, con los parámetros usados',
                'La matriz de confusión, con los conteos por clase',
                'La métrica calculada con el método de validación elegido',
                'El tiempo de entrenamiento y el de predicción',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-ink-60">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-ink-15 bg-surface p-6 sm:p-7">
            <span className="swiss-label block text-accent">Antes de publicar un resultado</span>
            <ul className="mt-4 space-y-2.5">
              {[
                'El preprocesamiento está en el archivo exportado, no solo en la sesión',
                'La variable objetivo está marcada y es la que dice el paper',
                'El método de validación está escrito, no es el default sin registrar',
                'Existe un modelo más simple con el que comparar',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-ink-60">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
