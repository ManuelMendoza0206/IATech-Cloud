import { SectionHeader } from '../../../components/content';

export function Diagrama() {
  return (
    <section className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          showNumber={false}
          number="04"
          title="El diagrama de la empresa"
          description="El ciclo de vida de un servicio Cloud clínico (IATECH): un pool, cinco lanes, seis tareas numeradas y cuatro gateways. El proceso arranca en la clínica y termina con el servicio operando bajo SLA."
        />

        {/* Imagen oficial */}
        <div className="mt-10 overflow-hidden border border-ink-15 bg-surface">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-15 px-5 py-4">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-60">
              BPMN · Diagrama oficial
            </p>
            <a
              href="/images/bpmn.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-60 transition hover:text-accent"
            >
              Ver en tamaño completo
              <i className="bx bx-external-link text-sm" aria-hidden="true" />
            </a>
          </div>
          <img
            src="/images/bpmn.jpeg"
            alt="Diagrama BPMN del ciclo de vida de un servicio Cloud clínico (IATECH): pool Área Cloud con cinco lanes, seis tareas y cuatro gateways"
            loading="lazy"
            decoding="async"
            className="w-full"
          />
        </div>

        {/* Pie de diagrama */}
        <div className="mt-6 overflow-hidden border-2 border-ink-15/20 bg-surface">
          <div className="grid divide-y divide-ink-15 sm:grid-cols-[110px_1fr_110px] sm:divide-x sm:divide-y-0">
            <div className="flex items-center justify-center bg-ink px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                POOL
              </span>
            </div>
            <div className="flex items-center px-4 py-3">
              <span className="font-mono text-lg font-bold text-ink">ÁREA CLOUD</span>
              <span className="ml-3 text-xs text-ink-60">
                Frontera del proceso: todo adentro es responsabilidad del área
              </span>
            </div>
            <div className="flex items-center justify-center bg-ink px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                5
              </span>
            </div>
          </div>
          <div className="grid divide-y divide-ink-15 sm:grid-cols-[110px_1fr] sm:divide-x sm:divide-y-0">
            <div className="flex items-center justify-center bg-ink px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                TITLE
              </span>
            </div>
            <div className="flex items-center px-4 py-3">
              <span className="text-sm text-ink">Ciclo de vida de un servicio Cloud clínico</span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center font-mono text-[11px] text-ink-500">
          LANES: PRODUCTO / CLÍNICA · GERENTE CLOUD · ARQUITECTO CLOUD · ADMIN. DEVOPS · ADMIN. INFRAESTRUCTURA
        </p>
      </div>
    </section>
  );
}
