interface Conclusion {
  title: string;
  text: string;
}

const DATA: Conclusion[] = [
  {
    title: "Motor principal",
    text: "La ciencia, la tecnología y la innovación operan como el motor principal del progreso y el desarrollo humano.",
  },
  {
    title: "Inversión continua",
    text: "La inversión continua en I+D es esencial para la sostenibilidad y la prosperidad económica a largo plazo.",
  },
  {
    title: "Colaboración",
    text: "El impacto positivo se maximiza mediante la colaboración coordinada entre el sector público, el privado y la comunidad científica.",
  },
];

export function Conclusiones() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Conclusiones
        </span>
        <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
          El motor del progreso
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {DATA.map((c) => (
            <div
              key={c.title}
              className="swiss-cell p-6"
            >
              <p className="font-display text-xl text-accent">{c.title}</p>
              <p className="mt-2 text-base leading-relaxed text-ink/60">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
