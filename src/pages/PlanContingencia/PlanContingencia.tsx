import { Reveal } from '../../components/ui/Reveal';
import { PLAN_CONTINGENCIA_DRIVE_URL } from './data/plan';
import {
  MarcoTeorico,
  RiesgosLaPaz,
  DrpAlertas,
  ProtocolosPruebas,
  Documento,
} from './sections';

export default function PlanContingencia() {
  const tieneEnlace = Boolean(PLAN_CONTINGENCIA_DRIVE_URL);

  return (
    <div>
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid py-20 sm:py-28">
            <div className="col-span-full sm:col-span-8">
              <Reveal asHero>
                <span className="swiss-label hero-item flex items-center gap-3 text-accent">
                  <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
                  Continuidad operativa · La Paz
                </span>

                <h1 className="swiss-display hero-item mt-8 text-ink">
                  Plan de <span className="text-accent">Contingencia</span>
                </h1>

                <p className="hero-item mt-10 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  Estrategia preventiva, análisis de riesgos y protocolos de recuperación del Área de
                  Servicios Cloud e Integración para sostener las plataformas médicas de IATECH ante
                  fallas en la nube o eventos en La Paz, Bolivia.
                </p>

                <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
                  <a
                    href="#contenido"
                    className="swiss-btn swiss-btn-primary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                  >
                    Ver contenido
                    <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
                  </a>
                  {tieneEnlace ? (
                    <a
                      href={PLAN_CONTINGENCIA_DRIVE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="swiss-btn swiss-btn-secondary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                    >
                      Abrir documento
                      <i className="bx bx-link-external text-base" aria-hidden="true" />
                    </a>
                  ) : (
                    <a
                      href="#documento"
                      className="swiss-btn swiss-btn-secondary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                    >
                      Abrir documento
                      <i className="bx bx-file text-base" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 sm:col-span-3 sm:col-start-10 sm:mt-0 sm:self-end">
              <p className="swiss-numeral hero-item text-accent">14</p>
              <p className="swiss-label mt-2 border-t border-ink pt-3">
                Riesgos evaluados · La Paz y Cloud
              </p>
            </div>
          </div>
        </div>
      </section>

      <MarcoTeorico />
      <RiesgosLaPaz />
      <DrpAlertas />
      <ProtocolosPruebas />
      <Documento />

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid">
            <div className="col-span-full sm:col-span-8">
              <span className="swiss-label block text-accent">Cierre</span>
              <h2 className="swiss-display-sm mt-6 text-paper">
                Continuidad clínica ante cualquier escenario
              </h2>
              <p className="mt-8 max-w-2xl border-l-2 border-accent pl-5 text-base leading-relaxed text-paper/70 sm:text-lg">
                El plan se revisa cada seis meses y tras cada simulacro o incidente severo. Cerrar
                las brechas del inventario y practicar la operación remota garantiza respuesta rápida
                cuando la infraestructura o la ciudad lo exigen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
