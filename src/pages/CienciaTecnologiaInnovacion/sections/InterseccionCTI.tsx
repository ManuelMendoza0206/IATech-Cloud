import { SectionHeader } from '../../../components/content';

interface CTIPoint {
  title: string;
  text: string;
  dotOpacity: string;
}

const POINTS: CTIPoint[] = [
  {
    title: 'Ciencia impulsa la Tecnología',
    text: 'Aporta la base de conocimiento teórico para nuevos desarrollos.',
    dotOpacity: '',
  },
  {
    title: 'Tecnología facilita la Ciencia',
    text: 'Provee herramientas e instrumental avanzado para la investigación.',
    dotOpacity: '/60',
  },
  {
    title: 'Innovación transforma',
    text: 'Convierte los descubrimientos y desarrollos técnicos en valor económico y social concreto.',
    dotOpacity: '/30',
  },
];

export function InterseccionCTI() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <SectionHeader
            number="04"
            title="Intersección y Dinámica entre CTI"
            variant="dark"
          />

          <div className="mt-10 space-y-8">
            {POINTS.map((p) => (
              <div key={p.title} className="flex items-start gap-4">
                <span className={`mt-1 h-3 w-3 shrink-0 bg-accent${p.dotOpacity}`} />
                <div>
                  <p className="font-display text-xl text-ink">{p.title}</p>
                  <p className="mt-1 text-base sm:text-lg leading-relaxed text-ink/60">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="relative">
          <div className="swiss-chip absolute -inset-4 -z-10" />
          <img
            src="/images/cti-03.jpg"
            alt="Intersección entre ciencia, tecnología e innovación"
            className="w-full border border-ink object-cover grayscale"
            loading="lazy"
            onError={(event) => {
              const el = event.currentTarget;
              el.style.display = 'none';
              el.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden border border-ink bg-paper p-5">
            <p className="swiss-label text-accent">Falta el archivo</p>
            <p className="mt-2 font-display text-base font-black leading-tight break-all text-ink">
              public/images/cti-03.jpg
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-60">
              Imagen de un laboratorio con instrumentation activa y, en el mismo encuadre, una
              pantalla con código o un plano técnico. Debe leerse como ciencia y tecnología a la
              vez.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
