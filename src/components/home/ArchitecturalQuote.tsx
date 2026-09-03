import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';

export const ArchitecturalQuote: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll effect for background quotation mark
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yQuote = useTransform(scrollYProgress, [0, 1], [-70, 70]);

  // Quote split into individual words for staggered reveal animation
  const quoteText =
    '“A great building must begin with the immeasurable, must go through measurable means when it is being designed, and in the end must be unmeasured.”';
  const words = quoteText.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.25,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-32 px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center text-center selection:bg-[#F2F2EE] selection:text-[#050505]"
    >
      {/* The Scroll-Through Line at Top Center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 60, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-[1px] bg-gradient-to-b from-white/10 via-white/70 to-white"
        />
      </div>

      {/* Massive Parallax Background Quotation Mark */}
      <motion.div
        style={{ y: yQuote }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none font-serif text-[15rem] md:text-[22rem] leading-none text-white opacity-5"
        aria-hidden="true"
      >
        “
      </motion.div>

      {/* Central Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Staggered Word-by-Word Quote Reveal */}
        <motion.blockquote
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="font-serif font-light text-3xl md:text-5xl text-gray-200 leading-relaxed italic"
        >
          {words.map((word, idx) => (
            <span key={idx} className="inline-block mr-[0.28em] whitespace-nowrap">
              <motion.span
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.blockquote>

        {/* The Author & Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <p className="font-sans text-sm tracking-[0.2em] font-medium text-white uppercase mt-12">
            LOUIS KAHN
          </p>
          <p className="font-sans text-xs tracking-[0.3em] text-gray-500 uppercase mt-2">
            ARCHITECT & THEORIST
          </p>
        </motion.div>
      </div>
    </section>
  );
};
