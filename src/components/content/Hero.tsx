import type { HeroProps } from './types';
import { Reveal } from '../ui/Reveal';

/**
 * Hero compartido: la imagen es la capa de fondo y el panel de texto
 * se superpone sobre ella — el overlap explicito del skill.
 */
export function Hero({ subtitle, title, highlight, description, imageSrc, imageAlt }: HeroProps) {
  const [before, after] = highlight ? title.split(highlight) : [title];

  return (
    <section className="bg-canvas pb-24 pt-16 sm:pb-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        {imageSrc && (
          <div data-speed="0.3" className="absolute inset-x-0 top-0 -z-10 h-72 overflow-hidden sm:h-96">
            <img
              src={imageSrc}
              alt={imageAlt || ''}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-canvas/50" />
          </div>
        )}

        <Reveal asHero>
          <span className="hero-item label">{subtitle}</span>

          <h1 className="hero-item display-front mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            {before}
            {highlight && (
              <>
                {' '}
                <span className="display-back">{highlight}</span>
              </>
            )}
            {after}
          </h1>
        </Reveal>

        {/* Panel de frente: se superpone sobre la imagen de fondo */}
        <div className="layer-edge mt-10 max-w-2xl p-8 sm:mt-12 sm:p-10">
          <Reveal asHero>
            <p className="hero-item text-lg leading-relaxed text-ink-70">{description}</p>

            <a href="#content-start" className="layer-btn layer-btn-primary hero-item mt-8 w-fit">
              Ver contenido
              <i className="bx bx-down-arrow-alt text-lg" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}