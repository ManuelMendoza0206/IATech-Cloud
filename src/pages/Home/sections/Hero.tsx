import { useEffect, useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const arrow = arrowRef.current;
    if (!container || !image || !arrow) return;

    let raf: number;

    const handleScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const { top, height } = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollDistance = height - windowHeight;
        if (scrollDistance <= 0) return;

        const scrolled = -top;
        const progress = Math.min(Math.max(scrolled / scrollDistance, 0), 1);

        const widthPercent = 60 + progress * 40;
        image.style.width = `${widthPercent}%`;
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
    <section ref={containerRef} className="relative h-[200vh] bg-mist">
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-20 sm:px-10 lg:w-[40%] lg:px-14 xl:px-20">
          <span className="font-mono text-xs uppercase tracking-widest text-navy-700">
            Área de Servicios Cloud e Integración
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl xl:text-6xl">
            Salud conectada, en la nube, sin límites.
          </h1>

          <p className="mt-6 text-lg text-navy-900/80">
            Operamos la infraestructura cloud de IATECH para que la atención
            clínica nunca se detenga. Rendimiento, velocidad y disponibilidad
            en cada despliegue.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#presentacion"
              className="group inline-flex items-center gap-3 rounded-full border border-navy-950 bg-navy-950 px-6 py-3.5 text-sm font-medium tracking-wide text-mist transition-all hover:bg-signal hover:text-navy-950 hover:border-signal"
            >
              <span>Conoce el área</span>
              <i className="bx bx-right-arrow-alt text-lg" />
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
          className="absolute right-0 top-0 z-20 h-full w-[60%] shadow-2xl will-change-[width]"
        >
          <img
            src="/images/cloud2.jpg"
            alt="Infraestructura cloud de IATECH"
            className="absolute inset-0 h-full w-full object-cover"
          />
          
          <div className="absolute inset-0 bg-navy-950/40 mix-blend-multiply" />

          <a
            href="#presentacion"
            aria-label="Ir a la siguiente sección"
            ref={arrowRef}
            className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 flex h-11 w-11 items-center justify-center animate-bounce rounded-full text-mist transition hover:text-signal"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
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
