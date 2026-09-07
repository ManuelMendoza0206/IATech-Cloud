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
        className={`fixed inset-x-0 top-0 z-30 w-full border-b border-mist/20 bg-navy-950/90 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? 'py-2 shadow-lg shadow-navy-950/20' : 'py-3'
        }`}
      >
        <div className="flex w-full items-center justify-between px-6 sm:px-10">
          <Link
            to="/"
            className="font-logo text-xl tracking-wider text-mist transition-colors duration-300 hover:opacity-80 sm:text-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 rounded"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}
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
            className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 rounded-full"
          >
            <div className="flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-full border border-mist/30 transition-all duration-200 group-hover:border-mist group-hover:bg-mist">
              <span className="h-[2px] w-4 bg-mist transition-colors duration-200 group-hover:bg-navy-950" />
              <span className="h-[2px] w-4 bg-mist transition-colors duration-200 group-hover:bg-navy-950" />
              <span className="h-[2px] w-4 bg-mist transition-colors duration-200 group-hover:bg-navy-950" />
            </div>
          </button>
        </div>
      </header>

      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
