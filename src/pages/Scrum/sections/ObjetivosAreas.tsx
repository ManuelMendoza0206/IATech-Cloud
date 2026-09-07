import { SectionHeader } from '../../../components/content';

const AREAS = [
  {
    id: 'gerente-cloud',
    title: 'Gerente de Área Cloud',
    short: 'GC',
    objective: 'Por definir',
    icon: 'bx-briefcase',
  },
  {
    id: 'arquitecto-cloud',
    title: 'Arquitecto de Soluciones Cloud',
    short: 'ARC',
    objective: 'Por definir',
    icon: 'bx-layer',
  },
  {
    id: 'admin-devops',
    title: 'Administrador DevOps',
    short: 'DevOps',
    objective: 'Por definir',
    icon: 'bx-git-branch',
  },
  {
    id: 'admin-infraestructura',
    title: 'Administrador de Infraestructura Cloud',
    short: 'INFRA',
    objective:
      'Diseñar, gestionar y optimizar la infraestructura cloud de la empresa con el objetivo de garantizar la alta disponibilidad, escalabilidad y seguridad de los servicios digitales, para maximizar la eficiencia operativa y de costos, permitir despliegues ágiles en los equipos de desarrollo y asegurar la continuidad del negocio.',
    icon: 'bx-server',
  },
];

export function ObjetivosAreas() {
  return (
    <section id="objetivos" className="bg-mist py-16 sm:py-20">
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
              className="flex flex-col rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-950 font-mono text-xs text-mist">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <i className={`bx ${a.icon} text-2xl text-signal`} />
                </div>
                <span className="rounded-full bg-signal/10 px-3 py-1 font-mono text-xs font-medium text-signal">
                  {a.short}
                </span>
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{a.title}</h3>

              <div className="mt-4 flex-1 rounded-xl border border-signal/20 bg-mist/50 p-4">
                <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-signal">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  Objetivo del área
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{a.objective}</p>
              </div>

              <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-navy-700/40">
                Área {String(idx + 1).padStart(2, '0')} — Descripción de Posiciones
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
