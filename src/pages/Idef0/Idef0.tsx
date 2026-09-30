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
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-16 text-mist sm:pt-36 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(#38d6c8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-signal/15 via-purple-500/8 to-transparent blur-[140px]" />

        <div className="absolute top-6 left-8 hidden font-mono text-[10px] tracking-widest text-mist/20 sm:block">
          NODE // A-0
        </div>
        <div className="absolute top-6 right-8 hidden font-mono text-[10px] tracking-widest text-signal/30 sm:block">
          [ CONTEXT: TOP · STATUS: WORKING ]
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Modelado de funciones
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-mist sm:text-6xl">
            IDEF0
          </h1>

          <p className="mt-5 max-w-3xl text-base text-mist/70 sm:text-lg">
            El lenguaje estándar para documentar <em>qué</em> hace un sistema antes de decidir{' '}
            <em>cómo</em> lo hace. En esta página está el diagrama A-0 del proyecto CLOUD:
            automatizar el despliegue y alojamiento de aplicaciones en la nube.
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

          <div className="mt-12 flex flex-wrap gap-3 border-t border-mist/10 pt-8">
            {[
              { k: 'PROJECT', v: 'CLOUD' },
              { k: 'AUTHOR', v: 'MENDOZA' },
              { k: 'REV', v: '16/9/2026' },
              { k: 'NODE', v: 'A-0' },
            ].map((m) => (
              <div key={m.k} className="rounded-lg border border-mist/10 bg-navy-900/60 px-4 py-2.5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-mist/40">{m.k}</p>
                <p className="font-mono text-sm font-semibold text-signal">{m.v}</p>
              </div>
            ))}
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
      <section className="bg-navy-950 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <p className="font-mono text-xs uppercase tracking-widest text-signal">Cierre</p>
          <h2 className="mt-4 font-display text-3xl text-mist sm:text-4xl">
            Un diagrama que sobrevive al cambio tecnológico
          </h2>
          <p className="mt-4 text-mist/60">
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
