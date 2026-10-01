import Hero from './sections/Hero';
import Presentacion from './sections/Presentacion';
import Capacidades from './sections/Capacidades';
import Numeros from './sections/Numeros';
import Explorar from './sections/Explorar';
import { Reveal } from '../../components/ui/Reveal';

export default function Home() {
  return (
    <div className="font-neu-body">
      <Hero />
      <Reveal stagger>
        <Presentacion />
      </Reveal>
      <Reveal stagger>
        <Capacidades />
      </Reveal>
      <Reveal stagger>
        <Numeros />
      </Reveal>
      <Reveal stagger>
        <Explorar />
      </Reveal>
    </div>
  );
}