import SectionNav from './sections/SectionNav';
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
      <section className="relative overflow-hidden bg-navy-950 pt-24 pb-16 text-mist sm:pt-28 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(#38d6c8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-signal/15 via-purple-500/8 to-transparent blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Modelado de procesos
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-mist sm:text-6xl">
            BPMN
          </h1>

          <p className="mt-5 max-w-3xl text-base text-mist/70 sm:text-lg">
            El lenguaje estándar para dibujar <em>cómo</em> fluye un proceso: quién hace cada
            paso, en qué orden y qué pasa cuando algo sale mal.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#definicion"
              className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-navy-950 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              Ver la teoría
              <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
            </a>
            <a
              href="#diagrama"
              className="inline-flex items-center gap-2 rounded-full border border-mist/25 px-6 py-3 text-sm font-semibold text-mist transition hover:border-signal hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              Ir al diagrama
            </a>
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
      <section className="bg-navy-950 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <p className="font-mono text-xs uppercase tracking-widest text-signal">Cierre</p>
          <h2 className="mt-4 font-display text-3xl text-mist sm:text-4xl">
            IDEF0 dice qué, BPMN dice cómo y quién
          </h2>
          <p className="mt-4 text-mist/60">
            El diagrama A-0 fija la función (automatizar el despliegue sin intervención manual)
            y este BPMN fija el proceso que la cumple: quién evalúa, quién diseña, quién
            despliega y qué pasa cuando el diseño no cierra o el despliegue falla. Los dos
            modelos hablan del mismo sistema desde ángulos complementarios.
          </p>
        </div>
      </section>
    </div>
  );
}
