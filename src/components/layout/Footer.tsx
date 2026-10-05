import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-ink bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-12">
          <div className="sm:col-span-5">
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

          <div className="sm:col-span-4 sm:col-start-8">
            <nav aria-label="Navegación del sitio">
              <p className="swiss-label border-b border-ink pb-3">Índice</p>
              <ul className="mt-4 space-y-1 text-sm">
                <li>
                  <Link to="/" className="block py-0.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Inicio</Link>
                </li>
                <li>
                  <Link to="/gestion-tecnologia" className="block py-0.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Gestión de Tecnología</Link>
                </li>
                <li>
                  <Link to="/ciencia-tecnologia-innovacion" className="block py-0.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Ciencia, Tecnología e Innovación</Link>
                </li>
                <li>
                  <Link to="/mision-vision" className="block py-0.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Misión y Visión</Link>
                </li>
                <li>
                  <Link to="/descripcion-posiciones" className="block py-0.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Descripción de Posiciones</Link>
                </li>
                <li>
                  <Link to="/mbti" className="block py-0.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">MBTI · Equipo</Link>
                </li>
                <li>
                  <Link to="/scrum" className="block py-0.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Scrum</Link>
                </li>
                <li>
                  <Link to="/idef0" className="block py-0.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">IDEF0</Link>
                </li>
                <li>
                  <Link to="/bpmn" className="block py-0.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">BPMN</Link>
                </li>
                <li>
                  <Link to="/contactos" className="block py-0.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Contactos</Link>
                </li>
                <li>
                  <Link to="/fuentes" className="block py-0.5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Fuentes</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="sm:col-span-3">
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