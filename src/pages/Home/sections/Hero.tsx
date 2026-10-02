import { useEffect, useRef } from 'react';
import { animate, createScope, createTimeline, onScroll, stagger } from 'animejs';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    // Entrada Swiss: el titular se revela por corte, no por escala.
    const scope = createScope({ root: containerRef.current }).add(() => {
      const tl = createTimeline({ defaults: { ease: 'outExpo' } });
      tl.add('.hero-pill', { opacity: [0, 1], translateX: [-14, 0], duration: 500 })
        .add(
          '.hero-title',
          {
            opacity: [0, 1],
            clipPath: ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
            duration: 800,
          },
          '-=280'
        )
        .add('.hero-sub', { opacity: [0, 1], translateY: [12, 0], duration: 600 }, '-=450')
        .add(
          '.hero-cta > *',
          { opacity: [0, 1], translateY: [10, 0], delay: stagger(80), duration: 450 },
          '-=350'
        );
    });

    return () => scope.revert();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const container = containerRef.current;
    if (!container) return;

    // Scroll-linked: sin sombras, el scrub es barato.
    const scope = createScope({ root: container }).add(() => {
      animate('.hero-photo', {
        scale: [1.1, 1],
        y: [-24, 24],
        ease: 'linear',
        autoplay: onScroll({ target: container, sync: true }),
      });
      animate('.hero-arrow', {
        opacity: [1, 0],
        ease: 'linear',
        autoplay: onScroll({ target: container, sync: true }),
      });
    });

    return () => scope.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-paper lg:h-[200vh]">
      <div className="sticky top-0 flex min-h-screen w-full flex-col overflow-hidden lg:h-screen lg:flex-row lg:items-stretch">
        <div className="relative z-10 flex w-full flex-col justify-center border-b border-ink px-6 py-20 sm:px-10 lg:w-[52%] lg:border-b-0 lg:border-r lg:px-14 xl:px-20">
          <span className="hero-pill swiss-label flex items-center gap-3 text-accent">
            <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
            Servicios Cloud · IATECH
          </span>

          <h1 className="hero-title swiss-display mt-8 text-ink">
            Salud conectada,<br />
            en la nube,<br />
            <span className="text-accent">sin límites.</span>
          </h1>

          <p className="hero-sub mt-10 max-w-lg border-l-2 border-accent pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
            Operamos la infraestructura cloud de IATECH para que la atención
            clínica nunca se detenga. Rendimiento, velocidad y disponibilidad
            en cada despliegue.
          </p>

          <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#presentacion"
              className="swiss-btn swiss-btn-primary group inline-flex items-center gap-3 px-7 py-3.5 text-[11px]"
            >
              Conoce el área
              <i className="bx bx-right-arrow-alt text-base transition-transform duration-150 group-hover:translate-x-1" />
            </a>
            <a
              href="https://iatech-co-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir inventario conjunto en Vercel"
              className="swiss-btn swiss-btn-secondary group inline-flex items-center gap-3 px-7 py-3.5 text-[11px]"
            >
              Inventario
              <i className="bx bx-link-external text-base transition-transform duration-150 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 border-t border-ink pt-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 bg-accent" />
            </span>
            <span className="swiss-label">Disponibilidad 24/7</span>
          </div>
        </div>

        <div className="relative h-[46vh] w-full shrink-0 overflow-hidden lg:h-auto lg:w-[48%]">
          <div className="hero-photo absolute inset-0">
            <img
              src="/images/cloud2.jpg"
              alt="Infraestructura cloud de IATECH operando sobre racks de servidores"
              width={1600}
              height={1060}
              sizes="(max-width: 1024px) 100vw, 48vw"
              fetchPriority="high"
              decoding="async"
              className="absolute -top-[7.5%] left-0 h-[115%] w-full object-cover grayscale will-change-transform"
            />

            <a
              href="#presentacion"
              aria-label="Ir a la siguiente sección"
              className="hero-arrow swiss-btn swiss-btn-primary absolute bottom-0 left-0 z-30 inline-flex items-center gap-2 border-0 px-5 py-3 text-[11px]"
            >
              Explorar
              <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
            </a>
          </div>

          <div className="swiss-cell absolute right-0 top-0 hidden border-r-0 px-6 py-4 lg:block">
            <p className="font-display text-3xl font-black tabular-nums text-accent">99.9%</p>
            <p className="swiss-label mt-1">Disponibilidad</p>
          </div>
        </div>
      </div>
    </section>
  );
}