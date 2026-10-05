import { useState } from 'react';
import { RailHeader, Sources, SourceList } from '../../../components/content';

/**
 * DORA — DevOps Research and Assessment (Google Cloud)
 *
 * Las cinco métricas de desempeño de entrega de software que DORA
 * usa para clasificar a un equipo. Antes de 2024 eran cuatro: la
 * quinta, deployment rework rate, se agregó porque la change failure
 * rate actuaba como proxy del retrabajo.
 */

interface Metric {
  id: string;
  name: string;
  es: string;
  factor: 'Throughput' | 'Stability';
  definition: string;
  elite: string;
  eliteEs: string;
}

const METRICS: Metric[] = [
  {
    id: 'lead-time',
    name: 'Change lead time',
    es: 'Tiempo de entrega del cambio',
    factor: 'Throughput',
    definition:
      'Tiempo desde un commit hasta que ese cambio llega exitosamente a producción.',
    elite: 'Menos de un día',
    eliteEs: 'Ventana de un día',
  },
  {
    id: 'deployment-frequency',
    name: 'Deployment frequency',
    es: 'Frecuencia de despliegue',
    factor: 'Throughput',
    definition:
      'Con qué frecuencia los cambios de una aplicación se despliegan en producción.',
    elite: 'On demand',
    eliteEs: 'Cuantas veces haga falta, incluso varias al día',
  },
  {
    id: 'recovery-time',
    name: 'Failed deployment recovery time',
    es: 'Tiempo de recuperación tras un fallo',
    factor: 'Throughput',
    definition:
      'El tiempo que toma recuperarse de un despliegue fallido.',
    elite: 'Menos de una hora',
    eliteEs: 'Ventana de una hora',
  },
  {
    id: 'change-failure-rate',
    name: 'Change failure rate',
    es: 'Tasa de cambios fallidos',
    factor: 'Stability',
    definition:
      'Porcentaje de despliegues que causan fallos en producción y exigen hotfix o rollback.',
    elite: '5%',
    eliteEs: 'Uno de cada veinte despliegues',
  },
  {
    id: 'rework-rate',
    name: 'Deployment rework rate',
    es: 'Tasa de retrabajo',
    factor: 'Stability',
    definition:
      'Porcentaje del trabajo desplegado que luego debe rehacerse. Se agregó en 2024.',
    elite: '—',
    eliteEs: 'DORA todavía no publica un umbral de referencia',
  },
];

const SOURCES = [
  {
    label: 'DORA · State of DevOps 2024 (PDF oficial)',
    href: 'https://dora.dev/research/2024/dora-report/2024-dora-accelerate-state-of-devops-report.pdf',
  },
  {
    label: 'DORA · historia de las métricas',
    href: 'https://dora.dev/insights/dora-metrics-history/',
  },
  {
    label: 'Datadog · definición de las cuatro claves',
    href: 'https://docs.datadoghq.com/delivery_performance/dora_metrics',
  },
];

export function MetricasDora() {
  const [open, setOpen] = useState<string | null>('lead-time');

  return (
    <section id="metricas" className="border-b border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Cómo se mide"
          title="Cinco métricas, dos factores"
          aside={
            <>
              <p>
                DORA (DevOps Research and Assessment, programa de Google Cloud) lleva más de
                una década investigando qué capacidades predicen el desempeño de un equipo de
                entrega. De esa investigación salen cinco métricas, agrupadas en dos factores:
                <strong className="font-semibold text-ink"> throughput</strong> — con qué
                rapidez llega el cambio — y <strong className="font-semibold text-ink">estabilidad</strong> —
                con qué seguridad llega.
              </p>
              <p className="mt-4">
                No miden productividad ni rendimiento individual. Miden la salud del sistema de
                entrega, y ese es el punto: un equipo que despliega poco y falla mucho tiene un
                problema de proceso, no de esfuerzo.
              </p>
            </>
          }
        />

        <ul className="mt-12 border-t border-ink">
          {METRICS.map((metric) => {
            const isOpen = open === metric.id;
            return (
              <li key={metric.id} className="border-b border-ink-15">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : metric.id)}
                    aria-expanded={isOpen}
                    aria-controls={`dora-${metric.id}`}
                    className="group flex w-full flex-col gap-1 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper sm:flex-row sm:items-baseline sm:gap-8"
                  >
                    <span
                      className={`shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-150 sm:w-36 ${
                        isOpen ? 'text-accent' : 'text-ink-40 group-hover:text-accent'
                      }`}
                    >
                      {metric.factor}
                    </span>
                    <span className="flex flex-1 items-baseline justify-between gap-4 sm:gap-0">
                      <span className="flex-1">
                        <span className="block font-display text-lg font-bold leading-tight tracking-[-0.02em] text-ink sm:text-2xl">
                          {metric.name}
                        </span>
                        <span className="mt-1 block text-sm text-ink-60">{metric.es}</span>
                      </span>
                      <i
                        className={`bx bx-plus shrink-0 text-xl leading-none text-ink transition-all duration-200 ${
                          isOpen ? 'rotate-45 text-accent' : 'group-hover:text-accent'
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={`dora-${metric.id}`}
                  hidden={!isOpen}
                  className="pb-8 sm:pl-44"
                >
                  <div className="swiss-grid gap-y-4">
                    <p className="col-span-full max-w-[60ch] leading-relaxed text-ink-60 sm:col-span-7">
                      {metric.definition}
                    </p>
                    <div className="col-span-full sm:col-span-5">
                      <div className="swiss-figure">
                        <p className="swiss-label">Nivel élite</p>
                        <p className="mt-2 font-display text-2xl font-black tracking-[-0.03em] text-ink">
                          {metric.elite}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-60">
                          {metric.eliteEs}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <Sources>
          <SourceList items={SOURCES} />
        </Sources>
      </div>
    </section>
  );
}

export default MetricasDora;
