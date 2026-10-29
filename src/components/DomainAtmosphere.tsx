import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export type DomainType = 'robotics' | 'research' | 'agents' | 'physical' | 'vision';

interface DomainAtmosphereProps {
  activeDomain: DomainType;
  setActiveDomain: (domain: DomainType) => void;
}

const domains: { id: DomainType; title: string; description: string; stat: string }[] = [
  { id: 'research', title: 'Frontier Research', description: 'Advanced reasoning models, memory architectures, AGI systems.', stat: '24 Petaflops' },
  { id: 'agents', title: 'Agentic Systems', description: 'Autonomous agents for planning, execution, and extreme tooling.', stat: '450k Agents' },
  { id: 'robotics', title: 'Robotics Initiative', description: 'Industrial metallic environments, edge AI, hardware fusion.', stat: '0.01ms Latency' },
  { id: 'physical', title: 'Physical AI', description: 'Real-world operational machines intersecting with dynamic cognition.', stat: '12 Facilities' },
  { id: 'vision', title: 'Vision Systems', description: 'Computer vision aesthetics, ambient spatial awareness, decoding reality.', stat: '8K Realtime' },
];

export function DomainAtmosphere({ activeDomain, setActiveDomain }: DomainAtmosphereProps) {
  return (
    <section className="relative py-32 px-6 md:px-24 border-y border-white/5 bg-obsidian-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight max-w-xl">
            Simulating environments for next-gen reasoning.
          </h2>
          <p className="font-mono text-sm text-white/40 mt-6 md:mt-0 uppercase tracking-widest">
            Select Domain Vector
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 h-auto lg:h-[600px]">
          {domains.map((domain) => {
            const isActive = activeDomain === domain.id;
            return (
              <motion.div
                key={domain.id}
                onHoverStart={() => setActiveDomain(domain.id)}
                onClick={() => setActiveDomain(domain.id)}
                layout
                initial={false}
                animate={{
                  flexGrow: isActive ? 4 : 1,
                  opacity: isActive ? 1 : 0.4,
                  scale: isActive ? 1 : 0.98,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden cursor-pointer rounded-xl glass-panel group flex flex-col justify-between p-6 ${
                  isActive ? 'border-electric-blue/20 bg-electric-blue/5' : 'border-transparent hover:border-white/10'
                }`}
                style={{ 
                  flexBasis: isActive ? '40%' : '15%',
                  minHeight: '220px'
                }}
              >
                <div className="flex justify-between items-start w-full">
                  <span className={`text-[10px] uppercase tracking-[0.2em] ${isActive ? 'text-electric-blue' : 'text-white/50'}`}>
                    {isActive ? `Focus: ${domain.id}` : domain.id}
                  </span>
                  <motion.div
                    animate={{ rotate: isActive ? 0 : 45 }}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isActive ? 'border-electric-blue/30 text-electric-blue' : 'border-white/20 text-white'}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>

                <div className="mt-auto relative z-10">
                  <motion.h3 
                    layout="position"
                    className={`font-medium tracking-tight mb-4 ${isActive ? 'text-lg lg:text-2xl text-white' : 'text-sm writing-vertical lg:-rotate-180 lg:mt-8 text-white/70'}`}
                  >
                    {domain.title}
                  </motion.h3>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/50 font-light text-[11px] sm:text-xs leading-relaxed max-w-sm mb-6">
                      {domain.description}
                    </p>
                    <div className="border-t border-white/10 pt-4 flex justify-between items-center w-full">
                      <span className="font-mono text-[9px] uppercase tracking-widest opacity-40">CAPACITY: {domain.stat}</span>
                      <div className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></div>
                    </div>
                  </motion.div>
                </div>
                {isActive && (
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 border border-electric-blue/10 rounded-full group-hover:scale-110 transition-transform pointer-events-none"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
