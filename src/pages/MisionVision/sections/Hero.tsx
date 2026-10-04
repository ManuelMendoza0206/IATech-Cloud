import { useEffect, useRef } from 'react';

function Corner({ className }: { className: string }) {
  return <span aria-hidden="true" className={`absolute h-6 w-6 border-signal/70 ${className}`} />;
}

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(() => {
        ticking = false;
        const { top, height } = image.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollDistance = height - windowHeight;
        if (scrollDistance <= 0) return;
        const progress = Math.min(Math.max(-top / scrollDistance, 0), 1);
        image.style.transform = `translateY(${progress * 44}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20 text-mist sm:pt-36 sm:pb-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(var(--color-signal, #38d6c8) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[min(420px,60vh)] w-[min(720px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-signal/15 via-signal/5 to-transparent blur-[120px]" />

      <div className="absolute top-6 left-8 hidden font-mono text-[10px] tracking-widest text-mist/20 sm:block">
        SYS_NODE // MISSION_VISION_V1.0
      </div>
      <div className="absolute top-6 right-8 hidden font-mono text-[10px] tracking-widest text-signal/30 sm:block">
        [ STATUS: 100% ONLINE ]
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        {/* Columna de texto */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Propósito del área
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-mist sm:text-6xl">
            Misión y Visión
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-mist/70 sm:text-lg lg:mx-0">
            El norte que guía cada despliegue del Área de Servicios Cloud e Integración:
            infraestructura médica confiable, continua y al servicio de la clínica.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#declaraciones"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-navy-950 transition hover:opacity-90"
            >
              Leer declaraciones
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#pilares"
              className="inline-flex items-center gap-2 rounded-full border border-mist/25 px-6 py-3 text-sm font-semibold text-mist transition hover:border-signal hover:text-signal"
            >
              Ver pilares
            </a>
          </div>
        </div>

        {/* Panel con imagen */}
        <div className="relative">
          <div ref={imageRef} className="relative will-change-transform">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-signal/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-mist/10 bg-navy-900 shadow-2xl">
              <img
                src="/images/mision.jpg"
                alt="Imagen decorativa de la presentación del Área de Servicios Cloud e Integración de IATECH"
                width={1280}
                height={720}
                className="aspect-video w-full object-cover"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />

              <div className="absolute right-4 bottom-4 left-4 flex items-center gap-2 rounded-lg border border-signal/25 bg-navy-950/70 px-3 py-2 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                <p className="font-mono text-[10px] uppercase tracking-widest text-mist/80">
                  MISSION_VISION · figura de contexto
                </p>
              </div>
            </div>

            <Corner className="-top-2 -left-2 border-t-2 border-l-2" />
            <Corner className="-top-2 -right-2 border-t-2 border-r-2" />
            <Corner className="-bottom-2 -left-2 border-b-2 border-l-2" />
            <Corner className="-bottom-2 -right-2 border-b-2 border-r-2" />
          </div>

          <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-mist/10 bg-navy-900/90 px-4 py-3 backdrop-blur-sm sm:block">
            <p className="font-mono text-[10px] uppercase tracking-widest text-signal">01 · Misión</p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-mist/40">02 · Visión</p>
          </div>
        </div>
      </div>
    </section>
  );
}
