import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Github,
  Sparkles,
  Layers,
  CheckCircle,
  Eye,
  X,
  Code2
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { TiltCard } from './TiltCard';
import { ImageWithFallback } from './ImageWithFallback';
import { playCyberSound } from '../utils/helpers';

interface ProjectsProps {
  soundEnabled: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ soundEnabled }) => {
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const openProject = (project: ProjectItem) => {
    playCyberSound('click', soundEnabled);
    setActiveProjectModal(project);
  };

  const closeProject = () => {
    playCyberSound('click', soundEnabled);
    setActiveProjectModal(null);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED CREATIONS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Selected <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-mono">
            // Interactive digital web builds engineered with animation &amp; creative polish
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full flex flex-col"
            >
              <TiltCard
                id={`project-card-${project.id}`}
                withRgbBorder={true}
                glowColor="cyan"
                tiltMaxAngle={10}
                className="h-full flex flex-col glass-panel p-5 border border-cyan-500/30 group bg-slate-950/85"
              >
                {/* Image Container with zoom, brackets, and badges */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800 mb-5 group-hover:border-cyan-500/60 transition-colors">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.name}
                    fallbackType="project"
                    fallbackText={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Tech HUD corner accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                  {/* Quick View Button on Image hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => openProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/90 text-cyan-300 border border-cyan-500/50 text-xs font-mono shadow-[0_0_15px_rgba(6,182,212,0.4)] backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Details</span>
                    </button>
                  </div>
                </div>

                {/* Project Body */}
                <div className="flex-1 flex flex-col">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {project.name}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Actions: View Project & Details */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <a
                      href={project.liveLink.startsWith('http') ? project.liveLink : `https://${project.liveLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playCyberSound('click', soundEnabled)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-semibold text-xs transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_22px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => openProject(project)}
                      className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-300 transition-colors"
                      title="Inspect Project Details"
                      aria-label="Inspect Project Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Inspection Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="rgb-border-wrapper relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="glass-panel rounded-2xl p-6 sm:p-8 bg-slate-950/95 border border-cyan-500/40 text-slate-100 relative">
                {/* Close Button */}
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-cyan-500/30 mb-5 relative">
                  <ImageWithFallback
                    src={activeProjectModal.image}
                    alt={activeProjectModal.name}
                    fallbackType="project"
                    fallbackText={activeProjectModal.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {activeProjectModal.technologies.map(t => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  {activeProjectModal.name}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {activeProjectModal.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
                  <span className="text-xs font-mono text-slate-400">
                    Live Destination: <span className="text-cyan-400">{activeProjectModal.liveLink}</span>
                  </span>

                  <a
                    href={activeProjectModal.liveLink.startsWith('http') ? activeProjectModal.liveLink : `https://${activeProjectModal.liveLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playCyberSound('success', soundEnabled)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all"
                  >
                    <span>Launch Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
