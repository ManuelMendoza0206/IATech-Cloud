import { SectionHeader } from '../../../components/content';
import { METRICAS } from '../data/weka';

const VALIDACION = [
  {
    metodo: 'Cross-validation',
    detalle: 'Divide el dataset en k partes, entrena con k−1 y prueba con la restante, k veces. Todos los casosterminan siendo prueba.',
    cuando: 'Es el valor por defecto en Weka y la opción cuando el dataset es chico.',
  },
  {
    metodo: 'Percentage split',
    detalle: 'Parte el dataset en una porción de entrenamiento y otra de prueba, según un porcentaje.',
    cuando: 'Cuando se quiere una sola cifra de rendimiento y el dataset es grande.',
  },
  {
    metodo: 'Train test split',
    detalle: 'Separa el dataset en dos archivos: uno de entrenamiento y otro de prueba, guardados en disco.',
    cuando: 'Cuando el modelo final se va a entrenar de verdad con uno y validarse con el otro.',
  },
  {
    metodo: 'Significancia estadística',
    detalle: 'Compara dos o más algoritmos sobre los mismos datos y calcula si la diferencia es atribuible al azar.',
    cuando: 'Es lo que separa "este modelo es mejor" de "este modelo ganó en esta corrida".',
  },
];

export function Evaluacion() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="05"
          title="Cómo se evalúa un modelo"
          description="Un modelo sin evaluación es una afirmación sin respaldo. Weka trae el método de validación, la matriz de confusión y las métricas en la misma salida, pero hay que saber cuál mirar y cuál ignora."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <div>
            <p className="swiss-label text-accent">Métodos de validación</p>
            <ul className="mt-6 flex flex-col gap-5">
              {VALIDACION.map((v) => (
                <li key={v.metodo} className="border-l-2 border-ink-15 pl-5">
                  <h3 className="font-display text-base font-bold text-ink">{v.metodo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-60">{v.detalle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-80">{v.cuando}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="swiss-label text-accent">Métricas y sus trampas</p>
            <div className="mt-6 overflow-x-auto border border-ink-15">
              <table className="w-full min-w-[34rem] border-collapse text-left">
                <caption className="sr-only">
                  Métricas de evaluación de modelos en Weka, cuándo usarlas y su trampa
                </caption>
                <thead>
                  <tr className="bg-ink text-paper">
                    <th scope="col" className="px-4 py-3 swiss-label">
                      Métrica
                    </th>
                    <th scope="col" className="px-4 py-3 swiss-label">
                      Cálculo
                    </th>
                    <th scope="col" className="px-4 py-3 swiss-label">
                      Cuándo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {METRICAS.map((m) => (
                    <tr key={m.nombre} className="border-b border-ink-15 bg-surface last:border-0">
                      <td className="px-4 py-4 align-top">
                        <p className="font-display text-sm font-bold text-ink">{m.nombre}</p>
                        <p className="mt-0.5 font-mono text-[11px] text-ink-40">{m.english}</p>
                        <p className="mt-2 text-[11px] leading-relaxed text-accent">{m.trampa}</p>
                      </td>
                      <td className="px-4 py-4 align-top font-mono text-[12px] text-ink-80">
                        {m.formula}
                      </td>
                      <td className="px-4 py-4 align-top text-[13px] leading-relaxed text-ink-60">
                        {m.cuando}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 border-l-2 border-accent pl-5">
              <p className="text-sm leading-relaxed text-ink-60">
                Sobreajuste: un modelo que memoriza el entrenamiento y falla con datos nuevos. Se
                detecta comparando el rendimiento en entrenamiento contra el de prueba: una brecha
                grande entre ambos es la señal. Ninguna técnica de preprocesado lo arregla; lo
                arregla un modelo más simple o más regularización.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
