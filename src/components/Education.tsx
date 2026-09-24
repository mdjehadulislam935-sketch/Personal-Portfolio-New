import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  MapPin,
  Sparkles,
  School,
  Award,
  CheckCircle2
} from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Education &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Qualifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-mono">
            // Academic background and formative learning journey
          </p>
        </div>

        {/* Education Timeline Showcase */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <TiltCard
                withRgbBorder={true}
                glowColor="cyan"
                tiltMaxAngle={10}
                className="glass-panel p-6 sm:p-8 border border-cyan-500/30 bg-slate-950/85 relative overflow-hidden"
              >
                {/* Tech watermark */}
                <div className="absolute right-4 bottom-4 text-slate-800/20 dark:text-cyan-500/5 pointer-events-none">
                  <GraduationCap className="w-40 h-40" />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-cyan-500/20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] shrink-0">
                      <School className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                        HIGHER SECONDARY CERTIFICATE
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-0.5">
                        {edu.institution}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-mono font-semibold">
                    {edu.batch}
                  </span>
                </div>

                {/* Academic Highlights Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 font-mono text-xs">
                  <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800">
                    <span className="text-slate-400 text-[10px] block mb-1">QUALIFICATION</span>
                    <span className="text-cyan-300 font-semibold">{edu.degree}</span>
                  </div>

                  <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800">
                    <span className="text-slate-400 text-[10px] block mb-1">DISCIPLINE / GROUP</span>
                    <span className="text-purple-300 font-semibold">{edu.group}</span>
                  </div>

                  <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800">
                    <span className="text-slate-400 text-[10px] block mb-1">EXAM BATCH</span>
                    <span className="text-emerald-300 font-semibold">{edu.batch}</span>
                  </div>

                  <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800">
                    <span className="text-slate-400 text-[10px] block mb-1">LOCATION</span>
                    <span className="text-amber-300 font-semibold">{edu.location}</span>
                  </div>
                </div>

                {/* Academic Narrative */}
                <div className="bg-slate-900/50 rounded-xl p-5 border border-slate-800/80">
                  <h4 className="font-display font-bold text-sm text-slate-200 mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>Academic Journey &amp; Growth</span>
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
