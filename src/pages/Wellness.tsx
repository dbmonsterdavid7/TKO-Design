import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  Play, 
  Plus, 
  Mail, 
  Phone, 
  Target, 
  Activity, 
  Smartphone,
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
  Heart
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className={`border border-zinc-200 rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-white shadow-md" : "bg-white/50"}`}>
      <button 
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? "text-[#A78BFA]" : "text-zinc-900 group-hover:text-[#A78BFA]"}`}>
          {title}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all border ${isOpen ? "bg-[#A78BFA] border-[#A78BFA] rotate-45" : "bg-zinc-100 border-zinc-200"}`}>
          <Plus className={`w-5 h-5 transition-colors ${isOpen ? "text-white" : "text-zinc-600"}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-zinc-600 leading-relaxed border-t border-zinc-50 pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Wellness() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative">
      {/* Sticky Top Bar (Acquisition Style) */}
      <div className="bg-zinc-900 py-3 px-6 sticky top-0 z-[60] flex justify-center items-center shadow-lg cursor-pointer" onClick={scrollToBooking}>
        <div className="bg-white px-3 py-1 rounded text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2 mr-3">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          LIVE
        </div>
        <p className="text-white text-[11px] md:text-sm font-bold uppercase tracking-wide">
          In-Person Wellness Workshop | <span className="text-[#A78BFA]">Miami, FL</span>
        </p>
      </div>

      {/* Hero Section (Acquisition Structure) */}
      <section className="relative z-10 pt-16 md:pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight mb-8 bg-gradient-to-br from-zinc-900 to-zinc-500 bg-clip-text text-transparent">
              Are you the thing limiting <br className="hidden md:block" /> your wellness business?
            </h1>
            <h2 className="text-xl md:text-3xl font-normal text-zinc-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join Our Scaling Workshop — Remove Yourself as the Single Point of Failure
            </h2>
          </motion.div>

          {/* Video Embed Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative max-w-4xl mx-auto rounded-2xl md:rounded-[32px] overflow-hidden border-8 border-white shadow-2xl group cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" 
              alt="Workshop Overview" 
              className="w-full aspect-video object-cover brightness-75 group-hover:brightness-90 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#A78BFA] flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 md:w-12 md:h-12 text-white fill-current ml-1" />
              </div>
            </div>
            {/* Pulse effect like in Acquisition page */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 md:w-40 md:h-40 bg-[#A78BFA]/20 rounded-full animate-ping" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Action Section (Acquisition Structure) */}
      <section className="bg-white py-24 px-6 relative z-10 border-y border-zinc-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-zinc-900 mb-12 leading-relaxed">
            It's a 2-day, interactive workshop where you'll receive <span className="font-bold border-b-2 border-[#A78BFA]">personalized, actionable insights</span> from the team that's scaled top-tier medical spas & wellness brands.
          </p>
          <button 
            onClick={scrollToBooking}
            className="w-full md:w-auto px-12 py-6 rounded-xl bg-[#6F00FF] hover:bg-[#5E00D9] text-white text-xl md:text-2xl font-black uppercase tracking-wider transition-all shadow-[0_10px_40px_-10px_rgba(111,0,255,0.5)] active:scale-95"
          >
            I'm Ready to Scale
          </button>
        </div>
      </section>

      {/* Social Proof (Acquisition Structure) */}
      <section className="py-24 px-6 bg-[#F5F3FF]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 text-zinc-900">What people are saying:</h2>
            <div className="w-24 h-1 bg-[#A78BFA] mx-auto opacity-50" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="rounded-2xl overflow-hidden border-4 border-white shadow-xl aspect-[9/16] max-w-[320px] mx-auto">
                <img 
                  src="https://picsum.photos/seed/testimonial-wellness/600/1000" 
                  alt="Review" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="space-y-8">
                <img src="https://www.acquisition.com/hubfs/images/group-158_68b9d98332d69.png" alt="Reviews Badge" className="w-full max-w-md mx-auto md:mx-0 filter grayscale invert-0" referrerPolicy="no-referrer" />
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                  <p className="text-lg italic text-zinc-600 mb-6">"Finally a marketing team that understands the wellness space. They don't just send traffic, they send patients ready to commit."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#A78BFA]/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#A78BFA]" />
                    </div>
                    <div>
                      <p className="font-bold text-zinc-900">Dr. Michael Chen</p>
                      <p className="text-sm text-zinc-500 text-left">Founder @ Restore Regenerative</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits Heading (Acquisition Structure) */}
      <section className="relative h-48 md:h-64 flex items-center justify-center overflow-hidden">
        <img src="https://www.acquisition.com/hubfs/images/rectangle-91_68b9e04ac9f4d.png" className="absolute inset-0 w-full h-full object-cover filter brightness-[0.2]" alt="" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-2xl md:text-5xl font-bold text-white uppercase tracking-tight">
            What you’ll get at the <span className="underline decoration-[#A78BFA]">in-person</span> workshop:
          </h2>
        </div>
      </section>

      {/* Benefits Content (Acquisition Structure) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Benefit 1 */}
            <div className="flex flex-col gap-6 group">
               <div className="bg-zinc-100 text-[#A78BFA] font-black text-xl py-6 rounded-xl text-center border-b-4 border-[#A78BFA] group-hover:bg-[#F5F3FF] transition-colors">
                  #1: Access To Our Directors
               </div>
               <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-100 shadow-lg">
                  <img src="https://www.acquisition.com/hubfs/images/img-1_68b8c4340e027%20(1).png" alt="Director Access" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
               </div>
               <p className="text-zinc-600 leading-relaxed text-center">
                  You’ll meet with our directors to get <span className="font-bold text-zinc-900">personalized help.</span> Everything from Marketing, Sales, Client Experience, and Strategy.
               </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col gap-6 group">
               <div className="bg-zinc-100 text-[#A78BFA] font-black text-xl py-6 rounded-xl text-center border-b-4 border-[#A78BFA] group-hover:bg-[#F5F3FF] transition-colors">
                  #2: Industry-Specific Growth
               </div>
               <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-100 shadow-lg">
                  <img src="https://www.acquisition.com/hubfs/images/img-2_68b8c443878ab.png" alt="Scaling Logic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
               </div>
               <p className="text-zinc-600 leading-relaxed text-center">
                  We break down how we think, operate, and scale our high-revenue wellness brands. Showing you how to <span className="font-bold text-zinc-900">think like a high level CEO.</span>
               </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col gap-6 group">
               <div className="bg-zinc-100 text-[#A78BFA] font-black text-xl py-6 rounded-xl text-center border-b-4 border-[#A78BFA] group-hover:bg-[#F5F3FF] transition-colors">
                  #3: 3-5 Tactical Next Steps
               </div>
               <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-100 shadow-lg">
                  <img src="https://www.acquisition.com/hs-fs/hubfs/Workshop-1.webp" alt="Action Steps" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
               </div>
               <p className="text-zinc-600 leading-relaxed text-center">
                  Leave with <span className="font-bold text-zinc-900">clear — actionable</span> next steps to break past your current constraint. Includes a comprehensive scaling packet.
               </p>
            </div>
          </div>
          
          <div className="text-center mt-20">
            <button 
              onClick={scrollToBooking}
              className="w-full md:w-auto px-12 py-6 rounded-xl bg-[#6F00FF] hover:bg-[#5E00D9] text-white text-xl md:text-2xl font-black uppercase tracking-wider transition-all shadow-[0_10px_40px_-10px_rgba(111,0,255,0.5)]"
            >
              I'm Ready to Scale
            </button>
          </div>
        </div>
      </section>

      {/* Booking Widget Placeholder (Acquisition Structure) */}
      <section ref={bookingRef} className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-4 md:p-12 border border-zinc-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-zinc-900 mb-4">Book Your Spot</h2>
            <p className="text-zinc-500 italic">Finding out if you are a fit for the Florida Workshop</p>
          </div>
          
          <div className="aspect-[3/4] md:aspect-video rounded-xl bg-zinc-50 border-2 border-dashed border-zinc-200 flex flex-col items-center justify-center p-8 text-center group">
            <Calendar className="w-16 h-16 text-zinc-300 group-hover:text-[#A78BFA] transition-colors mb-4" />
            <p className="text-zinc-400 font-medium">Interactive Booking Widget Integration</p>
            <p className="text-xs text-zinc-300 mt-2">(Meeting scheduler would render here)</p>
          </div>
        </div>
      </section>

      {/* FAQ Section (Acquisition Structure) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-zinc-900">Questions?</h2>
          </div>
          
          <div className="space-y-4">
            <AccordionItem 
              title="What actually happens during the 2 days?" 
              isOpen={openAccordion === 0}
              onToggle={() => setOpenAccordion(openAccordion === 0 ? null : 0)}
            >
              <div className="space-y-4 text-left">
                <p>It's not an event. It's a workshop. At our Miami office.</p>
                <p>Expect <span className="font-bold">zero motivational talks.</span> Meaning — we get tactical.</p>
                <p>On day one, we break down how we fast track growth, recruit top talent, and frameworks we use for "high return" decision making.</p>
                <p>On day two, we get hands on. You meet with our directors specialized in marketing, sales, and strategy to get personalized help for your practice.</p>
              </div>
            </AccordionItem>

            <AccordionItem 
              title="What do I walk away with?" 
              isOpen={openAccordion === 1}
              onToggle={() => setOpenAccordion(openAccordion === 1 ? null : 1)}
            >
              <div className="space-y-4 text-left">
                <p>The aim: you walk away with <span className="font-bold">3-5 tactical next steps.</span></p>
                <p>Tailored advice to your practice size, industry, goals, and leadership style. It's hands-on help specific to your biggest challenge.</p>
              </div>
            </AccordionItem>

            <AccordionItem 
              title="Is this right for my practice size?" 
              isOpen={openAccordion === 2}
              onToggle={() => setOpenAccordion(openAccordion === 2 ? null : 2)}
            >
              <div className="space-y-4 text-left">
                <p><span className="font-bold">Size:</span> If you are under $250k/yr this is not a fit (yet.)</p>
                <p>If you are between <span className="font-bold">$1m-$100m/yr</span>, then we can help. We separate groups by revenue tier so we can get tactical in your specific context.</p>
              </div>
            </AccordionItem>

            <AccordionItem 
              title="How much are tickets?" 
              isOpen={openAccordion === 3}
              onToggle={() => setOpenAccordion(openAccordion === 3 ? null : 3)}
            >
              <div className="space-y-4 text-left">
                <p>Tickets are $5,000 per seat. This allows us to keep the room quality high and give you direct access to top directors who handle our private portfolio.</p>
              </div>
            </AccordionItem>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={scrollToBooking}
              className="w-full md:w-auto px-12 py-6 rounded-xl bg-[#6F00FF] hover:bg-[#5E00D9] text-white text-xl md:text-2xl font-black uppercase tracking-wider transition-all"
            >
              I'm Ready to Scale
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
