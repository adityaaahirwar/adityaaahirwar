import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black/80 backdrop-blur-md pt-12 pb-6">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50 shadow-[0_0_10px_#00f3ff]" />
      
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">ADITYA AHIRWAR</h2>
          <p className="text-xs font-tech text-gray-500 uppercase tracking-[0.3em]">Architecting the Digital Future</p>
        </div>
        
        <div className="flex justify-center gap-8 mb-8 text-sm text-gray-400 font-sans">
            <a href="#home" className="hover:text-neon-cyan transition-colors">Home</a>
            <a href="#about" className="hover:text-neon-cyan transition-colors">About</a>
            <a href="#services" className="hover:text-neon-cyan transition-colors">Services</a>
            <a href="#contact" className="hover:text-neon-cyan transition-colors">Contact</a>
        </div>

        <div className="text-xs text-gray-600 font-tech">
          &copy; 2026 Aditya Ahirwar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};