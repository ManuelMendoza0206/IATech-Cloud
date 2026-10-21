import { SectionHeader } from '../../../components/content';
import { ALGORITMOS } from '../data/weka';

export function Algoritmos() {
  const tareas = Array.from(new Set(ALGORITMOS.map((a) => a.tarea)));

  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="04"
          title="Los algoritmos por tarea"
          description="Weka no trae un modelo, trae un repertorio. Cada algoritmo resuelve una tarea distinta sobre el mismo dataset, y elegir mal es la causa más común de un resultado disappointing."
        />

        <div className="mt-12 flex flex-col gap-10">
          {tareas.map((tarea) => (
            <div key={tarea}>
              <div className="flex items-center gap-4 border-b border-ink pb-3">
                <h3 className="swiss-display-sm text-ink">{tarea}</h3>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {ALGORITMOS.filter((a) => a.tarea === tarea).map((a) => (
                  <article
                    key={a.algoritmo}
                    className="group flex flex-col border border-ink-15 bg-surface p-6 transition hover:border-ink-40"
                  >
                    <h4 className="font-display text-lg font-bold text-ink">{a.algoritmo}</h4>
                    <p className="swiss-label mt-1.5">{a.english}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-60">{a.que_hace}</p>
                    <p className="mt-5 border-t border-ink-15 pt-4 text-sm leading-relaxed text-ink-80">
                      {a.cuando}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-l-2 border-accent pl-5">
          <p className="text-base leading-relaxed text-ink-60">
            Cada algoritmo es un <strong className="text-ink">learner</strong>, y todos se eligen
            desde el mismo botón. Eso es lo que permite compararlos de forma justa: comparten
            dataset, preprocesamiento y método de validación, y solo cambia el modelo.
          </p>
        </div>
      </div>
    </section>
  );
}
