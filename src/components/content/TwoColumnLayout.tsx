import type { TwoColumnLayoutProps } from './types';
import { Photo } from './Photo';

export function TwoColumnLayout({
  children,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  imagePending,
  id,
}: TwoColumnLayoutProps) {
  const isRight = imagePosition === 'right';

  return (
    <section id={id} className="border-b border-ink bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="swiss-grid items-center gap-y-10">
          <div className={`col-span-full sm:col-span-6 ${isRight ? 'sm:col-start-1' : 'sm:col-start-7 sm:order-2'}`}>
            {children}
          </div>

          <div className={`col-span-full sm:col-span-5 ${isRight ? 'sm:col-start-8' : 'sm:col-start-1 sm:order-1'}`}>
            <Photo
              src={imageSrc}
              alt={imageAlt}
              pending={imagePending}
              aspect="16/9"
              caption={false}
            />
            <p className="swiss-label mt-3 border-t border-ink-15 pt-2">{imageAlt}</p>
          </div>
        </div>
      </div>
    </section>
  );
}