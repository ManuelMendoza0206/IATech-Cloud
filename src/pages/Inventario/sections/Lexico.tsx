import { RailHeader } from '../../../components/content';

const LEXICO = [
  {
    clasico: 'Existencia',
    cloud: 'Recurso activo',
    cambia:
      'No se cuenta por cantidad: cada recurso es único y tiene un identificador que lo distingue.',
  },
  {
    clasico: 'Entrada y salida',
    cloud: 'Alta y baja',
    cambia:
      'El movimiento lo dispara un despliegue o una baja aprobada, no una compra ni una venta.',
  },
  {
    clasico: 'Rotación',
    cloud: 'Uso y tiempo de vida',
    cambia:
      'Lo que deja de usarse se apaga o se retira; el registro tiene que reflejar ese cambio.',
  },
  {
    clasico: 'Costo de almacenamiento',
    cloud: 'Costo operativo mensual',
    cambia:
      'El gasto se acumula mientras el recurso existe, aunque nadie lo esté usando.',
  },
  {
    clasico: 'Conteo físico',
    cloud: 'Conciliación con el proveedor',
    cambia:
      'La verdad está en la API y la facturación; el registro se corrige contra ellas.',
  },
  {
    clasico: 'Responsable de bodega',
    cloud: 'Dueño del recurso',
    cambia:
      'La responsabilidad es nominal, no colectiva: una persona o un equipo responde por la fila.',
  },
];

export default function Lexico() {
  return (
    <section
      id="origen"
      className="scroll-mt-20 border-b border-ink bg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Origen"
          title="Del almacén al cloud"
          aside={
            <p>
              La gestión de inventarios nació contando existencias físicas. La nube cambió el
              objeto, no la pregunta: qué tenemos, cuánto cuesta y qué hacemos con ello.
            </p>
          }
        />

        <div className="mt-12 overflow-x-auto border border-ink-15">
          <table className="w-full min-w-[44rem] border-collapse text-left">
            <caption className="sr-only">
              Equivalencias entre la teoría clásica de inventarios y el inventario de recursos cloud
            </caption>
            <thead>
              <tr className="bg-ink text-paper">
                <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                  Concepto clásico
                </th>
                <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                  Equivalente cloud
                </th>
                <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                  Qué cambia
                </th>
              </tr>
            </thead>
            <tbody>
              {LEXICO.map((row) => (
                <tr
                  key={row.clasico}
                  className="border-b border-ink-15 bg-surface last:border-0 even:bg-paper"
                >
                  <th scope="row" className="px-4 py-4 text-sm font-semibold text-ink sm:px-6">
                    {row.clasico}
                  </th>
                  <td className="px-4 py-4 text-sm font-semibold text-accent sm:px-6">
                    {row.cloud}
                  </td>
                  <td className="max-w-[46ch] px-4 py-4 text-sm leading-relaxed text-ink-60 sm:px-6">
                    {row.cambia}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 max-w-3xl border-l-2 border-accent pl-5 text-base leading-relaxed text-ink sm:text-lg">
          La analogía tiene un límite: el inventario cloud no guarda el recurso, solo lo describe.
          Si la fila desaparece, el recurso sigue existiendo y sigue costando.
        </p>
      </div>
    </section>
  );
}
