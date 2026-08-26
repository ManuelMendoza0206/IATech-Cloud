import type { VideoEmbedProps } from './types';

export function VideoEmbed({ src, title }: VideoEmbedProps) {
  return (
    <div className="mt-8 aspect-video overflow-hidden rounded-2xl shadow-xl">
      <iframe
        src={src}
        title={title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
