import { useState } from 'react';
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
  id,
}: TwoColumnLayoutProps) {
  const isRight = imagePosition === 'right';
  const [imgError, setImgError] = useState(false);

  return (
    <section id={id} className={`${BG_MAP[bg]} py-16 sm:py-20`}>
      <div className="mx-auto grid max-w-7xl gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className={isRight ? '' : 'order-2'}>
          {children}
        </div>

        <div className={`relative ${isRight ? '' : 'order-1'}`}>
          <div className={`absolute -inset-4 -z-10 rounded-2xl ${IMAGE_BG_MAP[bg]}`} />
          {imgError ? (
            <div className="flex h-64 items-center justify-center rounded-2xl bg-navy-900/5 border border-navy-700/10">
              <span className="text-sm text-navy-700/60">{imageAlt}</span>
            </div>
          ) : (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full rounded-2xl object-cover shadow-xl"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
