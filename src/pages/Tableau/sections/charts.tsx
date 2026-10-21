import type { ReactNode } from 'react';
import {
  BY_PROVIDER,
  BY_REGION,
  BY_TYPE,
  BY_YEAR,
  ENVIRONMENTS,
  PIE_COLOR,
  PIE_ORDER,
  PROVIDER_SCALE,
  REGION_SCALE,
  SEGMENT_COLOR,
  TYPE_SCALE,
  formatShare,
  maxValue,
  type CostRow,
  type EnvironmentBar,
} from '../data';

function ChartCard({
  title,
  children,
  note,
}: {
  title: string;
  children: ReactNode;
  note?: string;
}) {
  return (
    <article className="flex h-full flex-col border border-ink-15 bg-surface p-5 sm:p-6">
      <h3 className="font-display text-base font-bold leading-tight tracking-[-0.02em] text-ink">
        {title}
      </h3>
      <div className="mt-5 flex min-h-0 flex-1 flex-col">{children}</div>
      {note ? <p className="mt-4 text-xs leading-relaxed text-ink-40">{note}</p> : null}
    </article>
  );
}

function HorizontalBars({ rows, scale }: { rows: CostRow[]; scale: number }) {
  const peak = maxValue(rows);
  return (
    <figure>
      <ul className="space-y-2.5">
        {rows.map((row) => {
          const width = `${(row.value / scale) * 100}%`;
          const peakBar = row.value === peak;
          return (
            <li key={row.label}>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-3">
                <span className="text-sm leading-tight text-ink">{row.label}</span>
                <span className="font-display text-sm font-bold tabular-nums text-ink">{row.display}</span>
              </div>
              <div className="mt-1 h-2 bg-ink-15" aria-hidden="true">
                <span className={`block h-full ${peakBar ? 'bg-accent' : 'bg-ink'}`} style={{ width }} />
              </div>
            </li>
          );
        })}
      </ul>
      <figcaption className="mt-3 flex items-baseline justify-between">
        <span className="swiss-label">0</span>
        <span className="swiss-label">
          {scale.toLocaleString('es-AR')} USD
        </span>
      </figcaption>
    </figure>
  );
}

function ProviderColumns() {
  const ticks = [10000, 8000, 6000, 4000, 2000, 0];
  const peak = maxValue(BY_PROVIDER);
  return (
    <figure>
      <div className="grid grid-cols-[2.75rem_1fr] gap-x-2">
        <div className="flex h-44 flex-col justify-between" aria-hidden="true">
          {ticks.map((tick) => (
            <span key={tick} className="swiss-label leading-none">
              {tick === 0 ? '0' : `${tick / 1000}K`}
            </span>
          ))}
        </div>
        <div className="flex h-44 items-end gap-4 border-b border-l border-ink-15 pl-3">
          {BY_PROVIDER.map((row) => (
            <div key={row.label} className="relative h-full min-w-0 flex-1">
              <div
                className={`absolute inset-x-0 bottom-0 ${row.value === peak ? 'bg-accent' : 'bg-ink'}`}
                style={{ height: `${(row.value / PROVIDER_SCALE) * 100}%` }}
                aria-hidden="true"
              >
                <p className="absolute -top-4 left-0 font-display text-sm font-bold tabular-nums leading-none text-ink">
                  {row.display}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div />
        <ul className="mt-2 grid grid-cols-3 gap-4 pl-3">
          {BY_PROVIDER.map((row) => (
            <li key={row.label} className="text-sm font-semibold text-ink">
              {row.label}
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="sr-only">
        Costo mensual por proveedor: AWS {BY_PROVIDER[0].display}, Azure {BY_PROVIDER[1].display}, GCP{' '}
        {BY_PROVIDER[2].display} USD.
      </figcaption>
    </figure>
  );
}

function piePath(weight: number, total: number, start: number): { d: string; end: number } {
  const sweep = (weight / total) * Math.PI * 2;
  const end = start + sweep;
  const r = 78;
  const cx = 100;
  const cy = 100;
  const x1 = cx + r * Math.cos(start);
  const y1 = cy + r * Math.sin(start);
  const x2 = cx + r * Math.cos(end);
  const y2 = cy + r * Math.sin(end);
  const large = sweep > Math.PI ? 1 : 0;
  const d = `M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;
  return { d, end };
}

function pieSlices() {
  const total = ENVIRONMENTS.reduce((sum, env) => sum + env.weight, 0);
  const weights = PIE_ORDER.map(
    (label) => ENVIRONMENTS.find((item) => item.label === label)?.weight ?? 0,
  );
  return PIE_ORDER.map((label, index) => {
    const start = weights.slice(0, index).reduce((sum, weight) => sum + (weight / total) * Math.PI * 2, -Math.PI / 2);
    const weight = weights[index];
    return { label, weight, total, d: piePath(weight, total, start).d };
  });
}

function EnvironmentPie() {
  const slices = pieSlices();
  const total = slices[0]?.total ?? 1;

  return (
    <figure className="flex h-full min-h-80 flex-col justify-between gap-8">
      <div className="flex flex-1 items-center">
        <svg viewBox="0 0 200 200" className="aspect-square h-full max-h-72 w-auto max-w-full" role="img" aria-labelledby="pie-title">
          <title id="pie-title">Participación del costo mensual por ambiente</title>
          {slices.map((slice) => (
            <path
              key={slice.label}
              d={slice.d}
              fill={PIE_COLOR[slice.label]}
              stroke="#ffffff"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>
      <ul className="w-full">
        {slices.map((slice) => (
          <li key={slice.label} className="flex items-center gap-3 border-t border-ink-15 py-2.5 first:border-t-0">
            <span className="inline-block h-3 w-3 shrink-0" style={{ background: PIE_COLOR[slice.label] }} aria-hidden="true" />
            <span className="text-sm text-ink">{slice.label}</span>
            <span className="ml-auto font-display text-sm font-bold tabular-nums text-ink">
              {formatShare(slice.weight, total)}%
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="sr-only">
        Proporción medida sobre las marcas del pastel, porque la hoja no imprime la cifra.
      </figcaption>
    </figure>
  );
}

function CriticalityStack() {
  const maxWeight = ENVIRONMENTS.reduce((max, env) => (env.weight > max ? env.weight : max), 0);
  const month = ENVIRONMENTS.reduce((sum, env) => sum + env.weight, 0);
  const legend = (['Alta', 'Baja', 'Crítica', 'Media'] as const);

  return (
    <figure>
      <ul className="flex flex-wrap gap-x-4 gap-y-2">
        {legend.map((label) => (
          <li key={label} className="flex items-center gap-2">
            <span className="inline-block h-3 w-3" style={{ background: SEGMENT_COLOR[label] }} aria-hidden="true" />
            <span className="swiss-label text-ink">{label}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex h-56 items-end gap-6 border-b border-ink-15">
        {ENVIRONMENTS.map((env) => (
          <div key={env.label} className="flex h-full min-w-0 flex-1 flex-col justify-end">
            <div
              className="flex w-full flex-col"
              style={{ height: `${(env.weight / maxWeight) * 100}%` }}
              aria-hidden="true"
            >
              {env.segments.map((segment) => (
                <div
                  key={segment.label}
                  style={{
                    flexGrow: segment.weight,
                    flexBasis: 0,
                    background: SEGMENT_COLOR[segment.label],
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <ul className="mt-2 grid grid-cols-3 gap-6">
        {ENVIRONMENTS.map((env) => (
          <li key={env.label}>
            <p className="text-sm font-semibold leading-tight text-ink">{env.label}</p>
            <p className="mt-1 font-display text-sm font-bold tabular-nums text-accent">
              {formatShare(env.weight, month)}%
            </p>
          </li>
        ))}
      </ul>
      <figcaption className="sr-only">
        {ENVIRONMENTS.map((env) => describeEnvironment(env, month)).join(' ')}
      </figcaption>
    </figure>
  );
}

function describeEnvironment(env: EnvironmentBar, month: number): string {
  const parts = env.segments
    .map((segment) => `${segment.label} ${formatShare(segment.weight, env.weight)}%`)
    .join(', ');
  return `${env.label}, ${formatShare(env.weight, month)}% del mes: ${parts}.`;
}

function yearX(index: number) {
  return 8 + (index / (BY_YEAR.length - 1)) * 84;
}

function YearLine() {
  const ticks = [0, 5, 10, 15, 20, 25];
  const linePoints = BY_YEAR.map((_, index) => `${yearX(index)},2`).join(' ');

  return (
    <figure className="flex h-full min-h-[26rem] flex-col">
      <div className="flex min-h-0 flex-1 gap-2 pt-6">
        <div className="flex w-7 shrink-0 flex-col justify-between" aria-hidden="true">
          {[...ticks].reverse().map((tick) => (
            <span key={tick} className="swiss-label leading-none">
              {tick}
            </span>
          ))}
        </div>
        <div className="relative min-h-0 flex-1 border-b border-l border-ink-15">
          {ticks.map((tick) => (
            <div
              key={tick}
              className="absolute right-0 left-0 border-t border-ink-15"
              style={{ bottom: `${(tick / 25) * 100}%` }}
              aria-hidden="true"
            />
          ))}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            role="img"
            aria-labelledby="year-title"
          >
            <title id="year-title">Recursos creados por año: 25 en 2023, 2024, 2025 y 2026</title>
            <polyline
              points={linePoints}
              fill="none"
              stroke="#111111"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {BY_YEAR.map((point, index) => (
            <div
              key={point.year}
              className="absolute z-10"
              style={{
                left: `${yearX(index)}%`,
                top: '2%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 font-display text-xs font-bold tabular-nums text-ink">
                {point.count}
              </span>
              <span className="block h-2.5 w-2.5 rounded-full bg-accent" />
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-2 ml-9 h-5">
        {BY_YEAR.map((point, index) => (
          <span
            key={point.year}
            className="absolute -translate-x-1/2 text-xs text-ink-60"
            style={{ left: `${yearX(index)}%` }}
          >
            {point.year}
          </span>
        ))}
      </div>
    </figure>
  );
}

export function Dashboard() {
  return (
    <div className="mt-12 grid gap-4 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <ChartCard
          title="Costo mensual por tipo de recurso"
          note="Orden alfabético, como en la hoja. El acento marca el máximo."
        >
          <HorizontalBars rows={BY_TYPE} scale={TYPE_SCALE} />
        </ChartCard>
      </div>
      <div className="lg:col-span-4">
        <ChartCard title="Costo mensual por proveedor" note="Eje hasta 10.000 USD.">
          <ProviderColumns />
        </ChartCard>
      </div>
      <div className="lg:col-span-3">
        <ChartCard
          title="Costo mensual por ambiente"
          note="La hoja no imprime la cifra. El porcentaje sale de la proporción de las marcas."
        >
          <EnvironmentPie />
        </ChartCard>
      </div>
      <div className="lg:col-span-4">
        <ChartCard
          title="Costo por ambiente y criticidad"
          note="La altura es la parte del mes. Dentro de la barra, cada franja es una criticidad."
        >
          <CriticalityStack />
        </ChartCard>
      </div>
      <div className="lg:col-span-5">
        <ChartCard
          title="Costo mensual por región"
          note="Orden alfabético. El eje llega a 3.500 USD."
        >
          <HorizontalBars rows={BY_REGION} scale={REGION_SCALE} />
        </ChartCard>
      </div>
      <div className="lg:col-span-3">
        <ChartCard title="Recursos creados por año" note="La línea cuenta recursos, no dólares.">
          <YearLine />
        </ChartCard>
      </div>
    </div>
  );
}
