import { SectionHeader } from '../../../components/content';

const ORIGENES = [
  {
    icon: 'bx-book-open',
    title: 'Origen: BPMI y OMG (2004)',
    text: 'La Business Process Management Initiative publica la primera notación. En 2005 la adopta el Object Management Group y en 2011 llega BPMN 2.0, la versión que se usa hoy.',
  },
  {
    icon: 'bx-group',
    title: 'Un idioma para negocio y técnica',
    text: 'Un mismo diagrama para el área de negocio y el equipo técnico: el primero lee el proceso, el segundo lee la especificación ejecutable.',
  },
  {
    icon: 'bx-cog',
    title: 'Del dibujo a la ejecución',
    text: 'BPMN 2.0 no es solo dibujo: los diagramas se exportan en XML y los motores como Camunda o Bizagi los ejecutan directamente.',
  },
  {
    icon: 'bx-git-compare',
    title: 'IDEF0 dice qué, BPMN dice cómo',
    text: 'IDEF0 modela la función sin fijar el proceso. BPMN modela el proceso completo: orden, responsables y decisiones. Se complementan, no compiten.',
  },
];

const DIFERENCIAS = [
  {
    aspecto: 'Pregunta central',
    idef0: '¿Qué hace el sistema?',
    bpmn: '¿Cómo fluye el trabajo y quién lo hace?',
  },
  {
    aspecto: 'Unidad básica',
    idef0: 'La función (una caja)',
    bpmn: 'La tarea dentro de un flujo ordenado',
  },
  {
    aspecto: 'Responsables',
    idef0: 'Los mecanismos aparecen abajo',
    bpmn: 'Cada tarea vive en la lane de su responsable',
  },
  {
    aspecto: 'Decisiones',
    idef0: 'No se modelan: son controles',
    bpmn: 'Gateways con salidas etiquetadas',
  },
  {
    aspecto: 'Rework',
    idef0: 'No se dibuja el ciclo',
    bpmn: 'Flujos de retorno explícitos en rojo',
  },
];

const REGLAS = [
  {
    title: 'Un inicio, fines explícitos',
    text: 'Todo proceso arranca en un evento de inicio. Cancelar un pedido no equivale a entregar un servicio, y el diagrama los separa con eventos de fin distintos.',
  },
  {
    title: 'Cada tarea tiene responsable',
    text: 'Ninguna actividad flota fuera de una lane. Si no sabés quién la hace, el proceso todavía no está modelado.',
  },
  {
    title: 'Toda salida de gateway se etiqueta',
    text: 'Sí, No, OK, Falla: sin etiquetas el rombo no decide nada. En este diagrama hay 6 etiquetas y cada una es una condición medible.',
  },
  {
    title: 'Nombrar tareas con verbo + objeto',
    text: '"Evaluar estrategia", "Desplegar en K8s": acción concreta sobre algo concreto. Los sustantivos solos pertenecen a IDEF0, no a BPMN.',
  },
  {
    title: 'El rework es parte del modelo',
    text: 'Ajustar, reintentar y hacer rollback son caminos de primera clase, no excepciones. Se dibujan, se nombran y se miden.',
  },
  {
    title: 'Leer de izquierda a derecha, por lanes',
    text: 'El tiempo avanza horizontalmente; la responsabilidad se lee verticalmente. Seguir una lane cuenta la historia de un rol.',
  },
];

export function Definicion() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="01"
          title="Qué es BPMN"
          description="BPMN (Business Process Model and Notation) es el estándar para dibujar procesos de negocio: el orden de las tareas, quién las ejecuta y qué decisiones dividen el camino. Si IDEF0 fija la función, BPMN fija el proceso que la cumple."
        />

        <div className="mt-6 max-w-4xl space-y-4 text-navy-700/80">
          <p>
            La sigla significa <strong className="text-navy-900">Business Process Model and
            Notation</strong>: modelo y notación en una sola especificación. Un diagrama BPMN no
            muestra clases ni servicios: muestra <em>un flujo en el tiempo</em>.
          </p>
          <p>
            Todo diagrama BPMN se construye con cinco familias de elementos (eventos,
            actividades, gateways, flujos y lanes) dentro de un pool que marca la frontera del
            proceso. La posición y la forma de cada símbolo son semánticas, no decoración.
          </p>
        </div>

        {/* Orígenes */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {ORIGENES.map((o) => (
            <li
              key={o.title}
              className="group rounded-2xl border border-navy-700/10 bg-mist/40 p-6 transition hover:border-signal/40 hover:bg-mist"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950 text-xl text-signal transition group-hover:bg-signal group-hover:text-navy-950">
                <i className={`bx ${o.icon}`} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{o.text}</p>
            </li>
          ))}
        </ul>

        {/* BPMN vs IDEF0 */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
            BPMN frente a IDEF0
          </h3>
          <p className="mt-3 max-w-3xl text-navy-700/80">
            Las dos páginas modelan el mismo proyecto CLOUD desde ángulos distintos. Esta tabla
            deja por escrito qué pregunta responde cada uno.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-navy-900/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Diferencias entre BPMN e IDEF0</caption>
              <thead>
                <tr className="bg-navy-950 text-mist">
                  <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                    Aspecto
                  </th>
                  <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                    IDEF0
                  </th>
                  <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                    BPMN
                  </th>
                </tr>
              </thead>
              <tbody>
                {DIFERENCIAS.map((row) => (
                  <tr key={row.aspecto} className="border-b border-navy-900/10 bg-white last:border-0 even:bg-mist/30">
                    <td className="px-4 py-4 font-mono text-xs uppercase tracking-wider text-navy-700/70 sm:px-6">
                      {row.aspecto}
                    </td>
                    <td className="px-4 py-4 text-sm text-navy-700/80 sm:px-6">{row.idef0}</td>
                    <td className="px-4 py-4 text-sm font-medium text-navy-900 sm:px-6">{row.bpmn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Comparativa visual */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-navy-900/10 px-5 py-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-navy-700/60">
                Referencia · Comparativa visual BPMN
              </p>
              <a
                href="https://www.cybermedian.com/wp-content/uploads/2026/09/img_6ab101368c355-1024x819.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-navy-700/60 transition hover:text-signal"
              >
                Ver en tamaño completo
                <i className="bx bx-external-link text-sm" aria-hidden="true" />
              </a>
            </div>
            <img
              src="https://www.cybermedian.com/wp-content/uploads/2026/09/img_6ab101368c355-1024x819.png"
              alt="Comparativa visual de notación BPMN frente a diagramas de flujo clásicos"
              loading="lazy"
              decoding="async"
              className="w-full"
            />
          </div>
        </div>

        {/* Reglas */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
            Reglas de buena práctica
          </h3>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REGLAS.map((r) => (
              <li
                key={r.title}
                className="relative rounded-2xl border border-navy-900/10 bg-mist/40 p-6 transition hover:border-signal/40"
              >
                <span className="absolute left-0 top-6 h-8 w-1 rounded-r bg-signal" aria-hidden="true" />
                <h4 className="font-display text-base font-semibold text-navy-900">{r.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
