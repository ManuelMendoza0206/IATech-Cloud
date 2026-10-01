import type { BulletListProps } from './types';

export function BulletList({ items, variant = 'light' }: BulletListProps) {
  void variant;
  const dotBg = 'bg-aqua ring-2 ring-signal/30';
  const titleColor = 'text-ink-950';
  const textColor = 'text-ink-700';

  return (
    <div className="mt-8 space-y-6">
      {items.map((item) => (
        <div key={item.title} className="flex items-start gap-4">
          <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ${dotBg}`} />
          <div>
            <p className={`font-neu-display text-lg sm:text-xl ${titleColor}`}>{item.title}</p>
            <p className={`mt-1 text-base sm:text-lg leading-relaxed ${textColor}`}>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
