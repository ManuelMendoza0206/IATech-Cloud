import { RailHeader } from '../../../components/content';

const ROLES = [
  {
    rol: 'Dueño del recurso',
    decide: 'Si el recurso existe, su criticidad y su baja.',
    responde: 'Que siga teniendo sentido para el negocio.',
  },
  {
    rol: 'Responsable técnico',
    decide: 'Cómo se opera, se actualiza y se respalda.',
    responde: 'El estado y las etiquetas al día.',
  },
  {
    rol: 'FinOps',
    decide: 'Cómo se mide y se asigna el costo.',
    responde: 'Que el gasto tenga centro y justificación.',
  },
  {
    rol: 'Seguridad y cumplimiento',
    decide: 'Quién accede y dónde viven los datos.',
    responde: 'El cumplimiento y la retención.',
  },
];

export default function Gobierno() {
  return (
    <section
      id="gobierno"
      className="scroll-mt-20 border-b border-ink bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Gobierno"
          title="Quién responde por cada fila"
          aside={
            <p>
              Cada fila tiene un dueño y cada decisión tiene un nombre. El gobierno del inventario
              no es un comité: es la asignación explícita de responsabilidad sobre lo que ya está
              operando.
            </p>
          }
        />

        <div className="mt-12 swiss-grid gap-y-10">
          <div className="col-span-full lg:col-span-3">
            <p className="swiss-rail swiss-label">Cuatro roles</p>
          </div>

          <div className="col-span-full lg:col-span-9">
            <div className="overflow-x-auto border border-ink-15 bg-surface">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Roles del inventario cloud, lo que decide cada uno y aquello por lo que responde
                </caption>
                <thead>
                  <tr className="bg-ink text-paper">
                    <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                      Rol
                    </th>
                    <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                      Decide
                    </th>
                    <th scope="col" className="hidden px-4 py-3 font-mono text-[11px] uppercase tracking-widest lg:table-cell sm:px-6">
                      Responde por
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ROLES.map((fila) => (
                    <tr
                      key={fila.rol}
                      className="border-b border-ink-15 bg-surface last:border-0 even:bg-paper"
                    >
                      <th scope="row" className="px-4 py-4 text-sm font-semibold text-ink sm:px-6">
                        {fila.rol}
                      </th>
                      <td className="px-4 py-4 text-sm leading-relaxed text-ink-60 sm:px-6">
                        {fila.decide}
                        <span className="mt-2 block text-xs leading-relaxed text-ink-60 lg:hidden">
                          <span className="swiss-label mr-1">Responde por</span>
                          {fila.responde}
                        </span>
                      </td>
                      <td className="hidden px-4 py-4 text-sm leading-relaxed text-ink-60 lg:table-cell sm:px-6">
                        {fila.responde}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <p className="border-l-2 border-ink pl-5 text-base leading-relaxed text-ink">
                <strong className="font-extrabold">Ningún recurso sin dueño.</strong> Si nadie
                responde por una fila, esa fila no debería existir.
              </p>
              <p className="border-l-2 border-ink-15 pl-5 text-base leading-relaxed text-ink-60">
                El dueño no es el proveedor: es la persona o el equipo que decide si el recurso
                sigue teniendo sentido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
