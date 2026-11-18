import { SectionHeader } from '../../../components/content';

const COMPONENTES = [
  {
    icon: 'bx-group',
    titulo: 'Mano de obra',
    descripcion:
      'El equipo de personas que diseña, opera y mejora los servicios del área.',
    incluye: [
      'Roles y responsabilidades que sostienen la operación diaria.',
      'Dedicación del equipo a la gestión, el desarrollo y la administración de la infraestructura.',
      'Acompañamiento, coordinación y actividades necesarias para cumplir los objetivos del área.',
    ],
  },
  {
    icon: 'bx-laptop',
    titulo: 'Equipo',
    descripcion:
      'Las herramientas y el equipamiento que habilitan el trabajo del equipo.',
    incluye: [
      'Estaciones de trabajo y dispositivos utilizados por el personal.',
      'Equipamiento y recursos técnicos de apoyo a la operación.',
      'Capacitación y habilitación necesaria para desempeñar las funciones del área.',
    ],
  },
  {
    icon: 'bx-support',
    titulo: 'Servicios',
    descripcion:
      'Servicios gestionados y externos que complementan las capacidades internas.',
    incluye: [
      'Servicios especializados que apoyan la seguridad, la continuidad y la operación.',
      'Soporte y acompañamiento de terceros cuando la tarea lo requiere.',
      'Actividades contratadas para fortalecer capacidades puntuales del área.',
    ],
  },
  {
    icon: 'bx-cloud',
    titulo: 'Infraestructura',
    descripcion:
      'Los recursos tecnológicos que sostienen las plataformas y cargas de trabajo.',
    incluye: [
      'Recursos cloud y capacidad de cómputo, almacenamiento y red.',
      'Componentes necesarios para la disponibilidad, la escalabilidad y la resiliencia de los servicios.',
      'Capas de protección y operación asociadas al entorno tecnológico.',
    ],
  },
  {
    icon: 'bx-package',
    titulo: 'Materiales',
    descripcion:
      'Insumos, licencias y activos asociados al funcionamiento del área.',
    incluye: [
      'Licencias y herramientas de software utilizadas en el trabajo cotidiano.',
      'Insumos y elementos necesarios para la operación y el mantenimiento.',
      'Activos y recursos complementarios vinculados a la gestión tecnológica.',
    ],
  },
];

export default function Componentes() {
  return (
    <section className="border-t border-ink bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="02"
          title="Componentes del presupuesto"
          description="Una vista conceptual de los bloques que componen el presupuesto del área. Se describen las categorías, sin detallar cifras."
        />

        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {COMPONENTES.map((item) => (
            <li key={item.titulo} className="swiss-cell flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="swiss-icon flex h-12 w-12 shrink-0 items-center justify-center text-2xl text-accent">
                  <i className={`bx ${item.icon}`} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold leading-tight text-ink">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-60 sm:text-base">
                    {item.descripcion}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-2 border-t border-ink-15 pt-5">
                {item.incluye.map((punto) => (
                  <li key={punto} className="flex items-start gap-3 text-sm leading-relaxed text-ink-60">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                    <span>{punto}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <figure className="mt-12 border border-ink-15 bg-white">
          <img
            src="/images/cloud1.jpg"
            alt="Infraestructura y servicios en la nube que forman parte de los componentes del presupuesto"
            loading="lazy"
            decoding="async"
            className="aspect-[21/9] w-full object-cover"
          />
          <figcaption className="border-t border-ink-15 px-5 py-4">
            <p className="text-sm leading-relaxed text-ink-60">
              Infraestructura, servicios y herramientas conviven dentro del presupuesto: cada
              componente aporta capacidad para operar y evolucionar la plataforma del área.
            </p>
          </figcaption>
        </figure>

        <p className="mt-10 border-l-2 border-ink pl-5 text-sm leading-relaxed text-ink-60 sm:text-base">
          La composición y el peso relativo de cada componente dependen de las prioridades,
          la etapa del proyecto y las necesidades operativas del periodo. El detalle específico se
          documenta en el presupuesto compartido.
        </p>
      </div>
    </section>
  );
}
