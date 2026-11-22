import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { SectionHeader, Source, Sources } from '../../components/content';
import { SOURCES_BY_ID } from '../../data/sources';
import { reduceMotion } from './animaciones';

type SensorBase = {
  objid: number;
  sensor: string;
  device: string;
  group?: string;
  status_raw: number;
  uptime_raw?: number;
  uptimetime?: string;
};

const fuentesPrtg = ['prtg-home', 'prtg-faq'].map((id) => ({
  label: SOURCES_BY_ID[id].short,
  href: SOURCES_BY_ID[id].href,
}));

const limpiar = (t: string) => t.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

// ---------- 1. Cómo funciona ----------

const NODOS = [
  { titulo: 'Dispositivos', sub: 'Servidores, redes, servicios' },
  { titulo: 'Sonda', sub: 'Recoge datos localmente' },
  { titulo: 'Servidor central', sub: 'Guarda y evalúa sensores' },
  { titulo: 'Consola', sub: 'Esta página y PRTG web' },
];

export function ComoFunciona() {
  const puntosRef = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    if (reduceMotion()) return;
    const anims = puntosRef.current.map((c, i) =>
      animate(c, {
        translateX: [0, 200],
        opacity: [0, 1, 1, 0],
        duration: 2200,
        ease: 'linear',
        loop: true,
        delay: i * 700,
      }),
    );
    return () => anims.forEach((a) => a.pause());
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
      <SectionHeader
        number="00"
        title="Cómo funciona"
        description="Los datos viajan en una sola dirección: de lo que se mide a la consola donde se decide. Cada paso tiene un papel claro."
      />

      <div className="mt-12 border border-ink-15 bg-paper p-6 sm:p-10">
        <svg viewBox="0 0 800 220" className="h-auto w-full" role="img" aria-label="Flujo de datos de PRTG">
          {NODOS.map((n, i) => {
            const x = 20 + i * 200;
            return (
              <g key={n.titulo}>
                <rect x={x} y={60} width={160} height={100} fill="none" stroke="currentColor" strokeWidth={1.5} className="text-ink" />
                <rect x={x} y={60} width={160} height={6} className="text-accent" fill="currentColor" />
                <text x={x + 14} y={100} fontSize="15" fontWeight="700" fill="currentColor" className="text-ink">
                  {n.titulo}
                </text>
                <text x={x + 14} y={124} fontSize="11" fill="currentColor" className="text-ink-60">
                  {n.sub}
                </text>
                {i < NODOS.length - 1 && (
                  <line x1={x + 160} x2={x + 200} y1={110} y2={110} stroke="currentColor" strokeWidth={1.5} strokeDasharray="4 4" className="text-ink-40" />
                )}
              </g>
            );
          })}
          {NODOS.slice(0, -1).map((_, i) => (
            <circle
              key={`p${i}`}
              ref={(el) => {
                if (el) puntosRef.current[i] = el;
              }}
              cx={180 + i * 200}
              cy={110}
              r={5}
              fill="currentColor"
              className="text-accent"
              style={{ opacity: 0 }}
            />
          ))}
        </svg>
        <p className="mt-6 text-sm leading-relaxed text-ink-60">
          Ilustración conceptual del flujo, no de tu red. Las sondas pueden estar en otras ubicaciones y envían
          la información al servidor central de forma cifrada.
        </p>
      </div>

      <Sources>
        {fuentesPrtg.map((f) => (
          <li key={f.href}>
            <Source label={f.label} href={f.href} />
          </li>
        ))}
      </Sources>
    </div>
  );
}

// ---------- 2. Disponibilidad (datos reales) ----------

export function Disponibilidad({ sensores }: { sensores: SensorBase[] }) {
  const conDato = sensores.filter((s) => typeof s.uptime_raw === 'number');
  const promedio =
    conDato.length > 0 ? conDato.reduce((acc, s) => acc + (s.uptime_raw ?? 0) / 10000, 0) / conDato.length : null;

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
      <SectionHeader
        number="01"
        title="Disponibilidad por sensor"
        description="Porcentaje de tiempo que cada sensor estuvo respondiendo desde que PRTG lo empezó a monitorear."
      />

      <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="shrink-0 border-t border-ink pt-6 lg:w-72">
          <p className="swiss-label text-ink-60">Promedio general</p>
          <p className="mt-4 whitespace-nowrap text-6xl font-black leading-none tracking-tight text-ink sm:text-7xl">
            {promedio === null ? '—' : `${promedio.toFixed(2)}`}
            <span className="ml-1 text-3xl text-accent sm:text-4xl">%</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-60">
            Calculado con los sensores que reporta PRTG en este momento.
          </p>
        </div>

        <ul className="min-w-0 flex-1 space-y-5">
          {conDato.map((s) => {
            const pct = (s.uptime_raw ?? 0) / 10000;
            const bajo = pct < 99;
            return (
              <li key={s.objid}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-ink">{limpiar(s.sensor)}</span>
                  <span className={`swiss-label ${bajo ? 'text-accent' : 'text-ink'}`}>
                    {pct.toFixed(2)} %
                  </span>
                </div>
                <div className="mt-2 h-2 w-full bg-ink-15">
                  <div
                    className={`h-full ${bajo ? 'bg-accent' : 'bg-ink'}`}
                    style={{ width: `${Math.min(100, Math.max(0, pct))}%`, transition: 'width 1.2s cubic-bezier(.16,1,.3,1)' }}
                  />
                </div>
                {s.uptimetime && (
                  <p className="mt-1 text-xs text-ink-60">Tiempo activo: {limpiar(s.uptimetime)}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

// ---------- 3. Mapa de infraestructura (datos reales) ----------

function colorEstado(statusRaw: number): string {
  if ([5, 13, 14].includes(statusRaw)) return 'bg-accent';
  if ([7, 8, 9, 11, 12].includes(statusRaw)) return 'bg-ink-40';
  return 'bg-ink';
}

export function MapaInfraestructura({ sensores }: { sensores: SensorBase[] }) {
  const grupos = new Map<string, Map<string, SensorBase[]>>();
  sensores.forEach((s) => {
    const g = limpiar(s.group ?? 'Sin grupo');
    const d = limpiar(s.device);
    if (!grupos.has(g)) grupos.set(g, new Map());
    const dispositivos = grupos.get(g)!;
    if (!dispositivos.has(d)) dispositivos.set(d, []);
    dispositivos.get(d)!.push(s);
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
      <SectionHeader
        number="02"
        title="Mapa de infraestructura"
        description="Cómo están organizados los dispositivos en PRTG, por grupo. Cada punto es un sensor: rojo si está en fallo, gris si está pausado."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {[...grupos.entries()].map(([grupo, dispositivos]) => (
          <div key={grupo} className="border border-ink-15 bg-paper p-6">
            <p className="swiss-label text-accent">{grupo}</p>
            <ul className="mt-5 space-y-4">
              {[...dispositivos.entries()].map(([dispositivo, lista]) => (
                <li key={dispositivo}>
                  <p className="text-sm font-semibold text-ink">{dispositivo}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {lista.map((s) => (
                      <span
                        key={s.objid}
                        title={limpiar(s.sensor)}
                        className={`h-3 w-3 rounded-full ${colorEstado(s.status_raw)}`}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
