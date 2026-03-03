import React from 'react';

interface CurtainRevealProps {
  children: React.ReactNode; // El contenido principal de la web
  footer: React.ReactNode;   // El componente que quieres revelar (CTA)
  containerClassName?: string;
  footerClassName?: string;
}

export const CurtainReveal: React.FC<CurtainRevealProps> = ({ 
  children, 
  footer, 
  containerClassName,
  footerClassName 
}) => {
  return (
    <div className="relative">
      {/* Contenido principal (La "Cortina") */}
      <div 
        className={`relative z-10 bg-[#050505] shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${containerClassName || ''}`}
      >
        {children}
      </div>

      {/* Contenido revelado (El "Fondo") */}
      <div 
        className={`sticky bottom-0 z-0 h-screen flex items-center justify-center ${footerClassName || ''}`}
      >
        {footer}
      </div>
    </div>
  );
};
