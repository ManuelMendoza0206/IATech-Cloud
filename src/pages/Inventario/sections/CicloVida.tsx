import { RailHeader } from '../../../components/content';

const CICLO = [
  {
    titulo: 'Alta',
    texto:
      'Todo recurso nace de un despliegue o de una solicitud aprobada. En el alta se registran dueño, ambiente, criticidad y línea de costo; lo que nace sin ficha nace huérfano.',
    registra: 'Identificador, tipo, proveedor, dueño.',
  },
  {
    titulo: 'Clasificación',
    texto:
      'Las etiquetas y los atributos convierten el recurso en un dato consultable. Sin ambiente ni centro de costo, el gasto no se puede atribuir y la criticidad no se puede priorizar.',
    registra: 'Ambiente, criticidad, centro de costo.',
  },
  {
    titulo: 'Operación',
    texto:
      'El recurso se monitorea, se respalda y se actualiza. El inventario registra los cambios de estado y la última revisión; no reemplaza al monitoreo, le da contexto.',
    registra: 'Estado, última revisión, respaldo.',
  },
  {
    titulo: 'Conciliación',
    texto:
      'Cada mes se contrasta el registro con la API del proveedor y la facturación. Aparecen huérfanos, duplicados y diferencias de estado. Es el paso que sostiene la confianza en el resto.',
    registra: 'Diferencias, correcciones, fecha de corte.',
  },
  {
    titulo: 'Baja',
    texto:
      'Se apaga, se revocan accesos, se eliminan los datos según la retención y se conserva la fila como historial. Dar de baja no es borrar la evidencia.',
    registra: 'Fecha de baja, motivo, retención.',
  },
];

export default function CicloVida() {
  return (
    <section id="ciclo" className="scroll-mt-20 border-b border-ink bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Ciclo"
          title="Cómo entra, vive y sale un recurso"
          aside={
            <p>
              Un inventario se degrada por lo que no registra. El ciclo de vida ordena las cinco
              instancias en las que una fila cambia y define qué debe quedar escrito en cada una.
            </p>
          }
        />

        <div className="mt-12 swiss-grid gap-y-10">
          <div className="col-span-full lg:col-span-3">
            <p className="swiss-rail swiss-label">Cinco etapas</p>
          </div>

          <ol className="col-span-full border-t border-ink lg:col-span-9">
            {CICLO.map((etapa, index) => (
              <li
                key={etapa.titulo}
                className="grid gap-x-6 gap-y-4 border-b border-ink-15 py-6 sm:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,0.7fr)] sm:py-7"
              >
                <span className="font-display text-2xl font-black leading-none tracking-[-0.04em] text-accent tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div>
                  <h3 className="font-display text-xl font-extrabold leading-tight tracking-[-0.02em] text-ink">
                    {etapa.titulo}
                  </h3>
                  <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-ink-60 sm:text-base">
                    {etapa.texto}
                  </p>
                </div>

                <div className="border-t border-ink-15 pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                  <p className="swiss-label">Registra</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-60">{etapa.registra}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-10 max-w-3xl border-l-2 border-accent pl-5 text-base leading-relaxed text-ink sm:text-lg">
          La conciliación es el latido del inventario: sin ella, las otras cuatro etapas son una
          promesa.
        </p>
      </div>
    </section>
  );
}
