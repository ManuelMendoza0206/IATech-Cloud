import { SectionHeader } from '../../../components/content';

const PILARES = [
  {
    title: 'Transparencia',
    text: 'Todo aspecto significativo del proceso debe ser visible y comprensible. Lenguaje común y estándares compartidos — ej: Definition of Done clara.',
    icon: 'bx-show',
  },
  {
    title: 'Inspección',
    text: 'Progreso y artefactos se evalúan con frecuencia y rigor para detectar desviaciones antes de que escalen en costo.',
    icon: 'bx-search-alt',
  },
  {
    title: 'Adaptación',
    text: 'Si la inspección revela desvíos, el proceso o los materiales se ajustan lo antes posible para minimizar pérdidas futuras.',
    icon: 'bx-refresh',
  },
];

export function Pilares() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="02"
          title="Los Tres Pilares Empíricos"
          description="Sin estos tres soportes el control empírico colapsa. Cada evento y artefacto de Scrum existe para sostenerlos."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {PILARES.map((p) => (
            <div
              key={p.title}
              className="swiss-cell p-8 transition-shadow"
            >
              <i className={`bx ${p.icon} text-3xl text-accent`} />
              <p className="mt-4 font-display text-xl text-ink">{p.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-60/70">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="swiss-cell mt-10 overflow-hidden">
          <img
            src="/images/scrum-04.jpg"
            alt="Diagrama de los tres pilares de Scrum"
            className="h-64 w-full border-b border-ink object-cover grayscale sm:h-80"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
            }}
          />
          <p className="m-4 border border-ink bg-paper p-5">
            <span className="swiss-label block text-accent">Falta el archivo</span>
            <span className="mt-2 block font-display text-base font-black leading-tight break-all text-ink">
              public/images/scrum-04.jpg
            </span>
            <span className="mt-3 block text-sm leading-relaxed text-ink-60">
              Los tres pilares de Scrum como estructura física sostenida: columnas o arcos que
              soportan un techo. Imagen en blanco y negro, encuadre frontal.
            </span>
          </p>
          <p className="px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink-60/50">
            Transparencia → Inspección → Adaptación — ciclo continuo
          </p>
        </div>
      </div>
    </section>
  );
}
