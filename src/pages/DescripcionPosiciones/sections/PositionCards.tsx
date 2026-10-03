import type { MutableRefObject } from 'react';
import { POSITIONS, type Position } from '../data/positions';

interface PositionCardsProps {
  expandedId: string | null;
  onToggle: (id: string) => void;
  cardRefs: MutableRefObject<Record<string, HTMLElement | null>>;
}

const POSITION_TAGS: Record<string, string[]> = {
  'gerente-cloud': ['Estrategia Cloud', 'FinOps', 'AWS / Azure / GCP', 'Liderazgo SLAs'],
  'arquitecto-cloud': ['Arquitectura Multi-Cloud', 'Security by Design', 'Microservicios', 'DRP'],
  'admin-devops': ['CI/CD Pipelines', 'Kubernetes & Docker', 'IaC', 'Observabilidad'],
  'admin-infraestructura': ['SysOps & Redes', 'IAM & Seguridad', 'Backups & DR', 'Disponibilidad 24/7'],
};

const DRIVE_DOC_URL =
  'https://drive.google.com/file/d/1xLWHBKVKV9tvqg8R5h3rQeVmC4HH8Qrc/view?usp=drive_link';

export default function PositionCards({ expandedId, onToggle, cardRefs }: PositionCardsProps) {
  return (
    <section id="perfiles" className="bg-canvas py-14 lg:py-20 text-ink">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        
        {/* Encabezado de la Sección */}
        <div className="mb-8 flex flex-col justify-between gap-4 border-b border-ink-950/10 pb-4 sm:flex-row sm:items-end">
          <div>
            <span className="float-pill inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Fichas de Puesto
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Especificaciones & Fichas Técnicas
            </h2>
          </div>
          <p className="shrink-0 font-mono text-xs text-ink-500">
            [ 4 PUESTOS REGISTRADOS ]
          </p>
        </div>

        {/* Acordeón de Tarjetas */}
        <div className="flex flex-col gap-4">
          {POSITIONS.map((position, index) => {
            const isExpanded = expandedId === position.id;
            const tags = POSITION_TAGS[position.id] || [];

            return (
              <div
                key={position.id}
                ref={(el) => {
                  cardRefs.current[position.id] = el;
                }}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-200 ${ isExpanded ? 'float-pill' : 'float' }`}
              >
                {/* Indicador de acento en el borde izquierdo */}
                <div className={`absolute left-0 top-0 h-1 w-full transition-colors duration-200 lg:h-full lg:w-1 ${ isExpanded ? 'bg-signal' : 'bg-transparent group-hover:bg-signal/40' }`} />

                {/* Header Clickeable */}
                <button
                  onClick={() => onToggle(position.id)}
                  aria-expanded={isExpanded}
                  className="flex w-full flex-col lg:flex-row lg:items-center justify-between gap-4 rounded-xl pl-5 sm:pl-7 pr-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {/* Index Badge */}
                    <span className={`float-sm flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold transition-colors ${ isExpanded ? 'text-signal' : 'text-ink-500 group-hover:text-signal' }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-display text-lg font-extrabold text-ink transition-colors group-hover:text-signal sm:text-xl">
                          {position.title}
                        </h3>
                        <span className="float-pill inline-block rounded-full px-3 py-1 text-xs font-medium text-signal">
                          {position.identification.category}
                        </span>
                      </div>

                      {/* Resumen explicativo de 1 línea */}
                      <p className="line-clamp-1 max-w-3xl text-xs leading-relaxed text-ink-700 sm:text-sm">
                        {position.purpose[0]}
                      </p>

                      {/* Píldoras de tecnología sin '#' */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="float-pill inline-flex items-center px-3 py-1 text-[11px] text-ink-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Estado / Botón desplegable */}
                  <div className="flex shrink-0 items-center justify-between gap-4 border-t border-ink-950/10 pt-3 lg:justify-end lg:border-t-0 lg:pt-0">
                    <span className="hidden font-mono text-xs text-ink-500 sm:inline-flex sm:items-center sm:gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                      1 Titular · {position.identification.schedule}
                    </span>

                    <div className={`float-btn flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all ${ isExpanded ? 'bg-aqua text-ink' : 'bg-canvas text-ink-700' }`}>
                      <span>{isExpanded ? 'Ocultar' : 'Ver Ficha'}</span>
                        <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Contenido Expandido */}
                {isExpanded && (
                  <div className="border-t border-ink-950/10 px-6 py-6 sm:px-8">
                    <PositionDetail position={position} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Detalle de Puesto en Layout Dashboard Warm Cloud ──────────────── */
function PositionDetail({ position }: { position: Position }) {
  return (
    <div className="space-y-6 text-ink">
      {/* Grid Superior: Identificación & Relaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="float rounded-2xl p-4 sm:p-5">
          <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-ink mb-3 pb-2 border-b border-ink-950/10 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Identificación del Puesto
          </h4>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <InfoItem label="Categoría" value={position.identification.category} />
            <InfoItem label="Departamento" value={position.identification.department} />
            <InfoItem label="Titulares" value={`${position.identification.holders} Posición`} />
            <InfoItem label="Jornada" value={position.identification.schedule} />
          </dl>
        </div>

        <div className="float rounded-2xl p-4 sm:p-5">
          <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-ink mb-3 pb-2 border-b border-ink-950/10 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Relaciones Organizacionales
          </h4>
          <div className="space-y-2 text-xs">
            <div>
              <span className="text-[11px] text-ink-700 block font-mono">Jerarquía Directa</span>
              <p className="text-ink font-medium">{position.relationships.hierarchical}</p>
            </div>
            <div>
              <span className="text-[11px] text-ink-700 block font-mono">Relaciones Funcionales</span>
              <p className="text-ink-700 leading-relaxed">{position.relationships.functional}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Finalidad del Cargo */}
      <SectionCard title="Finalidad del Cargo">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {position.purpose.map((item, idx) => (
            <div key={idx} className="float-pill flex items-start gap-2.5 rounded-xl p-3">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded text-signal text-[10px] font-semibold mt-0.5 font-mono">
                {idx + 1}
              </span>
              <p className="text-xs text-ink leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Funciones Específicas & Áreas de Eficiencia */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <SectionCard title="Funciones Específicas">
            <ul className="space-y-2">
              {position.functions.map((fn, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-ink leading-relaxed">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal shrink-0 mt-1.5" />
                  <span>{fn}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <div>
          <SectionCard title="Áreas de Eficiencia">
            <ul className="space-y-2">
              {position.efficiencyAreas.map((eff, idx) => (
                <li key={idx} className="float-pill rounded-xl p-2.5 text-[11px] font-medium leading-relaxed text-ink">
                  ✓ {eff}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>

      {/* Responsabilidades & Condiciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SectionCard title="Responsabilidades Clave">
          <ul className="space-y-2">
            {position.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-ink leading-relaxed">
                <span className="text-signal font-semibold">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Condiciones de Trabajo & Factores de Riesgo">
          <div className="space-y-2 text-xs">
            <div className="rounded-lg bg-amber-50 p-3 border border-amber-200">
              <span className="text-[11px] font-mono font-medium text-amber-800 block mb-0.5">Entorno & Jornada</span>
              <p className="text-amber-900 text-[11px] leading-relaxed">{position.conditions.workConditions}</p>
            </div>
            <div className="rounded-lg bg-rose-50 p-3 border border-rose-200">
              <span className="text-[11px] font-mono font-medium text-rose-800 block mb-0.5">Factores de Riesgo</span>
              <p className="text-rose-900 text-[11px] leading-relaxed">{position.conditions.risks}</p>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Requerimientos y Competencias en Caja Destacada */}
      <div className="float rounded-2xl p-5 sm:p-6">
        <h4 className="font-body text-xs font-semibold text-signal uppercase tracking-wider mb-4 pb-2 border-b border-ink-950/10 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          Requerimientos y Competencias Exigidas
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-[11px] text-ink-700 block font-mono">Educación Requerida</span>
            <p className="text-ink font-medium leading-relaxed mt-0.5">{position.requirements.education}</p>
          </div>

          <div>
            <span className="text-[11px] text-ink-700 block font-mono">Experiencia Mínima</span>
            <p className="text-ink font-medium leading-relaxed mt-0.5">{position.requirements.experience}</p>
          </div>

          {position.requirements.technicalKnowledge && (
            <div>
              <span className="text-[11px] text-ink-700 block font-mono">Conocimientos Técnicos</span>
              <p className="text-ink-700 text-[11px] leading-relaxed mt-0.5">{position.requirements.technicalKnowledge}</p>
            </div>
          )}

          {position.requirements.certifications && (
            <div>
              <span className="text-[11px] text-ink-700 block font-mono">Certificaciones Relevantes</span>
              <p className="text-ink-700 text-[11px] leading-relaxed mt-0.5">{position.requirements.certifications}</p>
            </div>
          )}

          <div className="md:col-span-2 pt-3 border-t border-ink-950/10">
            <span className="text-[11px] text-ink-700 block font-mono">Habilidades & Competencias Clave</span>
            <p className="text-ink-700 text-[11px] leading-relaxed mt-0.5">{position.requirements.skills}</p>
          </div>
        </div>
      </div>

      {/* Documento de respaldo en Drive */}
      <div className="flex justify-center sm:justify-start">
        <a
          href={DRIVE_DOC_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver documento de ${position.title} en Google Drive`}
          className="inline-flex items-center gap-2 rounded-md bg-signal px-4 py-2 text-xs font-medium text-white transition-all hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          <svg
            aria-hidden="true"
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span>Ver documento</span>
        </a>
      </div>
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="float flex h-full flex-col justify-between rounded-2xl p-4 sm:p-5">
      <div>
        <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-ink mb-3 pb-2 border-b border-ink-950/10 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          {title}
        </h4>
        {children}
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
              <dt className="text-[11px] text-ink-700 font-mono">{label}</dt>
      <dd className="font-medium text-ink text-xs mt-0.5">{value}</dd>
    </div>
  );
}
