import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/gestion-tecnologia', label: 'Gestión de Tecnología' },
  { to: '/ciencia-tecnologia-innovacion', label: 'Ciencia, Tecnología e Innovación' },
  { to: '/mision-vision', label: 'Misión y Visión' },
  { to: '/descripcion-posiciones', label: 'Descripción de Posiciones' },
  { to: '/mbti', label: 'MBTI · Equipo' },
  { to: '/scrum', label: 'Scrum' },
  { to: '/idef0', label: 'IDEF0' },
  { to: '/bpmn', label: 'BPMN' },
  { to: '/tableau', label: 'Tableau' },
  { to: '/weka', label: 'Weka' },
  { to: '/presupuesto', label: 'Presupuesto' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/plan-de-contingencia', label: 'Plan de Contingencia' },
  { to: '/conclusiones', label: 'Conclusiones y Recomendaciones' },
  { to: '/contactos', label: 'Contactos' },
  { to: '/fuentes', label: 'Fuentes' },
] as const;

const MIDPOINT = Math.ceil(FOOTER_LINKS.length / 2);
const FOOTER_COLUMNS = [
  FOOTER_LINKS.slice(0, MIDPOINT),
  FOOTER_LINKS.slice(MIDPOINT),
];

export default function Footer() {
  return (
    <footer className="border-t border-ink bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-12">
          <div className="sm:col-span-12 lg:col-span-3">
            <span className="font-display text-sm font-black uppercase tracking-[0.2em]">
              IATECH<span className="text-accent">.CLOUD</span>
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-60">
              Optimizamos y desplegamos los servicios en la nube que sostienen la atención médica de IATECH.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-accent" />
              </span>
              <span className="swiss-label">Servicios operativos</span>
            </div>
          </div>

          <div className="sm:col-span-8 lg:col-span-6">
            <nav aria-label="Navegación del sitio">
              <p className="swiss-label border-b border-ink pb-3">Índice</p>
              <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-1 text-sm sm:grid-cols-2">
                {FOOTER_COLUMNS.map((column, colIdx) => (
                  <ul key={colIdx} className="space-y-1">
                    {column.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          className="block py-0.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </nav>
          </div>

          <div className="sm:col-span-4 lg:col-span-3">
            <p className="swiss-label border-b border-ink pb-3">Verificación</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-60">
              Todo dato nuevo publicado en el sitio lleva su fuente. El índice completo, con
              enlace a cada publicación original, está en una sola página.
            </p>
            <Link
              to="/fuentes"
              className="swiss-btn swiss-btn-secondary mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-[11px]"
            >
              Índice de fuentes
              <i className="bx bx-right-arrow-alt text-base" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ink pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="swiss-label">© {new Date().getFullYear()} IATECH — Servicios Cloud e Integración</p>
          <p className="swiss-label">Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}