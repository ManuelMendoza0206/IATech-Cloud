export interface HeroProps {
  subtitle: string;
  title: string;
  highlight?: string;
  description: string;
  author?: string;
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
  bg?: 'white' | 'mist' | 'navy';
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
