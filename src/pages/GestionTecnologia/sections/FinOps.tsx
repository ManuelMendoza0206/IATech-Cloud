import { RailHeader, Sources, SourceList } from '../../../components/content';

/**
 * FinOps y el costo como señal de arquitectura.
 *
 * Cifras de la encuesta State of FinOps de la FinOps Foundation (proyecto
 * bajo Linux Foundation). Datos de dos ediciones:
 *  - 2025: 861 respondientes, ~69.000 millones de USD de gasto cloud.
 *  - 2026: 1.192 respondientes, más de 83.000 millones de USD.
 *
 * FinOps es hoy la única de las ocho áreas donde el 78% de los equipos
 * reporta al CTO o CIO, según la edición 2026.
 */

interface Finding {
  value: string;
  label: string;
  detail: string;
  source: { label: string; href: string };
}

const FINDINGS: Finding[] = [
  {
    value: '78%',
    label: 'Reportan al CTO o CIO',
    detail:
      'El área FinOps subió 18 puntos en un año hasta incorporarse al nivel ejecutivo. Además, 98% gestiona gasto de IA y nueve de diez gestionan SaaS.',
    source: {
      label: 'State of FinOps 2026',
      href: 'https://www.linuxfoundation.org/press/state-of-finops-survey-ai-value-and-skills-top-priorities-as-finops-matures-across-technology-value-98-manage-ai-90-saas-64-licensing-48-data-center-1',
    },
  },
  {
    value: '29%',
    label: 'Gasto cloud desperdiciado',
    detail:
      'Flexera midió en su State of the Cloud Report que el desperdicio subió de 27% en 2025 a 29% en 2026, rompiendo una racha de cinco años de descenso.',
    source: {
      label: 'Flexera · State of the Cloud 2026',
      href: 'https://axis-intelligence.com/finops-statistics',
    },
  },
  {
    value: '21%',
    label: 'Infraestructura subutilizada',
    detail:
      'Harness estimó que 21% del gasto enterprise de infraestructura cloud se desperdicia en recursos subutilizados, equivalente a 44.500 millones de USD en 2025.',
    source: {
      label: 'Harness · FinOps in Focus 2025',
      href: 'https://www.prnewswire.com/news-releases/44-5-billion-in-infrastructure-cloud-waste-projected-for-2025-due-to-finops-and-developer-disconnect-finds-finops-in-focus-report-from-harness-302385580.html',
    },
  },
  {
    value: '50%',
    label: 'Optimización es prioridad',
    detail:
      'La edición 2025 mantiene la optimización de workloads y reducción de desperdicio como prioridad principal por segundo año consecutivo, con el 50% de los practicantes.',
    source: {
      label: 'State of FinOps 2025',
      href: 'http://data.finops.org/2025-report',
    },
  },
];

const PRACTICES = [
  {
    title: 'Etiquetar antes de desplegar',
    text:
      'La asignación de costos por metadatos es la base de todo lo demás: sin etiquetas, no hay forma de saber a qué equipo, entorno o cliente corresponde cada recurso. Las prácticas maduras asignan al menos el 80% del gasto.',
  },
  {
    title: 'Medir antes de optimizar',
    text:
      'La edición 2025 muestra un cambio de secuencia: primero se aplica comprensión de costos y cuantificación de valor (presupuesto, pronóstico, asignación), y recién después la optimización. Optimizar sin una asignación visible es adivinar con descuentos.',
  },
  {
    title: 'Gobernanza antes que ahorro',
    text:
      'Para los próximos doce meses, la implementación de gobernanza y políticas a escala aparece como la prioridad principal, por encima de la optimización pura.',
  },
  {
    title: 'La arquitectura decide el gasto',
    text:
      'El sobrecosto rara vez viene de un mal precio: viene de un tamaño sobredimensionado que nadie revisó. Elegir arquitectura y luego ajustar capacidad es la secuencia que ordena el gasto.',
  },
];

const SOURCES = [
  {
    label: 'FinOps Foundation · State of FinOps 2025',
    href: 'http://data.finops.org/2025-report',
  },
  {
    label: 'FinOps Foundation · State of FinOps 2026 (Linux Foundation)',
    href: 'https://www.linuxfoundation.org/press/state-of-finops-survey-ai-value-and-skills-top-priorities-as-finops-matures-across-technology-value-98-manage-ai-90-saas-64-licensing-48-data-center-1',
  },
  {
    label: 'FinOps Framework · asignación de costos y jerarquía',
    href: 'https://www.finops.org/framework/previous-capabilities/cost-allocation/',
  },
];

export function FinOps() {
  return (
    <section id="finops" className="border-b border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Costo"
          title="El costo como señal de arquitectura"
          aside={
            <>
              <p>
                El gasto cloud dejó de ser un tema financiero y pasó a ser un indicador técnico. Un
                ambiente sobredimensionado no es solo un gasto: es evidencia de que nadie midió la
                demanda real. Por eso FinOps —la práctica de unir costo con valor— terminó bajo
                responsabilidad del CTO.
              </p>
              <p className="mt-4">
                Los números de abajo no describen a IATECH: describen el mercado en el que el área
                opera. Sirven como línea de base para evaluar cualquier decisión de infraestructura.
              </p>
            </>
          }
        />

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {FINDINGS.map((finding) => (
            <div key={finding.label} className="swiss-figure">
              <p className="font-display text-[clamp(2rem,4vw,3rem)] font-black leading-[0.9] tracking-[-0.04em] tabular-nums text-accent">
                {finding.value}
              </p>
              <p className="swiss-label mt-3">{finding.label}</p>
              <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-ink-60">
                {finding.detail}
              </p>
              <p className="mt-3">
                <a
                  href={finding.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swiss-source inline-flex items-center gap-1"
                >
                  {finding.source.label}
                  <i className="bx bx-link-external text-[0.9em] leading-none" aria-hidden="true" />
                </a>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 swiss-grid gap-y-8 border-t border-ink pt-12">
          <div className="col-span-full sm:col-span-3">
            <p className="swiss-rail swiss-label">Prácticas</p>
          </div>
          <div className="col-span-full sm:col-span-9">
            <ul className="grid gap-6 sm:grid-cols-2">
              {PRACTICES.map((practice) => (
                <li key={practice.title} className="swiss-figure">
                  <p className="font-display text-base font-bold leading-tight tracking-[-0.02em] text-ink">
                    {practice.title}
                  </p>
                  <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-ink-60">
                    {practice.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Sources>
          <SourceList items={SOURCES} />
        </Sources>
      </div>
    </section>
  );
}

export default FinOps;
