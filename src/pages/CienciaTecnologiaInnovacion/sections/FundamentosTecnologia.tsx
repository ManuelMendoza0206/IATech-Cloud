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
      imageSrc="https://media.istockphoto.com/id/1336601182/es/vector/concepto-de-reparaci%C3%B3n-de-computadoras.jpg?s=612x612&w=is&k=20&c=hqZIlOPtHTzEAJJFBWzOZU04BlYfKE53lwr9dsMvBNA="
      imageAlt="Tecnología: hardware, software y gestión"
      imagePosition="left"
      bg="mist"
    >
      <SectionHeader number="02" title="Fundamentos de la Tecnología" />
      <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-700/80">
        Aplicación práctica del conocimiento científico orientada a resolver
        problemas concretos. El proceso de desarrollo sigue una cadena:
        Diseño → Prototipado → Pruebas → Producción.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {DATA.map((tipo) => (
          <div
            key={tipo.label}
            className="neu-raised rounded-xl p-5"
          >
            <p className="font-neu-display text-base sm:text-lg text-ink-950">{tipo.label}</p>
            <p className="mt-2 text-base leading-relaxed text-ink-700/70">{tipo.desc}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-base text-ink-700/60">
        <span className="font-semibold text-ink-950">Ejemplos:</span> Internet,
        Inteligencia Artificial y Biotecnología.
      </p>
    </TwoColumnLayout>
  );
}
