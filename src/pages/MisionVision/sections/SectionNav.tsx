import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'declaraciones', label: 'Declaraciones', short: '01' },
  { id: 'concepto', label: 'Concepto', short: '02' },
  { id: 'pilares', label: 'Pilares', short: '03' },
  { id: 'compromiso', label: 'Compromiso', short: '04' },
];

export default function SectionNav() {
  const [active, setActive] = useState<string>('declaraciones');
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
      aria-label="Navegación de secciones de Misión y Visión"
      className="sticky top-0 z-20 border-b border-ink-15 bg-paper/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl overflow-x-auto px-6 sm:px-10">
        <ul className="flex gap-1 py-2">
          {SECTIONS.map(({ id, label, short }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  active === id
                    ? 'bg-ink text-paper'
                    : 'text-ink-60 hover:bg-ink/5 hover:text-ink'
                }`}
              >
                <span className="font-mono text-[10px]">{short}</span>
                <span className="hidden sm:inline">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
