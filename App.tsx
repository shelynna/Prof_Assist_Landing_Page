
import React from 'react';

import { Header } from './src/sections/Header';
import { Hero } from './src/sections/Hero';
import { Features } from './src/sections/Features';
import { HowItWorks } from './src/sections/HowItWorks';
import { Workflow } from './src/sections/Workflow';
import { Testimonials } from './src/sections/Testimonials';
import { Pricing } from './src/sections/Pricing';
import { Contact } from './src/sections/CTA';
import { FAQ } from './src/sections/FAQ';
import { Footer } from './src/sections/Footer';

const App: React.FC = () => {
  return (
    <div className={`min-h-screen font-sans antialiased bg-brand-bg text-text-main`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 bg-primary text-white px-4 py-2 rounded-md">Skip to content</a>

      <Header />

      <main id="main" className="relative">
        <Hero />
        <Features />
        <HowItWorks />
        <Workflow />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;