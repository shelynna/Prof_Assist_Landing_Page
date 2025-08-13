import React, { useState } from 'react';
import { Check } from 'react-feather';
import { FEATURES } from '../data/content';
import { SkeletonImage } from '../components/SkeletonImage';

export const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="mt-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mx-auto text-center mb-14"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything to Transform Outreach Quality</h2><p className="mt-4 text-lg text-gray-600">Strategic automation that still feels genuinely human and academically authentic.</p></header>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div role="tablist" aria-label="Feature Tabs" className="space-y-3">
              {FEATURES.map((f, i) => {
                const active = activeFeature === i;
                return <button key={f.title} role="tab" aria-selected={active} tabIndex={active ? 0 : -1} onClick={() => setActiveFeature(i)} className={`w-full text-left rounded-xl px-5 py-4 border transition focus:outline-none focus-visible:ring-2 ring-cyan-400 ${active ? 'bg-cyan-600 text-white border-cyan-600 shadow-lg' : 'bg-white/70 border-gray-200 hover:bg-white'}`}><span className="flex items-center justify-between gap-4"><span className="font-semibold">{f.title}</span><span className={`rounded-full w-2.5 h-2.5 ${active ? 'bg-white' : 'bg-cyan-400/40'}`} /></span></button>;
              })}
            </div>
            <ul className="space-y-3 text-sm">{FEATURES[activeFeature].highlights.map(h => <li key={h} className="flex items-start gap-2"><span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-600"><Check className="w-3.5 h-3.5" /></span><span className="text-gray-700">{h}</span></li>)}</ul>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[16/9] rounded-2xl border border-gray-200 bg-gray-100 overflow-hidden"><SkeletonImage src={FEATURES[activeFeature].image} alt={FEATURES[activeFeature].title} className="h-full" /><div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-gray-900/70 to-transparent"><h3 className="text-white font-semibold text-lg">{FEATURES[activeFeature].title}</h3><p className="text-sm text-gray-200 mt-1 max-w-2xl">{FEATURES[activeFeature].description}</p></div></div>
            <div className="grid sm:grid-cols-3 gap-4">{['Precision', 'Contextual', 'Actionable'].map(label => <div key={label} className="rounded-xl px-4 py-5 text-center bg-white/70 border border-gray-200 text-sm font-medium tracking-wide">{label}</div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
