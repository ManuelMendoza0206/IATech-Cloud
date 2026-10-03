import { SectionHeader } from '../../../components/content';

const ARTEFACTOS = [
  {
    name: 'Product Backlog',
    commitment: 'Product Goal',
    desc: 'Lista dinámica y priorizada de todo lo que el producto necesita. Describe un estado futuro hacia el cual apunta todo el esfuerzo acumulado.',
    owner: 'Product Owner',
    color: 'bg-canvas',
  },
  {
    name: 'Sprint Backlog',
    commitment: 'Sprint Goal',
    desc: 'Elementos seleccionados para el ciclo actual más el plan detallado para construirlos. Pertenece exclusivamente a los Developers.',
    owner: 'Developers',
    color: 'bg-signal',
  },
  {
    name: 'Incremento',
    commitment: 'Definition of Done',
    desc: 'Paso concreto hacia el Product Goal: suma del trabajo completado integrado con valor de ciclos anteriores. Debe ser utilizable.',
    owner: 'Scrum Team',
    color: 'bg-steel',
  },
];

export function Artefactos() {
  return (
    <section className="bg-canvas py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="06"
          title="Artefactos y Compromisos"
          description="Cada artefacto representa trabajo o valor y contiene un compromiso que aporta transparencia y criterio claro de éxito."
        />

        <div className="layer mt-10 overflow-hidden rounded-2xl p-4 sm:p-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0GH2HfJcNOR6mhTxpNUOmB1tnFSKGkoLtcZEyDLwYD-CukYsgDuQLus19&s=10"
            alt="Artefactos de Scrum y sus compromisos: Product Backlog → Product Goal, Sprint Backlog → Sprint Goal, Incremento → Definition of Done"
            className="mx-auto max-h-72 w-auto rounded-xl object-contain"
            loading="lazy"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {ARTEFACTOS.map((a) => (
            <div
              key={a.name}
              className="layer rounded-2xl p-8"
            >
              <span
                className={`inline-flex rounded-full px-3 py-1 font-mono text-xs uppercase tracking-widest ${a.color} ${a.color === 'bg-signal' ? 'text-ink' : 'text-ink'}`}
              >
                {a.owner}
              </span>
              <p className="mt-4 font-display text-lg text-ink">{a.name}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-signal">
                ↔ {a.commitment}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/70">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="layer mt-8 grid gap-4 rounded-xl p-6 sm:grid-cols-3">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-700/60">Artefacto</p>
            <p className="mt-1 font-display text-sm text-ink">Product Backlog</p>
            <p className="font-mono text-xs text-signal">→ Product Goal</p>
          </div>
          <div className="text-center border-t border-ink-950/10 pt-4 sm:border-t border-ink-950/10-0 sm:border-l sm:pt-0 sm:pl-4">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-700/60">Artefacto</p>
            <p className="mt-1 font-display text-sm text-ink">Sprint Backlog</p>
            <p className="font-mono text-xs text-signal">→ Sprint Goal</p>
          </div>
          <div className="text-center border-t border-ink-950/10 pt-4 sm:border-t border-ink-950/10-0 sm:border-l sm:pt-0 sm:pl-4">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-700/60">Artefacto</p>
            <p className="mt-1 font-display text-sm text-ink">Incremento</p>
            <p className="font-mono text-xs text-signal">→ Definition of Done</p>
          </div>
        </div>
      </div>
    </section>
  );
}
