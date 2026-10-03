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
      <section className="relative overflow-hidden bg-canvas pt-32 pb-16 text-ink sm:pt-36 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(var(--color-signal) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua/25 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <span className="layer-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-signal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Modelado de funciones
          </span>

          <h1 className="mt-6 font-display text-4xl font-black leading-tight text-ink sm:text-6xl">
            IDEF0
          </h1>

          <p className="mt-5 max-w-3xl text-base text-ink/70 sm:text-lg">
            El lenguaje estándar para documentar <em>qué</em> hace un sistema antes de decidir{' '}
            <em>cómo</em> lo hace. En esta página está el diagrama A-0 del proyecto CLOUD:
            automatizar el despliegue y alojamiento de aplicaciones en la nube.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#definicion"
              className="layer-btn inline-flex items-center gap-2 rounded-full bg-aqua px-6 py-3 text-sm font-bold text-ink transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              Ver la teoría
              <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
            </a>
            <a
              href="#diagrama"
              className="layer-btn inline-flex items-center gap-2 rounded-full bg-canvas px-6 py-3 text-sm font-bold text-ink transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
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
      <section className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <p className="font-mono text-xs uppercase tracking-widest text-signal">Cierre</p>
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
