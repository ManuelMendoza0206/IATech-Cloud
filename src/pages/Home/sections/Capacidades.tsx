const CAPABILITIES = [
  {
    icon: 'bx-target-lock',
    title: 'Estrategia Tecnológica',
    description:
      'Alineamos cada inversión tecnológica con los objetivos del negocio, priorizando el retorno y la adopción de herramientas emergentes.',
  },
  {
    icon: 'bx-cloud',
    title: 'Infraestructura Resiliente',
    description:
      'Arquitecturas de alta disponibilidad y eficiencia de costos y energía, diseñadas para que la operación clínica nunca se detenga.',
  },
  {
    icon: 'bx-link-alt',
    title: 'Aplicaciones e Integraciones',
    description:
      'Ciclo de vida completo de software e integración entre sistemas, con rendimiento y seguridad garantizados.',
  },
  {
    icon: 'bx-line-chart',
    title: 'Datos y Analítica',
    description:
      'Inteligencia de negocio para decisiones informadas, cuidando la privacidad y la seguridad de la información.',
  },
  {
    icon: 'bx-shield-quarter',
    title: 'Seguridad y Acceso',
    description:
      'Control de accesos, gestión de riesgos informáticos y protección de los activos tecnológicos del área.',
  },
  {
    icon: 'bx-radar',
    title: 'Operación 24/7',
    description:
      'Monitorización continua, service desk y soporte técnico para que los equipos clínicos solo piensen en la atención.',
  },
];

export default function Capacidades() {
  return (
    <section
      id="capacidades"
      className="bg-mist py-20 sm:py-28"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '600px' }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl leading-tight text-navy-900 sm:text-4xl">
            Capacidades del área
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-navy-700/80 sm:text-base">
            Una sola plataforma bajo el capó de cada solución médica: de la estrategia
            a la operación en producción.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap) => (
            <li
              key={cap.title}
              className="group rounded-2xl border border-navy-700/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-signal/40 hover:shadow-[0_16px_32px_rgba(5,11,24,0.10)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal/10 text-xl text-signal transition-colors duration-200 group-hover:bg-signal group-hover:text-navy-950">
                <i className={`bx ${cap.icon}`} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold leading-tight text-navy-900">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/80">
                {cap.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}