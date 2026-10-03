import { useEffect, useRef, type ReactNode } from 'react';
import { animate, createScope, stagger, onScroll, utils } from 'animejs';

interface RevealProps {
  children: ReactNode;
  className?: string;
  asHero?: boolean;
  stagger?: boolean;
}

/**
 * Layered Design — la animacion ES el apilado.
 *
 * Regla 3 del skill: "Parallax scrolling: background layers move
 * slower than foreground layers during interaction/scrolling."
 *
 * Eso se hace con onScroll({ sync: true }) sobre elementos marcados
 * con data-speed: el fondo se desplaza menos que el frente, y eso
 * genera la sensacion de profundidad entre capas.
 *
 * El estado inicial lo aplica JS con utils.set: si el JS no corre,
 * el contenido queda VISIBLE en vez de atrapado en opacity 0.
 */
export function Reveal({ children, className = '', asHero = false, stagger: staggerChildren = false }: RevealProps) {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    if (!root.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    scope.current = createScope({ root: root.current }).add(() => {
      // Parallax por capa: data-speed define cuanto se desplaza.
      const layers = root.current?.querySelectorAll<HTMLElement>('[data-speed]');
      if (layers && layers.length > 0) {
        layers.forEach((layer) => {
          const speed = Number(layer.dataset.speed ?? 0.2);
          animate(layer, {
            translateY: [`${speed * -60}px`, `${speed * 60}px`],
            ease: 'linear',
            autoplay: onScroll({ target: layer, sync: true }),
          });
        });
      }

      if (asHero) {
        animate('.hero-item', {
          opacity: [0, 1],
          translateY: [22, 0],
          delay: stagger(90),
          duration: 750,
          ease: 'outExpo',
        });
        return;
      }

      utils.set('.reveal', { opacity: 0, translateY: 20 });
      animate('.reveal', {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: staggerChildren ? stagger(85) : 0,
        duration: 750,
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