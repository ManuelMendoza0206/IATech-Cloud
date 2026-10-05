import { SectionHeader } from '../../../components/content';

export function Diagrama() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          showNumber={false}
          number="04"
          title="El diagrama de la empresa"
          description="El ciclo de vida de un servicio Cloud clínico (IATECH): un pool, cinco lanes, seis tareas numeradas y cuatro gateways. El proceso arranca en la clínica y termina con el servicio operando bajo SLA."
        />

        {/* Imagen oficial */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-900/10 px-5 py-4">
            <p className="font-mono text-[11px] uppercase tracking-widest text-navy-700/60">
              BPMN · Diagrama oficial
            </p>
            <a
              href="/images/bpmn.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-navy-700/60 transition hover:text-signal"
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
        <div className="mt-6 overflow-hidden rounded-xl border-2 border-navy-900/20 bg-white">
          <div className="grid divide-y divide-navy-900/10 sm:grid-cols-[110px_1fr_110px] sm:divide-x sm:divide-y-0">
            <div className="flex items-center justify-center bg-navy-950 px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-signal">
                POOL
              </span>
            </div>
            <div className="flex items-center px-4 py-3">
              <span className="font-mono text-lg font-bold text-navy-950">ÁREA CLOUD</span>
              <span className="ml-3 text-xs text-navy-700/60">
                Frontera del proceso: todo adentro es responsabilidad del área
              </span>
            </div>
            <div className="flex items-center justify-center bg-navy-950 px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-signal">
                5
              </span>
            </div>
          </div>
          <div className="grid divide-y divide-navy-900/10 sm:grid-cols-[110px_1fr] sm:divide-x sm:divide-y-0">
            <div className="flex items-center justify-center bg-navy-950 px-4 py-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-signal">
                TITLE
              </span>
            </div>
            <div className="flex items-center px-4 py-3">
              <span className="text-sm text-navy-900">Ciclo de vida de un servicio Cloud clínico</span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center font-mono text-[11px] text-navy-700/50">
          LANES: PRODUCTO / CLÍNICA · GERENTE CLOUD · ARQUITECTO CLOUD · ADMIN. DEVOPS · ADMIN. INFRAESTRUCTURA
        </p>
      </div>
    </section>
  );
}
