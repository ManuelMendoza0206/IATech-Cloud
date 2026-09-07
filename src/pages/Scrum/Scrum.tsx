import { Hero } from '../../components/content';
import SectionNav from './sections/SectionNav';
import {
  Definicion,
  Pilares,
  Valores,
  Eventos,
  Artefactos,
  ConceptosOperativos,
  ObjetivosAreas,
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
      <ObjetivosAreas />
      <div id="equipo">
        <ScrumTeam />
      </div>

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
