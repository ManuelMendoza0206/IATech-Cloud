import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="ed-rule-heavy bg-paper pt-16 text-ink">
      <div className="mx-auto max-w-7xl px-6 pb-14 sm:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <span className="font-display text-2xl leading-none tracking-tight">
              IATECH<span className="italic text-accent">.</span>CLOUD
            </span>
            <p className="ed-dropcap mt-6 max-w-sm">
              Optimizamos y desplegamos los servicios en la nube que sostienen la atención médica de IATECH.
            </p>
            <div className="ed-rule-soft mt-6 flex items-center gap-2 pt-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 bg-accent" />
              </span>
              <span className="ed-caption">Servicios operativos</span>
            </div>
          </div>

          <div className="flex gap-16">
            <nav aria-label="Navegación del sitio">
              <p className="ed-caption">Índice</p>
              <ul className="ed-rule-soft mt-3 space-y-1 pt-3 text-sm">
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
              </ul>
            </nav>

          </div>
        </div>

        <div className="ed-rule mt-12 flex flex-col gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="ed-caption">© {new Date().getFullYear()} IATECH — Área de Servicios Cloud e Integración</p>
          <p className="ed-caption">Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}