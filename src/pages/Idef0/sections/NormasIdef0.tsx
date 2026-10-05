import { RailHeader, Sources, SourceList } from '../../../components/content';

/**
 * IDEF0 dentro de la familia de métodos.
 *
 * FIPS PUB 183 (diciembre de 1993) es el documento NIST que adopta IDEF0
 * como estándar federal. Fue retirado como norma federal el 2 de septiembre
 * de 2008 (Federal Register, vol. 73, p. 51276) en favor de las Open
 * Specifications and Standards. La norma vigente hoy es ISO/IEC/IEEE
 * 31320-1:2012, revisada y confirmada en 2024.
 *
 * IDEF1X (ISO/IEC/IEEE 31320-2:2012) cubre el modelo de datos; FIPS PUB 184.
 * ISO/IEC 11179 (registros de metadatos) gobierna cómo se nombran y definen
 * los elementos de datos que aparecen en las flechas.
 */

interface Relative {
  code: string;
  name: string;
  full: string;
  scope: string;
}

const RELATIVES: Relative[] = [
  {
    code: 'IDEF0',
    name: 'Modelado de funciones',
    full: 'ISO/IEC/IEEE 31320-1:2012',
    scope:
      'Qué hace el sistema. Cajas con flechas ICOM, descomposición de tres a seis cajas por nivel.',
  },
  {
    code: 'IDEF1X',
    name: 'Modelado de información',
    full: 'ISO/IEC/IEEE 31320-2:2012',
    scope:
      'Qué información maneja el sistema. Esquemas conceptuales con claves primarias y foráneas explícitas.',
  },
  {
    code: 'IDEF3',
    name: 'Modelado de procesos',
    full: 'Serie IDEF3',
    scope:
      'Cómo se ejecuta el trabajo. Transiciones de estado, funciones y objetos de información.',
  },
  {
    code: 'Idef1',
    name: 'Modelado de flujo de datos',
    full: 'IDEF1 / FIPS PUB 183',
    scope:
      'Qué información fluye entre funciones. Precursor directo de IDEF1X, con foco en el flujo.',
  },
];

const HISTORY = [
  {
    year: '1981',
    event:
      'La Fuerza Aérea de EE. UU. publica el ICAM Function Modeling Manual, origen de IDEF0.',
  },
  {
    year: '1993',
    event:
      'NIST adopta IDEF0 como FIPS PUB 183, norma federal de modelado de funciones.',
  },
  {
    year: '1998',
    event:
      'IEEE publica IEEE Std 1320.1, que lleva la sintaxis y semántica al ámbito IEEE.',
  },
  {
    year: '2008',
    event:
      'FIPS PUB 183 se retira como norma federal (73 FR 51276) en favor de Open Specifications and Standards.',
  },
  {
    year: '2012',
    event:
      'Se publica ISO/IEC/IEEE 31320-1, que consolida la norma y sigue vigente.',
  },
  {
    year: '2024',
    event: 'ISO confirma la norma tras la revisión sistemática de cinco años.',
  },
];

const RULES = [
  {
    rule: 'Tres a seis cajas por nivel',
    text:
      'Un diagrama con menos de tres cajas no aporta información y uno con más de seis se vuelve ilegible. La regla existe para forzar el agrupamiento.',
  },
  {
    rule: 'Verbos en la etiqueta de la caja',
    text:
      'Cada caja nombra una función con un verbo. Si la etiqueta es un sustantivo, todavía no es una función.',
  },
  {
    rule: 'Las flechas no cruzan el lado de la caja',
    text:
      'Entrada entra por la izquierda, control por arriba, salida por la derecha, mecanismo por abajo. El rol de la flecha es el lado del recuadro al que se engancha.',
  },
  {
    rule: 'Todo flecha de frontera se numera',
    text:
      'Las flechas que cruzan el borde del diagrama reciben código: I1, C2, O3, M1. Así el diagrama hijo puede referenciarlas sin ambigüedad.',
  },
];

const SOURCES = [
  {
    label: 'FIPS PUB 183 · texto completo en NIST',
    href: 'https://nvlpubs.nist.gov/nistpubs/Legacy/FIPS/fipspub183.pdf',
  },
  {
    label: 'ISO/IEC/IEEE 31320-1:2012 · ficha oficial, confirmada en 2024',
    href: 'https://www.iso.org/standard/60615.html',
  },
  {
    label: 'IEEE SA · sintaxis y semántica de IDEF0',
    href: 'https://standards.ieee.org/ieee/31320-1/5545',
  },
  {
    label: 'ISO/IEC 31320-2:2012 · IDEF1X',
    href: 'https://www.iso.org/standard/60614.html',
  },
  {
    label: 'ISO/IEC 11179-3:2023 · registros de metadatos (MDR)',
    href: 'https://www.iso.org/standard/78915.html',
  },
];

export function NormasIdef0() {
  return (
    <section id="normas" className="border-b border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Norma"
          title="IDEF0 dentro de su familia"
          aside={
            <>
              <p>
                IDEF0 no es un diagrama aislado: es un método con reglas de descomposición, y su
                valor está en que esas reglas son públicas y están escritas. La norma vigente es{' '}
                <code className="font-mono text-[0.95em] text-ink">ISO/IEC/IEEE 31320-1:2012</code>,
                confirmada por ISO en 2024.
              </p>
              <p className="mt-4">
                Su historia tiene un detalle que conviene conocer: fue norma federal de los Estados
                Unidos (FIPS PUB 183, 1993) y se retiró como tal en 2008. No se abolió el método;
                cambió el vehículo que lo publica.
              </p>
            </>
          }
        />

        {/* Familia de métodos */}
        <div className="mt-14 swiss-grid gap-y-8">
          <div className="col-span-full sm:col-span-3">
            <p className="swiss-rail swiss-label">La familia</p>
          </div>
          <div className="col-span-full sm:col-span-9">
            <ul className="border-t border-ink">
              {RELATIVES.map((relative) => (
                <li
                  key={relative.code}
                  className="grid gap-x-6 gap-y-2 border-b border-ink-15 py-5 sm:grid-cols-[8rem_1fr]"
                >
                  <div>
                    <p className="font-display text-lg font-black leading-none tracking-[-0.02em] text-accent">
                      {relative.code}
                    </p>
                    <p className="swiss-label mt-2">{relative.full}</p>
                  </div>
                  <div>
                    <p className="font-display text-base font-bold leading-tight text-ink">
                      {relative.name}
                    </p>
                    <p className="mt-1.5 max-w-[62ch] leading-relaxed text-ink-60">
                      {relative.scope}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cronología */}
        <div className="mt-16 swiss-grid gap-y-8">
          <div className="col-span-full sm:col-span-3">
            <p className="swiss-rail swiss-label">Cronología</p>
          </div>
          <div className="col-span-full sm:col-span-9">
            <ol className="border-t border-ink">
              {HISTORY.map((entry) => (
                <li
                  key={entry.year}
                  className="grid gap-x-6 gap-y-1 border-b border-ink-15 py-4 sm:grid-cols-[6rem_1fr] sm:items-baseline"
                >
                  <span className="font-display text-lg font-black tabular-nums tracking-[-0.02em] text-ink">
                    {entry.year}
                  </span>
                  <span className="max-w-[62ch] leading-relaxed text-ink-60">{entry.event}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Reglas del método */}
        <div className="mt-16 swiss-grid gap-y-8">
          <div className="col-span-full sm:col-span-3">
            <p className="swiss-rail swiss-label">Reglas del método</p>
          </div>
          <div className="col-span-full sm:col-span-9">
            <ul className="grid gap-6 sm:grid-cols-2">
              {RULES.map((rule, index) => (
                <li key={rule.rule} className="swiss-figure">
                  <p className="swiss-label text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-3 font-display text-base font-bold leading-tight tracking-[-0.02em] text-ink">
                    {rule.rule}
                  </p>
                  <p className="mt-2 max-w-[44ch] text-sm leading-relaxed text-ink-60">
                    {rule.text}
                  </p>
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

export default NormasIdef0;
