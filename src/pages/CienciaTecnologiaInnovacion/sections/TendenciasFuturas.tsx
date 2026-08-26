import { SectionHeader } from '../../../components/content';
import type { Tendencia } from '../types';

const DATA: Tendencia[] = [
  { title: 'Inteligencia Artificial', text: 'Aprendizaje automático y automatización de procesos.', color: 'bg-signal/10 text-signal' },
  { title: 'Computación Cuántica', text: 'Salto de escala en capacidad y velocidad de procesamiento.', color: 'bg-navy-900/10 text-navy-900' },
  { title: 'Biotecnología', text: 'Medicina personalizada, terapias avanzadas y genética.', color: 'bg-signal/10 text-signal' },
  { title: 'Nanotecnología', text: 'Materiales avanzados con propiedades optimizadas.', color: 'bg-navy-900/10 text-navy-900' },
  { title: 'Energías Renovables', text: 'Transición hacia tecnologías limpias y sostenibles.', color: 'bg-signal/10 text-signal' },
];

export function TendenciasFuturas() {
  return (
    <section className="bg-white py-16 sm:py-20">
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
              className="rounded-2xl border border-navy-900/10 p-6 transition-shadow hover:shadow-md"
            >
              <span
                className={`inline-block rounded-full px-3 py-1 font-mono text-xs ${t.color}`}
              >
                Trending
              </span>
              <p className="mt-4 font-display text-lg text-navy-900">{t.title}</p>
              <p className="mt-2 text-sm text-navy-700/70">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-mist" />
            <img
              src="https://img.magnific.com/vector-gratis/ilustracion-concepto-realidad-virtual_23-2148790842.jpg?semt=ais_test_b&w=740&q=80"
              alt="Tendencias tecnológicas futuras"
              className="w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
            />
          </div>
          <div>
            <p className="rounded-xl bg-navy-900 p-6 text-mist">
              <span className="font-mono text-xs uppercase tracking-widest text-signal">
                Dato clave
              </span>
              <p className="mt-3 text-lg">
                Estimación de inversión global en I+D de{' '}
                <span className="font-display text-2xl text-signal">2.6 billones de dólares</span>{' '}
                para 2025.
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
