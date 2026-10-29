export function HumanCollaboration() {
  return (
    <section className="py-32 px-6 md:px-24 bg-[#0a0a0a] border-t border-white/10 relative mt-12 rounded-t-[3rem]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-12">
          Philosophical Alignment
        </h2>
        
        <blockquote className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.2] mb-16 font-serif text-white">
          "Artificial intelligence is not a <span className="italic text-white/60">replacement</span> for human capability. It is the <span className="text-electric-blue font-medium">ultimate amplifier</span> of human intent."
        </blockquote>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-24">
          <div>
            <div className="h-px w-full bg-white/10 mb-6" />
            <h3 className="font-medium text-lg mb-4 text-[#e0e0e0]">Augmented Creation</h3>
            <p className="text-white/40 text-sm leading-relaxed font-light border-l border-white/5 pl-4">
              We design tools that elevate human creativity, automating the mundane so the master can focus on the breakthrough.
            </p>
          </div>
          <div>
            <div className="h-px w-full bg-white/10 mb-6" />
            <h3 className="font-medium text-lg mb-4 text-[#e0e0e0]">Steerable Autonomy</h3>
            <p className="text-white/40 text-sm leading-relaxed font-light border-l border-white/5 pl-4">
              Control is never relinquished. Our systems require explicit intent thresholds, ensuring human oversight governs critical operations.
            </p>
          </div>
          <div>
            <div className="h-px w-full bg-white/10 mb-6" />
            <h3 className="font-medium text-lg mb-4 text-[#e0e0e0]">Economic Expansion</h3>
            <p className="text-white/40 text-sm leading-relaxed font-light border-l border-white/5 pl-4">
              By commoditizing cognitive labor, we lower the barrier to innovation, enabling individuals to scale ideas previously impossible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
