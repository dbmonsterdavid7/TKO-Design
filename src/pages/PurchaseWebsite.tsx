import { useEffect } from "react";
import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function PurchaseWebsite() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navigation />
      
      <section className="relative z-10 pt-24 pb-32 px-2 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
              Complete your purchase
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Fill out the form to secure your personalized website.
            </p>
          </motion.div>

          {/* Info Containers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-[#a60724]/10 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-[#a60724]" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Instant Setup</h3>
                <p className="text-sm text-zinc-400">Your website typically goes live in 24-72 hours after payment.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Secure Checkout</h3>
                <p className="text-sm text-zinc-400">Your payment information is encrypted and processed securely via Stripe.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Satisfaction Guaranteed</h3>
                <p className="text-sm text-zinc-400">We work with you until you are 100% satisfied with your new digital presence.</p>
              </div>
            </motion.div>
          </div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#a60724]/20 to-transparent rounded-[2rem] blur-2xl opacity-50" />
            <div className="relative p-4 md:p-10 rounded-[2rem] bg-zinc-900 border border-white/10 shadow-2xl">
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold mb-2">Order Details</h2>
                <p className="text-zinc-400 text-sm">Please provide your information below.</p>
              </div>

              {/* Embedded Checkout Form */}
              <div className="min-h-[1000px] w-full rounded-2xl bg-zinc-950/50 overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/AYO0InESeFvZfF1KOhvf"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                  id="inline-AYO0InESeFvZfF1KOhvf" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Checkout Form"
                  data-height="2102"
                  data-layout-iframe-id="inline-AYO0InESeFvZfF1KOhvf"
                  data-form-id="AYO0InESeFvZfF1KOhvf"
                  title="Checkout Form"
                >
                </iframe>
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
      </section>

      <Footer />
    </>
  );
}
