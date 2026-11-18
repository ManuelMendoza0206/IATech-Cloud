import { SectionHeader } from '../../../components/content';
import { FASES_CICLO, MARCO_NORMATIVO } from '../data/plan';

export default function MarcoTeorico() {
  return (
    <section id="contenido" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="01"
          title="Fundamentos y marco normativo"
          description="Cómo se estructura la continuidad operativa del Área Cloud ante fallas tecnológicas, ciberataques o eventos urbanos."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="space-y-5 text-base leading-relaxed text-ink-60 sm:text-lg">
              <p>
                El Plan de Contingencia fija procedimientos verificados para sostener las plataformas
                médicas de IATECH cuando ocurre una falla en la nube, una interrupción de enlaces
                internacionales o un bloqueo que impide el acceso físico a la oficina en La Paz.
              </p>
              <p>
                Su objetivo es mantener los procesos críticos activos, incluso en modo degradado
                controlado, hasta recuperar la operación normal con pérdida mínima de datos y dentro
                de tiempos definidos.
              </p>
              <p className="border-l-2 border-ink pl-5 text-ink">
                El documento aplica únicamente al <strong>Área de Servicios Cloud e Integración</strong>{' '}
                en entorno híbrido (Multi-Cloud más sede técnica local), sin exponer cifras
                presupuestarias.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-3">
              {FASES_CICLO.map((item, idx) => (
                <article key={item.fase} className="swiss-cell flex flex-col p-6">
                  <span className="swiss-chip inline-flex w-fit px-3 py-1 font-mono text-xs font-semibold text-accent">
                    {String(idx + 1).padStart(2, '0')} · {item.fase}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-extrabold leading-tight text-ink">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-60">{item.descripcion}</p>
                  <ul className="mt-5 space-y-2 border-t border-ink-15 pt-4">
                    {item.acciones.map((acc) => (
                      <li key={acc} className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-60">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                        <span>{acc}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-ink-15 pt-12">
          <p className="swiss-label text-accent">Base legal y estándares</p>
          <h3 className="mt-3 font-display text-2xl font-extrabold text-ink">
            Marco normativo en Bolivia y estándares Cloud
          </h3>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MARCO_NORMATIVO.map((norma) => (
              <li key={norma.codigo} className="swiss-cell p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-accent">{norma.ambito}</p>
                <p className="mt-2 font-display text-base font-extrabold text-ink">{norma.codigo}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-60">{norma.detalle}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
