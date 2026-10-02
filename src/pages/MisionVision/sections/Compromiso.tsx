import { Link } from 'react-router-dom';

export default function Compromiso() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="swiss-cell relative overflow-hidden px-8 py-12 text-ink sm:px-14 sm:py-16">

          <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
            Compromiso operativo
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
            Un entorno tecnológico robusto, integrado y confiable.
          </h2>
          <p className="mt-4 max-w-2xl text-ink/70">
            Trabajamos en sinergia con el resto de áreas de IATECH para que cada
            solución médica tenga continuidad, velocidad y acceso uniforme a la
            información de salud.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/descripcion-posiciones"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:opacity-90"
            >
              Ver el equipo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-ink/70 transition hover:text-accent"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
