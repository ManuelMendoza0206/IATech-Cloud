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

export default function PositionCards({ expandedId, onToggle, cardRefs }: PositionCardsProps) {
  return (
    <section id="perfiles" className="bg-[#F8FAFC] py-14 lg:py-20 text-[#0F172A]">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        
        {/* Encabezado de la Sección */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#E2E8F0]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-3 py-0.5 text-xs font-medium text-[#1D4ED8] border border-[#DBEAFE]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
              Fichas de Puesto
            </span>
            <h2 className="mt-2 font-sans text-2xl sm:text-3xl text-[#0F172A] font-semibold tracking-tight">
              Especificaciones & Fichas Técnicas
            </h2>
          </div>
          <p className="text-xs text-[#64748B] shrink-0 font-mono">
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
                className={`group relative overflow-hidden rounded-lg transition-all duration-200 ${
                  isExpanded
                    ? 'border border-[#2563EB] bg-[#FFFFFF] shadow-[0_4px_16px_rgba(37,99,235,0.08)] ring-1 ring-[#2563EB]/20'
                    : 'border border-[#E2E8F0] bg-[#FFFFFF] shadow-[0_1px_3px_rgba(15,23,42,0.04)] hover:border-[#93C5FD] hover:shadow-md'
                }`}
              >
                {/* Indicador de acento en el borde izquierdo */}
                <div className={`absolute top-0 bottom-0 left-0 w-1 transition-colors duration-200 ${
                  isExpanded ? 'bg-[#2563EB]' : 'bg-transparent group-hover:bg-[#CBD5E1]'
                }`} />

                {/* Header Clickeable */}
                <button
                  onClick={() => onToggle(position.id)}
                  aria-expanded={isExpanded}
                  className="flex w-full flex-col lg:flex-row lg:items-center justify-between gap-4 pl-5 sm:pl-7 pr-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {/* Index Badge */}
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded font-mono text-xs font-semibold transition-colors ${
                      isExpanded 
                        ? 'bg-[#2563EB] text-[#FFFFFF]' 
                        : 'bg-[#F1F5F9] text-[#475569] group-hover:bg-[#EFF6FF] group-hover:text-[#1D4ED8]'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-sans text-lg sm:text-xl font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                          {position.title}
                        </h3>
                        <span className="inline-block rounded-md bg-[#EFF6FF] border border-[#DBEAFE] px-2.5 py-0.5 text-xs text-[#1D4ED8] font-medium">
                          {position.identification.category}
                        </span>
                      </div>

                      {/* Resumen explicativo de 1 línea */}
                      <p className="text-xs sm:text-sm text-[#475569] line-clamp-1 leading-relaxed max-w-3xl">
                        {position.purpose[0]}
                      </p>

                      {/* Píldoras de tecnología sin '#' */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-[#F1F5F9] border border-[#E2E8F0] px-2 py-0.5 text-[11px] text-[#475569]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Estado / Botón desplegable */}
                  <div className="flex items-center justify-between lg:justify-end gap-4 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#F1F5F9]">
                    <span className="flex items-center gap-1.5 text-xs text-[#64748B] hidden sm:inline-flex font-mono">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
                      1 Titular · {position.identification.schedule}
                    </span>

                    <div className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                      isExpanded
                        ? 'bg-[#2563EB] text-[#FFFFFF]'
                        : 'bg-[#F1F5F9] text-[#475569] group-hover:text-[#0F172A] group-hover:bg-[#E2E8F0]'
                    }`}>
                      <span>{isExpanded ? 'Ocultar' : 'Ver Ficha'}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-white' : 'text-[#64748B]'}`}
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
                  <div className="border-t border-[#E2E8F0] bg-[#F8FAFC]/80 px-6 py-6 sm:px-8">
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
    <div className="space-y-6 text-[#0F172A]">
      {/* Grid Superior: Identificación & Relaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border border-[#E2E8F0] bg-[#FFFFFF] p-4 sm:p-5 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-3 pb-2 border-b border-[#F1F5F9] flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            Identificación del Puesto
          </h4>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <InfoItem label="Categoría" value={position.identification.category} />
            <InfoItem label="Departamento" value={position.identification.department} />
            <InfoItem label="Titulares" value={`${position.identification.holders} Posición`} />
            <InfoItem label="Jornada" value={position.identification.schedule} />
          </dl>
        </div>

        <div className="rounded-lg border border-[#E2E8F0] bg-[#FFFFFF] p-4 sm:p-5 shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-3 pb-2 border-b border-[#F1F5F9] flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            Relaciones Organizacionales
          </h4>
          <div className="space-y-2 text-xs">
            <div>
              <span className="text-[11px] text-[#64748B] block font-mono">Jerarquía Directa</span>
              <p className="text-[#0F172A] font-medium">{position.relationships.hierarchical}</p>
            </div>
            <div>
              <span className="text-[11px] text-[#64748B] block font-mono">Relaciones Funcionales</span>
              <p className="text-[#475569] leading-relaxed">{position.relationships.functional}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Finalidad del Cargo */}
      <SectionCard title="Finalidad del Cargo">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {position.purpose.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 rounded-lg bg-[#FFFFFF] p-3 border border-[#E2E8F0]">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-[#EFF6FF] text-[#1D4ED8] text-[10px] font-mono font-semibold mt-0.5 border border-[#DBEAFE]">
                {idx + 1}
              </span>
              <p className="text-xs text-[#0F172A] leading-relaxed">{item}</p>
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
                <li key={idx} className="flex items-start gap-2 text-xs text-[#0F172A] leading-relaxed">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] shrink-0 mt-1.5" />
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
                <li key={idx} className="rounded-lg bg-[#FFFFFF] p-2.5 border border-[#E2E8F0] text-[11px] text-[#0F172A] leading-relaxed font-medium">
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
              <li key={idx} className="flex items-start gap-2 text-xs text-[#0F172A] leading-relaxed">
                <span className="text-[#2563EB] font-semibold">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Condiciones de Trabajo & Factores de Riesgo">
          <div className="space-y-2 text-xs">
            <div className="rounded-lg bg-[#FFFBEB] p-3 border border-[#FDE68A]">
              <span className="text-[11px] font-mono font-medium text-[#92400E] block mb-0.5">Entorno & Jornada</span>
              <p className="text-[#78350F] text-[11px] leading-relaxed">{position.conditions.workConditions}</p>
            </div>
            <div className="rounded-lg bg-[#FFF1F2] p-3 border border-[#FECDD3]">
              <span className="text-[11px] font-mono font-medium text-[#9F1239] block mb-0.5">Factores de Riesgo</span>
              <p className="text-[#881337] text-[11px] leading-relaxed">{position.conditions.risks}</p>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Requerimientos y Competencias en Caja Destacada */}
      <div className="rounded-lg border border-[#DBEAFE] bg-[#F8FAFC] p-5 sm:p-6 shadow-sm">
        <h4 className="font-sans text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider mb-4 pb-2 border-b border-[#DBEAFE] flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
          Requerimientos y Competencias Exigidas
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-[11px] text-[#64748B] block font-mono">Educación Requerida</span>
            <p className="text-[#0F172A] font-medium leading-relaxed mt-0.5">{position.requirements.education}</p>
          </div>

          <div>
            <span className="text-[11px] text-[#64748B] block font-mono">Experiencia Mínima</span>
            <p className="text-[#0F172A] font-medium leading-relaxed mt-0.5">{position.requirements.experience}</p>
          </div>

          {position.requirements.technicalKnowledge && (
            <div>
              <span className="text-[11px] text-[#64748B] block font-mono">Conocimientos Técnicos</span>
              <p className="text-[#475569] text-[11px] leading-relaxed mt-0.5">{position.requirements.technicalKnowledge}</p>
            </div>
          )}

          {position.requirements.certifications && (
            <div>
              <span className="text-[11px] text-[#64748B] block font-mono">Certificaciones Relevantes</span>
              <p className="text-[#475569] text-[11px] leading-relaxed mt-0.5">{position.requirements.certifications}</p>
            </div>
          )}

          <div className="md:col-span-2 pt-3 border-t border-[#DBEAFE]">
            <span className="text-[11px] text-[#64748B] block font-mono">Habilidades & Competencias Clave</span>
            <p className="text-[#475569] text-[11px] leading-relaxed mt-0.5">{position.requirements.skills}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-[#E2E8F0] bg-[#FFFFFF] p-4 sm:p-5 shadow-[0_1px_2px_rgba(15,23,42,0.02)] h-full flex flex-col justify-between">
      <div>
        <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#0F172A] mb-3 pb-2 border-b border-[#F1F5F9] flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
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
      <dt className="text-[11px] text-[#64748B] font-mono">{label}</dt>
      <dd className="font-medium text-[#0F172A] text-xs mt-0.5">{value}</dd>
    </div>
  );
}
