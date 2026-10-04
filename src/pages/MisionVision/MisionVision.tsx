import Hero from './sections/Hero';
import SectionNav from './sections/SectionNav';
import Declaraciones from './sections/Declaraciones';
import Concepto from './sections/Concepto';
import Pilares from './sections/Pilares';
import Compromiso from './sections/Compromiso';

export default function MisionVision() {
  return (
    <>
      <Hero />
      <div id="content-start" />
      <SectionNav />
      <Declaraciones />
      <Concepto />
      <Pilares />
      <Compromiso />
    </>
  );
}
