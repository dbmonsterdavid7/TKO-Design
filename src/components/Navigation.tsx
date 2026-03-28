import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function Navigation() {
  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-2 md:py-4 mx-auto max-w-7xl">
      <Link to="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="Takeover Marketing Logo" className="w-6 h-6 md:w-12 md:h-12 object-contain" referrerPolicy="no-referrer" />
        <span className="text-xl font-bold tracking-tight hidden sm:inline">Takeover Marketing</span>
        <span className="text-xl font-bold tracking-tight sm:hidden">Takeover</span>
      </Link>
      
      <div className="flex items-center gap-4 md:gap-8 font-medium text-zinc-400">
        <Link to="/#features" className="text-xs md:text-sm hover:text-white transition-colors">Features</Link>
        <Link to="/pricing" className="text-xs md:text-sm hover:text-white transition-colors">Pricing</Link>
        <Link to="/#testimonials" className="hidden md:block text-sm hover:text-white transition-colors">Testimonials</Link>
        <Link to="/blog" className="hidden md:block text-sm hover:text-white transition-colors">Blog</Link>
        <button className="group relative px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm rounded-full bg-zinc-900 border border-white/10 shadow-[0_2px_12px_-2px_rgba(166,7,36,0.5)] hover:border-[#a60724]/60 hover:shadow-[0_-6px_16px_-4px_rgba(166,7,36,0.6),0_6px_16px_-4px_rgba(166,7,36,0.6)] transition-all text-white">
          <span className="relative z-10">Book a Call</span>
          <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
          <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent transition-opacity duration-300 group-hover:opacity-0 z-20" />
        </button>
      </div>
    </nav>
  );
}
