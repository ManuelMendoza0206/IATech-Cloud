import { Reveal } from '../../../components/ui/Reveal';

export default function Hero() {
  return (
    <section className="border-b border-ink bg-paper">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="swiss-grid py-20 sm:py-28">
          <div className="col-span-full sm:col-span-7">
            <Reveal asHero>
              <span className="swiss-label hero-item flex items-center gap-3 text-accent">
                <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
                Propósito del área
              </span>

              <h1 className="swiss-display hero-item mt-8 text-ink">
                Misión
                <br />
                y <span className="text-accent">Visión</span>
              </h1>

              <p className="hero-item mt-10 max-w-xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                El norte que guía cada despliegue del Área de Servicios Cloud e Integración:
                infraestructura médica confiable, continua y al servicio de la clínica.
              </p>

              <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
                <a href="#declaraciones" className="swiss-btn swiss-btn-primary inline-flex items-center gap-2 px-7 py-3 text-[11px]">
                  Declaraciones
                  <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
                </a>
                <a href="#pilares" className="swiss-btn swiss-btn-secondary inline-flex items-center gap-2 px-7 py-3 text-[11px]">
                  Pilares
                </a>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}