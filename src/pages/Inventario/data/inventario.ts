/**
 * Inventario cloud del área.
 *
 * El registro vivo está en la aplicación externa; esta página documenta el
 * criterio con el que se mantiene. Las filas de muestra son ilustrativas.
 */

export const INVENTARIO_URL = 'https://iatech-co-frontend.vercel.app';

export interface RecursoMuestra {
  id: string;
  tipo: string;
  proveedor: string;
  ambiente: string;
  criticidad: 'Crítica' | 'Alta' | 'Media' | 'Baja';
}

export const MUESTRA: RecursoMuestra[] = [
  {
    id: 'api-clinica-prod',
    tipo: 'Instancia VM',
    proveedor: 'AWS',
    ambiente: 'Producción',
    criticidad: 'Crítica',
  },
  {
    id: 'db-pacientes-ha',
    tipo: 'Base de datos',
    proveedor: 'Azure',
    ambiente: 'Producción',
    criticidad: 'Crítica',
  },
  {
    id: 'img-estudios',
    tipo: 'Bucket',
    proveedor: 'GCP',
    ambiente: 'Producción',
    criticidad: 'Alta',
  },
  {
    id: 'fn-facturacion',
    tipo: 'Función serverless',
    proveedor: 'AWS',
    ambiente: 'QA',
    criticidad: 'Media',
  },
];
