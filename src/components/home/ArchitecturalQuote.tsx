import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const ArchitecturalQuote: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 bg-[#080808] border-y border-white/10 overflow-hidden">
      {/* Subtle blueprint grid background */}
      <div className="absolute inset-0 architectural-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#050505] border border-white/20 text-[#8A8A86]"
        >
          <Quote size={24} className="rotate-180" />
        </motion.div>

        {/* The Quote Text in Sentence Case & Refined Editorial Typography */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F2F2EE] font-light leading-[1.35] tracking-tight italic"
        >
          “A great building must begin with the immeasurable, must go through measurable means when it is being designed, and in the end must be unmeasured.”
        </motion.blockquote>

        {/* Author Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4 space-y-1.5"
        >
          <p className="font-mono text-sm sm:text-base tracking-[0.25em] text-[#F2F2EE] font-semibold uppercase">
            Louis Kahn
          </p>
          <p className="font-mono text-xs text-[#8A8A86] tracking-widest uppercase">
            Architect & Theorist
          </p>
        </motion.div>
      </div>
    </section>
  );
};
