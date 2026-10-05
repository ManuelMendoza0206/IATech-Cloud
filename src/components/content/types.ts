export interface HeroProps {
  subtitle: string;
  title: string;
  highlight?: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Qué imagen se espera, mostrado si el archivo falta. */
  imagePending?: string;
}

export interface SectionHeaderProps {
  number: string;
  title: string;
  description?: string;
  variant?: 'light' | 'dark';
}

export interface TwoColumnLayoutProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  /** Qué imagen se espera en `imageSrc`, mostrado si el archivo falta. */
  imagePending?: string;
  bg?: 'white' | 'mist' | 'navy';
  id?: string;
}

export interface VideoEmbedProps {
  src: string;
  title: string;
}

export interface BulletItem {
  title: string;
  text: string;
}

export interface BulletListProps {
  items: BulletItem[];
  variant?: 'light' | 'dark';
}
