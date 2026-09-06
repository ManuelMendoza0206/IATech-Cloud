import { TwoColumnLayout, SectionHeader } from '../../../components/content';

const CONCEPTOS = [
  {
    title: 'Historias de Usuario',
    text: 'Formato breve desde la perspectiva del usuario: "Como [rol], quiero [acción], para [beneficio]".',
  },
  {
    title: 'Criterios de Aceptación',
    text: 'Condiciones específicas y medibles que validan si una historia funciona según lo esperado.',
  },
  {
    title: 'Refinamiento (Backlog Refinement)',
    text: 'Actividad continua donde el equipo desglosa, estima y detalla elementos del Backlog antes de planificarlos.',
  },
  {
    title: 'Velocidad (Velocity)',
    text: 'Métrica de puntos de historia completados por Sprint. Útil para calibrar estimaciones futuras, no para comparar equipos.',
  },
];

export function ConceptosOperativos() {
  return (
    <TwoColumnLayout
      imageSrc="https://insideproduct.co/wp-content/uploads/2025/04/refinement-board.png"
      imageAlt="Board de refinamiento con historias de usuario y criterios de aceptación"
      imagePosition="right"
      bg="mist"
      id="conceptos"
    >
      <SectionHeader
        number="07"
        title="Conceptos Operativos Complementarios"
        description="No forman parte de la guía oficial estricta, pero son estándares habituales para ejecutar Scrum en el día a día."
      />
      <div className="mt-8 space-y-6">
        {CONCEPTOS.map((c) => (
          <div key={c.title} className="flex items-start gap-4">
            <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-signal" />
            <div>
              <p className="font-display text-base text-navy-900">{c.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-navy-700/70">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-xl border border-navy-900/10 bg-white p-5 shadow-sm">
        <p className="font-mono text-xs uppercase tracking-widest text-signal">Tip práctico</p>
        <p className="mt-2 text-sm text-navy-700/70">
          Refinar el Backlog cada Sprint evita que el Planning se vuelva una sesión de descubrimiento. La
          Velocity es una brújula del equipo, <span className="font-semibold text-navy-900">no un KPI de productividad</span>.
        </p>
      </div>
    </TwoColumnLayout>
  );
}
