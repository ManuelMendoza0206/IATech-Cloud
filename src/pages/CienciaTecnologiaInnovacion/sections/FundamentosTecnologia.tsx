import { TwoColumnLayout, SectionHeader } from '../../../components/content';
import type { TipoItem } from '../types';

const DATA: TipoItem[] = [
  { label: 'Tecnología dura', desc: 'Hardware — dispositivos físicos, maquinaria y equipamiento médico.' },
  { label: 'Tecnología blanda', desc: 'Software — aplicaciones, sistemas, datos y algoritmos de IA.' },
  { label: 'Tecnología de gestión', desc: 'Procesos y metodologías para optimizar recursos y gobernar el cambio.' },
  { label: 'Tecnología emergente', desc: 'IA generativa, nube híbrida y edge computing que redefinen lo posible.' },
];

export function FundamentosTecnologia() {
  return (
    <TwoColumnLayout
      imageSrc="/images/cti-02.jpg"
      imageAlt="Tecnología: hardware, software y gestión"
      imagePending="Fotografía de un banco de pruebas técnicas: placa, instrumental y una computadora de escritorio en el mismo encuadre."
      imagePosition="left"
      bg="mist"
    >
      <SectionHeader number="02" title="Fundamentos de la Tecnología" />
      <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-60/80">
        Aplicación práctica del conocimiento científico orientada a resolver
        problemas concretos. El proceso de desarrollo sigue una cadena:
        Diseño → Prototipado → Pruebas → Producción.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {DATA.map((tipo) => (
          <div
            key={tipo.label}
            className="swiss-cell p-5"
          >
            <p className="font-display text-base sm:text-lg text-ink">{tipo.label}</p>
            <p className="mt-2 text-base leading-relaxed text-ink-60/70">{tipo.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-base text-ink-60/60">
        <span className="font-semibold text-ink">Ejemplos:</span> Internet,
        Inteligencia Artificial y Biotecnología.
      </p>
    </TwoColumnLayout>
  );
}
