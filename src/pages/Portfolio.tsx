import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PortfolioItem {
  title: string;
  category: string;
  images: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Landscaping",
    category: "Web Development",
    images: [
      "https://picsum.photos/seed/landscaping/1200/800",
      "https://picsum.photos/seed/garden/1200/800",
      "https://picsum.photos/seed/patio/1200/800",
    ],
  },
  {
    title: "Roofing",
    category: "Web Development",
    images: [
      "https://picsum.photos/seed/roofing/1200/800",
      "https://picsum.photos/seed/tiles/1200/800",
    ],
  },
  {
    title: "HVAC",
    category: "Web Development",
    images: [
      "https://lh3.googleusercontent.com/d/1_4yaMPS4cMoV1xLD8KIjThD-IXraNnwM",
      "https://lh3.googleusercontent.com/d/1OVtZ8zz-Oy7Glz9WKvAb3_1yNAxYz5wG",
      "https://lh3.googleusercontent.com/d/1WCDuYAG_WjGF2LjdbbWN5wfiS0lesXMs",
    ],
  },
  {
    title: "Plumbing",
    category: "Web Development",
    images: [
      "https://lh3.googleusercontent.com/d/1GrcBZooR-prPuYFZ9zwXcau66jpullv7",
      "https://picsum.photos/seed/pipes/1200/800",
    ],
  },
  {
    title: "Junk Removal",
    category: "Web Development",
    images: [
      "https://picsum.photos/seed/junkremoval/1200/800",
      "https://picsum.photos/seed/truck/1200/800",
    ],
  },
  {
    title: "Medical Spa",
    category: "Web Development",
    images: [
      "https://picsum.photos/seed/medicalspa/1200/800",
      "https://picsum.photos/seed/skincare/1200/800",
    ],
  },
];

export default function Portfolio() {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedItemIndex !== null) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [selectedItemIndex]);

  const openLightbox = (itemIndex: number) => {
    setSelectedItemIndex(itemIndex);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex === null) return;
    const images = portfolioItems[selectedItemIndex].images;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex === null) return;
    const images = portfolioItems[selectedItemIndex].images;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <Navigation />
      
      <main className="flex-grow pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Explore our latest projects and see how we help businesses grow through innovative marketing and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Text above image */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#a60724] font-bold">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mt-1 group-hover:text-[#a60724] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex flex-col gap-1">
                      <button className="text-sm font-medium text-white underline underline-offset-4 decoration-[#a60724]">
                        View Project
                      </button>
                      <span className="text-[10px] text-zinc-400">
                        {item.images.length} {item.images.length === 1 ? "Image" : "Images"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 backdrop-blur-xl p-4 md:p-10 overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-0 right-0 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors z-[102]"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {portfolioItems[selectedItemIndex].images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors z-[102]"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors z-[102]"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}
              
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    src={portfolioItems[selectedItemIndex].images[currentImageIndex]}
                    alt={`${portfolioItems[selectedItemIndex].title} - ${currentImageIndex + 1}`}
                    className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>

              {/* Info & Counter */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {portfolioItems[selectedItemIndex].title}
                </h2>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-sm text-zinc-500 uppercase tracking-widest font-bold">
                    {portfolioItems[selectedItemIndex].category}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-zinc-800" />
                  <span className="text-sm text-zinc-400">
                    {currentImageIndex + 1} / {portfolioItems[selectedItemIndex].images.length}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {portfolioItems[selectedItemIndex].images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2 max-w-full scrollbar-hide">
                  {portfolioItems[selectedItemIndex].images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                        currentImageIndex === idx ? "border-[#a60724] scale-110" : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
