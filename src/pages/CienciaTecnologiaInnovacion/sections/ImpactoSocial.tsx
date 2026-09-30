import { SectionHeader, VideoEmbed } from '../../../components/content';
import type { ImpactoItem } from '../types';

const IMPACTO: ImpactoItem[] = [
  { icon: 'bxs-heart-pulse', title: 'Salud', text: 'Medicina de precisión, telemedicina y salud pública basada en datos.' },
  { icon: 'bxs-book-open', title: 'Educación', text: 'Transformación de la comunicación, STEM y métodos de aprendizaje híbrido.' },
  { icon: 'bx-globe', title: 'Medio Ambiente', text: 'Soluciones técnicas, energía limpia y monitoreo climático inteligente.' },
];

const ECONOMIA = [
  'Incremento de la competitividad, la productividad y el crecimiento económico.',
  'Generación de nuevas oportunidades de negocio, empleo calificado y startups.',
  'Atracción de inversión, capital y talento global hacia ecosistemas CTI.',
  'Reducción de brechas digitales con infraestructura cloud accesible.',
];

export function ImpactoSocial() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader number="05" title="Impacto Social y Económico" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl text-navy-900">En la Sociedad</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {IMPACTO.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-navy-900/10 p-5 text-center"
                >
                  <i className={`bx ${item.icon} text-3xl text-signal`} />
                  <p className="mt-3 font-display text-lg text-navy-900">{item.title}</p>
                  <p className="mt-1 text-base leading-relaxed text-navy-700/70">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-lg bg-navy-900/5 p-4 text-base text-navy-700/80">
              <span className="font-semibold text-navy-900">Dato clave:</span> Se proyectaba
              el desplazamiento de hasta 85 millones de empleos debido a la automatización
              hacia 2025.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl text-navy-900">En la Economía</h3>
            <ul className="mt-6 space-y-4">
              {ECONOMIA.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-signal" />
                  <span className="text-base sm:text-lg leading-relaxed text-navy-700/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base text-navy-700/60">
              Casos destacados: <span className="font-semibold text-navy-900">Silicon Valley</span>{' '}
              e <span className="font-semibold text-navy-900">Israel</span>.
            </p>

            <VideoEmbed
              src="https://www.youtube.com/embed/MKFltzF6ToA"
              title="Impacto de la tecnología en la sociedad"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
