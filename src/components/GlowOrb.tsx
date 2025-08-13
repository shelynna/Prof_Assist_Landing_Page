import React from 'react';

export const GlowOrb: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`pointer-events-none absolute rounded-full mix-blend-overlay blur-3xl opacity-40 bg-gradient-to-br from-cyan-400/40 via-teal-400/30 to-transparent ${className}`} />
);
