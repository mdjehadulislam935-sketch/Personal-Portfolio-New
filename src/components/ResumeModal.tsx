import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Download,
  ExternalLink,
  Eye,
  X,
  Sparkles,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Award,
  Globe
} from 'lucide-react';
import { personalData, experienceData, educationData, skillsData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { playCyberSound } from '../utils/helpers';

interface ResumeModalProps {
  soundEnabled: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeSection: React.FC<{ soundEnabled: boolean; onOpenPreview: () => void }> = ({
  soundEnabled,
  onOpenPreview
}) => {
  return (
    <section id="cv" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <TiltCard
            withRgbBorder={true}
            glowColor="purple"
            tiltMaxAngle={8}
            className="glass-panel p-8 sm:p-12 border border-purple-500/30 bg-slate-950/90 text-center relative overflow-hidden"
          >
            {/* Background Cyber Glow */}
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-400/40 flex items-center justify-center text-purple-400 mx-auto mb-6 shadow-[0_0_25px_rgba(139,92,246,0.3)]">
              <FileText className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL CURRICULUM VITAE</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mb-3">
              Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">CV &amp; Resume</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Access my verified career history, operational experience at Bangladesh Krishi Bank, dropshipping records, and educational qualifications in a comprehensive format.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Animated Download CV Button */}
              <a
                href={`https://${personalData.cvLink}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberSound('success', soundEnabled)}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-400 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span>Download CV</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/20 text-slate-900 border border-slate-950/20">
                  {personalData.cvLink}
                </span>
              </a>

              {/* Interactive CV Preview Modal Launcher */}
              <button
                onClick={() => {
                  playCyberSound('click', soundEnabled);
                  onOpenPreview();
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-purple-500/40 hover:border-purple-400 text-purple-300 font-medium text-sm transition-all shadow-sm transform hover:-translate-y-0.5"
              >
                <Eye className="w-4 h-4 text-purple-400" />
                <span>Inspect CV Preview</span>
              </button>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export const ResumePreviewModal: React.FC<ResumeModalProps> = ({
  soundEnabled,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="rgb-border-wrapper relative z-10 w-full max-w-3xl my-8 max-h-[85vh] overflow-y-auto"
      >
        <div className="glass-panel rounded-2xl p-6 sm:p-10 bg-slate-950/95 border border-cyan-500/40 text-slate-100 relative">
          
          {/* Top Actions */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-cyan-500/20">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                CURRICULUM VITAE DOCUMENT
              </span>
              <h2 className="font-display font-extrabold text-2xl text-white">
                {personalData.fullName}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://${personalData.cvLink}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberSound('success', soundEnabled)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-semibold shadow-sm hover:bg-cyan-400 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save CV</span>
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs font-mono mb-8">
            <div>
              <span className="text-slate-400 block text-[10px]">EMAIL</span>
              <span className="text-cyan-300">{personalData.email}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">PHONE / WA</span>
              <span className="text-purple-300">{personalData.phone}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">LOCATION</span>
              <span className="text-emerald-300">Feni, BD / Riyadh, KSA</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h3 className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-2">
              PROFESSIONAL PROFILE
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {personalData.fullAbout}
            </p>
          </div>

          {/* Experience in CV */}
          <div className="mb-8">
            <h3 className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>WORK EXPERIENCE</span>
            </h3>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className="text-white font-bold">{exp.company}</span>
                    <span className="text-cyan-400">{exp.period}</span>
                  </div>
                  <div className="text-xs font-medium text-purple-300 mb-2">{exp.role} &bull; {exp.location}</div>
                  <p className="text-slate-400 text-xs leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education in CV */}
          <div className="mb-8">
            <h3 className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </h3>
            {educationData.map((edu) => (
              <div key={edu.id} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs font-mono">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-bold">{edu.institution}</span>
                  <span className="text-cyan-400">{edu.batch}</span>
                </div>
                <div className="text-slate-400 mb-2">{edu.degree} &bull; Group: {edu.group}</div>
                <p className="text-slate-300 text-xs leading-relaxed font-sans">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Skills Breakdown */}
          <div>
            <h3 className="text-xs font-mono text-cyan-400 tracking-wider uppercase mb-3">
              TECHNICAL COMPETENCIES
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.map((s) => (
                <span key={s.id} className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-200">
                  {s.name} ({s.percentage}%)
                </span>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
