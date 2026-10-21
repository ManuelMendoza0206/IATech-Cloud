import { SectionHeader } from '../../../components/content';
import { WEKA_META } from '../data/weka';

const HECHOS = [
  {
    icono: 'bx-calendar',
    titulo: 'Nace en 1993',
    texto:
      'Weka se originalizó en C en la University of Waikato (Hamilton, Nueva Zelanda) y se reescribió en Java en 1997. El copyright del código va de 1998 a 2026.',
  },
  {
    icono: 'bx-book',
    titulo: 'Un libro que lo acompaña',
    texto:
      'Witten, Frank, Hall y Palminio mantienen Data Mining: Practical Machine Learning Tools and Techniques. El manual y el libro son la referencia del método, no un extra.',
  },
  {
    icono: 'bx-code',
    titulo: 'Java, con su propio runtime',
    texto:
      'La distribución incluye el JRE, así que se abre sin instalar nada. El mismo código corre en escritorio, servidor y dentro de otros sistemas Java.',
  },
  {
    icono: 'bx-package',
    titulo: 'Gestor de paquetes',
    texto:
      'Desde la 3.7, el Package Manager amplía el conjunto con más learners, filtros y visualizaciones sin tocar la instalación.',
  },
];

export function Definicion() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="01"
          title="Qué es Weka"
          description="Weka (Waikato Environment for Knowledge Analysis) es un banco de trabajo de aprendizaje automático: un solo programa que reúne los algoritmos clásicos de minería de datos con una interfaz gráfica para probarlos sobre un dataset."
        />

        <div className="mt-6 max-w-4xl space-y-4 text-ink-60">
          <p>
            La sigla viene de <strong className="text-ink">Waikato Environment for Knowledge
            Analysis</strong>. Nace de una pregunta concreta: los algoritmos de aprendizaje
            automático se leían en los papers y se programaban desde cero, y ese hueco hacía que
            probar una idea nueva costara días. Weka los trae implementados, con la interfaz para
            verlos trabajar.
          </p>
          <p>
            No es una librería de Python ni un servicio en la nube. Es una aplicación de escritorio
            que se abre sobre un archivo y devuelve un resultado. Esa decisión define todo lo
            demás: el preprocesamiento, la evaluación y la comparación de modelos ocurren dentro de
            la misma ventana, y cada corrida queda registrada con los parámetros que usó.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {HECHOS.map((h) => (
            <li
              key={h.titulo}
              className="group border border-ink-15 bg-paper p-6 transition hover:border-ink-40"
            >
              <span className="flex h-11 w-11 items-center justify-center bg-ink text-xl text-accent transition group-hover:bg-accent group-hover:text-paper">
                <i className={`bx ${h.icono}`} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{h.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-60">{h.texto}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 border border-ink-15 bg-paper p-6 sm:p-8">
          <p className="swiss-label text-accent">Ficha de la versión</p>
          <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: 'Versión', v: WEKA_META.version },
              { k: 'Publicación', v: WEKA_META.fecha },
              { k: 'Copyright', v: WEKA_META.copyright },
              { k: 'Editor', v: WEKA_META.publisher },
            ].map((f) => (
              <div key={f.k}>
                <dt className="swiss-label">{f.k}</dt>
                <dd className="mt-1.5 font-display text-lg font-bold text-ink">{f.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 border-t border-ink-15 pt-5 text-sm leading-relaxed text-ink-60">
            La licencia es GNU General Public License y el manual completo viene incluido en la
            descarga. La cifra de versión y la fecha de publicación de esta página salen del
            README de la instalación, no de una memoria.
          </p>
        </div>
      </div>
    </section>
  );
}
