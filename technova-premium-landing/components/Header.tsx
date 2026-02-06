
import React from 'react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-white/10 shadow-2xl' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all">
             <span className="font-black text-white text-2xl">T</span>
          </div>
          <span className="text-3xl font-black tracking-tighter text-white font-outfit uppercase">TechNova</span>
        </div>

        <nav className="hidden md:flex items-center gap-12">
          {['Funcții', 'Demo', 'Prețuri', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace('ț', 't')}`}
              className="tn-nav-link"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="px-6 py-3 bg-white text-black text-sm font-black rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-1 active:scale-95 uppercase tracking-widest">
          Consultanță
        </button>
      </div>
    </header>
  );
};
