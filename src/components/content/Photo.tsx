import { useState } from 'react';

/**
 * Imagen con estado de carga designed.
 *
 * Reemplaza los `<img>` sueltos y las URLs hotlinked. Dos motivos:
 *
 * 1. Una imagen que falla no puede dejar un hueco vacío. Cuando el archivo
 *    no está en `public/`, la placa muestra el nombre exacto del archivo
 *    que falta y qué debería contener. El sitio nunca se ve roto.
 * 2. Toda imagen del sitio pasa por acá, así que el origen de cada archivo
 *    queda declarado en el propio código.
 */

interface PhotoProps {
  /** Ruta dentro de `public/`, por ejemplo `/images/novedad1.jpg`. */
  src: string;
  /** Texto alternativo. Describe el contenido, no el diseño. */
  alt: string;
  /** Qué debería mostrarse. Se usa en la placa cuando falta el archivo. */
  pending?: string;
  /** Relación de aspecto CSS, por ejemplo `4/3`. */
  aspect?: string;
  className?: string;
  /** Modificadores de la imagen cuando sí carga. */
  imgClassName?: string;
  sizes?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  /** Muestra el texto de la placa debajo de la imagen. Por defecto, sí. */
  caption?: boolean;
}

export function Photo({
  src,
  alt,
  pending,
  aspect = '4/3',
  className = '',
  imgClassName = '',
  sizes,
  width,
  height,
  priority = false,
  caption = true,
}: PhotoProps) {
  const [failed, setFailed] = useState(false);
  const filename = src.split('/').pop() ?? src;

  return (
    <figure className={className}>
      <div
        className={`relative w-full overflow-hidden border border-ink bg-surface ${
          failed ? '' : 'aspect-[' + aspect + ']'
        }`}
      >
        {failed ? (
          <PendingPlate filename={filename} pending={pending} />
        ) : (
          <img
            src={src}
            alt={alt}
            sizes={sizes}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
            decoding="async"
            onError={() => setFailed(true)}
            className={`h-full w-full object-cover ${imgClassName}`}
          />
        )}
      </div>

      {caption && (
        <figcaption className="swiss-label mt-2 border-t border-ink-15 pt-2">
          {failed ? (
            <span className="text-accent">Imagen pendiente · {filename}</span>
          ) : (
            alt
          )}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Placa para un archivo que todavía no está en `public/`.
 *
 * Se lee como una pieza del sistema, no como un error: mismo fondo, misma
 * retícula, mismo peso de línea. Muestra el nombre del archivo que falta y
 * qué imagen corresponde.
 */
function PendingPlate({ filename, pending }: { filename: string; pending?: string }) {
  return (
    <div className="flex min-h-[12rem] w-full flex-col justify-between bg-paper p-5 sm:min-h-[16rem] sm:p-6">
      <div aria-hidden="true" className="space-y-2">
        <span className="swiss-rule-soft block" />
        <span className="swiss-rule-soft block w-4/5" />
        <span className="swiss-rule-soft block w-3/5" />
      </div>

      <div>
        <p className="swiss-label text-accent">Falta el archivo</p>
        <p className="mt-2 font-display text-base font-black leading-tight break-all text-ink sm:text-lg">
          public/images/{filename}
        </p>
        {pending && (
          <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-ink-60">{pending}</p>
        )}
      </div>
    </div>
  );
}

export default Photo;
