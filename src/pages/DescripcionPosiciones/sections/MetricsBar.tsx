export default function MetricsBar() {
  const metrics = [
    {
      value: '4',
      label: 'Especialistas Clave',
      desc: '100% de cobertura en roles críticos del área',
      icon: (
        <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      value: '99.9%',
      label: 'Disponibilidad Objetivo',
      desc: 'Arquitecturas de alta resiliencia y planes DRP',
      icon: (
        <svg className="w-5 h-5 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      value: 'Multi-Cloud',
      label: 'Ecosistema Híbrido',
      desc: 'Capacidad operativa en AWS, Azure y Google Cloud',
      icon: (
        <svg className="w-5 h-5 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      value: 'FinOps',
      label: 'Gobernanza de Costos',
      desc: 'Control presupuestario y eficiencia de recursos',
      icon: (
        <svg className="w-5 h-5 text-[#D97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-8 border-b border-[#E2E8F0]">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border border-[#E2E8F0] bg-[#FFFFFF] p-4 sm:p-5 shadow-[0_1px_3px_rgba(15,23,42,0.03)] hover:border-[#93C5FD] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F1F5F9] group-hover:bg-[#EFF6FF] transition-colors">
                  {item.icon}
                </span>
                <span className="font-mono text-[10px] font-semibold text-[#64748B] uppercase tracking-wider">
                  MÉTRICA 0{idx + 1}
                </span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                {item.value}
              </h3>
              <p className="font-sans text-xs font-semibold text-[#2563EB] mt-0.5">
                {item.label}
              </p>
              <p className="text-[11px] text-[#64748B] leading-relaxed mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
