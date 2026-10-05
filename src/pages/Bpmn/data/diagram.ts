export interface BpmnSymbolKind {
  kind: 'evento' | 'actividad' | 'gateway' | 'flujo' | 'lane';
  label: string;
  english: string;
  color: string;
  question: string;
  purpose: string;
  example: string;
}

export interface BpmnSymbolItem {
  title: string;
  text: string;
}

export interface BpmnSymbolGroup {
  kind: BpmnSymbolKind['kind'];
  label: string;
  english: string;
  color: string;
  definition: string;
  items: BpmnSymbolItem[];
}

export const SYMBOL_GROUPS: Record<BpmnSymbolKind['kind'], BpmnSymbolGroup> = {
  evento: {
    kind: 'evento',
    label: 'Eventos',
    english: 'Events',
    color: '#059669',
    definition:
      'Círculos que marcan algo que ocurre en el tiempo: un inicio, un fin o un estado intermedio. No hacen trabajo, fijan los límites del proceso.',
    items: [
      {
        title: 'Evento de inicio',
        text: 'Círculo de trazo fino. En el diagrama: "Inicio" en la lane de Producto / Clínica, antes de solicitar el servicio.',
      },
      {
        title: 'Evento de fin',
        text: 'Círculo de trazo grueso. En el diagrama: "Fin" tras replanificar o cancelar, y "Servicio en SLA" al cerrar el ciclo.',
      },
      {
        title: 'Evento intermedio',
        text: 'Círculo de doble trazo. No aparece en este diagrama, pero sirve para pausas, mensajes o temporizadores dentro del flujo.',
      },
    ],
  },
  actividad: {
    kind: 'actividad',
    label: 'Actividades',
    english: 'Activities',
    color: '#2563eb',
    definition:
      'Rectángulos de esquinas redondeadas: el trabajo que alguien ejecuta. En este diagrama las 6 tareas están numeradas y asignadas a una lane.',
    items: [
      {
        title: 'Tarea (Task)',
        text: 'Una unidad de trabajo. En el diagrama: solicitar, evaluar, diseñar, construir pipeline, desplegar y activar monitoreo.',
      },
      {
        title: 'Subproceso (Sub-process)',
        text: 'Un rectángulo con icono + que esconde un flujo completo adentro. Útil cuando una tarea como "diseñar arquitectura" crece.',
      },
      {
        title: 'User task / Service task',
        text: 'Variantes tipadas: tarea hecha por una persona o por un sistema automático. En Cloud, el pipeline es un service task.',
      },
    ],
  },
  gateway: {
    kind: 'gateway',
    label: 'Compuertas',
    english: 'Gateways',
    color: '#d97706',
    definition:
      'Rombos con X adentro: puntos de decisión que dividen o unen el flujo. Las etiquetas de cada salida son lo que hace legible el diagrama.',
    items: [
      {
        title: 'Gateway exclusivo (XOR)',
        text: 'Solo una salida se toma. En el diagrama: Sí / No tras evaluar, Sí / No tras diseñar, OK / Falla tras desplegar.',
      },
      {
        title: 'Gateway paralelo (AND)',
        text: 'Todas las salidas se ejecutan a la vez. Sirve para modelar que DevOps e Infraestructura trabajan en paralelo.',
      },
      {
        title: 'Gateway inclusivo (OR)',
        text: 'Una o varias salidas se toman según condiciones. Útil cuando el despliegue puede ir a uno o varios entornos.',
      },
    ],
  },
  flujo: {
    kind: 'flujo',
    label: 'Flujos de secuencia',
    english: 'Sequence Flows',
    color: '#7c3aed',
    definition:
      'Flechas que conectan los elementos en orden de ejecución. En este diagrama hay flujos normales (azul) y flujos de rework (rojo).',
    items: [
      {
        title: 'Flujo normal',
        text: 'Flecha continua que avanza el proceso. En el diagrama: el camino feliz de la solicitud al servicio en SLA.',
      },
      {
        title: 'Flujo de rework',
        text: 'Flecha que vuelve atrás: "Ajustar diseño y costos" y "Rollback y diagnóstico". Los loops no son errores, son parte del modelo.',
      },
      {
        title: 'Flujo con etiqueta',
        text: 'La etiqueta sobre la flecha (Sí, No, OK, Falla, retrabajo, reintento) explica la condición. Sin etiquetas el diagrama es ilegible.',
      },
    ],
  },
  lane: {
    kind: 'lane',
    label: 'Pools y lanes',
    english: 'Pools & Lanes',
    color: '#0ea5e9',
    definition:
      'Carriles horizontales que dicen quién hace cada paso. El pool "Área Cloud IATECH" contiene las 4 lanes del equipo más la lane del cliente.',
    items: [
      {
        title: 'Pool',
        text: 'El contenedor del proceso. Aquí: "Área Cloud IATECH". Todo lo que ocurre adentro es responsabilidad del área.',
      },
      {
        title: 'Lane',
        text: 'Un rol dentro del pool. Aquí: Producto / Clínica, Gerente Cloud, Arquitecto Cloud, Admin. DevOps y Admin. Infraestructura.',
      },
      {
        title: 'Lane del cliente',
        text: 'Producto / Clínica inicia el proceso y recibe el cierre. El proceso empieza y termina fuera del equipo técnico.',
      },
    ],
  },
};

export const GROUPS_BY_KIND: BpmnSymbolKind['kind'][] = [
  'evento',
  'actividad',
  'gateway',
  'flujo',
  'lane',
];

export interface LecturaRow {
  step: string;
  lane: string;
  action: string;
  detail: string;
}

export const LECTURA_ROWS: LecturaRow[] = [
  {
    step: '01',
    lane: 'Producto / Clínica',
    action: 'Solicitar servicio o actualización clínica',
    detail: 'El evento de inicio dispara el proceso. Es la única tarea fuera del equipo técnico.',
  },
  {
    step: '02',
    lane: 'Gerente Cloud',
    action: 'Evaluar estrategia, presupuesto y SLA',
    detail: 'Primer gateway: No → replanificar o cancelar (fin); Sí → pasa al diseño (retrabajo si vuelve).',
  },
  {
    step: '03',
    lane: 'Arquitecto Cloud',
    action: 'Diseñar arquitectura HA, seguridad y DRP',
    detail: 'Segundo gateway: No → ajustar diseño y costos y volver; Sí → habilitar DevOps e Infraestructura en paralelo.',
  },
  {
    step: '04',
    lane: 'DevOps + Infraestructura',
    action: 'Construir pipeline CI/CD e IaC / Aprovisionar VPC, IAM, cómputo y backup',
    detail: 'Las dos tareas corren en paralelo sobre el mismo diseño aprobado. Es el único tramo con ejecución concurrente.',
  },
  {
    step: '05',
    lane: 'Admin. DevOps',
    action: 'Desplegar en K8s sin downtime',
    detail: 'Tercer gateway: OK → monitoreo; Falla → rollback y diagnóstico, con reintento que reprovisiona.',
  },
  {
    step: '06',
    lane: 'Gerente Cloud',
    action: 'Activar monitoreo 24/7 y reportar al CTO',
    detail: 'El evento final "Servicio en SLA" cierra el ciclo. El proceso entrega evidencia, no solo infraestructura.',
  },
];
