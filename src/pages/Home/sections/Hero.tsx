import { useEffect, useRef } from 'react';
import { animate, createScope, createTimeline, onScroll, stagger } from 'animejs';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    // Editorial: entrada serena, el titular aparece y el resto acompaña.
    const scope = createScope({ root: containerRef.current }).add(() => {
      const tl = createTimeline({ defaults: { ease: 'outExpo' } });
      tl.add('.hero-pill', { opacity: [0, 1], duration: 500 })
        .add('.hero-title', { opacity: [0, 1], translateY: [16, 0], duration: 800 }, '-=300')
        .add('.hero-sub', { opacity: [0, 1], translateY: [12, 0], duration: 600 }, '-=480')
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

    // Scroll-linked sin deformar la foto (scale uniforme + deriva).
    const scope = createScope({ root: container }).add(() => {
      animate('.hero-photo', {
        scale: [1.08, 1],
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
      <div className="sticky top-0 flex min-h-screen w-full flex-col lg:h-screen lg:flex-row lg:items-stretch">
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-24 sm:px-10 lg:w-[58%] lg:border-r lg:border-rule lg:px-14 lg:py-0 xl:px-20">
          <span className="hero-pill ed-kicker block">Servicios Cloud &middot; IATECH</span>

          <h1 className="hero-title ed-headline mt-8 max-w-3xl text-5xl sm:text-6xl xl:text-7xl">
            Salud conectada, en la nube,{' '}
            <span className="italic text-accent">sin límites.</span>
          </h1>

          <p className="hero-sub ed-body ed-dropcap mt-12 max-w-xl">
            Operamos la infraestructura cloud de IATECH para que la atención
            clínica nunca se detenga. Rendimiento, velocidad y disponibilidad
            en cada despliegue.
          </p>

          <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
            <a href="#presentacion" className="ed-btn ed-btn-primary group">
              Conoce el área
              <i className="bx bx-right-arrow-alt text-base transition-transform duration-150 group-hover:translate-x-1" />
            </a>
            <a
              href="https://iatech-co-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir inventario conjunto en Vercel"
              className="ed-btn ed-btn-secondary group"
            >
              Inventario
              <i className="bx bx-link-external text-base transition-transform duration-150 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="ed-rule-soft mt-14 flex items-center gap-3 pt-5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 bg-accent" />
            </span>
            <span className="ed-caption">Disponibilidad 24/7</span>
          </div>
        </div>

        <div className="relative h-[46vh] w-full shrink-0 lg:h-auto lg:w-[42%]">
          <div className="hero-photo absolute inset-0 overflow-hidden">
            <img
              src="/images/cloud2.jpg"
              alt="Infraestructura cloud de IATECH operando sobre racks de servidores"
              width={1600}
              height={1060}
              sizes="(max-width: 1024px) 100vw, 42vw"
              fetchPriority="high"
              decoding="async"
              className="absolute -top-[7.5%] left-0 h-[115%] w-full object-cover grayscale will-change-transform"
            />

            <a
              href="#presentacion"
              aria-label="Ir a la siguiente sección"
              className="hero-arrow ed-btn ed-btn-primary absolute bottom-0 left-0 border-0"
            >
              Explorar
              <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
            </a>
          </div>

          <div className="ed-card absolute right-0 top-0 hidden border-r-0 px-6 py-4 lg:block">
            <p className="font-display text-3xl font-bold leading-none tracking-tight text-accent">
              99.9%
            </p>
            <p className="ed-caption mt-2">Disponibilidad</p>
          </div>
        </div>
      </div>
    </section>
  );
}