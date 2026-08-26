import type { HeroProps } from './types';

export function Hero({ subtitle, title, highlight, description, author, imageSrc, imageAlt }: HeroProps) {
  const [before, after] = highlight ? title.split(highlight) : [title];

  return (
    <section className="relative overflow-hidden bg-navy-900 pt-32 pb-20 sm:pt-40 sm:pb-28">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || ''}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-navy-950/70 mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-signal/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-signal/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-widest text-signal">
          {subtitle}
        </span>
        <h1 className="mt-4 font-display text-4xl text-mist sm:text-5xl lg:text-6xl">
          {before}
          {highlight && (
            <>
              <br />
              <span className="text-signal">{highlight}</span>
            </>
          )}
          {after}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-mist/70">{description}</p>
        {author && (
          <p className="mt-2 font-mono text-sm text-mist/50">Autor: {author}</p>
        )}
      </div>

      <div className="flex justify-center mt-12">
        <a
          href="#content-start"
          aria-label="Ir al contenido"
          className="animate-bounce text-signal/70 transition hover:text-signal"
        >
          <i className="bx bx-chevrons-down text-4xl" />
        </a>
      </div>
    </section>
  );
}
