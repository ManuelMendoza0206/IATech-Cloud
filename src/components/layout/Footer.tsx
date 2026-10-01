import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-ink-950/10 bg-neu-base text-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <span className="font-neu-display text-lg tracking-wide">
              IATECH <span className="text-signal">· CLOUD</span>
            </span>
            <p className="mt-3 text-sm text-ink-700">
              Optimizamos y desplegamos los servicios en la nube que sostienen la atención médica de IATECH.
            </p>
            <div className="mt-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              Servicios operativos
            </div>
          </div>

          <div className="flex gap-16">
            <nav aria-label="Navegación del sitio">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-500">Navegación</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link to="/" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base rounded">Inicio</Link>
                </li>
                <li>
                  <Link to="/gestion-tecnologia" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base rounded">Gestión de Tecnología</Link>
                </li>
                <li>
                  <Link to="/ciencia-tecnologia-innovacion" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base rounded">Ciencia, Tecnología e Innovación</Link>
                </li>
                <li>
                  <Link to="/mision-vision" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base rounded">Misión y Visión</Link>
                </li>
                <li>
                  <Link to="/descripcion-posiciones" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base rounded">Descripción de Posiciones</Link>
                </li>
                <li>
                  <Link to="/mbti" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base rounded">MBTI · Equipo</Link>
                </li>
                <li>
                  <Link to="/scrum" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base rounded">Scrum</Link>
                </li>
                <li>
                  <Link to="/idef0" className="transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base rounded">IDEF0</Link>
                </li>
              </ul>
            </nav>

          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-950/10 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IATECH — Área de Servicios Cloud e Integración.</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}