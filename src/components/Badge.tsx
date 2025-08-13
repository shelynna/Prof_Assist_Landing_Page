import React from 'react';

export const Badge: React.FC<{ children: React.ReactNode; tone?: 'cyan' | 'teal' | 'rose'; className?: string }> = ({ children, tone = 'cyan', className = '' }) => {
  const map = {
    cyan: 'bg-cyan-100 text-cyan-700',
    teal: 'bg-teal-100 text-teal-700',
    rose: 'bg-rose-100 text-rose-700'
  };
  return <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium tracking-wide ring-1 ring-black/5 ${map[tone]} ${className}`}>{children}</span>;
};
