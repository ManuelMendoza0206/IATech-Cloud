import { RailHeader, Sources, SourceList } from '../../../components/content';

/**
 * Technology Readiness Levels.
 *
 * Escala de nueve niveles originalmente desarrollada por la NASA para evaluar
 * la madurez de una tecnología, normalizada en ISO 16290:2013. La edición
 * 2013 fue revisada y confirmada en 2024, de modo que sigue vigente.
 *
 * Aplicada aquí a la tecnología cloud como producto, no a un dispositivo.
 */

interface Rung {
  level: number;
  name: string;
  meaning: string;
  cloudCase: string;
}

const RUNGS: Rung[] = [
  {
    level: 1,
    name: 'Principios básicos',
    meaning: 'La investigación científica comienza y sus resultados se traducen en I+D futuro.',
    cloudCase: 'Investigación aplicada sobre planificación de cargas de imágenes médicas.',
  },
  {
    level: 2,
    name: 'Concepto formulado',
    meaning: 'Se estudiaron los principios básicos y las aplicaciones prácticas de esos hallazgos.',
    cloudCase: 'Demostración conceptual de inferencia en el borde sin depender del centro de datos.',
  },
  {
    level: 3,
    name: 'Prueba de concepto',
    meaning: 'Se requieren estudios analíticos y de laboratorio para confirmar la viabilidad.',
    cloudCase: 'Prototipo funcional de un pipeline de imágenes en un entorno cloud de prueba.',
  },
  {
    level: 4,
    name: 'Validación en laboratorio',
    meaning: 'La prueba de concepto está lista y se prueba combinando varios componentes entre sí.',
    cloudCase: 'Componentes integrados y validados con datos anonimizados, aún fuera de producción.',
  },
  {
    level: 5,
    name: 'Validación en ambiente real',
    meaning: 'La tecnología funciona en un entorno tan realista como sea posible.',
    cloudCase: 'Despliegue sobre el espejo de producción con datos anonimizados y carga representativa.',
  },
  {
    level: 6,
    name: 'Prototipo funcional',
    meaning: 'Existe un prototipo completamente funcional o modelo representativo.',
    cloudCase: 'Sistema completo operando en paralelo sobre el cloud productivo.',
  },
  {
    level: 7,
    name: 'Demostración operacional',
    meaning: 'El modelo o prototipo funciona en un entorno operacional, con usuarios reales.',
    cloudCase: 'Servicio en manos del equipo clínico con uso sostenido y real de producción.',
  },
  {
    level: 8,
    name: 'Sistema completo y calificado',
    meaning: 'La tecnología fue probada y calificada, lista para su implementación.',
    cloudCase: 'Servicio considerado crítico, aprobado, con documentación operativa y soporte.',
  },
  {
    level: 9,
    name: 'Proven en operación real',
    meaning: 'La tecnología funcionó con éxito en una misión o programa real.',
    cloudCase: 'Operación sostenida en producción, con evidencia de disponibilidad medida.',
  },
];

const SOURCES = [
  {
    label: 'NASA · Technology Readiness Levels (definición de los nueve niveles)',
    href: 'https://www.nasa.gov/technology/technology-readiness-levels',
  },
  {
    label: 'ISO 16290:2013 · ficha oficial, confirmada en 2024',
    href: 'https://www.iso.org/standard/56064.html',
  },
];

export function MadurezTecnologica() {
  return (
    <section id="madurez" className="border-b border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Madurez"
          title="De la idea al servicio: nueve niveles"
          aside={
            <>
              <p>
                Una tecnología no está «lista» o «no lista». Está en un nivel, y ese nivel se puede
                nombrar, comparar y discutir. La escala de Technology Readiness Levels (TRL) la
                definió la NASA y la normalizó la ISO en 2013 como{' '}
                <code className="font-mono text-[0.95em] text-ink">ISO 16290:2013</code>.
              </p>
              <p className="mt-4">
                Lo útil no es el número en sí, sino la conversación que obliga: si el área dice
                que algo está en TRL 5, todos saben exactamente qué evidencia falta para llegar a
                TRL 6. Sin ese lenguaje compartido, «listo para producción» significa cinco cosas
                distintas según quién lo dice.
              </p>
            </>
          }
        />

        <ol className="mt-14">
          {RUNGS.map((rung) => (
            <li
              key={rung.level}
              className="swiss-rung grid gap-x-6 gap-y-2 py-5 pl-5 sm:grid-cols-[4rem_14rem_1fr] sm:items-baseline"
            >
              <span className="font-display text-2xl font-black leading-none tabular-nums tracking-[-0.03em] text-accent">
                {rung.level}
              </span>
              <span className="font-display text-base font-bold leading-tight tracking-[-0.02em] text-ink">
                {rung.name}
              </span>
              <span className="text-sm leading-relaxed text-ink-60">
                {rung.meaning}
                <span className="mt-2 block border-l border-ink-15 pl-4 text-ink">
                  {rung.cloudCase}
                </span>
              </span>
            </li>
          ))}
        </ol>

        <Sources>
          <SourceList items={SOURCES} />
        </Sources>
      </div>
    </section>
  );
}

export default MadurezTecnologica;
