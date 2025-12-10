import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Zap, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="relative glass-panel rounded-3xl p-8 lg:p-12 border border-white/10 overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }} 
        />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              <span className="text-neon-cyan">///</span> About Me
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I am a visionary Website Developer & Ads Expert dedicated to helping businesses strictly via high-converting websites and Meta/Google advertising strategies.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              With a focus on the 2026 digital landscape, I blend technical precision with creative marketing strategies. My goal is not just to build websites, but to construct digital ecosystems that generate revenue and engagement.
            </p>

            <div className="grid grid-cols-2 gap-4">
               {[
                 { icon: Cpu, label: "Tech Stack", value: "Modern & Fast" },
                 { icon: Globe, label: "Reach", value: "Global Scale" },
                 { icon: Zap, label: "Performance", value: "High Speed" },
                 { icon: User, label: "Clients", value: "Partner-Centric" },
               ].map((item, idx) => (
                 <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-neon-cyan/30 transition-colors">
                   <item.icon className="w-6 h-6 text-neon-cyan mb-2" />
                   <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                   <div className="font-bold text-white">{item.value}</div>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
            {/* Skill Graph Visualization */}
            <div className="bg-black/40 p-6 rounded-2xl border border-white/10 relative">
               <div className="absolute -top-3 -right-3 px-3 py-1 bg-neon-purple text-xs font-bold uppercase tracking-wider rounded">Expertise</div>
               
               <div className="space-y-6">
                 {[
                   { label: "Website Development", pct: 95, color: "bg-neon-cyan" },
                   { label: "Meta Ads (Facebook/Insta)", pct: 90, color: "bg-neon-purple" },
                   { label: "Google Ads (PPC)", pct: 88, color: "bg-blue-500" },
                   { label: "Automation & CRM", pct: 85, color: "bg-green-400" },
                 ].map((skill, i) => (
                   <div key={i}>
                     <div className="flex justify-between mb-2 font-tech text-sm">
                       <span>{skill.label}</span>
                       <span>{skill.pct}%</span>
                     </div>
                     <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: `${skill.pct}%` }}
                         viewport={{ once: true }}
                         transition={{ duration: 1, delay: i * 0.1 }}
                         className={`h-full ${skill.color} shadow-[0_0_10px_currentColor]`}
                       />
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};