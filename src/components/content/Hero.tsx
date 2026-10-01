import type { HeroProps } from './types';
import { Reveal } from '../ui/Reveal';

export function Hero({ subtitle, title, highlight, description, imageSrc, imageAlt }: HeroProps) {
  const [before, after] = highlight ? title.split(highlight) : [title];

  return (
    <section className="relative overflow-hidden bg-neu-base pt-32 pb-20 sm:pt-40 sm:pb-28">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || ''}
          className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        />
      )}
      <div className="absolute inset-0 bg-neu-base/50" />
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-aqua/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-glow/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal asHero>
          <span className="neu-pressed hero-item inline-flex items-center px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-signal">
            {subtitle}
          </span>
          <h1 className="hero-item mt-6 font-neu-display text-4xl font-black leading-tight text-ink-950 sm:text-5xl lg:text-6xl">
            {before}
            {highlight && (
              <>
                <br />
                <span className="text-signal">{highlight}</span>
              </>
            )}
            {after}
          </h1>
          <p className="hero-item mt-6 max-w-2xl text-lg text-ink-700">{description}</p>
        </Reveal>
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href="#content-start"
          aria-label="Ir al contenido"
          className="neu-btn flex h-12 w-12 items-center justify-center rounded-full bg-neu-base text-ink-950 transition hover:brightness-105 hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-neu-base"
        >
          <i className="bx bx-chevrons-down text-2xl" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
