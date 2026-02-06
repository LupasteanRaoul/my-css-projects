
import React from 'react';
import { GoogleGenAI } from '@google/genai';

interface AIAssistantProps {
  activePlan: string | null;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ activePlan }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  // Fix: Typed state declaration for messages list
  const [messages, setMessages] = React.useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Sunt Consultantul tău Virtual TechNova. Cu ce informații tehnice te pot ajuta astăzi?' }
  ]);
  const [loading, setLoading] = React.useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      // Re-initialize GoogleGenAI right before the call as per SDK best practices
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Ești un inginer de sunet expert TechNova. Vorbești tehnic dar accesibil. 
          Focusul tău este pe inovație și performanță. Utilizatorul analizează planul: ${activePlan || 'Standard'}. 
          Folosește un ton premium și profesionist în limba română.`
        }
      });
      
      // Accessing response.text as a property, not a method, per the latest documentation
      setMessages(prev => [...prev, { role: 'bot', text: response.text || "Momentan am dificultăți tehnice." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: "Conexiunea a fost întreruptă." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[150]">
      {isOpen ? (
        <div className="w-80 md:w-[400px] h-[600px] tn-card-premium !p-0 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500 shadow-3xl border-blue-500/30">
          <div className="p-6 bg-blue-600/90 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center animate-pulse">🤖</div>
              <div>
                <span className="font-black text-white text-sm block leading-none">TECHNOVA AI</span>
                <span className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Online / High Res</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors">✕</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`tn-chat-bubble ${m.role === 'user' ? 'tn-chat-user shadow-lg shadow-blue-500/20' : 'tn-chat-bot'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="flex gap-2 p-3 bg-white/5 rounded-2xl w-24 justify-center animate-pulse">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
            </div>}
          </div>

          <div className="p-6 bg-black/40 border-t border-white/10 flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ex: Care este avantajul aliajului Custom Elite?"
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-blue-500 transition-all text-sm"
            />
            <button 
              onClick={sendMessage}
              className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center hover:bg-blue-500 hover:scale-105 transition-all shadow-lg shadow-blue-500/20"
            >
              ➔
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center text-4xl shadow-[0_20px_50px_rgba(59,130,246,0.5)] hover:scale-110 hover:-rotate-6 transition-all duration-500 group"
        >
          <span className="group-hover:animate-pulse">🤖</span>
        </button>
      )}
    </div>
  );
};
