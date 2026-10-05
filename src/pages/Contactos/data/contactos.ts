export interface Contacto {
  id: string;
  nombre: string;
  puesto: string;
  area: string;
  email?: string;
  imageSrc: string;
  iniciales: string;
}

export const CONTACTOS: Contacto[] = [
  {
    id: 'gerente-cloud',
    nombre: 'Joan Marcelo Riveros Soria',
    puesto: 'Gerente de Área Cloud',
    area: 'Dirección técnica',
    email: 'joan.riveros@ucb.edu.bo',
    imageSrc: '/images/team/l_cjr.png',
    iniciales: 'JR',
  },
  {
    id: 'arquitecto-cloud',
    nombre: 'Jaicel Jesús Velasco Turunco',
    puesto: 'Arquitecto de Soluciones Cloud',
    area: 'Diseño y resiliencia',
    email: 'jaicel.velasco@ucb.edu.bo',
    imageSrc: '/images/team/jr.png',
    iniciales: 'JV',
  },
  {
    id: 'admin-devops',
    nombre: 'Manuel Franco Jiménez Mendoza',
    puesto: 'Administrador DevOps',
    area: 'Automatización y despliegue',
    email: 'manuel.jimenez@ucb.edu.bo',
    imageSrc: '/images/team/mj.png',
    iniciales: 'MJ',
  },
  {
    id: 'admin-infraestructura',
    nombre: 'Roman Telesforo Pabón Villafuerte',
    puesto: 'Administrador de Infraestructura Cloud',
    area: 'Operación y soporte',
    imageSrc: '/images/team/rp.png',
    iniciales: 'RP',
  },
  {
    id: 'product-owner',
    nombre: 'Vicente Yamil Cárdenas Miguel',
    puesto: 'Product Owner',
    area: 'Producto y clínica',
    imageSrc: '/images/team/Yamil-CardenasPO.jpg',
    iniciales: 'YC',
  },
];

export function buildMailto(email: string) {
  const asunto = 'Consulta desde el sitio IATECH · Área de Servicios Cloud';
  const cuerpo =
    'Hola,\n\nEscribo desde el sitio web del Área de Servicios Cloud e Integración.\n\nMotivo de la consulta:\n\nSaludos cordiales,';
  return `mailto:${email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}