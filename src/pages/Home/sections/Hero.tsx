import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollDistance = height - windowHeight;
      if (scrollDistance > 0) {
        const scrolled = -top;
        const currentProgress = Math.min(Math.max(scrolled / scrollDistance, 0), 1);
        setProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-mist">
      {/* Contenedor Sticky que se mantiene pegado durante el scroll */}
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        
        {/* LADO IZQUIERDO: Sección Blanca (Texto) */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-20 sm:px-10 lg:w-[40%] lg:px-14 xl:px-20">
          <span className="font-mono text-xs uppercase tracking-widest text-navy-700">
            Área de Servicios Cloud e Integración
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl xl:text-6xl">
            Salud conectada, en la nube, sin límites.
          </h1>

          <p className="mt-6 text-lg text-navy-900/80">
            Optimizamos y desplegamos los servicios en la nube de IATECH para
            que la atención clínica nunca se detenga: rendimiento, velocidad y
            disponibilidad en cada despliegue.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#presentacion"
              className="group inline-flex items-center gap-3 border border-navy-950 bg-navy-950 px-6 py-3.5 text-sm font-medium tracking-wide text-mist transition-all hover:bg-signal hover:text-navy-950 hover:border-signal"
            >
              <span>Conoce el área</span>
              <svg
                className="transition-transform group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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

        {/* LADO DERECHO: Imagen dinámicamente expansible hacia la izquierda */}
        <div
          className="absolute right-0 top-0 z-20 h-full w-full shadow-2xl transition-all duration-75 ease-linear lg:w-[calc(60%+var(--scroll-progress)*40%)]"
          style={{ '--scroll-progress': progress } as React.CSSProperties}
        >
          <img
            src="/images/cloud1.jpg"
            alt="Infraestructura cloud de IATECH"
            className="absolute inset-0 h-full w-full object-cover"
          />
          
          <div className="absolute inset-0 bg-navy-950/40 mix-blend-multiply" />

          <a
            href="#presentacion"
            aria-label="Ir a la siguiente sección"
            className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 animate-bounce text-mist transition hover:text-signal"
            style={{ opacity: Math.max(1 - progress * 4, 0) }} 
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