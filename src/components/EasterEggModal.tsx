import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Sparkles, X, ShieldAlert, Cpu, Heart } from 'lucide-react';
import { playCyberSound } from '../utils/helpers';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled: boolean;
}

export const EasterEggModal: React.FC<EasterEggModalProps> = ({
  isOpen,
  onClose,
  soundEnabled
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="rgb-border-wrapper relative z-10 w-full max-w-lg"
          >
            <div className="glass-panel rounded-2xl p-6 md:p-8 bg-slate-950/95 text-slate-100 relative overflow-hidden border border-cyan-500/40">
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30" />

              {/* Close Button */}
              <button
                onClick={() => {
                  playCyberSound('click', soundEnabled);
                  onClose();
                }}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900/80 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 border border-slate-700 hover:border-rose-500/40 transition-colors"
                aria-label="Close Easter Egg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  <ShieldAlert className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                      LEVEL 7 ACCESS GRANTED
                    </span>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mt-1">
                    CYBER PROTOCOL: <span className="text-cyan-400">ZIHAD_SYS</span>
                  </h3>
                </div>
              </div>

              {/* Terminal Code Readout */}
              <div className="bg-black/80 rounded-xl p-4 border border-cyan-500/30 font-mono text-xs text-cyan-300/90 space-y-2 mb-5">
                <div className="flex items-center gap-2 text-slate-400 pb-2 border-b border-cyan-900/40">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>ziha-kernel-v2.6 :: identity_matrix.sh</span>
                </div>
                <p className="text-emerald-400">&gt; Authenticated user: M D Jihadul Islam Sojib (ZihaD)</p>
                <p className="text-slate-300">&gt; Vision: &quot;Turning Ideas Into Digital Experiences&quot;</p>
                <p className="text-purple-300">&gt; Coordinates: Basantapur, Fulgazi, Feni &rarr; Riyadh, KSA</p>
                <p className="text-cyan-400">&gt; Specialization: Web Design, AI Creative Tools &amp; Dropshipping</p>
                <p className="text-amber-400">&gt; Secret Message: Continuous learning &amp; passion unlock every boundary.</p>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-bounce" />
                  <span>Crafted with dedication by ZihaD</span>
                </div>
                <button
                  onClick={() => {
                    playCyberSound('success', soundEnabled);
                    onClose();
                  }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all"
                >
                  Return to Matrix
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
