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
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-900/8 bg-white shadow-sm transition duration-300 hover:border-navy-900/15 hover:shadow-[0_16px_40px_rgba(5,11,24,0.08)] sm:flex-row">
      <span
        className="absolute inset-x-0 top-0 h-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: accentColor }}
        aria-hidden="true"
      />

      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-mist sm:h-auto sm:w-[220px] lg:w-[240px]">
        <img
          src={imageSrc}
          alt={`${name} — ${type}`}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/0 to-transparent sm:bg-gradient-to-r" />
        <span
          className="absolute bottom-3 left-3 inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-white shadow-md"
          style={{ background: accentColor }}
        >
          {type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-signal">{role}</p>
        <h3 className="mt-1.5 font-display text-[1.25rem] font-semibold leading-tight tracking-[-0.01em] text-navy-950 transition group-hover:text-navy-900 sm:text-[1.4rem]">
          {name}
        </h3>
        <p className="mt-3 max-w-[60ch] text-[14px] leading-relaxed text-navy-700/70">{description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {strengths.map((s) => (
            <span
              key={s}
              className="rounded-full border border-navy-900/10 bg-mist/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.09em] text-navy-900 transition group-hover:border-navy-900/15 group-hover:bg-mist"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
