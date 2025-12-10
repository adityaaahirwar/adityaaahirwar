import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundParticles } from './components/BackgroundParticles';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full min-h-screen text-white font-sans selection:bg-neon-cyan selection:text-black">
      <BackgroundParticles />
      
      <div className="relative z-10 flex flex-col gap-0">
        <Navbar />
        
        <main className="flex flex-col w-full">
          <section id="home">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="services">
            <Services />
          </section>
          
          <section id="projects">
            <Portfolio />
          </section>
          
          <section id="testimonials">
            <Testimonials />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>

      {/* Ambient background glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-cyan/10 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}