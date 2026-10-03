import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../router';

const VISIBLE = ROUTES.filter((r) => !r.hideFromNav);
const ICONS: Record<string, string> = {
  '/': 'bx-home',
  '/gestion-tecnologia': 'bx-chip',
  '/ciencia-tecnologia-innovacion': 'bx-atom',
  '/mision-vision': 'bx-compass',
  '/descripcion-posiciones': 'bx-id-card',
  '/mbti': 'bx-user',
  '/scrum': 'bx-layer',
  '/idef0': 'bx-git-branch',
};

/**
 * Floating UI: la navegación no está pegada arriba — es una píldora
 * flotante centrada abajo. Regla del skill: "DON'T pin elements to
 * the screen edges" y "the floating island pattern for navigation".
 */
export default function FloatingNav() {
  const location = useLocation();

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 bottom-5 z-40 flex justify-center px-4 sm:bottom-8"
    >
      <div className="float-nav buoyant flex max-w-full items-center gap-1 overflow-x-auto p-1.5">
        {VISIBLE.map((route) => {
          const isActive = location.pathname === route.path;
          const icon = ICONS[route.path] ?? 'bx-circle';
          return (
            <Link
              key={route.path}
              to={route.path}
              aria-label={route.label}
              aria-current={isActive ? 'page' : undefined}
              className={`group flex shrink-0 items-center gap-2 rounded-full px-3 py-2.5 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-70 focus-visible:ring-offset-2 ${
                isActive
                  ? 'bg-ink text-white'
                  : 'text-ink-70 hover:bg-canvas hover:text-ink'
              }`}
            >
              <i className={`bx ${icon} text-lg`} aria-hidden="true" />
              <span className="hidden max-w-[9rem] truncate lg:inline">{route.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}