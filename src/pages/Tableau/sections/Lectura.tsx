import { Link } from 'react-router-dom';
import { SectionHeader, Sources, SourceList } from '../../../components/content';
import {
  BY_PROVIDER,
  BY_REGION,
  BY_TYPE,
  ENVIRONMENTS,
  MONTHLY,
  formatShare,
  maxValue,
} from '../data';

const RANKED_TYPES = [...BY_TYPE].sort((a, b) => b.value - a.value);

const SOURCES = [
  {
    label: 'Tableau Help · dimensiones y medidas',
    href: 'https://help.tableau.com/current/pro/desktop/en-us/datafields_typesandroles.htm',
  },
  {
    label: 'Tableau Help · armar un dashboard',
    href: 'https://help.tableau.com/current/pro/desktop/en-us/dashboards_create.htm',
  },
];

export function Lectura() {
  const monthWeight = ENVIRONMENTS.reduce((sum, env) => sum + env.weight, 0);
  const topTypes = RANKED_TYPES.slice(0, 3);
  const topTypeShare = topTypes.reduce((sum, row) => sum + row.value, 0);
  const regionPeak = BY_REGION.find((row) => row.value === maxValue(BY_REGION));
  const regionFloor = BY_REGION.reduce((min, row) => (row.value < min.value ? row : min));

  return (
    <section id="lectura" className="scroll-mt-20 border-t border-ink bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="04"
          title="Cómo se lee el tablero"
          description="Se entra por los cuatro números y se baja a la hoja que los explica. El costo responde dónde se va el mes. La línea responde otra cosa: cuántos recursos entraron."
        />

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <article className="swiss-figure">
            <p className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-none tracking-[-0.04em] text-accent tabular-nums">
              {formatShare(topTypeShare, MONTHLY)}%
            </p>
            <p className="swiss-label mt-3">Tres tipos de recurso</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-60">
              Base de datos, contenedores y máquinas virtuales suman {topTypes.map((row) => row.display).join(', ')}{' '}
              USD. El serverless, en la otra punta, es el tipo más barato: 268,65.
            </p>
          </article>
          <article className="swiss-figure">
            <p className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-none tracking-[-0.04em] text-accent tabular-nums">
              {formatShare(BY_PROVIDER[0].value, MONTHLY)}%
            </p>
            <p className="swiss-label mt-3">AWS sobre el mes</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-60">
              AWS lleva {BY_PROVIDER[0].display}. Azure queda en {formatShare(BY_PROVIDER[1].value, MONTHLY)}% y GCP
              en {formatShare(BY_PROVIDER[2].value, MONTHLY)}%. Ningún proveedor está solo.
            </p>
          </article>
          <article className="swiss-figure">
            <p className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-none tracking-[-0.04em] text-accent tabular-nums">
              {formatShare(ENVIRONMENTS[1].weight, monthWeight)}%
            </p>
            <p className="swiss-label mt-3">Producción</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-60">
              Es el ambiente que más pesa. Desarrollo queda en{' '}
              {formatShare(ENVIRONMENTS[0].weight, monthWeight)}% y QA/Pruebas en{' '}
              {formatShare(ENVIRONMENTS[2].weight, monthWeight)}%. La franja de criticidad baja casi no mueve el costo.
            </p>
          </article>
          <article className="swiss-figure">
            <p className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-none tracking-[-0.04em] text-accent tabular-nums">
              25
            </p>
            <p className="swiss-label mt-3">Altas por año</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-60">
              2023, 2024, 2025 y 2026 incorporan la misma cantidad. El gasto del mes no viene de un
              año de alta explosiva: viene de la mezcla de tipos.
            </p>
          </article>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink sm:text-3xl">
            Tipo de recurso, de mayor a menor
          </h3>
          <p className="mt-4 max-w-3xl text-ink-60">
            En la hoja el orden es alfabético, así que la comparación se hace por la longitud. Acá
            está la misma suma, ordenada por magnitud, con su parte del mes.
          </p>
          <div className="mt-8 overflow-x-auto border border-ink-15">
            <table className="w-full min-w-[32rem] border-collapse text-left">
              <caption className="sr-only">Costo mensual por tipo de recurso, ordenado de mayor a menor</caption>
              <thead>
                <tr className="bg-ink text-paper">
                  <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                    Tipo
                  </th>
                  <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                    USD / mes
                  </th>
                  <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                    Parte del mes
                  </th>
                </tr>
              </thead>
              <tbody>
                {RANKED_TYPES.map((row) => (
                  <tr key={row.label} className="border-b border-ink-15 bg-surface last:border-0 even:bg-paper">
                    <th scope="row" className="px-4 py-4 text-sm font-semibold text-ink sm:px-6">
                      {row.label}
                    </th>
                    <td className="px-4 py-4 font-display text-sm font-bold tabular-nums text-ink sm:px-6">
                      {row.display}
                    </td>
                    <td className="px-4 py-4 text-sm tabular-nums text-ink-60 sm:px-6">
                      {formatShare(row.value, MONTHLY)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 overflow-x-auto border border-ink-15">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <caption className="border-b border-ink-15 px-4 py-4 text-left sm:px-6">
              <span className="font-display text-base font-bold text-ink">
                Criticidad dentro de cada ambiente
              </span>
              <span className="mt-1 block text-sm font-normal text-ink-60">
                Porcentaje de la barra, medido sobre las marcas. La última columna es la parte de
                ese ambiente en el mes.
              </span>
            </caption>
            <thead>
              <tr className="bg-ink text-paper">
                {['Ambiente', 'Alta', 'Baja', 'Crítica', 'Media', 'Del mes'].map((heading) => (
                  <th key={heading} scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ENVIRONMENTS.map((env) => {
                const segment = (label: string) =>
                  env.segments.find((item) => item.label === label)?.weight ?? 0;
                return (
                  <tr key={env.label} className="border-b border-ink-15 bg-surface last:border-0 even:bg-paper">
                    <th scope="row" className="px-4 py-4 text-sm font-semibold text-ink sm:px-6">
                      {env.label}
                    </th>
                    {(['Alta', 'Baja', 'Crítica', 'Media'] as const).map((label) => (
                      <td key={label} className="px-4 py-4 text-sm tabular-nums text-ink-60 sm:px-6">
                        {formatShare(segment(label), env.weight)}%
                      </td>
                    ))}
                    <td className="px-4 py-4 font-display text-sm font-bold tabular-nums text-ink sm:px-6">
                      {formatShare(env.weight, monthWeight)}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-60">
          {regionPeak?.label} es la región más cara ({regionPeak?.display} USD) y {regionFloor.label}{' '}
          la más baja ({regionFloor.display}). Son conteos distintos de los 19 recursos críticos:
          el KPI cuenta filas con criticidad crítica, y la barra apilada reparte el costo. Un
          recurso crítico barato y uno caro no pesan lo mismo.
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-60">
          Esta lectura es la versión operativa de FinOps en el área: el costo como señal de
          arquitectura. El marco y las cifras de mercado están en{' '}
          <Link to="/gestion-tecnologia#finops" className="swiss-source">
            Gestión de Tecnología
          </Link>
          .
        </p>

        <Sources>
          <SourceList items={SOURCES} />
        </Sources>
      </div>
    </section>
  );
}
