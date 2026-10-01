import { TwoColumnLayout, SectionHeader } from '../../../components/content';
import type { Fundamento } from '../types';

const DATA: Fundamento[] = [
  {
    title: 'Definición',
    text: 'Conocimiento sistemático y verificable obtenido a través del método científico, base de toda innovación.',
  },
  {
    title: 'Método Científico',
    text: 'Observación → Hipótesis → Experimentación → Análisis → Conclusión. Ciclo que garantiza evidencia reproducible.',
  },
  {
    title: 'Ramas',
    text: 'Ciencias naturales, sociales y formales, todas necesarias para entender sistemas complejos como la salud.',
  },
  {
    title: 'Ejemplos clave',
    text: 'Teoría de la Relatividad, descubrimiento del ADN y vacunas de ARN mensajero.',
  },
  {
    title: 'Ciencia aplicada',
    text: 'Convierte el conocimiento en soluciones: del laboratorio al hospital y a la nube.',
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
          <div key={item.title} className="border-l border-ink-950/10-2 border-ink-950/10 pl-5">
            <p className="font-neu-display text-lg sm:text-xl text-ink-950">{item.title}</p>
            <p className="mt-1 text-base sm:text-lg leading-relaxed text-ink-700/70">{item.text}</p>
          </div>
        ))}
      </div>
    </TwoColumnLayout>
  );
}
