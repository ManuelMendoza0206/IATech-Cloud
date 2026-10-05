import { TwoColumnLayout, SectionHeader, BulletList } from '../../../components/content';
import type { TalentoItem } from '../types';

const DATA: TalentoItem[] = [
  { title: 'Desarrollo de habilidades', text: 'Capacitación y actualización técnica continua en cloud, datos y seguridad.' },
  { title: 'Atracción y retención', text: 'Captación y fidelización de perfiles técnicos clave con plan de carrera claro.' },
  { title: 'Cultura organizacional', text: 'Fomento del trabajo colaborativo, la experimentación y la innovación tecnológica.' },
  { title: 'Liderazgo técnico', text: 'Mentoría, comunidades de práctica y gestión del conocimiento entre equipos.' },
];

export function GestionTalento() {
  return (
    <TwoColumnLayout
      imageSrc="/images/gestion-02.jpg"
      imageAlt="Gestión del talento humano en tecnología"
      imagePending="Fotografía de una sesión de trabajo entre dos personas frente a una pantalla, en un ambiente de oficina tecnológica."
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
