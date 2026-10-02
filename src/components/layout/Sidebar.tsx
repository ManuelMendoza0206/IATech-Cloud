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
        className={`fixed inset-0 z-40 bg-ink/30 transition-opacity duration-300 ${ isOpen ? 'opacity-100' : 'pointer-events-none opacity-0' }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-lg border-l border-rule bg-paper transition-transform duration-300 ease-out ${ isOpen ? 'translate-x-0' : 'translate-x-full' }`}
      >
        <div className="flex h-full flex-col px-8 py-8 sm:px-12 sm:py-10">
          <div className="flex items-start justify-between border-b border-rule pb-5">
            <span className="font-display text-3xl leading-none tracking-tight text-ink">
              IATECH<span className="italic text-accent">.</span>CLOUD
            </span>
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="ed-caption mt-2 transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Cerrar
            </button>
          </div>

          <nav className="ed-rule-heavy mt-10 flex-1 overflow-y-auto pt-5">
            <ul className="flex flex-col gap-1">
              {ROUTES.filter((route) => !route.hideFromNav).map((route, index) => {
                const isActive = location.pathname === route.path;
                return (
                  <li key={route.path} className="border-b border-rule-soft">
                    <Link to={route.path} onClick={onClose} className="group flex items-baseline gap-4">
                      <span className="ed-caption w-7 shrink-0 pt-2 text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`font-display text-xl leading-tight transition-colors sm:text-2xl ${ isActive ? 'text-accent' : 'text-ink group-hover:text-accent' }`}
                      >
                        {route.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <p className="ed-caption">
            Servicios Cloud e Integración · IATECH
          </p>
          <a
            href="https://iatech-co-frontend.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acceder al inventario conjunto en Vercel"
            className="ed-btn ed-btn-primary mt-5 self-start"
          >
            Acceder al inventario
            <i className="bx bx-link-external text-sm" aria-hidden="true" />
          </a>
        </div>
      </aside>
    </>
  );
}