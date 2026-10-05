import { SectionHeader } from '../../../components/content';

const ELEMENTOS = [
  {
    icon: 'bx-circle',
    title: 'Evento',
    english: 'Event · círculo',
    color: '#059669',
    text: 'Algo que ocurre: un inicio, un fin o un estado intermedio. No ejecuta trabajo, marca los límites temporales del proceso.',
    pregunta: '¿Cuándo empieza o termina?',
  },
  {
    icon: 'bx-rectangle',
    title: 'Actividad',
    english: 'Activity · rectángulo redondeado',
    color: '#2563eb',
    text: 'El trabajo que alguien ejecuta: una tarea, un subproceso o un servicio automático. Siempre vive dentro de una lane.',
    pregunta: '¿Qué se hace?',
  },
  {
    icon: 'bx-diamond',
    title: 'Gateway',
    english: 'Gateway · rombo',
    color: '#d97706',
    text: 'Un punto de decisión que divide o une caminos. Cada salida lleva una etiqueta con la condición que la activa.',
    pregunta: '¿Qué camino se toma?',
  },
  {
    icon: 'bx-right-arrow-alt',
    title: 'Flujo de secuencia',
    english: 'Sequence Flow · flecha',
    color: '#7c3aed',
    text: 'Conecta los elementos en orden de ejecución. Los flujos de retorno modelan el rework: ajustar, reintentar, revertir.',
    pregunta: '¿En qué orden?',
  },
  {
    icon: 'bx-columns',
    title: 'Pool y lane',
    english: 'Pool & Lane · carriles',
    color: '#0ea5e9',
    text: 'El pool marca la frontera del proceso; cada lane es un rol responsable. Leer una lane cuenta la historia de ese rol.',
    pregunta: '¿Quién lo hace?',
  },
];

export function Notacion() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="02"
          title="Los cinco elementos"
          description="Toda la notación BPMN se reduce a cinco familias. Si sabés reconocer estas cinco formas, podés leer cualquier diagrama."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ELEMENTOS.map((e, i) => (
            <article
              key={e.title}
              className={`group relative overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div
                className="absolute inset-x-6 top-0 h-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{ background: `linear-gradient(to right, transparent, ${e.color}, transparent)` }}
                aria-hidden="true"
              />
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-xl text-white shadow-sm"
                    style={{ backgroundColor: e.color }}
                  >
                    <i className={`bx ${e.icon}`} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold leading-none tracking-tight text-navy-950">
                      {e.title}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: e.color }}>
                      {e.english}
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-[14px] leading-relaxed text-navy-700/70">{e.text}</p>
              <p className="mt-4 border-t border-navy-900/10 pt-3 font-mono text-[11px] uppercase tracking-wider text-navy-700/50">
                {e.pregunta}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-navy-900/10 bg-white p-6 sm:p-7">
          <p className="font-mono text-[11px] uppercase tracking-widest text-signal">Cómo leerlos juntos</p>
          <p className="mt-3 text-sm leading-relaxed text-navy-700/80">
            Un <strong className="text-navy-900">evento</strong> abre el proceso, las{' '}
            <strong className="text-navy-900">actividades</strong> avanzan por los{' '}
            <strong className="text-navy-900">flujos</strong>, los{' '}
            <strong className="text-navy-900">gateways</strong> deciden y cada paso ocurre en la{' '}
            <strong className="text-navy-900">lane</strong> de su responsable. Cinco formas, un
            solo recorrido.
          </p>
        </div>

        {/* Infografía de referencia */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-900/10 px-5 py-4">
            <p className="font-mono text-[11px] uppercase tracking-widest text-navy-700/60">
              Referencia · Componentes BPMN 2.0
            </p>
            <a
              href="https://www.cybermedian.com/wp-content/uploads/2026/04/bpmn-2-0-components-visual-logic-infographic-charcoal-sketch.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-navy-700/60 transition hover:text-signal"
            >
              Ver en tamaño completo
              <i className="bx bx-external-link text-sm" aria-hidden="true" />
            </a>
          </div>
          <img
            src="https://www.cybermedian.com/wp-content/uploads/2026/04/bpmn-2-0-components-visual-logic-infographic-charcoal-sketch.jpg"
            alt="Infografía de los componentes BPMN 2.0 y su lógica visual"
            loading="lazy"
            decoding="async"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
