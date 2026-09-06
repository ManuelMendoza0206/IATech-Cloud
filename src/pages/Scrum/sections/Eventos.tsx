import { SectionHeader, VideoEmbed } from '../../../components/content';

const EVENTOS = [
  {
    title: 'Sprint',
    duration: '1–4 semanas',
    purpose:
      'Contenedor de todos los eventos. Se materializa una idea en un incremento utilizable. Sin cambios que pongan en riesgo el objetivo.',
    icon: 'bx-repeat',
  },
  {
    title: 'Sprint Planning',
    duration: 'Inicio del Sprint',
    purpose:
      '¿Por qué es valioso este Sprint? ¿Qué se puede hacer? ¿Cómo se hará? Se define Objetivo, selección y estrategia.',
    icon: 'bx-calendar-check',
  },
  {
    title: 'Daily Scrum',
    duration: '15 min diarios',
    purpose:
      'Solo Developers. Inspeccionar progreso hacia el Sprint Goal y reajustar el plan de las próximas 24 horas.',
    icon: 'bx-time-five',
  },
  {
    title: 'Sprint Review',
    duration: 'Fin del Sprint',
    purpose:
      'Presentación del incremento a stakeholders. Se analiza lo obtenido y se ajusta el Product Backlog.',
    icon: 'bx-show',
  },
  {
    title: 'Sprint Retrospective',
    duration: 'Fin del Sprint',
    purpose:
      'Autocrítica constructiva sobre personas, relaciones, procesos y herramientas. Acciones concretas para el siguiente Sprint.',
    icon: 'bx-refresh',
  },
];

export function Eventos() {
  return (
    <section className="bg-mist py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="05"
          title="Los Eventos de Scrum"
          description="Bloques de tiempo predefinidos (timeboxes) para inspección y adaptación sin reuniones innecesarias."
        />

        {/* Diagrama ciclo */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-4 shadow-sm sm:p-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAj6dwIxhErU3Rg7TiPMs8-U81Er_Jid1jcp16Kh1hfIHORkgk-CHA0dhU&s=10"
            alt="Ciclo de eventos de Scrum: Sprint Planning → Daily Scrum → Sprint Review → Retrospective"
            className="mx-auto max-h-72 w-auto rounded-xl object-contain"
            loading="lazy"
          />
          <div className="mt-4 flex flex-wrap justify-center gap-2 font-mono text-xs">
            <span className="rounded-full bg-navy-900 px-3 py-1 text-mist">Sprint Planning</span>
            <span className="text-navy-700/40">→</span>
            <span className="rounded-full bg-signal px-3 py-1 text-navy-900">Daily Scrum</span>
            <span className="text-navy-700/40">→</span>
            <span className="rounded-full bg-navy-900 px-3 py-1 text-mist">Review</span>
            <span className="text-navy-700/40">→</span>
            <span className="rounded-full bg-navy-900 px-3 py-1 text-mist">Retrospective</span>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTOS.map((e) => (
            <div
              key={e.title}
              className="rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <i className={`bx ${e.icon} text-2xl text-signal`} />
                <span className="rounded-full bg-mist px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-navy-700/60">
                  {e.duration}
                </span>
              </div>
              <p className="mt-3 font-display text-base text-navy-900">{e.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/70">{e.purpose}</p>
            </div>
          ))}
        </div>

        {/* Video */}
        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-widest text-navy-700/60">
            Video recomendado
          </p>
          <h3 className="mt-2 font-display text-xl text-navy-900">
            Scrum en acción: del Planning a la Retrospective
          </h3>
          <VideoEmbed src="https://www.youtube.com/embed/vuBFzAdaHDY" title="Scrum - Eventos y ciclo Sprint" />
          <p className="mt-3 text-sm text-navy-700/60">
            Fuente:{' '}
            <a
              href="https://youtu.be/vuBFzAdaHDY?si=-P5BU_DpxF9Ap-9C"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-signal underline-offset-4 hover:text-navy-900"
            >
              Ver en YouTube
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
