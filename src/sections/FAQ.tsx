import React from 'react';
import { ChevronDown } from 'react-feather';
import { FAQS } from '../data/content';

export const FAQ: React.FC = () => (
  <section id="faq" className="mt-40 scroll-mt-24 mb-40">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-14"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2><p className="mt-4 text-lg text-gray-600">Clarity around integration, privacy, and value.</p></header>
      <dl className="space-y-4">{FAQS.map((faq) => (<div key={faq.q} className="border border-gray-200 rounded-xl overflow-hidden"><details className="group"><summary className="flex items-center justify-between cursor-pointer px-5 py-4 hover:bg-gray-50"><span className="font-medium text-gray-800">{faq.q}</span><span className="ml-4 transition-transform group-open:rotate-180"><ChevronDown className="w-5 h-5 text-gray-500" /></span></summary><div className="px-5 pb-5 pt-0 text-sm text-gray-600 leading-relaxed">{faq.a}</div></details></div>))}</dl>
    </div>
  </section>
);
