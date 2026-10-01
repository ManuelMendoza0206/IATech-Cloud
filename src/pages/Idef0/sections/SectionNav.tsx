import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'definicion', label: 'Definición', short: '01' },
  { id: 'diagrama', label: 'Diagrama A-0', short: '02' },
  { id: 'metadatos', label: 'Metadatos', short: '03' },
  { id: 'proceso', label: 'Proceso', short: '04' },
  { id: 'entradas', label: 'Entradas', short: '05' },
  { id: 'controles', label: 'Controles', short: '06' },
  { id: 'mecanismos', label: 'Mecanismos', short: '07' },
  { id: 'salidas', label: 'Salidas', short: '08' },
  { id: 'resumen', label: 'Resumen', short: '09' },
  { id: 'video', label: 'Video', short: '10' },
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
      aria-label="Navegación de secciones IDEF0"
      className="sticky top-0 z-20 border-b border-ink-950/10 bg-neu-base backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl overflow-x-auto px-6 sm:px-10">
        <ul className="flex gap-1 py-2">
          {SECTIONS.map(({ id, label, short }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${ active === id ? 'bg-neu-base text-ink-950' : 'text-ink-700/60 hover:bg-steel/15 hover:text-ink-950' }`}
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
