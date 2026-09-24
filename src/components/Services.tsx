import React from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  Palette,
  FileText,
  Database,
  Cpu,
  ShoppingBag,
  Brush,
  Share2,
  Sparkles,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { playCyberSound } from '../utils/helpers';

interface ServicesProps {
  soundEnabled: boolean;
  onSelectService: (serviceName: string) => void;
}

const serviceIconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6 text-cyan-400" />,
  Palette: <Palette className="w-6 h-6 text-purple-400" />,
  FileText: <FileText className="w-6 h-6 text-emerald-400" />,
  Database: <Database className="w-6 h-6 text-amber-400" />,
  Cpu: <Cpu className="w-6 h-6 text-sky-400" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-rose-400" />,
  Brush: <Brush className="w-6 h-6 text-pink-400" />,
  Share2: <Share2 className="w-6 h-6 text-teal-400" />
};

export const Services: React.FC<ServicesProps> = ({ soundEnabled, onSelectService }) => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUTIONS &amp; CAPABILITIES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-mono">
            // High-precision digital assistance, design solutions, and e-commerce support
          </p>
        </div>

        {/* Services Grid with 3D tilt & dynamic animated border glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full flex flex-col"
            >
              <TiltCard
                id={`service-card-${service.id}`}
                withRgbBorder={true}
                glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
                tiltMaxAngle={10}
                className="h-full flex flex-col glass-panel p-6 border border-cyan-500/25 group bg-slate-950/80 hover:bg-slate-900/90 transition-colors"
              >
                {/* Icon & Service Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
                    {serviceIconMap[service.icon]}
                  </div>
                  <span className="font-mono text-xs text-slate-400 group-hover:text-cyan-400 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Deliverables List */}
                {service.deliverables && (
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-800/80">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Book / Request Service CTA */}
                <button
                  onClick={() => {
                    playCyberSound('click', soundEnabled);
                    onSelectService(service.title);
                  }}
                  className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono group-hover:border-cyan-400 transition-all"
                >
                  <span>Request Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
