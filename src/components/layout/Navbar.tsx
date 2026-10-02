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
        className={`fixed inset-x-0 top-0 z-30 w-full border-b border-ink bg-paper/95 backdrop-blur-md transition-all duration-200 ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
      >
        <div className="flex w-full items-center justify-between px-6 sm:px-10">
          <Link
            to="/"
            className="font-display text-sm font-black uppercase tracking-[0.2em] text-ink transition-colors duration-150 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            IATECH<span className="text-accent">.CLOUD</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <span className="swiss-label hidden sm:block">Índice</span>
            <span className="ml-4 flex flex-col gap-[3px]">
              <span className="block h-[2px] w-6 bg-ink transition-all duration-150 group-hover:bg-accent" />
              <span className="block h-[2px] w-6 bg-ink transition-all duration-150 group-hover:bg-accent" />
              <span className="block h-[2px] w-6 bg-ink transition-all duration-150 group-hover:bg-accent" />
            </span>
          </button>
        </div>
      </header>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
