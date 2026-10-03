import { SectionHeader, VideoEmbed } from '../../../components/content';
import type { TalentoItem } from '../types';

const GOBERNANZA: TalentoItem[] = [
  { title: 'Gestión de proyectos', text: 'Planificación estructurada, ejecución y seguimiento de iniciativas tecnológicas con entregas medibles.' },
  { title: 'Gestión de riesgos', text: 'Identificación temprana y mitigación proactiva de amenazas, interrupciones y deuda técnica.' },
  { title: 'Marcos y metodologías', text: 'Aplicación de ITIL, COBIT y prácticas de mejora continua junto a metodologías ágiles.' },
  { title: 'Ciclo de vida y KPIs', text: 'Seguimiento del ciclo de vida tecnológico con indicadores de disponibilidad, costos y valor.' },
];

const TAGS = ['ITIL', 'COBIT', 'Ágiles', 'Mejora Continua'];

export function ProcesosGobernanza() {
  return (
    <section className="bg-canvas py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader number="03" title="Procesos y Gobernanza" />

            <div className="mt-8 space-y-6">
              {GOBERNANZA.map((g) => (
                <div
                  key={g.title}
                  className="layer reveal rounded-2xl p-6"
                >
                  <p className="font-display text-lg sm:text-xl text-ink">{g.title}</p>
                  <p className="mt-1 text-base sm:text-lg leading-relaxed text-ink-700">{g.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ink-950/10 px-4 py-1.5 font-mono text-xs text-ink-700/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <VideoEmbed
            src="https://www.youtube.com/embed/20WlkQ5qwcU"
            title="Gestión de Tecnología de la Información"
          />
        </div>
      </div>
    </section>
  );
}
