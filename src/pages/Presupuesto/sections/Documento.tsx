import { SectionHeader } from '../../../components/content';

const DRIVE_URL =
  'https://docs.google.com/spreadsheets/d/1Rh2leQZQYRSxdFC3Zl0ewtRmyJ5NhX7R/edit?usp=drive_link&ouid=114171327152076986642&rtpof=true&sd=true';

export default function Documento() {
  return (
    <section id="documento" className="border-t border-ink bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="05"
          title="Documento de presupuesto"
          description="El detalle operativo está en un documento compartido. La web muestra solo el resumen conceptual."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="swiss-cell p-6 sm:p-8 lg:col-span-7">
            <span className="swiss-chip inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-accent">
              <i className="bx bx-link-external text-base" aria-hidden="true" />
              Documento · Drive
            </span>

            <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight text-ink">
              Presupuesto del área (documento compartido)
            </h3>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-60 sm:text-lg">
              El documento reúne la planificación y el desglose del presupuesto trabajado por el
              equipo. Centraliza la información para el seguimiento y la toma de decisiones,
              mientras la web se enfoca en el marco conceptual y no en las cifras.
            </p>

            <ul className="mt-8 space-y-3 border-t border-ink-15 pt-6">
              {[
                'Acceso al documento compartido para consulta y trabajo del equipo.',
                'Detalle y valores fuera de la página, en el archivo de Drive.',
                'Referencia para revisar la planificación del periodo.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-60 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="swiss-btn swiss-btn-primary inline-flex items-center gap-2 px-7 py-3 text-[11px]"
              >
                Abrir documento
                <i className="bx bx-link-external text-base" aria-hidden="true" />
              </a>
              <span className="font-mono text-xs uppercase tracking-widest text-ink-40">
                Se abre en una pestaña nueva
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border-l-2 border-ink bg-paper p-6 sm:p-8">
              <span className="swiss-label block text-accent">Nota</span>
              <h4 className="mt-4 font-display text-lg font-extrabold leading-tight text-ink">
                Resumen sin cifras
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-ink-60 sm:text-base">
                Por decisión del equipo, esta página no expone montos ni totales. Explica cómo se
                estructura el presupuesto y ofrece acceso directo al documento con el detalle.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-60 sm:text-base">
                Si necesitás consultar valores específicos, usá el enlace al documento compartido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
