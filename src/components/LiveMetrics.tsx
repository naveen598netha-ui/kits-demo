import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function LiveMetrics() {
  const [nodes, setNodes] = useState(1342931);
  const [latency, setLatency] = useState(0.041);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev + Math.floor(Math.random() * 10) - 2);
      setLatency(prev => +(prev + (Math.random() * 0.004 - 0.002)).toFixed(3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 md:px-24 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 w-full p-8 md:p-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-10">Infrastructure Metrics</h3>
          
          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Inference Scale</p>
                <div className="text-2xl md:text-3xl font-mono tracking-tighter">
                  84.2 <span className="text-base text-white/40">PetaFLOPS</span>
                </div>
              </div>
              <div className="w-24 md:w-32 h-1.5 bg-white/5 overflow-hidden rounded-full">
                <div className="h-full bg-electric-blue w-[75%] rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Active Agents</p>
                <div className="text-2xl md:text-3xl font-mono tracking-tighter">
                  {nodes.toLocaleString()}
                </div>
              </div>
              <div className="w-24 md:w-32 h-1.5 bg-white/5 overflow-hidden rounded-full">
                <div className="h-full bg-electric-blue w-[40%] rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">System Latency</p>
                <div className="text-2xl md:text-3xl font-mono tracking-tighter text-electric-blue">
                  {latency.toFixed(3)}<span className="text-base text-electric-blue/40 ml-1">ms</span>
                </div>
              </div>
              <div className="w-24 md:w-32 h-1.5 bg-white/5 overflow-hidden rounded-full">
                <div className="h-full bg-white w-full rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full relative h-[400px] border border-white/10 rounded-xl overflow-hidden bg-black/40 backdrop-blur-md">
          {/* Abstract visualizer for telemetry */}
          <div className="absolute inset-0 opacity-40">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-electric-blue/20 w-[1px]"
                style={{
                  left: `${(i / 40) * 100}%`,
                  bottom: 0,
                  height: `${Math.random() * 100}%`
                }}
                animate={{
                  height: [`${Math.random() * 100}%`, `${Math.random() * 100 + 20}%`, `${Math.random() * 100}%`]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 font-mono text-xs text-white/30 uppercase tracking-widest">
            Live Stream — Tokyo / SF / London
          </div>
        </div>
      </div>
    </section>
  );
}
