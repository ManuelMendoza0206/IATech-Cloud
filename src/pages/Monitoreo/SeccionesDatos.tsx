import { useEffect, useMemo, useState } from 'react';
import { SectionHeader, Source, Sources } from '../../components/content';
import { SOURCES_BY_ID } from '../../data/sources';

const limpiar = (t: string) =>
  t
    .replace(/<[^>]*>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

// Quita correos de los mensajes antes de mostrarlos en la página.
const sinDatosPersonales = (t: string) => t.replace(/[\w.+-]+@[\w-]+\.[\w.-]+/g, '[correo]');

const fuentesPrtg = ['prtg-home', 'prtg-faq'].map((id) => ({
  label: SOURCES_BY_ID[id].short,
  href: SOURCES_BY_ID[id].href,
}));

// ---------- 1. Escalabilidad (proyección hipotética) ----------

// Niveles de licencia publicados por Paessler (sensores máximos).
const NIVELES = [
  { sensores: 500, etiqueta: 'PRTG 500' },
  { sensores: 1000, etiqueta: 'PRTG 1000' },
  { sensores: 2500, etiqueta: 'PRTG 2500' },
];

const ANIOS = [2026, 2027, 2028, 2029, 2030];
const INICIO = 9; // sensores actuales reales

// Escenarios hipotéticos: sensores añadidos por año. No son pronósticos.
const ESCENARIOS = [
  { nombre: 'Conservador', crecimiento: 20, clase: 'stroke-ink-40' },
  { nombre: 'Esperado', crecimiento: 80, clase: 'stroke-ink' },
  { nombre: 'Acelerado', crecimiento: 250, clase: 'stroke-accent' },
];

const W = 800;
const H = 360;
const PAD = { l: 64, r: 150, t: 24, b: 40 };
const YMAX = 3000;

export function Escalabilidad() {
  const x = (i: number) => PAD.l + (i / (ANIOS.length - 1)) * (W - PAD.l - PAD.r);
  const y = (v: number) => PAD.t + (1 - Math.min(v, YMAX) / YMAX) * (H - PAD.t - PAD.b);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
      <SectionHeader
        number="03"
        title="Escalabilidad en el tiempo"
        description="Cómo podría crecer el monitoreo a medida que se suman servicios. Los escenarios parten de los sensores reales de hoy y cada línea es una hipótesis distinta."
      />

      <div className="mt-12 border border-ink-15 bg-paper p-4 sm:p-8">
        <div className="mb-6 flex flex-wrap gap-6">
          {ESCENARIOS.map((e) => (
            <span key={e.nombre} className="swiss-label flex items-center gap-2 text-ink-60">
              <span className={`inline-block h-0.5 w-8 bg-current ${e.clase.replace('stroke-', 'text-')}`} />
              {e.nombre} · +{e.crecimiento}/año
            </span>
          ))}
          <span className="swiss-label text-ink-60">Proyección hipotética</span>
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Proyección de sensores por escenario">
          {[0, 500, 1000, 1500, 2000, 2500, 3000].map((v) => (
            <g key={v}>
              <line x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} stroke="currentColor" strokeOpacity={0.12} className="text-ink" />
              <text x={PAD.l - 10} y={y(v) + 4} textAnchor="end" fontSize="14" fill="currentColor" className="text-ink-60">
                {v.toLocaleString('es-PE')}
              </text>
            </g>
          ))}

          {ANIOS.map((a, i) => (
            <text key={a} x={x(i)} y={H - 14} textAnchor="middle" fontSize="14" fill="currentColor" className="text-ink-60">
              {a}
            </text>
          ))}

          {NIVELES.map((n) => (
            <g key={n.sensores}>
              <line x1={PAD.l} x2={W - PAD.r} y1={y(n.sensores)} y2={y(n.sensores)} stroke="currentColor" strokeDasharray="6 6" className="text-accent" strokeOpacity={0.6} />
              <text x={PAD.l + 8} y={y(n.sensores) - 8} fontSize="14" fontWeight="600" fill="currentColor" className="text-accent">
                {n.etiqueta}
              </text>
            </g>
          ))}

          {ESCENARIOS.map((e) => {
            const puntos = ANIOS.map((_, i) => INICIO + e.crecimiento * i);
            const d = puntos.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
            return (
              <g key={e.nombre}>
                <path d={d} fill="none" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={`${e.clase} trazo-escala`} pathLength={1} />
                <circle cx={x(ANIOS.length - 1)} cy={y(puntos[puntos.length - 1])} r={5} fill="currentColor" className={e.clase.replace('stroke-', 'text-')} />
                <text x={x(ANIOS.length - 1) + 10} y={y(puntos[puntos.length - 1]) + 4} fontSize="14" fill="currentColor" className={e.clase.replace('stroke-', 'text-')}>
                  {puntos[puntos.length - 1].toLocaleString('es-PE')}
                </text>
              </g>
            );
          })}
        </svg>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-60">
          Las líneas de referencia son los límites de sensores de cada licencia de PRTG. Cuando un escenario cruza una
          línea, hay que pasar al siguiente nivel. Los números de crecimiento son supuestos para la discusión.
        </p>
      </div>

      <Sources>
        {fuentesPrtg.map((f) => (
          <li key={f.href}>
            <Source label={f.label} href={f.href} />
          </li>
        ))}
      </Sources>

      <style>{`
        @keyframes trazo-escala-in { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
        .trazo-escala { stroke-dasharray: 1; stroke-dashoffset: 1; animation: trazo-escala-in 1.8s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) { .trazo-escala { animation: none; stroke-dashoffset: 0; } }
      `}</style>
    </div>
  );
}

// ---------- 2. Eventos recientes (datos reales) ----------

type Mensaje = { datetime: string; message: string; sensor?: string };

export function Eventos() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controlador = new AbortController();
    async function cargar() {
      try {
        const res = await fetch(
          '/prtg-api/table.json?content=messages&output=json&columns=datetime,message,sensor&count=8',
          { signal: controlador.signal },
        );
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();
        setMensajes(data.messages ?? []);
        setError(false);
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') return;
        setError(true);
      }
    }
    cargar();
    const id = window.setInterval(cargar, 30000);
    return () => {
      controlador.abort();
      window.clearInterval(id);
    };
  }, []);

  const lista = useMemo(
    () =>
      mensajes.map((m) => ({
        fecha: m.datetime,
        sensor: m.sensor ? limpiar(m.sensor) : '',
        texto: sinDatosPersonales(limpiar(m.message)).slice(0, 140),
      })),
    [mensajes],
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
      <SectionHeader
        number="04"
        title="Eventos recientes"
        description="Últimos mensajes registrados por PRTG. Los correos se ocultan en esta página."
      />

      <div className="mt-12">
        {error && <p className="border-l-2 border-accent pl-5 text-ink">No se pudieron cargar los eventos de PRTG.</p>}
        {!error && lista.length === 0 && <p className="swiss-label text-ink-60">Cargando eventos…</p>}
        <ol className="relative border-l border-ink-15 pl-8">
          {lista.map((e, i) => (
            <li key={`${e.fecha}-${i}`} className="relative pb-8 last:pb-0">
              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-ink" />
              <p className="swiss-label text-ink-60">{e.fecha}</p>
              {e.sensor && <p className="mt-1 text-sm font-semibold text-ink">{e.sensor}</p>}
              <p className="mt-1 text-sm leading-relaxed text-ink-60">{e.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

// ---------- 3. Catálogo de sensores (tipos reales) ----------

type SensorTipo = { type?: string; type_raw?: string; sensor: string; status_raw: number };

export function Catalogo({ sensores }: { sensores: SensorTipo[] }) {
  const tipos = new Map<string, { nombre: string; cuenta: number; ejemplo: string }>();
  sensores.forEach((s) => {
    const clave = s.type_raw ?? s.type ?? 'desconocido';
    const actual = tipos.get(clave);
    if (actual) actual.cuenta += 1;
    else tipos.set(clave, { nombre: limpiar(s.type ?? clave), cuenta: 1, ejemplo: limpiar(s.sensor) });
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
      <SectionHeader
        number="05"
        title="Catálogo de sensores"
        description="Tipos de sensor que están activos en este PRTG. Cada tipo mide un aspecto distinto del servicio o del equipo."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[...tipos.entries()].map(([clave, t]) => (
          <li key={clave} className="border border-ink-15 bg-paper p-6">
            <p className="swiss-label text-accent">{t.cuenta} {t.cuenta === 1 ? 'sensor' : 'sensores'}</p>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">{t.nombre}</h3>
            <p className="mt-2 text-sm text-ink-60">Ejemplo: {t.ejemplo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
