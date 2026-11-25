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

/** `sync: 'play'` y no el default `'play pause'`: con el default, el bloque
 *  se PAUSA al salir del viewport y se queda congelado a media animación.
 *  Se revela al entrar y termina; no se deshace al salir.
 *  Se crea un objeto nuevo por llamada: no se comparte estado entre observers. */
const scrollReveal = () => onScroll({ sync: 'play' });

/**
 * Swiss: el contenido no aparece por opacidad, aparece por corte.
 *
 * Reglas de robustez:
 *
 * 1. Cada modo resuelve sus objetivos contra el propio `root` y **no crea
 *    animaciones si no hay objetivos**. `animate()` con un selector vacío
 *    avisa por consola, y `revert()` de un `splitText` sin líneas rompe:
 *    intenta restaurar el `innerHTML` de un elemento que nunca existió.
 * 2. El scope vive en una variable local del efecto, no en un ref. En
 *    StrictMode React monta, desmonta y vuelve a montar; con un ref, el
 *    cleanup de la primera pasada puede revertir el scope de la segunda.
 * 3. Si el JS no corre, el contenido queda visible: el estado inicial lo
 *    aplica `utils.set`, nunca el CSS.
 */
export function Reveal({ children, className = '', asHero = false, stagger: staggerChildren = false, mode = 'wipe' }: RevealProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      // Sin animación, nada puede quedarse oculto.
      el.querySelectorAll<HTMLElement>('.hero-item, .reveal').forEach((node) => {
        node.style.opacity = '1';
      });
      return;
    }

    const q = (selector: string) => Array.from(el.querySelectorAll<HTMLElement>(selector));

    const scope = createScope({ root: el }).add(() => {
      if (asHero) {
        // El titular masivo se revela línea por línea, como se compone
        // una página tipográfica: no aparece, se imprime.
        const headings = q('.hero-title, .swiss-display, .swiss-display-sm');
        const items = q('.hero-item:not(.hero-title)');

        if (headings.length > 0) {
          utils.set(headings, { opacity: 0 });
          const split = splitText(headings, { lines: true, accessible: false });
          const lines = split?.lines ?? [];

          if (lines.length > 0) {
            animate(lines, {
              opacity: [0, 1],
              translateY: ['0.35em', '0em'],
              duration: 800,
              delay: stagger(90),
              ease: 'outExpo',
            });
          } else {
            // splitText no produjo líneas: dejamos el titular legible en
            // vez de abandonarlo en opacity 0.
            utils.set(headings, { opacity: 1 });
          }
        }

        if (items.length > 0) {
          animate(items, {
            opacity: [0, 1],
            translateY: [12, 0],
            delay: stagger(80),
            duration: 600,
            ease: 'outExpo',
          });
        }
      } else if (mode === 'edge') {
        // El panel entra por el borde que lo ancla: la dirección del
        // barrido dice de qué lado de la hoja está la pieza.
        const fromLeft = q('.reveal-edge-left');
        const fromRight = q('.reveal-edge-right');
        const rules = q('.reveal-rule');
        const figures = q('.reveal-figure');

        if (fromLeft.length > 0) {
          animate(fromLeft, {
            clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
            duration: 900,
            ease: 'outExpo',
            autoplay: scrollReveal(),
          });
        }
        if (fromRight.length > 0) {
          animate(fromRight, {
            clipPath: ['inset(0 0 0 100%)', 'inset(0 0% 0 0)'],
            duration: 900,
            ease: 'outExpo',
            autoplay: scrollReveal(),
          });
        }
        if (rules.length > 0) {
          animate(rules, {
            scaleX: [0, 1],
            duration: 800,
            ease: 'outExpo',
            delay: stagger(90),
            autoplay: scrollReveal(),
          });
        }
        if (figures.length > 0) {
          animate(figures, {
            opacity: [0, 1],
            translateY: [10, 0],
            duration: 650,
            ease: 'outExpo',
            delay: stagger(90),
            autoplay: scrollReveal(),
          });
        }
      } else if (mode === 'stamp') {
        // Escalera de dimensiones: la letra no aparece, se imprime desde
        // la línea base. La regla y la prosa entran en el mismo corte.
        const stamps = q('.reveal-stamp');
        const rules = q('.reveal-rule');
        const prose = q('.reveal-prose');
        const opposite = q('.reveal-opposite');

        if (stamps.length > 0) {
          animate(stamps, {
            opacity: [0, 1],
            clipPath: ['inset(0 0 100% 0)', 'inset(0 0% 0% 0)'],
            scale: [1.06, 1],
            duration: 800,
            ease: 'outExpo',
            delay: stagger(110),
            autoplay: scrollReveal(),
          });
        }
        if (rules.length > 0) {
          animate(rules, {
            scaleX: [0, 1],
            duration: 800,
            ease: 'outExpo',
            delay: stagger(110),
            autoplay: scrollReveal(),
          });
        }
        if (prose.length > 0) {
          animate(prose, {
            opacity: [0, 1],
            translateX: [-12, 0],
            duration: 700,
            ease: 'outExpo',
            delay: stagger(110),
            autoplay: scrollReveal(),
          });
        }
        // El polo opuesto entra el último: la fila se arma de izquierda
        // a derecha y cierra contra el borde de la hoja.
        if (opposite.length > 0) {
          animate(opposite, {
            opacity: [0, 1],
            translateX: [12, 0],
            duration: 650,
            ease: 'outExpo',
            delay: stagger(110, { from: 'last' }),
            autoplay: scrollReveal(),
          });
        }
      } else {
        const targets = q('.reveal');

        if (targets.length > 0) {
          utils.set(targets, { opacity: 0, clipPath: 'inset(0 100% 0 0)' });
          animate(targets, {
            opacity: [0, 1],
            clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
            delay: staggerChildren ? stagger(70) : 0,
            duration: 700,
            ease: 'outExpo',
            autoplay: scrollReveal(),
          });
        }
      }
    });

    return () => {
      try {
        scope.revert();
      } catch {
        // animejs 4.5 lanza al revertir un splitText que no generó líneas.
        // El bloque ya está montado y visible: fallar acá no debe tumbar
        // el árbol de React.
      }
    };
  }, [asHero, staggerChildren, mode]);

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}

export default Reveal;
