import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  withRgbBorder?: boolean;
  tiltMaxAngle?: number;
  glowColor?: 'cyan' | 'purple' | 'emerald' | 'none';
  onClick?: () => void;
  id?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  withRgbBorder = false,
  tiltMaxAngle = 10,
  glowColor = 'cyan',
  onClick,
  id
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -tiltMaxAngle;
    const rY = ((x - centerX) / centerX) * tiltMaxAngle;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  };

  const glowClass = {
    cyan: 'hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.35)]',
    purple: 'hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.35)]',
    emerald: 'hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.35)]',
    none: ''
  }[glowColor];

  const content = (
    <motion.div
      ref={cardRef}
      id={id}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
      }}
      className={`relative overflow-hidden rounded-2xl transition-shadow duration-300 ${glowClass} ${className}`}
    >
      {/* Dynamic 3D Glare reflection */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, ${glarePosition.opacity}), transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  );

  if (withRgbBorder) {
    return (
      <div className="rgb-border-wrapper p-[2px]">
        {content}
      </div>
    );
  }

  return content;
};
