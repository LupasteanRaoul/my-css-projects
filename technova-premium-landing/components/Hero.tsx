
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-48 pb-32 px-6 relative overflow-hidden min-h-screen flex items-center">
      {/* Decorative Orbs via CSS classes */}
      <div className="tn-orb w-[600px] h-[600px] bg-blue-600 top-[-200px] left-[-200px]"></div>
      <div className="tn-orb w-[400px] h-[400px] bg-purple-600 bottom-[10%] right-[-100px]"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-white/10 text-sm font-bold text-blue-400 mb-10 shadow-2xl">
          <span className="flex h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse"></span>
          TECHNOVA PERFORMANCE SERIES 2025
        </div>
        
        <h1 className="text-6xl md:text-[7.5rem] tn-hero-title mb-10">
          EXPERIENȚA <br /> 
          <span className="gradient-text">FĂRĂ LIMITĂ</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
          Construim viitorul prin inginerie de sunet. Instrumente care respiră prin tehnologie și materie primă de elită.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="tn-btn-glow text-lg">
            Începe Călătoria
          </button>
          <button className="px-8 py-4 glass text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
            Recenzii Clienți
          </button>
        </div>
      </div>
      
      <div className="tn-bg-grid absolute inset-0 pointer-events-none"></div>
    </section>
  );
};
