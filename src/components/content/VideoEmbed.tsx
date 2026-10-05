import type { VideoEmbedProps } from './types';

export function VideoEmbed({ src, title }: VideoEmbedProps) {
  return (
    <figure className="mt-8">
      <div className="aspect-video border border-ink bg-surface">
        <iframe
          src={src}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <figcaption className="swiss-label mt-3 border-t border-ink pt-2">{title}</figcaption>
    </figure>
  );
}
