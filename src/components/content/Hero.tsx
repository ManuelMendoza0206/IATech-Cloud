import type { HeroProps } from './types';
import { Reveal } from '../ui/Reveal';

/** Hero compartido: barra de estado + KPI, el lenguaje de dashboard. */
export function Hero({ subtitle, title, highlight, description, imageSrc, imageAlt }: HeroProps) {
  const [before, after] = highlight ? title.split(highlight) : [title];

  return (
    <section className="border-b border-steel/25 bg-ice-50">
      <div className="border-b border-steel/25 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 px-6 py-2.5 sm:px-10">
          <span className="chip chip-ok">
            <span className="dot" />
            OPERATIVO
          </span>
          <span className="chip">
            <span className="text-ink-45">area</span>
            <span className="metric font-medium text-ink">Cloud e Integración</span>
          </span>
          <span className="ml-auto hidden mono-label sm:block">{subtitle}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
        <Reveal asHero>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <h1 className="hero-item text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                {before}
                {highlight && (
                  <>
                    {' '}
                    <span className="text-signal">{highlight}</span>
                  </>
                )}
                {after}
              </h1>

              <p className="hero-item mt-6 max-w-xl text-lg leading-relaxed text-ink-70">
                {description}
              </p>

              <a
                href="#content-start"
                className="btn btn-primary hero-item mt-8 w-fit"
              >
                Ver contenido
                <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
              </a>
            </div>

            {imageSrc && (
              <figure className="hero-item lg:col-span-5">
                <div className="panel overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={imageAlt || ''}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="mono-label mt-2">{imageAlt}</figcaption>
              </figure>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}