import { ArrowRight } from 'lucide-react';

export function Careers() {
  return (
    <section className="py-40 px-6 md:px-24 border-y border-white/5 bg-obsidian text-center relative overflow-hidden">
      
      {/* Background glow for recruitment focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[150px] mix-blend-screen opacity-10 bg-electric-blue pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-[72px] font-semibold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          Build the operating system of future intelligence.
        </h2>
        
        <p className="text-sm md:text-base tracking-wide font-light text-white/40 leading-relaxed mb-16 max-w-xl mx-auto">
          We are recruiting elite researchers, infrastructure engineers, and roboticists 
          who understand that AGI is a physical engineering problem.
        </p>

        <button className="px-8 py-3 bg-white text-black text-[11px] font-bold uppercase tracking-widest hover:bg-electric-blue hover:text-black transition-all flex items-center gap-3 mx-auto group">
          Join the Lab
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-20 flex flex-wrap justify-center gap-8 text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">
          <span>San Francisco</span>
          <span>•</span>
          <span>London</span>
          <span>•</span>
          <span>Tokyo</span>
          <span>•</span>
          <span>Remote</span>
        </div>
      </div>
    </section>
  );
}
