import type { SectionHeaderProps } from './types';
import { Reveal } from '../ui/Reveal';

export function SectionHeader({ number, title, description, variant = 'light' }: SectionHeaderProps) {
  const labelColor = 'text-signal';
  const titleColor = 'text-ink-950';
  const descColor = variant === 'dark' ? 'text-ink-950/70' : 'text-ink-700';

  return (
    <Reveal>
      <div className="reveal max-w-3xl">
        <span className={`font-mono text-xs uppercase tracking-widest ${labelColor}`}>
          Sección {number}
        </span>
        <h2 className={`mt-4 font-neu-display text-3xl font-bold ${titleColor} sm:text-4xl`}>
          {title}
        </h2>
        {description && (
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${descColor}`}>
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
