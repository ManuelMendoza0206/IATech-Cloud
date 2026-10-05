const PASOS = [
  {
    title: 'Escribir a la persona indicada',
    text: 'Cada tarjeta abre el cliente de correo con el asunto y el cuerpo ya redactados. Solo falta completar el motivo.',
  },
  {
    title: 'Incluir el contexto del pedido',
    text: 'Qué sistema o servicio afecta, desde cuándo ocurre el problema y si hay usuarios afectados.',
  },
  {
    title: 'Esperar confirmación antes de deadlines',
    text: 'El área define el alcance y los tiempos en el Planning de cada Sprint, no por correo.',
  },
];

export function ComoEscribir() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl text-navy-900 sm:text-4xl">
            Cómo escribir al área
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {PASOS.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-navy-900/10 bg-mist/50 p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy-950 font-mono text-xs font-semibold text-signal">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/80">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}