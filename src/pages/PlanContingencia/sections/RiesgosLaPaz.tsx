import { useState } from 'react';
import { SectionHeader } from '../../../components/content';
import { DIAGNOSTICO_RESUMEN, RIESGOS, type RiesgoItem } from '../data/plan';

type FiltroCategoria = 'Todos' | RiesgoItem['categoria'];

const FILTROS: FiltroCategoria[] = ['Todos', 'La Paz y entorno', 'Cloud y seguridad'];

export default function RiesgosLaPaz() {
  const [filtro, setFiltro] = useState<FiltroCategoria>('Todos');

  const visibles =
    filtro === 'Todos' ? RIESGOS : RIESGOS.filter((item) => item.categoria === filtro);

  return (
    <section className="border-t border-ink bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="02"
          title="Diagnóstico y riesgos en La Paz y Multi-Cloud"
          description="Evaluación basada en el inventario técnico del área y en las amenazas operativas reales de La Paz, Bolivia."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DIAGNOSTICO_RESUMEN.map((dato) => (
            <li key={dato.etiqueta} className="swiss-cell bg-paper p-6">
              <p className="font-display text-4xl font-black tracking-tight text-accent">
                {dato.cifra}
              </p>
              <p className="mt-2 font-display text-base font-extrabold text-ink">{dato.etiqueta}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-60">{dato.detalle}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-15 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-2xl font-extrabold text-ink">
              Matriz de 14 riesgos evaluados
            </h3>
            <p className="mt-1 text-sm text-ink-60">
              Filtrá entre contexto físico/urbano en La Paz y amenazas lógicas en la nube.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar riesgos por ámbito">
            {FILTROS.map((opcion) => {
              const activo = filtro === opcion;
              return (
                <button
                  key={opcion}
                  type="button"
                  aria-pressed={activo}
                  onClick={() => setFiltro(opcion)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    activo
                      ? 'bg-ink text-paper'
                      : 'border border-ink-15 bg-paper text-ink hover:border-ink'
                  }`}
                >
                  {opcion}
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {visibles.map((item) => {
            const esMuyAlto = item.factor === 'Muy Alto';
            return (
              <li key={item.id} className="swiss-cell flex flex-col justify-between p-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-ink-40">
                      {item.categoria}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 font-mono text-xs font-semibold uppercase tracking-wider ${
                        esMuyAlto
                          ? 'bg-accent text-white'
                          : 'border border-ink-15 bg-paper text-ink'
                      }`}
                    >
                      {item.factor}
                    </span>
                  </div>
                  <h4 className="mt-3 font-display text-lg font-extrabold leading-snug text-ink">
                    {item.riesgo}
                  </h4>
                </div>
                <p className="mt-4 border-t border-ink-15 pt-3 text-sm leading-relaxed text-ink-60">
                  {item.contramedida}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
