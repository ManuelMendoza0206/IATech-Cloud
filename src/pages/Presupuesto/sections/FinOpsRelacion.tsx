import { Link } from 'react-router-dom';
import { SectionHeader } from '../../../components/content';

const PUNTOS = [
  {
    titulo: 'Visibilidad del gasto',
    texto:
      'Saber en qué se usan los recursos aclara el origen del consumo y respalda conversaciones informadas sobre prioridades y eficiencia.',
  },
  {
    titulo: 'Asignación y responsabilidad',
    texto:
      'Relacionar los recursos con áreas, servicios o propósitos define responsabilidades y ayuda a evaluar el valor de cada inversión.',
  },
  {
    titulo: 'Optimización continua',
    texto:
      'Revisar el uso y ajustar capacidad, configuraciones o servicios reduce desperdicios y mantiene el equilibrio entre costo, rendimiento y disponibilidad.',
  },
  {
    titulo: 'Decisiones informadas',
    texto:
      'El presupuesto, junto con la medición del consumo, da una base para decidir cuándo escalar, consolidar o redefinir recursos según las necesidades del área.',
  },
];

export default function FinOpsRelacion() {
  return (
    <section className="border-t border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="03"
          title="Gestión, costos y FinOps"
          description="El presupuesto se relaciona con la práctica de observar, asignar y optimizar el uso de recursos tecnológicos en función del valor que entregan."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {PUNTOS.map((item, idx) => (
                <li key={item.titulo} className="swiss-cell flex gap-5 p-6">
                  <span className="swiss-chip flex h-9 w-9 shrink-0 items-center justify-center font-mono text-xs font-semibold text-accent">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-extrabold leading-tight text-ink">
                      {item.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-60 sm:text-base">
                      {item.texto}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="swiss-cell h-full p-6 sm:p-8">
              <span className="swiss-label block text-accent">Vínculo con el área</span>
              <h3 className="mt-4 font-display text-xl font-extrabold leading-tight text-ink">
                Planificar y medir van juntos
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-60 sm:text-base">
                La planificación presupuestaria cobra sentido cuando se apoya en datos de uso y en
                una lectura compartida del consumo. Por eso se complementa con la gestión
                tecnológica y con las prácticas de FinOps trabajadas en el área.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-60 sm:text-base">
                Así, una estimación inicial se convierte en un proceso de mejora continua, con
                decisiones sobre recursos basadas en información y en los objetivos del servicio.
              </p>

              <figure className="mt-6 border border-ink-15 bg-white">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmd7vnFQMt4Dzt5Hp8YY8z-3KWxScY1Dzty-sZ1XljA&s=10"
                  alt="Visibilidad y análisis del consumo para la gestión de costos en la nube"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full object-cover"
                />
                <figcaption className="border-t border-ink-15 px-4 py-3">
                  <p className="text-xs leading-relaxed text-ink-60 sm:text-sm">
                    La visibilidad del consumo apoya la relación entre planificación, uso real y
                    decisiones de optimización en la gestión de costos.
                  </p>
                </figcaption>
              </figure>

              <p className="mt-6 border-l-2 border-ink pl-4 text-sm leading-relaxed text-ink-60">
                La visibilidad del consumo —apoyada en tableros y reportes del área— ayuda a
                relacionar planificación, uso real y decisiones de optimización.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/gestion-tecnologia#finops"
                  className="swiss-btn swiss-btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-[11px]"
                >
                  Ver FinOps
                  <i className="bx bx-right-arrow-alt text-base" aria-hidden="true" />
                </Link>
                <Link
                  to="/tableau"
                  className="swiss-btn swiss-btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-[11px]"
                >
                  Ver tablero de costos
                  <i className="bx bx-right-arrow-alt text-base" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
