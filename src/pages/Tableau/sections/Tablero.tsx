import { SectionHeader } from '../../../components/content';
import { Dashboard } from './charts';

const KPIS = [
  {
    label: 'Costo mensual',
    display: '21.284,5',
    detail: 'Suma del costo de los 100 recursos, en USD.',
  },
  {
    label: 'Costo anual estimado',
    display: '255.414',
    detail: 'El campo calculado: el mensual multiplicado por 12.',
  },
  {
    label: 'Recursos',
    display: '100',
    detail: 'Filas del inventario. Una fila, un recurso.',
  },
  {
    label: 'Recursos críticos',
    display: '19',
    detail: 'Conteo filtrado por criticidad crítica.',
  },
];

export function Tablero() {
  return (
    <section id="tablero" className="scroll-mt-20 border-t border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="03"
          title="El tablero de costo"
          description="Las mismas hojas del libro, redibujadas con la retícula del sitio. La longitud sigue siendo la magnitud. El acento marca el máximo de cada serie."
        />

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-60">
          Cifras impresas en el libro: costo mensual 21.284,5 USD, costo anual 255.414 USD, 100
          recursos y 19 críticos.
          El pastel y la barra de criticidad no traen número en la hoja. Ahí el porcentaje es la
          proporción de las marcas, no una cifra exportada.
        </p>

        <div className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div key={kpi.label} className="swiss-figure">
              <p className="swiss-label">{kpi.label}</p>
              <p className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-black leading-none tracking-[-0.04em] text-accent tabular-nums">
                {kpi.display}
              </p>
              <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-ink-60">{kpi.detail}</p>
            </div>
          ))}
        </div>

        <figure className="mt-12 border border-ink-15 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-15 px-5 py-4">
            <span className="swiss-label">El tablero original en Tableau</span>
            <a
              href="/images/tableau/dashboard.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="swiss-source inline-flex items-center gap-1"
            >
              Ver en tamaño completo
              <i className="bx bx-external-link text-[0.9em] leading-none" aria-hidden="true" />
            </a>
          </div>
          <img
            src="/images/tableau/dashboard.jpeg"
            alt="Tablero de costo cloud construido en Tableau: costo mensual 21.284,5 USD, costo anual estimado 255.414 USD, 100 recursos y 19 críticos, con el desglose por tipo de recurso, por proveedor, por ambiente, por criticidad, por región y los recursos creados por año"
            loading="lazy"
            decoding="async"
            className="w-full"
          />
          <figcaption className="border-t border-ink-15 px-5 py-4">
            <p className="text-sm leading-relaxed text-ink-60">
              Esta es la salida del libro de Tableau, con su paleta y su retícula propias. Las
              cifras coinciden con las de los indicadores de arriba y con las de los gráficos que
              siguen, redibujados con la retícula del sitio.
            </p>
          </figcaption>
        </figure>

        <Dashboard />
      </div>
    </section>
  );
}
