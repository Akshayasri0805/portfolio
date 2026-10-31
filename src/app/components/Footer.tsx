import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X, Send } from 'lucide-react';
import { portfolioLinks } from '../data/links';

export const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <footer id="contact" className="relative bg-neutral-950 py-32 px-6 overflow-hidden border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-20 mb-32">
            
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-9xl font-medium tracking-tighter leading-[0.9] mb-16"
              >
                Let's <br />
                <span className="italic font-serif text-neutral-500">Talk</span>
              </motion.h2>
              
              <div className="flex flex-col gap-10">
                 <button 
                   onClick={() => setIsFormOpen(true)}
                   className="group flex items-center gap-6 text-left transition-all"
                 >
                   <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-105 group-hover:bg-neutral-200 transition-all duration-500">
                     <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-500" />
                   </div>
                   <div>
                     <span className="block text-4xl font-light tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-300">Get in touch</span>
                     <span className="block text-sm font-mono uppercase tracking-widest text-neutral-500 mt-1 group-hover:text-neutral-400 transition-colors">Open to design opportunities</span>
                   </div>
                 </button>

                 <a href={portfolioLinks.email} className="group flex items-center gap-4 text-lg font-mono text-neutral-500 hover:text-white transition-colors pl-4">
                   <span className="w-2 h-2 rounded-full bg-green-500" />
                   Email Akshaya
                 </a>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-12">
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">Socials</h4>
                  <ul className="space-y-4">
                    {[
                      { label: 'LinkedIn', href: portfolioLinks.linkedin },
                      { label: 'Behance', href: portfolioLinks.behance },
                      { label: 'GitHub', href: portfolioLinks.github },
                      { label: 'Resume', href: portfolioLinks.resume },
                    ].map((social) => (
                      <li key={social.label}>
                        <a href={social.href} className="flex items-center gap-2 text-lg font-light text-neutral-400 hover:text-white transition-colors group">
                          {social.label}
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">Sitemap</h4>
                  <ul className="space-y-4">
                    {['Home', 'Work', 'About', 'Contact'].map((link) => (
                      <li key={link}>
                        <a href={`#${link.toLowerCase()}`} className="text-lg font-light text-neutral-400 hover:text-white transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
              © 2026 Akshaya Sri Arasada.
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
              Curious · Structured · Human-centered
            </p>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = `Portfolio inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    window.location.href = `mailto:akshayasriarasada@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormState('success');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-[100]"
          />
          
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[101] w-full md:w-[600px] bg-neutral-900 border-l border-white/10 shadow-2xl p-8 md:p-12 overflow-y-auto"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 p-2 text-neutral-500 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6"
                >
                  <Send className="w-8 h-8 text-black" />
                </motion.div>
                <h3 className="text-3xl font-medium mb-2">Message Sent</h3>
                <p className="text-neutral-400 font-light">Your email app should open with the message addressed to Akshaya.</p>
              </div>
            ) : (
              <div className="mt-12">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6 block">04 / Contact</span>
                <h3 className="text-4xl md:text-5xl font-medium tracking-tighter mb-2">
                  Start a <br />
                  <span className="italic font-serif text-neutral-500">Conversation</span>
                </h3>
                <p className="text-neutral-400 font-light mb-12">
                  Tell me about the role, product, or design challenge.
                </p>

                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="space-y-8">
                    <div className="group relative">
                      <input 
                        required 
                        name="name"
                        type="text" 
                        placeholder="Your Name"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                      />
                    </div>
                    
                    <div className="group relative">
                      <input 
                        required 
                        name="email"
                        type="email" 
                        placeholder="Email Address"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                      />
                    </div>

                    <div className="group relative">
                      <textarea 
                        required 
                        name="message"
                        placeholder="Project Details..."
                        rows={4}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-light focus:outline-none focus:border-white transition-colors resize-none placeholder:text-neutral-700"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-white text-black text-lg font-medium py-4 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
