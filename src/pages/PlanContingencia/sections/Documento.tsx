import { SectionHeader } from '../../../components/content';
import { PLAN_CONTINGENCIA_DRIVE_URL } from '../data/plan';

export default function Documento() {
  const tieneEnlace = Boolean(PLAN_CONTINGENCIA_DRIVE_URL);

  return (
    <section id="documento" className="border-t border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="05"
          title="Documento del Plan de Contingencia"
          description="El plan completo adaptado al Área Cloud en La Paz está en el documento compartido de Google Drive."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="swiss-cell p-6 sm:p-8 lg:col-span-7">
            <span className="swiss-chip inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-accent">
              <i className="bx bx-link-external text-base" aria-hidden="true" />
              Documento · Drive
            </span>

            <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight text-ink">
              Plan de Contingencia · Área Cloud IATECH (documento completo)
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-60 sm:text-lg">
              Reúne el marco normativo boliviano, el inventario técnico por dominio, la matriz de
              riesgos en La Paz y Multi-Cloud, los protocolos físicos y lógicos completos, el
              directorio de emergencia y los anexos de simulacros.
            </p>

            <ul className="mt-8 space-y-3 border-t border-ink-15 pt-6">
              {[
                'Acceso directo al documento completo de 94 páginas trabajado por el Área Cloud.',
                'Incluye inventarios técnicos y brechas del área sin exponer cifras monetarias.',
                'Actualizado para operación híbrida en La Paz, Bolivia y entornos AWS, Azure y GCP.',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-ink-60 sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {tieneEnlace ? (
                <>
                  <a
                    href={PLAN_CONTINGENCIA_DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="swiss-btn swiss-btn-primary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                  >
                    Abrir documento en Drive
                    <i className="bx bx-link-external text-base" aria-hidden="true" />
                  </a>
                  <span className="font-mono text-xs uppercase tracking-widest text-ink-40">
                    Se abre en una pestaña nueva
                  </span>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="swiss-btn swiss-btn-primary inline-flex cursor-not-allowed items-center gap-2 px-7 py-3 text-[11px] opacity-60"
                  >
                    Abrir documento en Drive
                    <i className="bx bx-link-external text-base" aria-hidden="true" />
                  </button>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    Enlace de Drive pendiente de configurar en data/plan.ts
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-l-2 border-ink bg-surface p-6 sm:p-8">
              <span className="swiss-label block text-accent">Alcance</span>
              <h4 className="mt-4 font-display text-lg font-extrabold leading-tight text-ink">
                Específico del Área Cloud
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-ink-60 sm:text-base">
                Este plan cubre exclusivamente la infraestructura Multi-Cloud, el WAR Room local en
                La Paz, los respaldos y los cuatro roles técnicos del Área de Servicios Cloud e
                Integración junto al Product Owner.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-60 sm:text-base">
                Mantiene la reserva de montos del área: detalla capacidades, criticidades y planes de
                acción sin publicar cifras financieras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
