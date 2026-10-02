import { useState } from 'react';
import type { TwoColumnLayoutProps } from './types';

export function TwoColumnLayout({
  children,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  id,
}: TwoColumnLayoutProps) {
  const isRight = imagePosition === 'right';
  const [imgError, setImgError] = useState(false);

  return (
    <section id={id} className="ed-rule bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className={`lg:col-span-7 ${isRight ? 'lg:col-start-1' : 'lg:col-start-6'}`}>
            {children}
          </div>

          <figure className={`lg:col-span-4 ${isRight ? 'lg:col-start-9' : 'lg:col-start-1'}`}>
            {imgError ? (
              <div className="ed-figure flex aspect-[4/3] items-center">
                <span className="ed-caption p-6">{imageAlt}</span>
              </div>
            ) : (
              <div className="ed-figure">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="aspect-[4/3] w-full object-cover grayscale"
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
              </div>
            )}
            <figcaption className="ed-caption ed-rule-soft mt-3 pt-2">{imageAlt}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}