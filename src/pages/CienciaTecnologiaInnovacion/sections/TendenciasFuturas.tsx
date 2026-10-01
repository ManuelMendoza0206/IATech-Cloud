import { SectionHeader, VideoEmbed } from '../../../components/content';
import type { Tendencia } from '../types';

const DATA: Tendencia[] = [
  { title: 'Inteligencia Artificial', text: 'Aprendizaje automático, IA generativa y automatización de procesos clínicos y operativos.', color: 'neu-pressed text-signal' },
  { title: 'Computación Cuántica', text: 'Salto de escala en capacidad y velocidad de procesamiento para problemas complejos.', color: 'bg-steel/20 text-ink-950' },
  { title: 'Biotecnología', text: 'Medicina personalizada, terapias avanzadas, genética y diagnóstico de precisión.', color: 'neu-pressed text-signal' },
  { title: 'Nanotecnología', text: 'Materiales avanzados con propiedades optimizadas y nuevas aplicaciones médicas.', color: 'bg-steel/20 text-ink-950' },
  { title: 'Energías Renovables', text: 'Transición hacia tecnologías limpias, sostenibles y eficientes en costos.', color: 'neu-pressed text-signal' },
  { title: 'Convergencia Cloud + Datos', text: 'Plataformas cloud, datos en tiempo real e interoperabilidad como base de la innovación.', color: 'bg-steel/20 text-ink-950' },
];

export function TendenciasFuturas() {
  return (
    <section className="bg-neu-base py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="07"
          title="Tendencias Futuras"
          description="Las tecnologías que definirán el próximo decenio."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-ink-950/10 p-6 transition-shadow hover:shadow-md"
            >
              <span
                className={`inline-block rounded-full px-3 py-1 font-mono text-xs ${t.color}`}
              >
                Trending
              </span>
              <p className="mt-4 font-neu-display text-xl text-ink-950">{t.title}</p>
              <p className="mt-2 text-base leading-relaxed text-ink-700/70">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="neu-raised absolute -inset-4 -z-10 rounded-2xl" />
            <img
              src="https://img.magnific.com/vector-gratis/ilustracion-concepto-realidad-virtual_23-2148790842.jpg?semt=ais_test_b&w=740&q=80"
              alt="Tendencias tecnológicas futuras"
              className="w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
          </div>
          <div>
            <p className="neu-raised rounded-xl p-6 text-ink-950">
              <span className="font-mono text-xs uppercase tracking-widest text-signal">
                Dato clave
              </span>
              <p className="mt-3 text-lg">
                Estimación de inversión global en I+D de{' '}
                <span className="font-neu-display text-2xl text-signal">2.6 billones de dólares</span>{' '}
                para 2025.
              </p>
            </p>
            <VideoEmbed
              src="https://www.youtube.com/embed/5Izihr4BCbo"
              title="Tendencias futuras de tecnología"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
