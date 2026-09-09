import { useEffect, useRef, useState } from 'react';

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

  return (
    <div>
      <p className="font-display text-5xl font-bold tabular-nums text-signal sm:text-6xl">
        {count}
        {stat.suffix}
      </p>
      <p className="mt-3 font-mono text-xs uppercase tracking-widest text-mist">
        {stat.label}
      </p>
      <p className="mt-1 max-w-[28ch] text-sm leading-relaxed text-mist/60">{stat.sub}</p>
    </div>
  );
}

export default function Numeros() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section
      id="numeros"
      aria-label="El área en cifras"
      className="relative overflow-hidden bg-navy-950 py-20 sm:py-28"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '400px' }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(#38d6c8 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />
      <div className="pointer-events-none absolute -top-32 right-0 h-[360px] w-[360px] rounded-full bg-signal/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <h2 className="font-display text-3xl leading-tight text-mist sm:text-4xl">
          Números que respaldan el servicio
        </h2>

        <div
          ref={ref}
          className="mt-10 grid grid-cols-1 gap-10 border-t border-mist/10 pt-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}