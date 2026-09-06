import type { ReactNode } from 'react';
import Home from './pages/Home/Home';
//import AreaTrabajo from './pages/AreaTrabajo/AreaTrabajo';
import GestionTecnologia from './pages/GestionTecnologia/GestionTecnologia';
import CienciaTecnologiaInnovacion from './pages/CienciaTecnologiaInnovacion/CienciaTecnologiaInnovacion';
import MisionVision from './pages/MisionVision/MisionVision';
//import Organizacion from './pages/Organizacion/Organizacion';
import DescripcionPosiciones from './pages/DescripcionPosiciones/DescripcionPosiciones';
import MBTI from './pages/MBTI/MBTI';

export interface AppRoute {
  path: string;
  label: string;
  element: ReactNode;
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
];
