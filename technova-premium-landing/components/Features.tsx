
import React from 'react';

const FEATURE_LIST = [
  {
    icon: '💎',
    title: 'Puritate Acustică',
    desc: 'Fiecare componentă este prelucrată la nivel microscopic pentru a asigura o rezonanță perfectă.'
  },
  {
    icon: '⚡',
    title: 'Răspuns Instant',
    desc: 'Tehnologia proprietară TechNova reduce latența fizică a instrumentului la minimul istoric.'
  },
  {
    icon: '🛡️',
    title: 'Ecosistem Suport',
    desc: 'Acces exclusiv la centrul de mentenanță digitală și asistență tehnică 24/7 prin AI.'
  }
];

export const Features: React.FC = () => {
  return (
    <section id="functii" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURE_LIST.map((f, i) => (
            <div 
              key={i} 
              className="tn-card-premium group"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-24 h-24 rounded-[2rem] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-5xl mb-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {f.icon}
              </div>
              <h3 className="text-3xl font-black mb-6 font-outfit text-white group-hover:text-blue-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-xl font-light">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
