import { Link } from 'react-router-dom';

export default function Compromiso() {
  return (
    <section id="compromiso" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="relative overflow-hidden rounded-2xl bg-navy-900 px-8 py-12 text-mist shadow-xl sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-signal/15 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: 'radial-gradient(var(--color-signal, #38d6c8) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />

          <span className="relative font-mono text-[11px] uppercase tracking-widest text-signal">
            Compromiso operativo
          </span>
          <h2 className="relative mt-4 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            Un entorno tecnológico robusto, integrado y confiable.
          </h2>
          <p className="relative mt-4 max-w-2xl text-mist/70">
            Trabajamos en sinergia con el resto de áreas de IATECH para que cada
            solución médica tenga continuidad, velocidad y acceso uniforme a la
            información de salud.
          </p>

          <div className="relative mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/descripcion-posiciones"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-navy-950 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
            >
              Ver el equipo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-mist/70 transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 rounded"
            >
              Volver al inicio
            </Link>
          </div>

          <p className="relative mt-10 border-t border-mist/10 pt-5 font-mono text-[10px] uppercase tracking-widest text-mist/35">
            SYS_NODE // MISSION_VISION_V1.0 · [ STATUS: 100% ONLINE ]
          </p>
        </div>
      </div>
    </section>
  );
}
