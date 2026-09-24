import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Share2,
  Sparkles,
  Check
} from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { personalData } from '../data/portfolioData';
import { playCyberSound, shareProfile } from '../utils/helpers';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onTriggerEasterEgg: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleTheme,
  soundEnabled,
  onToggleSound,
  onTriggerEasterEgg,
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPos = window.scrollY + 200;
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    playCyberSound('click', soundEnabled);
    const nextCount = logoClickCount + 1;
    setLogoClickCount(nextCount);
    if (nextCount >= 5) {
      playCyberSound('secret', soundEnabled);
      onTriggerEasterEgg();
      setLogoClickCount(0);
    }
  };

  const handleShare = async () => {
    playCyberSound('click', soundEnabled);
    const shared = await shareProfile(
      'M D Jihadul Islam Sojib | Portfolio & Digital Identity',
      'Check out the official portfolio and digital identity of MD Jihadul Islam Sojib (ZihaD)',
      window.location.href
    );
    if (shared) {
      playCyberSound('success', soundEnabled);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    }
  };

  const scrollTo = (href: string) => {
    playCyberSound('click', soundEnabled);
    setMobileMenuOpen(false);
    const id = href.substring(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-slate-950/80 dark:bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Identity */}
          <div
            id="nav-brand-logo"
            onClick={handleLogoClick}
            className="group flex items-center gap-3 cursor-pointer select-none"
            title="Click multiple times for cyber easter egg"
          >
            <div className="relative w-10 h-10 rounded-xl p-[2px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-emerald-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src={personalData.logoImage}
                  alt="ZihaD Logo"
                  fallbackType="logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black tracking-tight text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-slate-100 to-purple-400">
                  ZihaD
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  v2.6
                </span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-wider font-mono hidden sm:block">
                Digital Identity
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/70 border border-slate-800 dark:border-cyan-500/20 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-cyan-500/20 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions: Sound, Theme, Share, Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Share Profile Button */}
            <button
              id="btn-nav-share"
              onClick={handleShare}
              className="relative p-2 rounded-xl bg-slate-900/70 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-cyan-200 shadow-sm transition-all"
              title="Share Profile"
              aria-label="Share Profile"
            >
              {copiedToast ? (
                <Check className="w-4 h-4 text-emerald-400 animate-bounce" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
            </button>

            {/* Sound Toggle */}
            <button
              id="btn-nav-sound"
              onClick={() => {
                onToggleSound();
                playCyberSound('toggle', !soundEnabled);
              }}
              className={`p-2 rounded-xl border transition-all ${
                soundEnabled
                  ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                  : 'bg-slate-900/70 border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
              title={soundEnabled ? 'Audio Sound FX: Enabled' : 'Audio Sound FX: Muted'}
              aria-label="Toggle Sound"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-cyan-400" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Dark / Light Mode Switch */}
            <button
              id="btn-nav-theme"
              onClick={() => {
                playCyberSound('click', soundEnabled);
                onToggleTheme();
              }}
              className="p-2 rounded-xl bg-slate-900/70 hover:bg-purple-500/20 border border-slate-800 hover:border-purple-500/40 text-slate-300 hover:text-purple-300 transition-all"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-purple-400" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => {
                playCyberSound('click', soundEnabled);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-cyan-300"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Share Toast Notification */}
      <AnimatePresence>
        {copiedToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/95 border border-emerald-500/50 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-md text-xs font-mono"
          >
            <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
            <span>Profile link copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-500/30"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-slate-300 hover:bg-slate-900/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
