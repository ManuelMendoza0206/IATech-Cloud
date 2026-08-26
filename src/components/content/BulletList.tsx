import type { BulletListProps } from './types';

export function BulletList({ items, variant = 'light' }: BulletListProps) {
  const dotBg = variant === 'dark' ? 'bg-signal' : 'bg-signal';
  const titleColor = variant === 'dark' ? 'text-mist' : 'text-navy-900';
  const textColor = variant === 'dark' ? 'text-mist/60' : 'text-navy-700/70';

  return (
    <div className="mt-8 space-y-6">
      {items.map((item) => (
        <div key={item.title} className="flex items-start gap-4">
          <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ${dotBg}`} />
          <div>
            <p className={`font-display text-base ${titleColor}`}>{item.title}</p>
            <p className={`mt-1 ${textColor}`}>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
