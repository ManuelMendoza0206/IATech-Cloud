import { SectionHeader } from '../../../components/content';
import { AREAS } from '../data/areas';

export function ObjetivosAreas() {
  return (
    <section id="objetivos" className="bg-canvas py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="07"
          title="Objetivos por Área"
          description="Cada área de la descripción de posiciones aporta un objetivo propio que alimenta el Product Backlog. Accedé desde el Scrum Team y navegá por áreas."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {AREAS.map((a, idx) => (
            <div
              key={a.id}
              className="float flex flex-col rounded-2xl p-6 sm:p-8 transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="float flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs text-ink">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <i className={`bx ${a.icon} text-2xl text-signal`} />
                </div>
                <span className="float-pill rounded-full px-3 py-1 font-mono text-xs font-medium text-signal">
                  {a.short}
                </span>
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{a.title}</h3>

              <div className="float mt-4 flex-1 rounded-xl p-4">
                <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-signal">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  Objetivo del área
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/80">{a.objective}</p>
              </div>

              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-ink-700/40">
                Área {String(idx + 1).padStart(2, '0')} — Descripción de Posiciones
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
