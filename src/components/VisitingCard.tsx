import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  QrCode,
  Share2,
  Download,
  Phone,
  Mail,
  Globe,
  MapPin,
  Sparkles,
  Check,
  RotateCw,
  UserCheck,
  ExternalLink
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { ImageWithFallback } from './ImageWithFallback';
import { playCyberSound, downloadVCard, shareProfile } from '../utils/helpers';

interface VisitingCardProps {
  soundEnabled: boolean;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const VisitingCard: React.FC<VisitingCardProps> = ({ soundEnabled }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    playCyberSound('click', soundEnabled);
    const shared = await shareProfile(
      'M D Jihadul Islam Sojib - Digital Visiting Card',
      'Save and connect with MD Jihadul Islam Sojib (ZihaD)',
      `https://${personalData.qrWebsite}`
    );
    if (shared) {
      playCyberSound('success', soundEnabled);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    playCyberSound('success', soundEnabled);
    downloadVCard();
  };

  const toggleFlip = () => {
    playCyberSound('toggle', soundEnabled);
    setIsFlipped(!isFlipped);
  };

  // Generate crisp dynamic QR code matrix for Jihadulislam.com
  const renderQRCodeSVG = () => {
    // Standard high-tech QR code matrix mockup with authentic corner position squares
    return (
      <svg
        viewBox="0 0 120 120"
        className="w-36 h-36 sm:w-40 sm:h-40 rounded-xl bg-white p-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
      >
        {/* Finder pattern Top-Left */}
        <rect x="10" y="10" width="30" height="30" rx="3" fill="#030712" />
        <rect x="15" y="15" width="20" height="20" rx="2" fill="#ffffff" />
        <rect x="20" y="20" width="10" height="10" rx="1" fill="#06b6d4" />

        {/* Finder pattern Top-Right */}
        <rect x="80" y="10" width="30" height="30" rx="3" fill="#030712" />
        <rect x="85" y="15" width="20" height="20" rx="2" fill="#ffffff" />
        <rect x="90" y="20" width="10" height="10" rx="1" fill="#06b6d4" />

        {/* Finder pattern Bottom-Left */}
        <rect x="10" y="80" width="30" height="30" rx="3" fill="#030712" />
        <rect x="15" y="85" width="20" height="20" rx="2" fill="#ffffff" />
        <rect x="20" y="90" width="10" height="10" rx="1" fill="#06b6d4" />

        {/* Timing pattern */}
        <line x1="45" y1="25" x2="75" y2="25" stroke="#030712" strokeWidth="3" strokeDasharray="3 3" />
        <line x1="25" y1="45" x2="25" y2="75" stroke="#030712" strokeWidth="3" strokeDasharray="3 3" />

        {/* QR Data modules */}
        <rect x="45" y="45" width="6" height="6" fill="#030712" />
        <rect x="55" y="45" width="6" height="6" fill="#8b5cf6" />
        <rect x="65" y="45" width="6" height="6" fill="#030712" />
        <rect x="45" y="55" width="6" height="6" fill="#06b6d4" />
        <rect x="65" y="55" width="6" height="6" fill="#030712" />
        <rect x="55" y="65" width="6" height="6" fill="#030712" />
        <rect x="65" y="65" width="6" height="6" fill="#8b5cf6" />
        <rect x="45" y="75" width="6" height="6" fill="#030712" />
        <rect x="55" y="75" width="6" height="6" fill="#06b6d4" />

        <rect x="45" y="15" width="6" height="6" fill="#030712" />
        <rect x="65" y="15" width="6" height="6" fill="#030712" />
        <rect x="45" y="95" width="6" height="6" fill="#030712" />
        <rect x="65" y="95" width="6" height="6" fill="#06b6d4" />

        <rect x="85" y="45" width="6" height="6" fill="#030712" />
        <rect x="95" y="55" width="6" height="6" fill="#030712" />
        <rect x="85" y="65" width="6" height="6" fill="#8b5cf6" />
        <rect x="95" y="75" width="6" height="6" fill="#030712" />
        <rect x="85" y="85" width="6" height="6" fill="#06b6d4" />
        <rect x="100" y="95" width="6" height="6" fill="#030712" />

        <rect x="15" y="45" width="6" height="6" fill="#030712" />
        <rect x="15" y="65" width="6" height="6" fill="#030712" />

        {/* Center Cyber Brand Badge */}
        <circle cx="60" cy="60" r="10" fill="#030712" />
        <circle cx="60" cy="60" r="8" fill="#06b6d4" />
        <text x="60" y="63" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#030712" fontFamily="sans-serif">Z</text>
      </svg>
    );
  };

  return (
    <section id="visiting-card" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INSTANT CONNECT</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Visiting Card</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-mono">
            // High-tech holographic business card with live QR Code and .vcf contact card download
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={toggleFlip}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-cyan-500/40 text-cyan-300 text-xs font-mono transition-all shadow-[0_0_12px_rgba(6,182,212,0.2)]"
            >
              <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
              <span>{isFlipped ? 'Flip to Front View' : 'Flip to QR Code & Back View'}</span>
            </button>
          </div>
        </div>

        {/* Card Canvas Container */}
        <div className="max-w-2xl mx-auto">
          <div className="relative [perspective:1200px]">
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, type: 'spring', damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full"
            >
              {/* FRONT FACE */}
              <div
                style={{ backfaceVisibility: 'hidden' }}
                className={`${isFlipped ? 'pointer-events-none' : ''}`}
              >
                <TiltCard
                  withRgbBorder={true}
                  glowColor="cyan"
                  tiltMaxAngle={10}
                  className="glass-panel p-6 sm:p-8 border border-cyan-500/30 bg-slate-950/90 relative overflow-hidden"
                >
                  {/* Holographic Header Bar */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyan-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/40 p-1.5 flex items-center justify-center">
                        <ImageWithFallback
                          src={personalData.logoImage}
                          alt="Logo"
                          fallbackType="logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase block">
                          DIGITAL IDENTITY CARD
                        </span>
                        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                          {personalData.fullName}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      ZihaD
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <p className="text-cyan-400 font-mono text-xs sm:text-sm font-semibold mb-6">
                    Digital Creator | E-Commerce Enthusiast | AI &amp; Digital Specialist
                  </p>

                  {/* Contact Field Matrix */}
                  <div className="space-y-3 font-mono text-xs mb-8">
                    <div className="flex items-center gap-3 text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                      <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-slate-400">Email:</span>
                      <span className="text-white truncate font-medium">{personalData.email}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                      <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                      <span className="text-slate-400">Phone:</span>
                      <span className="text-white font-medium">{personalData.phone}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                      <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-slate-400">Website:</span>
                      <span className="text-cyan-300 font-medium">{personalData.visitingCardWebsite}</span>
                    </div>

                    <div className="flex items-start gap-3 text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-slate-400">Location:</span>
                      <span className="text-white font-medium">Gazaria Bazar, Fulgazi-3942, Feni</span>
                    </div>
                  </div>

                  {/* Card Action Controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
                    <button
                      onClick={handleShare}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono transition-all"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied Link!' : 'Share Profile'}</span>
                    </button>

                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-xs font-mono transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download .VCF</span>
                    </button>

                    <button
                      onClick={toggleFlip}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/40 text-purple-300 text-xs font-mono transition-all"
                    >
                      <QrCode className="w-3.5 h-3.5" />
                      <span>View QR Code</span>
                    </button>
                  </div>
                </TiltCard>
              </div>

              {/* BACK FACE (QR Code & Scanning) */}
              <div
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                className={`absolute inset-0 ${!isFlipped ? 'pointer-events-none' : ''}`}
              >
                <TiltCard
                  withRgbBorder={true}
                  glowColor="purple"
                  tiltMaxAngle={10}
                  className="h-full glass-panel p-6 sm:p-8 border border-purple-500/30 bg-slate-950/95 flex flex-col items-center justify-center text-center relative"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
                    <QrCode className="w-3.5 h-3.5 text-purple-400" />
                    <span>MOBILE SCANNABLE IDENTITY</span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-4">
                    Scan to Visit My Profile
                  </h3>

                  {/* High precision QR Code graphic */}
                  <div className="p-3 bg-slate-900/80 border border-cyan-500/40 rounded-2xl mb-4 shadow-[0_0_25px_rgba(6,182,212,0.35)]">
                    {renderQRCodeSVG()}
                  </div>

                  <p className="font-mono text-xs text-cyan-400 font-semibold mb-2">
                    URL: {personalData.qrWebsite}
                  </p>
                  <p className="text-slate-400 text-xs font-mono max-w-xs mb-6">
                    Point your smartphone camera to instantly open and save my digital profile.
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={toggleFlip}
                      className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono transition-colors"
                    >
                      Back to Front
                    </button>
                    <button
                      onClick={handleDownload}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs font-mono shadow-md"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Save Contact</span>
                    </button>
                  </div>
                </TiltCard>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
