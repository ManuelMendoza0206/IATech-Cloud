interface PagePlaceholderProps {
  title: string;
}

export default function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center bg-paper px-6 py-32 sm:px-10">
      <span className="reveal font-mono text-xs uppercase tracking-widest text-accent">Próximamente</span>
      <h1 className="reveal mt-4 font-display text-4xl text-ink sm:text-5xl">{title}</h1>
      <p className="mt-4 text-ink-70">Esta sección está en desarrollo.</p>
    </section>
  );
}