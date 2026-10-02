import { SectionHeader, VideoEmbed } from '../../../components/content';
import type { TipoItem } from '../types';

const TIPOS: TipoItem[] = [
  { label: 'Incremental', desc: 'Mejoras progresivas sobre productos o procesos existentes con menor riesgo.' },
  { label: 'Disruptiva', desc: 'Transforma mercados, crea nuevas categorías y desplaza tecnologías establecidas.' },
  { label: 'Radical', desc: 'Saltos cualitativos basados en avances científicos profundos y nuevas plataformas.' },
  { label: 'Abierta', desc: 'Colaboración con universidades, startups y comunidades para innovar más rápido.' },
];

const FASES = ['Ideación', 'Selección', 'Desarrollo', 'Implementación', 'Difusión'];

export function FundamentosInnovacion() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="03"
          title="Fundamentos de la Innovación"
          description="Creación e implementación de ideas, productos o procesos nuevos que generan valor económico y social concreto."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h3 className="font-display text-2xl text-ink">Tipos de Innovación</h3>
            <div className="mt-6 space-y-4">
              {TIPOS.map((tipo) => (
                <div
                  key={tipo.label}
                  className="flex items-start gap-4 border border-rule-soft p-5"
                >
                  <span className="ed-chip flex h-8 w-8 shrink-0 items-center justify-center font-display text-sm text-accent">
                    {tipo.label[0]}
                  </span>
                  <div>
                    <p className="font-display text-lg text-ink">{tipo.label}</p>
                    <p className="mt-1 text-base leading-relaxed text-ink-70/70">{tipo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl text-ink">Fases del Proceso</h3>
            <ol className="mt-6 space-y-3">
              {FASES.map((fase, i) => (
                <li key={fase} className="flex items-center gap-4">
                  <span className="ed-card flex h-8 w-8 shrink-0 items-center justify-center font-mono text-xs text-ink">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base sm:text-lg text-ink-70/80">{fase}</span>
                </li>
              ))}
            </ol>

            <VideoEmbed
              src="https://www.youtube.com/embed/wlykHD0-_qk"
              title="¿Qué es la innovación?"
            />
          </div>
        </div>

        <p className="mt-8 text-base text-ink-70/60">
          <span className="font-semibold text-ink">Ejemplos:</span> Teléfonos
          inteligentes, energía solar y vehículos eléctricos.
        </p>
      </div>
    </section>
  );
}
