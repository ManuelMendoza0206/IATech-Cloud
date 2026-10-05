import { Link } from 'react-router-dom';
import { Hero } from '../../components/content';
import SectionNav from './sections/SectionNav';
import {
  Definicion,
  Pilares,
  Valores,
  Eventos,
  Artefactos,
  ConceptosOperativos,
  ScrumTeam,
  Guia2020,
} from './sections';

export default function Scrum() {
  return (
    <div>
      <Hero
        subtitle="Marco Ágil"
        title="Teoría de"
        highlight="Scrum"
        description="Framework adaptativo, iterativo e incremental para gestionar proyectos complejos. Basado en empirismo y pensamiento Lean, Scrum entrega valor continuo a través de ciclos cortos de inspección y adaptación."
        imageSrc="/images/scrum-07.jpg"
        imageAlt="Equipo trabajando con metodología Scrum"
        imagePending="Fotografía de un equipo pequeño revisando el backlog en una pizarra, con tarjetas ordenadas en columnas."
      />
      <div id="content-start" />
      <SectionNav />

      {/* Atajos: equipo + objetivos */}
      <div className="border-b border-ink-15 bg-paper">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 py-4 sm:px-10">
          <a
            href="#equipo"
            className="inline-flex items-center gap-2 bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Ver equipo
            <i className="bx bx-down-arrow-alt text-base" />
          </a>
          <Link
            to="/scrum/objetivos"
            className="swiss-cell inline-flex items-center gap-2 bg-transparent px-6 py-3 text-sm font-semibold text-ink transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Ver objetivos por área
            <i className="bx bx-right-arrow-alt text-base" />
          </Link>
        </div>
      </div>

      <div id="definicion">
        <Definicion />
      </div>
      <div id="pilares">
        <Pilares />
      </div>
      <div id="valores">
        <Valores />
      </div>
      <div id="eventos">
        <Eventos />
      </div>
      <div id="artefactos">
        <Artefactos />
      </div>
      <Guia2020 />
      <ConceptosOperativos />
      <div id="equipo">
        <ScrumTeam />
      </div>

      {/* Banda intermedia hacia la subpágina de objetivos */}
      <section className="bg-paper pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-cell flex flex-col items-start gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Siguiente paso
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
                ¿Cómo se convierte cada área en trabajo del Sprint?
              </h2>
              <p className="mt-3 text-ink-60/70">
                Los objetivos de las cuatro áreas alimentan el Product Backlog.
                Miralos en detalle en su propia página.
              </p>
            </div>
            <Link
              to="/scrum/objetivos"
              className="swiss-cell inline-flex shrink-0 items-center gap-2 px-7 py-3.5 text-sm font-semibold text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Ver objetivos por área
              <i className="bx bx-right-arrow-alt text-lg" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Cierre</p>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
            Scrum no es un proceso, es un marco para aprender
          </h2>
          <p className="mt-4 text-ink/60">
            Pilares, valores, roles, eventos y artefactos trabajan juntos para que el equipo inspeccione
            la realidad y se adapte. El resto —historias, velocity, refinamiento— es la práctica diaria
            que hace sostenible la entrega de valor.
          </p>
        </div>
      </section>
    </div>
  );
}
