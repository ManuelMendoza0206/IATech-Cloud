import { SectionHeader } from '../../../components/content';
import { ATRIBUTOS, ANALISIS } from '../data/trabajo';

export function Trabajo() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="07"
          title="Análisis propio del inventario cloud"
          description="El trabajo de análisis de datos del área: el inventario de recursos cloud del despliegue, analizado con Weka. Cien instancias, ocho atributos, y tres preguntas distintas: qué nivel de costo tiene cada recurso, qué perfiles de consumo existen y qué reglas se cumplen siempre."
        />

        {/* El dataset */}
        <div className="mt-12 border border-ink-15 bg-paper">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink-15 px-6 py-4">
            <span className="swiss-label text-accent">Dataset</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-40">
              inventario-cloud-weka
            </span>
          </div>
          <div className="px-6 py-8 sm:px-8">
            <p className="max-w-3xl text-base leading-relaxed text-ink-60">
              El punto de partida es el inventario de recursos del despliegue: lo que la
              operación tiene dado de alta en la nube. Son 100 instancias con 8 atributos, y el
              último es la variable objetivo, el costo manual en dólares. Ese costo se
              discretizó en tres niveles (Alta, Media, Crítica) para poder tratarlo como un
              problema de clasificación.
            </p>

            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[42rem] border-collapse text-left">
                <caption className="sr-only">Atributos del inventario cloud analizado</caption>
                <thead>
                  <tr className="border-b border-ink">
                    <th scope="col" className="py-3 pr-6 swiss-label">
                      Atributo
                    </th>
                    <th scope="col" className="py-3 pr-6 swiss-label">
                      Valores
                    </th>
                    <th scope="col" className="py-3 swiss-label">
                      Papel
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ATRIBUTOS.map((a) => (
                    <tr key={a.nombre} className="border-b border-ink-15 last:border-0">
                      <td className="py-4 pr-6 align-top font-mono text-[13px] text-ink">
                        {a.nombre}
                      </td>
                      <td className="py-4 pr-6 align-top text-[13px] leading-relaxed text-ink-60">
                        {a.valores}
                      </td>
                      <td className="py-4 align-top">
                        <span
                          className={`inline-block border px-2 py-1 font-mono text-[11px] ${
                            a.rol === 'Variable objetivo'
                              ? 'border-accent text-accent'
                              : 'border-ink-15 text-ink-60'
                          }`}
                        >
                          {a.rol}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Los tres análisis */}
        <div className="mt-16 flex flex-col gap-16">
          {ANALISIS.map((a) => (
            <article key={a.numero}>
              <div className="flex items-baseline gap-4 border-b border-ink pb-3">
                <span className="font-display text-4xl font-black leading-none text-accent">
                  {a.numero}
                </span>
                <h3 className="swiss-display-sm text-ink">{a.titulo}</h3>
                <span className="ml-auto hidden shrink-0 border border-ink-15 px-2.5 py-1 font-mono text-[11px] text-ink-60 sm:inline">
                  {a.pestana}
                </span>
              </div>

              <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-12">
                <div>
                  <div className="border border-ink-15 bg-white p-2">
                    <img
                      src={a.imagen}
                      alt={a.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full"
                    />
                  </div>
                  <p className="mt-3 font-mono text-[11px] text-ink-40">{a.algoritmo}</p>
                </div>

                <div>
                  <p className="text-base leading-relaxed text-ink-60">{a.que_hace}</p>

                  <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 border-y border-ink-15 py-6">
                    {a.cifras.map((c) => (
                      <div key={c.k}>
                        <dt className="swiss-label">{c.k}</dt>
                        <dd className="mt-1.5 font-display text-2xl font-black text-ink">{c.v}</dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-6 border-l-2 border-accent pl-5 text-base leading-relaxed text-ink-60">
                    {a.lectura}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-l-2 border-accent pl-5">
          <p className="text-base leading-relaxed text-ink-60">
            Las tres pestañas se corresponden con las tres técnicas de la sección de algoritmos:
            el árbol del apartado 01 es el J48 de la ficha de clasificación, el agrupamiento del
            apartado 03 es SimpleKMeans con la distancia euclidiana, y las reglas del apartado 04
            son las de Apriori con soporte y confianza mínimos. La diferencia entre los tres
            resultados es la diferencia entre las preguntas: el árbol no pudo encontrar la regla
            que buscábamos, el agrupamiento sí encontró estructura, y las reglas de asociación
            describieron lo que ya se sabe del área.
          </p>
        </div>
      </div>
    </section>
  );
}
