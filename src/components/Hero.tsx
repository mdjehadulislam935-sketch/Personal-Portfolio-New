import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  Send,
  FolderGit2,
  MapPin,
  CheckCircle2,
  Calendar,
  Globe,
  ExternalLink
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { ImageWithFallback } from './ImageWithFallback';
import { TiltCard } from './TiltCard';
import { playCyberSound } from '../utils/helpers';

interface HeroProps {
  soundEnabled: boolean;
  onOpenVisitingCard: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  soundEnabled,
  onOpenVisitingCard,
  onOpenResume
}) => {
  const roles = personalData.taglineRoles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  const scrollTo = (id: string) => {
    playCyberSound('click', soundEnabled);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 flex items-center justify-center">
      {/* Cover Photo Banner in background with cyber overlay */}
      <div className="absolute top-0 left-0 right-0 h-80 md:h-96 -z-10 overflow-hidden opacity-30 mask-radial">
        <ImageWithFallback
          src={personalData.coverImage}
          alt="Cover Banner"
          fallbackType="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Calls to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Freelance &amp; Creative Projects
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                Bangladesh &bull; Riyadh, KSA
              </span>
            </div>

            {/* Main Headline & Identity */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                  Personal Digital Identity
                </span>
                <div className="h-[1px] w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                {personalData.fullName}{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                  ({personalData.nickname})
                </span>
              </h1>
            </div>

            {/* Dynamic Typing Role Switcher */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-slate-200">
              <span className="text-slate-400">I am a</span>
              <div className="relative h-10 overflow-hidden inline-flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="text-cyan-400 font-bold underline decoration-purple-500/60 decoration-2 underline-offset-4"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Tagline & Short Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              <strong className="text-white font-medium">{personalData.tagline}</strong>
              <br className="hidden sm:inline" />
              {' '}{personalData.introduction}
            </p>

            {/* Quick Spec Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="glass-panel p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase block">Nationality</span>
                <span className="text-sm font-semibold text-cyan-300">{personalData.nationality}</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] font-mono text-slate-400 uppercase block">Born</span>
                <span className="text-sm font-semibold text-purple-300">{personalData.dob}</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-[11px] font-mono text-slate-400 uppercase block">Origin</span>
                <span className="text-sm font-semibold text-emerald-300">Feni, Bangladesh</span>
              </div>
            </div>

            {/* Action Buttons with smooth hover, glow, and click */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              {/* Explore My Profile */}
              <button
                id="btn-hero-explore"
                onClick={() => scrollTo('about')}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* View My Projects */}
              <button
                id="btn-hero-projects"
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-cyan-300 bg-slate-900/80 hover:bg-slate-900 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4 text-cyan-400" />
                <span>View My Projects</span>
              </button>

              {/* Contact Me */}
              <button
                id="btn-hero-contact"
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-purple-300 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/40 hover:border-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.2)] hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 transition-transform" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Digital Visiting Card & CV launcher buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <button
                onClick={() => {
                  playCyberSound('click', soundEnabled);
                  onOpenVisitingCard();
                }}
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-500/40"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Digital Visiting Card &amp; QR</span>
              </button>
              <span className="text-slate-600">&bull;</span>
              <button
                onClick={() => {
                  playCyberSound('click', soundEnabled);
                  onOpenResume();
                }}
                className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 underline underline-offset-4 decoration-purple-500/40"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Interactive Resume Preview</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3D Holographic Profile Glass Card with moving RGB border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-sm sm:max-w-md">
              <TiltCard
                id="hero-profile-tilt-card"
                withRgbBorder={true}
                glowColor="cyan"
                tiltMaxAngle={12}
                className="p-4 sm:p-5 bg-slate-950/80 backdrop-blur-2xl border border-cyan-500/30"
              >
                {/* Holographic Header Tag */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-cyan-500/20 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-cyan-300 font-semibold">SECURITY CLEARANCE: LEVEL 1</span>
                  </div>
                  <span className="text-[11px] text-slate-400">ID: ZIHAD-2026</span>
                </div>

                {/* Profile Photo with futuristic brackets & floating animation */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden group bg-slate-900 border border-cyan-500/30">
                  <ImageWithFallback
                    src={personalData.profileImage}
                    alt={personalData.fullName}
                    fallbackType="avatar"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Cyber Overlay Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Tech HUD corner brackets */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                  {/* Corner Floating Logo */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-slate-950/80 border border-cyan-500/40 p-1 backdrop-blur-md shadow-lg flex items-center justify-center">
                    <ImageWithFallback
                      src={personalData.logoImage}
                      alt="Logo"
                      fallbackType="logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Photo footer label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-0.5">
                      Creative Technologist
                    </p>
                    <p className="font-display font-bold text-lg text-white">
                      {personalData.fullName}
                    </p>
                  </div>
                </div>

                {/* Card Quick Info Badges */}
                <div className="mt-4 pt-3 border-t border-cyan-500/20 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-slate-900/60 rounded-lg p-2 border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400">STATUS</div>
                      <div className="text-slate-200 font-semibold truncate">Active Creator</div>
                    </div>
                  </div>
                  <div className="bg-slate-900/60 rounded-lg p-2 border border-slate-800 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400">PRESENCE</div>
                      <div className="text-slate-200 font-semibold truncate">BD &amp; Riyadh</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
