import { useEffect, useRef } from 'react';
import { createScope, createTimeline, onScroll, stagger, utils } from 'animejs';

const STATEMENTS = [
  {
    id: 'mision',
    numeral: '01',
    kicker: 'Misión',
    title: 'Misión',
    lead: 'Infraestructura cloud para que la atención clínica no se detenga.',
    body: 'Proveer la infraestructura en la nube escalable, resiliente y de alta disponibilidad para el ecosistema de IATECH, garantizando la continuidad operativa de nuestras soluciones de software médico. Nos comprometemos a habilitar la colaboración clínica y el acceso a la información de salud, trabajando en estrecha sinergia y colaboración con el resto de áreas para facilitar un entorno tecnológico robusto, integrado y confiable.',
    highlights: [
      'Escalabilidad y resiliencia',
      'Continuidad del software médico',
      'Sinergia entre áreas',
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" />
      </svg>
    ),
  },
  {
    id: 'vision',
    numeral: '02',
    kicker: 'Visión',
    title: 'Visión',
    lead: 'Excelencia técnica que redefine la experiencia clínica en la nube.',
    body: 'Ser el referente de excelencia técnica en la optimización y despliegue de los servicios basados en la nube de IATECH, garantizando que nuestras soluciones médicas alcancen el más alto rendimiento, velocidad y disponibilidad operativa. Aspiramos a redefinir la experiencia clínica facilitando un acceso uniforme a la información de salud, implementando arquitecturas resilientes que aseguren la continuidad del servicio en todo momento y maximicen el valor de la inversión de nuestros socios mediante infraestructuras digitales eficientes y sostenibles.',
    highlights: [
      'Referente de excelencia',
      'Rendimiento y disponibilidad',
      'Infraestructura sostenible',
    ],
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12s-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

/** Selectores que la secuencia revela, en orden de entrada. */
const QUERY = {
  rule: '.stmt-rule',
  numeral: '.stmt-numeral',
  kicker: '.stmt-kicker',
  icon: '.stmt-icon',
  title: '.stmt-title',
  lead: '.stmt-lead',
  body: '.stmt-body',
  chips: '.stmt-chip',
};

export default function Declaraciones() {
  const sectionRef = useRef<HTMLElement>(null);

  /**
   * Cada declaración se imprime: el filete de acento entra de izquierda a
   * derecha, el numeral cae desde arriba, el titular se revela por corte
   * vertical, el lead entra como un barrido y el cuerpo y los chips lo siguen.
   *
   * El estado inicial lo aplica JS con `utils.set`, no CSS: si el script no
   * corre, el texto queda VISIBLE en lugar de atrapado en opacity 0.
   */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const scope = createScope({ root: section }).add(() => {
      section.querySelectorAll<HTMLElement>('.stmt').forEach((block) => {
        const part = (key: keyof typeof QUERY) => block.querySelector<HTMLElement>(QUERY[key]);
        const chips = Array.from(block.querySelectorAll<HTMLElement>(QUERY.chips));

        const rule = part('rule');
        const numeral = part('numeral');
        const kicker = part('kicker');
        const icon = part('icon');
        const title = part('title');
        const lead = part('lead');
        const body = part('body');

        if (!rule || !numeral || !kicker || !title || !lead || !body) return;

        utils.set(rule, { scaleX: 0 });
        utils.set([numeral, kicker, title, lead, body], { opacity: 0 });
        utils.set(chips, { opacity: 0 });
        if (icon) utils.set(icon, { opacity: 0, rotate: -35 });

        createTimeline({
          defaults: { ease: 'outExpo' },
          autoplay: onScroll({ target: block, enter: 'bottom 18%' }),
        })
          .add(rule, { scaleX: [0, 1], duration: 620 }, 0)
          .add(numeral, { opacity: [0, 1], translateY: [-20, 0], duration: 520 }, 90)
          .add(kicker, { opacity: [0, 1], translateX: [-10, 0], duration: 420 }, 160)
          .add(title, {
            opacity: [0, 1],
            clipPath: ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
            duration: 760,
          }, 200)
          .add(
            lead,
            {
              opacity: [0, 1],
              clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
              duration: 720,
            },
            340
          )
          .add(body, { opacity: [0, 1], translateY: [14, 0], duration: 640 }, 460)
          .add(
            chips,
            { opacity: [0, 1], translateY: [10, 0], delay: stagger(70), duration: 420 },
            620
          );

        if (icon) {
          createTimeline({
            defaults: { ease: 'outExpo' },
            autoplay: onScroll({ target: block, enter: 'bottom 18%' }),
          }).add(icon, { opacity: [0, 1], rotate: [0, 0], duration: 520 }, 100);
        }
      });
    });

    return () => scope.revert();
  }, []);

  return (
    <section id="declaraciones" ref={sectionRef} className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-steel, #90bede) 1px, transparent 1px), linear-gradient(to right, var(--color-steel, #90bede) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-3xl border-l-2 border-accent pl-6">
          <span className="swiss-label text-accent">Declaraciones</span>
          <h2 className="swiss-display-sm mt-5 text-ink">
            Lo que hacemos y hacia dónde vamos
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-60 sm:text-lg">
            Dos compromisos que orientan cada arquitectura, cada despliegue y cada
            integración del ecosistema IATECH.
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-10 sm:mt-20 sm:gap-12">
          {STATEMENTS.map((item) => (
            <article key={item.id} className="stmt swiss-cell relative overflow-hidden p-8 sm:p-12">
              <span className="stmt-rule absolute inset-x-0 top-0 h-[3px] origin-left bg-accent" aria-hidden="true" />

              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex items-baseline gap-4">
                  <span className="stmt-numeral font-display text-[clamp(3rem,6vw,4.5rem)] font-black leading-none tracking-[-0.04em] text-accent">
                    {item.numeral}
                  </span>
                  <span className="stmt-kicker swiss-label">{item.kicker}</span>
                </div>
                <span className="stmt-icon swiss-icon flex h-14 w-14 shrink-0 items-center justify-center text-accent">
                  {item.icon}
                </span>
              </div>

              <h3 className="stmt-title swiss-display-sm mt-10 text-ink">{item.title}</h3>

              <p className="stmt-lead mt-5 max-w-[38ch] text-xl font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-2xl">
                {item.lead}
              </p>

              <p className="stmt-body mt-8 max-w-[68ch] text-base leading-relaxed text-ink-60/85 sm:text-lg">
                {item.body}
              </p>

              <ul className="mt-10 flex flex-wrap gap-2">
                {item.highlights.map((tag) => (
                  <li
                    key={tag}
                    className="stmt-chip swiss-chip px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}