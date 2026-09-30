const SERVICES = [
  {
    image: '/images/home1.jpg',
    title: 'Infraestructura Cloud',
    description:
      'Diseñamos y operamos arquitecturas multi-cloud escalables que garantizan la continuidad del software médico sin interrupciones.',
    link: '/gestion-tecnologia',
    // Posición: Arriba al centro
    gridClass: 'lg:col-start-2 lg:row-start-1',
  },
  {
    image: '/images/home2.jpg',
    title: 'Seguridad & Compliance',
    description:
      'Protocolos de seguridad basados en estándares internacionales para proteger datos clínicos sensibles y cumplir con normativas de salud.',
    link: '/gestion-tecnologia',
    // Posición: Arriba a la derecha
    gridClass: 'lg:col-start-3 lg:row-start-1',
  },
  {
    image: '/images/home3.jpg',
    title: 'DevOps & CI/CD',
    description:
      'Pipelines automatizados que permiten despliegues continuos sin downtime, manteniendo la estabilidad del entorno clínico en cada actualización.',
    link: '/gestion-tecnologia',
    // Posición: Abajo a la izquierda
    gridClass: 'lg:col-start-1 lg:row-start-2',
  },
  {
    image: '/images/home4.jpg',
    title: 'Monitoreo & Observabilidad',
    description:
      'Sistemas de alerta proactiva y métricas en tiempo real que detectan anomalías antes de que impacten la experiencia clínica.',
    link: '/gestion-tecnologia',
    // Posición: Abajo al centro
    gridClass: 'lg:col-start-2 lg:row-start-2',
  },
];

export default function ServiciosGrid() {
  return (
    <section className="relative overflow-hidden bg-[#EDE8E0] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Contenedor Grid Principal a 3 Columnas */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          
          {/* Título - Ocupa el espacio vacío superior izquierdo del diseño original */}
          <div className="flex flex-col justify-center mb-12 md:mb-0 lg:col-start-1 lg:row-start-1 lg:pr-8">
            <span className="font-mono text-xs uppercase tracking-widest text-navy-700/50">
              Lo que hacemos
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-navy-900 sm:text-5xl">
              Pilares de nuestro servicio
            </h2>
          </div>

          {/* Renderizado de las Cards */}
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className={`group relative flex flex-col overflow-hidden rounded-xl bg-navy-950 p-8 sm:p-10 transition hover:shadow-2xl min-h-[420px] ${service.gridClass}`}
            >
              {/* Decorative glow on hover original */}
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-signal/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

              {/* Contenedor de la Imagen (reemplazo de las formas) */}
              <div className="mb-auto flex justify-center pb-8 pt-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-32 w-32 object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Textos de la Card */}
              <div className="mb-8">
                <h3 className="font-display text-xl font-bold uppercase text-mist sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist/65">
                  {service.description}
                </p>
              </div>

              {/* CTA adaptado al estilo bloque de la imagen, pero con tus colores */}
              <a
                href={service.link}
                className="mt-auto inline-flex self-end items-center gap-2 rounded-sm bg-signal/10 px-6 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-signal transition group-hover:bg-signal group-hover:text-navy-950"
              >
                Descubrir
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}