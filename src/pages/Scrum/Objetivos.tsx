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
      <section className="border-b border-rule bg-paper pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <Link
            to="/scrum"
            className="ed-caption transition-colors hover:text-accent"
          >
            &larr; Volver a Scrum
          </Link>

          <span className="ed-kicker mt-10 block">Scrum &middot; Subpágina</span>

          <h1 className="ed-headline mt-4 max-w-4xl text-5xl sm:text-7xl">
            Objetivos por Área
          </h1>

          <p className="ed-body ed-dropcap mt-8 max-w-2xl">
            Cada área de la descripción de posiciones aporta un objetivo propio
            que alimenta el Product Backlog.
          </p>

          <div className="mt-10">
            <a href="#contenido" className="ed-btn ed-btn-primary">
              Ver las áreas
            </a>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section id="contenido" className="bg-paper py-16 sm:py-20">
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
                className="ed-card flex flex-col p-6 sm:p-8 transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="ed-card flex h-8 w-8 items-center justify-center font-mono text-xs text-ink">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <i className={`bx ${a.icon} text-2xl text-accent`} />
                  </div>
                  <span className="ed-chip px-3 py-1 font-mono text-xs font-medium text-accent">
                    {a.short}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{a.title}</h3>

                <div className="ed-card mt-4 flex-1 p-4">
                  <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-accent">
                    <span className="h-1.5 w-1.5 bg-accent" />
                    Objetivo del área
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-70/80">{a.objective}</p>
                </div>

                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-ink-70/40">
                  Área {String(idx + 1).padStart(2, '0')} — Descripción de Posiciones
                </p>
              </div>
            ))}
          </div>

          {/* Navegación cruzada */}
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              to="/scrum"
              className="ed-card inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-ink transition-colors"
            >
              <i className="bx bx-left-arrow-alt text-base" />
              Volver a Scrum
            </Link>
            <Link
              to="/descripcion-posiciones"
              className="ed-card inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-ink transition-colors hover:text-accent"
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
