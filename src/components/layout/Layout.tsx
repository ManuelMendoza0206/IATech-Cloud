
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-ice-50 text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white focus:shadow-panel"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 bg-ice-50 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}