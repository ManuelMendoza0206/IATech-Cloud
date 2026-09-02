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
        className={`fixed inset-0 z-40 bg-navy-950/70 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md bg-navy-900 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col px-8 py-8 sm:px-12 sm:py-10">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg tracking-wide text-mist">
              IATECH <span className="text-signal">· CLOUD</span>
            </span>
            <button
              onClick={onClose}
              aria-label="Cerrar menú"
              className="rounded-full p-2 text-mist transition hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="mt-14 flex-1 overflow-y-auto">
            <ul className="flex flex-col gap-1">
              {ROUTES.map((route, index) => {
                const isActive = location.pathname === route.path;
                return (
                  <li key={route.path} className="border-b border-navy-700/60 py-4 first:pt-0">
                    <Link to={route.path} onClick={onClose} className="group flex items-baseline gap-4">
                      <span className="font-mono text-xs text-signal">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={`font-display text-2xl uppercase tracking-tight transition-colors sm:text-3xl ${
                          isActive ? 'text-signal' : 'text-mist group-hover:text-signal'
                        }`}
                      >
                        {route.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <p className="font-mono text-xs uppercase tracking-wider text-mist/50">
            Servicios Cloud e Integración · IATECH
          </p>
        </div>
      </aside>
    </>
  );
}