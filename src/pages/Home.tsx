import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  Zap, 
  Smartphone, 
  Users, 
  MessageSquare, 
  PenLine, 
  Paperclip, 
  Folder, 
  Download,
  Calendar,
  TrendingUp,
  Star,
  Award,
  Target,
  BarChart3,
  Bell,
  Clock
} from "lucide-react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-10 md:pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-h1 mb-8 pb-4 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent"
          >
            Unleash the power of intuitive marketing
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-body text-zinc-400 mb-12 max-w-2xl mx-auto"
          >
            Premium website and marketing solutions for all service-based businesses. From contractors to medical spas, we empower every business owner to scale their brand with simple, intuitive tools.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <Link to="/contact" className="group relative px-8 py-4 rounded-full bg-zinc-950 border border-white/10 shadow-[0_4px_16px_-4px_rgba(166,7,36,0.5)] transition-all hover:border-[#a60724]/60 hover:shadow-[0_-12px_24px_-8px_rgba(166,7,36,0.6),0_12px_24px_-8px_rgba(166,7,36,0.6)]">
              <span className="relative z-10 font-medium text-white">Book a Call</span>
              <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent transition-opacity duration-300 group-hover:opacity-0 z-20" />
            </Link>
            <a href="#features" className="flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors group text-sm">
              Learn more
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="mt-24 max-w-6xl mx-auto rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-2xl overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-zinc-800/50 border border-white/5">
                <p className="text-sm text-zinc-500 mb-1">Leads today</p>
                <p className="text-2xl font-bold">1,036</p>
                <div className="mt-2 text-xs text-emerald-500">+21% from yesterday</div>
              </div>
              <div className="p-6 rounded-xl bg-zinc-800/50 border border-white/5">
                <p className="text-sm text-zinc-500 mb-1">Conversion Rate</p>
                <p className="text-2xl font-bold">19.82%</p>
                <div className="mt-2 text-xs text-zinc-500">Real-time tracking</div>
              </div>
              <div className="p-6 rounded-xl bg-zinc-800/50 border border-white/5">
                <p className="text-sm text-zinc-500 mb-1">Ad Spend</p>
                <p className="text-2xl font-bold">$12,490</p>
                <div className="mt-2 text-xs text-rose-500">8% over budget</div>
              </div>
            </div>
            <div className="mt-8 h-64 rounded-xl bg-zinc-800/30 border border-white/5 flex items-end p-6 gap-2">
              {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-[#a60724]/20 border-t-2 border-[#a60724] rounded-t-sm" 
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Detailed Feature Sections */}
      <div id="features" className="pt-24 space-y-32">
        {/* Section 1: Preview */}
        <section id="preview" className="max-w-5xl mx-auto px-6">
          <div className="flex gap-4 lg:gap-8">
            <div className="w-px bg-white/10 self-stretch overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full animate-move-down bg-gradient-to-b from-transparent via-[#a60724] to-transparent bg-no-repeat bg-[length:100%_400px]" />
            </div>
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block rounded-full font-bold px-3 py-1 bg-[#a60724]/20 text-[#a60724] mb-4 text-xs uppercase tracking-wider">
                  Website
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                  High-performance websites that convert.
                </h3>
                <p className="text-lg text-zinc-400 mb-10 max-w-xl">
                  First impressions matter. We build websites that establish your brand and automate your growth, ensuring a seamless experience from the first click to the final booking.
                </p>
                
                <div className="bg-gradient-to-br from-[#a60724]/30 to-zinc-900 h-80 sm:h-[450px] rounded-3xl relative overflow-hidden mb-8 border border-white/10 group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(166,7,36,0.1),transparent)] group-hover:opacity-100 transition-opacity" />
                  <img 
                    src="https://picsum.photos/seed/website-design/1200/800" 
                    alt="Website Design Showcase" 
                    className="absolute top-12 left-12 rounded-xl shadow-2xl w-[110%] max-w-none border border-white/5 transition-transform duration-700 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div whileHover={{ y: -5 }} className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 border border-white/10">
                      <Calendar className="w-6 h-6 text-[#a60724]" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Legitimacy & Lead Capture</h4>
                    <p className="text-sm text-zinc-500">Professional design with integrated booking and contact systems to turn visitors into clients.</p>
                  </motion.div>
                  
                  <motion.div whileHover={{ y: -5 }} className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 border border-white/10">
                      <TrendingUp className="w-6 h-6 text-[#a60724]" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Dominate Google Search</h4>
                    <p className="text-sm text-zinc-500">Advanced SEO optimization that prioritizes your brand in search rankings, driving consistent organic growth within your local market.</p>
                  </motion.div>

                  <motion.div whileHover={{ y: -5 }} className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 border border-white/10">
                      <Star className="w-6 h-6 text-[#a60724]" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Let Your Work Speak</h4>
                    <p className="text-sm text-zinc-500">Showcasing your best work and testimonials with automated follow-ups that build lasting trust.</p>
                  </motion.div>

                  <motion.div whileHover={{ y: -5 }} className="md:col-span-3 bg-zinc-900/40 border border-white/5 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm overflow-hidden relative">
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-2xl font-bold mb-4">Build a bulletproof reputation</h4>
                      <p className="text-zinc-400">Collect Google reviews with a single tap and keep your site fresh with lightning-fast updates whenever your business evolves.</p>
                    </div>
                    <div className="w-full md:w-1/2 h-48 bg-zinc-800/50 rounded-xl border border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center gap-4 p-4">
                          <div className="w-2/3 md:w-1/3 h-full bg-zinc-700/50 rounded-lg p-3 flex flex-col justify-center gap-2">
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded-full bg-[#a60724]/30" />
                              <div className="w-10 h-1.5 bg-zinc-600 rounded" />
                            </div>
                            <p className="text-[8px] text-zinc-400 leading-tight italic">\"The best service I've ever used. Professional, fast, and high quality!\"</p>
                          </div>
                          <div className="hidden md:flex w-1/3 h-full bg-[#a60724]/10 rounded-lg border border-[#a60724]/20 items-center justify-center">
                            <Award className="w-8 h-8 text-[#a60724]" />
                          </div>
                          <div className="w-1/3 h-full bg-zinc-700/50 rounded-lg flex flex-col items-center justify-center gap-2">
                            <div className="w-full flex justify-center gap-0 md:gap-0.5 animate-pulse drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                              <Star className="w-2 h-2 md:w-3 md:h-3 fill-yellow-500 text-yellow-500" />
                              <Star className="w-2 h-2 md:w-3 md:h-3 fill-yellow-500 text-yellow-500" />
                              <Star className="w-2 h-2 md:w-3 md:h-3 fill-yellow-500 text-yellow-500" />
                              <Star className="w-2 h-2 md:w-3 md:h-3 fill-yellow-500 text-yellow-500" />
                              <Star className="w-2 h-2 md:w-3 md:h-3 fill-yellow-500 text-yellow-500" />
                            </div>
                            <div className="w-full text-[10px] font-bold text-zinc-300 text-center">5.0 Rating</div>
                          </div>
                        </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Advertising */}
        <section id="advertising" className="max-w-5xl mx-auto px-6">
          <div className="flex gap-4 lg:gap-8">
            <div className="w-px bg-white/10 self-stretch overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full animate-move-down bg-gradient-to-b from-transparent via-[#a60724] to-transparent bg-no-repeat bg-[length:100%_400px]" />
            </div>
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block rounded-full font-bold px-3 py-1 bg-[#a60724]/20 text-[#a60724] mb-4 text-xs uppercase tracking-wider">
                  Advertising
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                  Scale your growth with precision.
                </h3>
                <p className="text-lg text-zinc-400 mb-10 max-w-xl">
                  Stop waiting for customers to find you. We deploy high-converting Meta and Google ad campaigns that put your brand directly in front of your ideal clients.
                </p>
                
                <div className="bg-gradient-to-br from-[#a60724]/30 to-zinc-900 h-80 sm:h-[450px] rounded-3xl relative overflow-hidden mb-8 border border-white/10 group">
                  <img 
                    src="https://picsum.photos/seed/advertising-hero/1200/800" 
                    alt="Advertising Analytics Showcase" 
                    className="absolute top-12 left-12 rounded-xl shadow-2xl w-[110%] max-w-none border border-white/5 transition-transform duration-700 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div whileHover={{ y: -5 }} className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 border border-white/10">
                      <Target className="w-6 h-6 text-[#a60724]" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Paid Meta & Google Ads</h4>
                    <p className="text-sm text-zinc-500">Expertly managed campaigns designed to capture high-intent leads across the world's largest platforms.</p>
                  </motion.div>
                  
                  <motion.div whileHover={{ y: -5 }} className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 border border-white/10">
                      <BarChart3 className="w-6 h-6 text-[#a60724]" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Scalable Growth Budget</h4>
                    <p className="text-sm text-zinc-500">Grow faster by paying for results. Our strategies scale with your needs, ensuring every dollar works for you.</p>
                  </motion.div>

                  <motion.div whileHover={{ y: -5 }} className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 border border-white/10">
                      <Smartphone className="w-6 h-6 text-[#a60724]" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Live Lead Tracking</h4>
                    <p className="text-sm text-zinc-500">Stay in control with real-time lead updates delivered directly to your mobile device as they happen.</p>
                  </motion.div>

                  <motion.div whileHover={{ y: -5 }} className="md:col-span-3 bg-zinc-900/40 border border-white/5 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm overflow-hidden relative">
                    <div className="flex-1 text-center md:text-left">
                      <h4 className="text-2xl font-bold mb-4">Speed to lead is everything</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-zinc-400">
                          <Clock className="w-6 h-6 md:w-4 md:h-4 text-[#a60724] shrink-0" />
                          <span className="text-left">Responding within 5 minutes makes you 21x more likely to convert</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-zinc-400">
                          <Bell className="w-6 h-6 md:w-4 md:h-4 text-[#a60724] shrink-0" />
                          <span className="text-left">Automated follow-ups ensure your leads won't go cold</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-zinc-400">
                          <Zap className="w-6 h-6 md:w-4 md:h-4 text-[#a60724] shrink-0" />
                          <span className="text-left">Focus on your business while we bridge the gap to your next client</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 h-48 bg-zinc-800/50 rounded-xl border border-white/10 flex items-center justify-center">
                       <div className="relative">
                          <div className="absolute -inset-4 bg-[#a60724]/20 blur-xl rounded-full animate-pulse" />
                          <Bell className="w-16 h-16 text-[#a60724]" />
                       </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Proof & Testimonials */}
      <section id="testimonials" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 mb-8 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">Trusted by the next generation of founders</h2>
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10">
                  <p className="text-lg italic text-zinc-300 mb-4">\"Takeover Marketing has completely transformed how we handle our growth. It's the first time I've actually enjoyed looking at our conversion metrics.\"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800" />
                    <div>
                      <p className="font-semibold">Sarah Jenkins</p>
                      <p className="text-sm text-zinc-500">Founder @ TechFlow</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/10">
                  <p className="text-lg italic text-zinc-300 mb-4">\"The AI insights are a game changer. It caught a subscription leak that saved us $2k a month.\"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800" />
                    <div>
                      <p className="font-semibold">Marcus Chen</p>
                      <p className="text-sm text-zinc-500">CEO @ CreativePulse</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#a60724]/20 blur-3xl rounded-full" />
              <img 
                src="https://picsum.photos/seed/finance-red/800/600" 
                alt="Testimonial Proof" 
                className="relative rounded-2xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-48 px-6 overflow-hidden">
        {/* Local Grid for this section */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 h-full w-full stroke-white/5 [mask-image:radial-gradient(50%_50%_at_center,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="cta-grid" width="80" height="80" x="50%" y="50%" patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#cta-grid)" />
          </svg>
          <div className="absolute inset-x-0 bottom-0 h-96 bg-[#a60724]/5 blur-[120px] rounded-full translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 tracking-tight bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
            See where marketing automation can <br /> take your business.
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Premium website and marketing solutions for contractors, restaurants, and all service-based businesses. The last growth tool you'll ever need.
          </p>
          <Link to="/contact" className="group relative px-8 py-3 rounded-full bg-zinc-950 border border-white/20 shadow-[0_4px_16px_-4px_rgba(166,7,36,0.5)] hover:border-[#a60724]/60 hover:shadow-[0_-12px_24px_-8px_rgba(166,7,36,0.6),0_12px_24px_-8px_rgba(166,7,36,0.6)] transition-all text-sm font-medium inline-block text-white">
            <span className="relative z-10">Book a Call</span>
            <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
            <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#a60724] to-transparent transition-opacity duration-300 group-hover:opacity-0 z-20" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
