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
      <section className="relative overflow-hidden bg-canvas pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(var(--color-signal) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="pointer-events-none absolute -top-24 left-1/3 h-[320px] w-[520px] rounded-full bg-aqua/20 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <Link
            to="/scrum"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-500 transition hover:text-signal"
          >
            <i className="bx bx-left-arrow-alt text-base" />
            Volver a Scrum
          </Link>

          <span className="layer-pill mt-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-signal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Scrum · Subpágina
          </span>

          <h1 className="mt-6 font-display text-3xl font-black leading-tight text-ink sm:text-5xl">
            Objetivos por Área
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-700">
            Cada área de la descripción de posiciones aporta un objetivo propio
            que alimenta el Product Backlog.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contenido"
              className="layer-btn inline-flex items-center gap-2 rounded-full bg-aqua px-6 py-3 text-sm font-bold text-ink transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              Ver las áreas
              <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section id="contenido" className="bg-canvas py-16 sm:py-20">
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
                className="layer flex flex-col rounded-2xl p-6 sm:p-8 transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="layer flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs text-ink">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <i className={`bx ${a.icon} text-2xl text-signal`} />
                  </div>
                  <span className="layer-pill rounded-full px-3 py-1 font-mono text-xs font-medium text-signal">
                    {a.short}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{a.title}</h3>

                <div className="layer mt-4 flex-1 rounded-xl p-4">
                  <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-signal">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    Objetivo del área
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/80">{a.objective}</p>
                </div>

                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-ink-700/40">
                  Área {String(idx + 1).padStart(2, '0')} — Descripción de Posiciones
                </p>
              </div>
            ))}
          </div>

          {/* Navegación cruzada */}
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              to="/scrum"
              className="layer inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ink transition-colors"
            >
              <i className="bx bx-left-arrow-alt text-base" />
              Volver a Scrum
            </Link>
            <Link
              to="/descripcion-posiciones"
              className="layer inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ink transition-colors hover:text-signal"
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
