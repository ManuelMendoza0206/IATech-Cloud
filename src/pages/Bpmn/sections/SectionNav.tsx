import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'definicion', label: 'Definición', short: '01' },
  { id: 'notacion', label: 'Notación', short: '02' },
  { id: 'tipos', label: 'Tipos', short: '03' },
  { id: 'diagrama', label: 'Diagrama', short: '04' },
  { id: 'simbolos', label: 'Símbolos', short: '05' },
  { id: 'lectura', label: 'Lectura', short: '06' },
  { id: 'video', label: 'Video', short: '07' },
];

export default function SectionNav() {
  const [active, setActive] = useState<string>('definicion');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('content-start');
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [visible]);

  if (!visible) return null;

  return (
    <nav
      aria-label="Navegación de secciones BPMN"
      className="sticky top-0 z-20 border-b border-ink bg-paper"
    >
      <div className="mx-auto max-w-7xl overflow-x-auto px-6 sm:px-10">
        <ul className="flex">
          {SECTIONS.map(({ id, label, short }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`inline-flex items-center gap-2 whitespace-nowrap border-r border-ink-15 px-4 py-3 swiss-label transition-colors ${
                  active === id ? 'bg-ink text-paper' : 'text-ink-60 hover:bg-ink-15 hover:text-ink'
                }`}
              >
                <span className="font-display text-[10px] font-black">{short}</span>
                <span className="hidden sm:inline">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
