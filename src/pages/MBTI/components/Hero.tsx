export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ice-50 pt-24 pb-0 text-ink sm:pt-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(var(--color-signal) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[560px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua/25 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-16 lg:py-20 lg:pr-8">
          <span className="chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-signal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Perfiles del equipo
          </span>

          <h1 className="mt-7 font-display text-[2.1rem] font-black leading-[0.95] tracking-[-0.03em] text-ink sm:text-5xl xl:text-[3.6rem]">
            MBTI <span className="font-normal text-signal">·</span> Equipo Cloud
          </h1>

          <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-ink/65 sm:text-[17px] sm:leading-relaxed">
            Comprender cómo piensa y trabaja cada miembro del equipo es clave para construir infraestructura que no
            solo funcione, sino que escale con propósito y continuidad clínica.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#teoria"
              className="inline-flex items-center gap-2 rounded-full btn bg-aqua px-6 py-3 text-sm font-bold tracking-tight text-ink transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ice-50"
            >
              Conocer la teoría
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#equipo"
              className="btn inline-flex items-center gap-2 rounded-full bg-ice-50 px-6 py-3 text-sm font-bold tracking-tight text-ink transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ice-50"
            >
              Ver perfiles
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="chip inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold text-ink-700">
              4 perfiles mapeados
            </span>
          </div>
        </div>

        <div className="relative h-[340px] overflow-hidden lg:rounded-l-[40px] sm:h-[420px] lg:h-[520px]">
          <img
            src="/images/fondop.jpg"
            alt="Equipo colaborando en infraestructura cloud"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />

          <div className="panel absolute bottom-6 right-6 flex items-center gap-2.5 rounded-full px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink">4 perfiles activos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
