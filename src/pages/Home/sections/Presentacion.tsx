const HIGHLIGHTS = [
  {
    title: 'Alta disponibilidad',
    description: 'Arquitecturas resilientes que aseguran la continuidad del servicio clínico.',
  },
  {
    title: 'Actualizaciones fluidas',
    description: 'Despliegues continuos que no interrumpen el trabajo de los equipos médicos.',
  },
  {
    title: 'Colaboración sin fronteras',
    description: 'Acceso uniforme a la información de salud, sin importar la ubicación.',
  },
];

export default function Presentacion() {
  return (
    <section id="presentacion" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-navy-700/60">
            Sobre el área
          </span>

          <h2 className="mt-4 font-display text-3xl text-navy-900 sm:text-4xl">
            El motor tecnológico detrás de cada despliegue clínico
          </h2>

          <p className="mt-6 text-navy-700/80">
            El Área de Servicios Cloud e Integración de IATECH optimiza y despliega los
            servicios en la nube de nuestras soluciones médicas. La computación en la
            nube y el acceso rápido a internet han revolucionado el almacenamiento y el
            acceso a los datos, facilitando actualizaciones fluidas y la colaboración
            activa entre equipos distribuidos.
          </p>

          <p className="mt-4 text-navy-700/80">
            Trabajamos para que cada institución médica acceda a su información sin
            fronteras geográficas, con infraestructuras eficientes y sostenibles que
            maximizan el valor de cada inversión.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item.title} className="border-l-2 border-signal pl-4">
                <p className="font-display text-base text-navy-900">{item.title}</p>
                <p className="mt-1 text-sm text-navy-700/70">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-mist" />
          <img
            src="/images/cloud-equipo.jpg"
            alt="Equipo del área Cloud de IATECH"
            className="h-[480px] w-full rounded-2xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 rounded-xl bg-navy-900 px-6 py-4 text-mist shadow-lg">
            <p className="font-display text-2xl text-signal">99.9%</p>
            <p className="font-mono text-xs uppercase tracking-widest text-mist/70">
              Disponibilidad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}