import React, { useState } from 'react';

export const SkeletonImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <div className={`absolute inset-0 bg-gray-200 animate-pulse ${loaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} aria-hidden="true" />
      <img src={src} loading="lazy" onLoad={() => setLoaded(true)} alt={alt} className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};
