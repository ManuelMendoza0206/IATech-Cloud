import { useState } from 'react';
import { SectionHeader } from '../../../components/content';
import { ARROW_GROUPS, DIAGRAM_FOOTER, GROUPS_BY_KIND, PROCESS_TEXT, type ArrowKind } from '../data/diagram';

const BOX = { x: 300, y: 168, w: 380, h: 132 };
const R = 6;

function marker(id: string, color: string) {
  return (
    <defs>
      <marker id={id} markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
        <path d="M0,0 L7,3 L0,6 Z" fill={color} />
      </marker>
    </defs>
  );
}

function Box({
  x,
  y,
  w,
  h,
  label,
  active,
  onEnter,
  onLeave,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <g
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="cursor-pointer"
      tabIndex={0}
      role="button"
      aria-label={`${label} — ir a la sección`}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={R}
        fill={active ? '#0b1b33' : '#ffffff'}
        stroke={active ? 'var(--color-signal)' : 'var(--color-steel)'}
        strokeWidth={active ? 2 : 1.25}
        className="transition-[fill,stroke] duration-200"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 - 6}
        textAnchor="middle"
        fill={active ? '#eaf0f8' : '#0b1b33'}
        className="font-mono"
        style={{ fontSize: 9.5, letterSpacing: '0.08em' }}
      >
        {label.toUpperCase()}
      </text>
    </g>
  );
}

export function DiagramaA0() {
  const [active, setActive] = useState<ArrowKind | null>(null);
  const dim = (kind: ArrowKind) => active !== null && active !== kind;

  return (
    <section className="relative overflow-hidden bg-ice-50 py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="02"
          title="El diagrama A-0"
          description="Contexto de nivel cero del proyecto CLOUD. Una sola función, cuatro grupos de flechas y la numeración que permite descomponer el modelo hacia abajo."
        />

        {/* Diagrama SVG interactivo */}
        <div className="panel mt-10 overflow-hidden rounded-2xl p-4 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-700/60">
              A-0 · Reproducción interactiva
            </p>
            <p className="font-mono text-[11px] text-ink-700/40">
              {active ? 'Soltá para volver' : 'Pasá el cursor por cada flecha'}
            </p>
          </div>

          <svg
            viewBox="0 0 980 470"
            className="w-full"
            role="img"
            aria-label="Diagrama IDEF0 A-0: entradas desde la izquierda, controles desde arriba, mecanismos desde abajo y salidas hacia la derecha"
          >
            {marker('arrow-input', ARROW_GROUPS.input.color)}
            {marker('arrow-control', ARROW_GROUPS.control.color)}
            {marker('arrow-mechanism', ARROW_GROUPS.mechanism.color)}
            {marker('arrow-output', ARROW_GROUPS.output.color)}

            {/* Entradas — desde la izquierda */}
            {ARROW_GROUPS.input.items.map((item, i) => {
              const y = 190 + i * 46;
              const on = active === 'input';
              return (
                <g key={item.title} opacity={dim('input') ? 0.25 : 1} className="transition-opacity duration-200">
                  <Box
                    x={8}
                    y={y - 18}
                    w={252}
                    h={36}
                    label={item.title}
                    active={on}
                    onEnter={() => setActive('input')}
                    onLeave={() => setActive(null)}
                  />
                  <line
                    x1={264}
                    y1={y}
                    x2={BOX.x - 8}
                    y2={y}
                    stroke={ARROW_GROUPS.input.color}
                    strokeWidth={on ? 2.5 : 1.5}
                    markerEnd="url(#arrow-input)"
                    className="transition-[stroke-width] duration-200"
                  />
                </g>
              );
            })}

            {/* Controles — desde arriba */}
            {ARROW_GROUPS.control.items.map((item, i) => {
              const x = 330 + i * 108;
              const on = active === 'control';
              return (
                <g key={item.title} opacity={dim('control') ? 0.25 : 1} className="transition-opacity duration-200">
                  <Box
                    x={x}
                    y={8}
                    w={100}
                    h={128}
                    label={item.title}
                    active={on}
                    onEnter={() => setActive('control')}
                    onLeave={() => setActive(null)}
                  />
                  <line
                    x1={x + 50}
                    y1={140}
                    x2={x + 50}
                    y2={BOX.y - 8}
                    stroke={ARROW_GROUPS.control.color}
                    strokeWidth={on ? 2.5 : 1.5}
                    markerEnd="url(#arrow-control)"
                    className="transition-[stroke-width] duration-200"
                  />
                </g>
              );
            })}

            {/* Mecanismos — desde abajo */}
            {ARROW_GROUPS.mechanism.items.map((item, i) => {
              const x = 330 + i * 108;
              const on = active === 'mechanism';
              return (
                <g key={item.title} opacity={dim('mechanism') ? 0.25 : 1} className="transition-opacity duration-200">
                  <Box
                    x={x}
                    y={334}
                    w={100}
                    h={128}
                    label={item.title}
                    active={on}
                    onEnter={() => setActive('mechanism')}
                    onLeave={() => setActive(null)}
                  />
                  <line
                    x1={x + 50}
                    y1={330}
                    x2={x + 50}
                    y2={BOX.y + BOX.h + 8}
                    stroke={ARROW_GROUPS.mechanism.color}
                    strokeWidth={on ? 2.5 : 1.5}
                    markerEnd="url(#arrow-mechanism)"
                    className="transition-[stroke-width] duration-200"
                  />
                </g>
              );
            })}

            {/* Salidas — hacia la derecha */}
            {ARROW_GROUPS.output.items.map((item, i) => {
              const y = 190 + i * 46;
              const on = active === 'output';
              return (
                <g key={item.title} opacity={dim('output') ? 0.25 : 1} className="transition-opacity duration-200">
                  <line
                    x1={BOX.x + BOX.w + 8}
                    y1={y}
                    x2={716}
                    y2={y}
                    stroke={ARROW_GROUPS.output.color}
                    strokeWidth={on ? 2.5 : 1.5}
                    markerEnd="url(#arrow-output)"
                    className="transition-[stroke-width] duration-200"
                  />
                  <Box
                    x={722}
                    y={y - 18}
                    w={250}
                    h={36}
                    label={item.title}
                    active={on}
                    onEnter={() => setActive('output')}
                    onLeave={() => setActive(null)}
                  />
                </g>
              );
            })}

            {/* Caja central */}
            <rect
              x={BOX.x}
              y={BOX.y}
              width={BOX.w}
              height={BOX.h}
              rx={R}
              fill="#050b18"
              stroke="var(--color-signal)"
              strokeWidth={1.75}
            />
            <text
              x={BOX.x + BOX.w / 2}
              y={BOX.y + 52}
              textAnchor="middle"
              fill="#eaf0f8"
              className="font-display"
              style={{ fontSize: 12.5, fontWeight: 700 }}
            >
              AUTOMATIZAR EL DESPLIEGUE Y
            </text>
            <text
              x={BOX.x + BOX.w / 2}
              y={BOX.y + 70}
              textAnchor="middle"
              fill="#eaf0f8"
              className="font-display"
              style={{ fontSize: 12.5, fontWeight: 700 }}
            >
              ALOJAMIENTO DE APLICACIONES
            </text>
            <text
              x={BOX.x + BOX.w / 2}
              y={BOX.y + 88}
              textAnchor="middle"
              fill="#eaf0f8"
              className="font-display"
              style={{ fontSize: 12.5, fontWeight: 700 }}
            >
              EN LA NUBE
            </text>
            <text
              x={BOX.x + 12}
              y={BOX.y + BOX.h - 10}
              fill="var(--color-signal)"
              className="font-mono"
              style={{ fontSize: 11 }}
            >
              Bs0
            </text>
            <text
              x={BOX.x + BOX.w - 12}
              y={BOX.y + BOX.h - 10}
              textAnchor="end"
              fill="var(--color-signal)"
              className="font-mono"
              style={{ fontSize: 11 }}
            >
              0
            </text>
          </svg>

          {/* Leyenda */}
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-ink-950/10 pt-5">
            {GROUPS_BY_KIND.map((kind) => {
              const g = ARROW_GROUPS[kind];
              return (
                <li key={kind} className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: g.color }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-700/70">
                    {g.label} · {g.english}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Imagen oficial */}
        <div className="panel mt-10 overflow-hidden rounded-2xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-950/10 px-5 py-4">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-700/60">
              A-0 · Diagrama oficial
            </p>
            <a
              href="/images/IDEF.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-700/60 transition hover:text-signal"
            >
              Ver en tamaño completo
              <i className="bx bx-external-link text-sm" aria-hidden="true" />
            </a>
          </div>
          <img
            src="/images/IDEF.png"
            alt="Diagrama IDEF0 A-0 del proyecto CLOUD: automatizar el despliegue y alojamiento de aplicaciones en la nube"
            width={1735}
            height={1201}
            loading="lazy"
            decoding="async"
            className="w-full"
          />
        </div>

        {/* Pie de diagrama */}
        <div className="panel mt-6 overflow-hidden rounded-xl">
          <div className="grid divide-y divide-steel/900/10 sm:grid-cols-[110px_1fr_110px] sm:divide-x sm:divide-y-0">
            <div className="flex items-center justify-center bg-ice-50 px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-signal">
                {DIAGRAM_FOOTER[0].key}
              </span>
            </div>
            <div className="flex items-center px-4 py-3">
              <span className="font-mono text-lg font-bold text-ink">{DIAGRAM_FOOTER[0].value}</span>
              <span className="ml-3 text-xs text-ink-700/60">
                Diagrama de contexto de nivel cero
              </span>
            </div>
            <div className="flex items-center justify-center bg-ice-50 px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-signal">
                {DIAGRAM_FOOTER[2].key}
              </span>
            </div>
          </div>
          <div className="grid divide-y divide-steel/900/10 sm:grid-cols-[110px_1fr] sm:divide-x sm:divide-y-0">
            <div className="flex items-center justify-center bg-ice-50 px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-signal">
                {DIAGRAM_FOOTER[1].key}
              </span>
            </div>
            <div className="flex items-center px-4 py-3">
              <span className="text-sm text-ink">{DIAGRAM_FOOTER[1].value}</span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center font-mono text-[11px] text-ink-700/50">
          TITLE: {PROCESS_TEXT}
        </p>
      </div>
    </section>
  );
}
