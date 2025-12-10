import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "CEO",
    company: "TechNova",
    content: "Aditya's ability to blend high-end design with conversion-focused ad strategies is unmatched. Our lead volume tripled in 3 months.",
    avatar: "https://picsum.photos/seed/t1/100/100"
  },
  {
    name: "Marcus Chen",
    role: "Marketing Director",
    company: "FutureScale",
    content: "The website he built for us feels like it's from 2030. Incredibly fast, responsive, and the ad integration was seamless.",
    avatar: "https://picsum.photos/seed/t2/100/100"
  },
  {
    name: "Elena Rodriguez",
    role: "Founder",
    company: "Luxe Apparel",
    content: "Professional, skilled, and visionary. The Meta ads campaign he ran for our summer launch was our most profitable ever.",
    avatar: "https://picsum.photos/seed/t3/100/100"
  },
  {
    name: "David Wright",
    role: "CTO",
    company: "Orbital Systems",
    content: "We needed a UI that communicated 'future' instantly. Aditya delivered exactly that. The animations are buttery smooth.",
    avatar: "https://picsum.photos/seed/t4/100/100"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="py-20 bg-gradient-to-b from-transparent to-black/40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold">Client <span className="text-neon-purple">Stories</span></h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mt-4" />
        </div>

        <div className="relative max-w-5xl mx-auto h-[450px] md:h-[400px]">
           {/* Navigation Buttons */}
           <button 
             onClick={handlePrev}
             className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-panel hover:bg-neon-cyan/20 transition-all text-white border border-white/10 hover:border-neon-cyan group"
           >
             <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
           </button>
           
           <button 
             onClick={handleNext}
             className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-panel hover:bg-neon-cyan/20 transition-all text-white border border-white/10 hover:border-neon-cyan group"
           >
             <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
           </button>

           <div className="relative w-full h-full flex items-center justify-center px-4 md:px-0">
             <AnimatePresence initial={false} custom={direction} mode="wait">
               <motion.div
                 key={currentIndex}
                 custom={direction}
                 variants={variants}
                 initial="enter"
                 animate="center"
                 exit="exit"
                 transition={{
                   x: { type: "spring", stiffness: 300, damping: 30 },
                   opacity: { duration: 0.2 }
                 }}
                 className="absolute w-full md:w-[80%]"
               >
                 <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative backdrop-blur-xl shadow-neon-strong/20">
                    <Quote className="absolute top-6 right-6 text-neon-cyan/20 w-16 h-16 rotate-12" />
                    
                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                      <div className="relative group shrink-0">
                         <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-neon-cyan/50 shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                           <img 
                             src={testimonials[currentIndex].avatar} 
                             alt={testimonials[currentIndex].name} 
                             className="w-full h-full object-cover" 
                           />
                         </div>
                         <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20" />
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start gap-1 mb-4 text-neon-purple">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        
                        <p className="text-xl md:text-2xl text-gray-200 font-light italic leading-relaxed mb-6">
                          "{testimonials[currentIndex].content}"
                        </p>
                        
                        <div>
                          <h4 className="text-lg font-bold font-display text-white">{testimonials[currentIndex].name}</h4>
                          <p className="text-sm font-tech text-neon-cyan tracking-wider uppercase">
                            {testimonials[currentIndex].role} @ {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                 </div>
               </motion.div>
             </AnimatePresence>
           </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-4 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-neon-cyan shadow-[0_0_10px_#00f3ff]' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};