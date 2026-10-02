import { SectionHeader } from '../../../components/content';
import { PROCESS_DESCRIPTION, PROCESS_TEXT } from '../data/diagram';

const ROLES = [
  {
    role: 'Transformar',
    text: 'Toma las entradas, aplica los controles y produce las salidas declaradas.',
  },
  {
    role: 'Delimitar',
    text: 'Los controles fijan los límites: qué está permitido, con qué presupuesto y bajo qué seguridad.',
  },
  {
    role: 'Habilitar',
    text: 'Los mecanismos aportan el medio físico y el equipo humano que hace posible la transformación.',
  },
];

export function ProcesoPrincipal() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 text-ink sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(var(--color-signal) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />
      <div className="ed-chip pointer-events-none absolute -top-24 left-1/2 h-[360px] w-[720px] -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <SectionHeader
            number="04"
            title="Proceso principal"
            variant="dark"
            description="La caja central del diagrama. En IDEF0 una caja representa siempre una función, y su nombre es un verbo en gerundio: describe una acción en curso, no un sustantivo ni un componente."
          />
        </div>

        {/* La caja */}
        <div className="ed-card mt-12 p-8 sm:p-12">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            Automatizar el despliegue y alojamiento de aplicaciones en la nube
          </p>

          <p className="mt-6 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-4xl">
            {PROCESS_TEXT}
          </p>

          <p className="mt-6 max-w-3xl leading-relaxed text-ink/70">{PROCESS_DESCRIPTION}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="ed-chip ed-card px-4 py-2 font-mono text-sm font-semibold text-accent">
              Bs0
            </span>
            <span className="ed-card px-4 py-2 font-mono text-sm text-ink/70">
              0
            </span>
          </div>
        </div>

        {/* Qué significa cada identificador */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((r) => (
            <div
              key={r.role}
              className="ed-card p-6 transition"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{r.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="ed-card mt-10 p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">Por qué importa</p>
          <p className="mt-3 max-w-4xl leading-relaxed text-ink/70">
            La caja es la frontera de la responsabilidad. Todo lo que entra por la izquierda es
            responsabilidad de quien entrega; todo lo que sale por la derecha es responsabilidad de
            quien recibe. Si dos equipos discuten, la discusión casi siempre es sobre dónde termina
            esta caja —y por eso el límite se escribe explícitamente antes de discutir la solución.
          </p>
        </div>
      </div>
    </section>
  );
}
