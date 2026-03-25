import React from 'react';
import { Mail, MessageCircle, Linkedin, Send } from 'lucide-react';

const ConectaAtenea = () => {
  return (
    <div className="w-full bg-[#e0e5ec] py-20 flex items-center justify-center">
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Identidad y Social */}
          <div className="flex flex-col items-center justify-center gap-4 md:gap-12 p-4 sm:p-8 md:p-10 rounded-[1.5rem] md:rounded-[4rem] bg-[#e0e5ec] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] md:shadow-[25px_25px_50px_#bebebe,-25px_-25px_50px_#ffffff]">
            
            <div className="flex flex-col items-center gap-3 md:gap-8 w-full">
              <div className="space-y-1.5 md:space-y-3">
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-[#001B3D] text-center">
                  Conecta con
                </h2>
                {/* Línea de acento sutil */}
                <div className="h-1 w-12 md:h-1.5 md:w-20 bg-[#16E077] mx-auto rounded-full" />
              </div>
              
              {/* Contenedor de imagen puramente neomórfico */}
              <div className="p-3 md:p-8 rounded-[1rem] md:rounded-[2.5rem] bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] md:shadow-[inset_8px_8px_16px_#b8b9be,inset_-8px_-8px_16px_#ffffff] flex items-center justify-center">
                <img 
                  src="https://raw.githubusercontent.com/andr3sb3nv3/AteneaPNG/refs/heads/main/IMG_0211.png" 
                  alt="Atenea" 
                  className="h-8 sm:h-16 md:h-28 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Iconos Sociales con el color verde como acento en el icono mismo */}
            <div className="flex gap-3 sm:gap-6 md:gap-8 justify-center flex-wrap">
              {[
                { icon: Mail, href: "mailto:hola@ateneagrowth.com", label: "Email" },
                { icon: MessageCircle, href: "#", label: "WhatsApp" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#e0e5ec] rounded-xl md:rounded-2xl flex items-center justify-center text-[#16E077] transition-all duration-300
                             shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] md:shadow-[8px_8px_16px_#b8b9be,-8px_-8px_16px_#ffffff] 
                             hover:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] md:hover:shadow-[inset_8px_8px_16px_#b8b9be,inset_-8px_-8px_16px_#ffffff]
                             hover:scale-95 hover:translate-y-0.5 active:scale-90 group"
                >
                  <item.icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8" strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="bg-[#e0e5ec] rounded-[1.5rem] md:rounded-[4rem] p-4 sm:p-8 md:p-14 shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] md:shadow-[25px_25px_50px_#bebebe,-25px_-25px_50px_#ffffff]">
            <form className="space-y-3 sm:space-y-8 md:space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5 md:space-y-3">
                <label className="text-[9px] md:text-xs font-black text-[#001B3D]/70 ml-2 md:ml-4 uppercase tracking-[0.15em] md:tracking-[0.3em] flex items-center gap-1.5 md:gap-2">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#16E077]" />
                  Nombre
                </label>
                <input 
                  type="text" 
                  placeholder="Tu nombre completo"
                  className="w-full p-2.5 md:p-5 bg-[#e0e5ec] rounded-xl md:rounded-2xl outline-none text-[#001B3D] font-medium text-xs md:text-base
                             shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] md:shadow-[inset_8px_8px_16px_#b8b9be,inset_-8px_-8px_16px_#ffffff]
                             focus:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] md:focus:shadow-[inset_10px_10px_20px_#b8b9be,inset_-10px_-10px_20px_#ffffff]
                             placeholder:text-[#001B3D]/30 transition-all"
                />
              </div>

              <div className="space-y-1.5 md:space-y-3">
                <label className="text-[9px] md:text-xs font-black text-[#001B3D]/70 ml-2 md:ml-4 uppercase tracking-[0.15em] md:tracking-[0.3em] flex items-center gap-1.5 md:gap-2">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#16E077]" />
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="hola@ateneagrowth.com"
                  className="w-full p-2.5 md:p-5 bg-[#e0e5ec] rounded-xl md:rounded-2xl outline-none text-[#001B3D] font-medium text-xs md:text-base
                             shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] md:shadow-[inset_8px_8px_16px_#b8b9be,inset_-8px_-8px_16px_#ffffff]
                             focus:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] md:focus:shadow-[inset_10px_10px_20px_#b8b9be,inset_-10px_-10px_20px_#ffffff]
                             placeholder:text-[#001B3D]/30 transition-all"
                />
              </div>

              <div className="space-y-1.5 md:space-y-3">
                <label className="text-[9px] md:text-xs font-black text-[#001B3D]/70 ml-2 md:ml-4 uppercase tracking-[0.15em] md:tracking-[0.3em] flex items-center gap-1.5 md:gap-2">
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#16E077]" />
                  Mensaje
                </label>
                <textarea 
                  placeholder="¿Cómo podemos ayudarte?"
                  className="w-full h-16 md:h-32 p-2.5 md:p-5 bg-[#e0e5ec] rounded-xl md:rounded-2xl outline-none text-[#001B3D] font-medium resize-none text-xs md:text-base
                             shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] md:shadow-[inset_8px_8px_16px_#b8b9be,inset_-8px_-8px_16px_#ffffff]
                             focus:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] md:focus:shadow-[inset_10px_10px_20px_#b8b9be,inset_-10px_-10px_20px_#ffffff]
                             placeholder:text-[#001B3D]/30 transition-all"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3 md:py-6 bg-[#16E077] rounded-xl md:rounded-2xl font-black text-[#001B3D] uppercase tracking-[0.15em] md:tracking-[0.4em] text-[9px] md:text-xs
                           shadow-[4px_4px_10px_rgba(22,224,119,0.25)] md:shadow-[8px_8px_20px_rgba(22,224,119,0.25)]
                           hover:shadow-[6px_6px_15px_rgba(22,224,119,0.35)] md:hover:shadow-[12px_12px_25px_rgba(22,224,119,0.35)]
                           active:scale-[0.98] active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1)] md:active:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.1)]
                           transition-all duration-300 flex items-center justify-center gap-2 md:gap-4 group mt-1 md:mt-2"
              >
                <Send className="w-3.5 h-3.5 md:w-[18px] md:h-[18px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ConectaAtenea;
