interface CollaborationFlowProps {
  activeId: string | null;
  onSelect: (id: string) => void;
}

const STEPS = [
  {
    id: 'gerente-cloud',
    step: '01',
    phase: 'Estrategia & FinOps',
    role: 'Gerente de Área Cloud',
    summary: 'Planifica la visión multi-cloud, gestiona presupuestos, acuerdos SLA y coordina a los equipos técnicos.',
  },
  {
    id: 'arquitecto-cloud',
    step: '02',
    phase: 'Diseño & Resiliencia',
    role: 'Arquitecto de Soluciones',
    summary: 'Modela patrones de microservicios, planes de contingencia DRP e integración segura con IA y datos.',
  },
  {
    id: 'admin-devops',
    step: '03',
    phase: 'CI/CD & Automatización',
    role: 'Administrador DevOps',
    summary: 'Automatiza pipelines de entrega continua, despliegues en Kubernetes y gestiona Infraestructura como Código.',
  },
  {
    id: 'admin-infraestructura',
    step: '04',
    phase: 'Operación & Soporte 24/7',
    role: 'Admin. de Infraestructura',
    summary: 'Mantiene servidores, redes virtuales (VPC), políticas IAM, copias de seguridad y monitoreo proactivo.',
  },
];

export default function CollaborationFlow({ activeId, onSelect }: CollaborationFlowProps) {
  return (
    <section className="bg-mist py-14 lg:py-16 border-b border-navy-700/20">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-navy-700/20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-signal/10 px-3 py-0.5 text-xs font-medium text-signal border border-signal/20">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Sinergia Operativa
            </span>
            <h2 className="mt-2 font-sans text-2xl sm:text-3xl text-navy-950 font-semibold tracking-tight">
              Ciclo de Colaboración Cloud
            </h2>
          </div>
          <p className="text-xs text-navy-700/70 max-w-xs sm:text-right">
            Cómo interactúan los 4 roles para asegurar el ciclo de vida de cada servicio.
          </p>
        </div>

        {/* Pasos del Flujo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step) => {
            const isSelected = activeId === step.id;
            return (
              <button
                key={step.id}
                onClick={() => onSelect(step.id)}
                className={`group relative flex flex-col justify-between text-left rounded-xl p-4 sm:p-5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  isSelected
                    ? 'border-2 border-signal bg-white shadow-[0_4px_14px_rgba(56,214,200,0.08)] ring-2 ring-signal/15 -translate-y-1'
                    : 'border border-navy-700/20 bg-white shadow-[0_1px_3px_rgba(5,11,24,0.03)] hover:border-signal/30 hover:bg-white hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`flex h-7 w-7 items-center justify-center rounded font-mono text-xs font-bold transition-colors ${
                      isSelected ? 'bg-signal text-white' : 'bg-signal/10 text-signal group-hover:bg-signal/20'
                    }`}>
                      {step.step}
                    </span>
                    <span className="font-mono text-[10px] text-navy-700/70 uppercase">
                      FASE {step.step}
                    </span>
                  </div>

                  <h3 className={`font-sans text-sm font-semibold transition-colors ${
                    isSelected ? 'text-signal' : 'text-navy-950 group-hover:text-signal'
                  }`}>
                    {step.phase}
                  </h3>

                  <p className="font-sans text-xs font-medium text-navy-950 mt-0.5">
                    {step.role}
                  </p>

                  <p className="text-[11px] text-navy-700/70 leading-relaxed mt-2">
                    {step.summary}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-mist/50 flex items-center justify-between text-[10px] font-mono">
                  <span className={isSelected ? 'text-signal font-semibold' : 'text-navy-700/70'}>
                    {isSelected ? '✓ Seleccionado' : 'Examinar rol →'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
