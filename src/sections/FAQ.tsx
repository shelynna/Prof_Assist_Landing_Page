import React from 'react';
import { ChevronDown } from 'react-feather';
import { FAQS } from '../data/content';
import { useIntersectionFade } from '../hooks/useIntersectionFade';

export const FAQ: React.FC = () => {
    const { ref, visible } = useIntersectionFade<HTMLDivElement>();
    return (
  <section id="faq" className="py-24 sm:py-32 scroll-mt-20">
    <div ref={ref} className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 fade-in-section ${visible ? 'is-visible' : ''}`}>
      <header className="text-center mb-14"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2><p className="mt-4 text-lg text-text-dim">Clarity around integration, privacy, and value.</p></header>
      <dl className="space-y-4">
        {FAQS.map((faq) => (
          <details key={faq.q} className="group rounded-xl border border-border-main bg-surface overflow-hidden">
            <summary className="flex items-center justify-between cursor-pointer p-5 hover:bg-surface-alt">
              <span className="font-medium text-text-main">{faq.q}</span>
              <span className="ml-4 transition-transform group-open:rotate-180">
                <ChevronDown className="w-5 h-5 text-text-dim" />
              </span>
            </summary>
            <div className="px-5 pb-5 pt-2 text-sm text-text-dim leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </dl>
    </div>
  </section>
);
}
