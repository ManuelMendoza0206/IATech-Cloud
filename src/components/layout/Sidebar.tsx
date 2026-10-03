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
        className={`fixed inset-0 z-40 bg-ink-950/40 backdrop-blur-sm transition-opacity duration-300 ${ isOpen ? 'opacity-100' : 'pointer-events-none opacity-0' }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-ink-950/10 bg-canvas shadow-2xl transition-transform duration-300 ease-out ${ isOpen ? 'translate-x-0' : 'translate-x-full' }`}
      >
        <div className="flex h-full flex-col px-8 py-8 sm:px-12 sm:py-10">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg tracking-wide text-ink">
              IATECH <span className="text-signal">· CLOUD</span>
            </span>
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="rounded-full p-2 text-ink transition hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="mt-8 flex-1 overflow-y-auto">
            <ul className="flex flex-col gap-1.5">
              {ROUTES.filter((route) => !route.hideFromNav).map((route, index) => {
                const isActive = location.pathname === route.path;
                return (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      onClick={onClose}
                      className={`float-hover group flex items-center gap-3 rounded-2xl px-3 py-3 ${ isActive ? 'bg-canvas' : '' }`}
                    >
                      <span className="label w-6 shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`text-[15px] font-medium leading-tight transition-colors ${ isActive ? 'text-ink' : 'text-ink-70 group-hover:text-ink' }`}
                      >
                        {route.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-line pt-5">
            <p className="label">Servicios Cloud e Integración</p>
            <a
              href="https://iatech-co-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acceder al inventario conjunto en Vercel"
              className="float-btn float-btn-primary mt-4"
            >
              Inventario
              <i className="bx bx-link-external text-base" aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}