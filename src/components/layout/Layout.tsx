
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import FloatingNav from './FloatingNav';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:text-white"
      >
        Saltar al contenido
      </a>
      <Navbar />
      {/* pb-28 deja libre la píldora flotante inferior */}
      <main id="main-content" className="flex-1 bg-canvas pb-28">
        <Outlet />
      </main>
      <Footer />
      <FloatingNav />
    </div>
  );
}