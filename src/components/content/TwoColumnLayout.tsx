import type { TwoColumnLayoutProps } from './types';

const BG_MAP = {
  white: 'bg-white',
  mist: 'bg-mist',
  navy: 'bg-navy-900',
} as const;

const IMAGE_BG_MAP = {
  white: 'bg-mist',
  mist: 'bg-white',
  navy: 'bg-signal/10',
} as const;

export function TwoColumnLayout({
  children,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  bg = 'white',
}: TwoColumnLayoutProps) {
  const isRight = imagePosition === 'right';

  return (
    <section className={`${BG_MAP[bg]} py-24 sm:py-32`}>
      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className={isRight ? '' : 'order-2'}>
          {children}
        </div>

        <div className={`relative ${isRight ? '' : 'order-1'}`}>
          <div className={`absolute -inset-4 -z-10 rounded-2xl ${IMAGE_BG_MAP[bg]}`} />
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full rounded-2xl object-cover shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
