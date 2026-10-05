interface TeamCardProps {
  type: string;
  name: string;
  description: string;
  strengths: string[];
  role: string;
  imageSrc: string;
  accentColor: string;
}

export default function TeamCard({ type, name, description, strengths, role, imageSrc, accentColor }: TeamCardProps) {
  return (
    <article className="swiss-cell reveal group relative flex flex-col overflow-hidden transition duration-300 sm:flex-row">
      <span
        className="absolute inset-x-0 top-0 h-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: accentColor }}
        aria-hidden="true"
      />

      <div className="relative h-72 w-full shrink-0 overflow-hidden bg-paper sm:h-auto sm:w-[280px] lg:w-[340px] xl:w-[380px]">
        <img
          src={imageSrc}
          alt={`${name} — ${type}`}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        
        <span
          className="absolute bottom-4 left-4 inline-flex items-center px-3.5 py-1.5 font-mono text-[12px] font-bold uppercase tracking-[0.08em] text-white"
          style={{ background: accentColor }}
        >
          {type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">{role}</p>
        <h3 className="mt-2 font-display text-[1.4rem] font-semibold leading-tight tracking-[-0.01em] text-ink transition group-hover:text-ink sm:text-[1.65rem] lg:text-[1.8rem]">
          {name}
        </h3>
        <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-ink-60/70 sm:text-base">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {strengths.map((s) => (
            <span
              key={s}
              className="swiss-cell px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.09em] text-ink transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
