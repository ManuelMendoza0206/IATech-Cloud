import { Reveal } from '../../components/ui/Reveal';
import { INVENTARIO_URL, MUESTRA } from './data/inventario';
import {
  Definicion,
  Lexico,
  Anatomia,
  CicloVida,
  Gobierno,
  Higiene,
  Decisiones,
  Acceso,
} from './sections';

export default function Inventario() {
  return (
    <div>
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid py-16 sm:py-24">
            <div className="col-span-full lg:col-span-7">
              <Reveal asHero>
                <h1 className="swiss-display hero-item text-ink">
                  Inventario<span className="text-accent">.</span>
                </h1>

                <p className="hero-item mt-8 max-w-xl border-l-2 border-accent pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  Un registro ordenado de los recursos que sostienen la operación: qué existe,
                  dónde vive, quién responde por ello y cuánto cuesta mantenerlo.
                </p>

                <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href={INVENTARIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="swiss-btn swiss-btn-primary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                  >
                    Abrir inventario
                    <i className="bx bx-link-external text-base" aria-hidden="true" />
                  </a>
                  <a
                    href="#definicion"
                    className="swiss-btn swiss-btn-secondary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
                  >
                    Leer la teoría
                    <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 lg:col-span-5 lg:mt-0 lg:self-end">
              <Reveal asHero>
                <div className="hero-item border border-ink bg-surface">
                  <div className="flex items-baseline justify-between gap-4 border-b border-ink px-4 py-3">
                    <span className="swiss-label">Registro · muestra</span>
                    <span className="swiss-label">{MUESTRA.length} filas</span>
                  </div>

                  <table className="w-full border-collapse text-left">
                    <caption className="sr-only">
                      Muestra ilustrativa de cuatro recursos del inventario cloud
                    </caption>
                    <thead>
                      <tr className="border-b border-ink-15">
                        <th scope="col" className="swiss-label px-4 py-2.5 font-bold">
                          Recurso
                        </th>
                        <th scope="col" className="swiss-label hidden px-4 py-2.5 font-bold sm:table-cell">
                          Proveedor
                        </th>
                        <th scope="col" className="swiss-label px-4 py-2.5 font-bold">
                          Criticidad
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {MUESTRA.map((recurso) => (
                        <tr key={recurso.id} className="border-b border-ink-15 last:border-b-0">
                          <td className="px-4 py-3 align-top">
                            <span className="block font-mono text-[11px] font-semibold leading-tight tracking-tight text-ink tabular-nums">
                              {recurso.id}
                            </span>
                            <span className="mt-1 block text-xs leading-tight text-ink-40">
                              {recurso.tipo}
                            </span>
                          </td>
                          <td className="hidden px-4 py-3 align-top text-xs text-ink-60 sm:table-cell">
                            {recurso.proveedor}
                          </td>
                          <td className="px-4 py-3 align-top">
                            <span className="flex items-center gap-2 text-xs font-semibold leading-tight text-ink">
                              <span
                                className={`h-1.5 w-1.5 shrink-0 ${
                                  recurso.criticidad === 'Crítica' ? 'bg-accent' : 'bg-ink'
                                }`}
                                aria-hidden="true"
                              />
                              {recurso.criticidad}
                            </span>
                            <span className="mt-1 block text-[11px] leading-tight text-ink-40">
                              {recurso.ambiente}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <p className="border-t border-ink-15 px-4 py-3 text-[11px] leading-relaxed text-ink-40">
                    Ejemplo ilustrativo. El registro real se consulta en la aplicación del área.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Definicion />
      <Lexico />
      <Anatomia />
      <CicloVida />
      <Gobierno />
      <Higiene />
      <Decisiones />
      <Acceso />
    </div>
  );
}
