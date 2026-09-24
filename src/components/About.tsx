import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  Target,
  Compass,
  Calendar,
  MapPin,
  Flag,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  CheckCircle
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { ImageWithFallback } from './ImageWithFallback';
import { playCyberSound } from '../utils/helpers';

interface AboutProps {
  soundEnabled: boolean;
}

export const About: React.FC<AboutProps> = ({ soundEnabled }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    playCyberSound('click', soundEnabled);
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER MY IDENTITY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-mono">
            // Personal Journey, Creative Philosophy &amp; Digital Mission
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3D Glass Profile Card with Animated RGB Border & Floating Effect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-sm">
              <TiltCard
                id="about-photo-card"
                withRgbBorder={true}
                glowColor="purple"
                tiltMaxAngle={14}
                className="p-5 bg-slate-950/85 backdrop-blur-2xl border border-cyan-500/30"
              >
                {/* Floating animation wrapper */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                  className="space-y-4"
                >
                  {/* Glass Card Header */}
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400 pb-2 border-b border-cyan-500/20">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      <span>BIO_CARD.SYS</span>
                    </span>
                    <span className="text-[10px] text-slate-400">STATUS: VERIFIED</span>
                  </div>

                  {/* Profile Photo */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 border border-purple-500/30 shadow-inner group">
                    <ImageWithFallback
                      src={personalData.profileImage}
                      alt={personalData.fullName}
                      fallbackType="avatar"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Glowing neon HUD gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                    
                    {/* Bottom identity plaque */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-500/30">
                      <p className="font-display font-bold text-white text-sm">{personalData.fullName}</p>
                      <p className="text-[11px] font-mono text-cyan-400">Nickname: {personalData.nickname}</p>
                    </div>
                  </div>

                  {/* Identity Key Matrix */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Date of Birth</span>
                      </span>
                      <span className="text-slate-200 font-semibold">{personalData.dob}</span>
                    </div>

                    <div className="flex items-center justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Flag className="w-3.5 h-3.5 text-purple-400" />
                        <span>Nationality</span>
                      </span>
                      <span className="text-slate-200 font-semibold">{personalData.nationality}</span>
                    </div>

                    <div className="flex items-start justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400 flex items-center gap-1.5 shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Location</span>
                      </span>
                      <span className="text-slate-200 font-semibold text-right text-[11px] max-w-[180px]">
                        {personalData.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            </div>
          </motion.div>

          {/* Right Column: Narrative Content & Interactive Read More */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Primary Bio Box */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 relative">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-cyan-400">
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>PERSONAL NARRATIVE</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Turning Ideas Into Creative Digital Experiences
              </h3>

              <div className="text-slate-300 space-y-4 text-base leading-relaxed">
                <p>
                  Hello! I&apos;m <strong className="text-cyan-300 font-semibold">M D Jihadul Islam Sojib</strong>, a passionate digital creator and aspiring web developer who enjoys turning ideas into creative digital experiences.
                </p>
                <p>
                  I&apos;m currently exploring HTML, CSS, JavaScript, AI tools, web design, graphic design, and e-commerce. I enjoy learning new technologies, experimenting with creative ideas, and building useful and interactive websites.
                </p>

                {/* Collapsible / Expandable Extra Detail */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4 overflow-hidden pt-2 border-t border-cyan-500/15"
                    >
                      <p>
                        For me, every project is an opportunity to learn something new and improve my skills. I believe that creativity, consistency, and continuous learning are the keys to growing in the digital world.
                      </p>
                      <p>
                        I&apos;m always interested in discovering new ideas, taking on new challenges, and transforming simple concepts into something unique.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Read More / Read Less Interaction Button */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  id="btn-about-read-more"
                  onClick={toggleExpanded}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{isExpanded ? 'READ LESS' : 'READ FULL BIO'}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <span className="text-xs font-mono text-slate-500">
                  {isExpanded ? '4 / 4 Paragraphs' : '2 / 4 Paragraphs'}
                </span>
              </div>
            </div>

            {/* Core Mission & Goal Card */}
            <div className="glass-panel p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-950/20 via-slate-900/40 to-slate-900/40 relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-400 shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white mb-1 flex items-center gap-2">
                    <span>My Primary Goal</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      MISSION
                    </span>
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {personalData.goal}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Connect Quick Action Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`mailto:${personalData.email}`}
                onClick={() => playCyberSound('click', soundEnabled)}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 hover:bg-slate-900 border border-cyan-500/30 text-slate-200 hover:text-cyan-300 transition-all text-xs font-mono truncate"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">{personalData.email}</span>
              </a>

              <a
                href={`tel:${personalData.phone.replace(/[^0-9+]/g, '')}`}
                onClick={() => playCyberSound('click', soundEnabled)}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 hover:bg-slate-900 border border-purple-500/30 text-slate-200 hover:text-purple-300 transition-all text-xs font-mono"
              >
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{personalData.phone}</span>
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
