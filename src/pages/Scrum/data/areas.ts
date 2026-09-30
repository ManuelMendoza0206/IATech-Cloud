export interface AreaObjective {
  id: string;
  title: string;
  short: string;
  objective: string;
  icon: string;
}

export const AREAS: AreaObjective[] = [
  {
    id: 'gerente-cloud',
    title: 'Gerente de Área Cloud',
    short: 'GC',
    objective:
      'Liderar la estrategia integral del área Cloud alineada a los objetivos del negocio, garantizando la gobernanza, alta disponibilidad, seguridad y optimización financiera (FinOps) de las plataformas, dirigiendo al equipo multidisciplinario y asegurando la entrega de valor continuo y la evolución escalable de los servicios digitales.',
    icon: 'bx-briefcase',
  },
  {
    id: 'arquitecto-cloud',
    title: 'Arquitecto de Soluciones Cloud',
    short: 'ARC',
    objective:
      'Diseñar arquitecturas Cloud escalables, resilientes y seguras que traduzcan los requerimientos de producto y desarrollo en soluciones técnicas eficientes, definiendo patrones, estándares de integración y estrategias de alta disponibilidad y recuperación ante desastres para optimizar el rendimiento y los costos operativos.',
    icon: 'bx-layer',
  },
  {
    id: 'admin-devops',
    title: 'Administrador DevOps',
    short: 'DevOps',
    objective:
      'Automatizar y asegurar el ciclo de vida de entrega continua (CI/CD) mediante Infraestructura como Código (IaC), contenerización y observabilidad, actuando como puente entre desarrollo e infraestructura para lograr despliegues ágiles, estables y trazables con máxima eficiencia y mínima tasa de error en producción.',
    icon: 'bx-git-branch',
  },
  {
    id: 'admin-infraestructura',
    title: 'Administrador de Infraestructura Cloud',
    short: 'INFRA',
    objective:
      'Diseñar, gestionar y optimizar la infraestructura cloud de la empresa con el objetivo de garantizar la alta disponibilidad, escalabilidad y seguridad de los servicios digitales, para maximizar la eficiencia operativa y de costos, permitir despliegues ágiles en los equipos de desarrollo y asegurar la continuidad del negocio.',
    icon: 'bx-server',
  },
];
