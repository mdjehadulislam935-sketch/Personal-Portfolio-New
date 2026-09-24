import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Facebook,
  Instagram,
  Video,
  Film,
  MessageSquare,
  Radio,
  Send,
  Compass,
  Mail,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { socialLinksData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { playCyberSound } from '../utils/helpers';

interface SocialConnectProps {
  soundEnabled: boolean;
}

const socialIconMap: Record<string, React.ReactNode> = {
  Facebook: <Facebook className="w-5 h-5" />,
  Instagram: <Instagram className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  Film: <Film className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  Radio: <Radio className="w-5 h-5" />,
  Send: <Send className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Mail: <Mail className="w-5 h-5" />
};

export const SocialConnect: React.FC<SocialConnectProps> = ({ soundEnabled }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Main' | 'Social' | 'Community'>('All');

  const filteredLinks = activeFilter === 'All'
    ? socialLinksData
    : socialLinksData.filter(l => l.category === activeFilter);

  return (
    <section id="social" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GLOBAL NETWORK</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Connect <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">With Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-mono">
            // Official direct channels, community broadcasts &amp; verified platforms
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {(['All', 'Main', 'Social', 'Community'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playCyberSound('click', soundEnabled);
                  setActiveFilter(cat);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeFilter === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLinks.map((link, index) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberSound('click', soundEnabled)}
                className="group block h-full"
              >
                <TiltCard
                  glowColor="cyan"
                  tiltMaxAngle={8}
                  className="h-full glass-panel p-4 sm:p-5 border border-cyan-500/20 bg-slate-950/80 group-hover:border-cyan-400/60 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300 shadow-sm shrink-0"
                      style={{
                        boxShadow: `0 0 15px -3px ${link.color}40`
                      }}
                    >
                      {socialIconMap[link.icon] || <ExternalLink className="w-5 h-5" />}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-sm text-white group-hover:text-cyan-300 transition-colors truncate">
                          {link.name}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">
                          {link.category}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-slate-400 truncate mt-0.5">
                        {link.displayHandle || link.url}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 text-slate-400 group-hover:text-cyan-300 transition-all shrink-0">
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </TiltCard>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
