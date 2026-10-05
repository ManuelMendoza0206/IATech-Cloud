import { useEffect, useLayoutEffect, useRef } from 'react';
import { createScope, createTimeline, onScroll, stagger, utils } from 'animejs';

/**
 * Hero Swiss de dos columnas.
 *
 * La foto no vive dentro de su columna: vive en un stage que cubre el viewport
 * y se recorta con `clip-path` al rectangulo de la columna. Asi el mismo
 * recorte puede abrirse hasta la pantalla completa usando solo transform +
 * clip (nada de width/height), y la foto pasa de panel a imagen a pantalla
 * completa mientras el scroll recorre la seccion.
 *
 * El reposo se calcula por medicion, no con porcentajes sueltos: reproduce
 * exactamente el frame actual (foto con 15% de sobreancho vertical, centrada
 * en la columna) para que el takeover no se lea como un cambio de diseno.
 */

/** Reposo para leer, apertura y sostén a pantalla completa. */
const HOLD = 150;
const GROW = 550;
const FULL = 300;
const OPEN_CLIP = 'inset(0% 0% 0% 0%)';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    // Entrada Swiss: el titular se revela por corte, no por escala.
    const scope = createScope({ root: containerRef.current }).add(() => {
      const tl = createTimeline({ defaults: { ease: 'outExpo' } });
      tl.add('.hero-pill', { opacity: [0, 1], translateX: [-14, 0], duration: 500 })
        .add(
          '.hero-title',
          {
            opacity: [0, 1],
            clipPath: ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
            duration: 800,
          },
          '-=280'
        )
        .add('.hero-sub', { opacity: [0, 1], translateY: [12, 0], duration: 600 }, '-=450')
        .add(
          '.hero-cta > *',
          { opacity: [0, 1], translateY: [10, 0], delay: stagger(80), duration: 450 },
          '-=350'
        );
    });

    return () => scope.revert();
  }, []);

  // Layout effect: la geometria del reposo tiene que estar puesta antes del
  // primer paint, o la foto se pinta un frame a pantalla completa.
  useLayoutEffect(() => {
    const section = containerRef.current;
    const copy = copyRef.current;
    const frame = frameRef.current;
    const stage = stageRef.current;
    const photo = photoRef.current;
    if (!section || !frame || !stage || !photo) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let scope: ReturnType<typeof createScope> | null = null;

    const build = () => {
      const s = stage.getBoundingClientRect();
      const f = frame.getBoundingClientRect();
      if (!s.width || !s.height || !f.width || !f.height) return;

      const pct = (value: number, total: number) => `${((value / total) * 100).toFixed(3)}%`;
      const restClip = `inset(${pct(f.top - s.top, s.height)} ${pct(s.right - f.right, s.width)} ${pct(
        s.bottom - f.bottom,
        s.height
      )} ${pct(f.left - s.left, s.width)})`;

      const restX = f.left + f.width / 2 - (s.left + s.width / 2);
      const restY = f.top + f.height / 2 - (s.top + s.height / 2);
      // La foto base cubre el alto del stage; el reposo reproduce el
      // sobreancho vertical del frame actual (h-[115%] - top-[7.5%]).
      const restScale = (f.height * 1.15) / s.height;
      const aspect = (photo.naturalWidth || 1600) / (photo.naturalHeight || 1060);
      // Abierta, la foto tiene que alcanzar el ancho del stage.
      const fullScale = Math.max(1, s.width / (s.height * aspect));

      utils.set(photo, { x: restX, y: restY, scale: restScale });
      stage.style.clipPath = restClip;

      scope?.revert();
      scope = null;

      // Sin recorrido de scroll (mobile, o la seccion sin altura extra) no hay
      // nada que sincronizar: la foto se queda en su panel.
      const range = section.offsetHeight - s.height;
      if (reduced || range < s.height * 0.5) return;

      scope = createScope({ root: section }).add(() => {
        createTimeline({
          autoplay: onScroll({ target: section, sync: true }),
          // Bajo la foto a pantalla completa el texto queda cubierto: sale del
          // tab order mientras dure el takeover.
          onUpdate: (self) => {
            (window as unknown as { __p?: number }).__p = self.progress;
            if (copy) copy.inert = self.progress > 0.62;
          },
        })
          .add(
            stage,
            {
              clipPath: [
                { to: restClip, duration: HOLD },
                { to: OPEN_CLIP, duration: GROW, ease: 'inOutQuart' },
                { to: OPEN_CLIP, duration: FULL },
              ],
            },
            0
          )
          .add(
            photo,
            {
              x: [
                { to: restX, duration: HOLD },
                { to: 0, duration: GROW, ease: 'inOutQuart' },
                { to: 0, duration: FULL },
              ],
              y: [
                { to: restY - 18, duration: HOLD, ease: 'outQuad' },
                { to: 0, duration: GROW, ease: 'inOutQuart' },
                { to: 0, duration: FULL },
              ],
              scale: [
                { to: restScale, duration: HOLD },
                { to: fullScale, duration: GROW, ease: 'inOutQuart' },
                { to: fullScale * 1.05, duration: FULL, ease: 'linear' },
              ],
            },
            0
          )
          .add(
            '.hero-arrow',
            {
              opacity: [
                { to: 1, duration: HOLD },
                { to: 0, duration: 130 },
                { to: 0, duration: GROW + FULL - 130 },
              ],
            },
            0
          );
      });
    };

    build();
    window.addEventListener('resize', build);
    return () => {
      window.removeEventListener('resize', build);
      scope?.revert();
      if (copy) copy.inert = false;
    };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-paper lg:h-[200vh]">
      <div className="sticky top-0 flex min-h-screen w-full flex-col overflow-hidden lg:h-screen lg:flex-row lg:items-stretch">
        <div
          ref={copyRef}
          className="relative z-10 flex w-full flex-col justify-center border-b border-ink px-6 py-20 sm:px-10 lg:w-[52%] lg:border-b-0 lg:border-r lg:px-14 xl:px-20"
        >
          <span className="hero-pill swiss-label flex items-center gap-3 text-accent">
            <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
            Servicios Cloud · IATECH
          </span>

          <h1 className="hero-title swiss-display mt-8 text-ink">
            Salud conectada,
            <br />
            en la nube,
            <br />
            <span className="text-accent">sin límites.</span>
          </h1>

          <p className="hero-sub mt-10 max-w-lg border-l-2 border-accent pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
            Operamos la infraestructura cloud de IATECH para que la atención
            clínica nunca se detenga. Rendimiento, velocidad y disponibilidad
            en cada despliegue.
          </p>

          <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#presentacion"
              className="swiss-btn swiss-btn-primary group inline-flex items-center gap-3 px-7 py-3.5 text-[11px]"
            >
              Conoce el área
              <i className="bx bx-right-arrow-alt text-base transition-transform duration-150 group-hover:translate-x-1" />
            </a>
            <a
              href="https://iatech-co-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir inventario conjunto en Vercel"
              className="swiss-btn swiss-btn-secondary group inline-flex items-center gap-3 px-7 py-3.5 text-[11px]"
            >
              Inventario
              <i className="bx bx-link-external text-base transition-transform duration-150 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 border-t border-ink pt-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 bg-accent" />
            </span>
            <span className="swiss-label">Disponibilidad 24/7</span>
          </div>
        </div>

        {/* Marco de la foto: define el rectangulo de reposo. */}
        <div
          ref={frameRef}
          className="relative h-[46vh] w-full shrink-0 overflow-hidden lg:h-auto lg:w-[48%]"
        >
          <a
            href="#presentacion"
            aria-label="Ir a la siguiente sección"
            className="hero-arrow swiss-btn swiss-btn-primary absolute bottom-0 left-0 z-30 inline-flex items-center gap-2 border-0 px-5 py-3 text-[11px]"
          >
            Explorar
            <i className="bx bx-down-arrow-alt text-base" aria-hidden="true" />
          </a>
        </div>

        {/* Stage: el recorte que se abre hasta ocupar toda la pantalla. */}
        <div
          ref={stageRef}
          className="absolute inset-0 z-20 overflow-hidden [will-change:clip-path]"
        >
          <img
            ref={photoRef}
            src="/images/cloud2.jpg"
            alt="Infraestructura cloud de IATECH operando sobre racks de servidores"
            width={1600}
            height={1060}
            sizes="100vw"
            fetchPriority="high"
            decoding="async"
            className="hero-photo absolute left-1/2 top-1/2 h-full w-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-cover grayscale will-change-transform"
          />
        </div>
      </div>
    </section>
  );
}