import type { BulletListProps } from './types';

/**
 * Editorial: los items son entradas numeradas separadas por filetes,
 * no cards. El ritmo lo marca la regla, no el relieve.
 */
export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="ed-rule mt-8">
      {items.map((item, i) => (
        <li key={item.title} className="grid grid-cols-[auto_1fr] gap-6 border-b border-rule-soft py-6">
          <span className="ed-caption pt-2 text-accent">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <p className="font-display text-xl font-bold leading-tight text-ink">{item.title}</p>
            <p className="ed-body mt-2 max-w-xl">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}