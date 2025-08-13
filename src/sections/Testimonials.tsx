import React from 'react';
import { Star } from 'react-feather';
import { TESTIMONIALS } from '../data/content';
import { useIntersectionFade } from '../hooks/useIntersectionFade';

export const Testimonials: React.FC = () => {
  const { ref, visible } = useIntersectionFade<HTMLDivElement>();

  return(
  <section id="testimonials" className="py-24 sm:py-32 scroll-mt-20">
    <div ref={ref} className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 fade-in-section ${visible ? 'is-visible' : ''}`}>
      <header className="max-w-2xl mx-auto text-center mb-14"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Student Success Stories</h2><p className="mt-4 text-lg text-text-dim">Authentic outcomes after refining outreach precision.</p></header>
      <div className="grid gap-8 md:grid-cols-3">
        {TESTIMONIALS.map(t => (
            <figure key={t.name} className="relative rounded-2xl border border-border-main bg-surface p-6 flex flex-col">
                <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" loading="lazy" />
                    <figcaption>
                        <p className="font-semibold text-text-main">{t.name}</p>
                        <p className="text-xs text-primary-accent">{t.university}</p>
                        <p className="text-xs text-text-dim">{t.title}</p>
                    </figcaption>
                </div>
                <blockquote className="mt-4 text-sm text-text-dim italic">“{t.quote}”</blockquote>
                <div className="mt-auto pt-5 flex gap-0.5" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />)}
                </div>
            </figure>
        ))}
      </div>
    </div>
  </section>
  )
};
