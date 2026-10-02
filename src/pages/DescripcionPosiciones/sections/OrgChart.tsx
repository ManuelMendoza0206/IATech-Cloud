import { POSITIONS } from '../data/positions';

interface OrgChartProps {
  activeId: string | null;
  onSelect: (id: string) => void;
}

const POSITION_METRICS: Record<
  string,
  { badge: string; focus: string }
> = {
  'gerente-cloud': {
    badge: 'Liderazgo & FinOps',
    focus: 'Estrategia multi-cloud, optimización presupuestaria y gobernanza técnica',
  },
  'arquitecto-cloud': {
    badge: 'Diseño & Resiliencia',
    focus: 'Patrones de microservicios, DRP, seguridad y conectividad de sistemas',
  },
  'admin-devops': {
    badge: 'CI/CD & IaC',
    focus: 'Automatización de pipelines, orquestación de contenedores y observabilidad',
  },
  'admin-infraestructura': {
    badge: 'SysOps & Redes',
    focus: 'Disponibilidad 24/7, networking virtual, IAM y gestión de servidores',
  },
};

const SUBORDINATES = ['arquitecto-cloud', 'admin-devops', 'admin-infraestructura'];

export default function OrgChart({ activeId, onSelect }: OrgChartProps) {
  return (
    <section className="relative bg-paper pt-24 pb-14 text-ink border-b border-ink-15 overflow-hidden">
      
      {/* Sutil halo ambiental suave */}

      <div className="relative mx-auto max-w-5xl px-6 sm:px-10">
        
        {/* Encabezado Extravagante & Atrevido */}
        <div className="mx-auto max-w-4xl mb-12">
          <div className="swiss-chip swiss-cell inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-accent mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 bg-accent" />
            </span>
            <span className="tracking-wide">ARQUITECTURA ORGANIZACIONAL</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.1] uppercase">
            Organigrama del{' '}
            <span className="text-accent">
              Área Cloud
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-ink-60/70 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Estructura técnica y jerarquía operativa responsable de la infraestructura, disponibilidad y escalabilidad de{' '}
            <span className="text-ink font-semibold">IATECH</span>.
          </p>
        </div>

        {/* Organigrama */}
        <div className="flex flex-col items-center">

          {/* 1. CTO — Nivel Ejecutivo de Referencia */}
          <div className="swiss-cell flex items-center gap-3 px-4 py-2 z-10 transition-colors">
            <span className="swiss-chip swiss-cell flex h-6 w-6 items-center justify-center text-[10px] font-mono font-semibold text-accent">
              CTO
            </span>
            <div className="text-left">
              <p className="text-[10px] uppercase font-mono tracking-wider text-ink-60/70">Supervisión Ejecutiva</p>
              <p className="font-sans text-xs font-medium text-ink">Dirección de Tecnología</p>
            </div>
          </div>

          {/* Conector vertical CTO -> Gerente */}
          <div className="relative h-6 w-[1.5px] bg-steel/30">
            <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-2 w-2 bg-accent/30 opacity-70 animate-pulse" />
          </div>

          {/* 2. GERENTE DE ÁREA CLOUD */}
          <div className="w-full max-w-sm z-10">
            <OrgNodeCard
              id="gerente-cloud"
              title="Gerente de Área Cloud"
              category="Directivo / Gerencial"
              isActive={activeId === 'gerente-cloud'}
              onClick={() => onSelect('gerente-cloud')}
              isManager
            />
          </div>

          {/* 3. ESTRUCTURA DE LÍNEAS CONECTORAS HACIA SUBORDINADOS */}
          <div className="relative w-full max-w-4xl flex flex-col items-center">
            {/* Línea vertical baja del Gerente */}
            <div className="relative h-6 w-[1.5px] bg-steel/30">
              <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-2 w-2 bg-accent/30 opacity-70 animate-pulse" />
            </div>

            {/* Puente Horizontal (Desktop) */}
            <div className="hidden md:block relative w-full">
              {/* Barra Horizontal limpia entre centros de las 3 tarjetas (16.66% a 83.33%) */}
              <div className="absolute top-0 left-[16.66%] right-[16.66%] h-[1.5px] bg-steel/30" />

              {/* Nodos de intersección discretos con pulsación sutil */}
              <div className="swiss-cell absolute top-[-3px] left-[16.66%] -translate-x-1/2 h-2 w-2 bg-steel/30" />
              <div className="swiss-cell absolute top-[-3px] left-[50%] -translate-x-1/2 h-2 w-2 bg-accent" />
              <div className="swiss-cell absolute top-[-3px] left-[83.33%] -translate-x-1/2 h-2 w-2 bg-steel/30" />
            </div>

            {/* Grid de 3 Subordinados */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-0 md:mt-0 z-10">
              {SUBORDINATES.map((id) => {
                const pos = POSITIONS.find((p) => p.id === id);
                if (!pos) return null;
                return (
                  <div key={id} className="relative flex flex-col items-center">
                    {/* Bajada vertical en escritorio */}
                    <div className="hidden md:block h-6 w-[1.5px] bg-steel/30" />
                    
                    {/* Conector vertical en móvil */}
                    <div className="block md:hidden h-3 w-[1.5px] bg-steel/30" />

                    <OrgNodeCard
                      id={id}
                      title={pos.title}
                      category={pos.identification.category}
                      isActive={activeId === id}
                      onClick={() => onSelect(id)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Nota al pie discreta */}
        <p className="mt-10 text-xs text-ink-60/70">
          Haz clic en cualquier posición para consultar su ficha técnica y responsabilidades operativas.
        </p>

      </div>
    </section>
  );
}

interface OrgNodeCardProps {
  id: string;
  title: string;
  category: string;
  isActive: boolean;
  onClick: () => void;
  isManager?: boolean;
}

function OrgNodeCard({ id, title, category, isActive, onClick, isManager = false }: OrgNodeCardProps) {
  const meta = POSITION_METRICS[id];

  return (
    <button
      onClick={onClick}
      className={`swiss-cell group relative flex w-full flex-col justify-between p-4 text-left transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${isManager ? 'border-2 border-ink' : ''} ${isActive ? 'bg-ink text-paper' : 'hover:bg-ink-15'}`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="swiss-chip inline-flex px-2.5 py-0.5 text-[11px] font-medium text-accent transition-colors">
            {meta?.badge}
          </span>

          <span className={`text-[11px] font-medium transition-colors ${isActive ? 'text-accent' : 'text-ink-60/70 group-hover:text-ink'}`}>
            {isActive ? 'Seleccionado ✓' : 'Ver ficha →'}
          </span>
        </div>

        <h2 className={`font-display text-base font-bold leading-snug transition-colors sm:text-lg ${ isActive ? 'text-accent' : 'text-ink group-hover:text-accent' }`}>
          {title}
        </h2>

        <p className="mt-1 text-xs text-ink-60/70 leading-relaxed">
          {meta?.focus}
        </p>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-ink-15 flex items-center justify-between text-[11px] text-ink-60/70">
        <span>{category}</span>
        <span className="flex items-center gap-1.5 text-accent font-mono text-[10px]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 bg-accent" />
          </span>
          1 Titular
        </span>
      </div>
    </button>
  );
}
