import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Building2,
  ShoppingBag,
  Globe2,
  Calendar,
  MapPin,
  Sparkles,
  ChevronDown,
  Eye,
  EyeOff
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { playCyberSound } from '../utils/helpers';

interface ExperienceProps {
  soundEnabled: boolean;
}

const typeIconMap: Record<string, React.ReactNode> = {
  International: <Globe2 className="w-5 h-5 text-emerald-400" />,
  'E-Commerce': <ShoppingBag className="w-5 h-5 text-purple-400" />,
  Banking: <Building2 className="w-5 h-5 text-cyan-400" />
};

export const Experience: React.FC<ExperienceProps> = ({ soundEnabled }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    playCyberSound('click', soundEnabled);
    setIsVisible(!isVisible);
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAREER TRACK RECORD</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Work &amp; Freelance <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-mono">
            // Banking operations, e-commerce dropshipping &amp; international professional roles
          </p>

          {/* Quick Visibility Toggle */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={toggleVisibility}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors"
            >
              {isVisible ? <EyeOff className="w-3.5 h-3.5 text-cyan-400" /> : <Eye className="w-3.5 h-3.5 text-slate-400" />}
              <span>{isVisible ? 'Collapse Experience' : 'Show Experience Timeline'}</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-4xl mx-auto"
            >
              {/* Vertical Glowing Timeline Line */}
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 transform sm:-translate-x-1/2 shadow-[0_0_12px_rgba(6,182,212,0.5)]" />

              <div className="space-y-12">
                {experienceData.map((item, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className={`relative flex flex-col sm:flex-row items-start ${
                        isEven ? 'sm:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Timeline Central Node */}
                      <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 transform -translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.8)] z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                      </div>

                      {/* Content Card */}
                      <div className={`ml-12 sm:ml-0 w-full sm:w-[calc(50%-2rem)] ${isEven ? 'sm:pl-8' : 'sm:pr-8'}`}>
                        <TiltCard
                          withRgbBorder={index === 0}
                          glowColor={index === 0 ? 'emerald' : index === 1 ? 'purple' : 'cyan'}
                          tiltMaxAngle={8}
                          className="glass-panel p-6 border border-cyan-500/20 bg-slate-950/85 hover:border-cyan-500/50"
                        >
                          {/* Header pill & icon */}
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                              {typeIconMap[item.type]}
                            </div>
                            {item.badge && (
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                                {item.badge}
                              </span>
                            )}
                          </div>

                          <h3 className="font-display font-bold text-lg text-white mb-1">
                            {item.company}
                          </h3>

                          <p className="text-cyan-400 font-semibold text-xs font-mono mb-3">
                            {item.role}
                          </p>

                          {/* Metadata row */}
                          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono mb-4 pb-3 border-b border-slate-800/80">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-purple-400" />
                              <span>{item.period}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                              <span>{item.location}</span>
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-slate-300 text-xs leading-relaxed">
                            {item.description}
                          </p>
                        </TiltCard>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
