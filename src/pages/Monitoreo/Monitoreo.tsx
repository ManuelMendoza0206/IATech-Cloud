import { useEffect, useState } from 'react';
import { Reveal } from '../../components/ui/Reveal';
import GraficoLinea, { type Punto } from './GraficoLinea';
import { QueEsPRTG, ValorCloud, ValorEmpresas } from './SeccionesInformativas';

type Sensor = {
  objid: number;
  sensor: string;
  device: string;
  status: string;
  status_raw: number;
  message: string;
  lastvalue: string;
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

const RANGOS: Record<Rango, { etiqueta: string; sdate: string; avg: number }> = {
  '1d': { etiqueta: '24 horas', sdate: '-1d', avg: 300 },
  '7d': { etiqueta: '7 días', sdate: '-7d', avg: 3600 },
};

const COLUMNAS = 'objid,sensor,device,status,message,lastvalue';
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

// Fecha de PRTG: "2026-11-17-11-00-00" (año-mes-día-hora-minuto-segundo).
function parseFechaPrtg(texto: string): number {
  const [y, mo, d, h, mi, s] = texto.split('-').map(Number);
  return new Date(y, mo - 1, d, h, mi, s).getTime();
}

export default function Monitoreo() {
  const [sensores, setSensores] = useState<Sensor[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actualizado, setActualizado] = useState<Date | null>(null);

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
    const { sdate, avg } = RANGOS[rango];

    async function cargarHistorico() {
      setCargandoHist(true);
      setErrorHist(null);
      try {
        const url = `/prtg-api/historicdata.json?id=${activo}&sdate=${sdate}&edate=0&avg=${avg}&output=json`;
        const res = await fetch(url, { signal: controlador.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        // PRTG responde texto plano cuando aún no hay datos suficientes.
        const texto = await res.text();
        let data: { histdata?: { datetime: string; value_raw: number | string }[] } = {};
        try {
          data = JSON.parse(texto);
        } catch {
          data = {};
        }
        const puntos: Punto[] = (data.histdata ?? [])
          .map((h: { datetime: string; value_raw: number | string }) => ({
            t: parseFechaPrtg(h.datetime),
            v: Number(h.value_raw),
          }))
          .filter((p: Punto) => Number.isFinite(p.t) && Number.isFinite(p.v));
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

                <h1 className="swiss-display hero-item mt-8 text-ink">
                  Monitoreo<span className="text-accent">.</span>
                </h1>

                <p className="hero-item mt-10 max-w-2xl border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60 sm:text-lg">
                  Estado en vivo de los sensores de PRTG Network Monitor. Los datos se actualizan
                  cada {INTERVALO_MS / 1000} segundos.
                </p>
              </Reveal>
            </div>

            <div className="col-span-full mt-12 sm:col-span-3 sm:col-start-10 sm:mt-0 sm:self-end">
              <p className="swiss-numeral hero-item text-accent">{sensores.length}</p>
              <p className="swiss-label mt-2 border-t border-ink pt-3">Sensores totales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es PRTG */}
      <section className="border-b border-ink bg-paper">
        <QueEsPRTG />
      </section>

      {/* Resumen */}
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="swiss-grid py-16">
            {(['ok', 'down', 'warn', 'paused'] as Estado[]).map((estado) => (
              <div key={estado} className="col-span-full border-t border-ink pt-4 sm:col-span-3">
                <p className="swiss-numeral text-ink">{conteo[estado]}</p>
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

            <div className="col-span-full mt-12">
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
                              <span
                                className={`swiss-label ${estado === 'down' ? 'text-accent' : 'text-ink'}`}
                              >
                                {ETIQUETA[estado]}
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

                {!cargandoHist && errorHist && (
                  <p className="border-l-2 border-ink pl-5 text-base leading-relaxed text-ink-60">
                    {errorHist}
                  </p>
                )}

                {!cargandoHist && !errorHist && (
                  <GraficoLinea datos={historico} unidad={sensorActivo.lastvalue.match(/[^\d\s.,-]+$/)?.[0] ?? ''} />
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Valor para empresas y para Cloud */}
      <section className="border-t border-ink bg-paper">
        <ValorEmpresas />
      </section>
      <section className="border-t border-ink bg-paper">
        <ValorCloud />
      </section>
    </div>
  );
}
