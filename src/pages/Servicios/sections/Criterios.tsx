import { Link } from 'react-router-dom';
import { RailHeader } from '../../../components/content';

const CRITERIOS = [
  {
    title: 'La carga elige el servicio',
    text: 'Una base de datos de producción pide un motor administrado. Una tarea breve pide una función. El tipo de recurso sale de lo que la aplicación necesita, y después se busca el nombre en la nube correspondiente.',
  },
  {
    title: 'La región elige la cercanía',
    text: 'La latencia y el lugar donde residen los datos clínicos dependen de la región. El inventario ya opera en América y en Europa; una carga nueva se ubica junto a quien la consume.',
  },
  {
    title: 'El ambiente elige el tamaño',
    text: 'Producción, QA y desarrollo comparten arquitectura y se separan en red, permisos y capacidad. Lo crítico se dimensiona para sostener la atención; lo de prueba se dimensiona para probar.',
  },
  {
    title: 'La etiqueta hace visible el costo',
    text: 'Sin dueño, entorno y servicio en los metadatos, el gasto cloud no se puede asignar. FinOps empieza por etiquetar y medir, y recién después ajusta la capacidad.',
  },
];

export default function Criterios() {
  return (
    <section id="criterios" className="scroll-mt-24 border-b border-ink bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <RailHeader
          label="Criterio"
          title="Cómo se elige y se sostiene"
          aside={
            <p>
              Elegir AWS, Azure o Google Cloud es el último paso. Antes se define la capa, el
              ambiente y quién responde por el recurso. Esa secuencia es la que mantiene el
              catálogo alineado con la operación clínica.
            </p>
          }
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {CRITERIOS.map((criterio, index) => (
            <li key={criterio.title} className="swiss-figure">
              <p className="font-display text-sm font-black tabular-nums text-accent">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-display text-xl font-extrabold leading-tight tracking-[-0.02em] text-ink">
                {criterio.title}
              </h3>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-ink-60 sm:text-base">
                {criterio.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink pt-6">
          <Link to="/gestion-tecnologia" className="swiss-source inline-flex items-center gap-1">
            Gestión de tecnología y FinOps
            <i className="bx bx-right-arrow-alt text-base" aria-hidden="true" />
          </Link>
          <Link to="/presupuesto" className="swiss-source inline-flex items-center gap-1">
            Presupuesto del área
            <i className="bx bx-right-arrow-alt text-base" aria-hidden="true" />
          </Link>
          <Link to="/descripcion-posiciones" className="swiss-source inline-flex items-center gap-1">
            Ecosistema técnico
            <i className="bx bx-right-arrow-alt text-base" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
