import { useRef, useState } from 'react';

export type Punto = { t: number; v: number };

type Props = {
  datos: Punto[];
  unidad?: string;
};

const W = 800;
const H = 300;
const PAD = { top: 16, right: 24, bottom: 40, left: 64 };

// Gráfico de línea en SVG, sin librerías externas, con los colores del sitio.
// Incluye trazo animado al entrar y un cursor con tooltip al pasar sobre la serie.
export default function GraficoLinea({ datos, unidad = '' }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [indice, setIndice] = useState<number | null>(null);

  if (datos.length < 2) return null;

  const tMin = datos[0].t;
  const tMax = datos[datos.length - 1].t;
  const vMin = Math.min(...datos.map((d) => d.v));
  const vMax = Math.max(...datos.map((d) => d.v));
  const margen = (vMax - vMin || Math.abs(vMax) || 1) * 0.1;
  const lo = vMin - margen;
  const hi = vMax + margen;

  const areaX = (t: number) =>
    PAD.left + ((t - tMin) / (tMax - tMin || 1)) * (W - PAD.left - PAD.right);
  const areaY = (v: number) =>
    PAD.top + (1 - (v - lo) / (hi - lo || 1)) * (H - PAD.top - PAD.bottom);

  const linea = datos
    .map((d, i) => `${i === 0 ? 'M' : 'L'}${areaX(d.t).toFixed(1)},${areaY(d.v).toFixed(1)}`)
    .join(' ');
  const base = H - PAD.bottom;
  const area = `${linea} L${areaX(tMax).toFixed(1)},${base} L${areaX(tMin).toFixed(1)},${base} Z`;

  const ticksV = [0, 1, 2, 3, 4].map((i) => lo + ((hi - lo) * i) / 4);
  const ticksT = [0, 1, 2, 3].map((i) => tMin + ((tMax - tMin) * i) / 3);

  const ultimo = datos[datos.length - 1];
  const formatoFecha = (t: number) =>
    new Date(t).toLocaleString('es-PE', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  const formatoValor = (v: number) =>
    `${v.toLocaleString('es-PE', { maximumFractionDigits: 2 })}${unidad ? ` ${unidad}` : ''}`;

  // Punto más cercano al cursor, según la posición horizontal.
  const alMover = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * W;
    let mejor = 0;
    let distancia = Infinity;
    datos.forEach((d, i) => {
      const dx = Math.abs(areaX(d.t) - x);
      if (dx < distancia) {
        distancia = dx;
        mejor = i;
      }
    });
    setIndice(mejor);
  };

  const activo = indice !== null ? datos[indice] : null;

  return (
    <div className="relative text-ink">
      <style>{`
        @keyframes trazo-entrada { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
        .trazo-animado { stroke-dasharray: 1; stroke-dashoffset: 1; animation: trazo-entrada 1.4s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) { .trazo-animado { animation: none; stroke-dashoffset: 0; } }
      `}</style>

      <div className="mb-6 grid grid-cols-3 gap-6 border-t border-ink pt-4">
        <div>
          <p className="swiss-label text-ink-60">Mínimo</p>
          <p className="mt-2 text-lg font-semibold">{formatoValor(vMin)}</p>
        </div>
        <div>
          <p className="swiss-label text-ink-60">Máximo</p>
          <p className="mt-2 text-lg font-semibold">{formatoValor(vMax)}</p>
        </div>
        <div>
          <p className="swiss-label text-ink-60">Último</p>
          <p className="mt-2 text-lg font-semibold text-accent">{formatoValor(ultimo.v)}</p>
        </div>
      </div>

      <svg
        ref={svgRef}
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Gráfico histórico del sensor"
        onMouseMove={alMover}
        onMouseLeave={() => setIndice(null)}
      >
        {/* Rejilla horizontal y etiquetas de valor */}
        {ticksV.map((v) => (
          <g key={v}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={areaY(v)}
              y2={areaY(v)}
              stroke="currentColor"
              strokeOpacity={0.15}
            />
            <text
              x={PAD.left - 10}
              y={areaY(v) + 4}
              textAnchor="end"
              fontSize="12"
              fill="currentColor"
              opacity={0.6}
            >
              {v.toLocaleString('es-PE', { maximumFractionDigits: 1 })}
            </text>
          </g>
        ))}

        {/* Etiquetas de tiempo */}
        {ticksT.map((t, i) => (
          <text
            key={t}
            x={areaX(t)}
            y={H - 12}
            textAnchor={i === 0 ? 'start' : i === ticksT.length - 1 ? 'end' : 'middle'}
            fontSize="12"
            fill="currentColor"
            opacity={0.6}
          >
            {formatoFecha(t)}
          </text>
        ))}

        {/* Área y línea */}
        <path d={area} fill="currentColor" fillOpacity={0.06} />
        <path
          d={linea}
          pathLength={1}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
          className="trazo-animado"
        />

        {/* Cursor al pasar el mouse */}
        {activo && (
          <g>
            <line
              x1={areaX(activo.t)}
              x2={areaX(activo.t)}
              y1={PAD.top}
              y2={base}
              stroke="currentColor"
              strokeOpacity={0.3}
              strokeDasharray="4 4"
            />
            <circle cx={areaX(activo.t)} cy={areaY(activo.v)} r={6} className="text-accent" fill="currentColor" />
          </g>
        )}

        {/* Último punto resaltado */}
        {!activo && (
          <circle cx={areaX(ultimo.t)} cy={areaY(ultimo.v)} r={5} className="text-accent" fill="currentColor" />
        )}
      </svg>

      {activo && (
        <div
          className="pointer-events-none absolute top-0 border border-ink bg-paper px-3 py-2 text-xs shadow-sm"
          style={{
            left: `${(areaX(activo.t) / W) * 100}%`,
            transform: `translate(${areaX(activo.t) / W > 0.7 ? '-105%' : '8px'}, 0)`,
          }}
        >
          <p className="swiss-label text-ink-60">{formatoFecha(activo.t)}</p>
          <p className="mt-1 font-semibold text-accent">{formatoValor(activo.v)}</p>
        </div>
      )}
    </div>
  );
}
