
import React from 'react';

interface PricingProps {
  activePlan: string | null;
  onSelectPlan: (name: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ activePlan, onSelectPlan }) => {
  const plans = [
    {
      name: 'Standard',
      price: '$499',
      features: ['Accesori de bază', '1 An Garanție', 'Suport Email'],
      color: 'white/10'
    },
    {
      name: 'Performance',
      price: '$899',
      features: ['Kit Mentenanță Pro', '5 Ani Garanție', 'Suport Prioritar', 'Husă Premium'],
      color: 'blue-500/20',
      popular: true
    },
    {
      name: 'Custom Elite',
      price: 'Contact',
      features: ['Gravură Personalizată', 'Garanție pe Viață', 'Consultant Dedicat', 'Pick-up Service'],
      color: 'purple-500/20'
    }
  ];

  return (
    <section id="preturi" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Alege Excelența</h2>
          <p className="text-slate-400">Investește într-un viitor plin de armonie.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div 
              key={i} 
              onClick={() => onSelectPlan(p.name)}
              className={`relative p-8 rounded-[2rem] border transition-all duration-500 cursor-pointer group ${
                activePlan === p.name 
                ? 'bg-blue-600 border-blue-400 shadow-2xl shadow-blue-500/40 -translate-y-4' 
                : 'glass border-white/10 hover:border-white/20'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-xs font-bold rounded-full text-white tracking-widest uppercase shadow-lg">
                  Cel mai vândut
                </div>
              )}
              
              <h3 className={`text-xl font-bold mb-2 ${activePlan === p.name ? 'text-white' : 'text-slate-200'}`}>{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className={`text-4xl font-black ${activePlan === p.name ? 'text-white' : 'text-blue-400'}`}>{p.price}</span>
                {p.price !== 'Contact' && <span className="text-slate-500 text-sm"> / unitate</span>}
              </div>

              <ul className="space-y-4 mb-10">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${activePlan === p.name ? 'bg-white/20 text-white' : 'bg-blue-500/20 text-blue-400'}`}>
                      ✓
                    </span>
                    <span className={activePlan === p.name ? 'text-white/90' : 'text-slate-400'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                activePlan === p.name 
                ? 'bg-white text-blue-600' 
                : 'bg-white/5 text-white hover:bg-white/10'
              }`}>
                {activePlan === p.name ? 'Plan Selectat' : 'Alege Planul'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
