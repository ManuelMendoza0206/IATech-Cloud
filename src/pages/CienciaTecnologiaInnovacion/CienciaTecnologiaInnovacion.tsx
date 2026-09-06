import { Hero } from '../../components/content';
import SectionNav from './sections/SectionNav';
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
    <div>
      <Hero
        subtitle="Fundamentos Teóricos"
        title="Ciencia, Tecnología"
        highlight="e Innovación"
        description="Exploración de conceptos clave y su impacto en la sociedad y la economía. El motor principal del progreso y el desarrollo humano."
        imageSrc="/images/fondo1.jpg"
        imageAlt="Ciencia, Tecnología e Innovación"
      />
      <div id="content-start" />
      <SectionNav />
      <div id="ciencia"><FundamentosCiencia /></div>
      <div id="tecnologia"><FundamentosTecnologia /></div>
      <div id="innovacion"><FundamentosInnovacion /></div>
      <div id="interseccion"><InterseccionCTI /></div>
      <div id="impacto"><ImpactoSocial /></div>
      <div id="politicas"><PoliticasPublicas /></div>
      <div id="tendencias"><TendenciasFuturas /></div>
      <Conclusiones />
    </div>
  );
}
