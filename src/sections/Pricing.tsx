import React, { useState } from 'react';
import { Check } from 'react-feather';
import { PRICING_PLANS } from '../data/content';
import { useIntersectionFade } from '../hooks/useIntersectionFade';

type BillingCycle = 'monthly' | 'yearly';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('yearly');
  const { ref, visible } = useIntersectionFade<HTMLDivElement>();

  return (
    <section id="pricing" className="py-24 sm:py-32 scroll-mt-20 bg-surface-alt">
      <div ref={ref} className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 fade-in-section ${visible ? 'is-visible' : ''}`}>
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Flexible plans for every stage</h2>
          <p className="mt-4 text-lg text-text-dim">Start with essentials, and unlock advanced tools as you scale your outreach.</p>
          <fieldset className="mt-8 inline-flex items-center gap-2 rounded-full border border-border-main bg-surface p-1.5">
            <legend className="sr-only">Billing cycle</legend>
            <label className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${billingCycle === 'monthly' ? 'bg-primary text-white shadow' : 'text-text-dim hover:text-text-main'}`}>
              <input type="radio" name="billing-cycle" value="monthly" className="sr-only" checked={billingCycle === 'monthly'} onChange={() => setBillingCycle('monthly')} />
              Monthly
            </label>
            <label className={`relative px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer ${billingCycle === 'yearly' ? 'bg-primary text-white shadow' : 'text-text-dim hover:text-text-main'}`}>
              <input type="radio" name="billing-cycle" value="yearly" className="sr-only" checked={billingCycle === 'yearly'} onChange={() => setBillingCycle('yearly')} />
              Annual <span className="hidden sm:inline-block text-xs font-semibold uppercase bg-primary-accent/20 text-primary-accent px-2 py-0.5 rounded-full">Save ~17%</span>
            </label>
          </fieldset>
        </header>
        <div className="grid gap-8 lg:grid-cols-3 items-start">
          {PRICING_PLANS.map(plan => {
            const price = billingCycle === 'yearly' ? plan.yearly : plan.monthly;
            const equivalentMonthly = plan.yearly > 0 ? (plan.yearly / 12).toFixed(2) : 0;
            return (
              <div key={plan.id} className={`relative rounded-3xl p-8 flex flex-col h-full transition-transform duration-300 ${plan.highlighted ? 'bg-gradient-to-br from-primary to-teal-500 text-white shadow-2xl shadow-primary/20 lg:scale-105' : 'bg-surface text-text-main border border-border-main shadow-lg'}`}>
                {plan.highlighted && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-primary-accent text-white">Most Popular</span>}
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                <p className={`mt-2 text-sm flex-grow ${plan.highlighted ? 'text-cyan-100' : 'text-text-dim'}`}>{plan.tagline}</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-1">
                     <span className={`text-3xl font-semibold ${plan.highlighted ? 'text-white' : 'text-text-dim'}`}>$</span>
                     <span className="text-6xl font-extrabold tracking-tight">{price}</span>
                     <span className={`text-lg font-medium ml-1 ${plan.highlighted ? 'text-cyan-100' : 'text-text-dim'}`}>/{billingCycle === 'yearly' ? 'year' : 'month'}</span>
                  </div>
                  {(billingCycle === 'yearly' && Number(equivalentMonthly) > 0) && (
                     <p className={`mt-1 text-xs ${plan.highlighted ? 'text-cyan-100' : 'text-text-dim'}`}>
                        Equivalent to ${equivalentMonthly}/mo
                     </p>
                  )}
                </div>
                <ul className="mt-8 space-y-3 text-sm ">{plan.features.map(f =>
                  <li key={f} className="flex gap-4 items-start">
                    <div className={`w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center mt-0.5 ${plan.highlighted ? 'bg-white/20' : 'bg-primary/10'}`}>
                        <Check className={`w-3.5 h-3.5 ${plan.highlighted ? 'text-white' : 'text-primary-accent'}`} />
                    </div>
                    <span className="flex-1">{f}</span>
                  </li>)}
                </ul>
                <div className="mt-auto pt-8">
                  <a href={`https://dashboard.profassist.org/signup?plan=${plan.id}`} className={`block text-center w-full rounded-lg px-5 py-3 font-semibold tracking-wide transition-transform active:scale-[0.98] ${plan.highlighted ? 'bg-white text-primary hover:bg-gray-100' : 'bg-primary text-white hover:bg-primary-accent'}`}>{plan.cta}</a>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-10 text-center text-sm text-text-dim">All paid plans include a 7‑day Pro trial. Cancel anytime, no lock‑in.</p>
      </div>
    </section>
  );
};