import { TwoColumnLayout, SectionHeader, BulletList } from '../../../components/content';
import type { TalentoItem } from '../types';

const DATA: TalentoItem[] = [
  { title: 'Desarrollo de habilidades', text: 'Capacitación y actualización técnica continua.' },
  { title: 'Atracción y retención', text: 'Captación y fidelización de perfiles técnicos clave.' },
  { title: 'Cultura organizacional', text: 'Fomento del trabajo colaborativo y la innovación tecnológica.' },
];

export function GestionTalento() {
  return (
    <TwoColumnLayout
      imageSrc="https://res.cloudinary.com/uvggt/image/upload/f_auto/v1600446040/2020/09%20SEPTIEMBRE/Gestion%20Talento%20Humano/recurso_humano_portada.jpg"
      imageAlt="Gestión del talento humano en tecnología"
      bg="mist"
    >
      <SectionHeader
        number="02"
        title="Gestión del Talento Humano"
        description="El capital humano es el activo más valioso de cualquier organización tecnológica. Gestionarlo correctamente es la diferencia entre liderar y rezagarse."
      />
      <BulletList items={DATA} />
    </TwoColumnLayout>
  );
}
