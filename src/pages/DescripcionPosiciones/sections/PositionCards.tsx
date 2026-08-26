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
  'admin-devops': ['CI / CD Pipelines', 'Kubernetes & Docker', 'IaC', 'Observabilidad'],
  'admin-infraestructura': ['SysOps & Redes', 'IAM & Seguridad', 'Backups & DR', 'Disponibilidad 24/7'],
};

export default function PositionCards({ expandedId, onToggle, cardRefs }: PositionCardsProps) {
  return (
    <section id="perfiles" className="relative overflow-hidden bg-slate-50/70 py-16 lg:py-24 border-t border-slate-200/80">
      {/* ─── FONDO DECORATIVO CON SABOR ARCHITECTURAL BLUEPRINT ─── */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)`,
          backgroundSize: `32px 32px`
        }}
      />

      {/* Esferas decorativas de luz sutil en esquinas */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-signal/5 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-10">
        {/* Encabezado de la Sección */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200/80">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
              Fichas de Puesto
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-4xl text-navy-900 font-semibold">
              Especificaciones & Fichas Técnicas
            </h2>
          </div>
          <p className="font-mono text-xs text-navy-700/60 shrink-0">
            [ 4 PUESTOS REGISTRADOS ]
          </p>
        </div>

        {/* Acordeón de Tarjetas con diseño enriquecido */}
        <div className="flex flex-col gap-5">
          {POSITIONS.map((position, index) => {
            const isExpanded = expandedId === position.id;
            const tags = POSITION_TAGS[position.id] || [];

            return (
              <div
                key={position.id}
                ref={(el) => {
                  cardRefs.current[position.id] = el;
                }}
                className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
                  isExpanded
                    ? 'border-signal bg-white shadow-xl ring-2 ring-signal/30'
                    : 'border-slate-200/90 bg-white/90 backdrop-blur-sm hover:border-signal/60 hover:bg-white hover:shadow-lg'
                }`}
              >
                {/* Indicador de acento en el borde izquierdo */}
                <div className={`absolute top-0 bottom-0 left-0 w-1.5 transition-colors duration-300 ${
                  isExpanded ? 'bg-signal' : 'bg-slate-200 group-hover:bg-signal/60'
                }`} />

                {/* Header Clickeable */}
                <button
                  onClick={() => onToggle(position.id)}
                  aria-expanded={isExpanded}
                  className="flex w-full flex-col lg:flex-row lg:items-center justify-between gap-4 pl-6 sm:pl-8 pr-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
                >
                  <div className="flex items-start gap-4 sm:gap-5 flex-1">
                    {/* Index Badge en estilo terminal */}
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold transition-all ${
                      isExpanded 
                        ? 'bg-navy-950 text-signal shadow-md' 
                        : 'bg-slate-100 text-navy-900 group-hover:bg-navy-950 group-hover:text-signal'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="font-display text-lg sm:text-xl font-medium text-navy-900 group-hover:text-navy-950">
                          {position.title}
                        </h3>
                        <span className="inline-block rounded-md bg-slate-100/90 border border-slate-200/60 px-2.5 py-0.5 font-mono text-[11px] font-medium text-navy-700">
                          {position.identification.category}
                        </span>
                      </div>

                      {/* Resumen explicativo de 1 línea visible siempre */}
                      <p className="text-xs sm:text-sm text-navy-700/75 line-clamp-1 leading-relaxed max-w-3xl">
                        {position.purpose[0]}
                      </p>

                      {/* Chips / Tags de tecnología */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-slate-100/80 px-2 py-0.5 font-mono text-[10px] text-navy-700/80 border border-slate-200/50"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Estado / Botón desplegable */}
                  <div className="flex items-center justify-between lg:justify-end gap-4 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <span className="font-mono text-[11px] text-navy-700/50 hidden sm:inline-block">
                      1 Titular · {position.identification.schedule}
                    </span>

                    <div className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider font-medium transition-all ${
                      isExpanded
                        ? 'bg-navy-950 text-signal shadow-sm'
                        : 'bg-slate-100 text-navy-800 group-hover:bg-navy-950 group-hover:text-signal'
                    }`}>
                      <span>{isExpanded ? 'Ocultar' : 'Ver Ficha'}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-signal' : 'text-navy-500'}`}
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
                  <div className="border-t border-slate-200/80 bg-slate-50/70 px-6 py-6 sm:px-8">
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

/* ─── Detalle de Puesto Estructurado ──────────────── */
function PositionDetail({ position }: { position: Position }) {
  return (
    <div className="space-y-6">
      {/* Grid Superior: Identificación & Relaciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
          <h4 className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-navy-900 mb-3 pb-2 border-b border-slate-100">
            <svg className="w-4 h-4 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h2a2 2 0 012 2v1m-6 0h6" />
            </svg>
            Identificación del Puesto
          </h4>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <InfoItem label="Categoría" value={position.identification.category} />
            <InfoItem label="Departamento" value={position.identification.department} />
            <InfoItem label="Titulares" value={`${position.identification.holders} Posición`} />
            <InfoItem label="Jornada" value={position.identification.schedule} />
          </dl>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm">
          <h4 className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-navy-900 mb-3 pb-2 border-b border-slate-100">
            <svg className="w-4 h-4 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Relaciones Organizacionales
          </h4>
          <div className="space-y-2 text-xs">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-navy-700/50 block">Jerarquía Directa</span>
              <p className="text-navy-900 font-medium">{position.relationships.hierarchical}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-navy-700/50 block">Relaciones Funcionales</span>
              <p className="text-navy-700/80 leading-relaxed">{position.relationships.functional}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Finalidad del Cargo */}
      <SectionCard
        title="Finalidad del Cargo"
        icon={
          <svg className="w-4 h-4 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {position.purpose.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 rounded-lg bg-slate-50/80 p-3 border border-slate-200/60">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-navy-950 text-signal font-mono text-[9px] font-bold mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs text-navy-800 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Funciones Específicas & Áreas de Eficiencia */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <SectionCard
            title="Funciones Específicas"
            icon={
              <svg className="w-4 h-4 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
          >
            <ul className="space-y-2">
              {position.functions.map((fn, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-navy-800 leading-relaxed">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal shrink-0 mt-1.5" />
                  <span>{fn}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <div>
          <SectionCard
            title="Áreas de Eficiencia"
            icon={
              <svg className="w-4 h-4 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          >
            <ul className="space-y-2">
              {position.efficiencyAreas.map((eff, idx) => (
                <li key={idx} className="rounded-lg bg-slate-50 p-2.5 border border-slate-200/70 text-[11px] text-navy-800 leading-relaxed font-medium">
                  ✓ {eff}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>

      {/* Responsabilidades & Condiciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SectionCard
          title="Responsabilidades Clave"
          icon={
            <svg className="w-4 h-4 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
        >
          <ul className="space-y-2">
            {position.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-navy-800 leading-relaxed">
                <span className="text-signal font-bold">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard
          title="Condiciones de Trabajo & Riesgos"
          icon={
            <svg className="w-4 h-4 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          }
        >
          <div className="space-y-2 text-xs">
            <div className="rounded-lg bg-amber-500/5 p-3 border border-amber-500/20">
              <span className="font-mono text-[10px] uppercase tracking-wider text-amber-800 font-semibold block mb-0.5">Entorno & Jornada</span>
              <p className="text-navy-800 text-[11px] leading-relaxed">{position.conditions.workConditions}</p>
            </div>
            <div className="rounded-lg bg-rose-500/5 p-3 border border-rose-500/20">
              <span className="font-mono text-[10px] uppercase tracking-wider text-rose-800 font-semibold block mb-0.5">Factores de Riesgo</span>
              <p className="text-navy-800 text-[11px] leading-relaxed">{position.conditions.risks}</p>
            </div>
          </div>
        </SectionCard>
      </div>

      {/* Requerimientos y Competencias en Caja Destacada */}
      <div className="rounded-xl border border-navy-950/20 bg-navy-950 text-mist p-5 sm:p-6 shadow-lg">
        <h4 className="font-display text-sm font-semibold text-signal uppercase tracking-wider mb-4 pb-2 border-b border-navy-800 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          Requerimientos y Competencias Exigidas
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-signal/70 block">Educación Requerida</span>
            <p className="text-mist font-medium leading-relaxed">{position.requirements.education}</p>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-signal/70 block">Experiencia Mínima</span>
            <p className="text-mist font-medium leading-relaxed">{position.requirements.experience}</p>
          </div>

          {position.requirements.technicalKnowledge && (
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-signal/70 block">Conocimientos Técnicos</span>
              <p className="text-mist/90 text-[11px] leading-relaxed">{position.requirements.technicalKnowledge}</p>
            </div>
          )}

          {position.requirements.certifications && (
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-signal/70 block">Certificaciones Relevantes</span>
              <p className="text-mist/90 text-[11px] leading-relaxed">{position.requirements.certifications}</p>
            </div>
          )}

          <div className="md:col-span-2 pt-2 border-t border-navy-800">
            <span className="font-mono text-[10px] uppercase tracking-wider text-signal/70 block">Habilidades & Soft Skills</span>
            <p className="text-mist/90 text-[11px] leading-relaxed">{position.requirements.skills}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionCard({ title, icon, children }: { title: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-navy-900 mb-3 pb-2 border-b border-slate-100 flex items-center gap-2">
          {icon || <span className="h-1.5 w-1.5 rounded-full bg-signal" />}
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
      <dt className="font-mono text-[10px] uppercase tracking-wider text-navy-700/50">{label}</dt>
      <dd className="font-medium text-navy-900 text-xs">{value}</dd>
    </div>
  );
}
