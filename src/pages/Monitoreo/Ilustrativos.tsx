import GraficoLinea, { type Punto } from './GraficoLinea';
import { useEntradaEscalonada } from './animaciones';

// Datos hipotéticos para ilustrar cómo se vería un ambiente de trabajo real.
// NO son mediciones de PRTG: se generan con una fórmula fija.

const HORAS = 24;
const AHORA = Date.UTC(2026, 10, 22, 12, 0, 0);

function serie(fn: (i: number) => number): Punto[] {
  return Array.from({ length: HORAS }, (_, i) => ({
    t: AHORA - (HORAS - 1 - i) * 3600000,
    v: Math.max(0, fn(i)),
  }));
}

const CASOS = [
  {
    titulo: 'Uso de CPU · servidor de aplicaciones',
    unidad: '%',
    datos: serie((i) => 45 + 14 * Math.sin(i / 2.2) + 6 * Math.sin(i * 1.3)),
    lectura: 'Picos en horario laboral. Si se sostiene arriba del 80 %, conviene escalar el servidor.',
  },
  {
    titulo: 'Tiempo de respuesta · portal web',
    unidad: 'ms',
    datos: serie((i) => 260 + 70 * Math.sin(i / 3) + (i === 15 ? 380 : 0)),
    lectura: 'Un pico aislado a media tarde indica una consulta lenta o un despliegue que coincidió.',
  },
  {
    titulo: 'Tráfico · enlace principal',
    unidad: 'Mbps',
    datos: serie((i) => 120 + 45 * Math.sin((i - 6) / 3.5) + 10 * Math.sin(i * 2.1)),
    lectura: 'El tráfico crece en la mañana y baja de noche: útil para dimensionar el ancho de banda.',
  },
  {
    titulo: 'Espacio libre · disco de datos',
    unidad: 'GB',
    datos: serie((i) => 182 - i * 0.9 + 1.5 * Math.sin(i)),
    lectura: 'Caída constante: con esta tendencia, la alerta de espacio mínimo llegaría en pocos días.',
  },
];

export default function Ilustrativos() {
  const tarjetasRef = useEntradaEscalonada<HTMLUListElement>('li');
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
      <div className="swiss-grid">
        <div className="col-span-full sm:col-span-8">
          <span className="swiss-label block text-accent">Ejemplos ilustrativos</span>
          <h2 className="swiss-display-sm mt-6 text-ink">Cómo se vería en un ambiente real</h2>
          <p className="mt-6 max-w-2xl border-l-2 border-ink-15 pl-5 text-base leading-relaxed text-ink-60">
            Cuatro ejemplos de la información que PRTG puede mostrar en un ambiente de trabajo.
            Son datos de demostración, no mediciones de tu infraestructura.
          </p>
        </div>

        <ul ref={tarjetasRef} className="col-span-full mt-12 grid gap-6 sm:grid-cols-2">
          {CASOS.map((c) => (
            <li key={c.titulo} className="border border-ink-15 bg-paper p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-lg font-semibold text-ink">{c.titulo}</h3>
                <span className="swiss-label shrink-0 border border-ink px-2 py-1 text-[10px]">
                  Demo
                </span>
              </div>
              <div className="mt-6">
                <GraficoLinea datos={c.datos} unidad={c.unidad} />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-ink-60">{c.lectura}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
