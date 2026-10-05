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
      imageSrc="/images/scrum-08.jpg"
      imageAlt="Board de refinamiento con historias de usuario y criterios de aceptación"
      imagePending="Fotografía de un tablero de refinamiento del backlog: tarjetas de historia de usuario ordenadas en columnas, con anotaciones manuscritas."
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
            <span className="mt-1 h-3 w-3 shrink-0 bg-accent" />
            <div>
              <p className="font-display text-base text-ink">{c.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-60/70">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="swiss-cell mt-8 p-5">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Tip práctico</p>
        <p className="mt-2 text-sm text-ink-60/70">
          Refinar el Backlog cada Sprint evita que el Planning se vuelva una sesión de descubrimiento. La
          Velocity es una brújula del equipo, <span className="font-semibold text-ink">no un KPI de productividad</span>.
        </p>
      </div>
    </TwoColumnLayout>
  );
}
