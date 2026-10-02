import { SectionHeader } from '../../../components/content';

const ORIGENES = [
  {
    icon: 'bx-history',
    title: 'Origen: FMEA (1976)',
    text: 'Nace del Análisis de Modos y Efectos de Falla, desarrollado por la NASA y el Departamento de Defensa de EE. UU., para documentar la función principal de un sistema y detectar dónde falla.',
  },
  {
    icon: 'bx-hash',
    title: 'ICOM y el estándar',
    text: 'En 1993 el consorcio ICOM publicó la especificación formal. El NIST la estandarizó como FIPS 183 y hoy es el estándar de facto para modelado de funciones.',
  },
  {
    icon: 'bx-sitemap',
    title: 'Árbol de nodos',
    text: 'Un diagrama A-0 muestra la función global. Se descompone en A1, A2, A3… hasta llegar a un nivel de detalle manejable. Cada hijo hereda el contexto del padre.',
  },
  {
    icon: 'bx-hash',
    title: 'Numeración Bs',
    text: 'La caja lleva un identificador de actividad: Bs0 en la esquina inferior izquierda y 0 en la inferior derecha. Los hijos pasan a Bs1, Bs2, Bs3 según su número dentro del padre.',
  },
];

const ICOM = [
  { code: 'II', label: 'Input → Input', text: 'Una entrada se apoya en otra entrada.' },
  { code: 'IO', label: 'Input → Output', text: 'Una entrada es necesaria para producir una salida.' },
  { code: 'IC', label: 'Input → Control', text: 'Una entrada autoriza o condiciona un control.' },
  { code: 'MI', label: 'Mechanism → Input', text: 'Un mecanismo habilita o restringe una entrada.' },
  { code: 'MO', label: 'Mechanism → Output', text: 'El recurso se consume al producir la salida.' },
  { code: 'MC', label: 'Mechanism → Control', text: 'Un recurso se usa para regular un control.' },
  { code: 'OI', label: 'Output → Input', text: 'Una salida es reutilizada como entrada en otra función.' },
  { code: 'OO', label: 'Output → Output', text: 'Una salida refina o condiciona otra.' },
  { code: 'OC', label: 'Output → Control', text: 'Una salida llega a ser requisito de un control.' },
];

const REGLAS = [
  {
    title: 'Toda flecha se nombra con una frase nominal',
    text: 'Nada de verbos ni oraciones. "Compilación", "Presupuesto", "Instancia EC2" son válidos; "se compila el código" no lo es.',
  },
  {
    title: 'Un nombre, una idea',
    text: 'Si la flecha necesita dos adjetivos para explicarse, probablemente sean dos flechas. La granularidad excesiva es el error más común.',
  },
  {
    title: 'Flecha doble = dependencia interna',
    text: 'Cuando una salida se necesita como entrada de otra función del mismo diagrama, se dibuja una flecha doble, no una flecha larga que cruce todo el lienzo.',
  },
  {
    title: 'Túneles para elementos lejanos',
    text: 'Cuando dos flechas van al mismo destino pero llegan desde áreas distintas, se agrupan en un túnel rotulado. Reduce el cruce de líneas y mantiene el diagrama legible.',
  },
  {
    title: 'Las notas van aparte',
    text: 'Un recuadro de texto pegado al diagrama es un "aside": aporta contexto sin ensuciar las flechas. Se usa para casos excepcionales o aclaraciones.',
  },
  {
    title: 'El diagrama se lee de izquierda a derecha',
    text: 'Entradas, caja, salida. Los controles caer desde arriba y los mecanismos emergen desde abajo, siempre. La posición no es decorativa: es semántica.',
  },
];

export function Definicion() {
  return (
    <section className="bg-ice-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="01"
          title="Qué es IDEF0"
          description="IDEF0 es el lenguaje estándar de modelado de funciones: una forma de dibujar qué hace un sistema sin fijar todavía cómo lo hace. Antes de elegir una tecnología, IDEF0 obliga a acordar qué tiene que ocurrir."
        />

        <div className="mt-6 max-w-4xl space-y-4 text-ink-700/80">
          <p>
            La sigla viene de <strong className="text-ink">IDEF</strong> (ICOm DEFinition) más
            el <strong className="text-ink">0</strong> que identifica la versión del método. Un
            diagrama IDEF0 no muestra clases, ni servicios, ni bases de datos: modela
            <em> funciones</em>. Es una herramienta de análisis, no de diseño, y por eso funciona
            bien como punto de partida cuando distintas áreas hablan idiomas técnicos distintos.
          </p>
          <p>
            Todo diagrama IDEF0 se construye con una única caja central —la función— y hasta cuatro
            grupos de flechas. Las flechas no son adorno: cada una tiene un significado exacto y
            una posición obligatoria.
          </p>
        </div>

        {/* Orígenes */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {ORIGENES.map((o) => (
            <li
              key={o.title}
              className="panel group rounded-2xl p-6 transition"
            >
              <span className="panel flex h-11 w-11 items-center justify-center rounded-xl text-xl text-signal transition group-hover:text-ink">
                <i className={`bx ${o.icon}`} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700/80">{o.text}</p>
            </li>
          ))}
        </ul>

        {/* Las 4 flechas */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Las cuatro flechas y su significado
          </h3>
          <p className="mt-3 max-w-3xl text-ink-700/80">
            Cada grupo responde a una pregunta distinta sobre la función. Confundirlas es el
            error más común al modelar procesos.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-ink-950/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Tipos de flecha en un diagrama IDEF0</caption>
              <thead>
                <tr className="bg-ice-50 text-ink">
                  <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                    Posición
                  </th>
                  <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                    Flecha
                  </th>
                  <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                    Pregunta que responde
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pos: 'Izquierda', arrow: '→', name: 'Entradas / Inputs', q: '¿Qué se consume?' },
                  { pos: 'Arriba', arrow: '↓', name: 'Controles / Controls', q: '¿Bajo qué reglas?' },
                  { pos: 'Abajo', arrow: '↑', name: 'Mecanismos / Mechanisms', q: '¿Con qué se hace?' },
                  { pos: 'Derecha', arrow: '→', name: 'Salidas / Outputs', q: '¿Qué se produce?' },
                ].map((row) => (
                  <tr key={row.name} className="border-b border-ink-950/10 bg-ice-50 last:border-0 even:bg-ice-50/30">
                    <td className="px-4 py-4 font-mono text-xs uppercase tracking-wider text-ink-700/70 sm:px-6">
                      {row.pos}
                    </td>
                    <td className="px-4 py-4 sm:px-6">
                      <span className="font-display text-lg text-signal" aria-hidden="true">
                        {row.arrow}
                      </span>
                      <span className="ml-2 text-sm font-semibold text-ink">{row.name}</span>
                    </td>
                    <td className="px-4 py-4 text-sm text-ink-700/80 sm:px-6">{row.q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ICOM */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Códigos ICOM
          </h3>
          <p className="mt-3 max-w-3xl text-ink-700/80">
            Cuando una flecha de una categoría se apoya en otra, la relación se nombra con un
            código ICOM de dos letras. Sirve para dejar por escrito de dónde sale cada
            dependencia, sobre todo cuando el diagrama lo revisa alguien que no estuvo en la
            definición.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ICOM.map((c) => (
              <li key={c.code} className="panel rounded-xl p-4">
                <span className="panel inline-block rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold text-signal">
                  {c.code}
                </span>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-ink-700/70">
                  {c.label}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-700/80">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Reglas */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Reglas de buena práctica
          </h3>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REGLAS.map((r) => (
              <li
                key={r.title}
                className="panel relative rounded-2xl p-6 transition"
              >
                <span className="absolute left-0 top-6 h-8 w-1 rounded-r bg-signal" aria-hidden="true" />
                <h4 className="font-display text-base font-semibold text-ink">{r.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/80">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel mt-14 rounded-2xl p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-signal">En resumen</p>
          <p className="mt-3 text-ink-700/80">
            IDEF0 no dice <em>cómo</em> construir el sistema: dice <strong className="text-ink">qué</strong> debe
            ocurrir, <strong className="text-ink">con qué insumos</strong>, bajo <strong className="text-ink">qué reglas</strong> y
            produciendo <strong className="text-ink">qué resultados</strong>. Cuando el equipo de Cloud puede
            responder esas cuatro preguntas con precisión, el resto —la arquitectura, el proveedor,
            el pipeline— se vuelve una decisión, no una adivinanza.
          </p>
        </div>
      </div>
    </section>
  );
}
