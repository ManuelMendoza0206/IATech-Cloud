/**
 * Enlace compartido en Google Drive del documento
 * "PLAN DE CONTINGENCIA GESTION TIC 2026 - AreaCloud.docx".
 */
export const PLAN_CONTINGENCIA_DRIVE_URL =
  'https://drive.google.com/file/d/1BllclfUAmbBfSmE3lcklgc9ioQ5G94Rb/view?usp=drive_link';

export interface FaseCiclo {
  fase: string;
  titulo: string;
  descripcion: string;
  acciones: string[];
}

export interface NormaItem {
  codigo: string;
  ambito: string;
  detalle: string;
}

export interface RiesgoItem {
  id: string;
  riesgo: string;
  categoria: 'La Paz y entorno' | 'Cloud y seguridad';
  factor: 'Muy Alto' | 'Alto' | 'Medio' | 'Bajo';
  contramedida: string;
}

export interface NivelDrp {
  nivel: string;
  sistemas: string;
  rto: string;
  rpo: string;
}

export interface AlertaNivel {
  codigo: string;
  titulo: string;
  criterio: string;
  respuesta: string;
  escalamiento: string;
}

export interface RolErd {
  titular: string;
  cargo: string;
  dominio: string;
  suplente: string;
  accion: string;
}

export interface CasoEmergencia {
  id: string;
  tipo: 'Física (La Paz)' | 'Lógica y Cloud';
  titulo: string;
  pasos: string[];
}

export interface SimulacroItem {
  escenario: string;
  riesgo: string;
  metodo: string;
  fecha: string;
  objetivo: string;
}

export const FASES_CICLO: FaseCiclo[] = [
  {
    fase: 'Antes',
    titulo: 'Prevención y preparación',
    descripcion:
      'Medidas para reducir la probabilidad de fallo antes de una caída o bloqueo urbano.',
    acciones: [
      'Respaldos 3-2-1-1-0: tres copias, dos medios (nube y SAN local), otra región, copia inmutable y pruebas de restauración.',
      'Infraestructura como Código (Terraform y Helm) y contenedores versionados en Git.',
      'Equipos portátiles cifrados, VPN y MFA listos para operar desde domicilio ante marchas en La Paz.',
    ],
  },
  {
    fase: 'Durante',
    titulo: 'Respuesta y contención',
    descripcion:
      'Acciones inmediatas para mantener los servicios clínicos funcionando, aunque sea en modo degradado.',
    acciones: [
      'Clasificación SEV-1 a SEV-4 en menos de cinco minutos y apertura de sala de crisis digital.',
      'Conmutación DNS o de balanceadores hacia zona o región alterna y rollback CI/CD automático.',
      'Operación remota 100% vía VPN, gestor PAM y datos LTE/5G cuando vías de La Paz estén cerradas.',
    ],
  },
  {
    fase: 'Después',
    titulo: 'Recuperación y mejora',
    descripcion:
      'Validación clínica, cierre técnico del incidente y actualización de los runbooks del área.',
    acciones: [
      'Verificación de integridad en bases de datos clínicas y reactivación de alertas SLA.',
      'Informe Post-Mortem en 48 horas con causa raíz, tiempos reales de RTO y RPO y tareas preventivas.',
      'Gestión de tickets Enterprise, garantías y actualización del plan según lecciones aprendidas.',
    ],
  },
];

export const MARCO_NORMATIVO: NormaItem[] = [
  {
    codigo: 'Ley N.° 164 y D.S. N.° 1793',
    ambito: 'Bolivia · Telecomunicaciones y TIC',
    detalle: 'Continuidad de servicios digitales, seguridad en redes y validez de registros electrónicos.',
  },
  {
    codigo: 'Lineamientos AGETIC',
    ambito: 'Bolivia · Seguridad de la información',
    detalle: 'Criterios técnicos para planes de contingencia, gestión de incidentes e interoperabilidad.',
  },
  {
    codigo: 'Ley N.° 1152',
    ambito: 'Bolivia · Salud y datos clínicos',
    detalle: 'Resguardo de la historia clínica electrónica y confidencialidad de información de pacientes.',
  },
  {
    codigo: 'ISO/IEC 27001 y 27017',
    ambito: 'Estándar internacional · Cloud',
    detalle: 'Controles de seguridad de la información y responsabilidades compartidas en servicios en la nube.',
  },
  {
    codigo: 'ISO 22301 y NIST SP 800-34',
    ambito: 'Estándar internacional · Continuidad',
    detalle: 'Gestión de continuidad del negocio, análisis de impacto y pruebas de recuperación ante desastres.',
  },
];

export const DIAGNOSTICO_RESUMEN = [
  {
    cifra: '100',
    etiqueta: 'Recursos Multi-Cloud',
    detalle: '40 en AWS, 30 en Azure y 30 en GCP (50 en Producción, 19 de criticidad Crítica).',
  },
  {
    cifra: '15',
    etiqueta: 'Recursos Monitoreo y Backup',
    detalle: 'Prometheus, logs, trazas APM, alertas SLA y backups diarios con instancias a reactivar.',
  },
  {
    cifra: '10',
    etiqueta: 'Activos No conformes',
    detalle: 'Brechas prioritarias en IDS transaccional, IAM cloud, snapshots de VMs y simulacros.',
  },
  {
    cifra: '4 + 1',
    etiqueta: 'Equipo y enlace clínico',
    detalle: 'Cuatro especialistas cloud en guardia 24×7 junto al Product Owner como enlace médico.',
  },
];

export const RIESGOS: RiesgoItem[] = [
  {
    id: 'bloqueos-lapaz',
    riesgo: 'Bloqueos, marchas y paros sociales en La Paz',
    categoria: 'La Paz y entorno',
    factor: 'Muy Alto',
    contramedida: 'Operación administrativa 100% remota con laptops cifradas, VPN, MFA y turnos sin traslado.',
  },
  {
    id: 'corte-isp',
    riesgo: 'Caída o degradación de enlaces internacionales ISP hacia la nube',
    categoria: 'La Paz y entorno',
    factor: 'Muy Alto',
    contramedida: 'Doble proveedor de fibra en sede y respaldo móvil LTE/5G de operador alterno.',
  },
  {
    id: 'corte-luz',
    riesgo: 'Cortes eléctricos y variaciones de tensión en sede técnica',
    categoria: 'La Paz y entorno',
    factor: 'Alto',
    contramedida: 'UPS online doble conversión en datacenter modular y baterías portátiles para guardia.',
  },
  {
    id: 'lluvias-granizo',
    riesgo: 'Lluvias intensas, granizadas e inundaciones en La Paz',
    categoria: 'La Paz y entorno',
    factor: 'Medio',
    contramedida: 'Equipos sobre piso técnico elevado, sensores de humedad y revisión previa a época de lluvias.',
  },
  {
    id: 'sismos-laderas',
    riesgo: 'Sismos o deslizamientos de ladera en infraestructura local',
    categoria: 'La Paz y entorno',
    factor: 'Bajo',
    contramedida: 'Cargas productivas alojadas fuera del país en regiones cloud con réplica geográfica.',
  },
  {
    id: 'incendio-warroom',
    riesgo: 'Incendio en WAR Room, datacenter modular o tableros',
    categoria: 'La Paz y entorno',
    factor: 'Alto',
    contramedida: 'Detectores ópticos y térmicos, corte eléctrico EPO y extintores de CO2 vigentes.',
  },
  {
    id: 'robo-equipos',
    riesgo: 'Robo o vandalismo de equipamiento físico o laptops de guardia',
    categoria: 'La Paz y entorno',
    factor: 'Alto',
    contramedida: 'Cifrado completo de disco, bloqueo remoto MDM y acceso controlado por tarjetas en sede.',
  },
  {
    id: 'falla-hw-local',
    riesgo: 'Fallas de hardware on-premise (SAN, nodos GPU, inferencia)',
    categoria: 'La Paz y entorno',
    factor: 'Medio',
    contramedida: 'Monitoreo térmico adaptado a 3.600 m s. n. m., RAID y conmutación a GPU en la nube.',
  },
  {
    id: 'caida-region-cloud',
    riesgo: 'Caída de región o zona de disponibilidad en AWS, Azure o GCP',
    categoria: 'Cloud y seguridad',
    factor: 'Alto',
    contramedida: 'Arquitectura Multi-AZ, failover DNS con TTL bajo y levantamiento por Terraform en región alterna.',
  },
  {
    id: 'ransomware',
    riesgo: 'Infección por ransomware o malware en servidores o estaciones',
    categoria: 'Cloud y seguridad',
    factor: 'Muy Alto',
    contramedida: 'Cobertura EDR completa, cuarentena inmediata de red y copias inmutables Object Lock.',
  },
  {
    id: 'iam-dmz',
    riesgo: 'Acceso no autorizado, compromiso IAM/PAM o brecha en DMZ',
    categoria: 'Cloud y seguridad',
    factor: 'Muy Alto',
    contramedida: 'MFA obligatorio, gestor PAM temporal, cierre de hallazgos DMZ/IDS y auditoría SIEM.',
  },
  {
    id: 'cicd-fallido',
    riesgo: 'Despliegue fallido en CI/CD o error humano en IaC',
    categoria: 'Cloud y seguridad',
    factor: 'Alto',
    contramedida: 'Revisión por pares en Pull Request, pruebas en QA/staging y rollback automatizado.',
  },
  {
    id: 'corrupcion-bd',
    riesgo: 'Corrupción lógica, pérdida o filtración de datos clínicos en BD',
    categoria: 'Cloud y seguridad',
    factor: 'Muy Alto',
    contramedida: 'Cifrado TLS 1.3 y en reposo, Point-in-Time Recovery (PITR) y validación con Product Owner.',
  },
  {
    id: 'falla-monitoreo',
    riesgo: 'Falla silenciosa de backups o alertas SLA detenidas en inventario',
    categoria: 'Cloud y seguridad',
    factor: 'Muy Alto',
    contramedida: 'Reactivación continua de backup-diario y alerta-sla más pruebas mensuales de restore.',
  },
];

export const NIVELES_DRP: NivelDrp[] = [
  {
    nivel: 'Nivel 1 · Crítico',
    sistemas: 'k8s-cluster-prod-01, vm-web-prod-01, svc-auth, svc-pagos, db-postgres-prod-03, db-mongo-prod-01',
    rto: 'Hasta 15 minutos',
    rpo: 'Hasta 5 minutos',
  },
  {
    nivel: 'Nivel 2 · Alto',
    sistemas: 'vm-app-prod-01, mon-prometheus-prod, log-central-prod, alerta-sla-prod, VPN y PAM',
    rto: 'Hasta 1 hora',
    rpo: 'Hasta 15 minutos',
  },
  {
    nivel: 'Nivel 3 · Medio',
    sistemas: 'vm-batch-prod-01, entornos QA/Desarrollo, ERP interno, nodos GPU locales',
    rto: 'Hasta 4 horas',
    rpo: 'Hasta 24 horas',
  },
  {
    nivel: 'Nivel 4 · Bajo',
    sistemas: 'Buckets de archivo histórico y laboratorios temporales',
    rto: '24 a 48 horas',
    rpo: '24 a 72 horas',
  },
];

export const ALERTAS: AlertaNivel[] = [
  {
    codigo: 'SEV-1',
    titulo: 'Crítica',
    criterio: 'Caída de servicio clínico productivo, brecha activa o ransomware, o caída regional.',
    respuesta: 'Menor a 5 minutos',
    escalamiento: 'Todo el ERD Cloud, Gerente Cloud, Product Owner y SOC 24×7.',
  },
  {
    codigo: 'SEV-2',
    titulo: 'Alta',
    criterio: 'Degradación severa de latencia o BD, fallo de nodo K8s o corte eléctrico/bloqueo en sede.',
    respuesta: 'Menor a 15 minutos',
    escalamiento: 'Infraestructura Cloud, DevOps y Arquitecto de Soluciones.',
  },
  {
    codigo: 'SEV-3',
    titulo: 'Media',
    criterio: 'Fallo en entorno QA o Desarrollo, disco sobre 85% o error puntual en backup no productivo.',
    respuesta: 'Menor a 2 horas',
    escalamiento: 'Especialista titular del dominio afectado.',
  },
  {
    codigo: 'SEV-4',
    titulo: 'Baja',
    criterio: 'Advertencia preventiva, certificado próximo a vencer o anomalía sin impacto operativo.',
    respuesta: 'Siguiente jornada hábil',
    escalamiento: 'Registro en backlog técnico operativo.',
  },
];

export const EQUIPO_ERD: RolErd[] = [
  {
    titular: 'Joan Marcelo Riveros Soria',
    cargo: 'Gerente de Área Cloud',
    dominio: 'Comando de crisis y soporte Enterprise',
    suplente: 'Jaicel Jesús Velasco Turunco',
    accion: 'Declara la contingencia, gestiona tickets Enterprise AWS/Azure/GCP y reporta a dirección.',
  },
  {
    titular: 'Jaicel Jesús Velasco Turunco',
    cargo: 'Arquitecto de Soluciones Cloud',
    dominio: 'Arquitectura y failover multi-región',
    suplente: 'Manuel Franco Jiménez Mendoza',
    accion: 'Dirige la conmutación a región alterna y valida la topología resiliente de microservicios.',
  },
  {
    titular: 'Manuel Franco Jiménez Mendoza',
    cargo: 'Administrador DevOps',
    dominio: 'CI/CD, Kubernetes e IaC',
    suplente: 'Roman Telesforo Pabón Villafuerte',
    accion: 'Ejecuta rollbacks automatizados, reconstruye servicios con Terraform y vigila trazas APM.',
  },
  {
    titular: 'Roman Telesforo Pabón Villafuerte',
    cargo: 'Admin. de Infraestructura Cloud',
    dominio: 'Redes, IAM, SAN, backups e ISP La Paz',
    suplente: 'Manuel Franco Jiménez Mendoza',
    accion: 'Conmuta enlaces ISP/VPN, restaura bases de datos (PITR o snapshots) y aplica contención WAF/EDR.',
  },
  {
    titular: 'Vicente Yamil Cárdenas Miguel',
    cargo: 'Product Owner',
    dominio: 'Validación clínica y comunicación',
    suplente: 'Joan Marcelo Riveros Soria',
    accion: 'Prioriza módulos médicos críticos y coordina avisos con equipos asistenciales.',
  },
];

export const CASOS_EMERGENCIA: CasoEmergencia[] = [
  {
    id: 'bloqueos',
    tipo: 'Física (La Paz)',
    titulo: 'Bloqueos, marchas o cierre de accesos urbanos',
    pasos: [
      'El Gerente Cloud activa la modalidad de operación remota de contingencia desde la alerta inicial.',
      'Los cuatro especialistas operan desde domicilio con laptops cifradas, VPN, MFA y enlaces LTE/5G alternos.',
      'La guardia 24×7 rota en remoto sin exponer al equipo a traslados por vías bloqueadas.',
    ],
  },
  {
    id: 'energia-lluvias',
    tipo: 'Física (La Paz)',
    titulo: 'Corte eléctrico prolongado o granizada severa',
    pasos: [
      'Verificar transferencia a UPS online y vigilar sensores de humedad y temperatura en el WAR Room.',
      'Si el corte supera la autonomía de baterías o hay riesgo de filtración, ejecutar apagado ordenado de SAN y nodos GPU.',
      'Trasladar cargas locales de inferencia a la nube y sostener operación remota con baterías portátiles.',
    ],
  },
  {
    id: 'isp-hardware',
    tipo: 'Física (La Paz)',
    titulo: 'Falla de ISP principal, arreglo SAN o nodo GPU local',
    pasos: [
      'Conmutar la salida de oficina al segundo ISP o enlace móvil LTE/5G; los usuarios clínicos siguen entrando directo a la nube.',
      'Ante falla de disco en SAN, verificar réplica sincronizada en S3/Blob/GCS y ejecutar reemplazo hot-swap.',
    ],
  },
  {
    id: 'bd-clinica',
    tipo: 'Lógica y Cloud',
    titulo: 'Corrupción lógica o borrado accidental en base de datos',
    pasos: [
      'Detener escrituras anómalas o pasar el módulo afectado a modo lectura para frenar el daño.',
      'Ubicar la marca temporal exacta previa al fallo y restaurar con Point-in-Time Recovery (PITR) sobre instancia limpia.',
      'Validar integridad referencial junto al Product Owner antes de restablecer el tráfico productivo.',
    ],
  },
  {
    id: 'ransomware-iam',
    tipo: 'Lógica y Cloud',
    titulo: 'Ransomware, malware o compromiso de credenciales IAM',
    pasos: [
      'Aislar de inmediato de la red mediante security group de cuarentena y revocar sesiones, llaves IAM y tokens CI/CD.',
      'Revisar CloudTrail y SIEM junto al SOC 24×7 para delimitar el alcance exacto del acceso.',
      'Reconstruir infraestructura limpia vía Terraform y restaurar datos solo desde copias inmutables previas al incidente.',
    ],
  },
  {
    id: 'region-cicd',
    tipo: 'Lógica y Cloud',
    titulo: 'Caída de región cloud o despliegue fallido en CI/CD',
    pasos: [
      'Si falla un despliegue, ejecutar rollback automático hacia la última imagen estable en el registro de contenedores.',
      'Si cae una región de AWS, Azure o GCP, abrir ticket Enterprise y conmutar DNS/balanceadores hacia región alterna.',
    ],
  },
];

export const METODOS_PRUEBA = [
  {
    titulo: 'Prueba específica',
    texto: 'Validación aislada de una tarea técnica, como restaurar un snapshot de PostgreSQL o probar conmutación DNS.',
  },
  {
    titulo: 'Prueba de escritorio (Tabletop)',
    texto: 'Recorrido guiado con escenarios y preguntas sobre los runbooks para medir tiempos de decisión sin tocar producción.',
  },
  {
    titulo: 'Simulación en tiempo real',
    texto: 'Ejercicio controlado en staging o ventana programada para comprobar RTO, RPO y operación remota en vivo.',
  },
];

export const SIMULACROS: SimulacroItem[] = [
  {
    escenario: 'Restauración de db-postgres-prod-03 en entorno aislado',
    riesgo: 'Corrupción lógica / restore',
    metodo: 'Prueba específica',
    fecha: 'Diciembre 2026',
    objetivo: 'Confirmar RPO menor o igual a 5 minutos y medir tiempo real de restauración.',
  },
  {
    escenario: 'Contingencia en La Paz: bloqueos y corte eléctrico en sede',
    riesgo: 'Movilidad y energía',
    metodo: 'Escritorio y remoto',
    fecha: 'Enero 2027',
    objetivo: 'Validar operación 100% remota por VPN, PAM y enlace móvil LTE/5G.',
  },
  {
    escenario: 'Rollback CI/CD y recuperación de k8s-cluster-prod-01 en staging',
    riesgo: 'Despliegue fallido',
    metodo: 'Simulación en tiempo real',
    fecha: 'Febrero 2027',
    objetivo: 'Comprobar recuperación automatizada dentro del RTO objetivo de 15 minutos.',
  },
  {
    escenario: 'Contención de ransomware y rotación masiva de llaves IAM',
    riesgo: 'Ransomware / intrusión',
    metodo: 'Escritorio y técnica',
    fecha: 'Abril 2027',
    objetivo: 'Cerrar la brecha de procedimientos de contención y cuarentena de red.',
  },
  {
    escenario: 'Failover Multi-Región AWS (de us-east-1 a sa-east-1)',
    riesgo: 'Caída regional cloud',
    metodo: 'Simulación en tiempo real',
    fecha: 'Junio 2027',
    objetivo: 'Validar levantamiento por Terraform y conmutación semestral completa.',
  },
];
