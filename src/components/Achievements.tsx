import React from 'react';
import { motion } from 'motion/react';
import {
  Trophy,
  Building2,
  TrendingUp,
  Code2,
  Sparkles,
  Globe2,
  CheckCircle,
  Award
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

const achievementIconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-cyan-400" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-purple-400" />,
  Code2: <Code2 className="w-6 h-6 text-emerald-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-rose-400" />,
  Globe2: <Globe2 className="w-6 h-6 text-sky-400" />
};

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>MILESTONES &amp; DISTINCTIONS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-mono">
            // Demonstrated accomplishments across commercial, technical &amp; global environments
          </p>
        </div>

        {/* Achievements Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full flex flex-col"
            >
              <TiltCard
                withRgbBorder={index === 0 || index === 4}
                glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
                tiltMaxAngle={9}
                className="h-full flex flex-col glass-panel p-6 border border-cyan-500/20 bg-slate-950/85 hover:border-cyan-500/45 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
                    {achievementIconMap[item.icon] || <Award className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-300">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Experience Record</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
