import SectionNav from './sections/SectionNav';
import { Reveal } from '../../components/ui/Reveal';
import {
  Definicion,
  Notacion,
  Tipos,
  Diagrama,
  Simbolos,
  Lectura,
  Video,
} from './sections';

export default function Bpmn() {
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
                  Modelado de procesos
                </span>

                <h1 className="swiss-display hero-item mt-8 text-ink">
                  BPM<span className="text-accent">N</span>
                </h1>

                <p className="hero-item mt-10 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  El lenguaje estándar para dibujar <em>cómo</em> fluye un proceso: quién hace
                  cada paso, en qué orden y qué pasa cuando algo sale mal.
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
                    href="#diagrama"
                    className="swiss-btn swiss-btn-secondary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                  >
                    Ir al diagrama
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 sm:col-span-3 sm:col-start-10 sm:mt-0 sm:self-end">
              <p className="swiss-numeral hero-item text-accent">BPMN</p>
              <p className="swiss-label mt-2 border-t border-ink pt-3">
                Pool · Área Cloud IATECH
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
      <div id="notacion">
        <Notacion />
      </div>
      <div id="tipos">
        <Tipos />
      </div>
      <div id="diagrama">
        <Diagrama />
      </div>
      <div id="simbolos">
        <Simbolos />
      </div>
      <div id="lectura">
        <Lectura />
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
                IDEF0 dice qué, BPMN dice cómo y quién
              </h2>
              <p className="mt-8 max-w-2xl border-l-2 border-ink-15 pl-5 text-base leading-relaxed text-paper/60 sm:text-lg">
                El diagrama A-0 fija la función (automatizar el despliegue sin intervención
                manual) y este BPMN fija el proceso que la cumple: quién evalúa, quién diseña,
                quién despliega y qué pasa cuando el diseño no cierra o el despliegue falla.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
