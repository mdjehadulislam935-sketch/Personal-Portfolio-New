import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowUp,
  Heart,
  Sparkles,
  Facebook,
  Instagram,
  Video,
  Send,
  Mail,
  Code2,
  Globe
} from 'lucide-react';
import { personalData, socialLinksData } from '../data/portfolioData';
import { ImageWithFallback } from './ImageWithFallback';
import { playCyberSound } from '../utils/helpers';

interface FooterProps {
  soundEnabled: boolean;
}

export const Footer: React.FC<FooterProps> = ({ soundEnabled }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    playCyberSound('click', soundEnabled);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 bg-slate-950 border-t border-cyan-500/20 text-slate-400 overflow-hidden">
      {/* Top subtle RGB line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-900">
          
          {/* Brand & Identity */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-cyan-500/40 p-1 flex items-center justify-center">
                <ImageWithFallback
                  src={personalData.logoImage}
                  alt="ZihaD Logo"
                  fallbackType="logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight">
                {personalData.fullName}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {personalData.nickname}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md font-mono">
              Turning Ideas Into Digital Experiences. Web Designer &bull; Digital Creator &bull; E-Commerce Enthusiast
            </p>
          </div>

          {/* Social Quick Row */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-2.5">
            {socialLinksData.slice(0, 5).map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberSound('click', soundEnabled)}
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-cyan-500/20 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors"
                title={s.name}
              >
                {s.name.includes('Facebook') && <Facebook className="w-4 h-4" />}
                {s.name.includes('Instagram') && <Instagram className="w-4 h-4" />}
                {s.name.includes('TikTok') && <Video className="w-4 h-4" />}
                {s.name.includes('Telegram') && <Send className="w-4 h-4" />}
                {s.name.includes('Email') && <Mail className="w-4 h-4" />}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Credits & Back-To-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-slate-300 font-semibold">
              Designed &amp; Developed by [MD Jihadul Islam]
            </p>
            <p className="text-slate-500">
              &copy; 2026 [MD Jihadul Islam] &mdash; All Rights Reserved.
            </p>
          </div>

          {/* Back to Top with Circular Progress Indicator */}
          <button
            id="btn-back-to-top"
            onClick={scrollToTop}
            className="group relative flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 text-slate-300 hover:text-white hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            title="Scroll back to top"
          >
            {/* SVG Progress Circle */}
            <div className="relative w-5 h-5 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-slate-800 fill-transparent"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  stroke="#06b6d4"
                  strokeWidth="3"
                  strokeDasharray="88"
                  strokeDashoffset={88 - (scrollProgress / 100) * 88}
                  strokeLinecap="round"
                  className="fill-transparent transition-all duration-100"
                />
              </svg>
              <ArrowUp className="w-2.5 h-2.5 text-cyan-400 absolute group-hover:-translate-y-0.5 transition-transform" />
            </div>

            <span className="font-semibold text-xs text-cyan-300">Back to Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
