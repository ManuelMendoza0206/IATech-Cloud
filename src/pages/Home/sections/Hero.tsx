import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLAnchorElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const arrow = arrowRef.current;
    if (!container || !image || !arrow) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(() => {
        ticking = false;
        const { top, height } = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollDistance = height - windowHeight;
        if (scrollDistance <= 0) return;
        const scrolled = -top;
        const progress = Math.min(Math.max(scrolled / scrollDistance, 0), 1);
        const scale = 1 + progress * 0.6667;
        image.style.transform = `scaleX(${scale})`;
        arrow.style.opacity = String(Math.max(1 - progress * 4, 0));
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-mist lg:h-[200vh]">
      <div className="sticky top-0 flex min-h-screen w-full flex-col overflow-hidden lg:h-screen lg:flex-row lg:items-center">
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-20 sm:px-10 lg:w-[40%] lg:px-14 lg:py-0 xl:px-20">
          <h1
            className={`hero-enter font-display text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl xl:text-6xl ${mounted ? 'is-mounted' : ''}`}
          >
            Salud conectada, en la nube, sin límites.
          </h1>

          <p
            className={`hero-enter hero-enter-delay-1 mt-6 max-w-[60ch] text-lg leading-relaxed text-navy-900/80 ${mounted ? 'is-mounted' : ''}`}
          >
            Operamos la infraestructura cloud de IATECH para que la atención
            clínica nunca se detenga. Rendimiento, velocidad y disponibilidad
            en cada despliegue.
          </p>

          <div
            className={`hero-enter hero-enter-delay-2 mt-10 flex flex-wrap items-center gap-6 ${mounted ? 'is-mounted' : ''}`}
          >
            <a
              href="#presentacion"
              className="group inline-flex items-center gap-3 rounded-full border border-navy-950 bg-navy-950 px-6 py-3.5 text-sm font-medium tracking-wide text-mist transition-all hover:bg-signal hover:text-navy-950 hover:border-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-mist"
            >
              <span>Conoce el área</span>
              <i className="bx bx-right-arrow-alt text-lg transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-navy-900/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              <span>Disponibilidad 24/7</span>
            </div>
          </div>
        </div>

        <div
          ref={imageRef}
          className="relative h-[52vh] w-full shrink-0 origin-right overflow-hidden shadow-2xl lg:absolute lg:right-0 lg:top-0 lg:z-20 lg:h-full lg:w-[60%]"
        >
          <img
            src="/images/cloud2.jpg"
            alt="Infraestructura cloud de IATECH operando sobre racks de servidores"
            width={1600}
            height={1060}
            sizes="(max-width: 1024px) 100vw, 60vw"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-navy-950/40 mix-blend-multiply" />

          <a
            href="#presentacion"
            aria-label="Ir a la siguiente sección"
            ref={arrowRef}
            className="absolute bottom-6 left-1/2 z-30 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-mist/20 bg-navy-950/40 text-mist backdrop-blur-sm transition hover:border-mist/40 hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
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
      </div>
    </section>
  );
}
