import { SectionHeader } from '../../../components/content';

const TIPOS = [
  {
    tipo: 'numeric',
    ejemplo: '@attribute mpg numeric',
    texto: 'Un número. Weka lo puede normalizar, discretizar o usar tal cual.',
  },
  {
    tipo: 'nominal',
    ejemplo: "@attribute cyl {'4','6','8'}",
    texto: 'Un valor de una lista finita. El orden no significa nada.',
  },
  {
    tipo: 'date',
    ejemplo: '@attribute fecha date',
    texto: 'Una fecha, con el formato DD/MM/YYYY. Weka la reconoce y calcula antigüedad.',
  },
  {
    tipo: 'string',
    ejemplo: '@attribute nombre string',
    texto: 'Texto libre. Weka lo guarda pero no lo usa como atributo predictivo sin pasarlo por un filtro.',
  },
];

export function Formato() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="03"
          title="El formato ARFF"
          description="ARFF (Attribute-Relation File Format) es el formato propio de Weka. Un archivo de texto con tres bloques: qué relación representa, qué atributos tiene y los datos. Es lo que permite que el resultado de una herramienta siga siendo legible para la siguiente."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-base leading-relaxed text-ink-60">
              El bloque de atributos declara el nombre, el tipo y el formato de cada variable. El
              de datos lleva los valores en el mismo orden, separados por coma. Los valores
              ausentes se escriben con un signo de interrogación.
            </p>

            <pre className="mt-8 overflow-x-auto border border-ink-15 bg-ink p-5 text-[12px] leading-relaxed text-paper sm:p-6">
{`@relation mtcars

@attribute mpg numeric
@attribute cyl {'4','6','8'}
@attribute hp numeric
@attribute am {'0','1'}

@data
21.0,6,110,0
21.0,6,110,0
22.8,4,93,1`}
            </pre>

            <p className="mt-6 text-sm leading-relaxed text-ink-60">
              Un archivo ARFF se puede escribir a mano, pero también se genera: el botón{' '}
              <strong className="text-ink">Save</strong> de la pestaña Preprocess exporta el
              dataset con el preprocesamiento ya aplicado, y ese archivo es el que se vuelve a
              cargar para el siguiente experimento.
            </p>
          </div>

          <div>
            <p className="swiss-label text-accent">Tipos de atributo</p>
            <ul className="mt-6 flex flex-col gap-4">
              {TIPOS.map((t) => (
                <li key={t.tipo} className="border-l-2 border-ink-15 pl-5">
                  <p className="font-mono text-[13px] font-medium text-ink">{t.ejemplo}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-60">{t.texto}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 border border-ink-15 bg-paper p-5 sm:p-6">
              <span className="swiss-label block text-accent">La trampa</span>
              <p className="mt-3 text-sm leading-relaxed text-ink-60">
                Weka también abre CSV, pero el separador hay que marcarlo a mano en el diálogo de
                apertura, y la primera fila tiene que ser el encabezado. Varios datasets en
                formato separados por punto y coma se abren mal si se deja el valor por defecto.
                Convertir a ARFF una sola vez evita el error en cada corrida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
