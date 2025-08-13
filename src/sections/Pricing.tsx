import React, { useState } from 'react';
import { Check } from 'react-feather';
import { PRICING_PLANS } from '../data/content';

export const Pricing: React.FC = () => {
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="mt-40 scroll-mt-24 bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mx-auto text-center mb-16"><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Transparent, Flexible Plans</h2><p className="mt-4 text-lg text-gray-600">Start free—upgrade only when you’re scaling outreach.</p><div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gray-300 bg-white p-2"><button onClick={() => setAnnualBilling(false)} className={`px-4 py-1.5 rounded-full text-sm font-medium ${!annualBilling ? 'bg-cyan-600 text-white shadow' : 'text-gray-600'}`}>Monthly</button><button onClick={() => setAnnualBilling(true)} className={`px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1 ${annualBilling ? 'bg-cyan-600 text-white shadow' : 'text-gray-600'}`}>Annual <span className="text-[10px] font-semibold uppercase tracking-wider bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded">Save 20%</span></button></div></header>
        <div className="grid gap-8 md:grid-cols-3 items-center">
          {PRICING_PLANS.map(plan => {
            const price = plan.monthly; const annualPrice = plan.annual; const activePrice = annualBilling ? annualPrice : price;
            return (<div key={plan.name} className={`relative rounded-3xl p-8 flex flex-col transition-transform duration-300 ${plan.highlighted ? 'bg-gradient-to-br from-cyan-500 to-teal-500 text-white shadow-2xl scale-105' : 'bg-white text-gray-800 border border-gray-200 shadow-lg'}`}>
                {plan.badge && <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${plan.highlighted ? 'bg-white/20 text-white ring-1 ring-inset ring-white/30' : 'bg-cyan-100 text-cyan-700'}`}>{plan.badge}</span>}
                <h3 className={`text-xl font-semibold`}>{plan.name}</h3>
                <p className={`mt-2 text-sm flex-1 ${plan.highlighted ? 'text-cyan-100' : 'text-gray-600'}`}>{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-2"><span className="text-5xl font-extrabold tracking-tight">{activePrice === 0 ? '$0' : `$${activePrice}`}</span><span className={`text-sm font-medium ${plan.highlighted ? 'text-cyan-100' : 'text-gray-500'}`}>/{annualBilling && activePrice !== 0 ? 'year' : 'month'}</span></div>
                {plan.highlighted && annualBilling && <p className="text-xs mt-1 text-cyan-100">Equivalent to $15.83/mo</p>}
                <ul className="mt-8 space-y-4 text-sm ">{plan.features.map(f => <li key={f} className="flex gap-3 items-center"><span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${plan.highlighted ? 'bg-white/25' : 'bg-teal-100 text-teal-600'}`}><Check className="w-4 h-4" /></span><span>{f}</span></li>)}</ul>
                <div className="mt-10"><a href={`https://dashboard.profassist.org/signup?plan=${plan.name.toLowerCase()}`} className={`block text-center w-full rounded-xl px-5 py-3 font-semibold tracking-wide transition ${plan.highlighted ? 'bg-white text-cyan-700 hover:bg-gray-100 active:scale-[0.985]' : 'bg-cyan-600 text-white hover:bg-cyan-500 active:scale-[0.985]'}`}>{plan.name === 'Free' ? 'Get Started' : `Choose ${plan.name}`}</a></div>
            </div>);
          })}
        </div>
        <p className="mt-10 text-center text-sm text-gray-600">All paid plans include a 7‑day Pro trial. Cancel anytime, no lock‑in.</p>
      </div>
    </section>
  );
};
