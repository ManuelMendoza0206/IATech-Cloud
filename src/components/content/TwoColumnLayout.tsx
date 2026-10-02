import { useState } from 'react';
import type { TwoColumnLayoutProps } from './types';

const BG_MAP = {
  white: 'bg-ice-50',
  mist: 'bg-ice-50',
  navy: 'bg-ice-50',
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
          <div className="panel absolute -inset-4 -z-10" />
          {imgError ? (
            <div className="chip flex h-64 items-center justify-center">
              <span className="text-sm text-ink-500">{imageAlt}</span>
            </div>
          ) : (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="panel w-full object-cover"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
