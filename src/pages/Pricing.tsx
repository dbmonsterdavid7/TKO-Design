import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Check, Zap } from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const plans = [
  {
    name: "Website + Automations",
    price: "269",
    period: "/month",
    description: "Perfect for businesses looking to establish their presence and close more clients.",
    features: [
      "High-Performance Website",
      "On-Site SEO Optimization",
      "One Click 5 Star Google Review Funnel",
      "On-Site Booking Calendar",
      "Missed Call Text Back",
      "Automated Lead Capture Integration",
      "Live Lead Tracking App"
    ],
    highlight: false
  },
  {
    name: "Annually",
    price: "3,000",
    period: "/year",
    breakdown: "($200 /mo)",
    description: "The ultimate package for businesses ready to scale aggressively.",
    features: [
      "15 Months total (3 Months free)",
      "Everything in Website + Automations"
    ],
    highlight: true
  },
  {
    name: "Website",
    price: "97",
    period: "/month",
    breakdown: "+ 1 time $300 setup fee",
    description: "Best for new or small businesses to get your company online.",
    features: [
      "High-Performance Website",
      "On-Site SEO Optimization",
      "On-Site Booking Calendar",
      "24/7 Support"
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <>
      <Navigation />
      
      {/* Section 1: Pricing Hero */}
      <section className="relative z-10 pt-20 pb-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block rounded-full font-bold px-3 py-1 bg-[#a60724]/20 text-[#a60724] mb-4 text-xs uppercase tracking-wider">
              Pricing Plans
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-2 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
              Simple, transparent pricing for every stage.
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Choose the plan that fits your business goals. No hidden fees, no complex contracts. Just growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Pricing Cards */}
      <section className="relative z-10 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl border ${
                  plan.highlight 
                    ? "bg-zinc-900/60 border-[#a60724]/50 shadow-[0_0_40px_-10px_rgba(166,7,36,0.3)]" 
                    : "bg-zinc-900/40 border-white/10"
                } backdrop-blur-sm flex flex-col`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#a60724] text-white text-xs font-bold rounded-full uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-zinc-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                  {plan.price !== "Custom" && <span className="text-4xl font-bold">$</span>}
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-zinc-500 text-sm">{plan.period}</span>
                  {plan.breakdown && (
                    <span className="text-zinc-500 text-xs ml-1">{plan.breakdown}</span>
                  )}
                </div>

                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className={`w-5 h-5 shrink-0 ${feature.includes("3 Months free") ? "text-emerald-500" : "text-[#a60724]"}`} />
                      <span className={feature.includes("3 Months free") ? "text-emerald-500 font-semibold" : ""}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className={`w-full py-4 rounded-xl font-bold transition-all text-center ${
                  plan.highlight
                    ? "bg-[#a60724] hover:bg-[#8a061e] text-white shadow-[0_4px_20px_-4px_rgba(166,7,36,0.5)]"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                }`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 p-8 rounded-3xl border border-dashed border-white/10 bg-zinc-900/20 text-center"
          >
            <h4 className="text-xl font-bold mb-2">Need a custom solution?</h4>
            <p className="text-zinc-400 mb-6">We offer tailored enterprise packages for high-volume businesses.</p>
            <Link to="/contact" className="text-[#a60724] font-bold hover:underline flex items-center gap-2 mx-auto w-fit">
              Contact our sales team <Zap className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
