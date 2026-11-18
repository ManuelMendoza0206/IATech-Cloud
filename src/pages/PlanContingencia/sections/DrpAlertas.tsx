import { SectionHeader } from '../../../components/content';
import { ALERTAS, EQUIPO_ERD, NIVELES_DRP } from '../data/plan';

export default function DrpAlertas() {
  return (
    <section className="border-t border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="03"
          title="DRP, sistema de alertas y Equipo ERD"
          description="Objetivos de recuperación (RTO y RPO), clasificación de severidad y asignación de titulares con suplencia cruzada."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="font-display text-xl font-extrabold text-ink">
              Tiempos objetivo por criticidad (DRP)
            </h3>
            <div className="mt-5 overflow-x-auto border border-ink-15 bg-surface">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-ink bg-ink text-paper">
                    <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider">Nivel</th>
                    <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider">Sistemas</th>
                    <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider">RTO</th>
                    <th className="px-4 py-3 font-mono text-xs uppercase tracking-wider">RPO</th>
                  </tr>
                </thead>
                <tbody>
                  {NIVELES_DRP.map((fila) => (
                    <tr key={fila.nivel} className="border-b border-ink-15 last:border-b-0">
                      <td className="px-4 py-3.5 font-display font-bold text-ink">{fila.nivel}</td>
                      <td className="px-4 py-3.5 text-ink-60">{fila.sistemas}</td>
                      <td className="px-4 py-3.5 font-mono text-xs font-semibold text-accent">
                        {fila.rto}
                      </td>
                      <td className="px-4 py-3.5 font-mono text-xs text-ink">{fila.rpo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="font-display text-xl font-extrabold text-ink">
              Niveles de alerta temprana
            </h3>
            <ul className="mt-5 space-y-3">
              {ALERTAS.map((alerta) => (
                <li key={alerta.codigo} className="swiss-cell p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-base font-extrabold text-ink">
                      {alerta.codigo} · {alerta.titulo}
                    </span>
                    <span className="swiss-chip px-2.5 py-0.5 font-mono text-xs font-semibold text-accent">
                      {alerta.respuesta}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-60">{alerta.criterio}</p>
                  <p className="mt-2 font-mono text-xs text-ink-40">
                    Escalamiento: {alerta.escalamiento}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-ink-15 pt-12">
          <p className="swiss-label text-accent">Equipo de Recuperación de Desastres</p>
          <h3 className="mt-3 font-display text-2xl font-extrabold text-ink">
            Responsables titulares y suplencia cruzada
          </h3>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EQUIPO_ERD.map((persona) => (
              <li key={persona.titular} className="swiss-cell flex flex-col justify-between p-6">
                <div>
                  <span className="swiss-label text-accent">{persona.cargo}</span>
                  <h4 className="mt-2 font-display text-lg font-extrabold text-ink">
                    {persona.titular}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-ink-40">{persona.dominio}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-60">{persona.accion}</p>
                </div>
                <p className="mt-5 border-t border-ink-15 pt-3 font-mono text-xs text-ink-40">
                  Suplente: {persona.suplente}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
