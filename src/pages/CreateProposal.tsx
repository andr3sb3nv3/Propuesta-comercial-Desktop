import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowLeft, Image as ImageIcon, Type, User, Link as LinkIcon, CheckCircle2 } from 'lucide-react';

export default function CreateProposal() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clientName: '',
    img1: '',
    img2: '',
    phrase: ''
  });
  const [generatedUrl, setGeneratedUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedData = btoa(JSON.stringify(formData));
    const url = `${window.location.origin}/?data=${encodedData}`;
    setGeneratedUrl(url);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedUrl);
    alert('URL copiada al portapapeles');
  };

  return (
    <div className="min-h-screen bg-white text-[#0a192f] font-sans selection:bg-emerald-400 selection:text-[#0a192f]">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-widest text-xs mb-12 hover:text-[#0a192f] transition-colors">
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>

        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-6">
            Crear <span className="text-emerald-400">Propuesta</span>
          </h1>
          <p className="text-xl text-gray-500 font-light">
            Genera un enlace personalizado para un nuevo potencial cliente. Demuéstrales por qué nos importa su crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                  <User size={14} /> Nombre del Cliente
                </label>
                <input 
                  type="text" 
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#0a192f] font-medium focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                  placeholder="Ej: Inmobiliaria XYZ"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                  <ImageIcon size={14} /> URL Imagen 1
                </label>
                <input 
                  type="url" 
                  name="img1"
                  value={formData.img1}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#0a192f] font-medium focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                  placeholder="https://ejemplo.com/imagen1.jpg"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                  <ImageIcon size={14} /> URL Imagen 2
                </label>
                <input 
                  type="url" 
                  name="img2"
                  value={formData.img2}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#0a192f] font-medium focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all"
                  placeholder="https://ejemplo.com/imagen2.jpg"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                  <Type size={14} /> Frase Personalizada
                </label>
                <textarea 
                  name="phrase"
                  value={formData.phrase}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#0a192f] font-medium focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all resize-none"
                  placeholder="Escribe un mensaje impactante sobre por qué nos importa su crecimiento..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-400 text-[#0a192f] font-black uppercase tracking-widest py-4 rounded-xl hover:bg-[#0a192f] hover:text-emerald-400 transition-colors mt-8"
              >
                Generar Enlace
              </button>
            </form>

            {generatedUrl && (
              <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-xl animate-reveal-up">
                <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
                  <CheckCircle2 size={18} />
                  <span>¡Enlace Generado!</span>
                </div>
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    readOnly 
                    value={generatedUrl} 
                    className="flex-1 bg-white border border-emerald-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none"
                  />
                  <button 
                    onClick={copyToClipboard}
                    className="bg-[#0a192f] text-white p-2 rounded-lg hover:bg-emerald-500 transition-colors"
                    title="Copiar enlace"
                  >
                    <LinkIcon size={18} />
                  </button>
                </div>
                <div className="mt-4">
                  <a 
                    href={generatedUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-emerald-600 hover:text-[#0a192f] transition-colors"
                  >
                    Abrir propuesta en nueva pestaña →
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Preview */}
          <div className="hidden lg:block">
            <div className="sticky top-12">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">Vista Previa</h3>
              
              <div className="bg-white border-2 border-dashed border-gray-200 rounded-[2rem] p-8 overflow-hidden relative">
                {(!formData.clientName && !formData.phrase && !formData.img1 && !formData.img2) ? (
                  <div className="text-center text-gray-400 py-20">
                    <p className="font-medium">Completa el formulario para ver la vista previa</p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h4 className="text-2xl font-black uppercase italic text-[#0a192f] mb-2">
                        El futuro de <span className="text-emerald-400">{formData.clientName || '[Cliente]'}</span>
                      </h4>
                      <p className="text-gray-500 italic font-light">
                        "{formData.phrase || 'Tu frase personalizada aparecerá aquí...'}"
                      </p>
                    </div>

                    <div className="space-y-4">
                      {formData.img1 ? (
                        <img src={formData.img1} alt="Preview 1" className="w-full h-48 object-contain bg-gray-50 rounded-xl border border-gray-100" />
                      ) : (
                        <div className="w-full h-48 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center text-gray-300">
                          <ImageIcon size={32} />
                        </div>
                      )}
                      
                      {formData.img2 ? (
                        <img src={formData.img2} alt="Preview 2" className="w-full h-48 object-contain bg-gray-50 rounded-xl border border-gray-100" />
                      ) : (
                        <div className="w-full h-48 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center text-gray-300">
                          <ImageIcon size={32} />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes reveal-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-reveal-up {
          animation: reveal-up 0.5s ease-out forwards;
        }
      `}} />
    </div>
  );
}
