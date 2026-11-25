import { RailHeader } from '../../../components/content';

const CONTROLES = [
  {
    senal: 'Recurso huérfano',
    detalle: 'Aparece en la factura y no tiene dueño ni proyecto.',
    correccion: 'Asignar responsable o retirarlo.',
  },
  {
    senal: 'Etiqueta faltante',
    detalle: 'No tiene ambiente ni centro de costo.',
    correccion: 'Bloquear el despliegue sin etiquetas obligatorias.',
  },
  {
    senal: 'Registro duplicado',
    detalle: 'Dos filas describen el mismo recurso.',
    correccion: 'Usar el identificador del proveedor como clave única.',
  },
  {
    senal: 'Deriva de estado',
    detalle: 'El registro dice detenido y el proveedor lo muestra encendido.',
    correccion: 'Conciliar antes del cierre del mes.',
  },
  {
    senal: 'Crítico sin respaldo',
    detalle: 'Criticidad alta sin respaldo verificado.',
    correccion: 'Marcar y programar la prueba.',
  },
  {
    senal: 'Costo sin centro',
    detalle: 'El gasto no se puede asignar a un equipo.',
    correccion: 'Corregir etiquetas y revisar la línea base.',
  },
];

export default function Higiene() {
  return (
    <section
      id="calidad"
      className="scroll-mt-20 border-b border-ink bg-surface py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Calidad"
          title="Señales de un inventario que dejó de ser confiable"
          aside={
            <p>
              Un inventario se degrada en silencio. Estas señales se buscan en la conciliación
              mensual, antes de que el costo o el riesgo las encuentren por su cuenta.
            </p>
          }
        />

        <div className="mt-12 swiss-grid gap-y-10">
          <div className="col-span-full lg:col-span-3">
            <p className="swiss-rail swiss-label">Revisión mensual</p>
          </div>

          <ul className="col-span-full border-t border-ink lg:col-span-9">
            {CONTROLES.map((control) => (
              <li
                key={control.senal}
                className="grid gap-x-6 gap-y-3 border-b border-ink-15 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-base font-extrabold leading-tight tracking-[-0.01em] text-ink">
                      {control.senal}
                    </h3>
                    <p className="mt-1 max-w-[52ch] text-sm leading-relaxed text-ink-60">
                      {control.detalle}
                    </p>
                  </div>
                </div>

                <div className="border-t border-ink-15 pt-3 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                  <p className="swiss-label">Corrección</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-60">{control.correccion}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 max-w-3xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink sm:text-lg">
          Una revisión mensual alcanza si la conciliación es real; si no, solo agrega una fecha al
          problema.
        </p>
      </div>
    </section>
  );
}
