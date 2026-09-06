interface TeamCardProps {
  type: string;
  name: string;
  description: string;
  strengths: string[];
  role: string;
  imageSrc: string;
  accentColor: string;
}

export default function TeamCard({
  type,
  name,
  description,
  strengths,
  role,
  imageSrc,
  accentColor,
}: TeamCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-signal/50 hover:shadow-xl">
      <div
        className="absolute inset-x-0 top-0 h-1 opacity-0 transition group-hover:opacity-100"
        style={{ background: accentColor }}
      />

      <div className="flex flex-col sm:flex-row">
        <div className="relative shrink-0 overflow-hidden sm:h-auto sm:w-48 lg:w-56">
          <img
            src={imageSrc}
            alt={`${name} — ${type}`}
            className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105 sm:h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent sm:bg-gradient-to-r" />
          <span
            className="absolute bottom-3 left-3 inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-lg"
            style={{ background: accentColor }}
          >
            {type}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-signal">
              {role}
            </span>
          </div>

          <h3 className="mt-2 font-display text-xl font-semibold text-navy-900 transition group-hover:text-signal sm:text-2xl">
            {name}
          </h3>

          <p className="mt-3 flex-1 leading-relaxed text-navy-700/75">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {strengths.map((s) => (
              <span
                key={s}
                className="rounded-full border border-navy-700/15 bg-mist px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-navy-900 transition group-hover:border-signal/30"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
