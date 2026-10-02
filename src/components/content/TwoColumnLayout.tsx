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
    <section id={id} className="border-b border-ink bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="swiss-grid items-center gap-y-10">
          <div className={`col-span-full sm:col-span-6 ${isRight ? 'sm:col-start-1' : 'sm:col-start-7 sm:order-2'}`}>
            {children}
          </div>

          <div className={`col-span-full sm:col-span-5 ${isRight ? 'sm:col-start-8' : 'sm:col-start-1 sm:order-1'}`}>
            {imgError ? (
              <div className="flex aspect-[4/3] items-center border border-ink bg-surface">
                <span className="swiss-label p-6">{imageAlt}</span>
              </div>
            ) : (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="aspect-[4/3] w-full border border-ink object-cover grayscale"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            )}
            <p className="swiss-label mt-3 border-t border-ink-15 pt-2">{imageAlt}</p>
          </div>
        </div>
      </div>
    </section>
  );
}