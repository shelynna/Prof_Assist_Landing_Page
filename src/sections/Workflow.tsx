import React from 'react';
import { Badge } from '../components/Badge';

export const Workflow: React.FC = () => (
  <section className="mt-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-cyan-100/60 bg-gradient-to-r from-cyan-50 via-white to-teal-50 p-8 sm:p-12">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Built to Extend Your Workflow</h2>
          <p className="mt-4 text-gray-600">Import matches, prioritize, craft outreach, and track responses—no spreadsheets, no context switching.</p>
          <div className="mt-6 flex flex-wrap gap-3">{['One-click Import', 'Secure OAuth', 'No Duplicate Entry', 'Smart Sync'].map(tag => <Badge key={tag} tone="cyan">{tag}</Badge>)}</div>
        </div>
        <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none hidden md:block">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent)]" />
        </div>
      </div>
    </div>
  </section>
);
