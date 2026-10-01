export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neu-base pt-32 pb-20 text-ink-950 sm:pt-36 sm:pb-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(var(--color-signal) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[min(420px,60vh)] w-[min(720px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua/25 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
        <span className="neu-pressed inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-signal">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
          Propósito del área
        </span>

        <h1 className="mt-6 font-neu-display text-4xl font-black leading-tight text-ink-950 sm:text-6xl">
          Misión y Visión
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base text-ink-950/70 sm:text-lg">
          El norte que guía cada despliegue del Área de Servicios Cloud e Integración:
          infraestructura médica confiable, continua y al servicio de la clínica.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#declaraciones"
            className="neu-btn inline-flex items-center gap-2 rounded-full bg-aqua px-6 py-3 text-sm font-bold text-ink-950 transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base"
          >
            Leer declaraciones
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#pilares"
            className="neu-btn inline-flex items-center gap-2 rounded-full bg-neu-base px-6 py-3 text-sm font-bold text-ink-950 transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base"
          >
            Ver pilares
          </a>
        </div>
      </div>
    </section>
  );
}
