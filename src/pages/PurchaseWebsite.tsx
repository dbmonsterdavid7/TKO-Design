import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function PurchaseWebsite() {
  return (
    <>
      <Navigation />
      
      <section className="relative z-10 pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Info & Trust */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
                Complete your purchase
              </h1>
              <p className="text-lg text-zinc-400 mb-10">
                You're one step away from transforming your business. Fill out the form to secure your high-performance website and automation suite.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#a60724]/10 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-[#a60724]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Instant Setup</h3>
                    <p className="text-sm text-zinc-400">We start work within 24 hours. Your website typically goes live in 24-72 hours after payment.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Secure Checkout</h3>
                    <p className="text-sm text-zinc-400">Your payment information is encrypted and processed securely via Stripe.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Satisfaction Guaranteed</h3>
                    <p className="text-sm text-zinc-400">We work with you until you are 100% satisfied with your new digital presence.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-[#a60724]/20 to-transparent rounded-[2rem] blur-2xl opacity-50" />
              <div className="relative p-8 md:p-10 rounded-[2rem] bg-zinc-900 border border-white/10 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Order Details</h2>
                  <p className="text-zinc-400 text-sm">Please provide your information below.</p>
                </div>

                {/* Form Placeholder Container */}
                <div className="min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-2xl bg-zinc-950/50 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-zinc-700" />
                  </div>
                  <h3 className="text-zinc-300 font-medium mb-2">Form Container</h3>
                  <p className="text-zinc-500 text-sm max-w-[240px]">
                    This area is reserved for your purchase form or checkout integration.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">System Ready</span>
                  </div>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
                    alt="Powered by Stripe" 
                    className="h-5 opacity-50 grayscale brightness-200"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
