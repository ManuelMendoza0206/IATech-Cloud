import { Link } from 'react-router-dom';
import { Reveal } from '../../components/ui/Reveal';
import { Definicion, Lectura, Modelo, Tablero } from './sections';

export default function Tableau() {
  return (
    <div>
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid py-20 sm:py-28">
            <div className="col-span-full sm:col-span-8">
              <Reveal asHero>
                <span className="swiss-label hero-item flex items-center gap-3 text-accent">
                  <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
                  Visualización de datos
                </span>

                <h1 className="swiss-display hero-item mt-8 text-ink">
                  Table<span className="text-accent">au</span>
                </h1>

                <p className="hero-item mt-10 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  El libro de trabajo del inventario cloud: qué es una hoja, cómo se agrega un
                  costo y el tablero que muestra dónde se va el mes.
                </p>

                <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
                  <a
                    href="#definicion"
                    className="swiss-btn swiss-btn-primary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                  >
                    Ver la teoría
                    <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
                  </a>
                  <a
                    href="#tablero"
                    className="swiss-btn swiss-btn-secondary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                  >
                    Ir al tablero
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 sm:col-span-3 sm:col-start-10 sm:mt-0 sm:self-end">
              <p className="font-display text-7xl font-black leading-none tracking-[-0.05em] text-accent sm:text-8xl">
                100
              </p>
              <p className="swiss-label mt-2 border-t border-ink pt-3">Recursos en el libro</p>
            </div>
          </div>
        </div>
      </section>

      <Definicion />
      <Modelo />
      <Tablero />
      <Lectura />

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid">
            <div className="col-span-full sm:col-span-8">
              <span className="swiss-label block text-accent">Cierre</span>
              <h2 className="swiss-display-sm mt-6 text-paper">El tablero muestra dónde mirar</h2>
              <p className="mt-8 max-w-2xl border-l-2 border-white/20 pl-5 text-base leading-relaxed text-paper/60 sm:text-lg">
                21.284,5 USD al mes, concentrados en bases de datos, contenedores y producción.
                La línea plana de altas dice que el costo no viene de un pico de creación. Viene
                de qué se dejó encendido, y de qué tamaño.
              </p>
              <Link
                to="/gestion-tecnologia#finops"
                className="swiss-btn mt-10 inline-flex items-center gap-2 border-paper bg-paper px-7 py-3 text-[11px] text-ink hover:border-accent hover:bg-accent hover:text-white"
              >
                Ver FinOps en el área
                <i className="bx bx-right-arrow-alt text-base" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
