import { SectionHeader } from '../../../components/content';

const TIPOS = [
  {
    familia: 'Eventos',
    color: '#059669',
    variantes: [
      { nombre: 'Inicio', desc: 'Círculo de trazo fino. Dispara el proceso una sola vez.' },
      { nombre: 'Intermedio', desc: 'Círculo de doble trazo. Mensajes, temporizadores o pausas en el camino.' },
      { nombre: 'Fin', desc: 'Círculo de trazo grueso. Cierra el proceso; puede haber varios.' },
    ],
  },
  {
    familia: 'Actividades',
    color: '#2563eb',
    variantes: [
      { nombre: 'Task', desc: 'Unidad de trabajo simple. Las 6 tareas del diagrama son tasks.' },
      { nombre: 'Sub-process', desc: 'Contiene un flujo completo adentro. Se marca con un icono +.' },
      { nombre: 'User / Service task', desc: 'Hecha por una persona o por un sistema. El pipeline CI/CD es service task.' },
    ],
  },
  {
    familia: 'Gateways',
    color: '#d97706',
    variantes: [
      { nombre: 'Exclusivo (XOR)', desc: 'Solo una salida. Los 4 rombos de este diagrama son XOR.' },
      { nombre: 'Paralelo (AND)', desc: 'Todas las salidas a la vez. DevOps e Infraestructura en paralelo.' },
      { nombre: 'Inclusivo (OR)', desc: 'Una o varias salidas. Útil para despliegues multientorno.' },
    ],
  },
  {
    familia: 'Pools y lanes',
    color: '#0ea5e9',
    variantes: [
      { nombre: 'Pool', desc: 'Frontera del proceso. Aquí: Área Cloud IATECH.' },
      { nombre: 'Lane', desc: 'Un rol dentro del pool. Aquí hay 5 lanes.' },
      { nombre: 'Black-box pool', desc: 'Un participante externo sin detalle interno. La clínica podría modelarse así.' },
    ],
  },
];

export function Tipos() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          showNumber={false}
          number="03"
          title="Variantes de cada elemento"
          description="Cada familia tiene variantes con significado propio. Esta es la parte de la teoría que se usa para leer el diagrama de la empresa."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TIPOS.map((t) => (
            <div
              key={t.familia}
              className="overflow-hidden rounded-2xl border border-navy-900/10 bg-mist/40"
            >
              <div className="px-6 pt-6 sm:px-7">
                <span
                  className="inline-block rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-white"
                  style={{ backgroundColor: t.color }}
                >
                  {t.familia}
                </span>
              </div>
              <ul className="space-y-3 px-6 py-6 sm:px-7">
                {t.variantes.map((v) => (
                  <li
                    key={v.nombre}
                    className="flex items-start gap-4 rounded-xl border border-navy-900/10 bg-white p-4 sm:p-5"
                  >
                    <span
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold text-white"
                      style={{ backgroundColor: t.color }}
                      aria-hidden="true"
                    >
                      {v.nombre[0]}
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold text-navy-900">{v.nombre}</p>
                      <p className="mt-1 text-sm leading-relaxed text-navy-700/70">{v.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-navy-700/60">
          <span className="font-semibold text-navy-900">Dato:</span> la especificación BPMN 2.0
          define más de 100 símbolos, pero el 80% de los diagramas reales (incluido el de esta
          página) usa solo estas doce variantes.
        </p>
      </div>
    </section>
  );
}
