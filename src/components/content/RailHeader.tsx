import type { ReactNode } from 'react';
import { Reveal } from '../ui/Reveal';

/**
 * Cabecera de sección con riel izquierdo.
 *
 * Sustituye el patrón "kicker sobre el titular" por una etiqueta que
 * vive en la columna del grid, alineada a la altura del titular. La
 * etiqueta sigue siendo parte de la retícula: mismo peso de línea,
 * misma retícula, sin flotar sobre el texto.
 */
interface RailHeaderProps {
  /** Etiqueta corta de la sección, en mayúsculas por CSS. */
  label: string;
  title: string;
  /** Contenido de apoyo: párrafo, cifra o lista corta. */
  aside?: ReactNode;
  id?: string;
}

export function RailHeader({ label, title, aside, id }: RailHeaderProps) {
  return (
    <Reveal>
      <div id={id} className="swiss-grid items-start border-b border-ink pb-8">
        <div className="col-span-full sm:col-span-3">
          <p className="swiss-rail swiss-label">{label}</p>
        </div>
        <div className="col-span-full mt-6 sm:col-span-9 sm:mt-0">
          <h2 className="swiss-display-sm max-w-[22ch] text-ink">{title}</h2>
          {aside && (
            <div className="mt-6 max-w-[62ch] text-base leading-relaxed text-ink-60 sm:text-lg">
              {aside}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

/**
 * Fila de cifra: número grande + etiqueta + fuente, sobre una regla.
 * El dato nunca viaja sin su fuente; se pasa en `source`.
 */
interface FigureRowProps {
  value: string;
  label: string;
  detail?: string;
  source?: { label: string; href?: string };
  tone?: 'ink' | 'accent';
}

export function FigureRow({ value, label, detail, source, tone = 'accent' }: FigureRowProps) {
  return (
    <div className="swiss-figure">
      <p
        className={`font-display text-[clamp(2.75rem,6vw,4.5rem)] font-black leading-[0.85] tracking-[-0.04em] tabular-nums ${
          tone === 'accent' ? 'text-accent' : 'text-ink'
        }`}
      >
        {value}
      </p>
      <p className="swiss-label mt-4">{label}</p>
      {detail && <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-ink-60">{detail}</p>}
      {source && (
        <p className="mt-3">
          <SourceLabel {...source} />
        </p>
      )}
    </div>
  );
}

function SourceLabel({ label, href }: { label: string; href?: string }) {
  if (!href) return <span className="swiss-source">{label}</span>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="swiss-source break-words"
    >
      {label}
      <i className="bx bx-link-external ml-1 align-baseline text-[0.9em] leading-none" aria-hidden="true" />
    </a>
  );
}

export default RailHeader;
