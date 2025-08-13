import React from 'react';
import { DownloadCloud, Compass, FileText, Activity } from 'react-feather';

const STEPS = [
  { title: 'Import Matches', desc: 'Bring in curated lists with metadata intact in seconds.', icon: DownloadCloud },
  { title: 'Analyze Alignment', desc: 'Highlight overlapping interests & future trajectory signals.', icon: Compass },
  { title: 'Craft Outreach', desc: 'Generate structured, personalized introductions instantly.', icon: FileText },
  { title: 'Track & Optimize', desc: 'Measure engagement metrics & adaptive follow-up timing.', icon: Activity }
];

export const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="mt-40 scroll-mt-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="max-w-3xl mx-auto text-center mb-16"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">From Discovery to Acceptance—Streamlined</h2><p className="mt-4 text-lg text-gray-600">A guided workflow reduces friction and maximizes response quality.</p></header>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div key={step.title} className="relative overflow-hidden group rounded-2xl border border-gray-200 bg-white/80 p-6"><div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-teal-500/0 group-hover:from-cyan-500/5 group-hover:to-teal-500/5 transition" /><div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 text-white flex items-center justify-center shadow-md mb-5"><step.icon className="w-6 h-6" /></div><h3 className="font-semibold text-lg">{step.title}</h3><p className="mt-2 text-sm text-gray-600">{step.desc}</p></div>))}
      </div>
    </div>
  </section>
);
