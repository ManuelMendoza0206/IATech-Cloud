import { SectionHeader, Sources, SourceList } from '../../../components/content';

const PIEZAS = [
  {
    title: 'La hoja responde una pregunta',
    text: 'En Tableau la unidad de trabajo es la hoja. Cada hoja del libro de costo hace una sola pregunta: cuánto pesa un tipo de recurso, cómo se reparte el proveedor, cuántos recursos se crearon por año.',
  },
  {
    title: 'El estante es la consulta',
    text: 'Arrastrar un campo al estante de filas, columnas o marcas no dibuja: arma una consulta. VizQL, el lenguaje que sale de Polaris (Stanford, 2002), traduce esa disposición en la agregación que después se ve.',
  },
  {
    title: 'Dimensión parte, medida agrega',
    text: 'Una dimensión corta la vista en categorías: proveedor, ambiente, región. Una medida se resume con una agregación: la suma del costo, el conteo de recursos. Sin las dos, la hoja no tiene eje ni magnitud.',
  },
  {
    title: 'El tablero compone las hojas',
    text: 'El dashboard no calcula de nuevo. Toma hojas ya hechas y las pone en una sola lectura: cuatro KPI arriba y seis vistas abajo. La pregunta del conjunto es dónde está el gasto del inventario.',
  },
];

const SOURCES = [
  {
    label: 'Tableau Help · introducción al análisis',
    href: 'https://help.tableau.com/current/pro/desktop/en-us/gettingstarted_overview.htm',
  },
  {
    label: 'Stolte, Tang y Hanrahan · Polaris (2002)',
    href: 'https://doi.org/10.1109/2945.981851',
  },
  {
    label: 'Tableau Help · armar un dashboard',
    href: 'https://help.tableau.com/current/pro/desktop/en-us/dashboards_create.htm',
  },
];

export function Definicion() {
  return (
    <section id="definicion" className="scroll-mt-20 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="01"
          title="Qué es Tableau"
          description="Tableau es una herramienta de análisis visual: los campos de una tabla se convierten en hojas, y las hojas se componen en un tablero. Este libro aplica eso al inventario cloud del área."
        />

        <div className="mt-6 max-w-4xl space-y-4 text-ink-60">
          <p>
            La vista no es un dibujo suelto. Detrás de cada marca hay una agregación sobre las
            filas de la fuente. En este caso la fuente es el inventario: una fila por recurso,
            con su costo mensual, su proveedor, su ambiente, su región y su criticidad.
          </p>
          <p>
            El antecedente directo es Polaris, el sistema que Chris Stolte, Diane Tang y Pat
            Hanrahan publicaron en Stanford en 2002. De ahí sale la idea que Tableau todavía
            usa: especificar la vista con campos, y dejar que el sistema genere la consulta.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {PIEZAS.map((pieza) => (
            <li key={pieza.title} className="swiss-figure">
              <h3 className="font-display text-lg font-bold leading-tight tracking-[-0.02em] text-ink">
                {pieza.title}
              </h3>
              <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-ink-60">{pieza.text}</p>
            </li>
          ))}
        </ul>

        <Sources>
          <SourceList items={SOURCES} />
        </Sources>
      </div>
    </section>
  );
}
