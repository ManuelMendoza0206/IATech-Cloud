import { SectionHeader } from '../../../components/content';
import { ENTORNOS } from '../data/weka';

export function Entornos() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="02"
          title="Los tres entornos"
          description="Weka se abre en tres aplicaciones distintas. No son tres versiones de lo mismo: resuelven problemas de escala distinta y se eligen según la pregunta que se quiere responder."
        />

        <div className="mt-12 flex flex-col gap-4">
          {ENTORNOS.map((e) => (
            <article
              key={e.nombre}
              className="group relative overflow-hidden border border-ink-15 bg-surface transition hover:border-ink-40"
            >
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center bg-ink text-xl text-accent transition group-hover:bg-accent group-hover:text-paper">
                      <i className={`bx ${e.icono}`} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink">{e.nombre}</h3>
                      <p className="swiss-label mt-1">{e.english}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-ink-60">{e.para}</p>
                </div>
                <div className="border-l-2 border-ink-15 pl-5 lg:pl-6">
                  <span className="swiss-label block text-accent">Cuándo usarlo</span>
                  <p className="mt-3 text-base leading-relaxed text-ink-80">{e.cuando}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border-l-2 border-accent pl-5">
          <p className="text-base leading-relaxed text-ink-60">
            El límite de Weka es el tamaño del problema: todo se procesa en memoria y en un solo
            equipo. Para datos que llegan en flujo o superan la memoria disponible, existe{' '}
            <strong className="text-ink">MOA</strong>, el proyecto hermano de la misma
            Universidad de Waikato, pensado para minería de datos en streaming.
          </p>
        </div>
      </div>
    </section>
  );
}
