import { INVENTARIO_URL } from '../data/inventario';

const DATOS = [
  { etiqueta: 'Proveedores', valor: 'AWS · Azure · GCP' },
  { etiqueta: 'Atributos por recurso', valor: '8' },
  { etiqueta: 'Niveles de criticidad', valor: '4' },
];

export default function Acceso() {
  return (
    <section id="acceso" className="scroll-mt-20 bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="swiss-grid gap-y-10">
          <div className="col-span-full lg:col-span-3">
            <p className="swiss-label-invert border-l border-paper/40 pl-4">Acceso</p>
          </div>

          <div className="col-span-full lg:col-span-9">
            <h2 className="swiss-display-sm max-w-[22ch] text-paper">El registro vivo</h2>

            <p className="mt-6 max-w-2xl border-l-2 border-accent pl-5 text-base leading-relaxed text-paper/70 sm:text-lg">
              Esta página explica el criterio. El inventario completo, con sus recursos y
              atributos, vive en la aplicación del área: consulta, compara y vuelve con la pregunta
              que necesites responder.
            </p>

            <a
              href={INVENTARIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 border border-paper bg-paper px-7 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-ink transition-colors duration-150 hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Abrir inventario
              <i className="bx bx-link-external text-base" aria-hidden="true" />
            </a>
            <p className="swiss-label-invert mt-4">Se abre en una pestaña nueva</p>

            <dl className="mt-12 grid gap-6 border-t border-paper/20 pt-6 sm:grid-cols-3">
              {DATOS.map((dato) => (
                <div key={dato.etiqueta}>
                  <dt className="swiss-label-invert">{dato.etiqueta}</dt>
                  <dd className="mt-2 font-display text-lg font-extrabold leading-tight text-paper">
                    {dato.valor}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-12 max-w-2xl text-base leading-relaxed text-paper/60">
              Un inventario confiable no es el que está completo: es el que se corrige a tiempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
