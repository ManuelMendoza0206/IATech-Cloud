import Hero from './sections/Hero';
import Presentacion from './sections/Presentacion';
import Capacidades from './sections/Capacidades';
import Numeros from './sections/Numeros';
import Explorar from './sections/Explorar';

export default function Home() {
  return (
    <div>
      <Hero />
      <Presentacion />
      <Capacidades />
      <Numeros />
      <Explorar />
    </div>
  );
}