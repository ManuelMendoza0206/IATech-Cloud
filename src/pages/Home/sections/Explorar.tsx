import { Link } from 'react-router-dom';

const AREA_PAGES = [
  {
    path: '/gestion-tecnologia',
    icon: 'bx-chip',
    title: 'Gestión de Tecnología',
    description: 'Cómo la tecnología se alinea con los objetivos del negocio.',
  },
  {
    path: '/ciencia-tecnologia-innovacion',
    icon: 'bx-atom',
    title: 'Ciencia, Tecnología e Innovación',
    description: 'Los fundamentos teóricos que sostienen el área.',
  },
  {
    path: '/mision-vision',
    icon: 'bx-target-lock',
    title: 'Misión y Visión',
    description: 'El norte que guía cada despliegue del equipo.',
  },
  {
    path: '/descripcion-posiciones',
    icon: 'bx-id-card',
    title: 'Descripción de Posiciones',
    description: 'Roles, funciones y el organigrama del área.',
  },
  {
    path: '/mbti',
    icon: 'bx-user',
    title: 'Equipo · MBTI',
    description: 'Los perfiles que componen el equipo y cómo colaboran.',
  },
  {
    path: '/scrum',
    icon: 'bx-layer',
    title: 'Scrum',
    description: 'El marco ágil con el que entregamos valor continuo.',
  },
  {
    path: '/idef0',
    icon: 'bx-git-branch',
    title: 'IDEF0',
    description: 'El modelo de funciones del proyecto CLOUD, documentado.',
  },
];

export default function Explorar() {
  return (
    <section
      id="explorar"
      className="bg-paper py-20 sm:py-28"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '700px' }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="reveal font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Toda el área, en un solo lugar
          </h2>
          <p className="reveal max-w-xl text-sm leading-relaxed text-ink-70 sm:text-base">
            Accedé a cada rincón del Área de Servicios Cloud e Integración desde acá.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREA_PAGES.map((page) => (
            <li key={page.path}>
              <Link
                to={page.path}
                aria-label={`Abrir ${page.title}`}
                className="reveal ed-card group flex h-full flex-col p-6 transition-all duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                <span className="ed-chip flex h-11 w-11 items-center justify-center text-xl text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white group-focus-visible:bg-accent group-focus-visible:text-white">
                  <i className={`bx ${page.icon}`} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold leading-tight text-ink">
                  {page.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-70">
                  {page.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-45 transition-colors group-hover:text-accent group-focus-visible:text-accent">
                  Ver página
                  <i
                    className="bx bx-right-arrow-alt text-base transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}