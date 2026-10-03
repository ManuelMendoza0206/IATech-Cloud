import { useEffect, useRef, type ReactNode } from 'react';
import { animate, createScope, stagger, onScroll, utils } from 'animejs';

interface RevealProps {
  children: ReactNode;
  className?: string;
  asHero?: boolean;
  /** Cascada para grids de cards flotantes. */
  stagger?: boolean;
}

/**
 * Floating UI — la animación ES la identidad del estilo.
 *
 * El skill dice: "DO animate floating elements! A slow, continuous
 * 2px up/down translateY animation makes them feel truly buoyant."
 *
 * Por eso `.buoyant` flota en loop lento y con stagger, para que las
 * cards no laten al unisono (se veria mecanico). Ademas el reveal de
 * entrada sube 14px, que es justo el desplazamiento del flotar.
 *
 * El estado inicial lo aplica JS con `utils.set`: si el JS no corre,
 * el contenido queda VISIBLE en vez de atrapado en opacity 0.
 */
export function Reveal({ children, className = '', asHero = false, stagger: staggerChildren = false }: RevealProps) {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    scope.current = createScope({ root: root.current }).add(() => {
      // Flotar: lento, continuo, ±2px y desfasado entre cards.
      const floaters = root.current?.querySelectorAll('.buoyant');
      if (floaters && floaters.length > 0) {
        animate(floaters, {
          translateY: [-2, 2],
          duration: 4000,
          ease: 'inOutSine',
          loop: true,
          alternate: true,
          delay: stagger(320),
        });
      }

      if (asHero) {
        animate('.hero-item', {
          opacity: [0, 1],
          translateY: [14, 0],
          delay: stagger(80),
          duration: 650,
          ease: 'outExpo',
        });
        return;
      }

      utils.set('.reveal', { opacity: 0, translateY: 14 });
      animate('.reveal', {
        opacity: [0, 1],
        translateY: [14, 0],
        delay: staggerChildren ? stagger(80) : 0,
        duration: 700,
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