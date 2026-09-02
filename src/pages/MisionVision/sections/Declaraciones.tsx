const STATEMENTS = [
  {
    id: 'mision',
    kicker: '01 · Misión',
    title: 'Misión',
    lead: 'Infraestructura cloud para que la atención clínica no se detenga.',
    body: 'Proveer la infraestructura en la nube escalable, resiliente y de alta disponibilidad para el ecosistema de IATECH, garantizando la continuidad operativa de nuestras soluciones de software médico. Nos comprometemos a habilitar la colaboración clínica y el acceso a la información de salud, trabajando en estrecha sinergia y colaboración con el resto de áreas para facilitar un entorno tecnológico robusto, integrado y confiable.',
    highlights: [
      'Escalabilidad y resiliencia',
      'Continuidad del software médico',
      'Sinergia entre áreas',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" />
      </svg>
    ),
  },
  {
    id: 'vision',
    kicker: '02 · Visión',
    title: 'Visión',
    lead: 'Excelencia técnica que redefine la experiencia clínica en la nube.',
    body: 'Ser el referente de excelencia técnica en la optimización y despliegue de los servicios basados en la nube de IATECH, garantizando que nuestras soluciones médicas alcancen el más alto rendimiento, velocidad y disponibilidad operativa. Aspiramos a redefinir la experiencia clínica facilitando un acceso uniforme a la información de salud, implementando arquitecturas resilientes que aseguren la continuidad del servicio en todo momento y maximicen el valor de la inversión de nuestros socios mediante infraestructuras digitales eficientes y sostenibles.',
    highlights: [
      'Referente de excelencia',
      'Rendimiento y disponibilidad',
      'Infraestructura sostenible',
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12s-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export default function Declaraciones() {
  return (
    <section id="declaraciones" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-navy-950, #050b18) 1px, transparent 1px), linear-gradient(to right, var(--color-navy-950, #050b18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-navy-700/70">
            Declaraciones
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Lo que hacemos y hacia dónde vamos
          </h2>
          <p className="mt-4 text-navy-700/75">
            Dos compromisos que orientan cada arquitectura, cada despliegue y cada
            integración del ecosistema IATECH.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {STATEMENTS.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-700/20 bg-white p-8 shadow-sm transition hover:border-signal/50 hover:shadow-xl sm:p-10"
            >
              <div className="absolute inset-x-8 top-0 h-0.5 bg-gradient-to-r from-transparent via-signal to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-signal">
                  {item.kicker}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-signal/20 bg-navy-950 text-signal">
                  {item.icon}
                </span>
              </div>

              <h3 className="mt-6 font-display text-3xl font-semibold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-navy-700/80">{item.lead}</p>
              <p className="mt-5 flex-1 leading-relaxed text-navy-700/75">{item.body}</p>

              <ul className="mt-8 flex flex-wrap gap-2">
                {item.highlights.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-navy-700/15 bg-mist px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-navy-900"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
