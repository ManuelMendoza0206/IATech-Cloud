import { useEffect, useRef } from 'react';
import { animate, createScope, createSpring, createTimeline, onScroll, stagger } from 'animejs';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    const scope = createScope({ root: containerRef.current }).add(() => {
      const tl = createTimeline({ defaults: { ease: 'outExpo' } });
      tl.add('.hero-pill', {
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 500,
        ease: createSpring({ stiffness: 260, damping: 18 }),
      })
        .add('.hero-title', { opacity: [0, 1], translateY: [18, 0], duration: 700 }, '-=250')
        .add('.hero-sub', { opacity: [0, 1], translateY: [14, 0], duration: 600 }, '-=450')
        .add('.hero-cta > *', { opacity: [0, 1], translateY: [12, 0], delay: stagger(90), duration: 500 }, '-=350');
    });

    return () => scope.revert();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const container = containerRef.current;
    if (!container) return;

    // Scroll-linked: zoom uniforme + deriva (sin deformación), interpolado por el motor.
    const scope = createScope({ root: container }).add(() => {
      animate('.hero-photo', {
        scale: [1.12, 1],
        y: [-30, 30],
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
    <section ref={containerRef} className="relative bg-neu-base lg:h-[200vh]">
      <div className="sticky top-0 flex min-h-screen w-full flex-col overflow-hidden lg:h-screen lg:flex-row lg:items-center">
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-20 sm:px-10 lg:w-[40%] lg:px-14 lg:py-0 xl:px-20">
          <span
            className="hero-pill neu-pressed inline-flex w-fit items-center px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-signal"
          >
            Servicios Cloud · IATECH
          </span>
          <h1
            className="hero-title mt-6 font-neu-display text-4xl font-black leading-tight text-ink-950 sm:text-5xl xl:text-6xl"
          >
            Salud conectada, en la nube, sin límites.
          </h1>

          <p
            className="hero-sub mt-6 max-w-[60ch] text-lg leading-relaxed text-ink-700"
          >
            Operamos la infraestructura cloud de IATECH para que la atención
            clínica nunca se detenga. Rendimiento, velocidad y disponibilidad
            en cada despliegue.
          </p>

          <div
            className="hero-cta mt-10 flex flex-wrap items-center gap-6"
          >
            <a
              href="#presentacion"
              className="neu-btn group inline-flex items-center gap-3 rounded-full bg-aqua px-6 py-3.5 text-sm font-bold tracking-wide text-ink-950 transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base"
            >
              <span>Conoce el área</span>
              <i className="bx bx-right-arrow-alt text-lg transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://iatech-co-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir inventario conjunto en Vercel"
              className="neu-btn group inline-flex items-center gap-3 rounded-full bg-neu-base px-6 py-3.5 text-sm font-bold tracking-wide text-ink-950 transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base"
            >
              <span>Acceder al inventario</span>
              <i className="bx bx-link-external text-lg transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              <span>Disponibilidad 24/7</span>
            </div>
          </div>
        </div>

        <div
          className="relative h-[52vh] w-full shrink-0 overflow-hidden lg:absolute lg:right-0 lg:top-0 lg:z-20 lg:h-full lg:w-[60%]"
        >
          <div className="hero-photo absolute inset-0 overflow-hidden lg:rounded-l-[40px]">
            <img
              src="/images/cloud2.jpg"
              alt="Infraestructura cloud de IATECH operando sobre racks de servidores"
              width={1600}
              height={1060}
              sizes="(max-width: 1024px) 100vw, 60vw"
              fetchPriority="high"
              decoding="async"
              className="absolute -top-[7.5%] left-0 h-[115%] w-full object-cover will-change-transform"
            />

            <div className="absolute inset-0 bg-ink-950/10" />

            <a
              href="#presentacion"
              aria-label="Ir a la siguiente sección"
              className="hero-arrow absolute bottom-6 left-1/2 z-30 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-neu-base text-ink-950 shadow-neu-btn transition hover:brightness-105 hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  d="M12 4v16M6 14l6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="neu-raised absolute bottom-10 left-10 hidden px-6 py-4 lg:block">
            <p className="font-neu-display text-2xl font-black tabular-nums text-signal">99.9%</p>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink-950">
              Disponibilidad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
