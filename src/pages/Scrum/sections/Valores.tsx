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
    <section className="bg-navy-900 py-16 sm:py-20">
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
                  className="rounded-xl border border-signal/20 bg-navy-950/50 p-6"
                >
                  <div className="flex items-center gap-3">
                    <i className={`bx ${v.icon} text-2xl text-signal`} />
                    <div>
                      <p className="font-display text-base text-mist">{v.title}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-signal">
                        {v.english}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-mist/60">{v.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-signal/10" />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj24EmKcz_4A_CkYEHq_W4riQnYaSAAamMWqPLApPS1A&s=10"
              alt="Los cinco valores de Scrum"
              className="w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-mist/40">
              Commitment · Focus · Openness · Respect · Courage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
