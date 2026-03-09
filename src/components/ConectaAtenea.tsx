import React from 'react';
import { Mail, MessageCircle, Linkedin, Send } from 'lucide-react';

const ConectaAtenea = () => {
  return (
    <section className="pt-32 pb-12 md:py-20 bg-white px-6 w-full h-full flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Columna Izquierda: Título y Redes */}
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none text-[#001B3D] text-center">
              Conecta con
            </h2>
            <img 
              src="https://raw.githubusercontent.com/andr3sb3nv3/AteneaPNG/refs/heads/main/IMG_0211.png" 
              alt="Atenea" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
          
          <div className="flex gap-4 justify-center">
            {[
              { icon: Mail, href: "mailto:hola@ateneagrowth.com" },
              { icon: MessageCircle, href: "#" },
              { icon: Linkedin, href: "#" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="w-14 h-14 bg-[#002B5B] border border-white/5 rounded-2xl flex items-center justify-center text-[#00E676] hover:bg-[#00E676] hover:text-[#001B3D] transition-all shadow-xl"
              >
                <item.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Columna Derecha: Formulario de Contacto */}
        <div className="bg-[#001B3D] border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="TU NOMBRE"
              className="w-full bg-blue-900/20 border border-white/10 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#00E676]/40 transition-colors"
            />
            <input
              type="email"
              placeholder="EMAIL@EMPRESA.COM"
              className="w-full bg-blue-900/20 border border-white/10 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#00E676]/40 transition-colors"
            />
            <textarea
              placeholder="¿CÓMO PODEMOS AYUDARTE?"
              rows={3}
              className="w-full bg-blue-900/20 border border-white/10 rounded-xl p-3 text-white text-xs focus:outline-none focus:border-[#00E676]/40 transition-colors resize-none"
            ></textarea>
            <button className="w-full bg-[#00E676] text-[#001B3D] py-4 rounded-xl font-black text-lg uppercase italic tracking-tighter hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-xl">
              Enviar Mensaje <Send size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConectaAtenea;
