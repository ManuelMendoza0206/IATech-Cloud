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
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Contenedor Grid Principal a 3 Columnas */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          
          {/* Título - Ocupa el espacio vacío superior izquierdo del diseño original */}
          <div className="flex flex-col justify-center mb-12 md:mb-0 lg:col-start-1 lg:row-start-1 lg:pr-8">
            <span className="reveal font-mono text-xs uppercase tracking-widest text-ink-40">
              Lo que hacemos
            </span>
            <h2 className="reveal mt-4 font-display text-4xl font-black uppercase tracking-tight text-ink sm:text-5xl">
              Pilares de nuestro servicio
            </h2>
          </div>

          {/* Renderizado de las Cards */}
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className={`reveal swiss-cell group relative flex flex-col p-8 sm:p-10 transition hover:-translate-y-1 min-h-[420px] ${service.gridClass}`}
            >
              {/* Decorative glow on hover original */}

              {/* Contenedor de la Imagen (reemplazo de las formas) */}
              <div className="mb-auto flex justify-center pb-8 pt-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="swiss-icon h-32 w-32 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Textos de la Card */}
              <div className="mb-8">
                <h3 className="font-display text-xl font-black uppercase text-ink sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-60">
                  {service.description}
                </p>
              </div>

              {/* CTA adaptado al estilo bloque de la imagen, pero con tus colores */}
              <a
                href={service.link}
                className="swiss-btn mt-auto inline-flex self-end items-center gap-2 bg-aqua px-6 py-2 font-mono text-[11px] font-black uppercase tracking-wider text-ink transition group-hover:brightness-105"
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