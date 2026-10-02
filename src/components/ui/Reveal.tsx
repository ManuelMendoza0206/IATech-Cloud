import { useEffect, useRef, type ReactNode } from 'react';
import { animate, createScope, stagger, onScroll, utils } from 'animejs';

interface RevealProps {
  children: ReactNode;
  className?: string;
  asHero?: boolean;
  /** Cascada para listas y grillas. */
  stagger?: boolean;
}

/**
 * Editorial: ritmo de lectura, no efectos.
 *
 * - `.reveal` entra con fade-up suave (bloques de texto).
 * - `.ed-pullquote` entra desde un desplazamiento lateral: la cita
 *   se "acerca" al lector en lugar de aparecer de golpe.
 *
 * El estado inicial (oculto) lo aplica JS con `utils.set`, no CSS: si el
 * JS no corre o el observer nunca dispara, el contenido queda VISIBLE.
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
          translateY: [14, 0],
          delay: stagger(90),
          duration: 700,
          ease: 'outExpo',
        });
        return;
      }

      utils.set('.reveal', { opacity: 0, translateY: 18 });
      animate('.reveal', {
        opacity: [0, 1],
        translateY: [18, 0],
        delay: staggerChildren ? stagger(80) : 0,
        duration: 750,
        ease: 'outExpo',
        autoplay: onScroll(),
      });

      const quotes = root.current?.querySelectorAll('.ed-pullquote');
      if (quotes && quotes.length > 0) {
        utils.set(quotes, { opacity: 0, translateX: -28 });
        animate(quotes, {
          opacity: [0, 1],
          translateX: [-28, 0],
          duration: 800,
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