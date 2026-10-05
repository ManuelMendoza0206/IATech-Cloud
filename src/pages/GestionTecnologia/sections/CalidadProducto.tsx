import { RailHeader, Sources, SourceList } from '../../../components/content';

/**
 * ISO/IEC 25010 — Modelos de calidad de sistemas y software (SQuaRE).
 *
 * La edición 2011 (ISO/IEC 25010:2011) define dos modelos:
 *  - calidad en uso: 5 características, sobre el resultado de la interacción
 *  - calidad del producto: 8 características, sobre propiedades estáticas
 * del software y dinámicas del sistema.
 *
 * En 2023 la familia se revisó (25010:2023, 25019:2023, 25002:2024), de modo
 * que la edición 2011 aparece como retirada aunque su vocabulario siga
 * siendo el de referencia en la industria.
 */

const PRODUCT_CHARACTERISTICS = [
  {
    name: 'Adecuación funcional',
    sub: ['Completitud funcional', 'Corrección funcional', 'Idoneidad funcional'],
    question: '¿El sistema hace lo que tiene que hacer?',
  },
  {
    name: 'Confiabilidad',
    sub: ['Madurez', 'Disponibilidad', 'Tolerancia a fallos', 'Recuperabilidad'],
    question: '¿Sigue funcionando cuando algo sale mal?',
  },
  {
    name: 'Eficiencia de rendimiento',
    sub: ['Comportamiento temporal', 'Utilización de recursos', 'Capacidad'],
    question: '¿Con qué recursos y en cuánto tiempo?',
  },
  {
    name: 'Usabilidad',
    sub: ['Reconocibilidad', 'Aprendibilidad', 'Operabilidad', 'Protección contra errores', 'Estética de la interfaz', 'Accesibilidad'],
    question: '¿Una persona nueva puede usarlo bien?',
  },
  {
    name: 'Seguridad',
    sub: ['Confidencialidad', 'Integridad', 'No repudio', 'Trazabilidad', 'Autenticidad'],
    question: '¿Protegemos la confidencialidad de la información?',
  },
  {
    name: 'Compatibilidad',
    sub: ['Coexistencia', 'Interoperabilidad'],
    question: '¿Se integra con lo que ya existe?',
  },
  {
    name: 'Mantenibilidad',
    sub: ['Modularidad', 'Reutilización', 'Analisabilidad', 'Modificabilidad', 'Testabilidad'],
    question: '¿Alguien puede cambiarlo sin romperlo?',
  },
  {
    name: 'Portabilidad',
    sub: ['Adaptabilidad', 'Instalabilidad', 'Reemplazabilidad'],
    question: '¿Sobrevive a un cambio de proveedor o de entorno?',
  },
];

const IN_USE = [
  { name: 'Efectividad', text: 'Completitud con la que los usuarios alcanzan sus objetivos.' },
  { name: 'Eficiencia', text: 'Recursos consumidos en relación con el efecto logrado.' },
  { name: 'Satisfacción', text: 'Placer percibido y utilidad del uso.' },
  { name: 'Libre de riesgo', text: 'Confianza de que el producto no tendrá efectos adversos.' },
  { name: 'Contexto de uso', text: 'El resultado depende de quién, dónde y con qué propósito lo usa.' },
];

const SOURCES = [
  {
    label: 'ISO/IEC 25010:2011 · resumen oficial y modelo de 8 características',
    href: 'https://committee.iso.org/standard/35733.html',
  },
  {
    label: 'ISO/IEC 25010:2011 · texto en la plataforma OBP (subcaracterísticas)',
    href: 'https://www.iso.org/obp/ui?_escaped_fragment_=iso%3Astd%3A35733%3Aen',
  },
  {
    label: 'ISO/IEC 25012 · modelo de calidad de datos (complementario)',
    href: 'https://www.iso.org/standard/35833.html',
  },
];

export function CalidadProducto() {
  return (
    <section id="calidad" className="border-b border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Calidad"
          title="Ocho características que no se compensan"
          aside={
            <>
              <p>
                Cuando la gerencia de un área afirma que el sistema es «de alta disponibilidad»,
                casi siempre está describiendo una sola de las ocho características del modelo de
                calidad de producto de ISO/IEC 25010. El modelo existe justamente para evitar esa
                simplificación.
              </p>
              <p className="mt-4">
                Las ocho son necesarias y ninguna compensa a otra. Un sistema con disponibilidad
                perfecta y sin mantenibilidad es un sistema que nadie puede arreglar a las tres de
                la mañana.
              </p>
            </>
          }
        />

        <ul className="mt-14 border-t border-ink">
          {PRODUCT_CHARACTERISTICS.map((characteristic, index) => (
            <li key={characteristic.name} className="border-b border-ink-15">
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-baseline gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-paper sm:gap-8 [&::-webkit-details-marker]:hidden">
                  <span className="w-10 shrink-0 text-[11px] font-bold tabular-nums tracking-[0.18em] text-ink-40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 font-display text-lg font-bold leading-tight tracking-[-0.02em] text-ink sm:text-xl">
                    {characteristic.name}
                  </span>
                  <span className="hidden max-w-[40ch] text-sm leading-relaxed text-ink-60 lg:block">
                    {characteristic.question}
                  </span>
                  <i
                    className="bx bx-plus shrink-0 text-xl leading-none text-ink transition-transform duration-200 group-open:rotate-45 group-open:text-accent"
                    aria-hidden="true"
                  />
                </summary>
                <div className="mt-4 sm:pl-14">
                  <p className="swiss-label mb-3 lg:hidden">La pregunta que responde</p>
                  <p className="text-base leading-relaxed text-ink lg:hidden">
                    {characteristic.question}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2 lg:mt-0">
                    {characteristic.sub.map((sub) => (
                      <li
                        key={sub}
                        className="border border-ink-15 px-3 py-1.5 text-xs font-medium tracking-[-0.01em] text-ink-60"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ul>

        <div className="mt-16 swiss-grid gap-y-8 border-t border-ink pt-12">
          <div className="col-span-full sm:col-span-3">
            <p className="swiss-rail swiss-label">Calidad en uso</p>
          </div>
          <div className="col-span-full sm:col-span-9">
            <p className="max-w-[62ch] text-base leading-relaxed text-ink-60">
              El segundo modelo del mismo estándar se ocupa de algo distinto: no la calidad del
              producto en sí, sino la de la interacción real. El mismo producto puede producir
              resultados muy distintos según quién lo usa y en qué contexto.
            </p>
            <ul className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
              {IN_USE.map((item) => (
                <li key={item.name} className="swiss-figure-muted">
                  <p className="font-display text-base font-bold leading-tight tracking-[-0.02em] text-ink">
                    {item.name}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-60">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Sources>
          <SourceList items={SOURCES} />
        </Sources>
      </div>
    </section>
  );
}

export default CalidadProducto;
