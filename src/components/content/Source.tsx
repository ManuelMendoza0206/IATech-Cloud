/**
 * Cita de fuente verificable. Toda cifra nueva del sitio pasa por acá:
 * el dato viaja con su referencia, nunca suelto.
 */
interface SourceProps {
  /** Referencia corta visible, ej. "ISO/IEC 38500:2024 §7.2". */
  label: string;
  /** URL pública de la fuente primaria. */
  href?: string;
  className?: string;
}

export function Source({ label, href, className = '' }: SourceProps) {
  const base = `swiss-source ${className}`.trim();

  if (!href) {
    return <cite className={base}>{label}</cite>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} break-words`}
    >
      {label}
      <i className="bx bx-link-external ml-1 align-baseline text-[0.9em] leading-none" aria-hidden="true" />
      <span className="sr-only">(abre en una pestaña nueva)</span>
    </a>
  );
}

/**
 * Bloque de fuentes al pie de una sección. Agregá un <Source> por dato.
 */
interface SourcesProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Sources({ title = 'Fuentes', children, className = '' }: SourcesProps) {
  return (
    <div className={`mt-10 border-t border-ink-15 pt-4 ${className}`}>
      <p className="swiss-label">{title}</p>
      <ul className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-1.5">{children}</ul>
      <p className="mt-3">
        <a href="/fuentes" className="swiss-source inline-flex items-center gap-1">
          Ver el índice completo de fuentes
          <i className="bx bx-right-arrow-alt text-[0.95em] leading-none" aria-hidden="true" />
        </a>
      </p>
    </div>
  );
}

export interface SourceItem {
  label: string;
  href?: string;
}

export function SourceList({ items }: { items: SourceItem[] }) {
  return (
    <>
      {items.map((item) => (
        <li key={item.label}>
          <Source label={item.label} href={item.href} />
        </li>
      ))}
    </>
  );
}

export default Source;
