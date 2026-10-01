import { useEffect, useRef, useState } from 'react';
import { animate, createScope, createSpring } from 'animejs';

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
    <div className="reveal neu-raised p-6 sm:p-8">
      <p ref={numRef} className="font-neu-display text-5xl font-black tabular-nums text-signal sm:text-6xl">
        {count}
        {stat.suffix}
      </p>
      <p className="mt-3 font-mono text-xs font-bold uppercase tracking-widest text-ink-950">
        {stat.label}
      </p>
      <p className="mt-1 max-w-[28ch] text-sm leading-relaxed text-ink-700">{stat.sub}</p>
    </div>
  );
}

export default function Numeros() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!sectionRef.current) return;
    const scope = createScope({ root: sectionRef.current }).add(() => {
      animate('.neu-blob', {
        translateX: [0, 30],
        translateY: [0, -20],
        duration: 6000,
        ease: 'inOutSine',
        loop: true,
        alternate: true,
      });
    });
    return () => scope.revert();
  }, []);

  return (
    <section
      id="numeros"
      aria-label="El área en cifras"
      ref={sectionRef}
      className="relative overflow-hidden bg-neu-base py-20 sm:py-28"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '400px' }}
    >
      <div className="neu-blob pointer-events-none absolute -top-24 -left-24 h-[320px] w-[320px] rounded-full bg-aqua/25 blur-[100px]" />
      <div className="neu-blob pointer-events-none absolute -bottom-32 right-0 h-[360px] w-[360px] rounded-full bg-glow/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <h2 className="reveal font-neu-display text-3xl font-extrabold leading-tight text-ink-950 sm:text-4xl">
          Números que respaldan el servicio
        </h2>

        <div
          ref={ref}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StatItem key={stat.label} stat={stat} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}