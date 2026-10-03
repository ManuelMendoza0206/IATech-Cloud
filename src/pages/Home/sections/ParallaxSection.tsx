import { useEffect, useRef } from 'react';

const ROWS = [
  {
    title: 'Arquitectura & Diseño',
    description:
      'Cada despliegue comienza con una arquitectura pensada para la resiliencia. Diseñamos sistemas distribuidos que se adaptan al ritmo de la salud, combinando estética técnica con funcionalidad probada — sin perder de vista el presupuesto ni los plazos.',
    imageSrc: '/images/home5.jpg',
    imageAlt: 'Arquitectura cloud — diseño de infraestructura',
    bg: 'dark',
    link: '/gestion-tecnologia',
    imagePosition: 'right', // Fila 1: Imagen a la derecha
  },
  {
    title: 'Implementación & Operación',
    description:
      'De la primera línea de configuración hasta la puesta en producción, pilotamos la totalidad del proceso. Plazos cumplidos, costos controlados, calidad garantizada: vos avanzás tranquilo, nosotros gestionamos la complejidad.',
    imageSrc: '/images/home6.jpg',
    imageAlt: 'Implementación técnica — despliegue cloud',
    bg: 'light',
    link: '/gestion-tecnologia',
    imagePosition: 'left', // Fila 2: Imagen a la izquierda
  },
];

function ParallaxRow({
  title,
  description,
  imageSrc,
  imageAlt,
  bg,
  link,
  imagePosition,
}: (typeof ROWS)[number]) {
  const rowRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (!rowRef.current || !imgRef.current) return;
      const rect = rowRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const ratio = 1 - (rect.top + rect.height) / (viewH + rect.height);
      const clamped = Math.max(0, Math.min(1, ratio));
      const translateY = (clamped - 0.5) * 50;
      imgRef.current.style.transform = `translateY(${translateY}px)`;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = bg === 'dark';
  const isImageLeft = imagePosition === 'left';

  return (
    <div
      ref={rowRef}
      className={`grid items-center lg:grid-cols-2 ${ isDark ? 'bg-canvas text-ink' : 'bg-[#EDE8E0] text-ink' }`}
    >
      {/* Lado de Texto */}
      <div
        className={`relative flex flex-col justify-between p-8 sm:p-14 lg:p-20 min-h-[400px] lg:min-h-[520px] ${ isImageLeft ? 'lg:order-2' : 'lg:order-1' }`}
      >
        <div>
          {/* Elemento gráfico geométrico flotante al estilo de la referencia */}
          <div className="flex items-center gap-2 mb-8 opacity-80">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="4" y="4" width="7" height="7" transform="rotate(45 7.5 7.5)" />
              <circle cx="16" cy="12" r="3.5" />
              <path d="M6 19l4-6 4 6H6z" />
            </svg>
          </div>

          <h2 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl max-w-md leading-none">
            {title}
          </h2>
          
          <p
            className={`mt-6 max-w-md text-sm leading-relaxed sm:text-base ${ isDark ? 'text-ink/70' : 'text-ink/75' }`}
          >
            {description}
          </p>
        </div>

        {/* Botón plano y rectangular estilo referencia */}
        <div className="mt-10">
          <a
            href={link}
            className={`inline-block px-7 py-3 font-mono text-xs font-bold uppercase tracking-widest transition ${ isDark ? 'bg-canvas text-ink hover:brightness-105' : 'bg-canvas text-ink hover:brightness-105' }`}
          >
            Descubrir
          </a>
        </div>
      </div>

      {/* Lado de Imagen con padding enmarcado y efecto Parallax */}
      <div
        className={`p-6 sm:p-10 lg:p-12 ${ isImageLeft ? 'lg:order-1' : 'lg:order-2' }`}
      >
        <div className="relative overflow-hidden w-full h-[320px] sm:h-[420px] lg:h-[480px]">
          <div ref={imgRef} className="absolute inset-0 h-[125%] -top-[12.5%] w-full">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ParallaxSection() {
  return (
    <section className="w-full overflow-hidden">
      {ROWS.map((row) => (
        <ParallaxRow key={row.title} {...row} />
      ))}
    </section>
  );
}