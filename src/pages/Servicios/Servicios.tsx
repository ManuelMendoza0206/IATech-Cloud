import { Link } from 'react-router-dom';
import { Reveal } from '../../components/ui/Reveal';
import { Catalogo, Criterios, Equivalencias, Proveedores } from './sections';

const ANCLAS = [
  { href: '#proveedores', label: 'Proveedores' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#equivalencias', label: 'Equivalencias' },
  { href: '#criterios', label: 'Criterios' },
];

export default function Servicios() {
  return (
    <div>
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid py-20 sm:py-28">
            <div className="col-span-full sm:col-span-8">
              <Reveal asHero>
                <span className="swiss-label hero-item flex items-center gap-3 text-accent">
                  <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
                  Catálogo cloud
                </span>

                <h1 className="swiss-display hero-item mt-8 text-ink">
                  Servi<span className="text-accent">cios</span>
                </h1>

                <p className="hero-item mt-10 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  Las plataformas y las capas con las que el área sostiene la atención clínica:
                  Amazon Web Services, Microsoft Azure, Google Cloud, y encima el cómputo, los
                  datos, la red, la identidad, la observabilidad y la integración.
                </p>

                <div className="hero-cta mt-12 flex flex-wrap items-center gap-3">
                  {ANCLAS.map((ancla) => (
                    <a
                      key={ancla.href}
                      href={ancla.href}
                      className="swiss-btn swiss-btn-secondary inline-flex items-center px-5 py-2.5 text-[11px]"
                    >
                      {ancla.label}
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 sm:col-span-4 sm:col-start-9 sm:mt-0 sm:self-end">
              <img
                src="/images/servicios/hero.jpg"
                alt="Racks de servidores con el cableado de un centro de datos"
                width={1400}
                height={900}
                className="aspect-[4/3] w-full border border-ink object-cover"
              />
              <div className="mt-3 flex items-end justify-between gap-4 border-t border-ink pt-3">
                <p className="swiss-label">Centro de datos</p>
                <p className="font-display text-4xl font-black leading-none tabular-nums text-accent">03</p>
              </div>
              <p className="swiss-label mt-2">Proveedores en operación</p>
            </div>
          </div>
        </div>
      </section>

      <Proveedores />
      <Catalogo />
      <Equivalencias />
      <Criterios />

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid">
            <div className="col-span-full sm:col-span-8">
              <span className="swiss-label block text-accent">Cierre</span>
              <h2 className="swiss-display-sm mt-6 text-paper">
                Un catálogo al servicio de la atención clínica
              </h2>
              <p className="mt-8 max-w-2xl border-l-2 border-accent pl-5 text-base leading-relaxed text-paper/70 sm:text-lg">
                AWS, Azure y Google Cloud son el medio. El servicio existe para que la solución
                médica siga respondiendo: con capacidad suficiente, con un dueño claro y con un
                costo que se pueda leer.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/tableau"
                  className="inline-flex items-center gap-2 bg-accent px-7 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-paper hover:text-ink"
                >
                  Ver el tablero de costo
                  <i className="bx bx-right-arrow-alt text-base" aria-hidden="true" />
                </Link>
                <Link
                  to="/contactos"
                  className="inline-flex items-center gap-2 border border-paper px-7 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  Escribir al área
                  <i className="bx bx-right-arrow-alt text-base" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
