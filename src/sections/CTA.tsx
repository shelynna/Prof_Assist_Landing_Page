import React, { useState } from 'react';
import { Activity, Check, X } from 'react-feather';

const TRIAL_INCLUDES = ['Unlimited imports', 'AI outreach suggestions', 'Alignment analytics', 'Follow-up timing assist', 'Engagement dashboard'];

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setSubmitStatus('error');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitStatus('success');
      setTimeout(() => {
        window.location.href = `https://dashboard.profassist.org/signup?email=${encodeURIComponent(email)}`;
      }, 1800);
    }, 1300);
  };
  
  return (
    <section className="mt-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-600 via-cyan-500 to-teal-600 p-8 sm:p-14 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent)]" />
          <div className="grid lg:grid-cols-3 gap-10 items-center relative">
            <div className="lg:col-span-2">
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Ready to Elevate Your Outreach?</h2>
              <p className="mt-4 text-cyan-100 max-w-xl">Join 1,250+ applicants turning data-rich insights into real research collaboration opportunities.</p>
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-xl">
                <label className="sr-only" htmlFor="email-cta">Email</label>
                <input id="email-cta" type="email" value={email} onChange={e => { setEmail(e.target.value); setSubmitStatus(null); } } placeholder="Academic / primary email" className="flex-1 rounded-xl bg-white/95 text-gray-800 placeholder-gray-500 px-5 py-3 shadow focus:outline-none focus:ring-4 ring-white/40" required />
                <button disabled={isSubmitting} className="relative inline-flex items-center justify-center rounded-xl bg-white text-cyan-700 font-semibold px-7 py-3 shadow hover:bg-cyan-50 focus-visible:ring-4 ring-white/40 disabled:opacity-70">{isSubmitting ? <span className="flex items-center gap-2"><Activity className="w-5 h-5 animate-spin text-cyan-600" />Creating...</span> : 'Start Free Trial'}</button>
              </form>
              {submitStatus === 'success' && <div className="mt-4 rounded-xl bg-teal-400/15 text-sm text-teal-100 px-4 py-3 flex items-start gap-2"><span className="mt-0.5"><Check className="w-4 h-4" /></span>Success! Redirecting you...</div>}
              {submitStatus === 'error' && <div className="mt-4 rounded-xl bg-rose-400/20 text-sm text-rose-100 px-4 py-3 flex items-start gap-2"><span className="mt-0.5"><X className="w-4 h-4" /></span>Please enter a valid email address.</div>}
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-cyan-100 tracking-wide"><li className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-white/70" /> No credit card required</li><li className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-white/70" /> 7‑day Pro features</li><li className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-white/70" /> Cancel anytime</li></ul>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl bg-white/10 border border-white/20 p-6 backdrop-blur-sm">
                <h3 className="font-semibold mb-4">Trial Includes</h3>
                <ul className="space-y-3 text-sm">{TRIAL_INCLUDES.map(item => <li key={item} className="flex gap-2"><span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20"><Check className="w-3.5 h-3.5" /></span><span className="text-cyan-50">{item}</span></li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
