import { SectionHeader } from '../../../components/content';
import { SYMBOL_GROUPS, GROUPS_BY_KIND } from '../data/diagram';
import type { BpmnSymbolKind } from '../data/diagram';

function SymbolGlyph({ kind, color }: { kind: BpmnSymbolKind['kind']; color: string }) {
  switch (kind) {
    case 'evento':
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12" role="img" aria-label="Evento: círculo">
          <circle cx="20" cy="32" r="10" fill="none" stroke={color} strokeWidth="2.5" />
          <circle cx="44" cy="32" r="10" fill="none" stroke={color} strokeWidth="5" />
        </svg>
      );
    case 'actividad':
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12" role="img" aria-label="Actividad: rectángulo redondeado">
          <rect x="6" y="18" width="52" height="28" rx="7" fill="none" stroke={color} strokeWidth="2.5" />
          <line x1="6" y1="32" x2="16" y2="32" stroke={color} strokeWidth="2" />
        </svg>
      );
    case 'gateway':
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12" role="img" aria-label="Gateway: rombo">
          <path d="M32 6 L58 32 L32 58 L6 32 Z" fill="none" stroke={color} strokeWidth="2.5" />
          <path d="M25 25 L39 39 M39 25 L25 39" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'flujo':
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12" role="img" aria-label="Flujo de secuencia: flecha">
          <defs>
            <marker id="bpmn-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill={color} />
            </marker>
          </defs>
          <line x1="8" y1="24" x2="48" y2="24" stroke={color} strokeWidth="2.5" markerEnd="url(#bpmn-arrow)" />
          <path d="M48 40 Q32 52 12 46" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="5 3" markerEnd="url(#bpmn-arrow)" />
        </svg>
      );
    case 'lane':
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12" role="img" aria-label="Pool y lanes: carriles">
          <rect x="6" y="12" width="52" height="40" fill="none" stroke={color} strokeWidth="2.5" />
          <line x1="6" y1="32" x2="58" y2="32" stroke={color} strokeWidth="2" />
          <line x1="18" y1="12" x2="18" y2="52" stroke={color} strokeWidth="2" />
        </svg>
      );
  }
}

export function Simbolos() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          showNumber={false}
          number="05"
          title="Los símbolos, dibujados"
          description="Cada familia tiene una forma imposible de confundir. Estos son los glifos tal como aparecen en la especificación BPMN 2.0."
        />

        {/* Tabla oficial de referencia */}
        <div className="mt-10 overflow-hidden border border-ink-15 bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-15 px-5 py-4">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-60">
              Referencia · Tabla de símbolos BPMN
            </p>
            <a
              href="https://www.edrawsoft.com/solutions/shapes/bpmn.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-60 transition hover:text-accent"
            >
              Ver en tamaño completo
              <i className="bx bx-external-link text-sm" aria-hidden="true" />
            </a>
          </div>
          <img
            src="https://www.edrawsoft.com/solutions/shapes/bpmn.png"
            alt="Tabla de referencia con los símbolos BPMN: eventos, actividades, gateways, flujos y artefactos"
            loading="lazy"
            decoding="async"
            className="w-full"
          />
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {GROUPS_BY_KIND.map((kind) => {
            const g = SYMBOL_GROUPS[kind];
            return (
              <div
                key={kind}
                className="group relative flex flex-col gap-6 overflow-hidden border border-ink-15 bg-paper/40 p-6 transition hover:bg-paper sm:p-7 lg:flex-row"
              >
                <span
                  className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                  style={{ backgroundColor: g.color }}
                  aria-hidden="true"
                />
                <div className="flex shrink-0 items-center gap-4 lg:w-72 lg:flex-col lg:items-start">
                  <SymbolGlyph kind={kind} color={g.color} />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{g.label}</h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider" style={{ color: g.color }}>
                      {g.english}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="leading-relaxed text-ink-60">{g.definition}</p>
                  <ul className="mt-4 space-y-2.5">
                    {g.items.map((item, j) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-semibold text-white"
                          style={{ backgroundColor: g.color }}
                          aria-hidden="true"
                        >
                          {j + 1}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-ink">{item.title}</p>
                          <p className="text-sm leading-relaxed text-ink-60">{item.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
