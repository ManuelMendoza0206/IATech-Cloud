const DIMENSIONS = [
  {
    letter: 'E',
    label: 'Extraversión',
    opposite: 'I — Introversión',
    description:
      '¿Dónde diriges tu energía? Los extravertidos recargan batería interactuando con otros; los introvertidos la recargan en su mundo interno.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    letter: 'S',
    label: 'Sensing',
    opposite: 'N — Intuición',
    description:
      '¿Cómo procesas información? Los sensoriales confían en hechos concretos y datos observables; los intuitivos buscan patrones y posibilidades.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    letter: 'T',
    label: 'Thinking',
    opposite: 'F — Feeling',
    description:
      '¿Cómo tomas decisiones? Los pensadores priorizan lógica y consistencia; los sentidores valoran el impacto humano y la armonía.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    letter: 'J',
    label: 'Judging',
    opposite: 'P — Perceiving',
    description:
      '¿Cómo enfrentas el mundo exterior? Los juzgadores prefieren estructura, planificación y cierre; los perceptivos valoran flexibilidad y opciones abiertas.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

const FACTS = [
  { stat: '16', label: 'Tipos posibles' },
  { stat: '4', label: 'Dimensiones' },
  { stat: '2', label: ' Preferencias por dimensión' },
  { stat: '1921', label: 'Año de publicación original' },
];

export default function TheorySection() {
  return (
    <section id="teoria" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-navy-700/60">
            Fundamentos
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            ¿Qué es el MBTI?
          </h2>
          <p className="mt-4 text-navy-700/75">
            El Myers-Briggs Type Indicator es un marco de referencia que clasifica
            las preferencias psicológicas en cómo las personas perciben la información
            y toman decisiones. Desarrollado por Isabel Briggs Myers y Katharine Cook
            Briggs a partir de los trabalenguas de Carl Jung.
          </p>
        </div>

        <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {FACTS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center rounded-xl border border-slate-200 bg-mist/50 py-5 text-center transition hover:border-signal/40 hover:shadow-md"
            >
              <span className="font-display text-3xl font-bold text-signal">
                {item.stat}
              </span>
              <span className="mt-1 font-mono text-[11px] uppercase tracking-wider text-navy-700/60">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {DIMENSIONS.map((dim) => (
            <article
              key={dim.letter}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-signal/50 hover:shadow-xl sm:p-8"
            >
              <div className="absolute inset-x-8 top-0 h-0.5 bg-gradient-to-r from-transparent via-signal to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 font-display text-xl font-bold text-signal">
                    {dim.letter}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy-900">
                      {dim.label}
                    </h3>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-signal">
                      vs. {dim.opposite}
                    </p>
                  </div>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-signal/20 bg-signal/10 text-signal transition group-hover:bg-signal group-hover:text-navy-950">
                  {dim.icon}
                </span>
              </div>

              <p className="mt-5 leading-relaxed text-navy-700/75">
                {dim.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-14">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
            <img
              src="/images/extra.jpg"
              alt="MBTI — Visual complementario"
              className="h-64 w-full object-cover sm:h-80"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-14">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-navy-700/60">
              Aprende más
            </span>
            <h3 className="mt-3 font-display text-2xl font-semibold text-navy-900">
              Video introductorio
            </h3>
            <p className="mt-2 text-sm text-navy-700/70">
              Una explicación visual de las 16 personalidades y cómo se aplican en
              equipos de trabajo.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/vcp6hPnUgyU"
                title="Intro a las 16 personalidades MBTI"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
