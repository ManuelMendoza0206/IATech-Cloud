import TeamCard from './TeamCard';

const TEAM = [
  {
    type: 'ENFJ',
    name: 'Roman Telesforo Pabón Villafuerte',
    role: 'El Protagonista',
    imageSrc: '/images/enfj.png',
    accentColor: '#059669',
    description:
      'Líder natural con una capacidad excepcional para inspirar y guiar a su equipo. Combina visión estratégica con empatía genuina, creando entornos donde cada miembro puede rendir al máximo. En el equipo cloud, su fortaleza radica en traducir necesidades técnicas en objetivos claros y alcanzables.',
    strengths: ['Liderazgo', 'Empatía', 'Comunicación', 'Visión estratégica'],
  },
  {
    type: 'ENTP',
    name: 'Jaicel Jesús Velasco Turunco',
    role: 'El Debatedor',
    imageSrc: '/images/entp.png',
    accentColor: '#2563EB',
    description:
      'Innovador incansable que cuestiona el status quo y busca constantemente nuevas formas de resolver problemas. Su mente rápida y curiosa lo convierte en el motor de ideas disruptivas dentro del equipo. No teme desafiar convenciones si eso significa encontrar una solución mejor.',
    strengths: ['Innovación', 'Análisis crítico', 'Creatividad', 'Versatilidad'],
  },
  {
    type: 'ENTJ',
    name: 'Joan Marcelo Riveros Soria',
    role: 'El Comandante',
    imageSrc: '/images/entj.png',
    accentColor: '#9333EA',
    description:
      'Estratega nato con una determinación inquebrantable para ejecutar grandes proyectos. Transforma visión en acción con eficiencia implacable. Su capacidad para organizar recursos y liderar equipos complejos lo posiciona como el director natural de arquitecturas ambiciosas.',
    strengths: ['Estrategia', 'Ejecución', 'Organización', 'Decisión'],
  },
  {
    type: 'INTJ',
    name: 'Manuel Franco Jiménez Mendoza',
    role: 'El Arquitecto',
    imageSrc: '/images/intj.png',
    accentColor: '#DC2626',
    description:
      'Pensador sistemático con una visión a largo plazo que pocos pueden igualar. Construye soluciones elegantes y robustas basadas en análisis profundo y planificación meticulosa. Su independencia y autoexigencia lo impulsan a dominar cada aspecto técnico de su dominio.',
    strengths: ['Arquitectura', 'Planificación', 'Autonomía', 'Profundidad'],
  },
];

export default function TeamSection() {
  return (
    <section id="equipo" className="relative overflow-hidden bg-mist py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-signal">
            Perfiles del equipo
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Nuestros perfiles MBTI
          </h2>
          <p className="mt-4 text-navy-700/75">
            Cuatro personalidades distintas, un mismo objetivo: mantener la
            infraestructura cloud de IATECH funcionando sin fallas.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {TEAM.map((member) => (
            <TeamCard key={member.type} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
