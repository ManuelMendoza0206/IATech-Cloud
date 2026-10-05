import { SectionHeader } from '../../../components/content';

const VALORES = [
  {
    title: 'Compromiso',
    english: 'Commitment',
    text: 'Entrega personal a los objetivos del equipo y dar lo mejor de sí.',
    icon: 'bx-target-lock',
  },
  {
    title: 'Foco',
    english: 'Focus',
    text: 'Concentración en el Objetivo del Sprint para maximizar calidad.',
    icon: 'bx-bullseye',
  },
  {
    title: 'Apertura',
    english: 'Openness',
    text: 'Transparencia honesta sobre trabajo, retos y oportunidades.',
    icon: 'bx-door-open',
  },
  {
    title: 'Respeto',
    english: 'Respect',
    text: 'Reconocimiento mutuo como profesionales capaces y autónomos.',
    icon: 'bx-heart',
  },
  {
    title: 'Coraje',
    english: 'Courage',
    text: 'Asumir riesgos calculados y abordar problemas complejos de frente.',
    icon: 'bx-shield-quarter',
  },
];

export function Valores() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeader
              number="03"
              title="Los Cinco Valores de Scrum"
              description="Sin esta base cultural Scrum se vuelve un checklist mecánico de reuniones. Los valores hacen que el framework funcione."
              variant="dark"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {VALORES.map((v) => (
                <div
                  key={v.title}
                  className="swiss-cell p-6"
                >
                  <div className="flex items-center gap-3">
                    <i className={`bx ${v.icon} text-2xl text-accent`} />
                    <div>
                      <p className="font-display text-base text-ink">{v.title}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                        {v.english}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-ink/60">{v.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="swiss-chip absolute -inset-4 -z-10" />
            <img
              src="/images/scrum-02.jpg"
              alt="Los cinco valores de Scrum"
              className="w-full border border-ink object-cover grayscale"
              loading="lazy"
              onError={(event) => {
                const el = event.currentTarget;
                el.style.display = 'none';
                el.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <p className="mt-4 border-l-2 border-ink-15 pl-5 font-mono text-xs uppercase tracking-widest text-ink/40">
              Commitment · Focus · Openness · Respect · Courage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
