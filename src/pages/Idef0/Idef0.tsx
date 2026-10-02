import { Reveal } from '../../components/ui/Reveal';
import SectionNav from './sections/SectionNav';
import {
  Definicion,
  DiagramaA0,
  ProcesoPrincipal,
  Entradas,
  Controles,
  Mecanismos,
  Salidas,
  Resumen,
  Video,
} from './sections';

export default function Idef0() {
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
                  Modelado de funciones
                </span>

                <h1 className="swiss-display hero-item mt-8 text-ink">
                  IDEF<span className="text-accent">0</span>
                </h1>

                <p className="hero-item mt-10 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  El lenguaje estándar para documentar <em>qué</em> hace un sistema antes de decidir{' '}
                  <em>cómo</em> lo hace. En esta página está el diagrama A-0 del proyecto CLOUD:
                  automatizar el despliegue y alojamiento de aplicaciones en la nube.
                </p>

                <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
                  <a href="#definicion" className="swiss-btn swiss-btn-primary inline-flex items-center gap-2 px-7 py-3 text-[11px]">
                    Ver la teoría
                    <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
                  </a>
                  <a href="#diagrama" className="swiss-btn swiss-btn-secondary inline-flex items-center gap-2 px-7 py-3 text-[11px]">
                    Ir al diagrama
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 sm:col-span-3 sm:col-start-10 sm:mt-0 sm:self-end">
              <p className="swiss-numeral hero-item text-accent">A-0</p>
              <p className="swiss-label mt-2 border-t border-ink pt-3">Nodo raíz · CLOUD</p>
            </div>
          </div>
        </div>
      </section>

      <div id="content-start" />
      <SectionNav />

      <div id="definicion">
        <Definicion />
      </div>
      <div id="diagrama">
        <DiagramaA0 />
      </div>
      <div id="proceso">
        <ProcesoPrincipal />
      </div>
      <div id="entradas">
        <Entradas />
      </div>
      <div id="controles">
        <Controles />
      </div>
      <div id="mecanismos">
        <Mecanismos />
      </div>
      <div id="salidas">
        <Salidas />
      </div>
      <div id="resumen">
        <Resumen />
      </div>
      <div id="video">
        <Video />
      </div>

      {/* Cierre */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Cierre</p>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
            Un diagrama que sobrevive al cambio tecnológico
          </h2>
          <p className="mt-4 text-ink/60">
            El proveedor de cloud, el pipeline y los límites de presupuesto van a cambiar varias
            veces en la vida del proyecto. La función no: automatizar el despliegue sin intervención
            manual. IDEF0 documenta justamente esa capa estable, y por eso sigue siendo válida
            cuando todo lo demás se ha reconfigurado.
          </p>
        </div>
      </section>
    </div>
  );
}
