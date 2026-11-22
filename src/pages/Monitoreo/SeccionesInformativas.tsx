import { SectionHeader, Source, Sources } from '../../components/content';
import { SOURCES_BY_ID } from '../../data/sources';
import { useEntradaEscalonada } from './animaciones';

type Tarjeta = { icono: string; titulo: string; texto: string };

const QUE_ES: Tarjeta[] = [
  {
    icono: 'bx-search-alt',
    titulo: 'Un sensor por cada aspecto',
    texto:
      'Un sensor es un aspecto concreto que se monitorea de un dispositivo: el uso de CPU, el tiempo de respuesta de una web o el espacio de un disco. PRTG trae más de 250 sensores preconfigurados.',
  },
  {
    icono: 'bx-shield-alt-2',
    titulo: 'Sin agente en cada equipo',
    texto:
      'Monitorea con protocolos que ya existen en el entorno, sin instalar software en cada servidor. Las sondas remotas recogen los datos localmente y los envían al servidor central.',
  },
  {
    icono: 'bx-bell',
    titulo: 'Alertas y mapas en vivo',
    texto:
      'Avisa cuando algo falla o se sale de lo normal, por correo, SMS, Microsoft Teams o Slack. El estado se ve en mapas en tiempo real y en paneles personalizables.',
  },
];

const EMPRESAS: Tarjeta[] = [
  {
    icono: 'bx-time-five',
    titulo: 'Detectar antes de la caída',
    texto:
      'Una alerta temprana sobre un disco casi lleno o una respuesta lenta permite actuar antes de que el servicio falle y afecte a clientes o empleados.',
  },
  {
    icono: 'bx-map-alt',
    titulo: 'Una sola consola',
    texto:
      'Servidores, redes, bases de datos y servicios en la nube aparecen en la misma vista. No hace falta una herramienta distinta para cada parte.',
  },
  {
    icono: 'bx-trending-up',
    titulo: 'Decisiones con historial',
    texto:
      'Los reportes automáticos, diarios, semanales, mensuales o anuales, y el histórico de cada sensor sirven para justificar inversiones y planificar capacidad.',
  },
];

const CLOUD: Tarjeta[] = [
  {
    icono: 'bx-cloud',
    titulo: 'Servicios cloud y local juntos',
    texto:
      'PRTG permite vigilar servicios en la nube desde el mismo panel que la infraestructura local. Es útil cuando la operación es híbrida.',
  },
  {
    icono: 'bx-line-chart',
    titulo: 'Un solo estado de referencia',
    texto:
      'Los mapas y paneles muestran el estado de los servicios cloud en tiempo real, para que el equipo vea de un vistazo qué está sano y qué no.',
  },
  {
    icono: 'bx-group',
    titulo: 'Accesos por rol',
    texto:
      'Los derechos de acceso granulares permiten que cada equipo vea solo lo que le corresponde, separando infraestructura, desarrollo y operación.',
  },
];

// Fuentes tomadas del registro central (src/data/sources.ts).
const FUENTES_PRTG = ['prtg-home', 'prtg-faq']
  .map((id) => SOURCES_BY_ID[id])
  .map((f) => ({ label: f.short, href: f.href }));

function Seccion({
  numero,
  titulo,
  descripcion,
  tarjetas,
}: {
  numero: string;
  titulo: string;
  descripcion: string;
  tarjetas: Tarjeta[];
}) {
  const tarjetasRef = useEntradaEscalonada<HTMLUListElement>('li');
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
      <SectionHeader number={numero} title={titulo} description={descripcion} />

      <ul ref={tarjetasRef} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tarjetas.map((t) => (
          <li
            key={t.titulo}
            className="group border border-ink-15 bg-paper p-6 transition hover:border-ink-40"
          >
            <span className="flex h-11 w-11 items-center justify-center bg-ink text-xl text-accent transition group-hover:bg-accent group-hover:text-paper">
              <i className={`bx ${t.icono}`} aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">{t.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-60">{t.texto}</p>
          </li>
        ))}
      </ul>

      <Sources>
        {FUENTES_PRTG.map((f) => (
          <li key={f.href}>
            <Source label={f.label} href={f.href} />
          </li>
        ))}
      </Sources>
    </div>
  );
}

export function QueEsPRTG() {
  return (
    <Seccion
      numero="01"
      titulo="Qué es PRTG"
      descripcion="PRTG Network Monitor es un software de monitoreo que revisa en un solo lugar redes, servidores, bases de datos, aplicaciones y servicios en la nube."
      tarjetas={QUE_ES}
    />
  );
}

export function ValorEmpresas() {
  return (
    <Seccion
      numero="02"
      titulo="Valor para las empresas"
      descripcion="Detectar fallas a tiempo y tener datos históricos reduce el impacto en la operación y ayuda a tomar mejores decisiones."
      tarjetas={EMPRESAS}
    />
  );
}

export function ValorCloud() {
  return (
    <Seccion
      numero="03"
      titulo="Valor para el área Cloud"
      descripcion="Para un equipo Cloud, PRTG da visibilidad de los servicios en la nube junto con la infraestructura local, desde una misma herramienta."
      tarjetas={CLOUD}
    />
  );
}
