import { useEffect, useState } from 'react';
import { Reveal } from '../../components/ui/Reveal';
import GraficoLinea, { type Punto } from './GraficoLinea';
import { QueEsPRTG, ValorCloud, ValorEmpresas } from './SeccionesInformativas';
import Ilustrativos from './Ilustrativos';
import { ComoFunciona, Disponibilidad, MapaInfraestructura } from './SeccionesTecnicas';
import { Catalogo, Escalabilidad, Eventos } from './SeccionesDatos';
import { CicloIncidentes, Kpis, Preguntas } from './SeccionesProceso';
import Contador from './Contador';
import { useEntradaEscalonada } from './animaciones';

type Sensor = {
  objid: number;
  sensor: string;
  device: string;
  status: string;
  status_raw: number;
  message: string;
  lastvalue: string;
  group?: string;
  uptime_raw?: number;
  uptimetime?: string;
  type?: string;
  type_raw?: string;
};

type Estado = 'ok' | 'warn' | 'down' | 'paused' | 'unknown';
type Rango = '1d' | '7d';

const ETIQUETA: Record<Estado, string> = {
  ok: 'OK',
  warn: 'Advertencia',
  down: 'Fallo',
  paused: 'Pausado',
  unknown: 'Desconocido',
};

const RANGOS: Record<Rango, { etiqueta: string; dias: number; avg: number }> = {
  '1d': { etiqueta: '24 horas', dias: 1, avg: 300 },
  '7d': { etiqueta: '7 días', dias: 7, avg: 3600 },
};

const COLUMNAS = 'objid,sensor,device,group,status,message,lastvalue,uptime_raw,uptimetime,type,type_raw';
const INTERVALO_MS = 30000;

// Códigos status_raw de la API de PRTG.
function estadoDe(statusRaw: number): Estado {
  switch (statusRaw) {
    case 3:
      return 'ok';
    case 4:
    case 10:
      return 'warn';
    case 5:
    case 13:
    case 14:
      return 'down';
    case 7:
    case 8:
    case 9:
    case 11:
    case 12:
      return 'paused';
    default:
      return 'unknown';
  }
}

// Un sensor deshabilitado en PRTG sigue reportando OK; aquí se muestra como pausado.
function estadoSensor(s: Sensor): Estado {
  if (s.lastvalue.trim().toLowerCase() === 'disabled') return 'paused';
  return estadoDe(s.status_raw);
}

// PRTG devuelve algunos campos como HTML (p. ej. <div class="status">OK...</div>).
function limpiar(texto: string): string {
  const sinEtiquetas = texto.replace(/<[^>]*>/g, ' ');
  const decodificado = sinEtiquetas
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'");
  return decodificado.replace(/\s+/g, ' ').trim();
}

// Fecha para pedir datos a PRTG con fechas explícitas: "2026-11-20-17-05-31".
function formatoPrtg(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}-${p(d.getHours())}-${p(d.getMinutes())}-${p(d.getSeconds())}`;
}

// Fecha que devuelve PRTG en histórico: "21/11/2026 17:00:00 - 18:00:00" (toma la de inicio).
function parseFechaPrtg(texto: string): number {
  const [fecha, hora] = texto.split(' - ')[0].trim().split(' ');
  const [d, mo, y] = fecha.split('/').map(Number);
  const [h, mi, s] = hora.split(':').map(Number);
  return new Date(y, mo - 1, d, h, mi, s).getTime();
}

// Un sensor puede tener varios canales (p. ej. tiempo de carga y tiempo de inactividad).
// Se grafica el canal con más valores en el rango, y se descartan los intervalos vacíos.
function puntosDeXml(texto: string): Punto[] {
  if (!texto.includes('<histdata')) return [];
  const xml = new DOMParser().parseFromString(texto, 'application/xml');
  const porCanal = new Map<string, Punto[]>();

  xml.querySelectorAll('item').forEach((item) => {
    const fecha = item.querySelector('datetime')?.textContent ?? '';
    const t = parseFechaPrtg(fecha);
    if (!Number.isFinite(t)) return;
    item.querySelectorAll('value_raw').forEach((el) => {
      const texto = el.textContent?.trim() ?? '';
      const v = Number(texto);
      if (texto === '' || !Number.isFinite(v)) return;
      const canal = el.getAttribute('channel') ?? '';
      const lista = porCanal.get(canal) ?? [];
      lista.push({ t, v });
      porCanal.set(canal, lista);
    });
  });

  let mejor: Punto[] = [];
  porCanal.forEach((lista) => {
    if (lista.length > mejor.length) mejor = lista;
  });
  return mejor.sort((a, b) => a.t - b.t);
}

export default function Monitoreo() {
  const [sensores, setSensores] = useState<Sensor[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actualizado, setActualizado] = useState<Date | null>(null);

  const resumenRef = useEntradaEscalonada<HTMLDivElement>('.mon-item');
  const tablaRef = useEntradaEscalonada<HTMLDivElement>('tbody tr', !cargando && !error && sensores.length > 0);
  const [seleccionado, setSeleccionado] = useState<number | null>(null);
  const [rango, setRango] = useState<Rango>('1d');
  const [historico, setHistorico] = useState<Punto[]>([]);
  const [cargandoHist, setCargandoHist] = useState(false);
  const [errorHist, setErrorHist] = useState<string | null>(null);

  // Sensor activo: el elegido, o el primero de la lista.
  const activo = seleccionado ?? sensores[0]?.objid ?? null;
  const sensorActivo = sensores.find((s) => s.objid === activo);

  useEffect(() => {
    const controlador = new AbortController();

    async function cargar() {
      try {
        const url = `/prtg-api/table.json?content=sensors&output=json&columns=${COLUMNAS}&count=500`;
        const res = await fetch(url, { signal: controlador.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setSensores(data.sensors ?? []);
        setError(null);
        setActualizado(new Date());
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') return;
        setError(
          'No se pudo conectar con PRTG. Revisa PRTG_URL y PRTG_API_KEY en .env.local y reinicia el servidor de desarrollo.',
        );
      } finally {
        setCargando(false);
      }
    }

    cargar();
    const id = window.setInterval(cargar, INTERVALO_MS);
    return () => {
      controlador.abort();
      window.clearInterval(id);
    };
  }, []);

  // Histórico del sensor activo según el rango elegido.
  useEffect(() => {
    if (activo === null) return;
    const controlador = new AbortController();
    const { dias, avg } = RANGOS[rango];

    async function cargarHistorico() {
      setCargandoHist(true);
      setErrorHist(null);
      try {
        const ahora = new Date();
        const desde = new Date(ahora.getTime() - dias * 86400000);
        const url = `/prtg-api/historicdata.xml?id=${activo}&sdate=${formatoPrtg(desde)}&edate=${formatoPrtg(ahora)}&avg=${avg}`;
        const res = await fetch(url, { signal: controlador.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        // PRTG responde texto plano cuando aún no hay datos suficientes.
        const texto = await res.text();
        const puntos = puntosDeXml(texto);
        setHistorico(puntos);
        if (puntos.length < 2) {
          setErrorHist('PRTG todavía no tiene suficientes datos de este sensor para graficarlo.');
        }
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') return;
        setHistorico([]);
        setErrorHist('No se pudo cargar el histórico de este sensor.');
      } finally {
        setCargandoHist(false);
      }
    }

    cargarHistorico();
    return () => controlador.abort();
  }, [activo, rango]);

  const conteo = sensores.reduce<Record<Estado, number>>(
    (acc, s) => {
      acc[estadoSensor(s)] += 1;
      return acc;
    },
    { ok: 0, warn: 0, down: 0, paused: 0, unknown: 0 },
  );

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid py-20 sm:py-28">
            <div className="col-span-full sm:col-span-8">
              <Reveal asHero>
                <span className="swiss-label hero-item flex items-center gap-3 text-accent">
                  <span className="inline-block h-2 w-8 bg-accent" aria-hidden="true" />
                  Monitoreo de red
                </span>

                {!error && (
                  <span className="hero-item mt-6 inline-flex items-center gap-3 border border-ink px-3 py-1.5">
                    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                    </span>
                    <span className="swiss-label text-ink">
                      En vivo{actualizado ? ` · ${actualizado.toLocaleTimeString('es-PE')}` : ''}
                    </span>
                  </span>
                )}

                <h1 className="swiss-display hero-item mt-8 text-ink">
                  Monitoreo<span className="text-accent">.</span>
                </h1>

                <p className="hero-item mt-10 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  Estado en vivo de los sensores de PRTG Network Monitor. Los datos se actualizan
                  cada {INTERVALO_MS / 1000} segundos.
                </p>

                <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
                  <a
                    href="http://127.0.0.1/welcome.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir el centro de monitoreo de PRTG"
                    className="swiss-btn swiss-btn-primary inline-flex items-center gap-2 px-7 py-3 text-[11px] text-paper"
                  >
                    Abrir centro de monitoreo
                    <i className="bx bx-link-external text-base" aria-hidden="true" />
                  </a>
                  <span className="swiss-label text-ink-60">Requiere estar en el equipo donde corre PRTG</span>
                </div>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 sm:col-span-3 sm:col-start-10 sm:mt-0 sm:self-end">
              <p className="swiss-numeral hero-item text-accent">
                <Contador valor={sensores.length} />
              </p>
              <p className="swiss-label mt-2 border-t border-ink pt-3">Sensores totales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es PRTG */}
      <section className="border-b border-ink bg-paper">
        <QueEsPRTG />
      </section>

      {/* Cómo funciona */}
      <section className="border-b border-ink bg-paper">
        <ComoFunciona />
      </section>

      {/* Mapa de infraestructura */}
      {!error && sensores.length > 0 && (
        <section className="border-b border-ink bg-paper">
          <MapaInfraestructura sensores={sensores} />
        </section>
      )}

      {/* Resumen */}
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div ref={resumenRef} className="swiss-grid py-16">
            {(['ok', 'down', 'warn', 'paused'] as Estado[]).map((estado) => (
              <div key={estado} className="mon-item col-span-full border-t border-ink pt-4 sm:col-span-3">
                <p className="swiss-numeral text-ink">
                  <Contador valor={conteo[estado]} />
                </p>
                <p className="swiss-label mt-2">{ETIQUETA[estado]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabla de sensores */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="swiss-grid">
            <div className="col-span-full sm:col-span-8">
              <span className="swiss-label block text-accent">Sensores</span>
              <h2 className="swiss-display-sm mt-6 text-ink">Estado actual</h2>
              {actualizado && (
                <p className="swiss-label mt-4 text-ink-60">
                  Última actualización: {actualizado.toLocaleTimeString('es-PE')}
                </p>
              )}
            </div>

            <div ref={tablaRef} className="col-span-full mt-12">
              {cargando && <p className="swiss-label text-ink-60">Cargando sensores…</p>}

              {error && (
                <p className="border-l-2 border-accent pl-5 text-base leading-relaxed text-ink">
                  {error}
                </p>
              )}

              {!cargando && !error && (
                <div className="overflow-x-auto border-t border-ink">
                  <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-ink">
                        <th className="swiss-label py-4 pr-4 font-medium">Estado</th>
                        <th className="swiss-label py-4 pr-4 font-medium">Sensor</th>
                        <th className="swiss-label py-4 pr-4 font-medium">Dispositivo</th>
                        <th className="swiss-label py-4 pr-4 font-medium">Valor</th>
                        <th className="swiss-label py-4 font-medium">Mensaje</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sensores.map((s) => {
                        const estado = estadoSensor(s);
                        const esActivo = s.objid === activo;
                        return (
                          <tr
                            key={s.objid}
                            onClick={() => setSeleccionado(s.objid)}
                            className={`cursor-pointer border-b border-ink-15 align-top transition-colors hover:bg-ink/5 ${esActivo ? 'bg-ink/5' : ''}`}
                          >
                            <td className="py-4 pr-4">
                              <span className="inline-flex items-center gap-2">
                                {estado === 'down' && (
                                  <span className="relative flex h-2 w-2" aria-hidden="true">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                                  </span>
                                )}
                                <span
                                  className={`swiss-label ${estado === 'down' ? 'text-accent' : 'text-ink'}`}
                                >
                                  {ETIQUETA[estado]}
                                </span>
                              </span>
                            </td>
                            <td className="py-4 pr-4 text-ink">{limpiar(s.sensor)}</td>
                            <td className="py-4 pr-4 text-ink-60">{limpiar(s.device)}</td>
                            <td className="py-4 pr-4 text-ink">{limpiar(s.lastvalue)}</td>
                            <td className="py-4 text-ink-60">{limpiar(s.message)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Disponibilidad */}
      {!error && sensores.length > 0 && (
        <section className="border-t border-ink bg-paper">
          <Disponibilidad sensores={sensores} />
        </section>
      )}

      {/* Escalabilidad (proyección) */}
      <section className="border-t border-ink bg-paper">
        <Escalabilidad />
      </section>

      {/* Eventos recientes */}
      {!error && (
        <section className="border-t border-ink bg-paper">
          <Eventos />
        </section>
      )}

      {/* Histórico */}
      {!error && sensorActivo && (
        <section className="border-t border-ink bg-paper">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
            <div className="swiss-grid">
              <div className="col-span-full sm:col-span-8">
                <span className="swiss-label block text-accent">Histórico</span>
                <h2 className="swiss-display-sm mt-6 text-ink">{limpiar(sensorActivo.sensor)}</h2>
                <p className="swiss-label mt-4 text-ink-60">{limpiar(sensorActivo.device)}</p>
              </div>

              <div className="col-span-full mt-10 flex flex-wrap gap-3 sm:col-span-4 sm:mt-0 sm:justify-end sm:self-end">
                {(Object.keys(RANGOS) as Rango[]).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRango(r)}
                    className={`swiss-btn px-5 py-2.5 text-[11px] ${
                      rango === r ? 'swiss-btn-primary text-paper' : 'swiss-btn-secondary'
                    }`}
                  >
                    {RANGOS[r].etiqueta}
                  </button>
                ))}
              </div>

              <div className="col-span-full mt-12">
                {cargandoHist && <p className="swiss-label text-ink-60">Cargando histórico…</p>}

                {!cargandoHist && errorHist && estadoSensor(sensorActivo) !== 'down' && (
                  <p className="border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60">
                    {errorHist}
                  </p>
                )}

                {!cargandoHist && estadoSensor(sensorActivo) === 'down' && (
                  <p className="border-l-2 border-accent pl-5 text-base leading-relaxed text-ink">
                    Este sensor está en fallo, así que PRTG no registra valores medidos, solo tiempo de
                    inactividad. El gráfico aparecerá cuando vuelva a responder.
                  </p>
                )}

                {!cargandoHist && !errorHist && estadoSensor(sensorActivo) !== 'down' && (
                  <GraficoLinea datos={historico} unidad={sensorActivo.lastvalue.match(/[^\d\s.,-]+$/)?.[0] ?? ''} />
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Valor para empresas y para Cloud */}
      <section className="border-t border-ink bg-paper">
        <Ilustrativos />
      </section>
      {!error && sensores.length > 0 && (
        <section className="border-t border-ink bg-paper">
          <Catalogo sensores={sensores} />
        </section>
      )}
      <section className="border-t border-ink bg-paper">
        <CicloIncidentes />
      </section>
      <section className="border-t border-ink bg-paper">
        <Kpis />
      </section>
      <section className="border-t border-ink bg-paper">
        <Preguntas />
      </section>
      <section className="border-t border-ink bg-paper">
        <ValorEmpresas />
      </section>
      <section className="border-t border-ink bg-paper">
        <ValorCloud />
      </section>
    </div>
  );
}
