import React from 'react';

import { Header } from './src/sections/Header';
import { Hero } from './src/sections/Hero';
import { Workflow } from './src/sections/Workflow';
import { Features } from './src/sections/Features';
import { HowItWorks } from './src/sections/HowItWorks';
import { Testimonials } from './src/sections/Testimonials';
import { Pricing } from './src/sections/Pricing';
import { CTA } from './src/sections/CTA';
import { FAQ } from './src/sections/FAQ';
import { Footer } from './src/sections/Footer';

const App: React.FC = () => {
  return (
    <div className={`min-h-screen font-['Inter'] antialiased bg-gray-50 text-gray-800`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 bg-cyan-600 text-white px-4 py-2 rounded">Skip to content</a>

      <Header />

      <main id="main" className="pt-24 sm:pt-32 relative">
        <Hero />
        <Workflow />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;
