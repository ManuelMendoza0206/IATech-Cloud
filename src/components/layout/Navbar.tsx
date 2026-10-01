import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

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
        className={`fixed inset-x-0 top-0 z-30 w-full bg-neu-base/90 backdrop-blur-md transition-all duration-300 ${ isScrolled ? 'py-2 shadow-lg shadow-steel/20' : 'py-3' }`}
      >
        <div className="flex w-full items-center justify-between px-6 sm:px-10">
          <Link
            to="/"
            className="font-logo text-xl tracking-wide text-ink-950 transition-opacity duration-300 hover:opacity-80 sm:text-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base rounded"
          >
            IATECH{' '}
            <span className="text-signal">
              · CLOUD
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base rounded-full"
          >
            <div className="neu-btn flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-full bg-neu-base transition-all duration-200 group-hover:brightness-105">
              <span className="h-[2px] w-4 bg-ink-950 transition-colors duration-200" />
              <span className="h-[2px] w-4 bg-ink-950 transition-colors duration-200" />
              <span className="h-[2px] w-4 bg-ink-950 transition-colors duration-200" />
            </div>
          </button>
        </div>
      </header>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
