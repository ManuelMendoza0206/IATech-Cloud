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
    <section className="bg-mist py-16 sm:py-20">
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
              className="rounded-2xl border border-navy-900/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <i className={`bx ${p.icon} text-3xl text-signal`} />
              <p className="mt-4 font-display text-xl text-navy-900">{p.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy-700/70">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNN8VTQG1QWpqmMYN34qEPryzlc_y7ipv_LNDF7EkosA&s=10"
            alt="Diagrama de los tres pilares de Scrum"
            className="h-64 w-full object-cover sm:h-80"
            loading="lazy"
          />
          <p className="px-6 py-3 font-mono text-xs uppercase tracking-widest text-navy-700/50">
            Transparencia → Inspección → Adaptación — ciclo continuo
          </p>
        </div>
      </div>
    </section>
  );
}
