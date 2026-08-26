export default function TechEcosystem() {
  const domains = [
    {
      category: 'Plataformas Multi-Cloud',
      icon: (
        <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      tags: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)', 'Entornos Híbridos'],
    },
    {
      category: 'Contenedores & Arquitectura',
      icon: (
        <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      tags: ['Docker', 'Kubernetes (K8s)', 'Microservicios', 'Bases de Datos SQL/NoSQL'],
    },
    {
      category: 'Automatización & DevOps',
      icon: (
        <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      tags: ['Pipelines CI/CD', 'Infraestructura como Código (IaC)', 'Telemetría & Observabilidad', 'Control de Versiones Git'],
    },
    {
      category: 'Seguridad, DRP & FinOps',
      icon: (
        <svg className="w-5 h-5 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      tags: ['Security by Design', 'Control de Acceso IAM', 'Disaster Recovery (DRP)', 'FinOps & Cost Optimization'],
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-14 lg:py-16 border-t border-[#E2E8F0]">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#E2E8F0]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-3 py-0.5 text-xs font-medium text-[#1D4ED8] border border-[#DBEAFE]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
              Estándares Técnicos
            </span>
            <h2 className="mt-2 font-sans text-2xl sm:text-3xl text-[#0F172A] font-semibold tracking-tight">
              Ecosistema Tecnológico del Área
            </h2>
          </div>
          <p className="text-xs text-[#64748B] max-w-xs sm:text-right">
            Capacidades, plataformas y estándares consolidados que gestiona el departamento.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {domains.map((dom, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] p-5 shadow-[0_1px_3px_rgba(15,23,42,0.03)] hover:border-[#93C5FD] hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EFF6FF] border border-[#DBEAFE]">
                  {dom.icon}
                </span>
                <h3 className="font-sans text-sm font-semibold text-[#0F172A]">
                  {dom.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {dom.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-[#F1F5F9] border border-[#E2E8F0] px-2.5 py-1 text-xs text-[#475569] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
