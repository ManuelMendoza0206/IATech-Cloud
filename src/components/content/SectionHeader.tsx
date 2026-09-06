import type { SectionHeaderProps } from './types';

export function SectionHeader({ number, title, description, variant = 'light' }: SectionHeaderProps) {
  const labelColor = variant === 'dark' ? 'text-signal' : 'text-navy-700/70';
  const titleColor = variant === 'dark' ? 'text-mist' : 'text-navy-900';

  return (
    <div className="max-w-3xl">
      <span className={`font-mono text-xs uppercase tracking-widest ${labelColor}`}>
        Sección {number}
      </span>
      <h2 className={`mt-4 font-display text-3xl ${titleColor} sm:text-4xl`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 ${variant === 'dark' ? 'text-mist/60' : 'text-navy-700/80'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
