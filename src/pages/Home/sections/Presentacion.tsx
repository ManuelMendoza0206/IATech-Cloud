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
    <section id="presentacion" className="bg-neu-base py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <h2 className="reveal font-neu-display text-3xl font-extrabold leading-tight text-ink-950 sm:text-4xl">
            El motor tecnológico detrás de cada despliegue clínico
          </h2>

          <p className="reveal mt-6 max-w-[65ch] leading-relaxed text-ink-700">
            Cada actualización, cada despliegue, cada integración pasa por nosotros.
            Diseñamos, operamos y escalamos la infraestructura cloud que sostiene
            las soluciones médicas de IATECH — para que los equipos clínicos nunca
            tengan que pensar en la tecnología detrás de su trabajo.
          </p>

          <p className="reveal mt-4 max-w-[65ch] leading-relaxed text-ink-700">
            Infraestructura que se adapta al ritmo de la salud: sin ventanas de
            mantenimiento que interrumpan, sin fronteras que limiten el acceso,
            sin silos que fragmenten la información.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item.title}
                className="reveal neu-raised p-5"
              >
                <span className="neu-pressed mb-3 block h-2.5 w-10" aria-hidden="true" />
                <p className="font-neu-display text-[15px] font-extrabold leading-tight text-ink-950">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <img
            src="/images/cloud-equipo.jpg"
            alt="Equipo del área Cloud de IATECH colaborando frente a pantallas de monitoreo"
            width={800}
            height={600}
            sizes="(max-width: 1024px) 100vw, 560px"
            loading="lazy"
            decoding="async"
            className="neu-raised aspect-[4/3] w-full object-cover sm:aspect-video lg:aspect-[4/3]"
          />
          <div className="reveal neu-raised absolute -bottom-6 -left-6 px-6 py-4 text-ink-950">
            <p className="font-neu-display text-2xl font-black tabular-nums text-signal">99%</p>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-500">
              Disponibilidad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}