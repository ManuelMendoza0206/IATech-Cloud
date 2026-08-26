import { useRef, useState } from 'react';
import OrgChart from './sections/OrgChart';
import MetricsBar from './sections/MetricsBar';
import CollaborationFlow from './sections/CollaborationFlow';
import PositionCards from './sections/PositionCards';
import TechEcosystem from './sections/TechEcosystem';

export default function DescripcionPosiciones() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  function handleOrgSelect(id: string) {
    // Si ya está activo, lo cierra; si no, lo expande y hace scroll suave
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      setTimeout(() => {
        cardRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }

  function handleCardToggle(id: string) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* 1. Organigrama Interactivo */}
      <OrgChart activeId={activeId} onSelect={handleOrgSelect} />

      {/* 2. Barra de Métricas de Gobernanza Cloud */}
      <MetricsBar />

      {/* 3. Ciclo de Colaboración Cloud */}
      <CollaborationFlow activeId={activeId} onSelect={handleOrgSelect} />

      {/* 4. Fichas Técnicas Detalladas */}
      <PositionCards
        expandedId={activeId}
        onToggle={handleCardToggle}
        cardRefs={cardRefs}
      />

      {/* 5. Ecosistema Tecnológico & Estándares */}
      <TechEcosystem />
    </div>
  );
}
