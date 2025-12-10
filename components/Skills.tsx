import React from 'react';
import { motion } from 'framer-motion';
import { Code, Megaphone, Layout, Settings, Database, Smartphone } from 'lucide-react';

const CircularProgress = ({ percentage, color, label }: { percentage: number; color: string; label: string }) => {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-white/5"
          />
          <motion.circle
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            cx="64"
            cy="64"
            r="40"
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeLinecap="round"
            className="filter drop-shadow-[0_0_4px_rgba(0,0,0,0.5)]"
          />
        </svg>
        <span className="absolute text-xl font-bold font-display">{percentage}%</span>
      </div>
      <span className="mt-4 font-tech tracking-wider text-sm text-gray-300 uppercase">{label}</span>
    </div>
  );
};

const SkillTile = ({ icon: Icon, name }: { icon: any; name: string }) => (
  <motion.div 
    whileHover={{ scale: 1.05, borderColor: 'rgba(0, 243, 255, 0.5)' }}
    className="flex flex-col items-center justify-center p-6 glass-panel rounded-xl border border-white/5 group cursor-pointer"
  >
    <div className="bg-white/5 p-4 rounded-full mb-4 group-hover:bg-neon-cyan/20 transition-colors">
      <Icon className="w-8 h-8 text-gray-300 group-hover:text-neon-cyan transition-colors" />
    </div>
    <span className="font-tech text-sm tracking-wider">{name}</span>
  </motion.div>
);

export const Skills: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20 relative">
       {/* Section Header */}
       <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold mb-4">
          Technical <span className="text-neon-purple">Arsenal</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto" />
      </div>

      {/* Circular Progress Area */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        <CircularProgress percentage={95} color="#00f3ff" label="Development" />
        <CircularProgress percentage={92} color="#bd00ff" label="Strategy" />
        <CircularProgress percentage={88} color="#ffffff" label="UI/UX Design" />
        <CircularProgress percentage={90} color="#10b981" label="Automation" />
      </div>

      {/* Hologram Tiles Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <SkillTile icon={Code} name="React / TS" />
        <SkillTile icon={Megaphone} name="Meta Ads" />
        <SkillTile icon={Database} name="Google Ads" />
        <SkillTile icon={Layout} name="Landing Pages" />
        <SkillTile icon={Settings} name="Automation" />
        <SkillTile icon={Smartphone} name="Responsive" />
      </div>
    </div>
  );
};