export interface Position {
  id: string;
  title: string;
  identification: {
    category: string;
    department: string;
    holders: number;
    schedule: string;
  };
  purpose: string[];
  efficiencyAreas: string[];
  functions: string[];
  relationships: {
    hierarchical: string;
    functional: string;
  };
  responsibilities: string[];
  conditions: {
    workConditions: string;
    risks: string;
  };
  requirements: {
    education: string;
    experience: string;
    technicalKnowledge?: string;
    certifications?: string;
    skills: string;
  };
}

export const POSITIONS: Position[] = [
  {
    id: 'gerente-cloud',
    title: 'Gerente de Área Cloud',
    identification: {
      category: 'Directivo / Gerencial',
      department: 'Tecnología e Infraestructura Cloud',
      holders: 1,
      schedule: 'Mañana y tarde',
    },
    purpose: [
      'Liderar la estrategia, arquitectura e infraestructura de cómputo en la nube de la organización.',
      'Garantizar la alta disponibilidad, seguridad, escalabilidad y optimización de costos (FinOps) de las plataformas Cloud.',
      'Dirigir y coordinar al equipo técnico de Cloud (Arquitectura, DevOps e Infraestructura) para respaldar las necesidades operativas y de producto.',
      'Administrar los presupuestos y recursos materiales asignados a los proveedores de servicios en la nube (AWS, Azure, GCP, etc.).',
    ],
    efficiencyAreas: [
      'Alta disponibilidad, escalabilidad y seguridad del entorno Cloud.',
      'Optimización del presupuesto cloud y eficiencia operativa.',
      'Automatización de despliegues e implementación de prácticas DevOps / DevSecOps.',
      'Liderazgo estratégico y gestión efectiva del talento humano del área cloud.',
    ],
    functions: [
      'Definir y supervisar la visión estratégica y la arquitectura de soluciones Cloud de la empresa.',
      'Coordinar los roles técnicos (Arquitecto de Soluciones, Administrador DevOps y Administrador de Infraestructura Cloud).',
      'Monitorear el rendimiento global de los entornos multi-cloud o híbridos y ejecutar planes de contingencia.',
      'Controlar los costos operativos en la nube asegurando la entrega de proyectos dentro del presupuesto.',
      'Tomar decisiones críticas ante incidentes de infraestructura, continuidad del negocio o ciberseguridad.',
    ],
    relationships: {
      hierarchical: 'Reporta a la Dirección de Tecnología (CTO).',
      functional:
        'Supervisa directamente al Arquitecto de Soluciones Cloud, Administrador DevOps y Administrador de Infraestructura Cloud. Coordina con los líderes de IA, Producto y Desarrollo.',
    },
    responsibilities: [
      'Control presupuestario y optimización financiera de contratos con proveedores cloud.',
      'Garantizar confidencialidad, privacidad y cumplimiento regulatorio de la data en la nube.',
      'Garantizar SLAs e infraestructura para el despliegue de productos y sistemas de IA.',
    ],
    conditions: {
      workConditions:
        'Entorno corporativo/oficina con soporte y gestión remota constante; disponibilidad ante emergencias/incidentes severos fuera de horario.',
      risks:
        'Alto estrés por fallas de disponibilidad/seguridad; sobrecarga en migraciones, auditorías o picos de tráfico.',
    },
    requirements: {
      education: 'Ingeniería en Sistemas, Informática, Telecomunicaciones o afines.',
      experience:
        'Mínimo 5 años en liderazgo de equipos de tecnología e infraestructura. Experiencia demostrable en AWS, Azure, GCP y metodologías ágiles.',
      certifications:
        'AWS Certified Solutions Architect, Azure Solutions Architect Pro o afines.',
      skills:
        'Liderazgo estratégico, pensamiento analítico, toma de decisiones bajo presión, visión de negocio y comunicación efectiva.',
    },
  },
  {
    id: 'arquitecto-cloud',
    title: 'Arquitecto de Soluciones Cloud',
    identification: {
      category: 'Profesional / Técnico Especializado',
      department: 'Tecnología e Infraestructura Cloud',
      holders: 1,
      schedule: 'Mañana y tarde',
    },
    purpose: [
      'Diseñar e implementar arquitecturas Cloud sólidas, escalables, seguras y de alto rendimiento.',
      'Evaluar y seleccionar tecnologías Cloud (públicas, privadas, híbridas) para microservicios, bases de datos y modelos de Inteligencia Artificial.',
      'Actuar como puente técnico entre requerimientos de desarrollo/producto y recursos de infraestructura Cloud.',
    ],
    efficiencyAreas: [
      'Robustez, resiliencia y escalabilidad de los diseños.',
      'Consumo eficiente de recursos alineado a políticas FinOps.',
      'Seguridad por diseño (Security by Design) e integración con datos/IA.',
      'Documentación técnica clara y establecimiento de estándares de diseño de sistemas.',
    ],
    functions: [
      'Elaborar diagramas de arquitectura, patrones de diseño y especificaciones técnicas.',
      'Evaluar viabilidad técnica y migración de sistemas legacy/locales a la nube.',
      'Diseñar estrategias de alta disponibilidad, tolerancia a fallas, respaldos y DRP (Disaster Recovery Plan).',
      'Definir estándares de integración, APIs y flujos de datos seguros entre microservicios e infraestructura.',
      'Colaborar directamente con DevOps e Infraestructura Cloud para garantizar despliegues sin fisuras.',
    ],
    relationships: {
      hierarchical: 'Reporta directamente al Gerente de Área Cloud.',
      functional:
        'Coordina con Administrador DevOps y Administrador de Infraestructura Cloud. Asesora a equipos de desarrollo, integración y ciencia de datos/IA.',
    },
    responsibilities: [
      'Integridad, seguridad y eficiencia técnica de los diseños de arquitectura en producción.',
      'Mantener soluciones dentro de estimaciones presupuestarias.',
      'Resguardo y protección frente a vulnerabilidades/ciberseguridad.',
    ],
    conditions: {
      workConditions:
        'Oficina con flexibilidad de soporte remoto; disponibilidad eventual para despliegues críticos o emergencias.',
      risks:
        'Estrés por impacto estructural de decisiones técnicas; sobrecarga en diseño inicial o migraciones masivas.',
    },
    requirements: {
      education: 'Grado en Ingeniería en Sistemas, Informática, Software o afines.',
      experience: '3 a 5 años en diseño de arquitecturas Cloud e infraestructura tecnológica.',
      technicalKnowledge:
        'Dominio avanzado de AWS, Azure o GCP; contenedores (Docker/Kubernetes), microservicios, bases de datos SQL/NoSQL, redes virtuales.',
      certifications:
        'AWS Solutions Architect Associate/Professional, Azure Solutions Architect Expert (deseables).',
      skills:
        'Abstracción de sistemas complejos, resolución técnica, traducción de necesidades de negocio a soluciones de software/infraestructura.',
    },
  },
  {
    id: 'admin-devops',
    title: 'Administrador DevOps',
    identification: {
      category: 'Profesional / Técnico Especializado',
      department: 'Área Cloud',
      holders: 1,
      schedule: 'Mañana y tarde',
    },
    purpose: [
      'Automatizar, optimizar y mantener ciclos de integración y despliegue continuo (CI/CD).',
      'Servir de puente operativo entre desarrollo e infraestructura para entregas de software ágiles y estables.',
      'Administrar Infraestructura como Código (IaC) y orquestación de entornos Cloud.',
    ],
    efficiencyAreas: [
      'Velocidad y eficiencia en CI/CD y entrega de software.',
      'Automatización de pipelines y mantenimiento de plataformas Cloud.',
      'Reducción de errores en pases a producción y estabilidad de entornos.',
      'Optimización de recursos, telemetría y monitoreo preventivo.',
    ],
    functions: [
      'Diseñar, implementar y mantener pipelines CI/CD.',
      'Configurar y administrar IaC mediante herramientas de automatización.',
      'Gestionar la contenerización y orquestación de microservicios (Docker, Kubernetes).',
      'Implementar observabilidad, métricas y monitoreo preventivo de aplicaciones.',
      'Coordinar con desarrollo y operaciones para asegurar compatibilidad y estandarización.',
      'Diagnosticar y resolver incidentes operativos en entornos de despliegue y producción.',
      'Documentar configuraciones y flujos de automatización.',
    ],
    relationships: {
      hierarchical: 'Reporta directamente al Gerente de Área Cloud.',
      functional:
        'Coordina con Arquitecto de Soluciones, Administrador de Infraestructura y equipos de desarrollo de software.',
    },
    responsibilities: [
      'Continuidad operativa y confiabilidad de pipelines CI/CD.',
      'Integridad y seguridad de entornos de entrega, repositorios, versiones, artefactos y variables de entorno.',
    ],
    conditions: {
      workConditions:
        'Oficina con soporte/administración remota; disponibilidad para despliegues programados o incidentes fuera de horario.',
      risks:
        'Estrés por resolución de fallas críticas en pases a producción en tiempo reducido; sobrecarga en migraciones o lanzamientos.',
    },
    requirements: {
      education: 'Grado en Ingeniería en Sistemas, Informática, Software o afines.',
      experience: '3 a 5 años en roles DevOps, automatización o entornos Cloud.',
      technicalKnowledge:
        'Control de versiones con Git, Docker, Kubernetes, herramientas CI/CD (GitHub Actions, GitLab CI, Jenkins, etc.), scripting (Python, Bash, Node.js), nociones de AWS/Azure/GCP y microservicios.',
      skills:
        'Pensamiento lógico orientado a automatización, resolución de problemas bajo presión, colaboración interdisciplinaria y mejora continua.',
    },
  },
  {
    id: 'admin-infraestructura',
    title: 'Administrador de Infraestructura Cloud',
    identification: {
      category: 'Profesional / Técnico Especializado',
      department: 'Tecnología e Infraestructura Cloud',
      holders: 1,
      schedule: 'Mañana y tarde',
    },
    purpose: [
      'Aprovisionar, administrar y mantener la infraestructura Cloud (cómputo virtual, redes, almacenamiento y bases de datos).',
      'Monitorear rendimiento, disponibilidad y cumplimiento de políticas de seguridad.',
      'Ejecutar soporte operativo, parches de seguridad, backups y resolución de incidentes técnicos.',
    ],
    efficiencyAreas: [
      'Alta disponibilidad, estabilidad y rendimiento de redes y servidores.',
      'Mantenimiento proactivo, monitoreo continuo y restauración efectiva de respaldos.',
      'Aplicación oportuna de políticas de ciberseguridad, parches y control de accesos (IAM).',
      'Optimización de recursos computacionales contratados.',
    ],
    functions: [
      'Configurar y administrar instancias computacionales, redes virtuales (VPC/VNets), balanceadores de carga y reglas de firewall.',
      'Implementar y supervisar sistemas de monitoreo/alertas proactivas.',
      'Administrar y validar políticas de backup, Disaster Recovery y almacenamiento.',
      'Gestionar parches de seguridad y control estricto de roles (IAM) y credenciales.',
      'Colaborar con Arquitectura (aprovisionamiento) y DevOps (soporte a entornos).',
    ],
    relationships: {
      hierarchical: 'Reporta directamente al Gerente de Área Cloud.',
      functional:
        'Coordina estrechamente con el Arquitecto de Soluciones y el Administrador DevOps; brinda soporte a desarrollo e ingeniería.',
    },
    responsibilities: [
      'Operatividad continua de servidores, almacenamiento y bases de datos.',
      'Confidencialidad, integridad y disponibilidad de la información en infraestructura Cloud.',
      'Evitar consumos o cobros no planificados.',
    ],
    conditions: {
      workConditions:
        'Oficina con acceso/administración remota; disponibilidad para caídas críticas o mantenimientos fuera de jornada laboral.',
      risks:
        'Estrés por resolución urgente de caídas en producción y responsabilidad ante intentos de intrusión/ciberseguridad.',
    },
    requirements: {
      education:
        'Ingeniería en Sistemas, Informática, Redes y Telecomunicaciones o afines.',
      experience:
        'Experiencia en administración de servidores (Linux/Windows Server), redes y plataformas en la nube (AWS, Azure o GCP).',
      technicalKnowledge:
        'Networking (TCP/IP, VPN, DNS, Firewalls), bases de datos y seguridad informática.',
      certifications:
        'AWS Certified SysOps Administrator o Azure Administrator Associate (deseables).',
      skills:
        'Diagnóstico ágil de infraestructura, respuesta ante incidentes críticos, atención al detalle y orden.',
    },
  },
];
