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
} from './sections';

export default function Scrum() {
  return (
    <div>
      <Hero
        subtitle="Marco Ágil"
        title="Teoría de"
        highlight="Scrum"
        description="Framework adaptativo, iterativo e incremental para gestionar proyectos complejos. Basado en empirismo y pensamiento Lean, Scrum entrega valor continuo a través de ciclos cortos de inspección y adaptación."
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tcuzy6R-xkDBPNUKCYlhlL_Nu_YLJ6rLBis_sJKaPA&s=10"
        imageAlt="Equipo trabajando con metodología Scrum"
      />
      <div id="content-start" />
      <SectionNav />

      {/* Atajos: equipo + objetivos */}
      <div className="border-b border-navy-900/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6 py-4 sm:px-10">
          <a
            href="#equipo"
            className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-navy-950 transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
          >
            Ver equipo
            <i className="bx bx-down-arrow-alt text-base" />
          </a>
          <Link
            to="/scrum/objetivos"
            className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 bg-transparent px-6 py-3 text-sm font-semibold text-navy-900 transition hover:border-signal/50 hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
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
      <ConceptosOperativos />
      <div id="equipo">
        <ScrumTeam />
      </div>

      {/* Banda intermedia hacia la subpágina de objetivos */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-navy-900/10 bg-mist p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-widest text-signal">
                Siguiente paso
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-navy-950 sm:text-3xl">
                ¿Cómo se convierte cada área en trabajo del Sprint?
              </h2>
              <p className="mt-3 text-navy-700/70">
                Los objetivos de las cuatro áreas alimentan el Product Backlog.
                Miralos en detalle en su propia página.
              </p>
            </div>
            <Link
              to="/scrum/objetivos"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-950 px-7 py-3.5 text-sm font-semibold text-mist transition-colors hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2"
            >
              Ver objetivos por área
              <i className="bx bx-right-arrow-alt text-lg" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
          <p className="font-mono text-xs uppercase tracking-widest text-signal">Cierre</p>
          <h2 className="mt-4 font-display text-3xl text-mist sm:text-4xl">
            Scrum no es un proceso, es un marco para aprender
          </h2>
          <p className="mt-4 text-mist/60">
            Pilares, valores, roles, eventos y artefactos trabajan juntos para que el equipo inspeccione
            la realidad y se adapte. El resto —historias, velocity, refinamiento— es la práctica diaria
            que hace sostenible la entrega de valor.
          </p>
        </div>
      </section>
    </div>
  );
}
