import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

/* =========================
   Project Type
========================= */
interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  liveUrl: string;
}

/* =========================
   Real Projects Data
========================= */
const projects: Project[] = [
  {
    title: "Marble Bliss",
    category: "Business Website",
    image: "https://marblebliss.com/og-image.jpg",
    description:
      "Premium marble & stone brand website designed to showcase products and generate high-quality business inquiries.",
    liveUrl: "https://marblebliss.com/"
  },
  {
    title: "Shreenath Industries",
    category: "Manufacturing Website",
    image: "https://shreenathind.com/og-image.jpg",
    description:
      "Corporate manufacturing website focused on brand credibility, product presentation, and lead generation.",
    liveUrl: "https://shreenathind.com/"
  },
  {
    title: "Singhai TVS",
    category: "Automobile Dealership",
    image: "http://singhaitvs.in/og-image.jpg",
    description:
      "Official TVS dealership website optimized for vehicle inquiries, service bookings, and local SEO visibility.",
    liveUrl: "http://singhaitvs.in/"
  },
  {
    title: "Pix Media Digital Solutions",
    category: "Agency Website",
    image: "https://pixmediadigitalsolutions.in/og-image.jpg",
    description:
      "Modern digital marketing agency website designed for conversions, trust-building, and service clarity.",
    liveUrl: "https://pixmediadigitalsolutions.in/"
  },
  {
    title: "MPGO Platform",
    category: "Gov-Tech Platform",
    image: "https://mpgo.vercel.app/og-image.jpg",
    description:
      "Government services platform allowing users to apply for forms and services online via WhatsApp-based workflow.",
    liveUrl: "https://mpgo.vercel.app/"
  },
  {
    title: "The Heritage Walk",
    category: "Tourism & Culture Website",
    image: "https://www.theheritagewalk.in/og-image.jpg",
    description:
      "Tourism and cultural storytelling website focused on experience discovery, bookings, and local engagement.",
    liveUrl: "https://www.theheritagewalk.in/"
  }
];

/* =========================
   Portfolio Component
========================= */
export const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-display font-bold mb-2">
            Featured <span className="text-neon-cyan">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-md">
            Real-world websites built to help businesses grow, convert, and establish trust.
          </p>
        </div>

        <button className="hidden md:block px-6 py-2 border border-white/20 rounded-full hover:bg-white/5 font-tech uppercase text-sm tracking-wider transition-colors">
          View All Work
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-xl overflow-hidden glass-panel border border-white/10"
          >
            {/* Image */}
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-neon-cyan text-xs font-tech uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold font-display text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-neon-cyan text-sm font-bold transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Website
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Button */}
      <div className="mt-10 text-center md:hidden">
        <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/5 font-tech uppercase text-sm tracking-wider transition-colors">
          View All Work
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
