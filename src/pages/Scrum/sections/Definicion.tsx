import { TwoColumnLayout, SectionHeader } from '../../../components/content';

export function Definicion() {
  return (
    <TwoColumnLayout
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5PQ2Y3Vlw8_jjzWD6zVxa9Vrzu0kbEYryfVjwkzI9A&s=10"
      imageAlt="Fundamento teórico de Scrum: empirismo y pensamiento Lean"
      bg="white"
    >
      <SectionHeader
        number="01"
        title="Definición y Fundamento Teórico"
        description="Scrum es un framework adaptativo, iterativo e incremental para problemas complejos. No asume predictibilidad absoluta — se basa en evidencia y flujo de valor."
      />
      <div className="mt-8 space-y-6">
        <div className="border-l-2 border-signal pl-5">
          <p className="font-display text-base text-navy-900">¿Qué es Scrum?</p>
          <p className="mt-1 text-navy-700/70">
            Marco de trabajo que permite a equipos autoorganizados entregar productos de alto valor de
            forma flexible y colaborativa, a diferencia del modelo en cascada (waterfall) lineal.
          </p>
        </div>
        <div className="border-l-2 border-signal pl-5">
          <p className="font-display text-base text-navy-900">Empirismo</p>
          <p className="mt-1 text-navy-700/70">
            El conocimiento proviene de la experiencia. Las decisiones se basan en observación directa y
            evidencia comprobada, no en suposiciones previas.
          </p>
        </div>
        <div className="border-l-2 border-signal pl-5">
          <p className="font-display text-base text-navy-900">Pensamiento Lean</p>
          <p className="mt-1 text-navy-700/70">
            Reducir desperdicio, optimizar el flujo y concentrarse estrictamente en lo que aporta valor
            real al usuario o cliente.
          </p>
        </div>
      </div>
      <div className="mt-8 rounded-xl border border-navy-900/10 bg-mist/50 p-5">
        <p className="font-mono text-xs uppercase tracking-widest text-signal">Idea clave</p>
        <p className="mt-2 text-sm text-navy-700/80">
          Scrum no predice el futuro — lo <span className="font-semibold text-navy-900">inspecciona y adapta</span>{' '}
          en ciclos cortos para minimizar riesgo y costo del cambio.
        </p>
      </div>
    </TwoColumnLayout>
  );
}
