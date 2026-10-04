import { Link } from 'react-router-dom';

const CONTACTS = [
  {
    name: 'Manuel Jiménez',
    role: 'Administrador DevOps',
    email: 'manuel.jimenez@ucb.edu.bo',
    initials: 'MJ',
  },
  {
    name: 'Joán Riveros',
    role: 'Gerente de Área Cloud',
    email: 'joan.riveros@ucb.edu.bo',
    initials: 'JR',
  },
  {
    name: 'Jaicel Velasco',
    role: 'Arquitecto de Soluciones Cloud',
    email: 'jaicel.velasco@ucb.edu.bo',
    initials: 'JV',
  },
];

const AREA_PAGES = [
  { to: '/', label: 'Inicio' },
  { to: '/gestion-tecnologia', label: 'Gestión de Tecnología' },
  { to: '/ciencia-tecnologia-innovacion', label: 'Ciencia, Tecnología e Innovación' },
  { to: '/mision-vision', label: 'Misión y Visión' },
  { to: '/descripcion-posiciones', label: 'Descripción de Posiciones' },
];

const PRACTICE_PAGES = [
  { to: '/mbti', label: 'MBTI · Equipo' },
  { to: '/scrum', label: 'Scrum' },
  { to: '/idef0', label: 'IDEF0' },
];

function buildMailto(email: string) {
  const subject = 'Consulta desde el sitio IATECH · Área de Servicios Cloud';
  const body = 'Hola,\n\nEscribo desde el sitio web del Área de Servicios Cloud e Integración.\n\nMotivo de la consulta:\n\nSaludos cordiales,';
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const navLink =
  'transition hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 rounded';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-mist">
      {/* Contacto */}
      <section className="border-b border-navy-700/40" aria-labelledby="contacto-heading">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-16">
          <div className="flex flex-col gap-4 border-b border-navy-700/40 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-signal">
                Contacto
              </span>
              <h2
                id="contacto-heading"
                className="mt-3 font-display text-2xl font-semibold sm:text-3xl"
              >
                Escribinos directo al equipo
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mist/60">
              Abrí tu cliente de correo con el asunto y el mensaje ya redactados. Si preferís
              escribir a los tres,Respondé a este mismo correo.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACTS.map((contact) => (
              <li key={contact.email}>
                <a
                  href={buildMailto(contact.email)}
                  className="group flex h-full flex-col rounded-2xl border border-navy-700/50 bg-navy-900/60 p-6 transition hover:-translate-y-1 hover:border-signal/50 hover:bg-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950 font-mono text-sm font-semibold text-signal ring-1 ring-navy-700/60 transition group-hover:bg-signal group-hover:text-navy-950 group-hover:ring-signal">
                      {contact.initials}
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-base font-semibold text-mist">
                        {contact.name}
                      </p>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-mist/50">
                        {contact.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 flex-1 break-all text-sm text-mist/70 transition group-hover:text-mist">
                    {contact.email}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-signal transition group-hover:gap-3">
                    Enviar mensaje
                    <i className="bx bx-send text-base" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Marca y navegación */}
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16">
          <div className="max-w-sm">
            <span className="font-display text-lg tracking-wide">
              IATECH <span className="text-signal">· CLOUD</span>
            </span>
            <p className="mt-3 text-sm text-mist/70">
              Optimizamos y desplegamos los servicios en la nube que sostienen la atención médica de IATECH.
            </p>
            <div className="mt-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mist/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              Servicios operativos
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
            <nav aria-label="Páginas del área">
              <p className="font-mono text-xs uppercase tracking-widest text-mist/50">Área</p>
              <ul className="mt-4 space-y-2 text-sm">
                {AREA_PAGES.map((page) => (
                  <li key={page.to}>
                    <Link to={page.to} className={navLink}>
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Prácticas y proyectos">
              <p className="font-mono text-xs uppercase tracking-widest text-mist/50">
                Prácticas y proyectos
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {PRACTICE_PAGES.map((page) => (
                  <li key={page.to}>
                    <Link to={page.to} className={navLink}>
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-navy-700/60 pt-6 text-xs text-mist/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} IATECH — Área de Servicios Cloud e Integración.</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
