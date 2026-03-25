import React, { useEffect } from "react";

export default function RoadmapPresentation({ 
  clientName = "NOMBRE DE CLIENTE", 
  color1 = "#001A31", 
  color2 = "#16E077" 
}: { 
  clientName?: string, 
  color1?: string, 
  color2?: string 
}) {
  useEffect(() => {
    // Animación de revelado al hacer scroll
    const items = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove('active');
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  const isDefault = clientName === "NOMBRE DE CLIENTE" || !clientName;
  const displayText = isDefault ? "INMOBILIARIA" : clientName;
  const half = Math.ceil(displayText.length / 2);
  const part1 = displayText.slice(0, half);
  const part2 = displayText.slice(half);

  return (
    <div className="bg-[#001A31] text-white font-['Inter',sans-serif]">
      <style>{`
        .bg-grid {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 60px 60px;
        }
        .vertical-line {
            width: 1px;
            background: linear-gradient(to bottom, 
                transparent 0%, 
                #16E077 15%, 
                #16E077 85%, 
                transparent 100%);
            box-shadow: 0 0 8px rgba(22, 224, 119, 0.15);
            opacity: 0.4;
        }
        .dot-glow {
            background-color: #16E077;
            box-shadow: 0 0 15px 2px rgba(22, 224, 119, 0.15), 0 0 5px #16E077;
        }
        .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
        .text-emerald {
            color: #16E077;
        }
        .course-badge {
            border: 1px solid rgba(22, 224, 119, 0.2);
            background: rgba(22, 224, 119, 0.05);
            color: #16E077;
        }
      `}</style>
      
      <div className="bg-grid">
        {/* Espaciador de entrada */}
        <div className="h-[20vh]"></div>

        <section className="max-w-7xl mx-auto px-8 py-20 min-h-screen relative">
            <div className="flex flex-col lg:flex-row gap-20">
                
                {/* Izquierda: Título Principal (Sticky) */}
                <div className="lg:w-1/3 lg:sticky lg:top-32 self-start">
                    <span className="course-badge px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase inline-block mb-8">
                        Implementation Roadmap
                    </span>
                    <h2 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight uppercase">
                        ROADMAP <br/> <span className="text-emerald">ATENEA</span> <br/> 
                        <span style={{ color: 'white' }}>{displayText}</span>
                    </h2>
                    <p className="mt-8 text-gray-300 max-w-xs text-xs font-bold tracking-widest leading-relaxed opacity-80 uppercase">
                        PARTNER DE CRECIMIENTO INTEGRAL: DESDE LA ESTRATEGIA HASTA LA OPTIMIZACIÓN CONTINUA.
                    </p>
                </div>

                {/* Derecha: Timeline */}
                <div className="lg:w-2/3 relative">
                    
                    {/* La línea vertical "fresa" y difuminada */}
                    <div className="absolute left-0 lg:left-0 top-0 bottom-0 vertical-line"></div>

                    <div className="space-y-32 py-4">
                        
                        {/* Item 1 */}
                        <div className="reveal relative pl-12">
                            <div className="absolute -left-[4px] top-2 w-2 h-2 rounded-full dot-glow z-10"></div>
                            <p className="text-emerald text-[10px] font-bold tracking-[0.2em] mb-3 uppercase">01 — Semana 1</p>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3">
                                <span>🎯</span> Setup Inicial
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-light opacity-90">
                                Definimos tu lead ideal, playbook de calificación y objetivos comerciales.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="reveal relative pl-12">
                            <div className="absolute -left-[4px] top-2 w-2 h-2 rounded-full dot-glow z-10"></div>
                            <p className="text-emerald text-[10px] font-bold tracking-[0.2em] mb-3 uppercase">02 — Semana 1–2</p>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3">
                                <span>🧪</span> Creatividades
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-light opacity-90">
                                Conectamos CRM y entrenamos al agente IA con tu proceso de ventas.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="reveal relative pl-12">
                            <div className="absolute -left-[4px] top-2 w-2 h-2 rounded-full dot-glow z-10"></div>
                            <p className="text-emerald text-[10px] font-bold tracking-[0.2em] mb-3 uppercase">03 — Semana 2</p>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3">
                                <span>🚀</span> Go Live
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-light opacity-90">
                                Sistema 24/7 en vivo. Respuestas inmediatas y visitas agendadas automáticamente.
                            </p>
                        </div>

                        {/* Item 4 */}
                        <div className="reveal relative pl-12">
                            <div className="absolute -left-[4px] top-2 w-2 h-2 rounded-full dot-glow z-10"></div>
                            <p className="text-emerald text-[10px] font-bold tracking-[0.2em] mb-3 uppercase">04 — Semana 3+</p>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3">
                                <span>📊</span> Análisis CRO
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-light opacity-90">
                                Optimizamos conversión y generamos insights accionables de tu web.
                            </p>
                        </div>

                        {/* Item 5 */}
                        <div className="reveal relative pl-12">
                            <div className="absolute -left-[4px] top-2 w-2 h-2 rounded-full dot-glow z-10"></div>
                            <p className="text-emerald text-[10px] font-bold tracking-[0.2em] mb-3 uppercase">05 — Continuo</p>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3">
                                <span>⚡</span> Medición Real
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-light opacity-90">
                                Mejora continua basada en datos. Optimización de pauta constante.
                            </p>
                        </div>

                        {/* Item ∞ */}
                        <div className="reveal relative pl-12">
                            <div className="absolute -left-[4px] top-2 w-2 h-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10"></div>
                            <p className="text-emerald text-[10px] font-black tracking-[0.3em] mb-3 uppercase">Partner</p>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3 italic">
                                <span>🤝</span> <span className="text-emerald">∞</span> Growth Partner
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-light opacity-90">
                                Acompañamiento estratégico a largo plazo para escalar tus resultados.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        {/* Espaciador Final reducido */}
        <div className="h-[10vh]"></div>
      </div>
    </div>
  );
}

