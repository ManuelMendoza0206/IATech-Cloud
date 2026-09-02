export default function Hero() {
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

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
          Propósito del área
        </span>

        <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-mist sm:text-6xl">
          Misión y Visión
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-mist/70 sm:text-lg">
          El norte que guía cada despliegue del Área de Servicios Cloud e Integración:
          infraestructura médica confiable, continua y al servicio de la clínica.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
    </section>
  );
}
