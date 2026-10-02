import type { SectionHeaderProps } from './types';
import { Reveal } from '../ui/Reveal';

export function SectionHeader({ number, title, description }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="reveal max-w-3xl">
        <div className="flex items-baseline gap-4 border-b border-ink pb-3">
          <span className="font-display text-5xl font-black leading-none tracking-tight text-accent">
            {number}
          </span>
          <span className="swiss-label">Sección</span>
        </div>
        <h2 className="swiss-display-sm mt-6 text-ink">{title}</h2>
        {description && (
          <p className="mt-6 max-w-xl border-l-2 border-ink-15 pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}