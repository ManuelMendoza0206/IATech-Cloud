import type { HeroProps } from './types';
import { Reveal } from '../ui/Reveal';

/** Hero compartido: titular liviano + foto en card flotante. */
export function Hero({ subtitle, title, highlight, description, imageSrc, imageAlt }: HeroProps) {
  const [before, after] = highlight ? title.split(highlight) : [title];

  return (
    <section className="bg-canvas pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div className="float-lg buoyant px-8 py-12 sm:px-12">
            <Reveal asHero>
              <span className="hero-item label">{subtitle}</span>

              <h1 className="hero-item display-light mt-5 text-4xl text-ink sm:text-5xl">
                {before}
                {highlight && (
                  <>
                    {' '}
                    <span className="display-bold text-ink-70">{highlight}</span>
                  </>
                )}
                {after}
              </h1>

              <p className="hero-item mt-6 max-w-lg leading-relaxed text-ink-70">{description}</p>

              <a href="#content-start" className="float-btn float-btn-primary hero-item mt-8 w-fit">
                Ver contenido
                <i className="bx bx-down-arrow-alt text-lg" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          {imageSrc && (
            <figure className="hero-item float buoyant overflow-hidden">
              <img
                src={imageSrc}
                alt={imageAlt || ''}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="label px-7 py-4">{imageAlt}</figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}