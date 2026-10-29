import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const pillars = [
  {
    number: '01',
    title: 'Frontier Research',
    desc: 'Pushing the boundaries of theoretical intelligence. Moving beyond token prediction into continuous reasoning and self-reflection loops.',
    metrics: ['MoE Architecture', '100T Parameters', 'Infinite Context']
  },
  {
    number: '02',
    title: 'Agentic Platforms',
    desc: 'Swarm intelligence with extreme agency. Agents that write code, provision infrastructure, and execute multi-step protocols with human-in-the-loop oversight.',
    metrics: ['Recursive Planning', 'Dynamic Tool Creation', 'Orchestration Hub']
  },
  {
    number: '03',
    title: 'Physical Integration',
    desc: 'Deploying neural weights directly to edge hardware. Achieving superhuman precision in manufacturing, logistics, and exploratory robotics.',
    metrics: ['Zero-shot Sim2Real', 'Sub-millisecond Inference', 'Tactile Processing']
  }
];

export function CorePillars() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-40 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {pillars.map((pillar, i) => {
            const y = useTransform(scrollYProgress, [0, 1], [100 * (i + 1), -100 * (i + 1)]);
            return (
              <motion.div 
                key={pillar.number}
                style={{ y }}
                className="flex flex-col relative"
              >
                <div className="text-8xl md:text-[120px] font-mono font-light text-white/[0.03] select-none absolute -top-12 -left-6 z-0">
                  {pillar.number}
                </div>
                <div className="relative z-10 p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl">
                  <div className="h-px w-16 bg-electric-blue/50 mb-8" />
                  <h3 className="text-xl font-medium tracking-tight mb-4 text-[#e0e0e0]">{pillar.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light mb-8">
                    {pillar.desc}
                  </p>
                  <ul className="flex flex-col gap-3 font-mono text-[9px] uppercase tracking-widest text-[#e0e0e0]/50">
                    {pillar.metrics.map(metric => (
                      <li key={metric} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-electric-blue/40 rounded-full" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
