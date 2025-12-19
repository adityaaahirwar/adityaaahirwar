import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

/* =========================
   Testimonial Type
========================= */
interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

/* =========================
   REAL CLIENT TESTIMONIALS
========================= */
const testimonials: Testimonial[] = [
  {
    name: "Pratiksha Singh",
    role: "Founder",
    company: "Marble Bliss",
    content:
      "Our brand needed a premium online presence, and Aditya delivered exactly that. The website not only looks elegant but also brings genuine business inquiries regularly.",
    avatar: "https://ui-avatars.com/api/?name=Pratiksha+Singh&background=0D8ABC&color=fff"
  },
  {
    name: "Rahul Fukrya",
    role: "Director",
    company: "Shreenath Industries",
    content:
      "Aditya understood our manufacturing business perfectly. The website he created improved our credibility and helped us connect with serious buyers.",
    avatar: "https://ui-avatars.com/api/?name=Rahul+Fukrya&background=7C3AED&color=fff"
  },
  {
    name: "Harsh Jain",
    role: "Owner",
    company: "Singhai TVS",
    content:
      "From vehicle listings to service inquiries, everything is smooth and professional. The website has become a strong digital asset for our dealership.",
    avatar: "https://ui-avatars.com/api/?name=Harsh+Jain&background=059669&color=fff"
  },
  {
    name: "Dhwaj Dronawat",
    role: "Founder",
    company: "Pix Media Digital Solutions",
    content:
      "Clean design, fast performance, and clear messaging — exactly what an agency website needs. Aditya’s work helped us convert visitors into clients.",
    avatar: "https://ui-avatars.com/api/?name=Dhwaj+Dronawat&background=DC2626&color=fff"
  },
  {
    name: "Aditya Ahirwar",
    role: "Founder & Builder",
    company: "MPGO Platform",
    content:
      "MPGO was built to simplify government services for users. This platform reflects scalability, automation, and a user-first approach from day one.",
    avatar: "https://ui-avatars.com/api/?name=Aditya+Ahirwar&background=0EA5E9&color=fff"
  },
  {
    name: "Brigadier",
    role: "Organizer",
    company: "The Heritage Walk",
    content:
      "The website beautifully represents our cultural vision. Storytelling, structure, and booking flow were handled with great attention to detail.",
    avatar: "https://ui-avatars.com/api/?name=Heritage+Walk&background=92400E&color=fff"
  }
];

/* =========================
   Testimonials Component
========================= */
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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold">
            Client <span className="text-neon-purple">Stories</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-neon-cyan to-transparent mx-auto mt-4" />
        </div>

        <div className="relative max-w-5xl mx-auto h-[450px] md:h-[400px]">
          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-panel hover:bg-neon-cyan/20 transition-all text-white border border-white/10 hover:border-neon-cyan"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass-panel hover:bg-neon-cyan/20 transition-all text-white border border-white/10 hover:border-neon-cyan"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider */}
          <div className="relative w-full h-full flex items-center justify-center">
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
                <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative">
                  <Quote className="absolute top-6 right-6 text-neon-cyan/20 w-16 h-16 rotate-12" />

                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-neon-cyan/50">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start gap-1 mb-4 text-neon-purple">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>

                      <p className="text-xl md:text-2xl text-gray-200 italic mb-6">
                        "{testimonials[currentIndex].content}"
                      </p>

                      <h4 className="text-lg font-bold text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-neon-cyan uppercase tracking-wider">
                        {testimonials[currentIndex].role} @ {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-1 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-neon-cyan'
                  : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
