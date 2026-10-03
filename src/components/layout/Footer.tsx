import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-canvas text-ink">
      <div className="float mx-4 mb-6 px-7 py-12 sm:mx-8 sm:px-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <span className="display-bold text-2xl">
              IATECH<span className="text-signal">.CLOUD</span>
            </span>
            <p className="mt-3 text-sm text-ink-700">
              Optimizamos y desplegamos los servicios en la nube que sostienen la atención médica de IATECH.
            </p>
            <span className="float-pill mt-5 inline-flex items-center gap-2 px-4 py-2 text-sm text-ink-70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              Servicios operativos
            </span>
          </div>

          <div className="flex gap-16">
            <nav aria-label="Navegación del sitio">
              <p className="label">Navegación</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link to="/" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded">Inicio</Link>
                </li>
                <li>
                  <Link to="/gestion-tecnologia" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded">Gestión de Tecnología</Link>
                </li>
                <li>
                  <Link to="/ciencia-tecnologia-innovacion" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded">Ciencia, Tecnología e Innovación</Link>
                </li>
                <li>
                  <Link to="/mision-vision" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded">Misión y Visión</Link>
                </li>
                <li>
                  <Link to="/descripcion-posiciones" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded">Descripción de Posiciones</Link>
                </li>
                <li>
                  <Link to="/mbti" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded">MBTI · Equipo</Link>
                </li>
                <li>
                  <Link to="/scrum" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded">Scrum</Link>
                </li>
                <li>
                  <Link to="/idef0" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas rounded">IDEF0</Link>
                </li>
              </ul>
            </nav>

          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IATECH — Área de Servicios Cloud e Integración.</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}