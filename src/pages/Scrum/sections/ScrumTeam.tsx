import { SectionHeader } from '../../../components/content';

const TEAM = [
  {
    id: 'po',
    role: 'Product Owner',
    short: 'PO',
    name: 'Ing. Vicente Yamil Cárdenas Miguel',
    icon: 'bx-crown',
    accent: 'bg-amber-500',
  },
  {
    id: 'sm',
    role: 'Scrum Master',
    short: 'SM',
    name: 'Marcelo Riveros',
    icon: 'bx-shield',
    accent: 'bg-signal',
  },
  {
    id: 'dev-1',
    role: 'Equipo de Desarrollo',
    short: 'DEV',
    name: 'Roman Pabon',
    icon: 'bx-code-alt',
    accent: 'bg-navy-700',
  },
  {
    id: 'dev-2',
    role: 'Equipo de Desarrollo',
    short: 'DEV',
    name: 'Jaicel Velasco',
    icon: 'bx-code-alt',
    accent: 'bg-navy-700',
  },
  {
    id: 'dev-3',
    role: 'Equipo de Desarrollo',
    short: 'DEV',
    name: 'Manuel Jimenez',
    icon: 'bx-code-alt',
    accent: 'bg-navy-700',
  },
];

function TeamCard({ member, featured = false }: { member: (typeof TEAM)[number]; featured?: boolean }) {
  return (
    <div
      className={`flex w-full flex-col rounded-3xl border bg-mist/50 p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${featured ? 'border-amber-400/40 bg-gradient-to-br from-amber-50 to-mist shadow-lg' : 'border-navy-900/10 shadow-sm hover:shadow-lg'}`}
    >
      <div className="flex items-center justify-between">
        <i className={`bx ${member.icon} text-4xl ${featured ? 'text-amber-500' : 'text-signal'}`} />
        <span
          className={`rounded-full px-4 py-1.5 font-mono text-xs font-semibold tracking-widest ${featured ? 'bg-amber-500 text-white' : member.id === 'sm' ? 'bg-signal text-navy-950' : 'bg-navy-900 text-mist'}`}
        >
          {member.short}
        </span>
      </div>
      <p className="mt-5 font-display text-lg font-bold leading-tight text-navy-900">{member.role}</p>
      <div className="mt-4 flex items-center gap-3 rounded-2xl border border-navy-900/10 bg-white px-4 py-4 shadow-sm">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${featured ? 'bg-amber-500' : member.id === 'sm' ? 'bg-signal' : 'bg-navy-900'}`}>
          <i className="bx bx-user text-base text-white" />
        </span>
        <p className="font-mono text-sm font-medium leading-tight text-navy-900">{member.name}</p>
      </div>
      {member.id === 'po' && (
        <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-widest text-navy-700/50">
          Área Cloud — Product Owner
        </p>
      )}
      {member.id === 'sm' && (
        <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-widest text-signal">
          Facilitador del framework
        </p>
      )}
    </div>
  );
}

export function ScrumTeam() {
  const po = TEAM.find((m) => m.id === 'po')!;
  const sm = TEAM.find((m) => m.id === 'sm')!;
  const devs = TEAM.filter((m) => m.id.startsWith('dev'));

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="08"
          title="El Scrum Team"
          description="5 integrantes — 1 Product Owner + 4 especialistas del Área Cloud. Equipo pequeño y cohesionado, sin jerarquías internas. Cada Sprint entrega un incremento de valor."
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

        {/* Pirámide - cajas grandes */}
        <div className="mt-12 flex flex-col items-center gap-6">
          {/* Nivel 1 — Cúspide: PO */}
          <div className="w-full max-w-[480px]">
            <TeamCard member={po} featured />
          </div>

          {/* Nivel 2 — 2 columnas */}
          <div className="flex w-full max-w-4xl flex-col gap-6 sm:flex-row sm:justify-center">
            <div className="w-full sm:w-[380px]">
              <TeamCard member={sm} />
            </div>
            <div className="w-full sm:w-[380px]">
              <TeamCard member={devs[0]} />
            </div>
          </div>

          {/* Nivel 3 — Base: 2 columnas */}
          <div className="flex w-full max-w-4xl flex-col gap-6 sm:flex-row sm:justify-center">
            <div className="w-full sm:w-[380px]">
              <TeamCard member={devs[1]} />
            </div>
            <div className="w-full sm:w-[380px]">
              <TeamCard member={devs[2]} />
            </div>
          </div>
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
