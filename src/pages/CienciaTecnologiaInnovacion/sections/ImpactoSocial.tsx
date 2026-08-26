import { SectionHeader, VideoEmbed } from '../../../components/content';
import type { ImpactoItem } from '../types';

const IMPACTO: ImpactoItem[] = [
  { icon: 'bxs-heart-pulse', title: 'Salud', text: 'Avances en medicina y salud pública.' },
  { icon: 'bxs-book-open', title: 'Educación', text: 'Transformación de la comunicación y los métodos de aprendizaje.' },
  { icon: 'bx-globe', title: 'Medio Ambiente', text: 'Soluciones técnicas para desafíos climáticos.' },
];

const ECONOMIA = [
  'Incremento de la competitividad y del crecimiento económico.',
  'Generación de nuevas oportunidades de negocio y empleo.',
  'Atracción de inversión, capital y talento global.',
];

export function ImpactoSocial() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader number="05" title="Impacto Social y Económico" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl text-navy-900">En la Sociedad</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {IMPACTO.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-navy-900/10 p-5 text-center"
                >
                  <i className={`bx ${item.icon} text-3xl text-signal`} />
                  <p className="mt-3 font-display text-base text-navy-900">{item.title}</p>
                  <p className="mt-1 text-sm text-navy-700/70">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-lg bg-navy-900/5 p-4 text-sm text-navy-700/80">
              <span className="font-semibold text-navy-900">Dato clave:</span> Se proyectaba
              el desplazamiento de hasta 85 millones de empleos debido a la automatización
              hacia 2025.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl text-navy-900">En la Economía</h3>
            <ul className="mt-6 space-y-4">
              {ECONOMIA.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-signal" />
                  <span className="text-navy-700/80">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-navy-700/60">
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
