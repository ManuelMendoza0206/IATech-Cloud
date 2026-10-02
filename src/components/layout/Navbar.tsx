import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

/**
 * Dashboard: header superior fijo con barra de estado.
 * El sidebar rail vive dentro del Sidebar (drawer en movil).
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-30 w-full border-b border-steel/30 bg-white/90 backdrop-blur-md transition-shadow duration-200 ${
          isScrolled ? 'shadow-panel' : ''
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 sm:px-10">
          <Link
            to="/"
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-[13px] font-extrabold text-white">
              IC
            </span>
            <span className="text-[15px] font-bold tracking-tight text-ink">
              IATECH<span className="text-signal">.CLOUD</span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <span className="chip chip-ok">
              <span className="dot" />
              Todos los sistemas operativos
            </span>
            <span className="chip">
              <span className="metric">99.98%</span> SLA
            </span>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            className="btn btn-secondary h-10 px-4 lg:hidden"
          >
            <i className="bx bx-menu-alt-left text-lg" aria-hidden="true" />
          </button>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir índice de navegación"
            className="hidden h-10 items-center gap-2 rounded-full border border-steel/40 bg-white px-4 text-[13px] font-semibold text-ink transition-colors hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal lg:flex"
          >
            Navegación
            <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
          </button>
        </div>
      </header>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}