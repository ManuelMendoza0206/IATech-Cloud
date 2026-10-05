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
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-ink bg-paper transition-transform duration-300 ease-out ${ isOpen ? 'translate-x-0' : 'translate-x-full' }`}
      >
        <div className="flex h-full flex-col px-8 py-8 sm:px-12 sm:py-10">
          <div className="flex items-start justify-between border-b border-ink pb-6">
            <span className="font-display text-sm font-black uppercase tracking-[0.2em] text-ink">
              IATECH<span className="text-accent">.CLOUD</span>
            </span>
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="swiss-label transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Cerrar
            </button>
          </div>

          <nav className="mt-8 flex-1 overflow-y-auto">
            <p className="swiss-label border-b border-ink-15 pb-3">Índice</p>
            <ul className="flex flex-col">
              {ROUTES.filter((route) => !route.hideFromNav).map((route, index) => {
                const isActive = location.pathname === route.path;
                return (
                  <li key={route.path} className="border-b border-ink-15">
                    <Link
                      to={route.path}
                      onClick={onClose}
                      className="group flex items-baseline gap-4 py-4 transition-colors hover:text-accent"
                    >
                      <span className="swiss-label w-6 shrink-0 transition-colors group-hover:text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`font-display text-xl font-bold leading-tight tracking-tight transition-colors sm:text-2xl ${ isActive ? 'text-accent' : 'text-ink' }`}
                      >
                        {route.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-ink pt-6">
            <p className="swiss-label">Servicios Cloud e Integración</p>
            <a
              href="https://iatech-co-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acceder al inventario conjunto en Vercel"
              className="swiss-btn swiss-btn-primary mt-4 inline-flex items-center gap-2 self-start px-5 py-2.5 text-[11px] text-paper"
            >
              Inventario
              <i className="bx bx-link-external text-sm" aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}