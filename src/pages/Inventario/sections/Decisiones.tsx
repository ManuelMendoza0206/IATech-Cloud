import { Link } from 'react-router-dom';
import { RailHeader } from '../../../components/content';

const ENLACES = [
  {
    to: '/tableau',
    icon: 'bx-bar-chart-alt-2',
    title: 'Tableau',
    etiqueta: 'Costo visible',
    texto:
      'El registro se convierte en tablero: gasto por tipo de recurso, proveedor, ambiente y criticidad.',
  },
  {
    to: '/weka',
    icon: 'bx-analyse',
    title: 'Weka',
    etiqueta: 'Patrones y límites',
    texto:
      'Clasificación, agrupamiento y reglas sobre los recursos del área, con sus métricas y sus límites.',
  },
  {
    to: '/presupuesto',
    icon: 'bx-wallet',
    title: 'Presupuesto',
    etiqueta: 'Planificación',
    texto: 'El inventario da la línea base para estimar y seguir los recursos del periodo.',
  },
  {
    to: '/plan-de-contingencia',
    icon: 'bx-first-aid',
    title: 'Plan de Contingencia',
    etiqueta: 'Riesgo y continuidad',
    texto:
      'Dependencias, brechas y recursos críticos alimentan el plan de recuperación y sus pruebas.',
  },
];

export default function Decisiones() {
  return (
    <section
      id="decisiones"
      className="scroll-mt-20 border-b border-ink bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Uso"
          title="Del registro a la decisión"
          aside={
            <p>
              El inventario no decide por sí solo. Alimenta las preguntas que el área ya se hace:
              cuánto cuesta, qué se puede optimizar, qué está en riesgo y qué se prioriza.
            </p>
          }
        />

        <div className="mt-12 swiss-grid gap-y-10">
          <div className="col-span-full lg:col-span-3">
            <p className="swiss-rail swiss-label">Cuatro lecturas</p>
          </div>

          <ul className="col-span-full border-t border-ink lg:col-span-9">
            {ENLACES.map((enlace) => (
              <li key={enlace.to} className="border-b border-ink-15">
                <Link
                  to={enlace.to}
                  className="group grid gap-x-6 gap-y-3 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper sm:grid-cols-[2.5rem_minmax(0,1fr)_auto] sm:items-start"
                >
                  <span className="flex h-9 w-9 items-center justify-center border border-ink text-lg text-accent transition-colors duration-150 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <i className={`bx ${enlace.icon}`} aria-hidden="true" />
                  </span>

                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-xl font-extrabold leading-tight tracking-[-0.02em] text-ink transition-colors duration-150 group-hover:text-accent">
                        {enlace.title}
                      </h3>
                      <span className="swiss-label">{enlace.etiqueta}</span>
                    </div>
                    <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-ink-60">
                      {enlace.texto}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-60 transition-colors duration-150 group-hover:text-accent">
                    Ver página
                    <i
                      className="bx bx-right-arrow-alt text-base transition-transform duration-150 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
