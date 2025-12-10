import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, Twitter, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website Development',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email details
    const recipient = 'adityaaahirwar1@gmail.com';
    const subject = `New Inquiry: ${formData.projectType} - ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.projectType}

Message:
${formData.message}`;

    // Open default mail client
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-neon-strong">
        <div className="grid lg:grid-cols-2">
          
          {/* Info Side */}
          <div className="p-10 lg:p-16 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/10 blur-[80px] rounded-full pointer-events-none" />
            
            <h2 className="text-4xl font-display font-bold mb-6">Let's Build the <br/><span className="text-neon-cyan">Future</span> Together</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Ready to elevate your digital presence? Whether it's a website overhaul or a high-ROI ad campaign, I'm ready to deploy.
            </p>

            <div className="space-y-6 mb-12">
              <a href="tel:+917610178376" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-cyan group-hover:bg-neon-cyan/20 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-tech text-lg">+91 7610178376</span>
              </a>
              <a href="mailto:adityaaahirwar1@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-neon-cyan group-hover:bg-neon-cyan/20 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-tech text-lg">adityaaahirwar1@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://instagram.com/adityaaahirwar" },
                { Icon: Facebook, href: "https://facebook.com/adityaaahirwar" },
                { Icon: Youtube, href: "https://youtube.com/adityaaahirwar" },
                { Icon: Twitter, href: "https://x.com/adityaaahirwar" },
                { Icon: Linkedin, href: "https://linkedin.com/adityaaahirwar" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-neon-cyan hover:shadow-neon transition-all duration-300 hover:-translate-y-1"
                >
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 lg:p-16 bg-deep-space/80">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-tech uppercase tracking-widest text-gray-500">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-neon-cyan focus:outline-none focus:bg-white/10 transition-all text-white" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-tech uppercase tracking-widest text-gray-500">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-neon-cyan focus:outline-none focus:bg-white/10 transition-all text-white" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-tech uppercase tracking-widest text-gray-500">Project Type</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-neon-cyan focus:outline-none focus:bg-white/10 transition-all text-white"
                >
                  <option className="bg-deep-space" value="Website Development">Website Development</option>
                  <option className="bg-deep-space" value="Google Ads Campaign">Google Ads Campaign</option>
                  <option className="bg-deep-space" value="Meta Ads Campaign">Meta Ads Campaign</option>
                  <option className="bg-deep-space" value="Automation">Automation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-tech uppercase tracking-widest text-gray-500">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-neon-cyan focus:outline-none focus:bg-white/10 transition-all text-white" 
                  placeholder="Tell me about your project..." 
                />
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-neon-cyan to-blue-600 text-black font-bold font-tech uppercase tracking-widest py-4 rounded-lg hover:shadow-neon-strong transition-all duration-300 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Initialize Contact
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};