import type { ArrowGroup } from '../data/diagram';

const POSITION_LABEL: Record<ArrowGroup['position'], string> = {
  left: 'Flechas desde la izquierda',
  top: 'Flechas desde arriba',
  bottom: 'Flechas desde abajo',
  right: 'Flechas hacia la derecha',
};

const POSITION_ICON: Record<ArrowGroup['position'], string> = {
  left: 'bx-arrow-from-left',
  top: 'bx-down-arrow-alt',
  bottom: 'bx-up-arrow-alt',
  right: 'bx-arrow-from-right',
};

export default function ArrowGroupSection({ group }: { group: ArrowGroup }) {
  return (
    <section className="bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
          {/* Columna izquierda: encabezado */}
          <div>
            <div className="flex items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl text-xl text-white"
                style={{ backgroundColor: group.color }}
                aria-hidden="true"
              >
                <i className={`bx ${POSITION_ICON[group.position]}`} />
              </span>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink-700/60">
                  Sección {group.number}
                </span>
                <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: group.color }}>
                  {POSITION_LABEL[group.position]}
                </p>
              </div>
            </div>

            <h2 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
              {group.label}{' '}
              <span className="text-ink-700/40">/ {group.english}</span>
            </h2>

            <p className="mt-5 leading-relaxed text-ink-700/80">{group.definition}</p>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-ink-700/50">
              {group.items.length} {group.items.length === 1 ? 'elemento' : 'elementos'} en el diagrama
            </p>
          </div>

          {/* Columna derecha: items */}
          <ul className="flex flex-col gap-4">
            {group.items.map((item, i) => (
              <li
                key={item.title}
                className="layer group relative overflow-hidden rounded-2xl p-6 transition sm:p-7"
              >
                <span
                  className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                  style={{ backgroundColor: group.color }}
                  aria-hidden="true"
                />
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-semibold text-white"
                    style={{ backgroundColor: group.color }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-ink-700/80">{item.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
