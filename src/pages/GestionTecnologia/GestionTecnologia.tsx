import { Hero } from '../../components/content';
import { Reveal } from '../../components/ui/Reveal';
import {
  ComponentesClave,
  GestionTalento,
  ProcesosGobernanza,
  HerramientasSoporte,
  Beneficios,
  GobernanzaTi,
  CalidadProducto,
  FinOps,
} from './sections';

export default function GestionTecnologia() {
  return (
    <div>
      <Hero
        subtitle="Gestión Estratégica"
        title="Gestión de"
        highlight="Tecnología"
        description="Proceso estratégico orientado a alinear la tecnología con los objetivos de negocio. Abarca la planificación, implementación y optimización de los recursos tecnológicos para maximizar el ROI y mitigar riesgos."
        backgroundSrc="/images/fondo-gestion.jpg"
        backgroundAlt="Gestión de Tecnología"
      />
      <div id="content-start" />
      <Reveal stagger>
        <ComponentesClave />
      </Reveal>
      <GestionTalento />
      <Reveal stagger>
        <ProcesosGobernanza />
      </Reveal>
      <HerramientasSoporte />
      <Beneficios />
      <GobernanzaTi />
      <FinOps />
      <CalidadProducto />
    </div>
  );
}
