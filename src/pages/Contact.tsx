import { useEffect } from "react";
import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

declare global {
  interface Window {
    Cal: any;
  }
}

export default function Contact() {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "tko-marketing-meetings", { origin: "https://app.cal.com" });

    window.Cal.ns["tko-marketing-meetings"]("inline", {
      elementOrSelector: "#my-cal-inline-tko-marketing-meetings",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "dark" },
      calLink: "bizon/tko-marketing-meetings",
    });

    window.Cal.ns["tko-marketing-meetings"]("ui", {
      theme: "dark",
      cssVarsPerTheme: {
        light: { "cal-brand": "#A60724" },
        dark: { "cal-brand": "#A1A1AA" },
      },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
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
              Select a time that works best for you and let's discuss how we can take your business to the next level.
            </p>
          </motion.div>
        </div>
        
        <div className="flex-1 max-w-5xl mx-auto w-full rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm overflow-hidden min-h-[700px] flex items-center justify-center">
           <div style={{ width: "100%", height: "100%" }} id="my-cal-inline-tko-marketing-meetings"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
