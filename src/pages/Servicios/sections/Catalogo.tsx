import { SectionHeader } from '../../../components/content';

const LINEAS = [
  {
    icon: 'bx-server',
    title: 'Cómputo',
    kicker: 'Instancia VM',
    image: '/images/servicios/computo.jpg',
    imageAlt: 'Placa con procesador, el cómputo detrás de una instancia virtual',
    text: 'Servidores virtuales para aplicaciones clínicas que necesitan un sistema operativo propio, con tamaño ajustado al ambiente donde corren.',
  },
  {
    icon: 'bx-package',
    title: 'Contenedores',
    kicker: 'Kubernetes',
    image: '/images/servicios/contenedores.jpg',
    imageAlt: 'Contenedores apilados en un puerto, la misma idea que un contenedor de software',
    text: 'Cargas empaquetadas que se despliegan del mismo modo en AWS, Azure y Google Cloud. El runtime común del área es Kubernetes.',
  },
  {
    icon: 'bx-bolt-circle',
    title: 'Serverless',
    kicker: 'Funciones',
    image: '/images/servicios/serverless.jpg',
    imageAlt: 'Código en una pantalla, el cuerpo de una función que se ejecuta bajo demanda',
    text: 'Tareas cortas que se ejecutan bajo demanda. Sirven para integraciones y procesos puntuales, sin dejar una máquina encendida.',
  },
  {
    icon: 'bx-data',
    title: 'Datos',
    kicker: 'SQL y NoSQL',
    image: '/images/servicios/datos.jpg',
    imageAlt: 'Archivo de registros ordenados, la capa donde se guarda la información',
    text: 'Bases relacionales y no relacionales que guardan la información de las soluciones médicas. Es la capa de mayor peso en el inventario.',
  },
  {
    icon: 'bx-archive',
    title: 'Almacenamiento',
    kicker: 'Objetos y discos',
    image: '/images/servicios/almacenamiento.jpg',
    imageAlt: 'Disco duro abierto, el soporte físico del almacenamiento de objetos',
    text: 'Buckets para objetos, respaldos e imágenes, y discos asociados a las instancias que los necesitan cerca del cómputo.',
  },
  {
    icon: 'bx-network-chart',
    title: 'Red',
    kicker: 'VPC y balanceo',
    image: '/images/servicios/red.jpg',
    imageAlt: 'Cables conectados a un switch dentro de un rack de red',
    text: 'Redes privadas, balanceadores y la conectividad entre entornos. Separa producción, QA y desarrollo antes de exponer un servicio.',
  },
  {
    icon: 'bx-lock-alt',
    title: 'Identidad y acceso',
    kicker: 'IAM',
    image: '/images/servicios/identidad.jpg',
    imageAlt: 'Candado sobre un teclado, el control de quién entra a un recurso',
    text: 'Quién puede crear, leer o borrar un recurso. El control de acceso acompaña el ciclo de vida del servicio y protege la información clínica.',
  },
  {
    icon: 'bx-pulse',
    title: 'Observabilidad',
    kicker: 'Monitoreo y respaldo',
    image: '/images/servicios/observabilidad.jpg',
    imageAlt: 'Tablero de métricas en una pantalla, la observabilidad del servicio',
    text: 'Métricas, alertas, copias de seguridad y recuperación ante desastres, para que la continuidad del servicio se pueda comprobar.',
  },
  {
    icon: 'bx-git-branch',
    title: 'Integración y entrega',
    kicker: 'CI/CD e IaC',
    image: '/images/servicios/integracion.jpg',
    imageAlt: 'Editor de código con control de versiones, el pipeline de entrega',
    text: 'Pipelines de entrega continua e infraestructura como código. El despliegue queda descrito, versionado y repetible.',
  },
];

export default function Catalogo() {
  return (
    <section id="catalogo" className="scroll-mt-24 border-b border-ink bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="02"
          title="Lo que el área opera"
          description="El inventario agrupa el gasto por tipo de recurso. Estas líneas salen de ese inventario y del ecosistema técnico del Área de Servicios Cloud e Integración."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LINEAS.map((linea) => (
            <li key={linea.title} className="swiss-cell group flex h-full flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1">
              <img
                src={linea.image}
                alt={linea.imageAlt}
                width={1400}
                height={800}
                loading="lazy"
                className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="flex flex-1 flex-col p-6">
              <span className="swiss-icon flex h-11 w-11 items-center justify-center text-xl text-accent transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                <i className={`bx ${linea.icon}`} aria-hidden="true" />
              </span>
              <p className="swiss-label mt-5">{linea.kicker}</p>
              <h3 className="mt-2 font-display text-xl font-extrabold leading-tight text-ink">
                {linea.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-60">
                {linea.text}
              </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
