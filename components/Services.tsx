import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Search, BarChart3, PenTool, Bot } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: "Website Development",
    description: "High-performance, futuristic React websites designed to convert visitors into loyal customers.",
    icon: Layout,
    tags: ["React", "Next.js", "Tailwind"]
  },
  {
    title: "Google Ads Management",
    description: "Precision-targeted PPC campaigns that maximize ROI and dominate search results.",
    icon: Search,
    tags: ["Search", "Display", "Shopping"]
  },
  {
    title: "Meta Ads Campaigns",
    description: "Creative-first advertising on Facebook & Instagram to scale brand awareness and sales.",
    icon: BarChart3,
    tags: ["Facebook", "Instagram", "Reels"]
  },
  {
    title: "Creative Strategy",
    description: "Designing the visual language and messaging that resonates with your target audience.",
    icon: PenTool,
    tags: ["Copywriting", "Visuals", "Hooks"]
  },
  {
    title: "Automation Setup",
    description: "Streamlining lead flows and follow-ups to ensure no opportunity is missed.",
    icon: Bot,
    tags: ["CRM", "Email", "Zapier"]
  }
];

export const Services: React.FC = () => {
  return (
    <div className="bg-white/2 py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-neon-cyan font-tech tracking-[0.2em] uppercase text-sm">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">
            Futuristic <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Solutions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-neon-cyan/50 hover:to-neon-purple/50 transition-all duration-300"
            >
              <div className="bg-deep-space h-full rounded-xl p-8 relative overflow-hidden">
                {/* Background Glow on Hover */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-neon-cyan/10 rounded-full blur-2xl group-hover:bg-neon-cyan/20 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-6 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all">
                    <service.icon className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-display mb-4 group-hover:text-neon-cyan transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 border-b border-white/5 pb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-tech tracking-wider px-2 py-1 bg-white/5 rounded text-gray-400 group-hover:text-white group-hover:bg-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};