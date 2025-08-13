import React from 'react';
import { Twitter, Linkedin, GitHub } from 'react-feather';

const SOCIALS = [
  {Icon: Twitter, label: 'Twitter', href: '#'},
  {Icon: Linkedin, label: 'LinkedIn', href: '#'},
  {Icon: GitHub, label: 'GitHub', href: '#'}
];

const FOOTER_LINKS = [
  { title: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
  { title: 'Resources', links: ['Blog', 'Guides', 'Help Center', 'Academic Tips'] },
  { title: 'Company', links: ['About', 'Careers', 'Partners', 'Contact'] }
];

export const Footer: React.FC = () => (
  <footer className="border-t border-gray-200 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4"><div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 text-white flex items-center justify-center font-bold text-xs">PA</div><span className="font-semibold">ProfAssist</span></div>
          <p className="text-sm text-gray-600 leading-relaxed">Helping applicants cultivate authentic academic collaborations through intelligent, ethical automation.</p>
          <div className="flex gap-3 mt-5">
            {SOCIALS.map(s => <a key={s.label} href={s.href} aria-label={s.label} className="h-9 w-9 flex items-center justify-center rounded-lg bg-gray-100 border border-gray-200 text-gray-500 hover:text-cyan-600 hover:border-cyan-400 transition"><s.Icon className="w-5 h-5" /></a>)}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 md:col-span-3">
          {FOOTER_LINKS.map(col => (<div key={col.title}><h3 className="font-semibold mb-4 text-sm tracking-wide">{col.title}</h3><ul className="space-y-2 text-sm">{col.links.map(l => <li key={l}><a href="#" className="text-gray-600 hover:text-cyan-600 transition">{l}</a></li>)}</ul></div>))}
        </div>
      </div>
      <div className="mt-14 pt-8 border-t border-gray-200 flex flex-col md:flex-row gap-6 md:items-center md:justify-between"><p className="text-xs text-gray-500">© {new Date().getFullYear()} ProfAssist. All rights reserved.</p><div className="flex flex-wrap gap-6 text-xs"><a href="#" className="text-gray-500 hover:text-cyan-600">Privacy</a><a href="#" className="text-gray-500 hover:text-cyan-600">Terms</a></div></div>
    </div>
  </footer>
);
