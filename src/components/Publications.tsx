import { ArrowRight } from 'lucide-react';

const papers = [
  { id: '2405.1293', title: 'Continuous Reflection in MoE Architectures', date: 'MAY 2026', author: 'Chen, Valaris, et al.' },
  { id: '2404.8821', title: 'Tactile Fusion in Extreme Robotics', date: 'APR 2026', author: 'Okafor, J. & Wright, M.' },
  { id: '2402.1100', title: 'Swarm Intent Protocol v3', date: 'FEB 2026', author: 'Aura Systems Group' },
];

export function Publications() {
  return (
    <section className="py-40 px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Scientific<br/>Publications.
          </h2>
          <p className="text-white/60 font-light mb-12 leading-relaxed">
            We operate in the open. Our research division regularly publishes findings in memory structures, alignment, and physical reasoning.
          </p>
          <button className="flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all group">
            View All Research 
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="md:w-2/3 flex flex-col">
          {papers.map((paper, idx) => (
            <a 
              key={paper.id} 
              href="#" 
              className="group py-8 border-b border-white/5 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12 hover:bg-white/[0.02] transition-colors px-4 -mx-4"
            >
              <div className="font-mono text-electric-blue/60 text-[10px] tracking-widest whitespace-nowrap">
                ARXIV:{paper.id}
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-light text-[#e0e0e0] group-hover:text-electric-blue transition-colors mb-3">
                  {paper.title}
                </h3>
                <div className="text-[9px] text-[#e0e0e0]/40 uppercase tracking-[0.2em] font-medium flex justify-between">
                  <span>{paper.author}</span>
                  <span>{paper.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
