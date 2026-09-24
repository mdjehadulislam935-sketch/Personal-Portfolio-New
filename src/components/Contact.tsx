import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Clock
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { playCyberSound } from '../utils/helpers';

interface ContactProps {
  soundEnabled: boolean;
  prefilledService?: string;
}

export const Contact: React.FC<ContactProps> = ({ soundEnabled, prefilledService }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(
    prefilledService ? `Hi Sojib, I am interested in your service: ${prefilledService}.` : ''
  );
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Sync if prefilledService changes
  React.useEffect(() => {
    if (prefilledService) {
      setMessage(`Hi Sojib, I would like to inquire about your ${prefilledService} service.`);
    }
  }, [prefilledService]);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) errs.name = 'Please enter your full name';
    if (!email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!message.trim()) {
      errs.message = 'Please provide a message or project brief';
    } else if (message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playCyberSound('click', soundEnabled);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      playCyberSound('success', soundEnabled);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1000);
  };

  const openWhatsApp = () => {
    playCyberSound('click', soundEnabled);
    const text = message.trim()
      ? `Hello M D Jihadul Islam Sojib (ZihaD), my name is ${name || 'a visitor'}. ${message}`
      : `Hello Sojib (ZihaD), I visited your digital identity website and would like to discuss a project!`;
    const cleanPhone = '8801893665896';
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMUNICATION TERMINAL</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-mono">
            // Initiate a project consultation, collaboration inquiry, or direct message
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Communication Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard
              withRgbBorder={true}
              glowColor="cyan"
              tiltMaxAngle={8}
              className="glass-panel p-6 sm:p-8 border border-cyan-500/30 bg-slate-950/85"
            >
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Let&apos;s Build Something Unique Together
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Whether you have an e-commerce requirement, website design idea, AI-assisted project, or data management task, feel free to reach out directly.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 font-mono text-xs mb-8">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] text-slate-400 uppercase block">EMAIL ADDRESS</span>
                    <span className="truncate block font-semibold">{personalData.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${personalData.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-purple-300 hover:border-purple-500/40 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">PHONE &amp; WHATSAPP</span>
                    <span className="font-semibold">{personalData.phone}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">LOCATION</span>
                    <span className="text-slate-300 font-sans text-xs">{personalData.location}</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Connect */}
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>QUICK DISPATCH</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                    ONLINE
                  </span>
                </div>
                <p className="text-slate-300 text-xs mb-4">
                  For the fastest response, send a message directly to my WhatsApp.
                </p>
                <button
                  id="btn-contact-whatsapp-direct"
                  type="button"
                  onClick={openWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs font-mono transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Me (+880 1893-665896)</span>
                </button>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Form Validation & Messaging Terminal */}
          <div className="lg:col-span-7">
            <TiltCard
              glowColor="purple"
              tiltMaxAngle={6}
              className="glass-panel p-6 sm:p-8 border border-cyan-500/25 bg-slate-950/90"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyan-500/20 text-xs font-mono">
                <span className="text-cyan-400">TRANSMISSION FORM</span>
                <span className="text-slate-400">ENCRYPTED INPUT</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-2">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name or organization"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500/70 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500/80'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-2">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                      errors.email ? 'border-rose-500/70 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500/80'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-2">
                    Message Brief <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, idea, or questions..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500/70 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500/80'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                  <button
                    id="btn-contact-send-msg"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                        <span>Sending Transmission...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </span>
                    )}
                  </button>

                  <button
                    id="btn-contact-whatsapp-form"
                    type="button"
                    onClick={openWhatsApp}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-semibold text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Me</span>
                  </button>
                </div>

                {/* Success Feedback Notification */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Transmission Received!</p>
                        <p className="text-slate-300 mt-0.5">
                          Thank you for reaching out, Sojib will get back to you promptly at {email || 'your email'}.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
};
