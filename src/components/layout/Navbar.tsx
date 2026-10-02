import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

/**
 * Editorial: masthead, no barra de app.
 * El skill dice "DON'T clutter the UI with heavy navigation bars",
 * asi que esto es una linea tipografica con filete, nada mas.
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
        className={`fixed inset-x-0 top-0 z-30 w-full border-b bg-paper/95 backdrop-blur-sm transition-all duration-300 ${
          isScrolled ? 'border-rule py-2' : 'border-rule-soft py-4'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10">
          <Link
            to="/"
            className="font-logo text-2xl leading-none tracking-tight text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            IATECH<span className="italic text-accent">.</span>CLOUD
          </Link>

          <div className="flex items-center gap-6">
            <span className="ed-caption hidden sm:block">Área de Servicios Cloud</span>
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
              className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
            >
              <span className="ed-caption transition-colors group-hover:text-accent">Índice</span>
              <span className="flex flex-col gap-[3px]">
                <span className="block h-px w-6 bg-ink transition-all group-hover:bg-accent" />
                <span className="block h-px w-6 bg-ink transition-all group-hover:bg-accent" />
                <span className="block h-px w-6 bg-ink transition-all group-hover:bg-accent" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}