import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const portfolioItems = [
  {
    title: "Landscaping",
    category: "Web Development",
    image: "https://picsum.photos/seed/landscaping/800/600",
  },
  {
    title: "Roofing",
    category: "Web Development",
    image: "https://picsum.photos/seed/roofing/800/600",
  },
  {
    title: "HVAC",
    category: "Web Development",
    image: "https://picsum.photos/seed/hvac/800/600",
  },
  {
    title: "Plumbing",
    category: "Web Development",
    image: "https://picsum.photos/seed/plumbing/800/600",
  },
  {
    title: "Junk Removal",
    category: "Web Development",
    image: "https://picsum.photos/seed/junkremoval/800/600",
  },
  {
    title: "Medical Spa",
    category: "Web Development",
    image: "https://picsum.photos/seed/medicalspa/800/600",
  },
];

export default function Portfolio() {
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
                className="group"
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
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="text-sm font-medium text-white underline underline-offset-4 decoration-[#a60724]">
                      View Project
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
