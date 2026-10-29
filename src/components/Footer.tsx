export function Footer() {
  return (
    <footer className="relative z-10 px-10 py-6 border-t border-white/5 bg-black/40 backdrop-blur-xl flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center space-x-12">
        <div className="flex flex-col">
          <span className="text-[8px] uppercase tracking-widest text-white/30 mb-1">Aura Intelligence</span>
          <span className="text-[10px] text-white/50 tracking-wider">© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        </div>
        <div className="hidden md:block h-8 w-px bg-white/10"></div>
        <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium text-white/40">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
        </div>
      </div>
      <div className="text-right flex flex-col items-end">
        <span className="text-[9px] font-mono text-electric-blue mb-1 uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-blue border border-electric-blue"></span>
          System Status: Nominal
        </span>
        <div className="flex space-x-4 opacity-40">
          <span className="text-[8px] uppercase tracking-widest">Uptime: 99.999%</span>
        </div>
      </div>
    </footer>
  );
}
