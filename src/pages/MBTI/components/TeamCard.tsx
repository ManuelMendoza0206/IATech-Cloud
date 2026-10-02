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
    <article className="panel group relative flex flex-col overflow-hidden rounded-2xl transition duration-300 sm:flex-row">
      <span
        className="absolute inset-x-0 top-0 h-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: accentColor }}
        aria-hidden="true"
      />

      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-ice-50 sm:h-auto sm:w-[220px] lg:w-[240px]">
        <img
          src={imageSrc}
          alt={`${name} — ${type}`}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cloud-50/55 via-ink-950/0 to-transparent sm:bg-gradient-to-r" />
        <span
          className="absolute bottom-3 left-3 inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-white shadow-md"
          style={{ background: accentColor }}
        >
          {type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-signal">{role}</p>
        <h3 className="mt-1.5 font-display text-[1.25rem] font-semibold leading-tight tracking-[-0.01em] text-ink transition group-hover:text-ink sm:text-[1.4rem]">
          {name}
        </h3>
        <p className="mt-3 max-w-[60ch] text-[14px] leading-relaxed text-ink-700/70">{description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {strengths.map((s) => (
            <span
              key={s}
              className="panel rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.09em] text-ink transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
