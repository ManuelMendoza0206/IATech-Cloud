import { useEffect, useRef, type ReactNode } from 'react';
import { animate, createScope, stagger, onScroll } from 'animejs';

interface RevealProps {
  children: ReactNode;
  className?: string;
  asHero?: boolean;
  /** Cascada para grids de cards neu (Capacidades, Explorar, Numeros...). */
  stagger?: boolean;
}

export function Reveal({ children, className = '', asHero = false, stagger: staggerChildren = false }: RevealProps) {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!root.current) return;

    scope.current = createScope({ root: root.current }).add(() => {
      if (asHero) {
        animate('.hero-item', {
          opacity: [0, 1],
          translateY: [14, 0],
          delay: stagger(80),
          duration: 600,
          ease: 'outExpo',
        });
      } else {
        // Reveal once al entrar en pantalla (compatible neu: sin rebobinado).
        animate('.reveal', {
          opacity: [0, 1],
          translateY: [16, 0],
          delay: staggerChildren ? stagger(90) : 0,
          duration: 600,
          ease: 'outExpo',
          autoplay: onScroll(),
        });
      }
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
