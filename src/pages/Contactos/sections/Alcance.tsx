const ALCANCES = [
  {
    icon: 'bx-server',
    title: 'Infraestructura cloud',
    text: 'Disponibilidad 24/7, redes virtuales, respaldos y recuperación ante desastres.',
  },
  {
    icon: 'bx-git-branch',
    title: 'Automatización',
    text: 'Pipelines de entrega continua, infraestructura como código y observabilidad.',
  },
  {
    icon: 'bx-shield-quarter',
    title: 'Seguridad y cumplimiento',
    text: 'Control de accesos, gestión de riesgos y protección de la información clínica.',
  },
  {
    icon: 'bx-cloud',
    title: 'Arquitectura multi-cloud',
    text: 'Diseño de soluciones escalables y resilientes sobre AWS, Azure y Google Cloud.',
  },
];

export function Alcance() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Qué se consulta al área
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-60">
            Los cuatro temas que llegan con más frecuencia por correo. Si la consulta no cae en
            ninguno, igual funciona: escribí al gerente o al arquitecto y ellos reencuadran el
            pedido.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {ALCANCES.map((a) => (
            <li
              key={a.title}
              className="flex items-start gap-4 border border-ink-15 bg-surface p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-xl text-accent">
                <i className={`bx ${a.icon}`} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-ink">{a.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-60">{a.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}