import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-zinc-950/80 backdrop-blur-md border-b border-white/5" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <nav className={`flex items-center justify-between px-6 mx-auto max-w-7xl transition-all duration-300 ${
        isScrolled ? "py-3 md:py-4" : "py-3 md:py-6"
      }`}>
        <Link to="/" className="flex items-center">
          <img src="https://lh3.googleusercontent.com/d/1sho8dWDi-MCebAi3XaxFl6Lrh0VK8ZPj" alt="Takeover Marketing Logo" className={`object-contain transition-all duration-300 ${
            isScrolled ? "w-12 h-12 md:w-12 md:h-12" : "w-14 h-14 md:w-16 md:h-16"
          }`} referrerPolicy="no-referrer" />
        </Link>
        
        <div className="flex items-center gap-4 md:gap-8 font-medium text-zinc-400">
        <Link to="/#features" className="text-xs md:text-sm hover:text-white transition-colors">Features</Link>
        <Link to="/portfolio" className="text-xs md:text-sm hover:text-white transition-colors">Portfolio</Link>
        <Link to="/pricing" className="text-xs md:text-sm hover:text-white transition-colors">Pricing</Link>
        <Link to="/#testimonials" className="hidden md:block text-sm hover:text-white transition-colors">Testimonials</Link>
        <Link to="/purchase-website" className="group relative px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm rounded-full bg-zinc-900 border border-white/10 shadow-[0_2px_12px_-2px_rgba(166,7,36,0.5)] hover:border-[#a60724]/60 hover:shadow-[0_-6px_16px_-4px_rgba(166,7,36,0.6),0_6px_16px_-4px_rgba(166,7,36,0.6)] transition-all text-white">
          <span className="relative z-10">Get Website</span>
          <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
          <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent transition-opacity duration-300 group-hover:opacity-0 z-20" />
        </Link>
      </div>
    </nav>
  </header>
  );
}
