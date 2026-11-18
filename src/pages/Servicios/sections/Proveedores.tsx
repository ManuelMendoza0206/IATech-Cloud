import { Link } from 'react-router-dom';
import { SectionHeader } from '../../../components/content';

const PROVEEDORES = [
  {
    code: 'AWS',
    name: 'Amazon Web Services',
    icon: 'bx-cloud',
    image: '/images/servicios/aws.jpg',
    imageAlt: 'Pasillo de un centro de datos con filas de racks a ambos lados',
    summary:
      'Cómputo, almacenamiento de objetos, bases de datos y funciones. En el inventario del área aparece como instancias, buckets y cargas serverless.',
    services: ['EC2', 'EKS', 'Lambda', 'S3', 'RDS', 'VPC', 'IAM', 'CloudWatch'],
    regions: 'us-east-1 · eu-west-1 · sa-east-1 · us-west-2',
  },
  {
    code: 'Azure',
    name: 'Microsoft Azure',
    icon: 'bx-windows',
    image: '/images/servicios/azure.jpg',
    imageAlt: 'Servidores en rack con luces de estado, la capacidad de cómputo de la nube',
    summary:
      'Máquinas virtuales, contenedores e identidad. El tablero de costo ya nombra regiones de Azure junto al resto del gasto cloud.',
    services: ['Virtual Machines', 'AKS', 'Functions', 'Blob Storage', 'Azure SQL', 'Virtual Network', 'Entra ID', 'Monitor'],
    regions: 'eastus · brazilsouth · westeurope',
  },
  {
    code: 'GCP',
    name: 'Google Cloud',
    icon: 'bx-globe',
    image: '/images/servicios/gcp.jpg',
    imageAlt: 'La Tierra de noche, las regiones donde corre la nube',
    summary:
      'Motor de cómputo, Kubernetes administrado y almacenamiento. Comparte el mismo inventario de recursos que AWS y Azure.',
    services: ['Compute Engine', 'GKE', 'Cloud Functions', 'Cloud Storage', 'Cloud SQL', 'VPC', 'Cloud IAM', 'Cloud Monitoring'],
    regions: 'europe-west1 · southamerica-east1 · us-central1',
  },
];

export default function Proveedores() {
  return (
    <section id="proveedores" className="scroll-mt-24 border-b border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="01"
          title="Tres nubes, un mismo inventario"
          description="El tablero de costo del área reparte el gasto entre AWS, Azure y Google Cloud. Cada plataforma cubre las mismas capas; cambian el nombre del servicio y la región donde corre."
        />

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {PROVEEDORES.map((proveedor) => (
            <li key={proveedor.code} className="swiss-cell flex h-full flex-col overflow-hidden">
              <img
                src={proveedor.image}
                alt={proveedor.imageAlt}
                width={1400}
                height={800}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-sm font-black uppercase tracking-[0.18em] text-accent">
                  {proveedor.code}
                </span>
                <span className="swiss-icon flex h-11 w-11 items-center justify-center text-xl text-accent">
                  <i className={`bx ${proveedor.icon}`} aria-hidden="true" />
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight tracking-[-0.03em] text-ink">
                {proveedor.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-60 sm:text-base">{proveedor.summary}</p>

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-ink-15 pt-5">
                {proveedor.services.map((service) => (
                  <li key={service}>
                    <span className="swiss-chip inline-flex px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <p className="swiss-label">Regiones en el inventario</p>
                <p className="mt-2 font-mono text-xs leading-relaxed tracking-wide text-ink">{proveedor.regions}</p>
              </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-[68ch] border-l-2 border-ink pl-5 text-sm leading-relaxed text-ink-60 sm:text-base">
          Esas regiones salen del tablero de costo cloud. El desglose por proveedor, tipo de recurso
          y ambiente está en{' '}
          <Link to="/tableau" className="swiss-source">
            Tableau
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
