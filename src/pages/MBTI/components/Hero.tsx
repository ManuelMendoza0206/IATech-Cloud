import { Reveal } from '../../../components/ui/Reveal';

export default function Hero() {
  return (
    <section className="border-b border-ink bg-paper">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="swiss-grid py-20 sm:py-28">
          <div className="col-span-full sm:col-span-7">
            <Reveal asHero>
              <span className="swiss-label hero-item flex items-center gap-3 text-accent">
                <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
                Perfiles del equipo
              </span>

              <h1 className="swiss-display hero-item mt-8 text-ink">
                MBTI<span className="text-accent">.</span>
                <br />
                Equipo Cloud
              </h1>

              <p className="hero-item mt-10 max-w-xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                Comprender cómo piensa y trabaja cada miembro del equipo es clave para construir
                infraestructura que no solo funcione, sino que escale con propósito y continuidad clínica.
              </p>

              <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
                <a href="#teoria" className="swiss-btn swiss-btn-primary inline-flex items-center gap-2 px-7 py-3 text-[11px]">
                  Conocer la teoría
                  <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
                </a>
                <a href="#equipo" className="swiss-btn swiss-btn-secondary inline-flex items-center gap-2 px-7 py-3 text-[11px]">
                  Ver perfiles
                </a>
              </div>

              <p className="swiss-label hero-item mt-12 border-t border-ink pt-6">
                16 tipos · 4 dimensiones · 4 perfiles mapeados
              </p>
            </Reveal>
          </div>

          <div className="col-span-full mt-12 sm:col-span-5 sm:mt-0">
            <div className="relative h-[300px] overflow-hidden sm:h-[420px]">
              <img
                src="/images/fondop.jpg"
                alt="Equipo colaborando en infraestructura cloud"
                className="absolute inset-0 h-full w-full border border-ink object-cover grayscale"
                loading="eager"
              />
              <div className="swiss-cell absolute bottom-0 left-0 flex items-center gap-2.5 border-b-0 border-l-0 px-4 py-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 bg-accent" />
                </span>
                <span className="swiss-label">4 perfiles activos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}