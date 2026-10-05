import type { BulletListProps } from './types';

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="mt-8">
      {items.map((item, i) => (
        <li key={item.title} className="grid grid-cols-[auto_1fr] gap-5 border-t border-ink-15 py-6">
          <span className="swiss-label pt-1 text-accent">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <p className="font-display text-lg font-bold leading-tight text-ink sm:text-xl">{item.title}</p>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-ink-60">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}