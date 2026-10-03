import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

/**
 * Layered: la marca es la capa de fondo (peso 200, taupe) y el menu
 * es la capa de frente (peso 700, tinta) — se solapan.
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
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-canvas/92 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-10">
          <Link
            to="/"
            className="group flex items-baseline gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-canvas"
          >
            <span className="text-2xl font-extrabold tracking-tight text-ink">
              IATECH<span className="text-ink-45 transition-colors group-hover:text-accent">.CLOUD</span>
            </span>
            <span className="label hidden sm:block">Área de Servicios Cloud</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            className="layer-btn layer-btn-secondary !px-5 !py-2.5 !text-[13px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            Índice
            <i className="bx bx-grid-alt text-lg" aria-hidden="true" />
          </button>
        </div>
      </header>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}