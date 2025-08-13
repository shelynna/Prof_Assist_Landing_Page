import React, { useState, useEffect } from 'react';
import { Menu, X } from 'react-feather';
import { useScrollFlag } from '../hooks/useScrollFlag';

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'Workflow' },
  { href: '#testimonials', label: 'Stories' },
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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-white/80 shadow-lg shadow-black/5' : 'bg-transparent'}`} aria-label="Primary">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="relative"><div className="w-9 h-9 rounded-xl grid place-items-center bg-gradient-to-br from-cyan-500 to-teal-600 text-white shadow ring-1 ring-black/10"><span className="text-xs font-bold tracking-wider">PA</span></div></div>
          <span className="text-lg font-semibold tracking-tight">ProfAssist</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map(link => (
            <li key={link.href}><a className="hover:text-cyan-600 transition-colors" href={link.href}>{link.label}</a></li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://dashboard.profassist.org/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-cyan-600">Login</a>
          <a href="https://dashboard.profassist.org/signup" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-cyan-600/30 hover:bg-cyan-500 focus:outline-none focus-visible:ring-2 ring-offset-2 ring-cyan-400">
            Sign Up
          </a>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setShowMobileMenu(o => !o)} aria-label="Toggle navigation" className="h-10 w-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-700">
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      {showMobileMenu && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
          <ul className="px-4 py-4 space-y-2 text-sm font-medium">
            {NAV_LINKS.map(link => (
              <li key={link.href}><a href={link.href} onClick={() => setShowMobileMenu(false)} className="block rounded-lg px-3 py-2 hover:bg-gray-100">{link.label}</a></li>
            ))}
            <li className="pt-2"><a href="https://dashboard.profassist.org/login" className="block w-full text-center rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100">Login</a></li>
            <li className="pt-1"><a href="https://dashboard.profassist.org/signup" className="block w-full text-center rounded-lg bg-cyan-600 text-white px-4 py-2 hover:bg-cyan-700">Sign Up</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};
