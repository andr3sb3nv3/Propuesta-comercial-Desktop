import React, { useState, useEffect } from 'react';
import { 
  UserX, Target, ChevronDown, Timer, 
  Check, Zap, Palette, Rocket 
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

// Componente para animar texto letra por letra o palabra por palabra
const RevealText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <span 
        className="inline-block animate-reveal-up"
        style={{ animationDelay: `${delay}ms`, fillMode: 'both' }}
      >
        {text}
      </span>
    </span>
  );
};

export default function Landing() {
  const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});
  const [selectedPlan, setSelectedPlan] = useState('patagon');
  const [searchParams] = useSearchParams();

  // Decode custom data from URL if present
  const encodedData = searchParams.get('data');
  let customData = null;
  if (encodedData) {
    try {
      customData = JSON.parse(atob(encodedData));
    } catch (e) {
      console.error("Failed to parse custom data", e);
    }
  }

  const images = {
    img0095: "https://raw.githubusercontent.com/andr3sb3nv3/Banco-de-im-genes-Atenea/refs/heads/main/IMG_0095.jpeg",
    img0096: "https://raw.githubusercontent.com/andr3sb3nv3/Banco-de-im-genes-Atenea/refs/heads/main/IMG_0096.jpeg",
    img0104: "https://raw.githubusercontent.com/andr3sb3nv3/Banco-de-im-genes-Atenea/refs/heads/main/IMG_0104.jpeg",
    img0105: "https://raw.githubusercontent.com/andr3sb3nv3/Banco-de-im-genes-Atenea/refs/heads/main/IMG_0105.jpeg",
    img0082: "https://raw.githubusercontent.com/andr3sb3nv3/Banco-de-im-genes-Atenea/refs/heads/main/IMG_0082.jpeg",
    img0101: "https://raw.githubusercontent.com/andr3sb3nv3/Banco-de-im-genes-Atenea/refs/heads/main/IMG_0101.jpeg"
  };

  const plans = [
    {
      id: 'basico',
      title: 'BÁSICO',
      icon: <Rocket className="w-6 h-6 text-emerald-400" />,
      price: '$X',
      unit: 'USD',
      description: 'Ideal para empresas que buscan escala y optimización constante.',
      features: [
        'Paid Media (Estrategia e implementación)',
        'Optimización y experimentos en todos los canales',
        'Servicio de CRO (Conversión en la web)',
        'Dashboards y reporting mensual',
        'Reuniones semanales de status',
        'Automation Marketing & Emailing'
      ]
    },
    {
      id: 'patagon',
      title: 'SERVICIO PATAGON',
      icon: <Zap className="w-6 h-6 text-emerald-400" />,
      price: '$6',
      unit: 'USD x lead calificado',
      highlight: true,
      description: 'Nuestra solución estrella basada 100% en resultados reales.',
      features: [
        'Atención 24/7 con conversación natural',
        'Calificación real según tu playbook',
        'CRM actualizado automáticamente',
        'Agenda de visitas automatizada',
        'Optimización continua del pitch',
        'Pago por resultado: solo leads calificados'
      ]
    },
    {
      id: 'creatividades',
      title: 'CREATIVIDADES',
      icon: <Palette className="w-6 h-6 text-emerald-400" />,
      price: '$X',
      unit: 'USD',
      description: 'El motor visual para tus campañas con tecnología de IA.',
      features: [
        'Análisis y creación de piezas con IA',
        'Feedback e insights detallados',
        'Testing continuo de creatividades',
        '2 videos UGC (User Generated Content) por mes',
        'Hasta 15 creatividades estáticas mensuales'
      ]
    }
  ];

  useEffect(() => {
    const observerOptions = { 
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleItems(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const ateneaPoints = [
    "Generamos tráfico de calidad desde Google, Meta y LinkedIn",
    "Segmentamos y optimizamos para lead calificado",
    "Diseñamos creatividades y mensajes para proyectos inmobiliarios",
    "Optimizamos de forma continua con reporting claro",
    "Aportamos expertise real en vertical inmobiliaria"
  ];

  const patagonPoints = [
    "Respondemos de forma inmediata 24/7",
    "Conversamos de manera natural y contextualizada",
    "Optimizamos las campañas en base a las que performan mejor",
    "Agendamos visitas y reuniones automáticamente",
    "Incrementamos la conversión entre 30-400%"
  ];

  const results = [
    { value: "+35%", label: "EN VENTAS CON MENOR INVERSIÓN" },
    { value: "2.5x", label: "MÁS REUNIONES AGENDADAS" },
    { value: "4x", label: "MÁS CONVERSIÓN" },
    { value: "+68%", label: "EN LEADS CALIFICADOS" }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-[#0a192f] overflow-x-hidden selection:bg-emerald-400 selection:text-[#0a192f]">
      
      {/* SECCIÓN 1: HERO CON EFECTO REVEAL */}
      <section className="relative w-full h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-110 animate-slow-zoom"
          style={{ backgroundImage: `url(${images.img0095})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/80 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-32">
          <div className="max-w-4xl">
            {customData?.clientName && (
              <div className="mb-4 inline-block px-4 py-1 bg-emerald-400 text-[#0a192f] font-black uppercase tracking-widest text-sm rounded-full animate-reveal-up">
                Propuesta para {customData.clientName}
              </div>
            )}
            <h1 className="text-white text-6xl md:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-8">
              <RevealText text="Propuesta" delay={200} /><br />
              <RevealText text="Comercial" delay={400} className="text-emerald-400" />
            </h1>
            <div className="overflow-hidden">
                <p className="text-white/80 text-xl md:text-3xl font-light max-w-2xl border-l-4 border-emerald-400 pl-8 uppercase tracking-[0.2em] animate-slide-right opacity-0 [animation-fill-mode:forwards] [animation-delay:800ms]">
                  Partner tecnológico de crecimiento, cobrando por <span className="text-emerald-400 font-bold">leads calificados</span>.
                </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold">Scroll</span>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* CUSTOM DATA SECTION (If present) */}
      {customData && (
        <section className="relative w-full bg-white py-32 overflow-hidden">
          <div className="container mx-auto px-6 md:px-20 lg:px-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#0a192f] uppercase italic mb-6">
                El futuro de <span className="text-emerald-400">{customData.clientName}</span>
              </h2>
              <p className="text-2xl md:text-4xl font-light text-gray-500 italic max-w-4xl mx-auto leading-relaxed">
                "{customData.phrase}"
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {customData.img1 && (
                <div className="rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl p-4">
                  <img 
                    src={customData.img1} 
                    alt="Custom 1" 
                    className="w-full h-[400px] object-contain rounded-xl"
                  />
                </div>
              )}
              {customData.img2 && (
                <div className="rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl p-4">
                  <img 
                    src={customData.img2} 
                    alt="Custom 2" 
                    className="w-full h-[400px] object-contain rounded-xl"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* SECCIÓN 2: EL CONTEXTO CON ANIMACIÓN STAGGERED */}
      <section className="relative w-full min-h-screen bg-white py-32 flex flex-col justify-center">
        <div className="container mx-auto px-6 md:px-20 lg:px-32 max-w-6xl">
          <div 
            id="contextTitle" 
            className={`reveal-on-scroll transition-all duration-1000 mb-24 ${visibleItems.contextTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <span className="text-emerald-500 font-black tracking-[0.5em] uppercase text-sm mb-4 block">El Problema</span>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-[#0a192f] leading-none italic uppercase">
              El contexto<span className="text-emerald-400">.</span>
            </h2>
          </div>

          <div className="space-y-12">
            {[
              { icon: <Timer />, text: "El sector inmobiliario pierde miles de leads por tiempos de respuesta lentos.", highlight: "Responder en 5 minutos convierte 100x más.", id: "ctx1" },
              { icon: <UserX />, text: "Los formularios y chatbots tradicionales destruyen conversión: no califican.", highlight: "No siguen el playbook.", id: "ctx2" },
              { icon: <Target />, text: "Las inmobiliarias necesitan: velocidad + calificación real + CRM actualizado.", highlight: "En tiempo real.", id: "ctx3" }
            ].map((item, idx) => (
              <div 
                key={item.id}
                id={item.id}
                className={`reveal-on-scroll group flex flex-col md:flex-row items-center gap-10 p-10 rounded-[2rem] transition-all duration-1000 border border-transparent hover:border-emerald-100 hover:bg-emerald-50/30 ${visibleItems[item.id] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="bg-[#0a192f] p-6 rounded-3xl text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(item.icon, { size: 40 })}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-2xl md:text-4xl text-gray-500 font-medium uppercase tracking-tighter leading-tight mb-2">
                    {item.text}
                  </p>
                  <p className="text-2xl md:text-4xl text-[#0a192f] font-black uppercase tracking-tighter">
                    {item.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIONES DE IMAGEN CON PARALLAX */}
      <section id="img96" className="reveal-on-scroll w-full overflow-hidden bg-black">
        <img 
            src={images.img0096} 
            alt="Data" 
            className={`w-full h-auto transition-transform duration-[2000ms] ease-out ${visibleItems.img96 ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`} 
        />
      </section>

      {/* SECCIÓN INTERACTIVA 104 */}
      <section id="inter104" className="reveal-on-scroll relative w-full overflow-hidden bg-[#0a192f]">
        <img src={images.img0104} alt="Impact" className="w-full h-auto block opacity-50" />
        <div className="absolute inset-0 w-full h-full flex flex-col md:flex-row">
          <div className={`w-full md:w-1/2 flex flex-col justify-center px-8 md:px-[8%] transition-all duration-1000 delay-300 ${visibleItems.inter104 ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h3 className="text-4xl md:text-7xl font-black text-emerald-400 mb-8 uppercase tracking-tighter italic leading-none">Atenea<br/>Growth</h3>
              <ul className="space-y-6">
                {ateneaPoints.map((text, i) => (
                    <li key={i} className="flex items-start gap-4 text-white text-lg md:text-xl font-bold uppercase tracking-tight">
                        <span className="w-2 h-2 mt-2 bg-emerald-400 rounded-full shrink-0" />
                        {text}
                    </li>
                ))}
              </ul>
          </div>
          <div className={`w-full md:w-1/2 flex flex-col justify-center px-8 md:px-[8%] transition-all duration-1000 delay-500 ${visibleItems.inter104 ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <h3 className="text-4xl md:text-7xl font-black text-[#0a192f] mb-8 uppercase tracking-tighter italic leading-none">Patagon<br/>AI</h3>
              <ul className="space-y-6">
                {patagonPoints.map((text, i) => (
                    <li key={i} className="flex items-start gap-4 text-[#0a192f] text-lg md:text-xl font-bold uppercase tracking-tight">
                        <span className="w-2 h-2 mt-2 bg-[#0a192f] rounded-full shrink-0" />
                        {text}
                    </li>
                ))}
              </ul>
          </div>
        </div>
      </section>

      {/* RESULTADOS CON CONTADOR VISUAL */}
      <section id="results" className="reveal-on-scroll relative w-full bg-black py-32">
        <img src={images.img0101} alt="Resultados" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {results.map((res, idx) => (
                    <div 
                        key={idx} 
                        className={`flex flex-col items-center transition-all duration-1000 ${visibleItems.results ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ transitionDelay: `${idx * 200}ms` }}
                    >
                        <span className="text-emerald-400 text-7xl md:text-9xl font-black tracking-tighter mb-4">{res.value}</span>
                        <span className="text-white text-xs md:text-sm font-black tracking-[0.4em] text-center uppercase border-t border-white/20 pt-4">{res.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS: DISEÑO TIPO REVISTA */}
      <section id="services" className="reveal-on-scroll bg-[#0a192f] py-32 text-white">
        <div className="container mx-auto px-6 md:px-20 lg:px-32">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className={`lg:w-1/3 transition-all duration-1000 ${visibleItems.services ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-12">
                    Servi<br/><span className="text-emerald-400">cios</span>
                </h2>
                <div className="p-8 border border-emerald-500/30 rounded-[2rem] bg-emerald-500/5">
                    <p className="text-emerald-400 font-black uppercase tracking-widest text-xs mb-4">Equipo Dedicado</p>
                    <p className="text-2xl font-light text-white/60 mb-8 uppercase italic leading-tight">Expertos en escala para el sector real estate</p>
                    <ul className="space-y-4">
                        {['Account Manager', 'Paid Media Analyst', 'Patagon Support'].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 font-bold uppercase tracking-widest text-sm">
                                <span className="w-6 h-[1px] bg-emerald-400" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`lg:w-2/3 space-y-12 pt-10 transition-all duration-1000 delay-300 ${visibleItems.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                {[
                    "Implementación y optimización de campañas 360º.",
                    "Dashboard de métricas en tiempo real.",
                    "Diseño creativo de alto impacto visual.",
                    "Soporte técnico y estratégico Patagon AI.",
                    "Auditoría inicial de activos digitales incluida."
                ].map((text, i) => (
                    <div key={i} className="group flex items-start gap-8 border-b border-white/10 pb-10 transition-colors hover:border-emerald-400/50">
                        <span className="text-emerald-400 font-black text-xl">0{i+1}</span>
                        <p className="text-2xl md:text-4xl font-light uppercase tracking-tighter leading-tight group-hover:text-emerald-400 transition-colors">
                            {text}
                        </p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESGLOSE DE PLANES: INTERACTIVO */}
      <section id="pricing" className="reveal-on-scroll min-h-screen bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className={`text-5xl md:text-8xl font-black text-[#0a192f] uppercase italic tracking-tighter transition-all duration-1000 ${visibleItems.pricing ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                Estructura de inversión
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, idx) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`group relative p-12 rounded-[3rem] transition-all duration-700 cursor-pointer border-2 ${
                  selectedPlan === plan.id 
                    ? 'bg-[#0a192f] text-white border-[#0a192f] scale-105 shadow-2xl z-10' 
                    : 'bg-gray-50 text-[#0a192f] border-transparent hover:border-emerald-200'
                }`}
              >
                {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-400 text-[#0a192f] px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase">
                        Solución Estrella
                    </div>
                )}
                
                <div className="mb-10">
                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${selectedPlan === plan.id ? 'bg-emerald-400 text-[#0a192f]' : 'bg-[#0a192f] text-emerald-400'}`}>
                        {plan.icon}
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-2">{plan.title}</h3>
                    <p className={`text-sm font-medium uppercase tracking-widest ${selectedPlan === plan.id ? 'text-white/60' : 'text-gray-400'}`}>
                        {plan.description}
                    </p>
                </div>

                <div className="mb-10">
                    <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                    <span className={`block text-[10px] font-bold uppercase tracking-widest mt-2 ${selectedPlan === plan.id ? 'text-emerald-400' : 'text-gray-500'}`}>
                        {plan.unit}
                    </span>
                </div>

                <div className="space-y-4 mb-12">
                    {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <Check size={18} className={selectedPlan === plan.id ? 'text-emerald-400' : 'text-emerald-600'} />
                            <span className="text-sm font-bold uppercase tracking-tight leading-tight">{feat}</span>
                        </div>
                    ))}
                </div>

                <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all ${selectedPlan === plan.id ? 'bg-emerald-400 text-[#0a192f]' : 'bg-[#0a192f] text-white hover:bg-emerald-500'}`}>
                    {selectedPlan === plan.id ? 'Seleccionado' : 'Seleccionar'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-gray-50 py-20 border-t border-gray-100">
        <div className="container mx-auto px-8 md:px-20 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black">
          <div className="flex items-center gap-4 mb-8 md:mb-0">
             <div className="w-10 h-10 bg-[#0a192f] flex items-center justify-center rounded-lg text-emerald-400 font-black">A</div>
             <span>Atenea Growth Marketing © 2024</span>
          </div>
          <div className="flex gap-12">
            <span className="hover:text-black cursor-pointer transition-colors">Estrategia</span>
            <span className="hover:text-black cursor-pointer transition-colors">Patagon AI</span>
            <Link to="/create-proposal" className="hover:text-emerald-500 cursor-pointer transition-colors">Propuesta comercial 2024</Link>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes reveal-up {
          from { transform: translateY(105%); }
          to { transform: translateY(0); }
        }
        @keyframes slow-zoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
        @keyframes slide-right {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-reveal-up {
          animation: reveal-up 1.2s cubic-bezier(0.77, 0, 0.175, 1);
        }
        .animate-slow-zoom {
          animation: slow-zoom 15s ease-out infinite alternate;
        }
        .animate-slide-right {
          animation: slide-right 1.2s cubic-bezier(0.77, 0, 0.175, 1);
        }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
      `}} />
    </div>
  );
}
