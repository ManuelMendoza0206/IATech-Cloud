import { Reveal } from '../../components/ui/Reveal';
import SectionNav from './sections/SectionNav';
import {
  Definicion,
  Entornos,
  Formato,
  Algoritmos,
  Evaluacion,
  Practica,
  Trabajo,
  Video,
} from './sections';

export default function Weka() {
  return (
    <div>
      {/* Hero compacto */}
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid py-20 sm:py-28">
            <div className="col-span-full sm:col-span-8">
              <Reveal asHero>
                <span className="swiss-label hero-item flex items-center gap-3 text-accent">
                  <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
                  Minería de datos
                </span>

                <h1 className="swiss-display hero-item mt-8 text-ink">
                  Wek<span className="text-accent">a</span>
                </h1>

                <p className="hero-item mt-10 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  El banco de trabajo de aprendizaje automático de la University of Waikato:
                  los algoritmos clásicos de minería de datos, con una interfaz gráfica para
                  probarlos sobre un dataset.
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
                    href="#practica"
                    className="swiss-btn swiss-btn-secondary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                  >
                    Ir al flujo de trabajo
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 sm:col-span-3 sm:col-start-10 sm:mt-0 sm:self-end">
              <p className="swiss-numeral hero-item text-accent">3.8.7</p>
              <p className="swiss-label mt-2 border-t border-ink pt-3">
                University of Waikato
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="content-start" />
      <SectionNav />

      <div id="definicion">
        <Definicion />
      </div>
      <div id="entornos">
        <Entornos />
      </div>
      <div id="formato">
        <Formato />
      </div>
      <div id="algoritmos">
        <Algoritmos />
      </div>
      <div id="evaluacion">
        <Evaluacion />
      </div>
      <div id="practica">
        <Practica />
      </div>
      <div id="trabajo">
        <Trabajo />
      </div>
      <div id="video">
        <Video />
      </div>

      {/* Cierre */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid">
            <div className="col-span-full sm:col-span-8">
              <span className="swiss-label block text-accent">Cierre</span>
              <h2 className="swiss-display-sm mt-6 text-paper">
                Ver el algoritmo es la mitad del trabajo
              </h2>
              <p className="mt-8 max-w-2xl border-l-2 border-ink-15 pl-5 text-base leading-relaxed text-paper/60 sm:text-lg">
                Weka existe para que probar un modelo deje de ser un problema de implementación.
                Lo que queda después es el problema de verdad: entender el dato, escoger la
                variable objetivo, entender por qué el modelo falla y decidir si el resultado
                sirve para la decisión que hay que tomar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
