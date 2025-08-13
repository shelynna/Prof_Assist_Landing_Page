import React, { useState } from 'react';
import { Mail } from 'react-feather';
import { useIntersectionFade } from '../hooks/useIntersectionFade';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');
  const { ref, visible } = useIntersectionFade<HTMLDivElement>();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    // Mock API call
    await new Promise(res => setTimeout(res, 1200));
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    if (name === 'error') {
       setStatus('error');
    } else {
       setStatus('success');
       (e.target as HTMLFormElement).reset();
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
       <div ref={ref} className={`mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 fade-in-section ${visible ? 'is-visible' : ''}`}>
        <header className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in Touch</h2>
          <p className="mt-4 text-lg text-text-dim">Questions? We’re here to help.</p>
        </header>

        <div className="text-center mb-12">
            <p className="text-text-dim">
                Use the form below or email us directly. We typically respond within one business day.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4">
                <a href="mailto:support@profassist.org" className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary-accent transition-colors duration-200">
                    <Mail className="w-5 h-5" />
                    <span>support@profassist.org</span>
                </a>
                <a href="mailto:contact@profassist.org" className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary-accent transition-colors duration-200">
                    <Mail className="w-5 h-5" />
                    <span>contact@profassist.org</span>
                </a>
            </div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-dim mb-2">Name</label>
              <input id="name" name="name" type="text" required autoComplete="name" className="block w-full rounded-md border-border-main bg-surface px-4 py-2.5 text-text-main placeholder-text-dim/50 focus:border-primary focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-dim mb-2">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" className="block w-full rounded-md border-border-main bg-surface px-4 py-2.5 text-text-main placeholder-text-dim/50 focus:border-primary focus:ring-primary" />
            </div>
          </div>
           <div>
            <label htmlFor="subject" className="block text-sm font-medium text-text-dim mb-2">Subject</label>
            <input id="subject" name="subject" type="text" required className="block w-full rounded-md border-border-main bg-surface px-4 py-2.5 text-text-main placeholder-text-dim/50 focus:border-primary focus:ring-primary" />
          </div>
           <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-dim mb-2">Message</label>
            <textarea id="message" name="message" rows={5} required className="block w-full rounded-md border-border-main bg-surface px-4 py-2.5 text-text-main placeholder-text-dim/50 focus:border-primary focus:ring-primary" />
          </div>
          <div className="flex justify-end pt-4">
            <button type="submit" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-teal-500 px-7 py-3 text-white font-semibold shadow-primary hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {status === 'success' && <p className="text-center text-green-400">Message sent! We'll get back to you shortly.</p>}
          {status === 'error' && <p className="text-center text-red-400">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};