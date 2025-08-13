
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';
import { useScrollFlag } from '../hooks/useScrollFlag';
import {ProfAssistLogo} from '../../src/assets'

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isScrolled = useScrollFlag();

  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setShowMobileMenu(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-surface/80 border-b border-border-main' : 'bg-transparent'}`} aria-label="Primary">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
        <ProfAssistLogo variant='classic'/>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-text-dim">
          {NAV_LINKS.map(link => (
            <li key={link.href}><a className="hover:text-text-main transition-colors" href={link.href}>{link.label}</a></li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <a href="https://dashboard.profassist.org/" className="px-4 py-2 text-sm font-medium text-text-dim hover:text-text-main">Login</a>
          <a href="https://dashboard.profassist.org/" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-teal-500 px-5 py-2.5 text-sm font-medium text-white shadow-primary hover:shadow-primary-lg transition-shadow">
            Sign Up Free
          </a>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setShowMobileMenu(o => !o)} aria-label="Toggle navigation" className="h-10 w-10 flex items-center justify-center rounded-md bg-surface text-text-main">
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {showMobileMenu && (
        <div className="md:hidden border-t border-border-main bg-surface/95 backdrop-blur-sm">
          <ul className="px-4 py-4 space-y-2 text-sm font-medium">
            {NAV_LINKS.map(link => (
              <li key={link.href}><a href={link.href} onClick={() => setShowMobileMenu(false)} className="block rounded-md px-3 py-2 text-text-dim hover:bg-surface-alt hover:text-text-main">{link.label}</a></li>
            ))}
            <li className="pt-2"><a href="https://dashboard.profassist.org/" className="block w-full text-center rounded-md border border-border-main px-4 py-2 text-text-dim hover:bg-surface-alt hover:text-text-main">Login</a></li>
            <li className="pt-1"><a href="https://dashboard.profassist.org/" className="block w-full text-center rounded-md bg-primary text-white px-4 py-2 hover:bg-primary-accent">Sign Up</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};