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
                      <i className={`bx bx-chevron-down transition-transform duration-300 ${isExpanded ? 'rotate-180 text-signal' : 'text-navy-500'}`} />
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
            <i className="bx bx-id-card text-signal text-sm" />
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
            <i className="bx bx-group text-signal text-sm" />
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
        icon={<i className="bx bx-flag text-signal text-sm" />}
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
            icon={<i className="bx bx-list-check text-signal text-sm" />}
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
            icon={<i className="bx bx-line-chart text-signal text-sm" />}
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
          icon={<i className="bx bx-shield-quarter text-signal text-sm" />}
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
          icon={<i className="bx bx-error text-signal text-sm" />}
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
          <i className="bx bx-medal" />
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
