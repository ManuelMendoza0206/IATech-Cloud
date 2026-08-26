import { SectionHeader } from '../../../components/content';
import type { Herramienta } from '../types';

const DATA: Herramienta[] = [
  { title: 'Gestión de proyectos', desc: 'Plataformas de software para planificar, asignar recursos y controlar avances.', color: 'border-signal' },
  { title: 'Monitorización y Service Desk', desc: 'Herramientas de supervisión de infraestructura y soporte técnico operativo.', color: 'border-navy-700' },
  { title: 'Analítica de datos', desc: 'Plataformas de Business Intelligence para la toma de decisiones informadas.', color: 'border-signal' },
  { title: 'Seguridad', desc: 'Soluciones para control de accesos, gestión de riesgos y protección de activos.', color: 'border-navy-700' },
];

export function HerramientasSoporte() {
  return (
    <section className="bg-navy-900 py-24 sm:py-32">
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
              className={`rounded-2xl border-l-4 ${h.color} bg-white/5 p-6 backdrop-blur-sm`}
            >
              <p className="font-display text-lg text-mist">{h.title}</p>
              <p className="mt-2 text-sm text-mist/60">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
