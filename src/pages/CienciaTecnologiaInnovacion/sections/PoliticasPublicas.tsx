import { SectionHeader, VideoEmbed } from '../../../components/content';
import type { Politica } from '../types';

const DATA: Politica[] = [
  { num: '01', title: 'Promoción y regulación', text: 'Marcos normativos, estándares y fomento activo de la investigación y la adopción tecnológica.' },
  { num: '02', title: 'Incentivos', text: 'Subsidios, fondos concursables y exenciones fiscales para investigación y desarrollo.' },
  { num: '03', title: 'Colaboración', text: 'Alianzas estratégicas entre academia, industria, Estado y sector salud.' },
  { num: '04', title: 'Propiedad Intelectual', text: 'Protección legal de patentes, transferencia tecnológica y derechos de autor.' },
  { num: '05', title: 'Educación STEM', text: 'Formación de capital humano en ciencia, tecnología, ingeniería y matemáticas desde la base.' },
  { num: '06', title: 'Infraestructura CTI', text: 'Laboratorios, centros de datos, conectividad y plataformas compartidas de innovación.' },
];

export function PoliticasPublicas() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          number="06"
          title="Políticas Públicas e Institucionales"
          description="Para articular y potenciar el ecosistema de CTI, el Estado interviene a través de:"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map((p) => (
            <div
              key={p.num}
              className="ed-card group relative overflow-hidden p-6 transition-shadow"
            >
              <span className="font-mono text-4xl font-bold text-accent/20">{p.num}</span>
              <p className="mt-3 font-display text-xl text-ink">{p.title}</p>
              <p className="mt-2 text-base leading-relaxed text-ink-70/70">{p.text}</p>
            </div>
          ))}
        </div>

        <VideoEmbed
          src="https://www.youtube.com/embed/45v9vg3bDcY"
          title="Educación STEM y políticas de innovación"
        />
      </div>
    </section>
  );
}
