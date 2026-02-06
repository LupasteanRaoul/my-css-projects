
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
             <span className="font-bold text-white">T</span>
          </div>
          <span className="text-xl font-bold text-white font-outfit">TechNova</span>
        </div>

        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-blue-400 transition-colors">Politica de Confidențialitate</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Termeni și Condiții</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>

        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} TechNova. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
};
