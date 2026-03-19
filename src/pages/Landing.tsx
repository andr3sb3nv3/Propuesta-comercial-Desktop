import React, { useState, useEffect } from 'react';
import { 
  UserX, Target, ChevronDown, Timer, 
  Check, Zap, Palette, Rocket, Hand, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { CurtainReveal } from '../components/CurtainReveal';
import ConectaAtenea from '../components/ConectaAtenea';
import RoadmapPresentation from '../components/RoadmapPresentation';

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
  const [currentExampleIndexPatagon, setCurrentExampleIndexPatagon] = useState(0);
  const [currentExampleIndexAtenea, setCurrentExampleIndexAtenea] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('patagon');

  interface Example {
    title: string;
    desc?: string;
    features?: string[];
  }

  const allianceRoles: { id: string; label: string; title: string; logo?: string; examples: Example[]; bgColor: string; textColor: string; accentColor: string }[] = [
    {
      id: 'atenea',
      label: 'Rol de Atenea',
      title: 'Atenea genera y escala la demanda.',
      logo: 'https://raw.githubusercontent.com/andr3sb3nv3/AteneaPNG/refs/heads/main/IMG_0210.png', // Assuming this is the Atenea logo
      bgColor: 'bg-[#0a192f]',
      textColor: 'text-white',
      accentColor: 'text-[#34d399]',
      examples: [
        { 
          title: "Atenea genera y escala la demanda", 
          features: [
            "Generamos tráfico de calidad desde Google, Meta y LinkedIn",
            "Segmentamos y optimizamos para lead calificado",
            "Diseñamos creatividades y mensajes para proyectos inmobiliarios",
            "Optimizamos de forma continua con reporting claro",
            "Aportamos expertise real en vertical inmobiliaria"
          ]
        },
        { title: "Estrategia Digital", desc: "Diseño de funnels de conversión optimizados para el sector inmobiliario." },
        { title: "Growth & Data", desc: "Análisis de datos para la toma de decisiones basada en resultados reales." }
      ]
    },
    {
      id: 'patagon',
      label: 'Rol de Patagon',
      title: 'CONVERSIÓN + CALIFICACIÓN 24/7',
      logo: 'https://s.yimg.com/os/es/valora_628/eee9853c1556a5bf4e9c3f9a287e29e6',
      bgColor: 'bg-[#edd5b1]',
      textColor: 'text-black',
      accentColor: 'text-black',
      examples: [
        { 
          title: "PATAGON CONVIERTE ESA DEMANDA EN OPORTUNIDADES REALES", 
          features: [
            'Respondemos de forma inmediata 24/7',
            'Conversamos de manera natural y contextualizada',
            'Agendamos visitas y reuniones automáticamente'
          ]
        },
        { title: "Venta Nocturna", desc: "Descripción del caso de éxito..." }
      ]
    }
  ];

  const handleNextExample = (roleId: string) => {
    const role = allianceRoles.find(r => r.id === roleId);
    if (role && role.examples) {
      if (roleId === 'patagon') {
        setCurrentExampleIndexPatagon((prev) => (prev + 1) % role.examples.length);
      } else if (roleId === 'atenea') {
        setCurrentExampleIndexAtenea((prev) => (prev + 1) % role.examples.length);
      }
    }
  };

  const [scrollProgress, setScrollProgress] = useState(0);
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

  const clientName = customData?.clientName || 'tu empresa';
  const clientColor = '#34d399'; // Atenea Emerald
  const clientBg = '#0a192f'; // Atenea Dark Blue
  const clientLight = '#f9fafb';

  const customColor1 = customData?.color1 || '#0a192f';
  const customColor2 = customData?.color2 || '#34d399';
  const customColor3 = customData?.color3 || '#f9fafb';

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
      icon: <Rocket />,
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
      icon: <Zap />,
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
      icon: <Palette />,
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

    const handleScroll = () => {
      const customSection = document.getElementById('custom-section');
      if (customSection) {
        const rect = customSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate progress from 0 (top of section enters) to 1 (bottom of section leaves)
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
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
    <>
      <CurtainReveal
        footer={<ConectaAtenea />}
        footerClassName="bg-white"
        containerClassName="bg-white"
      >
        <div className="w-full min-h-screen font-sans text-[#0a192f] overflow-x-hidden selection:bg-client selection:text-client-dark">
      
      {/* SECCIÓN 1: HERO CON EFECTO REVEAL */}
      <section className="relative w-full h-screen flex items-center overflow-hidden bg-[#0a192f]">
        <div 
          className="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(https://raw.githubusercontent.com/andr3sb3nv3/AteneaPNG/refs/heads/main/Propuesta%20Comercial%20%20Atenea%20%20Patagon%20AI.pdf.png)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/60 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 md:px-20 lg:px-32">
          <div className="max-w-4xl">
            {customData?.clientName && (
              <div 
                className="mb-8 inline-flex items-center gap-3 px-6 py-2 rounded-full animate-reveal-up backdrop-blur-md border border-white/10 bg-white/5"
              >
                <span className="w-2 h-2 rounded-full animate-pulse bg-client"></span>
                <span className="font-black uppercase tracking-widest text-xs md:text-sm text-white">
                  Atenea Growth <span className="text-white/30 mx-2">✕</span> <span className="text-client">{customData.clientName}</span>
                </span>
              </div>
            )}
            <h1 className="text-white text-6xl md:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-8">
              <RevealText text="Propuesta" delay={200} /><br />
              <span className="text-client"><RevealText text="Comercial" delay={400} /></span>
            </h1>
            <div className="overflow-hidden">
                <p className="text-white/80 text-xl md:text-3xl font-light max-w-2xl border-l-4 border-client pl-8 uppercase tracking-[0.2em] animate-slide-right opacity-0 [animation-fill-mode:forwards] [animation-delay:800ms]">
                  Partner tecnológico de crecimiento para <span className="text-client font-bold">{clientName}</span>.
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
        <section 
          id="custom-section"
          className="relative w-full py-32 overflow-hidden bg-white"
        >
          {/* subtle decorative elements using the colors */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ background: `linear-gradient(135deg, ${customColor1}, ${customColor2}, ${customColor3})` }} />
          
          <div 
            className="absolute top-0 left-0 w-full h-1"
            style={{
              background: `linear-gradient(to right, ${customColor1}, ${customColor2}, ${customColor3})`
            }}
          />
          
          {/* New Background Design: Geometric Parallax */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.15]" 
              style={{ 
                backgroundImage: `radial-gradient(${customColor1} 1.5px, transparent 1.5px)`,
                backgroundSize: '50px 50px'
              }} 
            />
            
            {/* Moving Geometric Elements */}
            <div 
              className="absolute w-[900px] h-[900px] border-[2px] border-dashed rounded-full opacity-30 transition-transform duration-300 ease-out"
              style={{ 
                borderColor: customColor1,
                left: '-25%',
                top: '-10%',
                transform: `translate(${scrollProgress * 250}px, ${scrollProgress * 200}px) rotate(${scrollProgress * 150}deg)`
              }}
            />
            <div 
              className="absolute w-[700px] h-[700px] border-[2px] opacity-30 transition-transform duration-300 ease-out"
              style={{ 
                borderColor: customColor2,
                right: '-15%',
                bottom: '-10%',
                transform: `translate(${scrollProgress * -300}px, ${scrollProgress * -250}px) rotate(${scrollProgress * -90}deg)`
              }}
            />
            
            {/* Solid accent shapes that shift with scroll */}
            <div 
              className="absolute w-56 h-56 opacity-[0.25] transition-transform duration-500 ease-out"
              style={{ 
                backgroundColor: customColor1,
                left: '5%',
                top: '15%',
                transform: `translate(${scrollProgress * 450}px, ${scrollProgress * 350}px) rotate(${scrollProgress * 280}deg)`
              }}
            />
            <div 
              className="absolute w-48 h-48 rounded-full opacity-[0.25] transition-transform duration-500 ease-out"
              style={{ 
                backgroundColor: customColor2,
                right: '10%',
                top: '0%',
                transform: `translate(${scrollProgress * -550}px, ${scrollProgress * 500}px)`
              }}
            />

            {/* Additional Shapes */}
            <div 
              className="absolute w-40 h-40 opacity-[0.2] transition-transform duration-700 ease-out"
              style={{ 
                border: `6px solid ${customColor1}`,
                left: '35%',
                bottom: '5%',
                transform: `translate(${scrollProgress * -150}px, ${scrollProgress * -450}px) rotate(${scrollProgress * 420}deg)`
              }}
            />
            <div 
              className="absolute w-0 h-0 opacity-[0.25] transition-transform duration-500 ease-out"
              style={{ 
                borderLeft: '60px solid transparent',
                borderRight: '60px solid transparent',
                borderBottom: `104px solid ${customColor2}`,
                right: '25%',
                bottom: '15%',
                transform: `translate(${scrollProgress * 250}px, ${scrollProgress * -350}px) rotate(${scrollProgress * 210}deg)`
              }}
            />

            {/* More Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <div 
                key={`particle-${i}`}
                className="absolute opacity-30 transition-transform duration-1000 ease-out"
                style={{
                  width: i % 2 === 0 ? '12px' : '20px',
                  height: i % 2 === 0 ? '12px' : '20px',
                  backgroundColor: i % 3 === 0 ? customColor1 : customColor2,
                  borderRadius: i % 4 === 0 ? '50%' : '2px',
                  left: `${15 + i * 15}%`,
                  top: `${20 + (i % 3) * 25}%`,
                  transform: `translate(${scrollProgress * (i % 2 === 0 ? 200 : -200)}px, ${scrollProgress * (i % 3 === 0 ? 300 : -300)}px) rotate(${scrollProgress * 360}deg)`
                }}
              />
            ))}
            
            {/* Floating lines */}
            <div 
              className="absolute h-[2px] w-full opacity-30"
              style={{ 
                backgroundColor: customColor1,
                top: '30%',
                transform: `scaleX(${0.4 + scrollProgress}) translateX(${scrollProgress * 200}px)`
              }}
            />
            <div 
              className="absolute h-[2px] w-full opacity-30"
              style={{ 
                backgroundColor: customColor2,
                top: '70%',
                transform: `scaleX(${1.6 - scrollProgress}) translateX(${scrollProgress * -200}px)`
              }}
            />
          </div>

          <div className="container mx-auto px-6 md:px-20 lg:px-32 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-6" style={{ color: customColor1 }}>
                El futuro de <span style={{ color: customColor2 }}>{customData.clientName}</span>
              </h2>
              <p className="text-2xl md:text-4xl font-light italic max-w-4xl mx-auto leading-relaxed" style={{ color: customColor1 }}>
                "{customData.phrase}"
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {customData.img1 && (
                <div 
                  className="rounded-[2rem] overflow-hidden bg-white shadow-2xl p-4 relative group transition-transform hover:-translate-y-2 duration-500"
                  style={{ borderColor: `${customData.color1 || '#f3f4f6'}40`, borderWidth: '1px' }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `linear-gradient(45deg, ${customData.color1 || '#0a192f'}, ${customData.color2 || '#34d399'})` }} />
                  <img 
                    src={customData.img1} 
                    alt="Custom 1" 
                    className="w-full h-[400px] object-contain rounded-xl relative z-10"
                  />
                </div>
              )}
              {customData.img2 && (
                <div 
                  className="rounded-[2rem] overflow-hidden bg-white shadow-2xl p-4 relative group transition-transform hover:-translate-y-2 duration-500"
                  style={{ borderColor: `${customData.color3 || '#f3f4f6'}40`, borderWidth: '1px' }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `linear-gradient(45deg, ${customData.color2 || '#34d399'}, ${customData.color3 || '#f9fafb'})` }} />
                  <img 
                    src={customData.img2} 
                    alt="Custom 2" 
                    className="w-full h-[400px] object-contain rounded-xl relative z-10"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* SECCIÓN 2: EL CONTEXTO CON ANIMACIÓN STAGGERED */}
      <section className="relative w-full h-screen bg-[#e0e5ec] flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-6xl">
          <div 
            id="contextTitle" 
            className={`reveal-on-scroll transition-all duration-1000 mb-12 text-center ${visibleItems.contextTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          >
            <span className="text-[#34d399] font-black tracking-[0.5em] uppercase text-xs md:text-sm mb-2 block">El Problema</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#0a192f] leading-none italic uppercase" style={{ textShadow: '3px 3px 6px #b8c6db, -3px -3px 6px #ffffff' }}>
              Contexto
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            {[
              { icon: <Timer />, text: "El sector inmobiliario pierde miles de leads por tiempos de respuesta lentos.", highlight: "Responder en 5 minutos convierte 100x más.", id: "ctx1" },
              { icon: <UserX />, text: "Los formularios y chatbots tradicionales destruyen conversión: no califican.", highlight: "No siguen el playbook.", id: "ctx2" },
              { icon: <Target />, text: "Las inmobiliarias necesitan: velocidad + calificación real + CRM actualizado.", highlight: "En tiempo real.", id: "ctx3" }
            ].map((item, idx) => (
              <div 
                key={item.id}
                id={item.id}
                className={`reveal-on-scroll group flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 rounded-[2rem] transition-all duration-1000 bg-[#e0e5ec] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.6),inset_-6px_-6px_10px_0_rgba(255,255,255,0.5),0_0_20px_rgba(52,211,153,0.2)] ${visibleItems[item.id] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#e0e5ec] shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] text-[#34d399] group-hover:text-[#0a192f] transition-colors duration-500 shrink-0">
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl text-gray-600 font-medium uppercase tracking-tighter leading-tight mb-1">
                    {item.text}
                  </p>
                  <p className="text-lg md:text-xl text-[#34d399] font-black uppercase tracking-tighter">
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

      {/* SECCIÓN ALIANZA CON PATAGON */}
      <section className="reveal-on-scroll relative w-full overflow-hidden bg-white py-20">
        <div className="container mx-auto px-6 md:px-20 lg:px-32">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-[#0a192f] mb-16 text-center whitespace-nowrap">
            Nuestra Alianza <span className="text-[#34d399]">con Patagón</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allianceRoles.map((role) => (
              <div key={role.id} className={`rounded-[2rem] p-8 relative overflow-hidden backdrop-blur-sm ${role.bgColor} ${role.textColor} ${role.id === 'atenea' ? 'shadow-[12px_12px_24px_#050d18,-12px_-12px_24px_#0f2546]' : 'shadow-[12px_12px_24px_#c9b596,-12px_-12px_24px_#fff5cc]'}`}>
                <div className="space-y-8 relative z-10">
                  <div className="space-y-6">
                    <div className={`inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest ${role.id === 'atenea' ? 'bg-white/10 text-white/80' : 'bg-black/10 text-black/80'}`}>
                      {role.label}
                    </div>
                    <h3 className="text-4xl font-black uppercase italic tracking-tighter leading-none">
                      {role.title}
                    </h3>
                  </div>
                  
                  <div className="relative mt-4">
                    {role.examples.length > 1 && (
                      <div className={`mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${role.id === 'atenea' ? 'text-white/40' : 'text-black/40'}`}>
                        <Hand className="w-4 h-4 animate-bounce" />
                        Deslizar para ver ejemplos
                      </div>
                    )}
                    
                    <div className="relative min-h-[450px] w-full overflow-hidden rounded-2xl">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${role.id}-${role.id === 'patagon' ? currentExampleIndexPatagon : currentExampleIndexAtenea}`}
                          initial={{ x: 300, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -300, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          drag={role.examples.length > 1 ? "x" : false}
                          dragConstraints={{ left: 0, right: 0 }}
                          onDragEnd={(_, info) => { if (role.examples.length > 1 && info.offset.x < -50) handleNextExample(role.id); }}
                          onClick={() => role.examples.length > 1 && handleNextExample(role.id)}
                          className={`absolute inset-0 p-8 flex flex-col justify-start cursor-pointer select-none rounded-2xl backdrop-blur-md ${role.id === 'atenea' ? 'bg-[#0a192f] shadow-[inset_6px_6px_10px_0_#050d18,inset_-6px_-6px_10px_0_#0f2546]' : 'bg-[#edd5b1] shadow-[inset_6px_6px_10px_0_#c9b596,inset_-6px_-6px_10px_0_#fff5cc]'}`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${role.id === 'atenea' ? 'text-white/40' : 'text-black/40'}`}>
                              {role.id === 'patagon' && currentExampleIndexPatagon === 0 ? 'Información General' : role.id === 'atenea' && currentExampleIndexAtenea === 0 ? 'Información General' : `Ejemplo ${role.id === 'patagon' ? currentExampleIndexPatagon : currentExampleIndexAtenea}`}
                            </span>
                            {role.examples.length > 1 && <ArrowRight className="w-4 h-4 opacity-50" />}
                          </div>
                          
                          <h4 className="text-2xl font-black uppercase italic mb-2 tracking-tight leading-tight">
                            {role.examples[role.id === 'patagon' ? currentExampleIndexPatagon : currentExampleIndexAtenea].title}
                          </h4>
                          
                          {role.examples[role.id === 'patagon' ? currentExampleIndexPatagon : currentExampleIndexAtenea].desc && (
                            <p className={`text-base font-bold uppercase tracking-wide mb-4 ${role.id === 'atenea' ? 'text-white/80' : 'text-black/80'}`}>
                              {role.examples[role.id === 'patagon' ? currentExampleIndexPatagon : currentExampleIndexAtenea].desc}
                            </p>
                          )}

                          {role.examples[role.id === 'patagon' ? currentExampleIndexPatagon : currentExampleIndexAtenea].features && (
                            <ul className="space-y-4">
                              {role.examples[role.id === 'patagon' ? currentExampleIndexPatagon : currentExampleIndexAtenea].features.map((feature, idx) => (
                                <li key={idx} className={`flex items-start gap-3 text-sm font-light uppercase tracking-tight ${role.id === 'atenea' ? 'text-white/70' : 'text-black/70'}`}>
                                  <Check className={`${role.accentColor} w-4 h-4 mt-0.5 flex-shrink-0`} />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          )}

                          {(role.id === 'patagon' && currentExampleIndexPatagon === 0 || role.id === 'atenea' && currentExampleIndexAtenea === 0) && role.logo && (
                            <div className="mt-auto pt-6 pb-6 flex justify-center">
                              <img src={role.logo} alt="Logo" className="w-1/3 h-auto object-contain" />
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 pointer-events-none">
                  <Zap className={`w-64 h-64 ${role.id === 'atenea' ? 'text-white' : 'text-black'} opacity-5`} />
                </div>
              </div>
            ))}
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
                        <span className="text-client text-7xl md:text-9xl font-black tracking-tighter mb-4">{res.value}</span>
                        <span className="text-white text-xs md:text-sm font-black tracking-[0.4em] text-center uppercase border-t border-white/20 pt-4">{res.label}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <RoadmapPresentation />

      {/* SECCIÓN SERVICIOS: DISEÑO TIPO REVISTA */}
      <section id="services" className="reveal-on-scroll bg-client-dark py-16 md:py-24 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className={`lg:w-1/3 transition-all duration-1000 ${visibleItems.services ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-tight mb-8 break-words">
                    Servicios<br/><span className="text-client">para {clientName}</span>
                </h2>
                <div className="p-6 border border-client/30 rounded-[1.5rem] bg-client/5" style={{ borderColor: `${clientColor}4d`, backgroundColor: `${clientColor}0d` }}>
                    <p className="text-client font-black uppercase tracking-widest text-xs mb-3">Equipo Dedicado</p>
                    <p className="text-lg md:text-xl font-light text-white/60 mb-6 uppercase italic leading-tight">Expertos en escala para el sector real estate</p>
                    <ul className="space-y-3">
                        {['Account Manager', 'Paid Media Analyst', 'Patagon Support'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 font-bold uppercase tracking-widest text-xs md:text-sm">
                                <span className="w-4 h-[1px] bg-client" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`lg:w-2/3 space-y-6 pt-4 lg:pt-8 transition-all duration-1000 delay-300 ${visibleItems.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                {[
                    "Implementación y optimización de campañas 360º.",
                    "Dashboard de métricas en tiempo real.",
                    "Diseño creativo de alto impacto visual.",
                    "Soporte técnico y estratégico Patagon AI.",
                    "Auditoría inicial de activos digitales incluida."
                ].map((text, i) => (
                    <div key={i} className="group flex items-start gap-6 border-b border-white/10 pb-6 transition-colors hover-border-client">
                        <span className="text-client font-black text-lg md:text-xl mt-1">0{i+1}</span>
                        <p className="text-xl md:text-2xl lg:text-3xl font-light uppercase tracking-tighter leading-tight hover-text-client transition-colors">
                            {text}
                        </p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESGLOSE DE PLANES: INTERACTIVO */}
      <section id="pricing" className="reveal-on-scroll min-h-screen bg-[#e0e5ec] py-24 flex flex-col justify-center">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className={`text-5xl md:text-7xl font-black text-[#0a192f] uppercase italic tracking-tighter transition-all duration-1000 ${visibleItems.pricing ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ textShadow: '3px 3px 6px #b8c6db, -3px -3px 6px #ffffff' }}>
                Inversión para {clientName}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {plans.map((plan, idx) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`group relative p-10 rounded-[3rem] transition-all duration-500 cursor-pointer bg-[#e0e5ec] ${
                  selectedPlan === plan.id 
                    ? 'shadow-[inset_6px_6px_10px_0_rgba(163,177,198,0.6),inset_-6px_-6px_10px_0_rgba(255,255,255,0.5),0_0_20px_rgba(52,211,153,0.3)] scale-105 z-10 border border-[#34d399]/30' 
                    : 'shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] border border-transparent'
                }`}
              >
                {plan.highlight && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#e0e5ec] shadow-[4px_4px_8px_rgb(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.5)] text-[#34d399] px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase">
                        Solución Estrella
                    </div>
                )}
                
                <div className="mb-8">
                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-[#e0e5ec] ${selectedPlan === plan.id ? 'shadow-[inset_4px_4px_8px_rgb(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] text-[#34d399]' : 'shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] text-gray-500'}`}>
                        {React.cloneElement(plan.icon as React.ReactElement, { size: 24 })}
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-2 text-[#0a192f]">{plan.title}</h3>
                    <p className={`text-sm font-medium uppercase tracking-widest ${selectedPlan === plan.id ? 'text-[#34d399]' : 'text-gray-400'}`}>
                        {plan.description}
                    </p>
                </div>

                <div className="mb-8">
                    <span className="text-5xl lg:text-6xl font-black tracking-tighter text-[#0a192f]">{plan.price}</span>
                    <span className={`block text-[10px] font-bold uppercase tracking-widest mt-2 ${selectedPlan === plan.id ? 'text-[#34d399]' : 'text-gray-400'}`}>
                        {plan.unit}
                    </span>
                </div>

                <div className="space-y-4 mb-10">
                    {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center bg-[#e0e5ec] ${selectedPlan === plan.id ? 'shadow-[inset_2px_2px_4px_rgb(163,177,198,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] text-[#34d399]' : 'shadow-[2px_2px_4px_rgb(163,177,198,0.6),-2px_-2px_4px_rgba(255,255,255,0.5)] text-gray-400'}`}>
                              <Check size={12} strokeWidth={3} />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-tight leading-tight text-gray-600">{feat}</span>
                        </div>
                    ))}
                </div>

                <button className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest transition-all bg-[#e0e5ec] ${selectedPlan === plan.id ? 'shadow-[inset_4px_4px_8px_rgb(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] text-[#34d399]' : 'shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] text-gray-500 hover:text-[#34d399]'}`}>
                    {selectedPlan === plan.id ? 'Seleccionado' : 'Seleccionar'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee-bar">
        <div className="marquee-row">
          {/* Se duplica el array para crear el efecto de scroll infinito sin cortes */}
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {[
                "Meta Ads", 
                "Google Ads", 
                "Mercado Libre Ads", 
                "TikTok Ads", 
                "Performance Marketing", 
                "ROAS Optimization", 
                "Full-Funnel Attribution", 
                "Creative Testing"
              ].map((item) => (
                <span key={item} className="m-item">
                  {item}
                  <span className="m-sep">✦</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-gray-50 py-20 border-t border-gray-100">
        <div className="container mx-auto px-8 md:px-20 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black">
          <div className="flex items-center gap-4 mb-8 md:mb-0">
             <div className="w-10 h-10 bg-client-dark flex items-center justify-center rounded-lg text-client font-black">A</div>
             <span>Atenea Growth Marketing ✕ {clientName} © 2024</span>
          </div>
          <div className="flex gap-12">
            <span className="hover:text-black cursor-pointer transition-colors">Estrategia</span>
            <span className="hover:text-black cursor-pointer transition-colors">Patagon AI</span>
            <Link to="/create-proposal" className="hover:text-emerald-500 cursor-pointer transition-colors">Propuesta comercial 2024</Link>
          </div>
        </div>
      </footer>
      
      {/* Espacio para que la revelación sea fluida */}
      <div className="h-32 bg-[#0a192f]" />
      
      </div>
      </CurtainReveal>

      {/* Demo Button */}
      <div className="fixed bottom-6 left-6 z-[100]">
        <button 
          onClick={() => {
            const demoData = {
              clientName: 'Toribio Achaval',
              phrase: 'Encontra tu lugar',
              img1: 'https://media.licdn.com/dms/image/v2/C4E0BAQHZ7U5VC5ziFQ/company-logo_200_200/company-logo_200_200/0/1635876481332/toribioachaval_logo?e=2147483647&v=beta&t=w5cKjUImTaFHcuXjLvTVn_bw3U1-PXMcGNwvbBvjOgI',
              img2: 'https://media.licdn.com/dms/image/v2/C4E0BAQHZ7U5VC5ziFQ/company-logo_200_200/company-logo_200_200/0/1635876481332/toribioachaval_logo?e=2147483647&v=beta&t=w5cKjUImTaFHcuXjLvTVn_bw3U1-PXMcGNwvbBvjOgI',
              color1: '#FF0000',
              color2: '#000000',
              color3: '#FFFFFF'
            };
            const encoded = btoa(JSON.stringify(demoData));
            window.location.href = `/?data=${encoded}`;
          }}
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all shadow-xl"
        >
          Simular Demo: Toribio Achaval
        </button>
      </div>

      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/5491124774256?text=${encodeURIComponent("Hola Atenea Growth!\nMe contacto de " + clientName + ".\nQuería ponerme en contacto con un asesor.")}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-transform overflow-hidden"
      >
        <img 
          src="https://store-images.s-microsoft.com/image/apps.8453.13518859748920827.4d7dd838-9f34-4ad2-9cd7-b861c6398fc1.11cbb3d4-ffd9-42c1-82bd-e3f305d562b1"
          alt="WhatsApp"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </a>

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --client-color: ${clientColor};
          --client-bg: ${clientBg};
          --client-light: ${clientLight};
        }
        .text-client { color: var(--client-color); }
        .bg-client { background-color: var(--client-color); }
        .border-client { border-color: var(--client-color); }
        
        .text-client-dark { color: var(--client-bg); }
        .bg-client-dark { background-color: var(--client-bg); }
        .border-client-dark { border-color: var(--client-bg); }

        .hover-text-client:hover { color: var(--client-color) !important; }
        .hover-border-client:hover { border-color: var(--client-color) !important; }
        .hover-bg-client:hover { background-color: var(--client-color) !important; }
        .hover-text-client-dark:hover { color: var(--client-bg) !important; }

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
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
      `}} />
    </>
  );
}
