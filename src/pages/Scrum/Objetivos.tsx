import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../../components/content';
import { AREAS } from './data/areas';

export default function Objetivos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero compacto */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-14 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(#38d6c8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <Link
            to="/scrum"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mist/60 transition hover:text-signal"
          >
            <i className="bx bx-left-arrow-alt text-base" />
            Volver a Scrum
          </Link>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-signal">
            Scrum · Subpágina
          </p>
          <h1 className="mt-3 font-display text-3xl text-mist sm:text-5xl">
            Objetivos por Área
          </h1>
          <p className="mt-4 max-w-2xl text-mist/70">
            Cada área de la descripción de posiciones aporta un objetivo propio
            que alimenta el Product Backlog.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <SectionHeader
            number="07"
            title="Objetivos por Área"
            description="Navegá por áreas y entendé cómo cada objetivo se convierte en trabajo del Scrum Team."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {AREAS.map((a, idx) => (
              <div
                key={a.id}
                className="flex flex-col rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-950 font-mono text-xs text-mist">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <i className={`bx ${a.icon} text-2xl text-signal`} />
                  </div>
                  <span className="rounded-full bg-signal/10 px-3 py-1 font-mono text-xs font-medium text-signal">
                    {a.short}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{a.title}</h3>

                <div className="mt-4 flex-1 rounded-xl border border-signal/20 bg-mist/50 p-4">
                  <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-signal">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    Objetivo del área
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{a.objective}</p>
                </div>

                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-navy-700/40">
                  Área {String(idx + 1).padStart(2, '0')} — Descripción de Posiciones
                </p>
              </div>
            ))}
          </div>

          {/* Navegación cruzada */}
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              to="/scrum"
              className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-6 py-3 text-sm font-medium text-mist transition-colors hover:bg-navy-800"
            >
              <i className="bx bx-left-arrow-alt text-base" />
              Volver a Scrum
            </Link>
            <Link
              to="/descripcion-posiciones"
              className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-white px-6 py-3 text-sm font-medium text-navy-900 transition-colors hover:border-signal/50 hover:text-signal"
            >
              Ver Descripción de Posiciones
              <i className="bx bx-right-arrow-alt text-base" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
