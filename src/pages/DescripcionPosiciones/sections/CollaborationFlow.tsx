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
    <section className="bg-paper py-14 lg:py-16 border-b border-ink-15">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-ink-15">
          <div>
            <span className="swiss-chip swiss-cell inline-flex items-center gap-2 px-4 py-1 text-sm font-medium text-accent">
              <span className="h-1.5 w-1.5 bg-accent" />
              Sinergia Operativa
            </span>
            <h2 className="mt-3 font-sans text-3xl sm:text-4xl text-ink font-semibold tracking-tight">
              Ciclo de Colaboración Cloud
            </h2>
          </div>
          <p className="text-sm text-ink-60/70 max-w-xs sm:text-right sm:text-base">
            Cómo interactúan los 4 roles para asegurar el ciclo de vida de cada servicio.
          </p>
        </div>

        {/* Pasos del Flujo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step) => {
            const isSelected = activeId === step.id;
            return (
              <button
                key={step.id}
                onClick={() => onSelect(step.id)}
                className={`swiss-cell group relative flex flex-col justify-between text-left p-5 sm:p-6 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${ isSelected ? 'border-2 ring-2 ring-accent/15 -translate-y-1' : 'border hover:-translate-y-0.5' }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`flex h-9 w-9 items-center justify-center font-mono text-sm font-bold transition-colors ${ isSelected ? 'swiss-chip text-accent' : 'text-ink-40 group-hover:text-accent' }`}>
                      {step.step}
                    </span>
                    <span className="font-mono text-xs text-ink-60/70 uppercase">
                      FASE {step.step}
                    </span>
                  </div>

                  <h3 className={`font-sans text-lg font-semibold transition-colors ${ isSelected ? 'text-accent' : 'text-ink group-hover:text-accent' }`}>
                    {step.phase}
                  </h3>

                  <p className="font-sans text-sm font-medium text-ink mt-1">
                    {step.role}
                  </p>

                  <p className="text-sm text-ink-60/70 leading-relaxed mt-3">
                    {step.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-ink-15 flex items-center justify-between text-xs font-mono">
                  <span className={isSelected ? 'text-accent font-semibold' : 'text-ink-60/70'}>
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
