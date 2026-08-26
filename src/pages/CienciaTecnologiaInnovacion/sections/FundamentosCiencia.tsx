import { TwoColumnLayout, SectionHeader } from '../../../components/content';
import type { Fundamento } from '../types';

const DATA: Fundamento[] = [
  {
    title: 'Definición',
    text: 'Conocimiento sistemático y verificable obtenido a través del método científico.',
  },
  {
    title: 'Método Científico',
    text: 'Observación → Hipótesis → Experimentación → Conclusión.',
  },
  {
    title: 'Ramas',
    text: 'Ciencias naturales, sociales y formales.',
  },
  {
    title: 'Ejemplos clave',
    text: 'Teoría de la Relatividad y el descubrimiento del ADN.',
  },
];

export function FundamentosCiencia() {
  return (
    <TwoColumnLayout
      imageSrc="https://cdn.aicad.es/asset/img/4/que-es-el-metodo-cientifico.png"
      imageAlt="El método científico: observación, hipótesis, experimentación, conclusión"
      bg="white"
    >
      <SectionHeader number="01" title="Fundamentos de la Ciencia" />
      <div className="mt-8 space-y-6">
        {DATA.map((item) => (
          <div key={item.title} className="border-l-2 border-signal pl-5">
            <p className="font-display text-base text-navy-900">{item.title}</p>
            <p className="mt-1 text-navy-700/70">{item.text}</p>
          </div>
        ))}
      </div>
    </TwoColumnLayout>
  );
}
