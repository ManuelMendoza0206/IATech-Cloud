import { SectionHeader } from '../../../components/content';
import { LECTURA_ROWS } from '../data/diagram';

export function Lectura() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          showNumber={false}
          number="06"
          title="Lectura guiada del diagrama"
          description="El mismo proceso del diagrama, contado paso a paso por responsable. Esta vista es la que se usa para validar el alcance con las áreas."
        />

        <div className="mt-10 overflow-x-auto rounded-2xl border border-navy-900/10 bg-white shadow-sm">
          <table className="w-full min-w-[52rem] border-collapse text-left">
            <caption className="sr-only">Lectura paso a paso del BPMN del ciclo de vida del servicio Cloud</caption>
            <thead>
              <tr className="bg-navy-950 text-mist">
                <th scope="col" className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-widest">
                  Paso
                </th>
                <th scope="col" className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-widest">
                  Lane
                </th>
                <th scope="col" className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-widest">
                  Acción
                </th>
                <th scope="col" className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-widest">
                  Qué pasa aquí
                </th>
              </tr>
            </thead>
            <tbody>
              {LECTURA_ROWS.map((row) => (
                <tr
                  key={row.step}
                  className="border-b border-navy-900/10 last:border-0 transition hover:bg-mist/40"
                >
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy-950 font-mono text-xs font-semibold text-signal">
                      {row.step}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 font-mono text-xs uppercase tracking-wider text-navy-700/70">
                    {row.lane}
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-navy-900">
                    {row.action}
                  </td>
                  <td className="px-5 py-4 text-sm leading-relaxed text-navy-700/80">
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-widest text-signal">Los tres reworks</p>
            <p className="mt-3 text-sm leading-relaxed text-navy-700/80">
              <strong className="text-navy-900">No</strong> tras evaluar → replanificar;{' '}
              <strong className="text-navy-900">No</strong> tras diseñar → ajustar y volver;{' '}
              <strong className="text-navy-900">Falla</strong> tras desplegar → rollback y
              reintento. El diagrama contiene más caminos de corrección que camino feliz: el
              rework forma parte del modelo.
            </p>
          </div>
          <div className="rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-widest text-signal">El tramo paralelo</p>
            <p className="mt-3 text-sm leading-relaxed text-navy-700/80">
              Tras aprobar el diseño, <strong className="text-navy-900">DevOps</strong> construye
              el pipeline mientras <strong className="text-navy-900">Infraestructura</strong>{' '}
              aprovisiona la VPC: el único tramo con ejecución concurrente. Ambos convergen en el
              despliegue en K8s, donde el tercer gateway decide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
