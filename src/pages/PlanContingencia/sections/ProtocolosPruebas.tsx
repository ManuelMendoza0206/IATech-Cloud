import { useState } from 'react';
import { SectionHeader } from '../../../components/content';
import { CASOS_EMERGENCIA, METODOS_PRUEBA, SIMULACROS, type CasoEmergencia } from '../data/plan';

type TipoCaso = CasoEmergencia['tipo'];

export default function ProtocolosPruebas() {
  const [tipo, setTipo] = useState<TipoCaso>('Física (La Paz)');

  const casosFiltrados = CASOS_EMERGENCIA.filter((c) => c.tipo === tipo);

  return (
    <section className="border-t border-ink bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="04"
          title="Manual de acción y cronograma de simulacros"
          description="Procedimientos paso a paso para emergencias en La Paz y fallas cloud, junto al plan de pruebas para cerrar brechas del inventario."
        />

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-display text-2xl font-extrabold text-ink">
            Casos de emergencia cubiertos
          </h3>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Tipo de emergencia">
            {(['Física (La Paz)', 'Lógica y Cloud'] as TipoCaso[]).map((opcion) => {
              const activo = tipo === opcion;
              return (
                <button
                  key={opcion}
                  type="button"
                  aria-pressed={activo}
                  onClick={() => setTipo(opcion)}
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

        <ul className="mt-8 grid gap-6 lg:grid-cols-3">
          {casosFiltrados.map((caso, idx) => (
            <li key={caso.id} className="swiss-cell flex flex-col p-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                Caso {String(idx + 1).padStart(2, '0')} · {caso.tipo}
              </span>
              <h4 className="mt-3 font-display text-lg font-extrabold leading-snug text-ink">
                {caso.titulo}
              </h4>
              <ol className="mt-5 space-y-3 border-t border-ink-15 pt-4">
                {caso.pasos.map((paso, pIdx) => (
                  <li key={paso} className="flex items-start gap-3 text-sm leading-relaxed text-ink-60">
                    <span className="font-mono text-xs font-bold text-accent">
                      {pIdx + 1}.
                    </span>
                    <span>{paso}</span>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-ink-15 pt-12">
          <p className="swiss-label text-accent">Verificación periódica</p>
          <h3 className="mt-3 font-display text-2xl font-extrabold text-ink">
            Métodos de prueba y cronograma 2026 a 2027
          </h3>

          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {METODOS_PRUEBA.map((metodo) => (
              <li key={metodo.titulo} className="swiss-cell bg-paper p-5">
                <h4 className="font-display text-base font-extrabold text-ink">{metodo.titulo}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-60">{metodo.texto}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 overflow-x-auto border border-ink-15 bg-paper">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink bg-ink text-paper">
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider">Escenario</th>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider">Riesgo</th>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider">Método</th>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider">Fecha</th>
                  <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider">Objetivo</th>
                </tr>
              </thead>
              <tbody>
                {SIMULACROS.map((sim) => (
                  <tr key={sim.escenario} className="border-b border-ink-15 last:border-b-0">
                    <td className="px-4 py-3.5 font-display font-bold text-ink">{sim.escenario}</td>
                    <td className="px-4 py-3.5 text-ink-60">{sim.riesgo}</td>
                    <td className="px-4 py-3.5 font-mono text-xs text-ink">{sim.metodo}</td>
                    <td className="px-4 py-3.5 font-mono text-xs font-semibold text-accent">
                      {sim.fecha}
                    </td>
                    <td className="px-4 py-3.5 text-ink-60">{sim.objetivo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
