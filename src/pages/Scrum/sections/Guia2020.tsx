import { RailHeader, Sources, SourceList } from '../../../components/content';

/**
 * Scrum Guide 2020 vs 2017.
 *
 * El contraste está publicado por scrumguides.org (revisiones oficiales) y
 * por Scrum.org. Los cambios relevantes para el área: un solo equipo, la
 * aparición del Product Goal, los compromisos con hogar propio y el
 * passage de "self-organizing" a "self-managing".
 */

interface Change {
  n: string;
  title: string;
  before: string;
  after: string;
  why: string;
}

const CHANGES: Change[] = [
  {
    n: '01',
    title: 'Un equipo, un producto',
    before:
      'El Scrum Team incluía un Development Team con su propio Product Owner y su propio Scrum Master.',
    after:
      'El Scrum Team es una unidad única: Product Owner, Scrum Master y Developers, sin subequipos ni jerarquías internas.',
    why:
      'La separación entre Product Owner y Development Team generaba comportamiento de "ellos contra nosotros" en lugar de un objetivo compartido.',
  },
  {
    n: '02',
    title: 'Aparece el Product Goal',
    before: 'No existía. El contexto de largo plazo quedaba implícito.',
    after:
      'El Product Goal da contexto al Product Backlog y orienta al equipo más allá del Sprint en curso.',
    why:
      'Un Sprint puede tener objetivo y aun así avanzar en dirección equivocada. El Product Goal fija el destino.',
  },
  {
    n: '03',
    title: 'Los compromisos tienen hogar',
    before:
      'Sprint Goal y Definition of Done se describían, pero no funcionaban como artefactos con identidad propia.',
    after:
      'Product Goal, Sprint Goal y Definition of Done son compromisos explícitos, cada uno atado a su artefacto.',
    why:
      'Un compromiso sin contenedor se convierte en una expectativa informal que se negocia de Sprint a Sprint.',
  },
  {
    n: '04',
    title: 'Self-managing en lugar de self-organizing',
    before:
      'Los Scrum Teams se describían como auto-organizados: elegían cómo hacer el trabajo.',
    after:
      'Son auto-gestionados: deciden internamente quién hace qué, cuándo y cómo.',
    why:
      'Seguir la definición literal de "self-managing" de Richard Hackman clarify la autoridad real del equipo, no solo su autonomía operativa.',
  },
  {
    n: '05',
    title: 'Tres temas en la Planning',
    before: 'La Sprint Planning abordaba el qué y el cómo.',
    after:
      'Se agrega el porqué: el Sprint Goal, que es lo que le da sentido a los dos temas anteriores.',
    why:
      'Sin el porqué, la Planning se convierte en una lista de tareas que se negocia por volumen.',
  },
  {
    n: '06',
    title: 'Menos prescriptivo',
    before:
      'La edición 2017 había endurecido el lenguaje hasta dejar de ser guía para parecerse a un cuerpo de conocimiento.',
    after:
      'La edición 2020 vuelve a ser un marco minimalmente suficiente, con menos de 13 páginas.',
    why:
      'El objetivo declarado de Schwaber y Sutherland fue devolver Scrum a ser un framework, no un manual.',
  },
];

const SOURCES = [
  {
    label: 'Scrum Guides · historial de revisiones entre 2017 y 2020',
    href: 'https://scrumguides.org/revisions.html',
  },
  {
    label: 'Scrum.org · Scrum Guide 2020 y 2017 en paralelo',
    href: 'https://www.scrum.org/resources/blog/scrum-guide-2020-and-2017-side-side-comparison',
  },
  {
    label: 'InfoQ · cambios de la Scrum Guide 2020 con Schwaber y Sutherland',
    href: 'https://www.infoq.com/articles/changes-2020-Scrum-guide',
  },
];

export function Guia2020() {
  return (
    <section id="guia-2020" className="border-b border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Actualización"
          title="Qué cambió entre la Guía 2017 y la 2020"
          aside={
            <>
              <p>
                La Scrum Guide 2020 fue publicada el 18 de noviembre de 2020 por Ken Schwaber y
                Jeff Sutherland. Los cambios no son retoques de redacción: cambian qué se
                considera un equipo y qué cuenta como un compromiso.
              </p>
              <p className="mt-4">
                Vale la pena leerlos con cuidado, porque la forma en que el área habla de Scrum
                todos los días —velocity, historias, ceremonias— mezcla cosas que la Guía nunca
                define con cosas que la Guía 2020 efectivamente redefine.
              </p>
            </>
          }
        />

        <div className="mt-14 border-t border-ink">
          {CHANGES.map((change) => (
            <article key={change.n} className="border-b border-ink-15 py-8">
              <div className="swiss-grid gap-y-4">
                <div className="col-span-full sm:col-span-3">
                  <p className="swiss-rail font-display text-3xl font-black leading-none tracking-[-0.04em] text-accent">
                    {change.n}
                  </p>
                </div>

                <div className="col-span-full sm:col-span-9">
                  <h3 className="font-display text-xl font-bold leading-tight tracking-[-0.025em] text-ink sm:text-2xl">
                    {change.title}
                  </h3>

                  <div className="mt-6 swiss-grid gap-y-4">
                    <div className="col-span-full sm:col-span-4">
                      <div className="swiss-figure-muted h-full">
                        <p className="swiss-label">Antes · Guía 2017</p>
                        <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-ink-60">
                          {change.before}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-full sm:col-span-4">
                      <div className="swiss-figure h-full">
                        <p className="swiss-label text-accent">Ahora · Guía 2020</p>
                        <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-ink">
                          {change.after}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-full sm:col-span-4">
                      <div className="swiss-figure-muted h-full">
                        <p className="swiss-label">Por qué</p>
                        <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-ink-60">
                          {change.why}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Sources>
          <SourceList items={SOURCES} />
        </Sources>
      </div>
    </section>
  );
}

export default Guia2020;
