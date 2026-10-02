import { useEffect, useRef } from 'react';
import { animate, createScope, stagger, utils } from 'animejs';
import { SectionHeader } from '../content';

/**
 * Topologia de la plataforma: el lenguaje visual del cloud.
 * Region -> Availability Zone -> servicio, cada nodo con su estado.
 * Los enlaces se dibujan al entrar en pantalla.
 */
const NODES = [
  { id: 'edge', label: 'Edge / Ingress', status: 'ok', x: 40, y: 60, kind: 'edge' },
  { id: 'region', label: 'Región us-east-1', status: 'ok', x: 250, y: 60, kind: 'region' },
  { id: 'az-a', label: 'AZ a', status: 'ok', x: 200, y: 190, kind: 'az' },
  { id: 'az-b', label: 'AZ b', status: 'ok', x: 330, y: 190, kind: 'az' },
  { id: 'app', label: 'Runtime Clinical', status: 'ok', x: 140, y: 310, kind: 'svc' },
  { id: 'data', label: 'Data Store', status: 'ok', x: 250, y: 310, kind: 'svc' },
  { id: 'obs', label: 'Observabilidad', status: 'degraded', x: 360, y: 310, kind: 'svc' },
];

const LINKS: Array<[string, string]> = [
  ['edge', 'region'],
  ['region', 'az-a'],
  ['region', 'az-b'],
  ['az-a', 'app'],
  ['az-a', 'data'],
  ['az-b', 'data'],
  ['az-b', 'obs'],
];

const STATUS_COLOR = { ok: '#0e9f8a', degraded: '#e0a33e' } as const;
const BOX = { w: 132, h: 40 };

export default function Topologia() {
  const svgRef = useRef<SVGSVGElement>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const svg = svgRef.current;
    if (!svg) return;

    utils.set(svg.querySelectorAll('.topo-node'), { opacity: 0, scale: 0.9 });
    utils.set(svg.querySelectorAll('.topo-link'), { opacity: 0, strokeDashoffset: 200 });

    scopeRef.current = createScope({ root: svg }).add(() => {
      animate('.topo-link', {
        opacity: [0, 1],
        strokeDashoffset: [200, 0],
        duration: 700,
        delay: stagger(70),
        ease: 'inOutQuad',
      });
      animate('.topo-node', {
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 500,
        delay: stagger(70, { start: 180 }),
        ease: 'outBack',
      });
    });

    return () => scopeRef.current?.revert();
  }, []);

  return (
    <section id="topologia" className="border-b border-steel/25 bg-ice-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="01"
          title="Topología de la plataforma"
          description="Región, zonas de disponibilidad y servicios. Cada nodo reporta su estado; un solo punto de dependencia se marca degradado."
        />

        <div className="panel mt-10 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-steel/25 px-5 py-3">
            <span className="mono-label">Plataforma CLOUD · vista de producción</span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip chip-ok">
                <span className="dot" />
                6 operativas
              </span>
              <span className="chip">
                <span className="dot !bg-[#e0a33e]" />
                1 degradada
              </span>
            </div>
          </div>

          <div className="overflow-x-auto p-4 sm:p-6">
            <svg
              ref={svgRef}
              viewBox="0 0 520 380"
              className="h-auto w-full min-w-[520px]"
              role="img"
              aria-label="Topología de la plataforma: un edge ingressional hacia la región us-east-1, que se reparte en dos zonas de disponibilidad con los servicios de runtime clínico, almacén de datos y observabilidad"
            >
              {LINKS.map(([from, to]) => {
                const a = NODES.find((n) => n.id === from)!;
                const b = NODES.find((n) => n.id === to)!;
                const ax = a.x + BOX.w / 2;
                const ay = a.y + BOX.h / 2;
                const bx = b.x + BOX.w / 2;
                const by = b.y + BOX.h / 2;
                return (
                  <path
                    key={`${from}-${to}`}
                    className="topo-link"
                    d={`M ${ax} ${ay} C ${ax} ${(ay + by) / 2}, ${bx} ${(ay + by) / 2}, ${bx} ${by}`}
                    fill="none"
                    stroke="#90bede"
                    strokeWidth={1.5}
                    strokeDasharray="200"
                  />
                );
              })}

              {NODES.map((n) => (
                <g
                  key={n.id}
                  className="topo-node"
                  style={{ transformOrigin: `${n.x + BOX.w / 2}px ${n.y + BOX.h / 2}px` }}
                >
                  <rect
                    x={n.x}
                    y={n.y}
                    width={BOX.w}
                    height={BOX.h}
                    rx={9}
                    fill="#ffffff"
                    stroke={n.kind === 'region' ? '#0e9f8a' : '#90bede'}
                    strokeWidth={n.kind === 'region' ? 1.75 : 1}
                  />
                  <circle
                    cx={n.x + 14}
                    cy={n.y + BOX.h / 2}
                    r={3.5}
                    fill={STATUS_COLOR[n.status as keyof typeof STATUS_COLOR]}
                  />
                  <text
                    x={n.x + 26}
                    y={n.y + BOX.h / 2 + 4}
                    fontFamily="Inter, sans-serif"
                    fontSize={11}
                    fontWeight={600}
                    fill="#0f2540"
                  >
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}