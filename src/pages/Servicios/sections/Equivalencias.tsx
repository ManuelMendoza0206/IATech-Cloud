import { SectionHeader } from '../../../components/content';

const FILAS = [
  { capa: 'Máquinas virtuales', aws: 'Amazon EC2', azure: 'Virtual Machines', gcp: 'Compute Engine' },
  { capa: 'Contenedores', aws: 'Amazon EKS', azure: 'Azure Kubernetes Service', gcp: 'Google Kubernetes Engine' },
  { capa: 'Funciones', aws: 'AWS Lambda', azure: 'Azure Functions', gcp: 'Cloud Functions' },
  { capa: 'Objetos', aws: 'Amazon S3', azure: 'Blob Storage', gcp: 'Cloud Storage' },
  { capa: 'Base relacional', aws: 'Amazon RDS', azure: 'Azure SQL', gcp: 'Cloud SQL' },
  { capa: 'Red privada', aws: 'Amazon VPC', azure: 'Virtual Network', gcp: 'Virtual Private Cloud' },
  { capa: 'Identidad y acceso', aws: 'AWS IAM', azure: 'Microsoft Entra ID', gcp: 'Cloud IAM' },
  { capa: 'Monitoreo', aws: 'Amazon CloudWatch', azure: 'Azure Monitor', gcp: 'Cloud Monitoring' },
  { capa: 'Registro de imágenes', aws: 'Amazon ECR', azure: 'Azure Container Registry', gcp: 'Artifact Registry' },
];

export default function Equivalencias() {
  return (
    <section id="equivalencias" className="scroll-mt-24 border-b border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="03"
          title="El mismo servicio, tres nombres"
          description="Una carga clínica se describe por su capa —cómputo, datos, red— y después se traduce al servicio de la nube donde va a vivir."
        />

        <div className="mt-12 overflow-x-auto border border-ink-15">
          <table className="w-full min-w-[44rem] border-collapse text-left">
            <caption className="sr-only">
              Equivalencia de servicios entre Amazon Web Services, Microsoft Azure y Google Cloud
            </caption>
            <thead>
              <tr className="bg-ink text-paper">
                <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                  Capa
                </th>
                <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                  AWS
                </th>
                <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                  Azure
                </th>
                <th scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest sm:px-6">
                  Google Cloud
                </th>
              </tr>
            </thead>
            <tbody>
              {FILAS.map((fila) => (
                <tr key={fila.capa} className="border-b border-ink-15 bg-surface last:border-0 even:bg-paper">
                  <th scope="row" className="px-4 py-4 text-sm font-semibold text-ink sm:px-6">
                    {fila.capa}
                  </th>
                  <td className="px-4 py-4 text-sm text-ink-60 sm:px-6">{fila.aws}</td>
                  <td className="px-4 py-4 text-sm text-ink-60 sm:px-6">{fila.azure}</td>
                  <td className="px-4 py-4 text-sm text-ink-60 sm:px-6">{fila.gcp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 max-w-[68ch] text-sm leading-relaxed text-ink-60">
          Los nombres son los servicios administrados de cada plataforma. La pieza que cruza las
          tres nubes sigue siendo la misma: contenedores, infraestructura como código y un
          inventario único de costo.
        </p>
      </div>
    </section>
  );
}
