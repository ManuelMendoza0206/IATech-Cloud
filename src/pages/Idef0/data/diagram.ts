export type ArrowKind = 'input' | 'control' | 'mechanism' | 'output';

export interface ArrowItem {
  title: string;
  text: string;
}

export interface ArrowGroup {
  kind: ArrowKind;
  number: string;
  label: string;
  english: string;
  position: 'left' | 'top' | 'bottom' | 'right';
  arrow: string;
  color: string;
  definition: string;
  items: ArrowItem[];
}

export const ARROW_GROUPS: Record<ArrowKind, ArrowGroup> = {
  input: {
    kind: 'input',
    number: '05',
    label: 'Entradas',
    english: 'Inputs',
    position: 'left',
    arrow: 'left',
    color: '#2563EB',
    definition:
      'Son los elementos o datos que el proceso consume o transforma para producir las salidas. Llegan desde la izquierda del diagrama y representan lo que la función necesita para poder ejecutarse.',
    items: [
      {
        title: 'Builds de aplicaciones',
        text: 'Compilaciones o empaquetados generados de las aplicaciones listos para ser desplegados. Contienen el binario, los assets y el manifiesto de dependencias ya resueltos.',
      },
      {
        title: 'Código fuente actualizado',
        text: 'Versión más reciente del código base de la aplicación, con los cambios integrados y las incidencias cerradas, listo para iniciar una nueva compilación.',
      },
    ],
  },
  control: {
    kind: 'control',
    number: '06',
    label: 'Controles',
    english: 'Controls',
    position: 'top',
    arrow: 'top',
    color: '#9333EA',
    definition:
      'Son las reglas, políticas, normas o restricciones que gobiernan cómo debe ejecutarse el proceso. Entran desde arriba porque condicionan y limitan la manera en que la función actúa sobre sus entradas.',
    items: [
      {
        title: 'Reglas de control de versiones',
        text: 'Políticas y flujo de trabajo para la gestión del código: estrategias de ramas, convención de commits y uso de tags. Determinan qué código es elegible para promoción.',
      },
      {
        title: 'Límites de cuotas y presupuesto',
        text: 'Restricciones financieras y techos de uso de recursos asignados a la infraestructura. Acotan el gasto y evitan que un despliegue exceda el presupuesto aprobado.',
      },
      {
        title: 'Políticas de seguridad y accesos',
        text: 'Normativas de seguridad que gobiernan IAM, permisos, firewalls y cifrado. Definen quién puede desplegar, en qué entornos y con qué nivel de auditoría.',
      },
    ],
  },
  mechanism: {
    kind: 'mechanism',
    number: '07',
    label: 'Mecanismos',
    english: 'Mechanisms',
    position: 'bottom',
    arrow: 'bottom',
    color: '#059669',
    definition:
      'Son los recursos, herramientas o personas que se utilizan para llevar a cabo el proceso. Llegan desde abajo porque son el medio físico y lógico que habilita la ejecución de la función.',
    items: [
      {
        title: 'AWS (Amazon Web Services)',
        text: 'Proveedor de infraestructura y servicios cloud donde se alojan las aplicaciones. Aporta cómputo, almacenamiento, red y servicios gestionados sobre los que corre el despliegue.',
      },
      {
        title: 'Departamento de Cloud',
        text: 'Equipo humano y técnico encargado de la gestión de la nube. Interviene en la aprobación, supervisa el pipeline y responde ante incidencias durante y después del despliegue.',
      },
      {
        title: 'Herramientas de flujos de trabajo (CI/CD)',
        text: 'Software de integración y despliegue continuo —por ejemplo GitHub Actions, GitLab CI o Jenkins— que orquesta la compilación, las pruebas y la promoción entre entornos.',
      },
    ],
  },
  output: {
    kind: 'output',
    number: '08',
    label: 'Salidas',
    english: 'Outputs',
    position: 'right',
    arrow: 'right',
    color: '#DC2626',
    definition:
      'Son los resultados o productos generados por la ejecución del proceso. Salen hacia la derecha y constituyen la evidencia de que la función se completó de forma satisfactoria.',
    items: [
      {
        title: 'Servicios Cloud operativos',
        text: 'La aplicación ya desplegada y funcionando en la nube, disponible para su uso y cumpliendo los niveles de servicio acordados.',
      },
      {
        title: 'Logs de ejecución de despliegue',
        text: 'Archivos de registro que documentan los detalles y eventos ocurridos durante el proceso: cada paso, su duración y su resultado.',
      },
      {
        title: 'Métricas de rendimiento',
        text: 'Datos y gráficos que monitorean el comportamiento y el rendimiento de la aplicación desplegada, permiten validar la salud en producción.',
      },
    ],
  },
};

export const GROUPS_BY_KIND: ArrowKind[] = ['input', 'control', 'mechanism', 'output'];

export interface MetadataField {
  key: string;
  value: string;
  empty?: boolean;
  note: string;
}

export const METADATA: MetadataField[] = [
  { key: 'USED AT', value: '—', empty: true, note: 'Sin registro. En la práctica se usa para indicar dónde se exhibió o discutió el diagrama.' },
  { key: 'AUTHOR', value: 'MENDOZA', note: 'Autor y responsable de la elaboración del diagrama.' },
  { key: 'PROJECT', value: 'CLOUD', note: 'Proyecto al que pertenece este diagrama dentro del área.' },
  { key: 'DATE', value: '15/9/2026', note: 'Fecha de emisión inicial de la versión.' },
  { key: 'REV', value: '16/9/2026', note: 'Fecha de la última revisión aprobada.' },
  { key: 'ESTADO', value: 'WORKING', note: 'En trabajo. El diagrama todavía puede recibir cambios.' },
  { key: 'READER / DATE', value: '—', empty: true, note: 'Sin registro. Destinatario previsto del documento y fecha de lectura asociada.' },
  { key: 'CONTEXT', value: 'TOP', note: 'Diagrama de contexto de nivel superior: describe la función global del sistema.' },
  { key: 'NOTES', value: '1 2 3 4 5 6 7 8 9 10', note: 'Espacio numerado para observaciones y aclaraciones posteriores.' },
];

export interface DiagramFooterField {
  key: string;
  value: string;
  empty?: boolean;
}

export const DIAGRAM_FOOTER: DiagramFooterField[] = [
  { key: 'NODE', value: 'A-0' },
  { key: 'TITLE', value: 'Automatizar el Despliegue y Alojamiento de Aplicaciones en la Nube' },
  { key: 'NUMBER', value: '—', empty: true },
];

export const PROCESS_TEXT =
  'AUTOMATIZAR EL DESPLIEGUE Y ALOJAMIENTO DE APLICACIONES EN LA NUBE';

export const PROCESS_DESCRIPTION =
  'Representa la función o actividad global que transforma las entradas en salidas mediante el uso de mecanismos y bajo ciertas restricciones o controles.';

export const RESUMEN_ROWS = [
  {
    kind: 'input' as ArrowKind,
    origin: 'Izquierda',
    question: '¿Qué consume?',
    purpose: 'Materializar lo que la función necesita para operar.',
    example: 'Builds de aplicaciones · Código fuente actualizado',
  },
  {
    kind: 'control' as ArrowKind,
    origin: 'Arriba',
    question: '¿Bajo qué reglas?',
    purpose: 'Restringir y condicionar cómo se ejecuta la función.',
    example: 'Control de versiones · Cuotas · Seguridad',
  },
  {
    kind: 'mechanism' as ArrowKind,
    origin: 'Abajo',
    question: '¿Con qué se hace?',
    purpose: 'Aportar los medios y el personal que la habilitan.',
    example: 'AWS · Departamento de Cloud · CI/CD',
  },
  {
    kind: 'output' as ArrowKind,
    origin: 'Derecha',
    question: '¿Qué produce?',
    purpose: 'Entregar el resultado y la evidencia de la ejecución.',
    example: 'Servicios operativos · Logs · Métricas',
  },
];
