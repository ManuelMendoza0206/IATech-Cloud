import { Alcance } from './sections/Alcance';
import { ComoEscribir } from './sections/ComoEscribir';
import { Equipo } from './sections/Equipo';

export default function Contactos() {
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
            Contacto
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-mist sm:text-6xl">
            Contactos
          </h1>

          <p className="mt-5 max-w-3xl text-base text-mist/70 sm:text-lg">
            Quién atiende cada parte del área y cómo escribirle directamente.
          </p>
        </div>
      </section>

      <div id="content-start" />
      <Equipo />
      <Alcance />
      <ComoEscribir />
    </div>
  );
}