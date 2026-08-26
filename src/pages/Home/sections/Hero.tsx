export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950">
      <img
        src="/images/cloud1.jpg"
        alt="Infraestructura cloud de IATECH"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 sm:px-10">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            Área de Servicios Cloud e Integración
          </span>

          <h1 className="mt-5 font-display text-5xl leading-tight text-mist sm:text-6xl lg:text-7xl">
            Salud conectada, en la nube, sin límites.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-mist/75">
            Optimizamos y desplegamos los servicios en la nube de IATECH para
            que la atención clínica nunca se detenga: rendimiento, velocidad y
            disponibilidad en cada despliegue.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#presentacion"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-3.5 font-semibold text-navy-950 transition hover:opacity-90"
            >
              <span>Conoce el área</span>
              <i className="bx bx-right-arrow-alt text-lg" />
            </a>

            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mist/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>

              <span>Disponibilidad operativa 24/7</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#presentacion"
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-mist/50 transition hover:text-signal"
      >
        <i className="bx bx-chevron-down text-2xl" />
      </a>
    </section>
  );
}