import { CONTACTOS, buildMailto, type Contacto } from '../data/contactos';

function Tarjeta({ c }: { c: Contacto }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm transition hover:border-signal/40 hover:shadow-md sm:p-7">
      <div className="flex items-start gap-4">
        <img
          src={c.imageSrc}
          alt={c.nombre}
          loading="lazy"
          decoding="async"
          className="h-16 w-16 shrink-0 rounded-xl object-cover object-top ring-1 ring-navy-900/10"
        />
        <div className="min-w-0">
          <h3 className="font-display text-base font-semibold leading-tight text-navy-950">
            {c.nombre}
          </h3>
          <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-signal">
            {c.puesto}
          </p>
          <p className="mt-1 text-xs text-navy-700/60">{c.area}</p>
        </div>
      </div>

      <div className="mt-6 flex-1 border-t border-navy-900/10 pt-5">
        {c.email ? (
          <a
            href={buildMailto(c.email)}
            aria-label={`Escribir a ${c.nombre}`}
            className="inline-flex items-center gap-2 break-all text-sm text-navy-900 underline decoration-signal underline-offset-4 transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
          >
            {c.email}
            <i className="bx bx-send shrink-0 text-base" aria-hidden="true" />
          </a>
        ) : (
          <p className="text-sm text-navy-700/55">
            Email no disponible.{' '}
            <span className="text-navy-700/70">
              Escribir al área desde el pie de página.
            </span>
          </p>
        )}
      </div>
    </article>
  );
}

export function Equipo() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl text-navy-900 sm:text-4xl">El equipo</h2>
          <p className="mt-5 text-base leading-relaxed text-navy-700/80">
            Cinco personas del Área de Servicios Cloud e Integración. Tres tienen correo
            institucional publicado; las otras dos se contactan a través del área.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACTOS.map((c) => (
            <Tarjeta key={c.id} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}