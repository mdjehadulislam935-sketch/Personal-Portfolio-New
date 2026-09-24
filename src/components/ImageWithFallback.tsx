import React, { useState } from 'react';
import { User, Sparkles, Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'avatar' | 'cover' | 'logo' | 'project';
  fallbackText?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackType = 'project',
  fallbackText,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  // Normalize source path for Vite static serving:
  // e.g., 'images/profile.jpg' -> '/images/profile.jpg'
  const resolvedSrc = src?.startsWith('images/') ? `/${src}` : src;

  if (hasError || !src) {
    if (fallbackType === 'avatar') {
      return (
        <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 border border-cyan-500/30 text-cyan-400 p-4 text-center select-none relative overflow-hidden ${className}`}>
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <User className="w-8 h-8 text-cyan-300" />
          </div>
          <span className="font-display font-bold text-sm tracking-wider text-slate-100">MD Jihadul Islam</span>
          <span className="text-[11px] text-cyan-400 font-mono mt-0.5">ZihaD</span>
        </div>
      );
    }

    if (fallbackType === 'logo') {
      return (
        <div className={`w-full h-full flex items-center justify-center bg-slate-900/90 border border-cyan-500/40 rounded-xl p-2 select-none ${className}`}>
          <div className="flex items-center gap-1.5 font-display font-extrabold tracking-tighter text-cyan-400">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">ZH</span>
          </div>
        </div>
      );
    }

    if (fallbackType === 'cover') {
      return (
        <div className={`w-full h-full relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-cyan-500/20 ${className}`}>
          <div className="absolute inset-0 cyber-grid opacity-35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(6,182,212,0.15),transparent_70%)]" />
        </div>
      );
    }

    return (
      <div className={`w-full h-full flex flex-col items-center justify-center bg-slate-900/90 border border-cyan-500/20 text-slate-400 p-6 text-center select-none relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 cyber-grid opacity-25" />
        <ImageIcon className="w-10 h-10 text-cyan-400/60 mb-2" />
        <span className="font-display font-semibold text-sm text-slate-200">{fallbackText || alt || 'Project Visual'}</span>
        <span className="text-xs text-cyan-400/80 font-mono mt-1">ZihaD Digital Experience</span>
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
      {...props}
    />
  );
};
