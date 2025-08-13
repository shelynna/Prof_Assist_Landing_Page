
import React from 'react';
import { Twitter, Linkedin, GitHub } from 'react-feather';
import {ProfAssistLogo} from '../../src/assets'


const SOCIALS = [
  {Icon: Twitter, label: 'Twitter', href: '#'},
  {Icon: Linkedin, label: 'LinkedIn', href: '#'},
  // {Icon: GitHub, label: 'GitHub', href: '#'}
];

export const Footer: React.FC = () => (
  <footer className="border-t border-border-main bg-surface/50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <a href="/" className="inline-block mb-4" aria-label="ProfAssist Home">
            <ProfAssistLogo variant='classic'/>
          </a>
          <p className="text-sm text-text-dim leading-relaxed max-w-sm">Your professional assistant to automate, analyze, and accelerate work.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
          <div>
            <h3 className="font-semibold mb-4 text-sm tracking-wide text-text-main">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="text-text-dim hover:text-primary transition">Features</a></li>
              <li><a href="#pricing" className="text-text-dim hover:text-primary transition">Pricing</a></li>
              <li><a href="#faq" className="text-text-dim hover:text-primary transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm tracking-wide text-text-main">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-text-dim hover:text-primary transition">About Us</a></li>
              <li><a href="#contact" className="text-text-dim hover:text-primary transition">Contact</a></li>
              <li><a href="#" className="text-text-dim hover:text-primary transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-sm tracking-wide text-text-main">Stay Updated</h3>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input id="footer-email" type="email" placeholder="your@email.com" required className="flex-grow min-w-0 rounded-md border-border-main bg-surface px-3 py-2 text-sm text-text-main placeholder-text-dim/50 focus:border-primary focus:ring-primary" />
              <button type="submit" className="rounded-md bg-primary text-white px-4 text-sm font-semibold hover:bg-primary-accent transition-colors">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-14 pt-8 border-t border-border-main flex flex-col items-center sm:flex-row gap-6 sm:items-center sm:justify-between">
        <p className="text-xs text-text-dim">© {new Date().getFullYear()} ProfAssist. All rights reserved.</p>
        <div className="flex items-center gap-4">
           {SOCIALS.map(s => <a key={s.label} href={s.href} aria-label={s.label} className="text-text-dim hover:text-primary transition"><s.Icon className="w-5 h-5" /></a>)}
        </div>
      </div>
    </div>
  </footer>
);