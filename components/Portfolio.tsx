import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "Neon E-Commerce",
    category: "Web Development",
    image: "https://picsum.photos/seed/p1/600/400",
    description: "A futuristic shopping experience built with Next.js and WebGL."
  },
  {
    title: "Alpha Finance Ads",
    category: "Google Ads",
    image: "https://picsum.photos/seed/p2/600/400",
    description: "High-ROI PPC campaign for a fintech startup improving leads by 200%."
  },
  {
    title: "Cyber Agency Site",
    category: "UI/UX Design",
    image: "https://picsum.photos/seed/p3/600/400",
    description: "Award-winning dark mode agency portfolio."
  },
  {
    title: "Fitness App Meta",
    category: "Meta Ads",
    image: "https://picsum.photos/seed/p4/600/400",
    description: "Viral Instagram reel campaign targeting health enthusiasts."
  }
];

export const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
       <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-display font-bold mb-2">Featured <span className="text-neon-cyan">Projects</span></h2>
          <p className="text-gray-400 max-w-md">A selection of my best work in development and digital advertising.</p>
        </div>
        <button className="hidden md:block px-6 py-2 border border-white/20 rounded-full hover:bg-white/5 font-tech uppercase text-sm tracking-wider transition-colors">
          View All Work
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative rounded-xl overflow-hidden glass-panel border border-white/10"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
              />
            </div>
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-neon-cyan text-xs font-tech uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold font-display text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-white hover:text-neon-cyan text-sm font-bold transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
         <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/5 font-tech uppercase text-sm tracking-wider transition-colors">
          View All Work
        </button>
      </div>
    </div>
  );
};