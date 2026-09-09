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
];

export default function Explorar() {
  return (
    <section
      id="explorar"
      className="bg-white py-20 sm:py-28"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '700px' }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl leading-tight text-navy-900 sm:text-4xl">
            Toda el área, en un solo lugar
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-navy-700/80 sm:text-base">
            Accedé a cada rincón del Área de Servicios Cloud e Integración desde acá.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREA_PAGES.map((page) => (
            <li key={page.path}>
              <Link
                to={page.path}
                aria-label={`Abrir ${page.title}`}
                className="group flex h-full flex-col rounded-2xl border border-navy-700/10 bg-mist/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-signal/50 hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-xl text-signal transition-colors duration-200 group-hover:bg-signal group-hover:text-navy-950 group-focus-visible:bg-signal group-focus-visible:text-navy-950">
                  <i className={`bx ${page.icon}`} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-tight text-navy-900">
                  {page.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700/80">
                  {page.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-navy-700/70 transition-colors group-hover:text-signal group-focus-visible:text-signal">
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