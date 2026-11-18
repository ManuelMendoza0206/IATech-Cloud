import { Link } from 'react-router-dom';
import { SectionHeader } from '../../../components/content';

const PUNTOS = [
  {
    titulo: 'Visibilidad del gasto',
    texto:
      'Conocer en qué se utilizan los recursos permite entender el origen del consumo y sostener conversaciones informadas sobre prioridades y eficiencia.',
  },
  {
    titulo: 'Asignación y responsabilidad',
    texto:
      'Relacionar los recursos con áreas, servicios o propósitos facilita atribuir responsabilidades y evaluar el valor que aporta cada inversión.',
  },
  {
    titulo: 'Optimización continua',
    texto:
      'Revisar el uso y ajustar capacidad, configuraciones o servicios ayuda a evitar desperdicios y a mantener el equilibrio entre costo, rendimiento y disponibilidad.',
  },
  {
    titulo: 'Decisiones informadas',
    texto:
      'El presupuesto, junto con la medición del consumo, brinda una base para decidir cuándo escalar, consolidar o redefinir recursos según las necesidades del área.',
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
                una lectura compartida del consumo. Por eso el presupuesto se complementa con la
                gestión tecnológica y las prácticas de FinOps trabajadas en el área.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-60 sm:text-base">
                Esta combinación permite pasar de una estimación inicial a un proceso de mejora
                continua, donde las decisiones sobre recursos se sustentan en información y en los
                objetivos del servicio.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
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
