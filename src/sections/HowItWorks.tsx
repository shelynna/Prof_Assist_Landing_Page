import React from 'react';
import { DownloadCloud, Compass, FileText, Activity } from 'react-feather';
import { useIntersectionFade } from '../hooks/useIntersectionFade';


const STEPS = [
  { title: 'Import Matches', desc: 'Bring in curated lists with metadata intact in seconds.', icon: DownloadCloud },
  { title: 'Analyze Alignment', desc: 'Highlight overlapping interests & future trajectory signals.', icon: Compass },
  { title: 'Craft Outreach', desc: 'Generate structured, personalized introductions instantly.', icon: FileText },
  { title: 'Track & Optimize', desc: 'Measure engagement metrics & adaptive follow-up timing.', icon: Activity }
];

export const HowItWorks: React.FC = () => {
    const { ref, visible } = useIntersectionFade<HTMLDivElement>();
    return (
  <section id="how-it-works" className="py-24 sm:py-32 scroll-mt-20">
    <div ref={ref} className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 fade-in-section ${visible ? 'is-visible' : ''}`}>
      <header className="max-w-3xl mx-auto text-center mb-16"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">From Discovery to Acceptance—Streamlined</h2><p className="mt-4 text-lg text-text-dim">A guided workflow reduces friction and maximizes response quality.</p></header>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div key={step.title} className="relative group rounded-2xl border border-border-main bg-surface p-6 text-left transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-teal-500 text-white flex items-center justify-center shadow-md mb-5">
                <step.icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-text-main">{step.title}</h3>
            <p className="mt-2 text-sm text-text-dim">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);}