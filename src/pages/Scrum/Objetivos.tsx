import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../../components/content';
import { Reveal } from '../../components/ui/Reveal';
import { AREAS } from './data/areas';

export default function Objetivos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero compacto */}
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid py-20 sm:py-28">
            <div className="col-span-full sm:col-span-8">
              <Link
                to="/scrum"
                className="swiss-label inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                <i className="bx bx-left-arrow-alt text-base" />
                Volver a Scrum
              </Link>

              <Reveal asHero>
                <span className="swiss-label hero-item mt-8 flex items-center gap-3 text-accent">
                  <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
                  Scrum · Subpágina
                </span>

                <h1 className="swiss-display-sm hero-item mt-8 text-ink">
                  Objetivos <span className="text-accent">por Área</span>
                </h1>

                <p className="hero-item mt-10 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  Cada área de la descripción de posiciones aporta un objetivo propio
                  que alimenta el Product Backlog.
                </p>

                <div className="hero-cta mt-12">
                  <a
                    href="#contenido"
                    className="swiss-btn swiss-btn-primary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                  >
                    Ver las áreas
                    <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 sm:col-span-3 sm:col-start-10 sm:mt-0 sm:self-end">
              <p className="swiss-numeral hero-item text-accent">04</p>
              <p className="swiss-label mt-2 border-t border-ink pt-3">Áreas del equipo</p>
            </div>
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
                className="swiss-cell flex flex-col p-6 sm:p-8 transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="swiss-cell flex h-8 w-8 items-center justify-center font-mono text-xs text-ink">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <i className={`bx ${a.icon} text-2xl text-accent`} />
                  </div>
                  <span className="swiss-chip px-3 py-1 font-mono text-xs font-medium text-accent">
                    {a.short}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{a.title}</h3>

                <div className="swiss-cell mt-4 flex-1 p-4">
                  <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-accent">
                    <span className="h-1.5 w-1.5 bg-accent" />
                    Objetivo del área
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-60/80">{a.objective}</p>
                </div>

                <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-ink-60/40">
                  Área {String(idx + 1).padStart(2, '0')} — Descripción de Posiciones
                </p>
              </div>
            ))}
          </div>

          {/* Navegación cruzada */}
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              to="/scrum"
              className="swiss-cell inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-ink transition-colors"
            >
              <i className="bx bx-left-arrow-alt text-base" />
              Volver a Scrum
            </Link>
            <Link
              to="/descripcion-posiciones"
              className="swiss-cell inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-ink transition-colors hover:text-accent"
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
