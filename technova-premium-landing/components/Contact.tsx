
import React from 'react';

export const Contact: React.FC = () => {
  // Use React.useState to avoid module export errors
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto glass p-12 rounded-[3rem] border border-white/10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] -mr-32 -mt-32"></div>
        
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Rămâneți Conectați</h2>
          <p className="text-slate-400 mb-10">Fiți primii care află despre noile lansări și oferte exclusive TechNova.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              required
              placeholder="Adresa ta de email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button 
              type="submit"
              className={`px-10 py-4 font-bold rounded-2xl transition-all ${
                sent ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/20'
              }`}
            >
              {sent ? 'Succes!' : 'Abonează-te'}
            </button>
          </form>
          {sent && <p className="mt-4 text-green-400 text-sm font-medium animate-pulse">V-ați abonat cu succes!</p>}
        </div>
      </div>
    </section>
  );
};
