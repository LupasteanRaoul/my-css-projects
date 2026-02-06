
import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Features } from './Features';
import { Pricing } from './Pricing';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { AIAssistant } from './AIAssistant';

const App: React.FC = () => {
  // Fix: The updated global.d.ts now allows generic type arguments for useState
  const [activePlan, setActivePlan] = React.useState<string | null>(null);
  const [scrollWidth, setScrollWidth] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollWidth(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="scroll-progress" style={{ width: `${scrollWidth}%` }} />
      
      {/* Background Tech Elements */}
      <div className="tn-bg-grid" />
      
      <Header />
      
      <main className="relative z-10">
        <Hero />
        
        <Features />
        
        <section id="demo" className="py-40 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter font-outfit">
              REVOLUȚIA <span className="gradient-text">VIZUALĂ</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light">
              Descoperă detaliile care fac diferența între un produs și o legendă.
            </p>
          </div>
          
          <div className="relative aspect-video max-w-6xl mx-auto rounded-[3.5rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(59,130,246,0.4)] border border-white/10 group bg-black">
             <iframe 
               className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700"
               src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
               title="TechNova Demo" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
             />
             <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-[3.5rem]"></div>
          </div>
        </section>

        <Pricing activePlan={activePlan} onSelectPlan={setActivePlan} />
        
        <Contact />
      </main>

      <Footer />
      
      <AIAssistant activePlan={activePlan} />
    </div>
  );
};

export default App;
