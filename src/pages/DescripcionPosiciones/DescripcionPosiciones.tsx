import { useRef, useState } from 'react';
import OrgChart from './sections/OrgChart';
import PositionCards from './sections/PositionCards';

export default function DescripcionPosiciones() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  function handleOrgSelect(id: string) {
    // Si ya está activo, lo cierra; si no, lo expande y hace scroll
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      // Pequeño delay para que el DOM actualice la altura antes del scroll
      setTimeout(() => {
        cardRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }

  function handleCardToggle(id: string) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  return (
    <>
      <OrgChart activeId={activeId} onSelect={handleOrgSelect} />
      <PositionCards
        expandedId={activeId}
        onToggle={handleCardToggle}
        cardRefs={cardRefs}
      />
    </>
  );
}
