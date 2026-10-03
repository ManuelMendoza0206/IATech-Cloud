import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

/**
 * Floating UI: nada va pegado al borde superior. Solo queda la marca
 * flotando y el acceso a las páginas, que viven en la píldora inferior.
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
      <div
        className={`fixed left-5 top-5 z-40 transition-all duration-300 sm:left-8 sm:top-8 ${
          isScrolled ? 'scale-90 opacity-90' : ''
        }`}
      >
        <Link
          to="/"
          className="float-pill flex items-center gap-2.5 px-4 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">
            IC
          </span>
          <span className="text-[13px] font-semibold tracking-tight text-ink">IATECH.CLOUD</span>
        </Link>
      </div>

      <div className="fixed right-5 top-5 z-40 sm:right-8 sm:top-8">
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          className="float-pill flex h-11 w-11 items-center justify-center text-ink transition hover:text-ink-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-70 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          <i className="bx bx-grid-alt text-xl" aria-hidden="true" />
        </button>
      </div>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}