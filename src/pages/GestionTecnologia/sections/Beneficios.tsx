import { TwoColumnLayout, SectionHeader } from '../../../components/content';
import type { Beneficio } from '../types';

const DATA: Beneficio[] = [
  { title: 'Eficiencia operativa', text: 'Optimización de recursos tecnológicos y reducción de costos operativos.', metric: '↓ Costos' },
  { title: 'Toma de decisiones', text: 'Explotación inteligente de datos para orientar la innovación.', metric: '↑ Datos' },
  { title: 'Ventaja competitiva', text: 'Mejor posicionamiento en el mercado y mayor satisfacción de usuarios.', metric: '↑ ROI' },
];

export function Beneficios() {
  return (
    <TwoColumnLayout
      imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmC-v9bhzvqpRT1lnBqQmFfogZ5NsIOWvLfvVdtQrbV9s-kTcULjSo9A&s=10"
      imageAlt="Beneficios de la gestión tecnológica"
      bg="white"
    >
      <SectionHeader
        number="05"
        title="Beneficios Organizacionales"
        description="Una gestión tecnológica efectiva se traduce en resultados concretos para la organización."
      />

      <div className="mt-8 space-y-6">
        {DATA.map((b) => (
          <div key={b.title} className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-signal/10 font-display text-sm text-signal">
              {b.metric}
            </span>
            <div>
              <p className="font-display text-base text-navy-900">{b.title}</p>
              <p className="mt-1 text-navy-700/70">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </TwoColumnLayout>
  );
}
