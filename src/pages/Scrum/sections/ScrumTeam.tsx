import { SectionHeader } from '../../../components/content';

const TEAM = [
  {
    id: 'po',
    role: 'Product Owner',
    short: 'PO',
    name: 'Prof. — Por definir',
    icon: 'bx-crown',
    accent: 'bg-amber-500',
  },
  {
    id: 'sm',
    role: 'Scrum Master',
    short: 'SM',
    name: 'Por definir',
    icon: 'bx-shield',
    accent: 'bg-signal',
  },
  {
    id: 'dev-1',
    role: 'Equipo de Desarrollo',
    short: 'DEV',
    name: 'Por definir',
    icon: 'bx-code-alt',
    accent: 'bg-navy-700',
  },
  {
    id: 'dev-2',
    role: 'Equipo de Desarrollo',
    short: 'DEV',
    name: 'Por definir',
    icon: 'bx-code-alt',
    accent: 'bg-navy-700',
  },
  {
    id: 'dev-3',
    role: 'Equipo de Desarrollo',
    short: 'DEV',
    name: 'Por definir',
    icon: 'bx-code-alt',
    accent: 'bg-navy-700',
  },
];

export function ScrumTeam() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="08"
          title="El Scrum Team"
          description="5 integrantes — 1 Product Owner (profe) + 4 del grupo. Equipo pequeño y cohesionado, sin jerarquías internas. Cada Sprint entrega un incremento de valor."
        />

        {/* Botón hacia objetivos por área */}
        <div className="mt-6">
          <a
            href="#objetivos"
            className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-5 py-2.5 text-xs font-medium text-mist transition-colors hover:bg-navy-800"
          >
            Ver objetivos por área
            <i className="bx bx-arrow-to-bottom text-sm" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {TEAM.map((m) => (
            <div
              key={m.id}
              className="flex flex-col rounded-2xl border border-navy-900/10 bg-mist/50 p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <i className={`bx ${m.icon} text-3xl text-signal`} />
                <span className="rounded-full bg-navy-900 px-3 py-1 font-mono text-xs text-mist">
                  {m.short}
                </span>
              </div>
              <p className="mt-4 font-display text-base font-semibold text-navy-900">{m.role}</p>
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-navy-900/10 bg-white px-3 py-2.5">
                <i className="bx bx-user text-sm text-navy-700/40" />
                <p className="font-mono text-xs text-navy-700/70">{m.name}</p>
              </div>
              {m.id === 'po' && (
                <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-navy-700/40">
                  Docente — Product Owner
                </p>
              )}
              {m.id === 'sm' && (
                <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-signal">Scrum Master</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-navy-900/10 bg-mist p-4 sm:p-6">
          <img
            src="https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2019-01/scrum%20team.png"
            alt="Scrum Team: Product Owner, Scrum Master y Developers colaborando"
            className="mx-auto max-h-80 w-auto rounded-xl object-contain"
            loading="lazy"
          />
          <p className="mt-4 text-center font-mono text-xs uppercase tracking-widest text-navy-700/50">
            Un solo equipo, un solo objetivo por Sprint
          </p>
        </div>
      </div>
    </section>
  );
}
