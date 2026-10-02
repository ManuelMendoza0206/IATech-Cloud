import type { SectionHeaderProps } from './types';
import { Reveal } from '../ui/Reveal';

export function SectionHeader({ number, title, description }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="reveal max-w-3xl">
        <div className="ed-rule flex items-baseline gap-4 pb-3">
          <span className="font-display text-4xl font-bold leading-none tracking-tight text-accent">
            {number}
          </span>
          <span className="ed-caption">Sección</span>
        </div>
        <h2 className="ed-headline-sm mt-6 text-ink">{title}</h2>
        {description && <p className="ed-body mt-6 max-w-xl">{description}</p>}
      </div>
    </Reveal>
  );
}