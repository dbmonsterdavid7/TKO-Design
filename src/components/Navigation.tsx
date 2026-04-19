import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const hostname = window.location.hostname;
  const isWellness = location.pathname === '/wellness' || hostname.startsWith('wellness.');

  if (isWellness) return null;
  
  const accentColor = isWellness ? '#A78BFA' : '#a60724';
  const accentShadow = isWellness ? 'rgba(167,139,250,0.5)' : 'rgba(166,7,36,0.5)';
  const accentShadowHover = isWellness ? 'rgba(167,139,250,0.6)' : 'rgba(166,7,36,0.6)';

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
        ? isWellness 
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200"
          : "bg-zinc-950/80 backdrop-blur-md border-b border-white/5" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <nav className={`flex items-center justify-between px-6 mx-auto max-w-7xl transition-all duration-300 ${
        isScrolled ? "py-3 md:py-4" : "py-3 md:py-6"
      }`}>
        <Link to="/" className={`flex items-center transition-all duration-300 ${!isScrolled ? "-ml-2 md:ml-0" : ""}`}>
          <img 
            src={isWellness ? "https://lh3.googleusercontent.com/d/1kNEzv5Lz7FlO3Tuis681zBBDHbMkp9CT" : "https://lh3.googleusercontent.com/d/1sho8dWDi-MCebAi3XaxFl6Lrh0VK8ZPj"} 
            alt="Takeover Marketing Logo" 
            className={`object-contain transition-all duration-300 ${
              isScrolled ? "h-10 md:h-12 w-auto" : "h-12 md:h-16 w-auto"
            }`} 
            referrerPolicy="no-referrer" 
          />
        </Link>
        
        <div className={`flex items-center gap-4 md:gap-8 font-medium ${isWellness ? "text-zinc-600" : "text-zinc-400"}`}>
        <Link to="/#features" className={`text-xs md:text-sm hover:text-${isWellness ? "zinc-900" : "white"} transition-colors`}>Features</Link>
        <Link to="/portfolio" className={`text-xs md:text-sm hover:text-${isWellness ? "zinc-900" : "white"} transition-colors`}>Portfolio</Link>
        <Link to="/pricing" className={`text-xs md:text-sm hover:text-${isWellness ? "zinc-900" : "white"} transition-colors`}>Pricing</Link>
        <Link to="/#testimonials" className={`hidden md:block text-sm hover:text-${isWellness ? "zinc-900" : "white"} transition-colors`}>Testimonials</Link>
        <Link 
          to="/purchase-website" 
          className="group relative px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-sm rounded-full bg-zinc-900 border border-white/10 transition-all text-white"
          style={{ 
            boxShadow: `0 2px 12px -2px ${accentShadow}`
          } as React.CSSProperties}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `${accentColor}99`; // opacity 60
            e.currentTarget.style.boxShadow = `0 -6px 16px -4px ${accentShadowHover}, 0 6px 16px -4px ${accentShadowHover}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.boxShadow = `0 2px 12px -2px ${accentShadow}`;
          }}
        >
          <span className="relative z-10">Get Website</span>
          <div 
            className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" 
            style={{ '--accent': accentColor } as React.CSSProperties}
          />
          <div 
            className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent transition-opacity duration-300 group-hover:opacity-0 z-20" 
            style={{ '--accent': accentColor } as React.CSSProperties}
          />
        </Link>
      </div>
    </nav>
  </header>
  );
}
