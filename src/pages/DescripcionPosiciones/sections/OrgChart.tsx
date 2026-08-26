import { POSITIONS } from '../data/positions';

interface OrgChartProps {
  activeId: string | null;
  onSelect: (id: string) => void;
}

const POSITION_METRICS: Record<
  string,
  { icon: React.ReactNode; badge: string; focus: string }
> = {
  'gerente-cloud': {
    badge: 'Liderazgo & FinOps',
    focus: 'Estrategia, costos y gestión del talento Cloud',
    icon: (
      <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V9a2 2 0 012-2h2a2 2 0 012 2v12" />
      </svg>
    ),
  },
  'arquitecto-cloud': {
    badge: 'Diseño & Resiliencia',
    focus: 'Patrones de arquitectura, DRP y Security by Design',
    icon: (
      <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  'admin-devops': {
    badge: 'CI/CD & IaC',
    focus: 'Pipelines, orquestación y automatización ágil',
    icon: (
      <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  'admin-infraestructura': {
    badge: 'SysOps & Seguridad',
    focus: 'Disponibilidad 24/7, redes virtualizadas e IAM',
    icon: (
      <svg className="w-5 h-5 text-signal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
};

const SUBORDINATES = ['arquitecto-cloud', 'admin-devops', 'admin-infraestructura'];

export default function OrgChart({ activeId, onSelect }: OrgChartProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pt-24 pb-14 text-mist">
      {/* ─── FONDO DECORATIVO CON FLAVOR TECNOLÓGICO ─── */}
      {/* Patrón Grid de Puntos de Red */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#38d6c8 1px, transparent 1px)`,
          backgroundSize: `24px 24px`
        }}
      />

      {/* Glow de Neón central detras del Gerente */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-signal/10 via-sky-500/5 to-transparent blur-[120px] pointer-events-none rounded-full" />

      {/* Marcas de agua decorativas en esquinas estilo terminal/cloud */}
      <div className="absolute top-6 left-8 font-mono text-[10px] text-mist/20 tracking-widest hidden sm:block">
        SYS_NODE // CLOUD_ARCH_V2.4
      </div>
      <div className="absolute top-6 right-8 font-mono text-[10px] text-signal/30 tracking-widest hidden sm:block">
        [ STATUS: 100% ONLINE ]
      </div>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        {/* Header compacto de la sección */}
        <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-signal/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal border border-signal/20">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
            Estructura Organizacional
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-4xl text-mist font-semibold">
            Organigrama del Área Cloud
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-mist/70">
            Selecciona un nodo para examinar su ficha técnica de perfil.
          </p>
        </div>

        {/* Organigrama Interactivo Estructurado */}
        <div className="flex flex-col items-center">

          {/* 1. CTO — Nivel Ejecutivo */}
          <div className="group relative flex items-center gap-3 rounded-xl border border-navy-700/80 bg-navy-900/80 px-5 py-2.5 shadow-lg backdrop-blur-md z-10">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-navy-950 text-signal border border-signal/20 font-mono text-[11px] font-bold">
              CTO
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-mist/40">Supervisión Ejecutiva</p>
              <p className="font-display text-xs font-medium text-mist/90">Dirección de Tecnología</p>
            </div>
          </div>

          {/* Conector vertical CTO -> Gerente con indicador de nodo */}
          <div className="relative h-7 w-0.5 bg-gradient-to-b from-navy-700/80 via-signal to-signal flex items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_#38d6c8]" />
          </div>

          {/* 2. GERENTE DE ÁREA CLOUD */}
          <div className="w-full max-w-md z-10">
            <OrgNodeCard
              id="gerente-cloud"
              title="Gerente de Área Cloud"
              category="Directivo / Gerencial"
              isActive={activeId === 'gerente-cloud'}
              onClick={() => onSelect('gerente-cloud')}
              isManager
            />
          </div>

          {/* 3. ESTRUCTURA DE LÍNEAS CONECTORAS PERFECTAS HACIA SUBORDINADOS */}
          <div className="relative w-full max-w-5xl flex flex-col items-center">
            {/* T-Line vertical baja del Gerente */}
            <div className="h-6 w-0.5 bg-signal flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_#38d6c8]" />
            </div>

            {/* Puente Horizontal Vectorial (en pantallas medianas y grandes) */}
            <div className="hidden md:block relative w-full">
              {/* Barra Horizontal exacta entre centros de tarjetas (1/6 a 5/6 = 16.66% a 83.33%) */}
              <div className="absolute top-0 left-[16.66%] right-[16.66%] h-0.5 bg-signal/60 shadow-[0_0_6px_rgba(56,214,200,0.3)]" />

              {/* Nodos de intersección (puntos brillantes en las 3 esquinas/cruces) */}
              <div className="absolute top-[-3px] left-[16.66%] -translate-x-1/2 h-2 w-2 rounded-full bg-signal border border-navy-950 shadow-[0_0_6px_#38d6c8]" />
              <div className="absolute top-[-3px] left-[50%] -translate-x-1/2 h-2 w-2 rounded-full bg-signal border border-navy-950 shadow-[0_0_6px_#38d6c8]" />
              <div className="absolute top-[-3px] left-[83.33%] -translate-x-1/2 h-2 w-2 rounded-full bg-signal border border-navy-950 shadow-[0_0_6px_#38d6c8]" />
            </div>

            {/* Grid de 3 Subordinados */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full mt-0 md:mt-0 z-10">
              {SUBORDINATES.map((id) => {
                const pos = POSITIONS.find((p) => p.id === id);
                if (!pos) return null;
                return (
                  <div key={id} className="relative flex flex-col items-center">
                    {/* Bajada vertical en escritorio desde el puente horizontal directo a la tarjeta */}
                    <div className="hidden md:block h-6 w-0.5 bg-signal/60 mb-0" />
                    
                    {/* Conector vertical en móvil */}
                    <div className="block md:hidden h-4 w-0.5 bg-signal/40 mb-0" />

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
      className={`group relative flex flex-col justify-between w-full text-left transition-all duration-300 rounded-xl p-4 sm:p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal ${
        isManager ? 'shadow-xl' : 'shadow-md'
      } ${
        isActive
          ? 'bg-navy-900/95 border-2 border-signal shadow-[0_0_25px_rgba(56,214,200,0.25)] ring-1 ring-signal/60 scale-[1.01]'
          : 'bg-navy-900/70 border border-navy-700/60 hover:border-signal/60 hover:bg-navy-900 hover:shadow-lg'
      }`}
    >
      {/* Borde superior resplandeciente cuando activo */}
      {isActive && (
        <div className="absolute -top-0.5 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-signal to-transparent" />
      )}

      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2.5">
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
              isActive ? 'border-signal bg-signal/15' : 'border-navy-700/80 bg-navy-950 group-hover:border-signal/40'
            }`}>
              {meta?.icon}
            </div>
            <span className="inline-flex rounded bg-navy-950 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-signal border border-signal/20">
              {meta?.badge}
            </span>
          </div>

          <span className={`text-[11px] font-mono transition-colors ${isActive ? 'text-signal font-semibold' : 'text-mist/40 group-hover:text-mist/80'}`}>
            {isActive ? '✓ Seleccionado' : 'Ver datos →'}
          </span>
        </div>

        <h3 className={`font-display text-base sm:text-lg font-medium leading-snug transition-colors ${
          isActive ? 'text-signal' : 'text-mist group-hover:text-signal'
        }`}>
          {title}
        </h3>

        <p className="mt-1 text-xs text-mist/65 leading-relaxed font-body">
          {meta?.focus}
        </p>
      </div>

      <div className="mt-3 pt-2.5 border-t border-navy-700/50 flex items-center justify-between text-[10px] font-mono text-mist/40">
        <span>{category}</span>
        <span className="text-signal/80 font-medium">1 Titular</span>
      </div>
    </button>
  );
}
