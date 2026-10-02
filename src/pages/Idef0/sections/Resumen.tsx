import { SectionHeader } from '../../../components/content';
import { ARROW_GROUPS, RESUMEN_ROWS } from '../data/diagram';

export function Resumen() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="09"
          title="Resumen de la función"
          description="La misma información del diagrama, ordenada por responsabilidad. Esta vista es la que se usa para validar el alcance con las áreas."
        />

        <div className="ed-card mt-10 overflow-x-auto">
          <table className="w-full min-w-[46rem] border-collapse text-left">
            <caption className="sr-only">Comparación de los cuatro tipos de flecha del diagrama IDEF0</caption>
            <thead>
              <tr className="bg-paper text-ink">
                <th scope="col" className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-widest">
                  Origen
                </th>
                <th scope="col" className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-widest">
                  Tipo
                </th>
                <th scope="col" className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-widest">
                  Pregunta
                </th>
                <th scope="col" className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-widest">
                  Para qué sirve
                </th>
                <th scope="col" className="px-5 py-3.5 font-mono text-[11px] uppercase tracking-widest">
                  En este diagrama
                </th>
              </tr>
            </thead>
            <tbody>
              {RESUMEN_ROWS.map((row) => {
                const g = ARROW_GROUPS[row.kind];
                return (
                  <tr
                    key={row.kind}
                    className="border-b border-rule-soft last:border-0 transition hover:bg-paper/40"
                  >
                    <td className="whitespace-nowrap px-5 py-4 font-mono text-xs uppercase tracking-wider text-ink-70/70">
                      {row.origin}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className="inline-flex items-center px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-white"
                        style={{ backgroundColor: g.color }}
                      >
                        {g.label}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-ink">
                      {row.question}
                    </td>
                    <td className="px-5 py-4 text-sm leading-relaxed text-ink-70/80">
                      {row.purpose}
                    </td>
                    <td className="px-5 py-4 font-mono text-xs leading-relaxed text-ink-70/70">
                      {row.example}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="ed-card p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">Lectura del modelo</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-70/80">
              Leído de izquierda a derecha, el diagrama cuenta una historia completa: el equipo
              entrega un <strong className="text-ink">build</strong> y el{' '}
              <strong className="text-ink">código</strong>, la organización impone{' '}
              <strong className="text-ink">reglas</strong> y{' '}
              <strong className="text-ink">presupuestos</strong>, AWS y el pipeline{' '}
              <strong className="text-ink">ejecutan</strong> y el resultado es un{' '}
              <strong className="text-ink">servicio operativo</strong> con su evidencia.
            </p>
          </div>
          <div className="ed-card p-6 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">Próximo nivel</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-70/80">
              Este diagrama A-0 se descompondría en nodos hijos —A1 compilación y pruebas, A2
              construcción de artefactos, A3 promoción a producción— cada uno con su propio Bs y sus
              propias flechas. La descomposición se detiene cuando el detalle deja de aportar
              decisiones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
