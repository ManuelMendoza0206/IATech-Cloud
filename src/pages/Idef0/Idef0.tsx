import { Reveal } from '../../components/ui/Reveal';
import SectionNav from './sections/SectionNav';
import {
  Definicion,
  DiagramaA0,
  ProcesoPrincipal,
  Entradas,
  Controles,
  Mecanismos,
  Salidas,
  Resumen,
  Video,
} from './sections';

export default function Idef0() {
  return (
    <div>
      <section className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 sm:px-10 sm:pt-40 sm:pb-28">
          <Reveal asHero>
            <span className="ed-kicker hero-item block">Modelado de funciones</span>

            <h1 className="ed-headline hero-item mt-6 max-w-4xl text-6xl sm:text-8xl">
              IDEF<span className="italic text-accent">0</span>
            </h1>

            <div className="mt-12 grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="ed-body ed-dropcap hero-item">
                  El lenguaje estándar para documentar <em>qué</em> hace un sistema antes de decidir{' '}
                  <em>cómo</em> lo hace. En esta página está el diagrama A-0 del proyecto CLOUD:
                  automatizar el despliegue y alojamiento de aplicaciones en la nube.
                </p>

                <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
                  <a href="#definicion" className="ed-btn ed-btn-primary">
                    Ver la teoría
                    <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
                  </a>
                  <a href="#diagrama" className="ed-btn ed-btn-secondary">
                    Ir al diagrama
                  </a>
                </div>
              </div>

              <figure className="hero-item lg:col-span-4 lg:col-start-9">
                <blockquote className="ed-pullquote my-0">
                  Documentar el <em>qué</em> antes del <em>cómo</em>: ese es el
                  orden correcto.
                </blockquote>
                <p className="ed-caption ed-rule-soft mt-3 pt-2">
                  Nodo raíz A-0 · Proyecto CLOUD
                </p>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      <div id="content-start" />
      <SectionNav />

      <div id="definicion">
        <Definicion />
      </div>
      <div id="diagrama">
        <DiagramaA0 />
      </div>
      <div id="proceso">
        <ProcesoPrincipal />
      </div>
      <div id="entradas">
        <Entradas />
      </div>
      <div id="controles">
        <Controles />
      </div>
      <div id="mecanismos">
        <Mecanismos />
      </div>
      <div id="salidas">
        <Salidas />
      </div>
      <Resumen />
      <Video />
    </div>
  );
}
