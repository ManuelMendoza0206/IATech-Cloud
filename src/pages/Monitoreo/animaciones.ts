import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

export const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Entrada escalonada de los elementos `selector` dentro del contenedor, al entrar en pantalla.
export function useEntradaEscalonada<T extends HTMLElement>(selector: string, activo = true) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!activo || !el || reduceMotion()) return;
    const items = el.querySelectorAll<HTMLElement>(selector);    items.forEach((i) => (i.style.opacity = '0'));

    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observer.disconnect();
        animate(items, {
          opacity: [0, 1],
          translateY: [24, 0],
          duration: 800,
          ease: 'outExpo',
          delay: stagger(90),
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [selector, activo]);

  return ref;
}
