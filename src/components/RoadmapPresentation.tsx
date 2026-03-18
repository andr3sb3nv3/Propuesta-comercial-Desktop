import React, { useState, useEffect } from "react";
import { Play, Zap, Users, Pause, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const roadmapData = [
  { phase: "01", title: "Setup Inicial", timing: "Semana 1", description: "Definimos tu lead ideal, playbook de calificación y objetivos comerciales.", emoji: "🎯" },
  { phase: "02", title: "Creatividades", timing: "Semana 1–2", description: "Conectamos CRM y entrenamos al agente IA con tu proceso de ventas.", emoji: "🧪" },
  { phase: "03", title: "Go Live", timing: "Semana 2", description: "Sistema 24/7 en vivo. Respuestas inmediatas y visitas agendadas automáticamente.", emoji: "🚀" },
  { phase: "04", title: "Análisis CRO", timing: "Semana 3+", description: "Optimizamos conversión y generamos insights accionables de tu web.", emoji: "📊" },
  { phase: "05", title: "Medición Real", timing: "Continuo", description: "Mejora continua basada en datos. Optimización de pauta constante.", emoji: "⚡" },
  { phase: "∞", title: "Growth Partner", timing: "Siempre", description: "Estructura para escalar. Somos tu socio estratégico de crecimiento.", emoji: "🤝" },
];

const narrationTexts = [
  "Arrancamos con el setup inicial, definiendo tu lead ideal, playbook de calificación y objetivos comerciales.",
  "Creamos las creatividades, conectando tu CRM y entrenando al agente IA con tu proceso de ventas.",
  "Lanzamos el sistema 24/7 en vivo, con respuestas inmediatas y visitas agendadas automáticamente.",
  "Realizamos análisis CRO, optimizando la conversión y generando insights accionables de tu web.",
  "Implementamos medición real, con mejora continua basada en datos y optimización de pauta constante.",
  "Finalmente, nos convertimos en tu Growth Partner, estructurando tu crecimiento como socio estratégico.",
];

function useNativeTTS() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      const spanishVoices = allVoices.filter(v => v.lang.startsWith('es'));
      
      const sortedVoices = spanishVoices.sort((a, b) => {
        const isNatural = (v: SpeechSynthesisVoice) => 
          v.name.includes('Google') || v.name.includes('Microsoft') || v.name.includes('Natural');
        const isLatAm = (v: SpeechSynthesisVoice) => v.lang !== 'es-ES';
        const scoreA = (isNatural(a) ? 2 : 0) + (isLatAm(a) ? 1 : 0);
        const scoreB = (isNatural(b) ? 2 : 0) + (isLatAm(b) ? 1 : 0);
        return scoreB - scoreA;
      });

      setVoices(sortedVoices);
      if (sortedVoices.length > 0) setSelectedVoice(sortedVoices[0]);
    };
    
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speak = (text: string, onEnd?: () => void) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.onend = () => onEnd?.();
    window.speechSynthesis.speak(utterance);
  };

  return { speak, stop: () => window.speechSynthesis.cancel(), voices, selectedVoice, setSelectedVoice };
}

export default function RoadmapPresentation() {
  const tts = useNativeTTS();
  const [activeStep, setActiveStep] = useState(-1);
  const [playing, setPlaying] = useState(false);

  const runStep = (idx: number) => {
    if (idx >= roadmapData.length) {
      setPlaying(false);
      setActiveStep(-1);
      return;
    }
    setActiveStep(idx);
    tts.speak(narrationTexts[idx], () => setTimeout(() => runStep(idx + 1), 1200));
  };

  const togglePresentation = () => {
    if (playing) {
      setPlaying(false);
      tts.stop();
    } else {
      setPlaying(true);
      runStep(0);
    }
  };

  return (
    <section className="bg-[#060B16] text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
            Roadmap <span className="text-[#34d399]">Atenea</span>
          </h2>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={togglePresentation}
              className="flex items-center gap-2 bg-[#34d399] text-[#060B16] px-6 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              {playing ? <><Pause size={20} /> Detener</> : <><Play size={20} /> Iniciar Presentación</>}
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapData.map((step, idx) => (
            <motion.div 
              key={step.phase}
              className={`p-6 rounded-3xl border transition-all duration-300 ${activeStep === idx ? 'bg-[#1a202c] border-[#34d399] shadow-lg shadow-[#34d399]/20' : 'bg-[#0f172a] border-white/10'}`}
              animate={{ scale: activeStep === idx ? 1.05 : 1 }}
            >
              <div className="text-4xl mb-4">{step.emoji}</div>
              <div className="text-[#34d399] font-bold mb-2">{step.phase}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-[#34d399] font-bold mb-4">{step.timing}</p>
              <p className="text-white/80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
