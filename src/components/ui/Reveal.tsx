import { useEffect, useRef, type ReactNode } from 'react';
import { animate, createScope, stagger, onScroll, splitText, utils } from 'animejs';

type RevealMode =
  /** Barrido por corte: el bloque entra de izquierda a derecha. */
  | 'wipe'
  /** El panel se destapa desde el borde que lo ancla. */
  | 'edge'
  /** Impresión: la letra grande se estampa desde la línea base. */
  | 'stamp';

interface RevealProps {
  children: ReactNode;
  className?: string;
  asHero?: boolean;
  /** Cascada para grids de celdas. */
  stagger?: boolean;
  /** Estrategia de entrada. `wipe` es la del sitio; no cambia el uso previo. */
  mode?: RevealMode;
}

/**
 * Swiss: el contenido no aparece por opacidad, aparece por corte.
 *
 * El estado inicial (oculto) lo aplica JS con `utils.set` en vez de CSS.
 * Asi, si el JS no corre o el observer nunca dispara, el contenido
 * queda VISIBLE en lugar de atrapado en opacity 0.
 *
 * `onScroll` usa `sync: 'play'` y no su default `'play pause'`: con el
 * default, el bloque se PAUSA al salir del viewport y se queda congelado a
 * media animacion para siempre. Se revela al entrar y termina; no se
 * deshace al salir.
 */
export function Reveal({ children, className = '', asHero = false, stagger: staggerChildren = false, mode = 'wipe' }: RevealProps) {
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
      } else if (mode === 'edge') {
        // El panel entra por el borde que lo ancla: la direccion del
        // barrido dice de que lado de la hoja esta la pieza.
        animate('.reveal-edge-left', {
          clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
          duration: 900,
          ease: 'outExpo',
          autoplay: onScroll({ sync: 'play' }),
        });
        animate('.reveal-edge-right', {
          clipPath: ['inset(0 0 0 100%)', 'inset(0 0% 0 0)'],
          duration: 900,
          ease: 'outExpo',
          autoplay: onScroll({ sync: 'play' }),
        });
        // La regla se dibuja antes que el dato que sostiene.
        animate('.reveal-rule', {
          scaleX: [0, 1],
          duration: 800,
          ease: 'outExpo',
          delay: stagger(90),
          autoplay: onScroll({ sync: 'play' }),
        });
        animate('.reveal-figure', {
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 650,
          ease: 'outExpo',
          delay: stagger(90),
          autoplay: onScroll({ sync: 'play' }),
        });
      } else if (mode === 'stamp') {
        // Escalera de dimensiones: la letra no aparece, se imprime desde
        // la linea base. La regla y la prosa entran en el mismo corte, como
        // una linotipia.
        animate('.reveal-stamp', {
          opacity: [0, 1],
          clipPath: ['inset(0 0 100% 0)', 'inset(0 0% 0% 0)'],
          scale: [1.06, 1],
          duration: 800,
          ease: 'outExpo',
          delay: stagger(110),
          autoplay: onScroll({ sync: 'play' }),
        });
        animate('.reveal-rule', {
          scaleX: [0, 1],
          duration: 800,
          ease: 'outExpo',
          delay: stagger(110),
          autoplay: onScroll({ sync: 'play' }),
        });
        animate('.reveal-prose', {
          opacity: [0, 1],
          translateX: [-12, 0],
          duration: 700,
          ease: 'outExpo',
          delay: stagger(110),
          autoplay: onScroll({ sync: 'play' }),
        });
        // El polo opuesto entra el ultimo: la fila se arma de izquierda
        // a derecha y cierra contra el borde de la hoja.
        animate('.reveal-opposite', {
          opacity: [0, 1],
          translateX: [12, 0],
          duration: 650,
          ease: 'outExpo',
          delay: stagger(110, { from: 'last' }),
          autoplay: onScroll({ sync: 'play' }),
        });
      } else {
        utils.set('.reveal', { opacity: 0, clipPath: 'inset(0 100% 0 0)' });
        animate('.reveal', {
          opacity: [0, 1],
          clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
          delay: staggerChildren ? stagger(70) : 0,
          duration: 700,
          ease: 'outExpo',
          autoplay: onScroll({ sync: 'play' }),
        });
      }
    });

    return () => scope.current?.revert();
  }, [asHero, staggerChildren, mode]);

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}

export default Reveal;