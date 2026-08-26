import { SectionHeader } from '../../../components/content';
import type { Politica } from '../types';

const DATA: Politica[] = [
  { num: '01', title: 'Promoción y regulación', text: 'Marcos normativos y fomento de la investigación.' },
  { num: '02', title: 'Incentivos', text: 'Subsidios y exenciones fiscales para I+D.' },
  { num: '03', title: 'Colaboración', text: 'Alianzas estratégicas entre academia e industria.' },
  { num: '04', title: 'Propiedad Intelectual', text: 'Protección legal de patentes y derechos de autor.' },
  { num: '05', title: 'Educación STEM', text: 'Formación de capital humano en ciencia, tecnología, ingeniería y matemáticas.' },
];

export function PoliticasPublicas() {
  return (
    <section className="bg-mist py-16 sm:py-20">
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
              className="group relative overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="font-mono text-4xl font-bold text-signal/20">{p.num}</span>
              <p className="mt-3 font-display text-lg text-navy-900">{p.title}</p>
              <p className="mt-2 text-sm text-navy-700/70">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
