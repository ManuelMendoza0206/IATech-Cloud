const HIGHLIGHTS = [
  {
    title: 'Alta disponibilidad',
    description: 'Arquitecturas resilientes diseñadas para que el servicio clínico no se interrumpa.',
  },
  {
    title: 'Actualizaciones sin downtime',
    description: 'Despliegues continuos ejecutados sin detener el trabajo de los equipos médicos.',
  },
  {
    title: 'Acceso sin fronteras',
    description: 'Información de salud disponible desde cualquier ubicación, en tiempo real.',
  },
];

export default function Presentacion() {
  return (
    <section id="presentacion" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <h2 className="font-display text-3xl leading-tight text-navy-900 sm:text-4xl">
            El motor tecnológico detrás de cada despliegue clínico
          </h2>

          <p className="mt-6 max-w-[65ch] leading-relaxed text-navy-700/80">
            Cada actualización, cada despliegue, cada integración pasa por nosotros.
            Diseñamos, operamos y escalamos la infraestructura cloud que sostiene
            las soluciones médicas de IATECH — para que los equipos clínicos nunca
            tengan que pensar en la tecnología detrás de su trabajo.
          </p>

          <p className="mt-4 max-w-[65ch] leading-relaxed text-navy-700/80">
            Infraestructura que se adapta al ritmo de la salud: sin ventanas de
            mantenimiento que interrumpan, sin fronteras que limiten el acceso,
            sin silos que fragmenten la información.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-navy-700/10 bg-mist/50 p-4"
              >
                <span className="mb-3 block h-1.5 w-8 rounded-full bg-signal" aria-hidden="true" />
                <p className="font-display text-[15px] font-semibold leading-tight text-navy-900">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-700/80">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-mist" />
          <img
            src="/images/cloud-equipo.jpg"
            alt="Equipo del área Cloud de IATECH colaborando frente a pantallas de monitoreo"
            width={800}
            height={600}
            sizes="(max-width: 1024px) 100vw, 560px"
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_12px_32px_rgba(5,11,24,0.12)] sm:aspect-video lg:aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -left-6 rounded-xl border border-navy-700/10 bg-navy-900 px-6 py-4 text-mist shadow-[0_12px_32px_rgba(5,11,24,0.18)]">
            <p className="font-display text-2xl font-semibold tabular-nums text-signal">99%</p>
            <p className="font-mono text-xs uppercase tracking-widest text-mist/70">
              Disponibilidad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}