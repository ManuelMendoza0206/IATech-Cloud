import { Reveal } from '../../components/ui/Reveal';
import { CONCLUSIONES, RECOMENDACIONES } from './data/conclusiones';

export default function Conclusiones() {
  return (
    <div>
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid py-20 sm:py-28">
            <div className="col-span-full sm:col-span-8">
              <Reveal asHero>
                <span className="swiss-label hero-item flex items-center gap-3 text-accent">
                  <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
                  Cierre del proyecto
                </span>

                <h1 className="swiss-display hero-item mt-8 text-ink">
                  Conclusiones y <span className="text-accent">recomendaciones</span>
                </h1>

                <p className="hero-item mt-10 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  Lo que dejó el trabajo en el Área de Servicios Cloud e Integración y lo que
                  conviene hacer después. Una síntesis directa, sin separar por categorías.
                </p>

                <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
                  <a
                    href="#contenido"
                    className="swiss-btn swiss-btn-primary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                  >
                    Leer
                    <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 sm:col-span-3 sm:col-start-10 sm:mt-0 sm:self-end">
              <p className="swiss-numeral hero-item text-accent">C/R</p>
              <p className="swiss-label mt-2 border-t border-ink pt-3">Síntesis del área</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contenido" className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid">
            <div className="col-span-full lg:col-span-4">
              <span className="swiss-label block text-accent">Conclusiones</span>
              <h2 className="swiss-display-sm mt-4 text-ink">Lo que aprendimos</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-60">
                Documentar, modelar procesos, medir costos y analizar datos fueron partes del mismo
                trabajo. Cada pieza aportó una forma distinta de entender cómo opera el área y qué
                necesita para mejorar.
              </p>
            </div>

            <div className="col-span-full mt-12 lg:col-span-7 lg:col-start-6 lg:mt-0">
              <ul className="space-y-6">
                {CONCLUSIONES.map((item) => (
                  <li key={item.titulo} className="border-l-2 border-accent pl-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      {item.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-60">{item.texto}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid">
            <div className="col-span-full lg:col-span-4">
              <span className="swiss-label block text-accent">Recomendaciones a futuro</span>
              <h2 className="swiss-display-sm mt-4 text-ink">Hacia dónde seguir</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-60">
                Las conclusiones marcan el punto de partida. Estas recomendaciones proponen cómo
                sostener lo logrado y abrir espacio para mejorar la operación, la tecnología y la
                formación del equipo.
              </p>
            </div>

            <div className="col-span-full mt-12 lg:col-span-7 lg:col-start-6 lg:mt-0">
              <ul className="space-y-6">
                {RECOMENDACIONES.map((item) => (
                  <li key={item.titulo} className="border-l-2 border-ink pl-5">
                    <h3 className="font-display text-lg font-semibold leading-snug text-ink">
                      {item.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-60">{item.texto}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid">
            <div className="col-span-full sm:col-span-8">
              <span className="swiss-label block text-accent">Cierre</span>
              <h2 className="swiss-display-sm mt-6 text-paper">Cerrar para seguir</h2>
              <p className="mt-8 max-w-2xl border-l-2 border-accent pl-5 text-base leading-relaxed text-paper/70 sm:text-lg">
                Lo escrito aquí resume el recorrido y propone los siguientes pasos. Sirve si se usa:
                revisar indicadores, ajustar procesos, cuidar la infraestructura y seguir aprendiendo
                con los datos del propio trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
