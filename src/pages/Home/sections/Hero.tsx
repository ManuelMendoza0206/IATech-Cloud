import { useEffect, useRef } from 'react';
import { animate, createScope, createTimeline, onScroll, stagger } from 'animejs';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    const scope = createScope({ root: containerRef.current }).add(() => {
      const tl = createTimeline({ defaults: { ease: 'outExpo' } });
      tl.add('.hero-pill', { opacity: [0, 1], translateY: [-12, 0], duration: 500 })
        .add('.hero-title', { opacity: [0, 1], translateY: [26, 0], duration: 900 }, '-=280')
        .add('.hero-sub', { opacity: [0, 1], translateY: [16, 0], duration: 650 }, '-=560')
        .add(
          '.hero-cta > *',
          { opacity: [0, 1], translateY: [12, 0], delay: stagger(90), duration: 500 },
          '-=400'
        );
    });

    return () => scope.revert();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const container = containerRef.current;
    if (!container) return;

    // Regla 3: parallax. La foto es la capa de fondo y se mueve
    // mas lento que el texto de frente.
    const scope = createScope({ root: container }).add(() => {
      animate('.hero-backdrop', {
        scale: [1.14, 1],
        ease: 'linear',
        autoplay: onScroll({ target: container, sync: true }),
      });
      animate('.hero-backdrop', {
        translateY: ['-40px', '40px'],
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
    <section ref={containerRef} className="relative bg-canvas">
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 sm:px-10 sm:pb-32 sm:pt-20">
        {/* Capa 1 (fondo): imagen, desplazada a la derecha y mas alta */}
        <div className="hero-backdrop absolute inset-x-0 top-0 -z-10 h-[62%]">
          <img
            src="/images/cloud2.jpg"
            alt="Infraestructura cloud de IATECH operando sobre racks de servidores"
            width={1600}
            height={1060}
            sizes="100vw"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-canvas/45" />
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="hero-pill layer-pill inline-flex px-5 py-2.5 text-sm font-medium text-ink-70">
              Servicios Cloud · IATECH
            </span>

            <h1 className="hero-title display-front mt-8 text-5xl sm:text-6xl xl:text-7xl">
              Salud conectada,
              <br />
              en la nube,{' '}
              <span className="display-back">sin límites.</span>
            </h1>
          </div>
        </div>

        {/* Capa 3 (frente): el panel de texto se superpone a la imagen */}
        <div className="relative z-10 mt-10 grid gap-8 lg:mt-0 lg:grid-cols-12">
          <div className="layer-edge lg:col-span-6 lg:-mt-24 lg:self-end">
            <p className="hero-sub text-lg leading-relaxed text-ink-70">
              Operamos la infraestructura cloud de IATECH para que la atención
              clínica nunca se detenga. Rendimiento, velocidad y disponibilidad
              en cada despliegue.
            </p>

            <div className="hero-cta mt-8 flex flex-wrap items-center gap-3">
              <a href="#presentacion" className="layer-btn layer-btn-primary group">
                Conoce el área
                <i className="bx bx-right-arrow-alt text-lg transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://iatech-co-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir inventario conjunto en Vercel"
                className="layer-btn layer-btn-secondary group"
              >
                Inventario
                <i className="bx bx-link-external text-lg transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="layer-deep flex flex-col justify-center px-8 py-9 lg:col-span-4 lg:col-start-9 lg:mt-24">
            <p className="label !text-white/60">Disponibilidad</p>
            <p className="mt-2 text-4xl font-extrabold tracking-tight">99.9%</p>
            <p className="mt-3 text-sm text-white/70">
              Continuidad del servicio clínico, medida todos los días.
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <a
            href="#presentacion"
            aria-label="Ir a la siguiente sección"
            className="hero-arrow layer-pill flex items-center gap-2 px-5 py-3 text-sm font-medium text-ink transition hover:text-accent"
          >
            Explorar
            <i className="bx bx-down-arrow-alt text-lg" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}