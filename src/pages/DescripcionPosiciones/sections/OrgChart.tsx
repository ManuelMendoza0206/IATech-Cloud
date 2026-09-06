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
    <section className="relative bg-mist pt-24 pb-14 text-navy-950 border-b border-navy-700/20 overflow-hidden">
      
      {/* Sutil halo ambiental suave */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(750px,90vw)] h-[min(400px,50vh)] bg-signal/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-10">
        
        {/* Encabezado Extravagante & Atrevido */}
        <div className="mx-auto max-w-4xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-signal/10 px-4 py-1.5 text-xs font-semibold text-signal border border-signal/20 shadow-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            <span className="tracking-wide">ARQUITECTURA ORGANIZACIONAL</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-950 leading-[1.1] uppercase">
            Organigrama del{' '}
            <span className="text-signal">
              Área Cloud
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-navy-700/70 max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Estructura técnica y jerarquía operativa responsable de la infraestructura, disponibilidad y escalabilidad de{' '}
            <span className="text-navy-950 font-semibold">IATECH</span>.
          </p>
        </div>

        {/* Organigrama */}
        <div className="flex flex-col items-center">

          {/* 1. CTO — Nivel Ejecutivo de Referencia */}
          <div className="flex items-center gap-3 rounded-lg border border-navy-700/20 bg-white px-4 py-2 shadow-[0_1px_3px_rgba(5,11,24,0.04)] z-10 hover:border-navy-700/30 transition-colors">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-signal/10 text-[10px] font-mono font-semibold text-signal border border-signal/20">
              CTO
            </span>
            <div className="text-left">
              <p className="text-[10px] uppercase font-mono tracking-wider text-navy-700/70">Supervisión Ejecutiva</p>
              <p className="font-sans text-xs font-medium text-navy-950">Dirección de Tecnología</p>
            </div>
          </div>

          {/* Conector vertical CTO -> Gerente */}
          <div className="relative h-6 w-[1.5px] bg-navy-700/30">
            <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-signal/30 opacity-70 animate-pulse" />
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
            <div className="relative h-6 w-[1.5px] bg-navy-700/30">
              <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-signal/30 opacity-70 animate-pulse" />
            </div>

            {/* Puente Horizontal (Desktop) */}
            <div className="hidden md:block relative w-full">
              {/* Barra Horizontal limpia entre centros de las 3 tarjetas (16.66% a 83.33%) */}
              <div className="absolute top-0 left-[16.66%] right-[16.66%] h-[1.5px] bg-navy-700/30" />

              {/* Nodos de intersección discretos con pulsación sutil */}
              <div className="absolute top-[-3px] left-[16.66%] -translate-x-1/2 h-2 w-2 rounded-full bg-navy-700/30 border border-white" />
              <div className="absolute top-[-3px] left-[50%] -translate-x-1/2 h-2 w-2 rounded-full bg-signal border border-white shadow-sm" />
              <div className="absolute top-[-3px] left-[83.33%] -translate-x-1/2 h-2 w-2 rounded-full bg-navy-700/30 border border-white" />
            </div>

            {/* Grid de 3 Subordinados */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-0 md:mt-0 z-10">
              {SUBORDINATES.map((id) => {
                const pos = POSITIONS.find((p) => p.id === id);
                if (!pos) return null;
                return (
                  <div key={id} className="relative flex flex-col items-center">
                    {/* Bajada vertical en escritorio */}
                    <div className="hidden md:block h-6 w-[1.5px] bg-navy-700/30" />
                    
                    {/* Conector vertical en móvil */}
                    <div className="block md:hidden h-3 w-[1.5px] bg-navy-700/30" />

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
        <p className="mt-10 text-center text-xs text-navy-700/70">
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
      className={`group relative flex flex-col justify-between w-full text-left transition-all duration-200 rounded-lg p-4 sm:p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
        isManager ? 'shadow-[0_2px_6px_rgba(5,11,24,0.06)]' : 'shadow-[0_1px_3px_rgba(5,11,24,0.04)]'
      } ${
        isActive
          ? 'bg-white border-2 border-signal ring-2 ring-signal/15 shadow-[0_4px_16px_rgba(56,214,200,0.1)] -translate-y-0.5'
          : 'bg-white border border-navy-700/20 hover:border-signal/30 hover:bg-white hover:shadow-md hover:-translate-y-0.5'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="inline-flex rounded-md bg-signal/10 border border-signal/20 px-2.5 py-0.5 text-[11px] font-medium text-signal group-hover:bg-signal/20/80 transition-colors">
            {meta?.badge}
          </span>

          <span className={`text-[11px] font-medium transition-colors ${isActive ? 'text-signal' : 'text-navy-700/70 group-hover:text-navy-950'}`}>
            {isActive ? 'Seleccionado ✓' : 'Ver ficha →'}
          </span>
        </div>

        <h2 className={`font-sans text-base sm:text-lg font-semibold leading-snug transition-colors ${
          isActive ? 'text-signal' : 'text-navy-950 group-hover:text-signal'
        }`}>
          {title}
        </h2>

        <p className="mt-1 text-xs text-navy-700/70 leading-relaxed">
          {meta?.focus}
        </p>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-mist/50 flex items-center justify-between text-[11px] text-navy-700/70">
        <span>{category}</span>
        <span className="flex items-center gap-1.5 text-signal font-mono text-[10px]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-signal" />
          </span>
          1 Titular
        </span>
      </div>
    </button>
  );
}
