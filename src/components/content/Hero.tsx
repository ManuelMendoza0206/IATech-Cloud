import type { HeroProps } from './types';
import { Reveal } from '../ui/Reveal';
import { Photo } from './Photo';

/**
 * Hero Swiss: tipografía masiva al Flush left, columna de contenido
 * indentada sobre el grid y columna vacía como espacio negativo estructural.
 */
export function Hero({
  subtitle,
  title,
  highlight,
  description,
  imageSrc,
  imageAlt,
  imagePending,
}: HeroProps) {
  const [before, after] = highlight ? title.split(highlight) : [title];

  return (
    <section className="relative border-b border-ink bg-paper">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="swiss-grid py-20 sm:py-28">
          <div className="col-span-full sm:col-span-8">
            <Reveal asHero>
              <span className="swiss-label hero-item flex items-center gap-3 text-accent">
                <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
                {subtitle}
              </span>

              <h1 className="swiss-display hero-item mt-8 text-ink">
                {before}
                {highlight && (
                  <>
                    {' '}
                    <span className="text-accent">{highlight}</span>
                  </>
                )}
                {after}
              </h1>

              <p className="hero-item mt-8 max-w-xl text-base leading-relaxed text-ink-60 sm:text-lg">
                {description}
              </p>
            </Reveal>
          </div>

          {imageSrc && (
            <div className="hero-item col-span-full mt-12 sm:col-span-4 sm:mt-0 sm:self-end">
              <Photo
                src={imageSrc}
                alt={imageAlt || ''}
                pending={imagePending}
                aspect="4/3"
                imgClassName="grayscale"
                caption={false}
              />
              <p className="swiss-label mt-2 border-t border-ink-15 pt-2">{imageAlt}</p>
            </div>
          )}
        </div>
      </div>

      <a
        href="#content-start"
        aria-label="Ir al contenido"
        className="swiss-btn swiss-btn-secondary inline-flex items-center gap-2 border-x-0 border-b-0 px-6 py-3 text-[11px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        Contenido
        <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
      </a>
    </section>
  );
}