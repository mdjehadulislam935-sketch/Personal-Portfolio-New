import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  FolderCheck,
  Layers,
  Users,
  Award,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { statisticsData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

const statIconMap: Record<string, React.ReactNode> = {
  FolderCheck: <FolderCheck className="w-6 h-6 text-cyan-400" />,
  Layers: <Layers className="w-6 h-6 text-purple-400" />,
  Users: <Users className="w-6 h-6 text-emerald-400" />,
  Award: <Award className="w-6 h-6 text-amber-400" />
};

interface CounterProps {
  end: number;
  suffix: string;
  inView: boolean;
}

const Counter: React.FC<CounterProps> = ({ end, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
      {count}
      <span className="text-cyan-400 font-bold">{suffix}</span>
    </span>
  );
};

export const Statistics: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} id="statistics" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>NUMERICAL METRICS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Key Impact &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Statistics</span>
          </h2>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statisticsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard
                withRgbBorder={true}
                glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
                tiltMaxAngle={8}
                className="glass-panel p-6 sm:p-7 border border-cyan-500/30 bg-slate-950/85 text-center flex flex-col items-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                  {statIconMap[stat.icon]}
                </div>

                <div className="mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} inView={isInView} />
                </div>

                <h3 className="font-display font-bold text-sm sm:text-base text-slate-200 mb-1">
                  {stat.label}
                </h3>

                <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                  {stat.description}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
