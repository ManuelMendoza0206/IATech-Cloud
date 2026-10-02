import type { HeroProps } from './types';
import { Reveal } from '../ui/Reveal';

/**
 * Hero editorial: kicker, titular serif con filete de cierre y drop cap.
 * Márgenes generosos — la interfaz se trata como una página impresa.
 */
export function Hero({ subtitle, title, highlight, description, imageSrc, imageAlt }: HeroProps) {
  const [before, after] = highlight ? title.split(highlight) : [title];

  return (
    <section className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 sm:px-10 sm:pt-40 sm:pb-28">
        <Reveal asHero>
          <span className="ed-kicker hero-item block">{subtitle}</span>

          <h1 className="ed-headline hero-item mt-6 max-w-5xl text-5xl sm:text-7xl lg:text-8xl">
            {before}
            {highlight && (
              <>
                {' '}
                <span className="italic text-accent">{highlight}</span>
              </>
            )}
            {after}
          </h1>

          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <p className="ed-body ed-dropcap hero-item lg:col-span-6">{description}</p>

            {imageSrc && (
              <figure className="hero-item lg:col-span-5 lg:col-start-8">
                <div className="ed-figure">
                  <img
                    src={imageSrc}
                    alt={imageAlt || ''}
                    className="aspect-[4/3] w-full object-cover grayscale"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="ed-caption mt-3 border-t border-rule-soft pt-2">
                  {imageAlt}
                </figcaption>
              </figure>
            )}
          </div>
        </Reveal>
      </div>

      <a
        href="#content-start"
        aria-label="Ir al contenido"
        className="ed-rule-soft flex items-center justify-between px-6 py-4 transition-colors hover:bg-paper sm:px-10"
      >
        <span className="ed-caption">Continuar</span>
        <i className="bx bx-down-arrow-alt text-lg text-accent" aria-hidden="true" />
      </a>
    </section>
  );
}