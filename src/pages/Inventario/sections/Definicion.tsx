import { RailHeader } from '../../../components/content';

const NO_ES = [
  'Una foto del mes que se archiva y no se vuelve a abrir.',
  'La planilla de una sola persona, sin dueño por recurso.',
  'Un listado de facturas sin relación con lo que está en marcha.',
];

const ES = [
  'Un registro con un dueño identificable por cada fila.',
  'La fuente común para decidir costo, riesgo y continuidad.',
  'Una obligación operativa que se revisa y se corrige.',
];

export default function Definicion() {
  return (
    <section
      id="definicion"
      className="scroll-mt-20 border-b border-ink bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Definición"
          title="Qué es un inventario y por qué se mantiene vivo"
          aside={
            <p>
              Antes de hablar de herramientas, conviene fijar el objeto: un inventario no es una
              planilla que se llena una vez, sino una descripción viva de lo que el área opera.
            </p>
          }
        />

        <div className="mt-12 swiss-grid gap-y-10">
          <div className="col-span-full lg:col-span-3">
            <p className="swiss-rail swiss-label">El criterio</p>
          </div>

          <div className="col-span-full grid gap-10 lg:col-span-9 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="space-y-5 text-base leading-relaxed text-ink-60 sm:text-lg">
              <p>
                En su forma más simple, un inventario es una lista de existencias. En una operación
                cloud, esa lista se vuelve una pieza de infraestructura: cada fila describe un
                recurso, su proveedor, su ambiente, su criticidad, su dueño y su costo.
              </p>
              <p>
                Lo que distingue un inventario útil de una planilla abandonada es la conciliación.
                El proveedor sabe qué está encendido; el registro agrega lo que el proveedor no
                sabe: para qué existe, quién lo usa y qué ocurre si se apaga.
              </p>
              <p className="border-l-2 border-accent pl-5 text-ink">
                Un inventario desactualizado es peor que no tenerlo: da la sensación de control sin
                el control.
              </p>
              <p>
                Por eso se mantiene vivo. Se actualiza en cada alta, cambio y baja, y se contrasta
                con la realidad del proveedor y la facturación. La pregunta no es si está completo,
                sino si se corrige a tiempo.
              </p>
            </div>

            <div className="border border-ink-15 bg-surface p-6">
              <p className="swiss-label text-ink">Un inventario no es</p>
              <ul className="mt-3 space-y-3 border-t border-ink-15 pt-4">
                {NO_ES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink-60"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 border border-ink-40"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="swiss-label mt-7 text-accent">Un inventario es</p>
              <ul className="mt-3 space-y-3 border-t border-ink-15 pt-4">
                {ES.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink-60"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
