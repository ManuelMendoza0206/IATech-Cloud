import { RailHeader } from '../../../components/content';

const CAMPOS = [
  {
    atributo: 'Tipo de recurso',
    pregunta: '¿Qué es?',
    valores: 'Instancia VM, contenedor, bucket, base de datos, función, red, monitoreo.',
  },
  {
    atributo: 'Proveedor',
    pregunta: '¿Dónde corre?',
    valores: 'AWS, Azure, Google Cloud.',
  },
  {
    atributo: 'Región y zona',
    pregunta: '¿Dónde viven los datos?',
    valores: 'us-east-1, eastus, southamerica-east-1.',
  },
  {
    atributo: 'Ambiente',
    pregunta: '¿Para qué se usa?',
    valores: 'Producción, QA, Desarrollo.',
  },
  {
    atributo: 'Estado',
    pregunta: '¿Está encendido?',
    valores: 'En ejecución, detenido, en desarrollo.',
  },
  {
    atributo: 'Criticidad',
    pregunta: '¿Qué pasa si falla?',
    valores: 'Crítica, Alta, Media, Baja.',
  },
  {
    atributo: 'Responsable',
    pregunta: '¿Quién responde?',
    valores: 'CloudOps, Backend, DevOps.',
  },
  {
    atributo: 'Costo mensual',
    pregunta: '¿Cuánto cuesta?',
    valores: 'Medida en USD, sumable por periodo.',
  },
];

interface FichaCampo {
  campo: string;
  valor: string;
  tono?: 'mono' | 'accent';
}

const FICHA: FichaCampo[] = [
  { campo: 'id', valor: 'api-clinica-prod', tono: 'mono' },
  { campo: 'tipo', valor: 'Instancia VM' },
  { campo: 'proveedor', valor: 'AWS' },
  { campo: 'región', valor: 'us-east-1' },
  { campo: 'ambiente', valor: 'Producción' },
  { campo: 'estado', valor: 'En ejecución' },
  { campo: 'criticidad', valor: 'Crítica', tono: 'accent' },
  { campo: 'responsable', valor: 'CloudOps' },
  { campo: 'costo', valor: 'Medida mensual' },
];

export default function Anatomia() {
  return (
    <section
      id="estructura"
      className="scroll-mt-20 border-b border-ink bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Estructura"
          title="Anatomía de un registro"
          aside={
            <p>
              Una fila, un recurso. Ocho atributos convierten una lista de nombres en un inventario
              que se puede operar; el identificador es la clave que hace única la fila.
            </p>
          }
        />

        <div className="mt-12 swiss-grid gap-y-10">
          <div className="col-span-full lg:col-span-8">
            <div className="overflow-x-auto border border-ink-15 bg-surface">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Atributos de un registro de inventario cloud, la pregunta que responde cada uno y
                  los valores que usa el área
                </caption>
                <thead>
                  <tr className="bg-ink text-paper">
                    <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                      Atributo
                    </th>
                    <th scope="col" className="hidden px-4 py-3 font-mono text-[11px] uppercase tracking-widest lg:table-cell sm:px-6">
                      Pregunta que responde
                    </th>
                    <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                      Valores del área
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CAMPOS.map((campo) => (
                    <tr
                      key={campo.atributo}
                      className="border-b border-ink-15 bg-surface last:border-0 even:bg-paper"
                    >
                      <th scope="row" className="px-4 py-4 text-sm font-semibold text-ink sm:px-6">
                        {campo.atributo}
                        <span className="mt-1 block text-xs font-normal text-ink-60 lg:hidden">
                          {campo.pregunta}
                        </span>
                      </th>
                      <td className="hidden px-4 py-4 text-sm text-ink-60 lg:table-cell sm:px-6">
                        {campo.pregunta}
                      </td>
                      <td className="px-4 py-4 text-sm leading-relaxed text-ink-60 sm:px-6">
                        {campo.valores}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-60">
              El identificador no aparece en la tabla porque no es un atributo más: es la clave que
              hace única la fila. Sin él, dos registros del mismo recurso parecen dos recursos.
            </p>
          </div>

          <div className="col-span-full lg:col-span-4">
            <div className="border border-ink bg-surface">
              <div className="flex items-baseline justify-between gap-4 border-b border-ink px-4 py-3">
                <span className="swiss-label">Ficha · una fila</span>
                <span className="swiss-label">Ejemplo</span>
              </div>

              <dl>
                {FICHA.map((item) => (
                  <div
                    key={item.campo}
                    className="flex items-baseline justify-between gap-4 border-b border-ink-15 px-4 py-2.5 last:border-b-0"
                  >
                    <dt className="swiss-label shrink-0">{item.campo}</dt>
                    <dd
                      className={`text-right text-xs font-semibold leading-tight text-ink ${
                        item.tono === 'accent' ? 'text-accent' : ''
                      } ${item.tono === 'mono' ? 'font-mono tabular-nums' : ''}`}
                    >
                      {item.valor}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="border-t border-ink-15 px-4 py-3 text-[11px] leading-relaxed text-ink-60">
                Valores ilustrativos. El registro real se consulta en la aplicación del área.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
