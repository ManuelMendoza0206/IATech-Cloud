import { SectionHeader } from '../../../components/content';
import type { Componente } from '../types';

const DATA: Componente[] = [
  {
    title: 'Estrategia Tecnológica',
    focus: 'Alineación estratégica',
    critical: 'Sincronización con metas corporativas y adopción de tecnologías emergentes.',
    icon: 'bx-target-lock',
  },
  {
    title: 'Infraestructura',
    focus: 'Base operativa',
    critical: 'Hardware, software, redes y centros de datos con alta disponibilidad y eficiencia.',
    icon: 'bx-desktop',
  },
  {
    title: 'Aplicaciones',
    focus: 'Soluciones de software',
    critical: 'Ciclo de vida, integración entre sistemas y garantía de rendimiento y seguridad.',
    icon: 'bx-mobile-alt',
  },
  {
    title: 'Datos y Talento',
    focus: 'Activos y capital humano',
    critical: 'Analítica para decisiones, cumplimiento de privacidad y retención de especialistas.',
    icon: 'bx-group',
  },
];

export function ComponentesClave() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader number="01" title="Componentes Clave" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {DATA.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-navy-900/10 bg-mist/50 p-8 transition-shadow hover:shadow-lg"
            >
              <i className={`bx ${c.icon} text-3xl text-signal`} />
              <p className="mt-4 font-display text-xl text-navy-900">{c.title}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-signal">
                {c.focus}
              </p>
              <p className="mt-4 text-navy-700/80">{c.critical}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
