import { RailHeader, Sources, SourceList } from '../../../components/content';
import { Reveal } from '../../../components/ui/Reveal';

/**
 * Fiabilidad del MBTI Form M.
 *
 * Datos de la síntesis psicométrica de Erford et al. (2025), publicada en el
 * Journal of Psychological Type Research Digest y en Journal of Counseling &
 * Development 103(4), 403-407. La revisión analiza 193 estudios publicados
 * entre 1999 y 2024, con una muestra agregada de 57.170 participantes,
 * contrastada contra la muestra normativa del Manual MBTI (1998/2009).
 *
 * Consistencia interna hallada: 0.845-0.921 entre subescalas y puntajes
 * totales. La convergencia con otros seis instrumentos de personalidad fue
 * robusta.
 *
 * Limitación que la propia revisión declara: los estudios de validez
 * estructural y de fiabilidad-retest no aparecen en la literatura muestreada,
 * fuera del propio Manual MBTI.
 */

interface Evidence {
  value: string;
  label: string;
  detail: string;
}

const EVIDENCE: Evidence[] = [
  {
    value: '0,845–0,921',
    label: 'Consistencia interna',
    detail:
      'Rango de los coeficientes de consistencia interna entre subescalas y puntajes totales del MBTI Form M.',
  },
  {
    value: '193',
    label: 'Estudios analizados',
    detail:
      'Trabajos revisados que usaron MBTI Form M entre 1999 y 2024, con una muestra agregada de 57.170 participantes.',
  },
  {
    value: '57.170',
    label: 'Participantes agregados',
    detail:
      'Contrastados contra las proporciones normativas publicadas en el Manual MBTI (3.ª edición, 1998/2009).',
  },
  {
    value: '6',
    label: 'Instrumentos de convergencia',
    detail:
      'La evidencia convergente con constructos similares fue robusta a través de seis instrumentos de personalidad.',
  },
];

const CRITICISMS = [
  {
    claim: 'No es una herramienta diagnóstica.',
    response:
      'El MBTI fue diseñado para identificar preferencias de personalidad, no para diagnosticar rasgos ni trastornos. La crítica de que «los psicólogos no lo usan» suele originarse en un artículo de 2012 sobre un investigador cuyo trabajo no era sobre MBTI.',
    href: 'https://www.themyersbriggs.com/en-us/access-resources/articles/mbti-facts-common-criticisms',
  },
  {
    claim: 'Los resultados cambian entre aplicaciones.',
    response:
      'La correlación de fiabilidad-retest reportada por el propio fabricante para el MBTI Global Step I, en periodos de 6 a 15 semanas, es de 0.81 a 0.86 en las cuatro parejas de preferencia. Las variaciones reales se concentran en quienes tienen un Preference Clarity Index bajo.',
    href: 'https://www.themyersbriggs.com/en-us/access-resources/articles/mbti-facts-common-criticisms',
  },
  {
    claim: 'Origen de las críticas psicométricas.',
    response:
      'Boyle (1995) revisó la psicometría del MBTI y recomendó precaución en el uso organizacional, señalando la falta de normas locales comprehensivas. La crítica atañe al uso que se hace del instrumento, no a la existencia del test.',
    href: 'https://psycnet.apa.org/record/1995-35436-001',
  },
];

const SOURCES = [
  {
    label: 'Myers & Briggs Foundation · síntesis psicométrica de 25 años (Erford et al., 2025)',
    href: 'https://www.myersbriggs.org/research-and-library/journal-psychological-type/A-25-Year-Review-and-Psychometric-Synthesis-of-the-Myers-Briggs-Type-Indicator-Form-M?articleID=159&d=86',
  },
  {
    label: 'The Myers-Briggs Company · MBTI Facts & Common Criticisms',
    href: 'https://www.themyersbriggs.com/en-us/access-resources/articles/mbti-facts-common-criticisms',
  },
  {
    label: 'APA PsycInfo · Boyle (1995), limitaciones psicométricas del MBTI',
    href: 'https://psycnet.apa.org/record/1995-35436-001',
  },
];

/**
 * La ficha técnica.
 *
 * El bloque se lee como una hoja de datos, no como cuatro tarjetas: la
 * regla superior cruza de borde a borde, las cifras se alinean en la
 * retícula y el libro de críticas es un libro mayor de dos columnas —
 * la afirmación a la izquierda, la respuesta a la derecha. El riel de la
 * etiqueta cae en x=0, pegado al borde.
 */
export function EvidenciaMbti() {
  return (
    <section id="evidencia" className="relative overflow-hidden border-b border-ink bg-paper">
      <div className="relative mx-auto max-w-7xl px-6 pt-20 sm:px-10 sm:pt-28 lg:pt-32">
        <RailHeader
          label="Evidencia"
          title="Qué mide bien y qué no"
          aside={
            <>
              <p>
                Presentar un instrumento sin sus datos psicométricos es presentarlo a medias. Esta
                sección reúne lo que la literatura revisada por pares muestra sobre el MBTI Form M
                —consistencia interna robusta— junto con las críticas que el propio fabricante
                reconoce y la limitación que la síntesis de 2025 declara.
              </p>
              <p className="mt-4">
                Un inventario de Personal no necesita estas cifras para funcionar. Sí las necesita
                para no sobreprometer lo que el test puede dar.
              </p>
            </>
          }
        />
      </div>

      {/* Cifras de la síntesis — regla de hoja completa */}
      <Reveal mode="edge" className="relative mt-16 sm:mt-20">
        <div className="border-t border-ink" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 px-6 pt-6 sm:px-10 lg:grid-cols-4">
          {EVIDENCE.map((item) => (
            <div key={item.label} className="reveal-figure">
              <p className="font-display text-[clamp(1.9rem,3.4vw,2.75rem)] font-black leading-[0.85] tracking-[-0.04em] whitespace-nowrap tabular-nums text-accent">
                {item.value}
              </p>
              <p className="swiss-label mt-4">{item.label}</p>
              <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-ink-60">{item.detail}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Libro de críticas y respuesta */}
      <div className="relative mt-20 sm:mt-24">
        <div className="border-l-2 border-ink py-1 pl-5 sm:pl-7">
          <p className="swiss-label">Críticas frecuentes</p>
        </div>

        <div className="mt-8 border-t border-ink" aria-hidden="true" />

        <Reveal className="relative">
          <ul className="mx-auto max-w-7xl px-6 sm:px-10">
            {CRITICISMS.map((item) => (
              <li key={item.claim} className="swiss-grid gap-y-4 border-b border-ink-15 py-7">
                <div className="col-span-full sm:col-span-4">
                  <p className="font-display text-lg font-bold leading-tight tracking-[-0.02em] text-ink sm:text-xl">
                    «{item.claim}»
                  </p>
                  <p className="mt-3">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="swiss-source inline-flex items-center gap-1"
                    >
                      Ver la fuente
                      <i className="bx bx-link-external text-[0.9em] leading-none" aria-hidden="true" />
                    </a>
                  </p>
                </div>

                <p className="col-span-full max-w-[64ch] leading-relaxed text-ink-60 sm:col-span-8">
                  {item.response}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 sm:px-10 sm:pb-28">
        <Sources>
          <SourceList items={SOURCES} />
        </Sources>
      </div>
    </section>
  );
}

export default EvidenciaMbti;