import React from 'react';
import { Star } from 'react-feather';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => (
  <section id="testimonials" className="mt-40 scroll-mt-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="max-w-2xl mx-auto text-center mb-14"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Student Success Stories</h2><p className="mt-4 text-lg text-gray-600">Authentic outcomes after refining outreach precision.</p></header>
      <div className="grid gap-8 md:grid-cols-3">
        {TESTIMONIALS.map(t => (<figure key={t.name} className="relative rounded-2xl border border-gray-200 bg-white/80 p-6 flex flex-col"><div className="flex items-center gap-4"><img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-white" loading="lazy" /><figcaption><p className="font-semibold">{t.name}</p><p className="text-xs text-cyan-600">{t.university}</p><p className="text-xs text-gray-500">{t.title}</p></figcaption></div><blockquote className="mt-4 text-sm text-gray-700 italic">“{t.quote}”</blockquote><div className="mt-5 flex gap-0.5" aria-label="5 star rating">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />)}</div></figure>))}
      </div>
    </div>
  </section>
);
