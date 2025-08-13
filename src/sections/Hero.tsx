
import React from 'react';
import { ArrowRight } from 'react-feather';
import { DashboardPreview } from '../components/DashboardPreview';
import { GlowOrb } from '../components/GlowOrb';

export const Hero: React.FC = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
    <GlowOrb className="top-[-20%] left-[-10%] w-2/5 h-2/3" />
    <GlowOrb className="top-[30%] right-[-15%] w-2/5 h-3/5" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tighter text-text-main">
            Elevate Your Professional Workflow
            <span className="gradient-text"> Effortlessly</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-dim max-w-xl mx-auto lg:mx-0">
            Automate routine tasks, stay organized, and focus on impact—all in one intelligent assistant built for modern professionals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#pricing" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-teal-500 px-7 py-3.5 text-white font-semibold shadow-primary hover:shadow-primary-lg transition-all duration-300 transform hover:-translate-y-px">
              Get Started <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-full border border-border-main px-7 py-3.5 font-semibold bg-transparent hover:bg-surface-alt transition-colors">
              See Features
            </a>
          </div>
          <p className="mt-6 text-sm text-text-dim">Free trial • No credit card • Cancel anytime</p>
        </div>
        <div className="relative flex items-center justify-center">
           <DashboardPreview />
        </div>
      </div>
    </div>
  </section>
);