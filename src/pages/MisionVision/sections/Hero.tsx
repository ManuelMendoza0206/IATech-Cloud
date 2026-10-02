import { Reveal } from '../../../components/ui/Reveal';

export default function Hero() {
  return (
    <section className="border-b border-rule bg-paper">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 sm:px-10 sm:pt-40 sm:pb-28">
        <Reveal asHero>
          <span className="ed-kicker hero-item block">Propósito del área</span>

          <h1 className="ed-headline hero-item mt-6 max-w-4xl text-6xl sm:text-8xl">
            Misión <span className="italic text-accent">y</span> Visión
          </h1>

          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="ed-body ed-dropcap hero-item">
                El norte que guía cada despliegue del Área de Servicios Cloud e Integración:
                infraestructura médica confiable, continua y al servicio de la clínica.
              </p>

              <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
                <a href="#declaraciones" className="ed-btn ed-btn-primary">
                  Declaraciones
                </a>
                <a href="#pilares" className="ed-btn ed-btn-secondary">
                  Pilares
                </a>
              </div>
            </div>

            <figure className="hero-item lg:col-span-4 lg:col-start-9">
              <blockquote className="ed-pullquote my-0">
                «La infraestructura que sostiene la atención médica no puede
                tener puntos únicos de falla.»
              </blockquote>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}