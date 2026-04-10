import { motion } from "motion/react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  key?: number | string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#a60724] transition-colors group"
      >
        <span className="text-lg font-medium">{question}</span>
        <div className="shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#a60724]" />
          ) : (
            <Plus className="w-5 h-5 text-zinc-500 group-hover:text-[#a60724]" />
          )}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-zinc-400 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "How long does it take to get my website live?",
      answer: "Typically, we can have your personalized website live within 24 to 72 hours after we receive your business details and payment. Our streamlined process is designed to get you online as quickly as possible."
    },
    {
      question: "Do I own my website and domain?",
      answer: "Yes, once your website is fully paid for, you own the design and the content. We can help you register a new domain or connect an existing one that you already own."
    },
    {
      question: "What is the 'Missed Call Text Back' feature?",
      answer: "It's an automated system that immediately sends a text message to anyone who calls your business and doesn't get an answer. This helps you capture leads instantly even when you're busy on a job site or with another client."
    },
    {
      question: "Can I update the content on my website myself?",
      answer: "Absolutely. We build our websites on intuitive platforms that allow you to make simple text and image updates easily. We also provide guidance on how to manage your new digital presence."
    },
    {
      question: "Is there a monthly fee?",
      answer: "We offer various packages. Some include ongoing hosting, security updates, and access to our marketing automation tools for a small monthly fee, while others may be one-time project costs. Check our pricing page for more details."
    },
    {
      question: "Do you provide SEO services?",
      answer: "Yes, all our websites are built with SEO best practices from the ground up. We ensure your site is fast, mobile-friendly, and structured correctly for search engines to find you."
    }
  ];

  return (
    <>
      <Navigation />
      
      <main className="pt-32 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-zinc-400 text-lg">
              Everything you need to know about our services and how we help your business grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 p-8 rounded-3xl bg-zinc-900/50 border border-white/5 text-center"
          >
            <h3 className="text-xl font-bold mb-4 text-white">Still have questions?</h3>
            <p className="text-zinc-400 mb-8">
              We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <a
              href="#/contact"
              className="inline-flex px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-[#a60724] hover:text-white transition-all"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}
