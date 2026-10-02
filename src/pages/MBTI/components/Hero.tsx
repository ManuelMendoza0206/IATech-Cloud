import { Reveal } from '../../../components/ui/Reveal';

export default function Hero() {
  return (
    <section className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 sm:px-10 sm:pt-40 sm:pb-28">
        <Reveal asHero>
          <span className="ed-kicker hero-item block">Perfiles del equipo</span>

          <h1 className="ed-headline hero-item mt-6 max-w-4xl text-6xl sm:text-8xl">
            MBTI<span className="italic text-accent">.</span>
            <br />
            Equipo Cloud
          </h1>

          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="ed-body ed-dropcap hero-item">
                Comprender cómo piensa y trabaja cada miembro del equipo es clave para construir
                infraestructura que no solo funcione, sino que escale con propósito y continuidad clínica.
              </p>

              <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
                <a href="#teoria" className="ed-btn ed-btn-primary">
                  Conocer la teoría
                </a>
                <a href="#equipo" className="ed-btn ed-btn-secondary">
                  Ver perfiles
                </a>
              </div>

              <p className="ed-caption ed-rule-soft mt-12 pt-5">
                16 tipos · 4 dimensiones · 4 perfiles mapeados
              </p>
            </div>

            <figure className="hero-item lg:col-span-5 lg:col-start-8">
              <div className="ed-figure">
                <img
                  src="/images/fondop.jpg"
                  alt="Equipo colaborando en infraestructura cloud"
                  className="aspect-[4/3] w-full object-cover grayscale"
                  loading="eager"
                />
              </div>
              <figcaption className="ed-caption ed-rule-soft mt-3 flex items-center gap-2 pt-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 bg-accent" />
                </span>
                4 perfiles activos
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}