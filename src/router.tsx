import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Servicios from './pages/Servicios/Servicios';
//import AreaTrabajo from './pages/AreaTrabajo/AreaTrabajo';
import GestionTecnologia from './pages/GestionTecnologia/GestionTecnologia';
import CienciaTecnologiaInnovacion from './pages/CienciaTecnologiaInnovacion/CienciaTecnologiaInnovacion';
import MisionVision from './pages/MisionVision/MisionVision';
//import Organizacion from './pages/Organizacion/Organizacion';
import DescripcionPosiciones from './pages/DescripcionPosiciones/DescripcionPosiciones';
import MBTI from './pages/MBTI/MBTI';
import Scrum from './pages/Scrum/Scrum';
import Objetivos from './pages/Scrum/Objetivos';
import Idef0 from './pages/Idef0/Idef0';
import Fuentes from './pages/Fuentes/Fuentes';
import Bpmn from './pages/Bpmn/Bpmn';
import Inventario from './pages/Inventario/Inventario';
import Tableau from './pages/Tableau/Tableau';
import Contactos from './pages/Contactos/Contactos';
import Weka from './pages/Weka/Weka';
import Conclusiones from './pages/Conclusiones/Conclusiones';
import Presupuesto from './pages/Presupuesto/Presupuesto';
import PlanContingencia from './pages/PlanContingencia/PlanContingencia';

export interface AppRoute {
  path: string;
  label: string;
  element: ReactNode;
  hideFromNav?: boolean;
}

export const ROUTES: AppRoute[] = [
  { path: '/', label: 'Inicio', element: <Home /> },
//  { path: '/area-trabajo', label: 'Área de Trabajo', element: <AreaTrabajo /> },
  { path: '/gestion-tecnologia', label: 'Gestión de Tecnología', element: <GestionTecnologia /> },
  { path: '/ciencia-tecnologia-innovacion', label: 'Ciencia, Tecnología e Innovación', element: <CienciaTecnologiaInnovacion /> },
  { path: '/mision-vision', label: 'Misión y Visión', element: <MisionVision /> },
//  { path: '/organizacion', label: 'Organización', element: <Organizacion /> },
  { path: '/descripcion-posiciones', label: 'Descripción de Posiciones', element: <DescripcionPosiciones /> },
  { path: '/mbti', label: 'MBTI · Equipo', element: <MBTI /> },
  { path: '/scrum', label: 'Scrum', element: <Scrum /> },
  { path: '/scrum/objetivos', label: 'Objetivos por Área', element: <Objetivos />, hideFromNav: true },
  { path: '/idef0', label: 'IDEF0', element: <Idef0 /> },
  { path: '/fuentes', label: 'Fuentes', element: <Fuentes />, hideFromNav: true },
  { path: '/bpmn', label: 'BPMN', element: <Bpmn /> },
  { path: '/inventario', label: 'Inventario Cloud', element: <Inventario /> },
  { path: '/tableau', label: 'Tableau', element: <Tableau /> },
  { path: '/weka', label: 'Weka', element: <Weka /> },
  { path: '/presupuesto', label: 'Presupuesto', element: <Presupuesto /> },
  { path: '/soporte-externo', label: 'Soporte Externo', element: <Servicios /> },
  { path: '/servicios', label: 'Soporte Externo', element: <Navigate to="/soporte-externo" replace />, hideFromNav: true },
  { path: '/plan-de-contingencia', label: 'Plan de Contingencia', element: <PlanContingencia /> },
  { path: '/conclusiones', label: 'Conclusiones y Recomendaciones', element: <Conclusiones /> },
  { path: '/contactos', label: 'Contactos', element: <Contactos /> },
];
