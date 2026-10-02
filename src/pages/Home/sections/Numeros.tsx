import { useEffect, useRef, useState } from 'react';
import { animate, createSpring } from 'animejs';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}

const STATS: Stat[] = [
  {
    value: 99,
    suffix: '%',
    label: 'Disponibilidad',
    sub: 'Continuidad del servicio clínico',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Operación',
    sub: 'Monitoreo y soporte ininterrumpido',
  },
  {
    value: 4,
    suffix: '',
    label: 'Puestos del área',
    sub: 'Fichas y organigrama publicados',
  },
  {
    value: 5,
    suffix: '',
    label: 'Scrum Team',
    sub: '1 Product Owner + 4 desarrolladores',
  },
];

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      raf = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(raf);
    }
    const t0 = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const count = useCountUp(stat.value, start);
  const numRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!numRef.current) return;
    const animation = animate(numRef.current, {
      scale: [0.85, 1],
      duration: 600,
      ease: createSpring({ stiffness: 220, damping: 16 }),
    });
    return () => {
      animation.revert();
    };
  }, [start]);

  return (
    <div className="reveal bg-surface p-6 sm:p-8">
      <p ref={numRef} className="font-display text-5xl font-black tabular-nums text-accent sm:text-6xl">
        {count}
        {stat.suffix}
      </p>
      <p className="swiss-label mt-3">
        {stat.label}
      </p>
      <p className="mt-1 max-w-[28ch] text-sm leading-relaxed text-ink-60">{stat.sub}</p>
    </div>
  );
}

export default function Numeros() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section id="numeros" aria-label="El área en cifras" className="border-b border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="swiss-grid items-end">
          <h2 className="reveal col-span-full font-display text-3xl font-extrabold leading-tight text-ink sm:col-span-8 sm:text-5xl sm:leading-none">
            Números que respaldan el servicio
          </h2>
          <p className="swiss-label col-span-full border-t border-ink pt-3 sm:col-span-4 sm:mt-0">
            El área en cifras
          </p>
        </div>

        <div
          ref={ref}
          className="mt-12 grid grid-cols-1 gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
