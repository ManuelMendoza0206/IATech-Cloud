import { SectionHeader, VideoEmbed } from '../../../components/content';
import type { TipoItem } from '../types';

const TIPOS: TipoItem[] = [
  { label: 'Incremental', desc: 'Mejoras progresivas sobre productos o procesos existentes.' },
  { label: 'Disruptiva', desc: 'Transforma mercados y desplaza tecnologías establecidas.' },
  { label: 'Radical', desc: 'Saltos cualitativos basados en avances científicos profundos.' },
];

const FASES = ['Ideación', 'Selección', 'Desarrollo', 'Implementación', 'Difusión'];

export function FundamentosInnovacion() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="03"
          title="Fundamentos de la Innovación"
          description="Creación e implementación de ideas, productos o procesos nuevos que generan valor económico y social concreto."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="font-display text-xl text-navy-900">Tipos de Innovación</h3>
            <div className="mt-6 space-y-4">
              {TIPOS.map((tipo) => (
                <div
                  key={tipo.label}
                  className="flex items-start gap-4 rounded-xl border border-navy-900/10 p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-signal/10 font-display text-sm text-signal">
                    {tipo.label[0]}
                  </span>
                  <div>
                    <p className="font-display text-base text-navy-900">{tipo.label}</p>
                    <p className="mt-1 text-sm text-navy-700/70">{tipo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl text-navy-900">Fases del Proceso</h3>
            <ol className="mt-6 space-y-3">
              {FASES.map((fase, i) => (
                <li key={fase} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 font-mono text-xs text-mist">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-navy-700/80">{fase}</span>
                </li>
              ))}
            </ol>

            <VideoEmbed
              src="https://www.youtube.com/embed/wlykHD0-_qk"
              title="¿Qué es la innovación?"
            />
          </div>
        </div>

        <p className="mt-8 text-sm text-navy-700/60">
          <span className="font-semibold text-navy-900">Ejemplos:</span> Teléfonos
          inteligentes, energía solar y vehículos eléctricos.
        </p>
      </div>
    </section>
  );
}
