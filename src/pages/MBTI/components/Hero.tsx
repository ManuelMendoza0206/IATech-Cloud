export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-24 pb-0 text-mist sm:pt-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(#38d6c8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-signal/15 via-purple-500/8 to-transparent blur-[140px]" />

      <div className="absolute top-6 left-8 hidden font-mono text-[10px] tracking-widest text-mist/20 sm:block">
        SYS_NODE // MBTI_ASSESSMENT_V1.0
      </div>
      <div className="absolute top-6 right-8 hidden font-mono text-[10px] tracking-widest text-signal/30 sm:block">
        [ TEAM PROFILES: 4 TYPES ACTIVE ]
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-0 lg:grid-cols-2">
        <div className="relative z-10 px-6 py-16 sm:px-10 sm:py-20 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Perfiles del equipo
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-mist sm:text-5xl xl:text-6xl">
            MBTI{' '}
            <span className="text-signal">· Equipo</span>{' '}
            Cloud
          </h1>

          <p className="mt-6 max-w-lg text-base text-mist/70 sm:text-lg">
            Comprender cómo piensa y trabaja cada miembro del equipo es clave para
            construir infraestructura que no solo funcione, sino que escale con
            propósito.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#teoria"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3.5 text-sm font-semibold text-navy-950 transition hover:opacity-90"
            >
              Conocer la teoría
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M12 5v14M6 13l6 6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#equipo"
              className="inline-flex items-center gap-2 rounded-full border border-mist/25 px-6 py-3.5 text-sm font-semibold text-mist transition hover:border-signal hover:text-signal"
            >
              Ver perfiles
            </a>
          </div>
        </div>

        <div className="relative h-[320px] sm:h-[400px] lg:h-[520px]">
          <img
            src="/images/fondop.jpg"
            alt="Equipo MBTI — IATECH Cloud"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/40 to-transparent lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30" />

          <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-signal/30 bg-navy-950/80 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-signal">
              4 perfiles activos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
