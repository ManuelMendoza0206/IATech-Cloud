import { useEffect, useRef } from 'react';
import { animate, createScope, createTimeline, onScroll, stagger } from 'animejs';

/** Barra de estado tipo consola: la senal de dominio mas directa. */
const STATUS = [
  { k: 'region', v: 'us-east-1' },
  { k: 'nodos', v: '12 activos' },
  { k: 'latencia', v: '18 ms' },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    const scope = createScope({ root: containerRef.current }).add(() => {
      const tl = createTimeline({ defaults: { ease: 'outExpo' } });
      tl.add('.hero-pill', { opacity: [0, 1], translateY: [-10, 0], duration: 450 })
        .add('.hero-title', { opacity: [0, 1], translateY: [18, 0], duration: 700 }, '-=250')
        .add('.hero-sub', { opacity: [0, 1], translateY: [12, 0], duration: 600 }, '-=450')
        .add(
          '.hero-cta > *',
          { opacity: [0, 1], translateY: [10, 0], delay: stagger(80), duration: 450 },
          '-=350'
        );
    });

    return () => scope.revert();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const container = containerRef.current;
    if (!container) return;

    // Scroll-linked: scale uniforme + deriva (nunca scaleX, que deforma).
    const scope = createScope({ root: container }).add(() => {
      animate('.hero-photo', {
        scale: [1.1, 1],
        y: [-26, 26],
        ease: 'linear',
        autoplay: onScroll({ target: container, sync: true }),
      });
      animate('.hero-arrow', {
        opacity: [1, 0],
        ease: 'linear',
        autoplay: onScroll({ target: container, sync: true }),
      });
    });

    return () => scope.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-ice-50 lg:h-[200vh]">
      {/* Barra de estado */}
      <div className="border-b border-steel/25 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 px-6 py-2.5 sm:px-10">
          <span className="chip chip-ok">
            <span className="dot" />
            OPERATIVO
          </span>
          {STATUS.map((s) => (
            <span key={s.k} className="chip">
              <span className="text-ink-45">{s.k}</span>
              <span className="metric font-medium text-ink">{s.v}</span>
            </span>
          ))}
          <span className="ml-auto hidden mono-label sm:block">Área de Servicios Cloud</span>
        </div>
      </div>

      <div className="sticky top-0 flex min-h-screen w-full flex-col lg:h-screen lg:flex-row lg:items-stretch">
        <div className="relative z-10 flex w-full flex-col justify-center px-6 py-20 sm:px-10 lg:w-[54%] lg:px-14 lg:py-0 xl:px-20">
          <span className="hero-pill chip chip-ok w-fit">Servicios Cloud · IATECH</span>

          <h1 className="hero-title mt-6 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl xl:text-6xl">
            Salud conectada, en la nube,{' '}
            <span className="text-signal">sin límites.</span>
          </h1>

          <p className="hero-sub mt-6 max-w-xl text-lg leading-relaxed text-ink-70">
            Operamos la infraestructura cloud de IATECH para que la atención
            clínica nunca se detenga. Rendimiento, velocidad y disponibilidad
            en cada despliegue.
          </p>

          <div className="hero-cta mt-10 flex flex-wrap items-center gap-3">
            <a href="#presentacion" className="btn btn-primary group">
              Conoce el área
              <i className="bx bx-right-arrow-alt text-base transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://iatech-co-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir inventario conjunto en Vercel"
              className="btn btn-secondary group"
            >
              Inventario
              <i className="bx bx-link-external text-base transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* KPIs del hero: jerarquia de dashboard */}
          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-steel/40 bg-steel/40">
            {[
              { v: '99.9%', l: 'Disponibilidad' },
              { v: '24/7', l: 'Operación' },
              { v: '18ms', l: 'Latencia media' },
            ].map((k) => (
              <div key={k.l} className="bg-white px-4 py-4">
                <dd className="kpi-value text-2xl">{k.v}</dd>
                <dt className="kpi-label mt-2">{k.l}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative h-[44vh] w-full shrink-0 lg:h-auto lg:w-[46%]">
          <div className="hero-photo absolute inset-0">
            <img
              src="/images/cloud2.jpg"
              alt="Infraestructura cloud de IATECH operando sobre racks de servidores"
              width={1600}
              height={1060}
              sizes="(max-width: 1024px) 100vw, 46vw"
              fetchPriority="high"
              decoding="async"
              className="absolute -top-[7.5%] left-0 h-[115%] w-full object-cover will-change-transform"
            />

            <a
              href="#presentacion"
              aria-label="Ir a la siguiente sección"
              className="hero-arrow btn btn-primary absolute bottom-6 left-6 shadow-panel-hi"
            >
              Explorar
              <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
            </a>
          </div>

          <div className="panel absolute right-6 top-6 hidden px-5 py-4 lg:block">
            <p className="mono-label">Región primaria</p>
            <p className="kpi-value mt-1.5 text-3xl">99.98%</p>
            <p className="kpi-delta mt-1">↑ estable</p>
          </div>
        </div>
      </div>
    </section>
  );
}