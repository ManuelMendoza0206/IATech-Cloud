import { SectionHeader, VideoEmbed } from '../../../components/content';
import type { Componente } from '../types';

const DATA: Componente[] = [
  {
    title: 'Estrategia Tecnológica',
    focus: 'Alineación estratégica',
    critical: 'Sincronización con metas corporativas, hoja de ruta tecnológica y adopción de tecnologías emergentes.',
    icon: 'bx-target-lock',
  },
  {
    title: 'Infraestructura',
    focus: 'Base operativa',
    critical: 'Hardware, software, redes y centros de datos con alta disponibilidad, escalabilidad y eficiencia.',
    icon: 'bx-desktop',
  },
  {
    title: 'Aplicaciones',
    focus: 'Soluciones de software',
    critical: 'Ciclo de vida completo, integración entre sistemas y garantía de rendimiento, seguridad y usabilidad.',
    icon: 'bx-mobile-alt',
  },
  {
    title: 'Datos y Talento',
    focus: 'Activos y capital humano',
    critical: 'Analítica para decisiones basadas en datos, cumplimiento de privacidad y retención de especialistas clave.',
    icon: 'bx-group',
  },
  {
    title: 'Seguridad y Gobernanza',
    focus: 'Confianza operativa',
    critical: 'Gestión de riesgos, control de accesos, marcos ITIL y COBIT, y mejora continua de procesos.',
    icon: 'bx-shield-quarter',
  },
  {
    title: 'Innovación y Vigilancia',
    focus: 'Evolución constante',
    critical: 'Vigilancia tecnológica, evaluación de tendencias y transferencia de nuevas soluciones al negocio.',
    icon: 'bx-bulb',
  },
];

export function ComponentesClave() {
  return (
    <section className="bg-neu-base py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader number="01" title="Componentes Clave" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {DATA.map((c) => (
            <div
              key={c.title}
              className="neu-raised reveal group rounded-2xl p-6 transition-shadow"
            >
              <i className={`bx ${c.icon} text-3xl text-signal`} />
              <p className="mt-4 font-neu-display text-xl sm:text-2xl text-ink-950">{c.title}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-signal">
                {c.focus}
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-700">{c.critical}</p>
            </div>
          ))}
        </div>

        <VideoEmbed
          src="https://www.youtube.com/embed/hYJ_YBo_djg"
          title="Gestión de tecnología: conceptos clave"
        />
      </div>
    </section>
  );
}
