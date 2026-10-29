import { motion } from 'motion/react';
import { Menu, Search } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-6 flex items-center justify-between border-b border-white/5 backdrop-blur-md bg-black/20 pointer-events-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center space-x-3"
      >
        <div className="w-6 h-6 border-2 border-electric-blue rounded-sm rotate-45 flex items-center justify-center">
          <div className="w-1 h-1 bg-electric-blue rounded-full"></div>
        </div>
        <span className="text-xs tracking-[0.4em] font-bold uppercase text-white">Aura / Lab</span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.25em] font-medium text-white/50"
      >
        {['Research', 'Systems', 'Robotics', 'Manifesto'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors duration-300">
            {item}
          </a>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="flex items-center gap-6"
      >
        <button className="text-white/60 hover:text-white transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="text-white/60 hover:text-white transition-colors md:hidden">
          <Menu className="w-5 h-5" />
        </button>
      </motion.div>
    </nav>
  );
}
