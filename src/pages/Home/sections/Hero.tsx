import { useEffect, useRef } from 'react';
import { animate, createScope, createTimeline, onScroll, stagger } from 'animejs';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    const scope = createScope({ root: containerRef.current }).add(() => {
      const tl = createTimeline({ defaults: { ease: 'outExpo' } });
      tl.add('.hero-pill', { opacity: [0, 1], translateY: [-10, 0], duration: 450 })
        .add('.hero-title', { opacity: [0, 1], translateY: [16, 0], duration: 800 }, '-=260')
        .add('.hero-sub', { opacity: [0, 1], translateY: [12, 0], duration: 600 }, '-=500')
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

    // Scroll-linked: scale uniforme + deriva (nunca scaleX, que deforma).
    const scope = createScope({ root: container }).add(() => {
      animate('.hero-photo', {
        scale: [1.1, 1],
        y: [-26, 26],
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
    <section ref={containerRef} className="relative bg-canvas lg:h-[200vh]">
      <div className="sticky top-0 flex min-h-screen w-full flex-col lg:h-screen lg:flex-row lg:items-center lg:gap-6 lg:px-6">
        <div className="flex w-full flex-col justify-center px-5 py-28 sm:px-6 lg:w-[52%] lg:px-0">
          <span className="hero-pill float-pill w-fit px-5 py-2.5 text-sm font-medium text-ink-70">
            Servicios Cloud · IATECH
          </span>

          <h1 className="hero-title display-light mt-8 text-5xl text-ink sm:text-6xl xl:text-7xl">
            Salud conectada,
            <br />
            en la nube,{' '}
            <span className="display-bold text-ink-70">sin límites.</span>
          </h1>

          <p className="hero-sub mt-8 max-w-lg text-lg leading-relaxed text-ink-70">
            Operamos la infraestructura cloud de IATECH para que la atención
            clínica nunca se detenga. Rendimiento, velocidad y disponibilidad
            en cada despliegue.
          </p>

          <div className="hero-cta mt-10 flex flex-wrap items-center gap-3">
            <a href="#presentacion" className="float-btn float-btn-primary group">
              Conoce el área
              <i className="bx bx-right-arrow-alt text-lg transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://iatech-co-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir inventario conjunto en Vercel"
              className="float-btn float-btn-secondary group"
            >
              Inventario
              <i className="bx bx-link-external text-lg transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="relative h-[42vh] w-full shrink-0 lg:h-auto lg:flex-1 lg:py-24">
          <div className="float-lg buoyant relative h-full w-full overflow-hidden">
            <div className="hero-photo absolute -inset-[8%]">
              <img
                src="/images/cloud2.jpg"
                alt="Infraestructura cloud de IATECH operando sobre racks de servidores"
                width={1600}
                height={1060}
                sizes="(max-width: 1024px) 100vw, 48vw"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover will-change-transform"
              />
            </div>

            <a
              href="#presentacion"
              aria-label="Ir a la siguiente sección"
              className="hero-arrow float-pill absolute bottom-5 left-5 flex items-center gap-2 px-5 py-3 text-sm font-medium text-ink"
            >
              Explorar
              <i className="bx bx-down-arrow-alt text-lg" aria-hidden="true" />
            </a>
          </div>

          <div className="float absolute -left-6 bottom-16 hidden px-6 py-4 lg:block">
            <p className="display-bold text-3xl text-ink">99.9%</p>
            <p className="label mt-1">Disponibilidad</p>
          </div>
        </div>
      </div>
    </section>
  );
}