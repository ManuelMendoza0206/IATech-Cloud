/**
 * Cifras del tablero de costo cloud armado en Tableau.
 *
 * Las que traen `display` están impresas en las hojas (KPI, barras de
 * tipo, proveedor y región, línea de altas). El pastel y la barra
 * apilada no imprimen el número: su peso se midió sobre las marcas
 * del mismo tablero, en píxeles de color, y solo se usa como proporción.
 */

export interface CostRow {
  label: string;
  value: number;
  display: string;
}

export interface StackSegment {
  label: 'Alta' | 'Baja' | 'Crítica' | 'Media';
  /** Píxeles de esa franja en la captura del tablero. */
  weight: number;
}

export interface EnvironmentBar {
  label: string;
  /** Píxeles de alto de la barra completa. */
  weight: number;
  /** De arriba hacia abajo, como se lee la marca. */
  segments: StackSegment[];
}

export const MONTHLY = 21284.5;
export const ANNUAL = 255414;
export const RESOURCE_COUNT = 100;
export const CRITICAL_COUNT = 19;

/** Tope del eje en la hoja de tipo de recurso. */
export const TYPE_SCALE = 10000;
/** Tope del eje en la hoja de proveedor. */
export const PROVIDER_SCALE = 10000;
/** Tope del eje en la hoja de región. */
export const REGION_SCALE = 3500;

export const BY_TYPE: CostRow[] = [
  { label: 'Base de datos', value: 8767.1, display: '8.767,1' },
  { label: 'Bucket almacenamiento', value: 767.85, display: '767,85' },
  { label: 'Contenedor/K8s', value: 5322.6, display: '5.322,6' },
  { label: 'Función serverless', value: 268.65, display: '268,65' },
  { label: 'Instancia VM', value: 3783.3, display: '3.783,3' },
  { label: 'Monitoreo/Backup', value: 1539.35, display: '1.539,35' },
  { label: 'Red/VPC/Balanceador', value: 835.65, display: '835,65' },
];

export const BY_PROVIDER: CostRow[] = [
  { label: 'AWS', value: 8986.8, display: '8.986,8' },
  { label: 'Azure', value: 7648, display: '7.648' },
  { label: 'GCP', value: 4649.7, display: '4.649,7' },
];

export const BY_REGION: CostRow[] = [
  { label: 'brazilsouth', value: 2704, display: '2.704' },
  { label: 'eastus', value: 3010.87, display: '3.010,87' },
  { label: 'eu-west-1', value: 2141.8, display: '2.141,8' },
  { label: 'europe-west1', value: 1272.03, display: '1.272,03' },
  { label: 'sa-east-1', value: 2529.1, display: '2.529,1' },
  { label: 'southamerica-east1', value: 1812.9, display: '1.812,9' },
  { label: 'us-central1', value: 1564.77, display: '1.564,77' },
  { label: 'us-east-1', value: 2355.1, display: '2.355,1' },
  { label: 'us-west-2', value: 1960.8, display: '1.960,8' },
  { label: 'westeurope', value: 1933.13, display: '1.933,13' },
];

export const BY_YEAR = [
  { year: '2023', count: 25 },
  { year: '2024', count: 25 },
  { year: '2025', count: 25 },
  { year: '2026', count: 25 },
];

/**
 * Orden de apilado medido en la captura, de arriba hacia abajo:
 * Alta, Baja (una franja mínima), Crítica, Media.
 * El peso de cada ambiente es la suma de sus franjas.
 */
export const ENVIRONMENTS: EnvironmentBar[] = [
  {
    label: 'Desarrollo',
    weight: 115,
    segments: [
      { label: 'Alta', weight: 53 },
      { label: 'Baja', weight: 1 },
      { label: 'Crítica', weight: 44 },
      { label: 'Media', weight: 17 },
    ],
  },
  {
    label: 'Producción',
    weight: 213,
    segments: [
      { label: 'Alta', weight: 108 },
      { label: 'Baja', weight: 1 },
      { label: 'Crítica', weight: 61 },
      { label: 'Media', weight: 43 },
    ],
  },
  {
    label: 'QA/Pruebas',
    weight: 52,
    segments: [
      { label: 'Alta', weight: 22 },
      { label: 'Baja', weight: 1 },
      { label: 'Crítica', weight: 15 },
      { label: 'Media', weight: 14 },
    ],
  },
];

export const SEGMENT_COLOR: Record<StackSegment['label'], string> = {
  Alta: '#111111',
  Baja: '#8a8a8a',
  Crítica: '#e2001a',
  Media: '#555555',
};

export const PIE_ORDER = ['Desarrollo', 'Producción', 'QA/Pruebas'] as const;

export const PIE_COLOR: Record<(typeof PIE_ORDER)[number], string> = {
  Desarrollo: '#111111',
  Producción: '#e2001a',
  'QA/Pruebas': '#8a8a8a',
};

/** Porcentaje con un decimal, formato es-AR (coma decimal). */
export function formatShare(part: number, total: number): string {
  return new Intl.NumberFormat('es-AR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format((part / total) * 100);
}

export function maxValue(rows: CostRow[]): number {
  return rows.reduce((max, row) => (row.value > max ? row.value : max), 0);
}
