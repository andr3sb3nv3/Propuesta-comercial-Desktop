import React from 'react';
import { Linkedin, Mail, MessageSquare, Send } from 'lucide-react';

interface ConnectAteneaProps {
  clientName: string;
  clientColor: string;
}

export const ConnectAtenea: React.FC<ConnectAteneaProps> = ({ clientName, clientColor }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center py-12">
      <div className="flex flex-col items-center justify-center gap-8 mb-12">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white leading-none m-0">
          Conecta con
        </h2>
        <img 
          src="https://raw.githubusercontent.com/andr3sb3nv3/AteneaPNG/refs/heads/main/IMG_0210.png" 
          alt="Atenea" 
          className="h-16 md:h-24 object-contain brightness-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        />
      </div>
      
      <div className="flex gap-6 mb-16">
        <a href="#" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:scale-110 transition-all hover:bg-white/10" style={{ borderColor: `${clientColor}40` }}>
          <Linkedin size={28} />
        </a>
        <a href="#" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:scale-110 transition-all hover:bg-white/10" style={{ borderColor: `${clientColor}40` }}>
          <Mail size={28} />
        </a>
        <a href="#" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:scale-110 transition-all hover:bg-white/10" style={{ borderColor: `${clientColor}40` }}>
          <MessageSquare size={28} />
        </a>
      </div>

      <form className="w-full max-w-md space-y-6 text-left">
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-white/50 mb-3">Nombre de empresa</label>
          <input 
            type="text" 
            defaultValue={clientName}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-black uppercase tracking-widest text-white/50 mb-3">Mensaje</label>
          <textarea 
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
            placeholder="¿Cómo podemos escalar tu negocio?"
          />
        </div>
        <button 
          type="button"
          className="w-full py-5 rounded-xl font-black uppercase tracking-widest transition-all text-[#0a192f] flex items-center justify-center gap-3 mt-4 hover:opacity-90"
          style={{ backgroundColor: clientColor }}
        >
          <Send size={20} />
          Enviar
        </button>
      </form>
    </div>
  );
};
