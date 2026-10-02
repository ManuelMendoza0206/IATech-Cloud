import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../router';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-ink/40 transition-opacity duration-200 ${ isOpen ? 'opacity-100' : 'pointer-events-none opacity-0' }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-sm border-l border-steel/30 bg-ice-50 shadow-panel-hi transition-transform duration-300 ease-out ${ isOpen ? 'translate-x-0' : 'translate-x-full' }`}
      >
        <div className="flex h-full flex-col px-8 py-8 sm:px-12 sm:py-10">
          <div className="flex items-center justify-between">
            <span className="mono-label">Índice de navegación</span>
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="btn btn-secondary h-9 px-3"
            >
              Cerrar
            </button>
          </div>

          <nav className="mt-6 flex-1 overflow-y-auto">
            <ul className="flex flex-col gap-1">
              {ROUTES.filter((route) => !route.hideFromNav).map((route, index) => {
                const isActive = location.pathname === route.path;
                return (
                  <li key={route.path} className="border-b border-steel/25 last:border-b-0">
                    <Link
                      to={route.path}
                      onClick={onClose}
                      className={`panel-hover group flex items-center gap-3 rounded-xl px-3 py-3 ${
                        isActive ? 'bg-white shadow-panel' : ''
                      }`}
                    >
                      <span className="mono-label w-6 shrink-0 text-signal">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`text-[15px] font-semibold leading-tight transition-colors ${ isActive ? 'text-signal' : 'text-ink group-hover:text-signal' }`}
                      >
                        {route.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-steel/25 pt-4">
            <p className="mono-label">Servicios Cloud e Integración</p>
            <div className="mt-3 flex items-center gap-2">
              <span className="chip chip-ok">
                <span className="dot" />
                Operativo
              </span>
              <span className="chip metric">24/7</span>
            </div>
          </div>
          <a
            href="https://iatech-co-frontend.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acceder al inventario conjunto en Vercel"
            className="btn btn-primary mt-4 self-start"
          >
            Inventario
            <i className="bx bx-link-external text-sm" aria-hidden="true" />
          </a>
        </div>
      </aside>
    </>
  );
}