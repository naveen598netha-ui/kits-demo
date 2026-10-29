import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden" id="manifesto">
      {/* Immersive Background effects for Hero specifically */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute inset-0">
          <defs>
            <radialGradient id="neural-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00D1FF" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="500" cy="400" r="400" fill="url(#neural-glow)" />
          <path d="M0,500 Q250,450 500,500 T1000,500" stroke="rgba(0,209,255,0.15)" fill="none" strokeWidth="1" />
          <path d="M0,520 Q250,470 500,520 T1000,520" stroke="rgba(0,209,255,0.05)" fill="none" strokeWidth="1" />
          <path d="M0,480 Q250,430 500,480 T1000,480" stroke="rgba(255,255,255,0.05)" fill="none" strokeWidth="0.5" />
          
          {/* Animated nodes along the paths */}
          <motion.circle 
            animate={{ cx: [0, 500, 1000] }} 
            transition={{ duration: 10, ease: "linear", repeat: Infinity }} 
            cy="500" r="2" fill="#00D1FF" opacity="0.8" style={{ filter: 'drop-shadow(0 0 5px #00D1FF)' }} 
          />
          <motion.circle 
            animate={{ cx: [1000, 500, 0] }} 
            transition={{ duration: 15, ease: "linear", repeat: Infinity }} 
            cy="520" r="1.5" fill="#00D1FF" opacity="0.5" 
          />
          
          {/* Constellation dots */}
          <circle cx="300" cy="450" r="1.5" fill="#00D1FF" opacity="0.5" className="animate-pulse" />
          <circle cx="700" cy="550" r="1.5" fill="#00D1FF" opacity="0.3" className="animate-pulse" />
          <circle cx="500" cy="350" r="1" fill="#FFFFFF" opacity="0.2" className="animate-pulse" />
          <circle cx="200" cy="550" r="2" fill="#00D1FF" opacity="0.4" />
          <circle cx="800" cy="450" r="2.5" fill="#00D1FF" opacity="0.2" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="mb-8"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="mb-6 inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-electric-blue/20 bg-electric-blue/5"
          >
            <span className="text-[9px] uppercase tracking-widest text-electric-blue">01 — System Initialization</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-[64px] md:text-[84px] lg:text-[100px] leading-[0.9] font-semibold tracking-tighter text-white"
          >
            Intelligence
            <br />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 mix-blend-plus-lighter">Actualized.</span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "50%"]) }}
          className="flex flex-col md:flex-row gap-8 md:gap-24 mt-12 md:mt-24 items-start"
        >
          <p className="max-w-md text-white/40 text-sm leading-relaxed tracking-wide font-light border-l-2 border-electric-blue/30 pl-6">
            AI that thinks, acts, and operates in reality. We build the orchestrating 
            layer for future cognition. From neural reasoning to robotic execution.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex space-x-6 mb-8 md:mb-0">
              <button className="px-8 py-3 bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:bg-electric-blue hover:text-black transition-all">Enter Research Node</button>
            </div>
            
            <div className="flex flex-col gap-4 font-mono text-xs md:text-[10px] tracking-widest text-[#E0E0E0]/40 border-l border-white/10 pl-6 h-full justify-end uppercase">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse electric-glow" />
                <span className="text-white/80">Core Online</span>
              </div>
              <span>Lat: 0.024ms</span>
              <span>Nodes: 2,481,009 active</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
        className="absolute bottom-12 left-6 md:left-24 flex items-center gap-4 text-white/30 font-mono text-xs tracking-widest uppercase"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        <span className="writing-vertical rotate-180">Scroll to Explore</span>
      </motion.div>
    </section>
  );
}
