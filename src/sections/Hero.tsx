import React from 'react';
import { ArrowRight } from 'react-feather';
import { GlowOrb } from '../components/GlowOrb';
import { Badge } from '../components/Badge';
import { DashboardPreview } from '../components/DashboardPreview';

export const Hero: React.FC = () => (
  <section className="relative overflow-hidden">
    <GlowOrb className="-top-10 -left-10 w-72 h-72" />
    <GlowOrb className="top-1/2 -right-20 w-96 h-96" />
    <GlowOrb className="bottom-10 left-1/3 w-64 h-64" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 mb-5">
            <Badge tone="cyan">NEW</Badge>
            <Badge tone="teal" className="hidden sm:inline-flex">Seamless Integration</Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl xl:text-[3.25rem] leading-tight font-extrabold tracking-tighter">
            Turn Discoveries into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-500">Real Opportunities</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl">ProfAssist bridges the gap between identifying aligned professors and successfully connecting with them—AI outreach, alignment analytics, and strategic progression tools.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="https://dashboard.profassist.org/signup" className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-7 py-4 text-white font-medium shadow-lg shadow-cyan-600/30 hover:bg-cyan-500 focus-visible:ring-2 ring-offset-2 ring-cyan-400">Get Started Free <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-7 py-4 font-medium bg-white/70 hover:bg-white focus-visible:ring-2 ring-cyan-400 ring-offset-2">Explore Features</a>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">{Array.from({ length: 5 }).map((_, i) => (<div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-cyan-400 to-teal-500" aria-hidden="true" />))}</div>
            <p className="text-sm sm:text-base text-gray-600"><span className="font-semibold text-cyan-600">1,250+</span> successful professor connections</p>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="relative">
            <DashboardPreview />
            <div className="absolute -bottom-8 -right-6 w-40 h-40 bg-gradient-to-br from-cyan-500/30 to-teal-500/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
