import { Hero } from '../../components/content';
import {
  ComponentesClave,
  GestionTalento,
  ProcesosGobernanza,
  HerramientasSoporte,
  Beneficios,
} from './sections';

export default function GestionTecnologia() {
  return (
    <main>
      <Hero
        subtitle="Gestión Estratégica"
        title="Gestión de"
        highlight="Tecnología"
        description="Proceso estratégico orientado a alinear la tecnología con los objetivos de negocio. Abarca la planificación, implementación y optimización de los recursos tecnológicos para maximizar el ROI y mitigar riesgos."
        imageSrc="/fondo2.png"
        imageAlt="Gestión de Tecnología"
      />
      <div id="content-start" />
      <ComponentesClave />
      <GestionTalento />
      <ProcesosGobernanza />
      <HerramientasSoporte />
      <Beneficios />
    </main>
  );
}
