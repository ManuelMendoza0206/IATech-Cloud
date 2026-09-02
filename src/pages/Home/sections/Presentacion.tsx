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
    <section id="presentacion" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-navy-700/70">
            Sobre el área
          </span>

          <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
            El motor tecnológico detrás de cada despliegue clínico
          </h2>

          <p className="mt-6 text-navy-700/80">
            Cada actualización, cada despliegue, cada integración pasa por nosotros.
            Diseñamos, operamos y escalamos la infraestructura cloud que sostiene
            las soluciones médicas de IATECH — para que los equipos clínicos nunca
            tengan que pensar en la tecnología detrás de su trabajo.
          </p>

          <p className="mt-4 text-navy-700/80">
            Infraestructura que se adapta al ritmo de la salud: sin ventanas de
            mantenimiento que interrumpan, sin fronteras que limiten el acceso,
            sin silos que fragmenten la información.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item.title} className="border-l-2 border-signal pl-4">
                <p className="font-display text-base text-navy-900">{item.title}</p>
                <p className="mt-1 text-sm text-navy-700/80">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-mist" />
          <img
            src="/images/cloud-equipo.jpg"
            alt="Equipo del área Cloud de IATECH"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl sm:aspect-video lg:aspect-[4/3]"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -left-6 rounded-xl bg-navy-900 px-6 py-4 text-mist shadow-lg">
            <p className="font-display text-2xl text-signal">99%</p>
            <p className="font-mono text-xs uppercase tracking-widest text-mist/70">
              Disponibilidad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}