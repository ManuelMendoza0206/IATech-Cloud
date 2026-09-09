export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-24 pb-0 text-mist sm:pt-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(#38d6c8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[560px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-signal/14 via-signal/6 to-transparent blur-[140px]" />

      <div className="absolute top-7 left-8 hidden font-mono text-[10px] tracking-[0.14em] text-mist/25 sm:block">
        SYS_NODE // MBTI_ASSESSMENT_V1.0
      </div>
      <div className="absolute top-7 right-8 hidden font-mono text-[10px] tracking-[0.14em] text-signal/35 sm:block">
        [ TEAM PROFILES: 4 TYPES ACTIVE ]
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-16 lg:py-20 lg:pr-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-signal/15 bg-signal/[0.08] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-signal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Perfiles del equipo
          </span>

          <h1 className="mt-7 font-display text-[2.1rem] font-semibold leading-[0.95] tracking-[-0.03em] text-mist sm:text-5xl xl:text-[3.6rem]">
            MBTI <span className="font-normal text-signal">·</span> Equipo Cloud
          </h1>

          <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-mist/65 sm:text-[17px] sm:leading-relaxed">
            Comprender cómo piensa y trabaja cada miembro del equipo es clave para construir infraestructura que no
            solo funcione, sino que escale con propósito y continuidad clínica.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#teoria"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold tracking-tight text-navy-950 shadow-[0_8px_24px_rgba(56,214,200,0.25)] transition hover:brightness-[1.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              Conocer la teoría
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#equipo"
              className="inline-flex items-center gap-2 rounded-full border border-mist/20 bg-transparent px-6 py-3 text-sm font-semibold tracking-tight text-mist transition hover:border-signal/40 hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mist/30 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              Ver perfiles
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 border-t border-mist/10 pt-6">
            <div className="flex -space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-navy-950 bg-navy-900 font-mono text-[10px] font-bold text-signal">16</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-navy-950 bg-mist font-mono text-[10px] font-bold text-navy-900">4</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-navy-950 bg-signal font-mono text-[10px] font-bold text-navy-950">4</span>
            </div>
            <p className="font-mono text-[11px] leading-tight tracking-wide text-mist/45">
              16 tipos · 4 dimensiones · 4 perfiles mapeados
            </p>
          </div>
        </div>

        <div className="relative h-[340px] overflow-hidden sm:h-[420px] lg:h-[520px]">
          <img
            src="/images/fondop.jpg"
            alt="Equipo colaborando en infraestructura cloud"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/45 to-transparent lg:from-navy-950 lg:via-navy-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/20" />
          <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(5,11,24,0.7))' }} />

          <div className="absolute bottom-6 right-6 flex items-center gap-2.5 rounded-full border border-mist/15 bg-navy-950/75 px-4 py-2 shadow-lg backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-mist">4 perfiles activos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
