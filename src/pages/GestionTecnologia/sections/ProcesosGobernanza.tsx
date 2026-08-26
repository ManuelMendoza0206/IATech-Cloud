import { SectionHeader, VideoEmbed } from '../../../components/content';
import type { TalentoItem } from '../types';

const GOBERNANZA: TalentoItem[] = [
  { title: 'Gestión de proyectos', text: 'Planificación estructurada, ejecución y seguimiento de iniciativas tecnológicas.' },
  { title: 'Gestión de riesgos', text: 'Identificación temprana y mitigación proactiva de amenazas e interrupciones.' },
  { title: 'Marcos y metodologías', text: 'Aplicación de ITIL, COBIT y prácticas de mejora continua / metodologías ágiles.' },
];

const TAGS = ['ITIL', 'COBIT', 'Ágiles', 'Mejora Continua'];

export function ProcesosGobernanza() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader number="03" title="Procesos y Gobernanza" />

            <div className="mt-8 space-y-6">
              {GOBERNANZA.map((g) => (
                <div
                  key={g.title}
                  className="rounded-xl border border-navy-900/10 p-5"
                >
                  <p className="font-display text-base text-navy-900">{g.title}</p>
                  <p className="mt-1 text-sm text-navy-700/70">{g.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-navy-900/10 px-4 py-1.5 font-mono text-xs text-navy-700/70"
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
