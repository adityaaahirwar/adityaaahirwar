import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
            </span>
            <span className="text-xs font-tech text-neon-cyan tracking-widest uppercase">Open to Work 2026</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
            <span className="text-white">Crafting </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-glow">
              Future-Ready
            </span>
            <br />
            Digital Experiences
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed font-light">
            I am <span className="text-white font-semibold">Aditya Ahirwar</span>, a Website Developer & Ads Expert transforming businesses through high-impact websites and ROI-driven Meta/Google campaigns.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group relative px-8 py-3 bg-white text-black font-bold font-tech tracking-wider uppercase rounded hover:bg-neon-cyan transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hire Me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#projects"
              className="px-8 py-3 glass-panel border-white/20 text-white font-tech tracking-wider uppercase rounded hover:border-neon-purple/50 hover:text-neon-purple transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8">
            <div>
              <h3 className="text-3xl font-display font-bold text-white">4+</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Years Exp</p>
            </div>
            <div>
              <h3 className="text-3xl font-display font-bold text-white">100%</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-display font-bold text-white">50+</h3>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Projects Done</p>
            </div>
          </div>
        </motion.div>

        {/* 3D Hologram Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
            <div className="relative w-80 h-[480px] group perspective-1000">
                {/* Rotating Card Container */}
                <motion.div 
                    className="w-full h-full relative preserve-3d transition-transform duration-500 ease-out transform"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Glass Card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-filter backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl flex flex-col items-center p-6 overflow-hidden">
                        {/* Internal Glow */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-neon-cyan/20 to-transparent opacity-50" />
                        
                        {/* Profile Image Simulation (Using a futuristic avatar placeholder or abstract) */}
                        <div className="relative w-32 h-32 rounded-full border-2 border-neon-cyan p-1 mb-6 mt-8">
                            <img 
                                src="/image/aditya.png"
                                alt="Aditya" 
                                className="w-full h-full rounded-full object-cover filter hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 rounded-full border border-neon-cyan animate-ping opacity-20" />
                        </div>

                        <h2 className="text-2xl font-display font-bold text-center mb-1">Aditya Ahirwar</h2>
                        <p className="text-sm font-tech text-neon-purple tracking-widest uppercase mb-6">Full Stack Developer</p>

                        {/* Holographic Data Lines */}
                        <div className="w-full space-y-3">
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-neon-cyan w-[90%] shadow-[0_0_10px_#00f3ff]" />
                            </div>
                            <div className="flex justify-between text-xs text-gray-400 font-tech">
                                <span>Web Dev</span>
                                <span>90%</span>
                            </div>
                            
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-neon-purple w-[95%] shadow-[0_0_10px_#bd00ff]" />
                            </div>
                            <div className="flex justify-between text-xs text-gray-400 font-tech">
                                <span>Ads Strategy</span>
                                <span>95%</span>
                            </div>
                        </div>

                        {/* Bottom Decoration */}
                        <div className="mt-auto w-full flex justify-between items-center opacity-50">
                            <MousePointer2 className="w-4 h-4 text-neon-cyan" />
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-4" />
                            <span className="text-[10px] font-mono">ID: AA-2026</span>
                        </div>
                    </div>
                </motion.div>

                {/* Ground Reflection/Shadow */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-40 h-10 bg-neon-cyan/20 blur-xl rounded-full" />
            </div>
        </motion.div>
      </div>
    </div>
  );
};