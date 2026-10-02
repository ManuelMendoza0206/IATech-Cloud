import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'definicion', label: 'Definición', short: '01' },
  { id: 'pilares', label: 'Pilares', short: '02' },
  { id: 'valores', label: 'Valores', short: '03' },
  { id: 'eventos', label: 'Eventos', short: '04' },
  { id: 'artefactos', label: 'Artefactos', short: '05' },
  { id: 'conceptos', label: 'Conceptos', short: '06' },
  { id: 'equipo', label: 'Equipo', short: '07' },
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
      aria-label="Navegación de secciones Scrum"
      className="sticky top-0 z-20 border-b border-rule bg-paper/95 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl overflow-x-auto px-6 sm:px-10">
        <ul className="flex">
          {SECTIONS.map(({ id, label, short }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`ed-chip border-r-0 transition-colors ${ active === id ? 'ed-chip-active' : '' }`}
              >
                <span className="font-display text-[11px] font-bold tracking-tight">{short}</span>
                <span className="hidden sm:inline">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
