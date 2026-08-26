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
    <section className="relative bg-[#F8FAFC] pt-24 pb-14 text-[#0F172A] border-b border-[#E2E8F0] overflow-hidden">
      
      {/* Sutil halo ambiental suave */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-[#2563EB]/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-10">
        
        {/* Encabezado Extravagante & Atrevido */}
        <div className="mx-auto max-w-4xl text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-1.5 text-xs font-semibold text-[#1D4ED8] border border-[#DBEAFE] shadow-sm mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]" />
            </span>
            <span className="tracking-wide">ARQUITECTURA ORGANIZACIONAL</span>
          </div>

          <h1 className="font-['Unbounded'] text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] uppercase">
            Organigrama del{' '}
            <span className="bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] via-[#38BDF8] via-[#0284C7] to-[#1E40AF] bg-clip-text text-transparent animate-cloud-gradient inline-block">
              Área Cloud
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Estructura técnica y jerarquía operativa responsable de la infraestructura, disponibilidad y escalabilidad de{' '}
            <span className="text-[#0F172A] font-semibold">IATECH</span>.
          </p>
        </div>

        {/* Organigrama */}
        <div className="flex flex-col items-center">

          {/* 1. CTO — Nivel Ejecutivo de Referencia */}
          <div className="flex items-center gap-3 rounded-lg border border-[#E2E8F0] bg-[#FFFFFF] px-4 py-2 shadow-[0_1px_3px_rgba(15,23,42,0.04)] z-10 hover:border-[#CBD5E1] transition-colors">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-[#EFF6FF] text-[10px] font-mono font-semibold text-[#1D4ED8] border border-[#DBEAFE]">
              CTO
            </span>
            <div className="text-left">
              <p className="text-[10px] uppercase font-mono tracking-wider text-[#64748B]">Supervisión Ejecutiva</p>
              <p className="font-sans text-xs font-medium text-[#0F172A]">Dirección de Tecnología</p>
            </div>
          </div>

          {/* Conector vertical CTO -> Gerente */}
          <div className="relative h-6 w-[1.5px] bg-[#CBD5E1]">
            <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[#93C5FD] opacity-70 animate-pulse" />
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
            <div className="relative h-6 w-[1.5px] bg-[#CBD5E1]">
              <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[#93C5FD] opacity-70 animate-pulse" />
            </div>

            {/* Puente Horizontal (Desktop) */}
            <div className="hidden md:block relative w-full">
              {/* Barra Horizontal limpia entre centros de las 3 tarjetas (16.66% a 83.33%) */}
              <div className="absolute top-0 left-[16.66%] right-[16.66%] h-[1.5px] bg-[#CBD5E1]" />

              {/* Nodos de intersección discretos con pulsación sutil */}
              <div className="absolute top-[-3px] left-[16.66%] -translate-x-1/2 h-2 w-2 rounded-full bg-[#CBD5E1] border border-[#FFFFFF]" />
              <div className="absolute top-[-3px] left-[50%] -translate-x-1/2 h-2 w-2 rounded-full bg-[#2563EB] border border-[#FFFFFF] shadow-sm" />
              <div className="absolute top-[-3px] left-[83.33%] -translate-x-1/2 h-2 w-2 rounded-full bg-[#CBD5E1] border border-[#FFFFFF]" />
            </div>

            {/* Grid de 3 Subordinados */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-0 md:mt-0 z-10">
              {SUBORDINATES.map((id) => {
                const pos = POSITIONS.find((p) => p.id === id);
                if (!pos) return null;
                return (
                  <div key={id} className="relative flex flex-col items-center">
                    {/* Bajada vertical en escritorio */}
                    <div className="hidden md:block h-6 w-[1.5px] bg-[#CBD5E1]" />
                    
                    {/* Conector vertical en móvil */}
                    <div className="block md:hidden h-3 w-[1.5px] bg-[#CBD5E1]" />

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
        <p className="mt-10 text-center text-xs text-[#64748B]">
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
      className={`group relative flex flex-col justify-between w-full text-left transition-all duration-200 rounded-lg p-4 sm:p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
        isManager ? 'shadow-[0_2px_6px_rgba(15,23,42,0.06)]' : 'shadow-[0_1px_3px_rgba(15,23,42,0.04)]'
      } ${
        isActive
          ? 'bg-[#FFFFFF] border-2 border-[#2563EB] ring-2 ring-[#2563EB]/15 shadow-[0_4px_16px_rgba(37,99,235,0.1)] -translate-y-0.5'
          : 'bg-[#FFFFFF] border border-[#E2E8F0] hover:border-[#93C5FD] hover:bg-[#FAFBFD] hover:shadow-md hover:-translate-y-0.5'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="inline-flex rounded-md bg-[#EFF6FF] border border-[#DBEAFE] px-2.5 py-0.5 text-[11px] font-medium text-[#1D4ED8] group-hover:bg-[#DBEAFE]/80 transition-colors">
            {meta?.badge}
          </span>

          <span className={`text-[11px] font-medium transition-colors ${isActive ? 'text-[#2563EB]' : 'text-[#64748B] group-hover:text-[#0F172A]'}`}>
            {isActive ? 'Seleccionado ✓' : 'Ver ficha →'}
          </span>
        </div>

        <h2 className={`font-sans text-base sm:text-lg font-semibold leading-snug transition-colors ${
          isActive ? 'text-[#2563EB]' : 'text-[#0F172A] group-hover:text-[#2563EB]'
        }`}>
          {title}
        </h2>

        <p className="mt-1 text-xs text-[#475569] leading-relaxed">
          {meta?.focus}
        </p>
      </div>

      <div className="mt-3.5 pt-2.5 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] text-[#64748B]">
        <span>{category}</span>
        <span className="flex items-center gap-1.5 text-[#059669] font-mono text-[10px]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#059669]" />
          </span>
          1 Titular
        </span>
      </div>
    </button>
  );
}
