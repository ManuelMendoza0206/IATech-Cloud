import { SectionHeader } from '../../../components/content';
import type { Herramienta } from '../types';

const DATA: Herramienta[] = [
  { title: 'Gestión de proyectos', desc: 'Plataformas de software para planificar, asignar recursos y controlar avances en tiempo real.', color: 'border-signal' },
  { title: 'Monitorización y Service Desk', desc: 'Supervisión de infraestructura, alertas proactivas y soporte técnico operativo continuo.', color: 'border-steel' },
  { title: 'Analítica de datos', desc: 'Plataformas de Business Intelligence e IA para decisiones informadas y predictivas.', color: 'border-signal' },
  { title: 'Seguridad', desc: 'Control de accesos, gestión de riesgos, respaldo y protección integral de activos.', color: 'border-steel' },
  { title: 'Automatización ITSM', desc: 'Flujos automáticos de tickets, cambios y despliegues para reducir errores manuales.', color: 'border-signal' },
  { title: 'Colaboración DevOps', desc: 'Integración entre desarrollo y operaciones con CI/CD, observabilidad y entrega continua.', color: 'border-steel' },
];

export function HerramientasSoporte() {
  return (
    <section className="bg-ice-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="04"
          title="Herramientas de Soporte"
          description="Las plataformas que sostienen la operación tecnológica diaria."
          variant="dark"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {DATA.map((h) => (
            <div
              key={h.title}
              className={`rounded-2xl border-l border-ink-950/10-2 ${h.color} bg-ice-50/5 p-6 backdrop-blur-sm`}
            >
              <p className="font-display text-xl text-ink">{h.title}</p>
              <p className="mt-2 text-base sm:text-lg leading-relaxed text-ink/60">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
