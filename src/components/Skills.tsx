import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  ShoppingBag,
  Bot,
  Sparkles,
  Layers,
  Database,
  BarChart3,
  PieChart,
  Check
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { playCyberSound } from '../utils/helpers';

interface SkillsProps {
  soundEnabled: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp className="w-5 h-5 text-cyan-400" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
  Bot: <Bot className="w-5 h-5 text-purple-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-rose-400" />,
  Layers: <Layers className="w-5 h-5 text-sky-400" />,
  Database: <Database className="w-5 h-5 text-amber-400" />
};

export const Skills: React.FC<SkillsProps> = ({ soundEnabled }) => {
  const [viewMode, setViewMode] = useState<'bars' | 'circular'>('bars');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Marketing', 'E-Commerce', 'Technology', 'Design', 'Operations'];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Technical &amp; Creative <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Skills</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-mono">
            // Practical proficiencies calibrated across real operations &amp; creative workflows
          </p>

          {/* Controls: View Mode Switcher */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-1 flex items-center gap-1">
              <button
                id="btn-skills-view-bars"
                onClick={() => {
                  playCyberSound('click', soundEnabled);
                  setViewMode('bars');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  viewMode === 'bars'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Progress Bars</span>
              </button>

              <button
                id="btn-skills-view-circular"
                onClick={() => {
                  playCyberSound('click', soundEnabled);
                  setViewMode('circular');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  viewMode === 'circular'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <PieChart className="w-3.5 h-3.5" />
                <span>Circular Gauges</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playCyberSound('click', soundEnabled);
                setSelectedCategory(cat);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-400/60 font-semibold shadow-[0_0_10px_rgba(139,92,246,0.3)]'
                  : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Mode: Progress Bars */}
        {viewMode === 'bars' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard
                  glowColor="cyan"
                  tiltMaxAngle={8}
                  className="p-6 glass-panel border border-cyan-500/20 group hover:border-cyan-500/50"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                        {iconMap[skill.iconName]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-bold text-white text-base">
                            {skill.name}
                          </h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-cyan-300 border border-slate-700">
                            {skill.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-snug">
                          {skill.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-mono font-bold text-lg text-cyan-400 group-hover:text-cyan-300">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="relative h-2.5 w-full rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-500 shadow-[0_0_12px_rgba(6,182,212,0.8)] relative"
                    >
                      {/* Pulse point at the tip */}
                      <span className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full opacity-80 animate-pulse" />
                    </motion.div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        )}

        {/* View Mode: Circular Gauges */}
        {viewMode === 'circular' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {filteredSkills.map((skill, index) => {
              const radius = 38;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <TiltCard
                    glowColor="purple"
                    tiltMaxAngle={12}
                    className="p-5 glass-panel border border-cyan-500/20 flex flex-col items-center text-center group"
                  >
                    {/* SVG Circular Ring */}
                    <div className="relative w-24 h-24 mb-3 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        {/* Background track */}
                        <circle
                          cx="50"
                          cy="50"
                          r={radius}
                          stroke="currentColor"
                          strokeWidth="6"
                          className="text-slate-800/80 fill-transparent"
                        />
                        {/* Animated meter */}
                        <motion.circle
                          cx="50"
                          cy="50"
                          r={radius}
                          stroke="url(#skillGrad)"
                          strokeWidth="6"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          whileInView={{ strokeDashoffset }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, delay: 0.15 + index * 0.1, ease: 'easeOut' }}
                          strokeLinecap="round"
                          className="fill-transparent"
                        />
                        <defs>
                          <linearGradient id="skillGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Center Percentage Display */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                        <span className="text-base font-bold text-white group-hover:text-cyan-300">
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>

                    <h4 className="font-display font-semibold text-xs text-slate-200 mt-1 line-clamp-2">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] font-mono text-cyan-400 mt-0.5">
                      {skill.category}
                    </span>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
