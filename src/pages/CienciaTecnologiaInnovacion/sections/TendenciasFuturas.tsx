import { SectionHeader, VideoEmbed } from '../../../components/content';
import type { Tendencia } from '../types';

const DATA: Tendencia[] = [
  { title: 'Inteligencia Artificial', text: 'Aprendizaje automático, IA generativa y automatización de procesos clínicos y operativos.', color: 'swiss-chip text-accent' },
  { title: 'Computación Cuántica', text: 'Salto de escala en capacidad y velocidad de procesamiento para problemas complejos.', color: 'bg-steel/20 text-ink' },
  { title: 'Biotecnología', text: 'Medicina personalizada, terapias avanzadas, genética y diagnóstico de precisión.', color: 'swiss-chip text-accent' },
  { title: 'Nanotecnología', text: 'Materiales avanzados con propiedades optimizadas y nuevas aplicaciones médicas.', color: 'bg-steel/20 text-ink' },
  { title: 'Energías Renovables', text: 'Transición hacia tecnologías limpias, sostenibles y eficientes en costos.', color: 'swiss-chip text-accent' },
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
              className="border border-ink-15 p-6 transition-shadow"
            >
              <span
                className={`inline-block px-3 py-1 font-mono text-xs ${t.color}`}
              >
                Trending
              </span>
              <p className="mt-4 font-display text-xl text-ink">{t.title}</p>
              <p className="mt-2 text-base leading-relaxed text-ink-60/70">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="swiss-cell absolute -inset-4 -z-10" />
            <img
              src="/images/cti-04.jpg"
              alt="Tendencias tecnológicas futuras"
              className="w-full border border-ink object-cover"
              loading="lazy"
              onError={(event) => {
                const el = event.currentTarget;
                el.style.display = 'none';
                el.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden border border-ink bg-paper p-5">
              <p className="swiss-label text-accent">Falta el archivo</p>
              <p className="mt-2 font-display text-base font-black leading-tight break-all text-ink">
                public/images/cti-04.jpg
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-60">
                Imagen de un profesional de salud con un visor de realidad aumentada o un monitor
                con datos clínicos en vivo. Debe sugerir una tendencia concreta, no un concepto
                abstracto.
              </p>
            </div>
          </div>
          <div>
            <p className="swiss-cell p-6 text-ink">
              <span className="swiss-label block text-accent">
                Dato clave
              </span>
              <p className="mt-3 text-lg">
                Gasto mundial en I+D estimado en{' '}
                <span className="font-display text-2xl text-accent">2,87 billones de dólares</span>{' '}
                en 2024, sobre 2,78 billones en 2023.
              </p>
              <p className="mt-3">
                <a
                  href="https://www.wipo.int/en/web/global-innovation-index/w/blogs/2025/end-of-year-edition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="swiss-source inline-flex items-center gap-1"
                >
                  WIPO · Global Innovation Index 2025
                  <i className="bx bx-link-external text-[0.9em] leading-none" aria-hidden="true" />
                </a>
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
