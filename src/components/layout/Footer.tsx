import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-mist">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <span className="font-display text-lg tracking-wide">
              IATECH <span className="text-signal">· CLOUD</span>
            </span>
            <p className="mt-3 text-sm text-mist/70">
              Optimizamos y desplegamos los servicios en la nube que sostienen la atención médica de IATECH.
            </p>
            <div className="mt-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mist/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              Servicios operativos
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-mist/50">Navegación</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link to="/" className="transition hover:text-signal">Inicio</Link>
                </li>
                <li>
                  <Link to="/organizacion" className="transition hover:text-signal">Organización</Link>
                </li>
                <li>
                  <Link to="/mision-vision" className="transition hover:text-signal">Misión y Visión</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-mist/50">Contacto</p>
              <ul className="mt-4 space-y-2 text-sm text-mist/80">
                {/* TODO: reemplazar con el correo real del área */}
                <li>correo@iatech.com</li>
                {/* TODO: reemplazar con el teléfono real */}
                <li>+00 000 0000</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-navy-700/60 pt-6 text-xs text-mist/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IATECH — Área de Servicios Cloud e Integración.</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}