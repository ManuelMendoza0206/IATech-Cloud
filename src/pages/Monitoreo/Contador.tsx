import { useEffect, useRef, useState } from 'react';
import { animate } from 'animejs';
import { reduceMotion } from './animaciones';

// Número que cuenta desde su valor anterior hasta el nuevo (anime.js).
export default function Contador({ valor, className = '' }: { valor: number; className?: string }) {
  const [mostrado, setMostrado] = useState(0);
  const actual = useRef(0);

  useEffect(() => {
    if (reduceMotion()) return;
    const objeto = { v: actual.current };
    animate(objeto, {
      v: valor,
      duration: 1200,
      ease: 'outExpo',
      onUpdate: () => {
        actual.current = objeto.v;
        setMostrado(Math.round(objeto.v));
      },
    });
  }, [valor]);

  // Con movimiento reducido se muestra el valor directamente, sin animar.
  return <span className={className}>{reduceMotion() ? valor : mostrado}</span>;
}
