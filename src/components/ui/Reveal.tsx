import { useEffect, useRef, type ReactNode } from 'react';
import { animate, createScope, stagger, onScroll, splitText, utils } from 'animejs';

interface RevealProps {
  children: ReactNode;
  className?: string;
  asHero?: boolean;
  /** Cascada para grids de celdas. */
  stagger?: boolean;
}

/**
 * Swiss: el contenido no aparece por opacidad, aparece por corte.
 *
 * El estado inicial (oculto) lo aplica JS con `utils.set` en vez de CSS.
 * Asi, si el JS no corre o el observer nunca dispara, el contenido
 * queda VISIBLE en lugar de atrapado en opacity 0.
 */
export function Reveal({ children, className = '', asHero = false, stagger: staggerChildren = false }: RevealProps) {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    scope.current = createScope({ root: root.current }).add(() => {
      if (asHero) {
        // El titular masivo se revela linea por linea, como se compone
        // una pagina tipografica: no aparece, se imprime.
        const targets = '.hero-title, .swiss-display, .swiss-display-sm';
        utils.set(targets, { opacity: 0 });
        const split = splitText(targets, { lines: true, accessible: false });
        animate(split.lines ?? [], {
          opacity: [0, 1],
          translateY: ['0.35em', '0em'],
          duration: 800,
          delay: stagger(90),
          ease: 'outExpo',
        });
        animate('.hero-item:not(.hero-title)', {
          opacity: [0, 1],
          translateY: [12, 0],
          delay: stagger(80),
          duration: 600,
          ease: 'outExpo',
        });
      } else {
        utils.set('.reveal', { opacity: 0, clipPath: 'inset(0 100% 0 0)' });
        animate('.reveal', {
          opacity: [0, 1],
          clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
          delay: staggerChildren ? stagger(70) : 0,
          duration: 700,
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