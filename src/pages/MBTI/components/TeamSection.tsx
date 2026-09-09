import TeamCard from './TeamCard';

const TEAM = [
  {
    type: 'ENFJ',
    name: 'Roman Telesforo Pabón Villafuerte',
    role: 'El Protagonista',
    imageSrc: '/images/enfj.png',
    accentColor: '#059669',
    description:
      'Líder natural que inspira y guía con visión estratégica y empatía genuina. Crea entornos donde cada miembro rinde al máximo y traduce necesidades técnicas en objetivos claros y alcanzables para el equipo cloud.',
    strengths: ['Liderazgo', 'Empatía', 'Comunicación', 'Visión estratégica'],
  },
  {
    type: 'ENTP',
    name: 'Jaicel Jesús Velasco Turunco',
    role: 'El Debatedor',
    imageSrc: '/images/entp.png',
    accentColor: '#2563EB',
    description:
      'Innovador incansable que cuestiona el status quo y busca nuevas formas de resolver problemas. Su mente rápida y curiosa impulsa ideas disruptivas y no teme desafiar convenciones para hallar la mejor solución.',
    strengths: ['Innovación', 'Análisis crítico', 'Creatividad', 'Versatilidad'],
  },
  {
    type: 'ENTJ',
    name: 'Joan Marcelo Riveros Soria',
    role: 'El Comandante',
    imageSrc: '/images/entj.png',
    accentColor: '#7c3aed',
    description:
      'Estratega con determinación para ejecutar grandes proyectos. Transforma visión en acción con eficiencia, organiza recursos y lidera equipos complejos para concretar arquitecturas ambiciosas.',
    strengths: ['Estrategia', 'Ejecución', 'Organización', 'Decisión'],
  },
  {
    type: 'INTJ',
    name: 'Manuel Franco Jiménez Mendoza',
    role: 'El Arquitecto',
    imageSrc: '/images/intj.png',
    accentColor: '#DC2626',
    description:
      'Pensador sistemático con visión a largo plazo. Construye soluciones elegantes y robustas desde el análisis profundo y la planificación meticulosa, con independencia y autoexigencia técnica.',
    strengths: ['Arquitectura', 'Planificación', 'Autonomía', 'Profundidad'],
  },
];

export default function TeamSection() {
  return (
    <section id="equipo" className="relative overflow-hidden bg-mist py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#0f172a 1.1px, transparent 1.1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mx-auto max-w-[60ch] text-center">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-navy-950 sm:text-[2.35rem] sm:leading-none">
            Nuestros perfiles MBTI
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-navy-700/65">
            Cuatro personalidades distintas, un mismo objetivo: mantener la infraestructura cloud de IATECH funcionando
            sin fallas.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-5 sm:mt-12 sm:gap-6">
          {TEAM.map((member) => (
            <TeamCard key={member.type} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
