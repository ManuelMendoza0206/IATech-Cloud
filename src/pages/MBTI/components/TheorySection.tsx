import { Photo } from '../../../components/content';
import { Reveal } from '../../../components/ui/Reveal';

const DIMENSIONS = [
  {
    letter: 'E',
    label: 'Extraversión',
    opposite: { letter: 'I', label: 'Introversión' },
    description:
      '¿Dónde diriges tu energía? Los extravertidos recargan interactuando con otros; los introvertidos la recargan en su mundo interno.',
  },
  {
    letter: 'S',
    label: 'Sensing',
    opposite: { letter: 'N', label: 'Intuición' },
    description:
      '¿Cómo procesas información? Los sensoriales confían en hechos concretos y observables; los intuitivos buscan patrones y posibilidades.',
  },
  {
    letter: 'T',
    label: 'Thinking',
    opposite: { letter: 'F', label: 'Feeling' },
    description:
      '¿Cómo tomas decisiones? Los pensadores priorizan lógica y consistencia; los sentidores valoran el impacto humano y la armonía.',
  },
  {
    letter: 'J',
    label: 'Judging',
    opposite: { letter: 'P', label: 'Perceiving' },
    description:
      '¿Cómo enfrentas el mundo exterior? Los juzgadores prefieren estructura y cierre; los perceptivos valoran flexibilidad y opciones abiertas.',
  },
];

const FACTS = [
  { stat: '16', label: 'Tipos posibles' },
  { stat: '4', label: 'Dimensiones' },
  { stat: '2', label: 'Preferencias por dimensión' },
  { stat: '1921', label: 'Base teórica — C.G. Jung' },
];

/**
 * El instrumento.
 *
 * Estructura de la hoja, de arriba hacia abajo:
 *
 *  1. Cabecera de riel — la etiqueta vive en la columna del grid, nunca
 *     flotando sobre el titular. Texto flush izquierda, nunca centrado.
 *  2. Riel de cifras — una sola regla superior que cruza la hoja de borde
 *     a borde. Sustituye a las cuatro celdas iguales.
 *  3. Panel del cubo — pegado al borde izquierdo: su riel de 2px cae en
 *     x=0. El riel izquierdo es el mismo recurso que usa el lede del Hero.
 *  4. Escalera de dimensiones — la letra ES el contenido, así que ocupa
 *     la columna ancha en tamaño de titular y la prosa cuelga a su
 *     derecha. Sustituye a la retícula de cuatro tarjetas iguales.
 *  5. Video — pegado al borde derecho: la columna llega a x=100vw.
 */
export default function TheorySection() {
  return (
    <section id="teoria" className="relative overflow-hidden border-b border-ink bg-paper pb-24 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* 1 — Cabecera de riel */}
      <Reveal className="relative">
        <div className="mx-auto max-w-7xl px-6 pt-20 sm:px-10 sm:pt-28 lg:pt-32">
          <div className="swiss-grid items-start pb-10">
            <div className="col-span-full sm:col-span-3">
              <p className="swiss-rail swiss-label">El instrumento</p>
            </div>
            <div className="col-span-full mt-6 sm:col-span-9 sm:mt-0">
              <h2 className="swiss-display-sm max-w-[18ch] text-ink">¿Qué es el MBTI?</h2>
              <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-ink-60 sm:text-lg">
                El Myers-Briggs Type Indicator clasifica preferencias psicológicas en cómo percibimos
                información y tomamos decisiones. Desarrollado por Isabel Briggs Myers y Katharine Cook
                Briggs a partir del trabajo de Carl Jung.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 2 — Riel de cifras: la regla cruza la hoja entera */}
      <Reveal mode="edge" className="relative">
        <div className="border-t border-ink" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-6 pt-6 sm:px-10 lg:grid-cols-4">
          {FACTS.map((item) => (
            <div key={item.label} className="reveal-figure">
              <p className="font-display text-[clamp(2.25rem,4.5vw,3.25rem)] font-black leading-[0.85] tracking-[-0.04em] tabular-nums text-ink">
                {item.stat}
              </p>
              <p className="swiss-label mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* 3 — Panel pegado al borde izquierdo */}
      <Reveal mode="edge" className="relative mt-20 sm:mt-28">
        <div className="swiss-grid items-stretch border-y border-ink bg-surface">
<div className="col-span-full flex flex-col justify-between border-l-2 border-ink border-y border-ink py-8 pl-5 pr-6 sm:col-span-4 sm:border-y-0 sm:py-14 sm:pl-7 sm:pr-8 lg:pl-10">
            <div>
              <p className="swiss-label text-accent">Las 4 dimensiones</p>
              <p className="mt-6 max-w-[26ch] font-display text-[clamp(1.5rem,2.4vw,2rem)] font-bold leading-[1.06] tracking-[-0.03em] text-ink">
                Cada eje parte el grupo en dos. Cuatro ejes, dieciséis vértices.
              </p>
              <p className="mt-6 max-w-[36ch] text-sm leading-relaxed text-ink-60">
                El cubo de preferencias sitúa los dieciséis tipos como combinaciones de las cuatro
                parejas. Ninguna combinación es mejor que otra: el ordenamiento describe cómo cada
                persona procesa la información y decide, no cuánto vale.
              </p>
            </div>
            <p className="swiss-label mt-8 border-t border-ink-15 pt-3">Jung · 1921</p>
          </div>

          <div className="col-span-full flex items-center justify-center overflow-hidden sm:col-span-8 p-4">
            <Photo
              src="/images/mbti-cubo.jpg"
              alt="Cubo de preferencias MBTI: los cuatro ejes E/I, S/N, T/F y J/P con los dieciséis tipos en los vértices"
              pending="Diagrama del cubo de preferencias MBTI — los cuatro ejes E/I, S/N, T/F y J/P y los dieciséis tipos como vértices. Fondo claro, líneas finas, sin degradados."
              aspect="4/3"
              caption={false}
              className="max-h-[300px] w-full max-w-full [&>div]:border-0 [&_img]:max-h-[300px] [&_img]:w-auto [&_img]:object-contain"
            />
          </div>
        </div>
      </Reveal>

      {/* 4 — Escalera de dimensiones */}
      <Reveal mode="stamp" className="relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mt-20 sm:mt-28">
            {DIMENSIONS.map((dim) => (
              <article key={dim.letter} className="swiss-grid relative items-start gap-y-6 py-8 sm:gap-y-0 sm:py-10">
                <span className="reveal-rule absolute inset-x-0 top-0 h-px bg-ink" aria-hidden="true" />

                {/* Polo preferido: la letra es el contenido, asi que ocupa
                    la columna ancha en tamaño de titular. */}
                <div className="col-span-full sm:col-span-3">
                  <span className="reveal-stamp block font-display text-[clamp(3.75rem,6.5vw,5.25rem)] font-black leading-[0.78] tracking-[-0.05em] text-ink">
                    {dim.letter}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold leading-none tracking-[-0.01em] text-ink sm:text-lg">
                    {dim.label}
                  </h3>
                </div>

                {/* 6 columnas ≈ 69ch: la medida de lectura completa. */}
                <p className="reveal-prose col-span-full text-[15px] leading-relaxed text-ink-60 sm:col-start-4 sm:col-span-6 sm:text-base">
                  {dim.description}
                </p>

                {/* El polo opuesto cierra la fila contra el borde derecho. */}
                <div className="reveal-opposite col-span-full flex items-baseline gap-3 border-t border-ink-15 pt-4 sm:col-start-10 sm:col-span-3 sm:flex-col sm:items-end sm:gap-2 sm:border-t-0 sm:pt-0 sm:text-right">
                  <span className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-none tracking-[-0.03em] text-ink-40">
                    {dim.opposite.letter}
                  </span>
                  <span className="swiss-label">vs. {dim.opposite.label}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* 5 — Video pegado al borde derecho */}
      <Reveal mode="edge" className="relative mt-24 sm:mt-32">
        <div className="swiss-grid items-start border-t border-ink">
          <div className="col-span-full px-6 py-10 sm:col-span-5 sm:px-0 sm:py-16 sm:pl-10 sm:pr-8 lg:pl-16">
            <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Video introductorio
            </h3>
            <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-ink-60 sm:text-[15px]">
              Una explicación visual de las 16 preferencias y cómo se potencian en equipos de trabajo
              reales.
            </p>
          </div>

          <div className="reveal-edge-right col-span-full sm:col-span-7">
            <div className="relative aspect-video bg-paper sm:border-l sm:border-ink">
              {/* Capa de respaldo: si el embed no carga, el panel sigue
                  leyendose como una pieza del sistema, no como un hueco. */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8" aria-hidden="true">
                <span className="swiss-label">Video · YouTube</span>
                <span className="font-display text-lg font-bold leading-tight tracking-[-0.02em] text-ink sm:text-2xl">
                  Intro a las 16 preferencias MBTI
                </span>
              </div>
              <iframe
                src="https://www.youtube.com/embed/vcp6hPnUgyU"
                title="Intro a las 16 preferencias MBTI"
                className="relative h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}