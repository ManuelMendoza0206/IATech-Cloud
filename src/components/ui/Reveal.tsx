import { useEffect, useRef, type ReactNode } from 'react';
import { animate, createScope, stagger, onScroll, utils } from 'animejs';

interface RevealProps {
  children: ReactNode;
  className?: string;
  asHero?: boolean;
  /** Cascada para widgets de un dashboard. */
  stagger?: boolean;
}

/**
 * Dashboard: entrada sobria y funcional. Sin blur, sin rebote —
 * los widgets aparecen con un fade-up corto y escalonado.
 *
 * El estado inicial (oculto) lo aplica JS con `utils.set`: si el JS no
 * corre, el contenido queda VISIBLE en vez de atrapado en opacity 0.
 */
export function Reveal({ children, className = '', asHero = false, stagger: staggerChildren = false }: RevealProps) {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    scope.current = createScope({ root: root.current }).add(() => {
      if (asHero) {
        animate('.hero-item', {
          opacity: [0, 1],
          translateY: [12, 0],
          delay: stagger(70),
          duration: 550,
          ease: 'outExpo',
        });
        return;
      }

      utils.set('.reveal', { opacity: 0, translateY: 14 });
      animate('.reveal', {
        opacity: [0, 1],
        translateY: [14, 0],
        delay: staggerChildren ? stagger(70) : 0,
        duration: 550,
        ease: 'outExpo',
        autoplay: onScroll(),
      });
    });

    return () => scope.current?.revert();
  }, [asHero, staggerChildren]);

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}

export default Reveal;