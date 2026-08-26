const PILLARS = [
  {
    title: 'Escalabilidad',
    description: 'Infraestructura en la nube que crece con el ecosistema IATECH sin sacrificar estabilidad.',
  },
  {
    title: 'Resiliencia',
    description: 'Arquitecturas preparadas para absorber fallos y mantener el servicio clínico en marcha.',
  },
  {
    title: 'Alta disponibilidad',
    description: 'Continuidad operativa 24/7 para que el software médico nunca deje de responder.',
  },
  {
    title: 'Colaboración clínica',
    description: 'Acceso uniforme a la información de salud, sin fronteras geográficas entre equipos.',
  },
  {
    title: 'Excelencia técnica',
    description: 'Rendimiento, velocidad y despliegues que convierten a Cloud en referente interno.',
  },
  {
    title: 'Valor sostenible',
    description: 'Infraestructuras eficientes que maximizan la inversión de nuestros socios.',
  },
];

export default function Pilares() {
  return (
    <section id="pilares" className="relative overflow-hidden bg-navy-950 py-20 text-mist sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: 'radial-gradient(#38d6c8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-signal/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-4 border-b border-navy-700/60 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-signal/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
              Cómo lo hacemos realidad
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Pilares que sostienen el área
            </h2>
          </div>
          <p className="max-w-sm text-sm text-mist/65">
            Extraídos de nuestra misión y visión: el estándar con el que diseñamos,
            operamos e integramos cada servicio en la nube.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <li
              key={pillar.title}
              className="rounded-2xl border border-navy-700/70 bg-navy-900/70 p-6 backdrop-blur-sm transition hover:border-signal/50 hover:bg-navy-900"
            >
              <span className="font-mono text-xs text-signal">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-xl text-mist">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/70">{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
