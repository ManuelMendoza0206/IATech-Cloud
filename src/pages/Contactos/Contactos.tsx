import { Reveal } from '../../components/ui/Reveal';
import { Alcance } from './sections/Alcance';
import { ComoEscribir } from './sections/ComoEscribir';
import { Equipo } from './sections/Equipo';

export default function Contactos() {
  return (
    <div>
      {/* Hero compacto */}
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid py-20 sm:py-28">
            <div className="col-span-full sm:col-span-8">
              <Reveal asHero>
                <span className="swiss-label hero-item flex items-center gap-3 text-accent">
                  <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
                  Contacto
                </span>

                <h1 className="swiss-display hero-item mt-8 text-ink">
                  Contac<span className="text-accent">tos</span>
                </h1>

                <p className="hero-item mt-10 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  Quién atiende cada parte del área y cómo escribirle directamente.
                </p>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 sm:col-span-3 sm:col-start-10 sm:mt-0 sm:self-end">
              <p className="swiss-numeral hero-item text-accent">05</p>
              <p className="swiss-label mt-2 border-t border-ink pt-3">
                Integrantes del área
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="content-start" />
      <Equipo />
      <Alcance />
      <ComoEscribir />
    </div>
  );
}