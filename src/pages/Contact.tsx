import { useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navigation />
      <section className="relative z-10 pt-20 pb-16 px-6 overflow-hidden min-h-screen flex flex-col">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-2 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
              Book a Strategy Call
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Select a time that works best for you and let's discuss how we can take your business to the next level, or{" "}
              <Link to="/purchase-website" className="text-[#a60724] hover:text-[#8a061e] transition-colors font-medium underline underline-offset-4">
                skip the call and purchase your website now
              </Link>.
            </p>
          </motion.div>
        </div>
        
        <div className="flex-1 max-w-6xl mx-auto w-full rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm overflow-hidden p-6 md:p-12 flex flex-col items-center justify-center">
           <iframe 
             src="https://api.leadconnectorhq.com/widget/booking/rDuOifW8Jz5xGQO8HZIZ" 
             style={{ width: "100%", height: "800px", border: "none" }} 
             scrolling="no" 
             id="rDuOifW8Jz5xGQO8HZIZ_1775538522002"
             title="Booking Calendar"
           ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
}
