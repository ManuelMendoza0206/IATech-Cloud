import { SectionHeader, Sources, SourceList } from '../../../components/content';

const CAMPOS = [
  {
    campo: 'Tipo de recurso',
    rol: 'Dimensión',
    uso: 'Parte la barra horizontal. En la hoja quedó en orden alfabético.',
  },
  {
    campo: 'Proveedor',
    rol: 'Dimensión',
    uso: 'Tres miembros: AWS, Azure y GCP. También define el color de esa hoja.',
  },
  {
    campo: 'Ambiente',
    rol: 'Dimensión',
    uso: 'Desarrollo, Producción y QA/Pruebas. Eje del pastel y de la barra apilada.',
  },
  {
    campo: 'Región',
    rol: 'Dimensión',
    uso: 'Diez regiones del inventario. La barra las lista en orden alfabético.',
  },
  {
    campo: 'Criticidad',
    rol: 'Dimensión',
    uso: 'Alta, Baja, Crítica y Media. Colorea la barra apilada y filtra el KPI de 19.',
  },
  {
    campo: 'Fecha de creación',
    rol: 'Dimensión, año',
    uso: 'El eje de la línea. Tableau trunca la fecha a año con la parte de fecha.',
  },
  {
    campo: 'Costo mensual',
    rol: 'Medida, SUM',
    uso: 'La suma alimenta los KPI de costo y todas las barras de gasto.',
  },
  {
    campo: 'Recursos',
    rol: 'Medida, COUNT',
    uso: 'Cuenta filas: 100 en total, 25 por año, 19 cuando la criticidad es crítica.',
  },
  {
    campo: 'Costo anual estimado',
    rol: 'Campo calculado',
    uso: 'Fórmula del libro: la suma del costo mensual multiplicada por 12.',
  },
];

const MARCAS = [
  {
    title: 'Barra horizontal',
    text: 'Tipo de recurso y región. La longitud es el costo. Sirve cuando los nombres son largos y hay que leerlos completos.',
  },
  {
    title: 'Barra vertical',
    text: 'Proveedor. Pocos miembros, comparación directa. El eje llega a 10.000 USD, igual que el de tipo de recurso.',
  },
  {
    title: 'Pastel',
    text: 'Ambiente. Tres porciones, para ver la parte del total. La hoja no imprime la cifra: la proporción se lee en el ángulo.',
  },
  {
    title: 'Barra apilada',
    text: 'Ambiente partido por criticidad. La altura es el costo del ambiente; cada franja es una criticidad. La baja es una línea mínima.',
  },
  {
    title: 'Línea',
    text: 'Recuento por año de creación, de 2023 a 2026. Acá la medida ya no es el costo: es la cantidad de recursos.',
  },
  {
    title: 'Número grande',
    text: 'Los cuatro KPI de arriba son hojas de un solo número: suma o conteo de toda la fuente, sin partir por una dimensión.',
  },
];

const SOURCES = [
  {
    label: 'Tableau Help · dimensiones y medidas',
    href: 'https://help.tableau.com/current/pro/desktop/en-us/datafields_typesandroles.htm',
  },
  {
    label: 'Tableau Help · campos calculados',
    href: 'https://help.tableau.com/current/pro/desktop/en-us/calculations_calculatedfields.htm',
  },
];

export function Modelo() {
  return (
    <section id="modelo" className="scroll-mt-20 border-t border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="02"
          title="El modelo del libro"
          description="Cada fila del inventario es un recurso. Las hojas no inventan datos: agregan esos campos. El único cálculo nuevo es el costo anual."
        />

        <div className="mt-12 border border-ink bg-surface p-6 sm:p-8">
          <p className="swiss-label">Campo calculado</p>
          <p className="mt-4 font-display text-[clamp(1.6rem,4vw,2.75rem)] font-black leading-none tracking-[-0.04em] text-ink tabular-nums">
            21.284,5 <span className="text-ink-40">×</span> 12{' '}
            <span className="text-ink-40">=</span> <span className="text-accent">255.414</span>
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-60">
            Costo anual estimado = suma de costo mensual × 12. 21.284,5 × 12 cierra en 255.414,
            el KPI de arriba a la derecha del mensual. Es una proyección plana: supone que el
            mes se repite, no que el inventario vaya a crecer.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto border border-ink-15">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <caption className="sr-only">
              Campos del libro de trabajo Tableau de costo cloud, con su rol y el uso en cada hoja
            </caption>
            <thead>
              <tr className="bg-ink text-paper">
                <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                  Campo
                </th>
                <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                  Rol
                </th>
                <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                  Dónde se usa
                </th>
              </tr>
            </thead>
            <tbody>
              {CAMPOS.map((row) => (
                <tr key={row.campo} className="border-b border-ink-15 bg-surface last:border-0 even:bg-paper">
                  <th scope="row" className="px-4 py-4 text-sm font-semibold text-ink sm:px-6">
                    {row.campo}
                  </th>
                  <td className="px-4 py-4 text-sm text-ink-60 sm:px-6">{row.rol}</td>
                  <td className="px-4 py-4 text-sm text-ink-60 sm:px-6">{row.uso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink sm:text-3xl">
            La marca sigue a la pregunta
          </h3>
          <p className="mt-4 max-w-3xl text-ink-60">
            Tableau elige una marca por defecto según los campos que llegan al estante. En este
            libro cada elección se puede justificar por la cantidad de miembros y por lo que hay
            que comparar.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MARCAS.map((marca) => (
              <li key={marca.title} className="swiss-figure">
                <p className="font-display text-base font-bold leading-tight tracking-[-0.02em] text-ink">
                  {marca.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-60">{marca.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <Sources>
          <SourceList items={SOURCES} />
        </Sources>
      </div>
    </section>
  );
}
