import React from 'react';
import { FEATURES } from '../data/content';
import { useIntersectionFade } from '../hooks/useIntersectionFade';

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <header className="max-w-3xl mx-auto text-center mb-16">
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main">{title}</h2>
    <p className="mt-4 text-lg text-text-dim">{subtitle}</p>
  </header>
);

export const Features: React.FC = () => {
  const { ref, visible } = useIntersectionFade<HTMLDivElement>();

  return (
    <section id="features" className="py-24 sm:py-32 scroll-mt-20">
      <div ref={ref} className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 fade-in-section ${visible ? 'is-visible' : ''}`}>
        <SectionHeader
          title="Powerful Features"
          subtitle="Everything needed to accelerate professional workflows."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="bg-surface border border-border-main rounded-2xl p-6 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl mb-6 grid place-items-center bg-primary/10 text-primary-accent">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-lg text-text-main">{feature.title}</h3>
                <p className="mt-2 text-sm text-text-dim flex-grow">{feature.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
