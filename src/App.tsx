/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { DomainAtmosphere, DomainType } from './components/DomainAtmosphere';
import { CorePillars } from './components/CorePillars';
import { LiveMetrics } from './components/LiveMetrics';
import { Publications } from './components/Publications';
import { HumanCollaboration } from './components/HumanCollaboration';
import { Careers } from './components/Careers';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeDomain, setActiveDomain] = useState<DomainType>('research');

  // Define atmospheric configurations based on domain
  const getAtmosphereConfig = (domain: DomainType) => {
    switch (domain) {
      case 'robotics':
        return { color: '#a3a8b7', glowOpacity: 0.15, vignette: 'rgba(163, 168, 183, 0.05)' };
      case 'research':
        return { color: '#9d4edd', glowOpacity: 0.2, vignette: 'rgba(157, 78, 221, 0.08)' };
      case 'agents':
        return { color: '#00e5ff', glowOpacity: 0.2, vignette: 'rgba(0, 229, 255, 0.08)' };
      case 'physical':
        return { color: '#ff8c00', glowOpacity: 0.15, vignette: 'rgba(255, 140, 0, 0.05)' };
      case 'vision':
        return { color: '#00ff66', glowOpacity: 0.15, vignette: 'rgba(0, 255, 102, 0.05)' };
      default:
        return { color: '#004de6', glowOpacity: 0.15, vignette: 'rgba(0, 77, 230, 0.05)' };
    }
  };

  const atmosphere = getAtmosphereConfig(activeDomain);

  return (
    <div className="relative min-h-screen bg-obsidian text-white selection:bg-white selection:text-black">
      {/* Dynamic Global Atmosphere */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeDomain}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="pointer-events-none fixed inset-0 z-0"
        >
          {/* Main central glow */}
          <div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full blur-[120px] mix-blend-screen opacity-50"
            style={{ 
              background: `radial-gradient(circle, ${atmosphere.color}33 0%, transparent 70%)` 
            }}
          />
          {/* Secondary ambient lights */}
          <div 
            className="absolute bottom-0 right-0 w-[50vw] h-[50vh] rounded-full blur-[100px] mix-blend-screen opacity-30"
            style={{ 
              background: `radial-gradient(circle, ${atmosphere.color}22 0%, transparent 70%)` 
            }}
          />
          {/* Subtle vignette/overlay */}
          <div 
            className="absolute inset-0"
            style={{ background: `radial-gradient(circle at center, transparent 30%, ${atmosphere.vignette} 100%)` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Noise Texture Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-40 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
      ></div>

      <div className="relative z-10 font-sans">
        <Navigation />
        <main>
          <Hero />
          <DomainAtmosphere activeDomain={activeDomain} setActiveDomain={setActiveDomain} />
          <CorePillars />
          <LiveMetrics />
          <Publications />
          <HumanCollaboration />
          <Careers />
        </main>
        <Footer />
      </div>
    </div>
  );
}
