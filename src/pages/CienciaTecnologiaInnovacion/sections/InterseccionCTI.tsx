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
    <section className="bg-navy-900 py-16 sm:py-20">
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
                <span className={`mt-1 h-3 w-3 shrink-0 rounded-full bg-signal${p.dotOpacity}`} />
                <div>
                  <p className="font-display text-lg text-mist">{p.title}</p>
                  <p className="mt-1 text-mist/60">{p.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-signal/20 bg-signal/5 p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-signal">
              Ejemplo integrador
            </p>
            <p className="mt-3 text-mist/80">
              Las <span className="font-semibold text-signal">vacunas</span>, donde convergen la
              investigación científica, la producción tecnológica y la logística de
              distribución innovadora.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-signal/10" />
          <img
            src="https://img.magnific.com/vector-gratis/bombilla-elementos-estacionarios_1308-128061.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Intersección entre ciencia, tecnología e innovación"
            className="w-full rounded-2xl object-cover shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
