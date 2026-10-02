import { useEffect, useRef, useState } from 'react';
import { animate, createSpring } from 'animejs';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  sub: string;
  delta?: string;
}

const STATS: Stat[] = [
  {
    value: 99,
    suffix: '%',
    label: 'Disponibilidad',
    sub: 'Continuidad del servicio clínico',
    delta: '↑ 0.4 p.p.',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Operación',
    sub: 'Monitoreo y soporte ininterrumpido',
    delta: 'sin cortes',
  },
  {
    value: 4,
    suffix: '',
    label: 'Puestos del área',
    sub: 'Fichas y organigrama publicados',
    delta: 'completos',
  },
  {
    value: 5,
    suffix: '',
    label: 'Scrum Team',
    sub: '1 Product Owner + 4 desarrolladores',
    delta: '100% asignado',
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

function KpiCard({ stat, start }: { stat: Stat; start: boolean }) {
  const count = useCountUp(stat.value, start);
  const valueRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!valueRef.current) return;
    const animation = animate(valueRef.current, {
      scale: [0.92, 1],
      duration: 600,
      ease: createSpring({ stiffness: 220, damping: 16 }),
    });
    return () => {
      animation.revert();
    };
  }, [start]);

  return (
    <div className="panel panel-hover reveal p-6">
      <div className="flex items-start justify-between gap-3">
        <p className="kpi-label">{stat.label}</p>
        {stat.delta && <span className="kpi-delta">{stat.delta}</span>}
      </div>

      <p ref={valueRef} className="kpi-value mt-4 inline-block text-signal">
        {count}
        {stat.suffix}
      </p>

      <p className="mt-3 border-t border-steel/25 pt-3 text-sm leading-relaxed text-ink-70">
        {stat.sub}
      </p>
    </div>
  );
}

export default function Numeros() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section id="numeros" aria-label="El área en cifras" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="reveal text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            El área en cifras
          </h2>
          <div className="flex items-center gap-2">
            <span className="chip chip-ok">
              <span className="dot" />
              datos verificados
            </span>
          </div>
        </div>

        <div
          ref={ref}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <KpiCard key={stat.label} stat={stat} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}