import { SectionHeader } from '../../../components/content';

const ROLES = [
  {
    role: 'Product Owner',
    short: 'PO',
    responsibility: 'Maximizar el valor del producto',
    tasks: [
      'Definir y comunicar la visión del producto',
      'Crear, priorizar y detallar el Product Backlog',
      'Puente directo con clientes y negocio',
    ],
    icon: 'bx-crown',
  },
  {
    role: 'Scrum Master',
    short: 'SM',
    responsibility: 'Asegurar la efectividad del equipo',
    tasks: [
      'Facilitar ceremonias y el framework',
      'Remover impedimentos organizacionales',
      'Proteger al equipo de interrupciones externas',
    ],
    icon: 'bx-shield',
  },
  {
    role: 'Developers',
    short: 'DEV',
    responsibility: 'Crear un incremento utilizable cada Sprint',
    tasks: [
      'Estimar y planificar la ejecución técnica',
      'Mantener calidad y adherencia al diseño',
      'Autoorganizarse en el día a día',
    ],
    icon: 'bx-code-alt',
  },
];

export function ScrumTeam() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="04"
          title="El Scrum Team"
          description="Equipo pequeño, cohesionado, sin jerarquías internas ni silos. Todo el equipo es responsable del incremento de valor en cada ciclo."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {ROLES.map((r) => (
            <div
              key={r.role}
              className="flex flex-col rounded-2xl border border-navy-900/10 bg-mist/50 p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <i className={`bx ${r.icon} text-3xl text-signal`} />
                <span className="rounded-full bg-navy-900 px-3 py-1 font-mono text-xs text-mist">
                  {r.short}
                </span>
              </div>
              <p className="mt-4 font-display text-lg text-navy-900">{r.role}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-signal">
                {r.responsibility}
              </p>
              <ul className="mt-6 flex-1 space-y-2">
                {r.tasks.map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-navy-700/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    {t}
                  </li>
                ))}
              </ul>
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
