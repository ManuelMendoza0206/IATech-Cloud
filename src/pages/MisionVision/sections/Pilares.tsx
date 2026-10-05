import { useEffect, useRef } from 'react';
import { createScope, createTimeline, onScroll, stagger, utils } from 'animejs';

const PILLARS = [
  {
    title: 'Escalabilidad',
    description: 'Infraestructura en la nube que crece con el ecosistema IATECH sin sacrificar estabilidad.',
  },
  {
    title: 'Resiliencia',
    description: 'Arquitecturas preparadas para absorber fallos y mantener el servicio clínico en marcha.',
  },
  {
    title: 'Alta disponibilidad',
    description: 'Continuidad operativa 24/7 para que el software médico nunca deje de responder.',
  },
  {
    title: 'Colaboración clínica',
    description: 'Acceso uniforme a la información de salud, sin fronteras geográficas entre equipos.',
  },
  {
    title: 'Excelencia técnica',
    description: 'Rendimiento, velocidad y despliegues que convierten a Cloud en referente interno.',
  },
  {
    title: 'Valor sostenible',
    description: 'Infraestructuras eficientes que maximizan la inversión de nuestros socios.',
  },
];

export default function Pilares() {
  const listRef = useRef<HTMLUListElement>(null);

  /**
   * Los seis pilares se alinean en cascada cuando la lista entra en viewport.
   * Cada celda se revela por corte horizontal, como una banda que se imprime,
   * y su filete superior se dibuja en acento. El estado inicial lo aplica JS:
   * sin JS la lista queda visible.
   */
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const scope = createScope({ root: list }).add(() => {
      const cells = list.querySelectorAll<HTMLElement>('.pillar');
      utils.set('.pillar', { opacity: 0, clipPath: 'inset(0 100% 0 0)' });
      utils.set('.pillar-rule', { scaleX: 0 });

      createTimeline({
        defaults: { ease: 'outExpo' },
        autoplay: onScroll({ target: list, enter: 'bottom 15%' }),
      })
        .add(
          cells,
          {
            opacity: [0, 1],
            clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
            duration: 680,
            delay: stagger(80),
          },
          0
        )
        .add(
          '.pillar-rule',
          { scaleX: [0, 1], duration: 520, delay: stagger(80) },
          120
        );
    });

    return () => scope.revert();
  }, []);

  return (
    <section id="pilares" className="relative overflow-hidden bg-paper py-20 text-ink sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-6 border-b border-ink pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-accent">
              Cómo lo hacemos realidad
            </span>
            <h2 className="swiss-display-sm mt-5">
              Pilares que sostienen el área
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/65 sm:text-base">
            Extraídos de nuestra misión y visión: el estándar con el que diseñamos,
            operamos e integramos cada servicio en la nube.
          </p>
        </div>

        <ul ref={listRef} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {PILLARS.map((pillar, index) => (
            <li
              key={pillar.title}
              className="pillar swiss-cell group relative overflow-hidden p-7 backdrop-blur-sm transition-colors duration-150 hover:bg-ink sm:p-8"
            >
              <span
                className="pillar-rule absolute inset-x-0 top-0 h-[3px] origin-left bg-accent"
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-sm text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className="mt-1 block h-2 w-8 bg-ink-15 transition-colors duration-150 group-hover:bg-accent"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] transition-colors duration-150 group-hover:text-paper sm:text-[1.75rem]">
                {pillar.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/70 transition-colors duration-150 group-hover:text-paper/75">
                {pillar.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}