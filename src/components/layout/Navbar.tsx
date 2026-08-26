import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isDarkHero = location.pathname === '/';

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showDarkNavbar = isScrolled || !isDarkHero;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
          showDarkNavbar ? 'bg-navy-950/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
          <Link to="/" className="font-display text-lg tracking-wide text-mist">
            IATECH <span className="text-signal">· CLOUD</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            className="flex items-center gap-3 text-mist transition hover:text-signal focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            <span className="font-mono text-xs uppercase tracking-widest">Menú</span>
            <span className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 rounded-full border border-mist/30">
              <span className="h-px w-3.5 bg-current" />
              <span className="h-px w-3.5 bg-current" />
            </span>
          </button>
        </div>
      </header>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}