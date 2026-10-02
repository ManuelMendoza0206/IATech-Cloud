import { SectionHeader, VideoEmbed } from '../../../components/content';
import type { Tendencia } from '../types';

const DATA: Tendencia[] = [
  { title: 'Inteligencia Artificial', text: 'Aprendizaje automático, IA generativa y automatización de procesos clínicos y operativos.', color: 'ed-chip text-accent' },
  { title: 'Computación Cuántica', text: 'Salto de escala en capacidad y velocidad de procesamiento para problemas complejos.', color: 'bg-steel/20 text-ink' },
  { title: 'Biotecnología', text: 'Medicina personalizada, terapias avanzadas, genética y diagnóstico de precisión.', color: 'ed-chip text-accent' },
  { title: 'Nanotecnología', text: 'Materiales avanzados con propiedades optimizadas y nuevas aplicaciones médicas.', color: 'bg-steel/20 text-ink' },
  { title: 'Energías Renovables', text: 'Transición hacia tecnologías limpias, sostenibles y eficientes en costos.', color: 'ed-chip text-accent' },
  { title: 'Convergencia Cloud + Datos', text: 'Plataformas cloud, datos en tiempo real e interoperabilidad como base de la innovación.', color: 'bg-steel/20 text-ink' },
];

export function TendenciasFuturas() {
  return (
    <section className="bg-paper py-16 sm:py-20">
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
              className="border border-rule-soft p-6 transition-shadow"
            >
              <span
                className={`inline-block px-3 py-1 font-mono text-xs ${t.color}`}
              >
                Trending
              </span>
              <p className="mt-4 font-display text-xl text-ink">{t.title}</p>
              <p className="mt-2 text-base leading-relaxed text-ink-70/70">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="ed-card absolute -inset-4 -z-10" />
            <img
              src="https://img.magnific.com/vector-gratis/ilustracion-concepto-realidad-virtual_23-2148790842.jpg?semt=ais_test_b&w=740&q=80"
              alt="Tendencias tecnológicas futuras"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="ed-card p-6 text-ink">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                Dato clave
              </span>
              <p className="mt-3 text-lg">
                Estimación de inversión global en I+D de{' '}
                <span className="font-display text-2xl text-accent">2.6 billones de dólares</span>{' '}
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
