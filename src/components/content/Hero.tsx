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
  backgroundSrc,
  backgroundAlt,
}: HeroProps) {
  const [before, after] = highlight ? title.split(highlight) : [title];
  const hasBackground = Boolean(backgroundSrc);

  return (
    <section
      className={`relative overflow-hidden border-b border-ink ${hasBackground ? 'bg-ink' : 'bg-paper'}`}
    >
      {hasBackground && (
        <>
          <img
            src={backgroundSrc}
            alt={backgroundAlt || ''}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45"
            aria-hidden="true"
          />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="swiss-grid py-20 sm:py-28">
          <div className="col-span-full sm:col-span-8">
            <Reveal asHero>
              <span className="swiss-label hero-item flex items-center gap-3 text-accent">
                <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
                {subtitle}
              </span>

              <h1
                className={`swiss-display hero-item mt-8 ${hasBackground ? 'text-paper' : 'text-ink'}`}
              >
                {before}
                {highlight && (
                  <>
                    {' '}
                    <span className="text-accent">{highlight}</span>
                  </>
                )}
                {after}
              </h1>

              <p
                className={`hero-item mt-8 max-w-xl text-base leading-relaxed sm:text-lg ${
                  hasBackground ? 'text-paper/75' : 'text-ink-60'
                }`}
              >
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
        className={`swiss-btn inline-flex items-center gap-2 border-x-0 border-b-0 px-6 py-3 text-[11px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
          hasBackground
            ? 'swiss-btn-primary border-paper/50'
            : 'swiss-btn-secondary'
        }`}
      >
        Contenido
        <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
      </a>
    </section>
  );
}