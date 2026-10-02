import { SectionHeader } from '../../../components/content';

const TEAM = [
  {
    id: 'po',
    role: 'Product Owner',
    short: 'PO',
    name: 'Ing. Vicente Yamil Cárdenas Miguel',
    imageSrc: '/images/team/Yamil-CardenasPO.jpg',
    accent: 'bg-amber-500',
  },
  {
    id: 'sm',
    role: 'Scrum Master',
    short: 'SM',
    name: 'Marcelo Riveros',
    puestoCloud: 'Gerente de Área Cloud',
    imageSrc: '/images/team/l_cjr.png',
    accent: 'bg-accent',
  },
  {
    id: 'dev-1',
    role: 'Equipo de Desarrollo',
    short: 'DEV',
    name: 'Roman Pabon',
    puestoCloud: 'Administrador de Infraestructura Cloud',
    imageSrc: '/images/team/rp.png',
    accent: 'bg-paper',
  },
  {
    id: 'dev-2',
    role: 'Equipo de Desarrollo',
    short: 'DEV',
    name: 'Jaicel Velasco',
    puestoCloud: 'Arquitecto de Soluciones Cloud',
    imageSrc: '/images/team/jr.png',
    accent: 'bg-paper',
  },
  {
    id: 'dev-3',
    role: 'Equipo de Desarrollo',
    short: 'DEV',
    name: 'Manuel Jimenez',
    puestoCloud: 'Administrador DevOps',
    imageSrc: '/images/team/mj.png',
    accent: 'bg-paper',
  },
];

function TeamCard({ member, featured = false }: { member: (typeof TEAM)[number]; featured?: boolean }) {
  return (
    <div
      className={`ed-card flex w-full flex-col p-8 transition-all hover:-translate-y-1 ${featured ? 'bg-aqua/25' : ''}`}
    >
      <div className="flex items-start justify-between gap-4">
        <img
          src={member.imageSrc}
          alt={`${member.name} — ${member.role}`}
          loading="lazy"
          className={`shrink-0 object-cover object-center ${ featured ? 'ed-chip h-28 w-28' : 'ed-chip h-24 w-24' }`}
        />
        <span
          className={`px-4 py-1.5 font-mono text-xs font-semibold tracking-widest ${featured ? 'bg-aqua text-ink' : 'ed-chip text-accent'}`}
        >
          {member.short}
        </span>
      </div>
      <p className="mt-5 font-display text-lg font-extrabold leading-tight text-ink">{member.role}</p>
      {'puestoCloud' in member && member.puestoCloud ? (
        <p className="ed-chip mt-2 inline-flex items-center gap-1.5 self-start px-4 py-1.5 text-[11px] font-medium text-accent">
          {member.puestoCloud as string}
        </p>
      ) : null}
      <div className="ed-chip mt-4 flex items-center gap-3 px-5 py-3">
        <p className="font-mono text-sm font-medium leading-tight text-ink">{member.name}</p>
      </div>
      {member.id === 'po' && (
        <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-ink-45">
          Área Cloud — Product Owner
        </p>
      )}
      {member.id === 'sm' && (
        <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-accent">
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
    <section className="bg-paper py-16 sm:py-20">
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
            className="ed-btn inline-flex items-center gap-2 bg-paper px-5 py-2.5 text-xs font-bold text-ink transition hover:brightness-105"
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

        <div className="ed-card mt-12 overflow-hidden p-4 sm:p-6">
          <img
            src="https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2019-01/scrum%20team.png"
            alt="Scrum Team: Product Owner, Scrum Master y Developers colaborando"
            className="mx-auto max-h-80 w-auto object-contain"
            loading="lazy"
          />
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-ink-45">
            Un solo equipo, un solo objetivo por Sprint
          </p>
        </div>
      </div>
    </section>
  );
}
