import { SectionHeader } from '../../../components/content';
import { LECTURA_ROWS } from '../data/diagram';

export function Lectura() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          showNumber={false}
          number="06"
          title="Lectura guiada del diagrama"
          description="El mismo proceso del diagrama, contado paso a paso por responsable. Esta vista es la que se usa para validar el alcance con las áreas."
        />

        <div className="mt-10 overflow-x-auto border border-ink-15 bg-surface">
          <table className="w-full min-w-[52rem] border-collapse text-left">
            <caption className="sr-only">Lectura paso a paso del BPMN del ciclo de vida del servicio Cloud</caption>
            <thead>
              <tr className="bg-ink text-paper">
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
                  className="border-b border-ink-15 last:border-0 transition hover:bg-paper/40"
                >
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink font-mono text-xs font-semibold text-accent">
                      {row.step}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 font-mono text-xs uppercase tracking-wider text-ink-60">
                    {row.lane}
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-ink">
                    {row.action}
                  </td>
                  <td className="px-5 py-4 text-sm leading-relaxed text-ink-60">
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="border border-ink-15 bg-surface p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">Los tres reworks</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-60">
              <strong className="text-ink">No</strong> tras evaluar → replanificar;{' '}
              <strong className="text-ink">No</strong> tras diseñar → ajustar y volver;{' '}
              <strong className="text-ink">Falla</strong> tras desplegar → rollback y
              reintento. El diagrama contiene más caminos de corrección que camino feliz: el
              rework forma parte del modelo.
            </p>
          </div>
          <div className="border border-ink-15 bg-surface p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">El tramo paralelo</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-60">
              Tras aprobar el diseño, <strong className="text-ink">DevOps</strong> construye
              el pipeline mientras <strong className="text-ink">Infraestructura</strong>{' '}
              aprovisiona la VPC: el único tramo con ejecución concurrente. Ambos convergen en el
              despliegue en K8s, donde el tercer gateway decide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
