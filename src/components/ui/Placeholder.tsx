interface PagePlaceholderProps {
  title: string;
}

export default function PagePlaceholder({ title }: PagePlaceholderProps) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6 py-32 sm:px-10">
      <span className="font-mono text-xs uppercase tracking-widest text-signal">Próximamente</span>
      <h1 className="mt-4 font-display text-4xl text-navy-900 sm:text-5xl">{title}</h1>
      <p className="mt-4 text-navy-700/70">Esta sección está en desarrollo.</p>
    </section>
  );
}