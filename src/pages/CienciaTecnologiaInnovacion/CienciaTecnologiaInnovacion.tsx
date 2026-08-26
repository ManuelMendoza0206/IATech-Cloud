import { Hero } from '../../components/content';
import {
  FundamentosCiencia,
  FundamentosTecnologia,
  FundamentosInnovacion,
  InterseccionCTI,
  ImpactoSocial,
  PoliticasPublicas,
  TendenciasFuturas,
  Conclusiones,
} from './sections';

export default function CienciaTecnologiaInnovacion() {
  return (
    <main>
      <Hero
        subtitle="Fundamentos Teóricos"
        title="Ciencia, Tecnología"
        highlight="e Innovación"
        description="Exploración de conceptos clave y su impacto en la sociedad y la economía. El motor principal del progreso y el desarrollo humano."
        imageSrc="/fondo1.png"
        imageAlt="Ciencia, Tecnología e Innovación"
      />
      <div id="content-start" />
      <FundamentosCiencia />
      <FundamentosTecnologia />
      <FundamentosInnovacion />
      <InterseccionCTI />
      <ImpactoSocial />
      <PoliticasPublicas />
      <TendenciasFuturas />
      <Conclusiones />
    </main>
  );
}
