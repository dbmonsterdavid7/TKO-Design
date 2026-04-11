import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import PurchaseWebsite from "./pages/PurchaseWebsite";
import FAQ from "./pages/FAQ";
import { ParticleBackground } from "./components/ParticleBackground";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function ChatWidget() {
  const location = useLocation();
  const excludedPaths = ["/contact", "/purchase-website"];
  const isExcluded = excludedPaths.includes(location.pathname);

  useEffect(() => {
    if (isExcluded) {
      // Remove the script if we are on an excluded page
      const existingScript = document.querySelector('script[src*="widgets.leadconnectorhq.com/loader.js"]');
      if (existingScript) {
        existingScript.remove();
      }
      // Also remove the widget container if it exists (LeadConnector often adds a div)
      const widgetContainer = document.getElementById('lc-chat-widget-container');
      if (widgetContainer) {
        widgetContainer.remove();
      }
      return;
    }

    // Add the script if we are not on an excluded page and it doesn't already exist
    const existingScript = document.querySelector('script[src*="widgets.leadconnectorhq.com/loader.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.dataset.resourcesUrl = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
      script.dataset.widgetId = "69d9a9629f3b6f4a9c3f8b9b";
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup on unmount or route change if needed
      // However, usually we want it to persist across allowed pages
    };
  }, [location.pathname, isExcluded]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ChatWidget />
      <div className="relative min-h-screen bg-zinc-950 text-white selection:bg-[#a60724]/30">
        <ParticleBackground />

        {/* Global Grid Lines */}
        <div className="absolute inset-x-0 top-0 h-full pointer-events-none z-0 overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full stroke-white/5 [mask-image:radial-gradient(100%_70%_at_top_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="hero-grid"
                width="80"
                height="80"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#hero-grid)" />
          </svg>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/purchase-website" element={<PurchaseWebsite />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}
