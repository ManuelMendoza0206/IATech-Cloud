import { Reveal } from '../../components/ui/Reveal';
import { Teoria, Componentes, FinOpsRelacion, Video, Documento } from './sections';

const DRIVE_URL =
  'https://docs.google.com/spreadsheets/d/1Rh2leQZQYRSxdFC3Zl0ewtRmyJ5NhX7R/edit?usp=drive_link&ouid=114171327152076986642&rtpof=true&sd=true';

export default function Presupuesto() {
  return (
    <div>
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid py-20 sm:py-28">
            <div className="col-span-full sm:col-span-8">
              <Reveal asHero>
                <span className="swiss-label hero-item flex items-center gap-3 text-accent">
                  <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
                  Planificación y control
                </span>

                <h1 className="swiss-display hero-item mt-8 text-ink">
                  Presu<span className="text-accent">puesto</span>
                </h1>

                <p className="hero-item mt-10 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  Marco de planificación para estimar, asignar y dar seguimiento a los recursos del
                  Área de Servicios Cloud e Integración. Esta página ofrece un resumen conceptual,
                  sin cifras: el detalle se gestiona en el documento compartido.
                </p>

                <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
                  <a
                    href="#contenido"
                    className="swiss-btn swiss-btn-primary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                  >
                    Ver contenido
                    <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
                  </a>
                  <a
                    href={DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="swiss-btn swiss-btn-secondary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                  >
                    Abrir documento
                    <i className="bx bx-link-external text-base" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 sm:col-span-3 sm:col-start-10 sm:mt-0 sm:self-end">
              <p className="swiss-numeral hero-item text-accent">5</p>
              <p className="swiss-label mt-2 border-t border-ink pt-3">Componentes del presupuesto</p>
            </div>
          </div>
        </div>
      </section>

      <Teoria />
      <Componentes />
      <FinOpsRelacion />
      <Video />
      <Documento />

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid">
            <div className="col-span-full sm:col-span-8">
              <span className="swiss-label block text-accent">Cierre</span>
              <h2 className="swiss-display-sm mt-6 text-paper">
                Planificar para sostener la operación
              </h2>
              <p className="mt-8 max-w-2xl border-l-2 border-accent pl-5 text-base leading-relaxed text-paper/70 sm:text-lg">
                El presupuesto orienta cómo se asignan y revisan los recursos del área. Mantenerlo
                actualizado y vinculado a la gestión del servicio permite tomar decisiones con
                claridad y responder a las necesidades de la operación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
