import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-steel/30 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <span className="text-[15px] font-bold tracking-tight text-ink">
              IATECH<span className="text-signal">.CLOUD</span>
            </span>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-70">
              Optimizamos y desplegamos los servicios en la nube que sostienen la atención médica de IATECH.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="chip chip-ok">
                <span className="dot" />
                Servicios operativos
              </span>
              <span className="chip metric">99.98%</span>
              <span className="chip">24/7</span>
            </div>
          </div>

          <div className="flex gap-16">
            <nav aria-label="Navegación del sitio">
              <p className="mono-label">Navegación</p>
              <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-1.5 text-sm sm:grid-cols-2">
                <li>
                  <Link to="/" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ice-50 rounded">Inicio</Link>
                </li>
                <li>
                  <Link to="/gestion-tecnologia" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ice-50 rounded">Gestión de Tecnología</Link>
                </li>
                <li>
                  <Link to="/ciencia-tecnologia-innovacion" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ice-50 rounded">Ciencia, Tecnología e Innovación</Link>
                </li>
                <li>
                  <Link to="/mision-vision" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ice-50 rounded">Misión y Visión</Link>
                </li>
                <li>
                  <Link to="/descripcion-posiciones" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ice-50 rounded">Descripción de Posiciones</Link>
                </li>
                <li>
                  <Link to="/mbti" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ice-50 rounded">MBTI · Equipo</Link>
                </li>
                <li>
                  <Link to="/scrum" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ice-50 rounded">Scrum</Link>
                </li>
                <li>
                  <Link to="/idef0" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ice-50 rounded">IDEF0</Link>
                </li>
              </ul>
            </nav>

          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-steel/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono-label">© {new Date().getFullYear()} IATECH — Servicios Cloud e Integración</p>
          <p className="mono-label">Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}