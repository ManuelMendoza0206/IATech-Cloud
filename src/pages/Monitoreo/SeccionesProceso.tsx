import { SectionHeader, Source, Sources } from '../../components/content';
import { SOURCES_BY_ID } from '../../data/sources';
import Contador from './Contador';

const fuentesPrtg = ['prtg-home', 'prtg-faq'].map((id) => ({
  label: SOURCES_BY_ID[id].short,
  href: SOURCES_BY_ID[id].href,
}));

// ---------- 1. Ciclo de respuesta a incidentes (proceso, sin cifras) ----------

const PASOS = [
  {
    icono: 'bx-search-alt-2',
    titulo: 'Detectar',
    texto: 'PRTG revisa cada sensor en su intervalo y marca el cambio de estado cuando algo deja de responder.',
  },
  {
    icono: 'bx-bell',
    titulo: 'Alertar',
    texto: 'La notificación llega al equipo por el canal configurado: correo, SMS, Teams o Slack.',
  },
  {
    icono: 'bx-git-compare',
    titulo: 'Diagnosticar',
    texto: 'Se revisa el sensor, el dispositivo y el histórico para separar una falla real de una caída temporal.',
  },
  {
    icono: 'bx-wrench',
    titulo: 'Resolver',
    texto: 'El equipo responsable corrige la causa. Cuando el sensor vuelve a OK, PRTG registra la recuperación.',
  },
  {
    icono: 'bx-file',
    titulo: 'Documentar',
    texto: 'Se anota qué pasó, cuánto duró y qué se cambió, para que el próximo incidente sea más rápido.',
  },
];

export function CicloIncidentes() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
      <SectionHeader
        number="06"
        title="Respuesta a incidentes"
        description="Cada alerta de PRTG sigue el mismo ciclo. Tener los pasos claros evita que cada falla se maneje de forma distinta."
      />

      <ol className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {PASOS.map((p, i) => (
          <li key={p.titulo} className="relative border border-ink-15 bg-paper p-6">
            <span className="swiss-label text-accent">0{i + 1}</span>
            <span className="mt-4 flex h-11 w-11 items-center justify-center bg-ink text-xl text-accent">
              <i className={`bx ${p.icono}`} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">{p.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-60">{p.texto}</p>
          </li>
        ))}
      </ol>

      <Sources>
        {fuentesPrtg.map((f) => (
          <li key={f.href}>
            <Source label={f.label} href={f.href} />
          </li>
        ))}
      </Sources>
    </div>
  );
}

// ---------- 2. KPIs del área (demo) ----------

const KPIS = [
  { valor: 99, sufijo: '%', titulo: 'Disponibilidad objetivo', texto: 'Meta mensual para los servicios críticos.' },
  { valor: 5, sufijo: ' min', titulo: 'Tiempo de detección', texto: 'Desde que un sensor falla hasta la alerta.' },
  { valor: 30, sufijo: ' min', titulo: 'Tiempo de respuesta', texto: 'Desde la alerta hasta que alguien atiende el caso.' },
  { valor: 0, sufijo: '', titulo: 'Incidentes sin documentar', texto: 'Meta: ningún caso cerrado sin registro.' },
];

export function Kpis() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          number="07"
          title="Indicadores del área"
          description="Metas de ejemplo para medir el monitoreo. Son valores de demostración, no resultados de tu operación."
        />
        <span className="swiss-label border border-ink px-3 py-1.5 text-ink">Demo</span>
      </div>

      <ul className="mt-12 grid gap-px bg-ink-15 sm:grid-cols-2 lg:grid-cols-4">
        {KPIS.map((k) => (
          <li key={k.titulo} className="group bg-paper p-8 transition hover:bg-ink hover:text-paper">
            <p className="swiss-label text-ink-60 group-hover:text-paper/70">{k.titulo}</p>
            <p className="mt-6 text-6xl font-black leading-none tracking-tight text-ink group-hover:text-paper">
              <Contador valor={k.valor} />
              <span className="ml-1 text-2xl text-accent">{k.sufijo}</span>
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ink-60 group-hover:text-paper/70">{k.texto}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------- 3. Preguntas frecuentes ----------

const FAQS = [
  {
    p: '¿Qué es un sensor en PRTG?',
    r: 'Es un aspecto concreto que se monitorea de un dispositivo, por ejemplo el uso de CPU, el tiempo de respuesta de una web o el espacio libre de un disco.',
  },
  {
    p: '¿Qué es una sonda?',
    r: 'Es el componente que recoge los datos de los sensores, puede estar en el mismo equipo que el servidor central o en otra ubicación, y envía la información al servidor central.',
  },
  {
    p: '¿Cuántos sensores necesita un dispositivo?',
    r: 'Según Paessler, suelen bastar entre 5 y 10 sensores por dispositivo para cubrir su monitoreo completo.',
  },
  {
    p: '¿Hay una versión gratuita?',
    r: 'Sí. La edición Freeware incluye hasta 100 sensores para unos 10 dispositivos. También hay una prueba de 30 días sin límite de sensores.',
  },
  {
    p: '¿Por qué un sensor aparece como Pausado?',
    r: 'Porque fue pausado a propósito o porque está deshabilitado en PRTG. En esta página, los sensores deshabilitados se muestran como pausados aunque PRTG los reporte como OK.',
  },
  {
    p: '¿Por qué un sensor aparece en Fallo?',
    r: 'Porque PRTG no pudo obtener la respuesta esperada. La causa aparece en el mensaje del sensor, por ejemplo un error de conexión o de credenciales.',
  },
];

export function Preguntas() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
      <SectionHeader number="08" title="Preguntas frecuentes" />

      <div className="mt-12 divide-y divide-ink-15 border-y border-ink-15">
        {FAQS.map((f) => (
          <details key={f.p} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-ink">
              {f.p}
              <i className="bx bx-plus text-2xl text-accent transition group-open:rotate-45" aria-hidden="true" />
            </summary>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-60">{f.r}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
