import { SectionHeader } from '../../../components/content';

const PRINCIPIOS = [
  {
    icon: 'bx-target-lock',
    titulo: 'Alineación con objetivos',
    texto:
      'El presupuesto traduce las prioridades del área en recursos concretos: qué se necesita para sostener la operación, mejorarla y responder a los objetivos del negocio.',
  },
  {
    icon: 'bx-calendar',
    titulo: 'Horizonte y planificación',
    texto:
      'Un periodo de referencia definido ayuda a anticipar necesidades, ordenar decisiones y evitar respuestas reactivas cuando cambian la demanda o la infraestructura.',
  },
  {
    icon: 'bx-line-chart',
    titulo: 'Seguimiento y ajuste',
    texto:
      'Un presupuesto útil no es estático: se revisa frente a la ejecución real, se comparan desvíos y se ajusta para mantener el control sin perder capacidad de respuesta.',
  },
  {
    icon: 'bx-shield-quarter',
    titulo: 'Transparencia y responsabilidad',
    texto:
      'Cuando las categorías de gasto y sus responsables están claros, es más fácil rendir cuentas, priorizar y tomar decisiones informadas dentro del equipo.',
  },
];

export default function Teoria() {
  return (
    <section id="contenido" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="01"
          title="Qué es y para qué sirve"
          description="El presupuesto ordena cómo se planifican, asignan y siguen los recursos del área."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="space-y-5 text-base leading-relaxed text-ink-60 sm:text-lg">
              <p>
                En un área de servicios cloud e integración, el presupuesto va más allá de listar
                gastos: expresa qué capacidades se quieren sostener, qué servicios deben operar con
                continuidad y qué mejoras se priorizan en un periodo determinado.
              </p>
              <p>
                Planificar con anticipación coordina al equipo, dimensiona la infraestructura y
                permite evaluar el impacto de cada decisión antes de ejecutarla. Después, el
                seguimiento compara lo planificado con lo realizado y ajusta el rumbo cuando el
                contexto cambia.
              </p>
              <p className="border-l-2 border-ink pl-5 text-ink">
                Esta página presenta un <strong>resumen conceptual</strong> del presupuesto del
                área. El detalle y los valores están en el documento compartido.
              </p>
            </div>

            <figure className="mt-8 border border-ink-15 bg-white">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgIos_Dy8Qfub4OK3UzYi7487G6c3akzfQtAdgQ8cRw&s=10"
                alt="Planificación y seguimiento de recursos como parte de la gestión presupuestaria"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="border-t border-ink-15 px-5 py-4">
                <p className="text-sm leading-relaxed text-ink-60">
                  La planificación y el seguimiento permiten ordenar recursos y prioridades para
                  sostener la operación del área.
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {PRINCIPIOS.map((item) => (
                <li key={item.titulo} className="swiss-cell p-6">
                  <span className="swiss-icon flex h-11 w-11 items-center justify-center text-xl text-accent">
                    <i className={`bx ${item.icon}`} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-extrabold leading-tight text-ink">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-60">{item.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
