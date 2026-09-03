import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { STUDIO_INFO } from '../../data/projects';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Subtle parallax effect on scroll
  const backgroundOpacity = useTransform(scrollY, [0, 600], [0.95, 0.4]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    if (heroRef.current) {
      const nextSection = heroRef.current.nextElementSibling;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-end md:justify-between pt-24 pb-8 sm:pb-12 md:py-40 px-5 sm:px-8 md:px-12 lg:px-16 2xl:px-24 selection:bg-[#F2F2EE] selection:text-[#050505]"
    >
      {/* Background Architectural Photograph with Continuous Subtle Zoom Animation */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <motion.img
          src="/projects/meadow-view/01.jpg?v=2"
          alt="Studio Assiduous Architecture"
          animate={{
            scale: [1, 1.08],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="w-full h-full object-cover object-[62%_10%] md:object-center filter contrast-[1.03]"
        />

        {/* Dual-Gradient Scrim:
            - Mobile: Clean bottom gradient leaving the upper 60% of the architectural photo 100% crisp & unblocked.
            - Desktop: Vertical & horizontal dual-gradient for editorial side placement.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 via-40% to-transparent pointer-events-none md:via-[#0a0a0a]/40" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/75 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Main Left-Aligned Editorial Headline Content */}
      <div className="relative z-10 max-w-[1700px] mx-auto w-full mb-6 md:my-auto text-left">
        <div className="max-w-5xl 2xl:max-w-6xl space-y-3 sm:space-y-5 md:space-y-8">
          {/* Location & Practice Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 15 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 backdrop-blur-md bg-black/40 rounded-full border border-white/15 mb-2 sm:mb-4">
              <span className="text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] text-white uppercase font-mono">
                <span className="sm:hidden">Architectural Practice · Kerala</span>
                <span className="hidden sm:inline">Architectural Firm · Manjeri · Malappuram, Kerala · India</span>
              </span>
            </div>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gray-400 font-medium"
          >
            DESIGN THAT LIVES WITH YOU.
          </motion.p>

          {/* Main Headline: WHERE LIFE TAKES SHAPE. with masked overflow reveal */}
          <h1 className="font-display font-light text-3xl sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl text-white leading-[1.08] tracking-tight drop-shadow-2xl">
            {/* Line 1 */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const, delay: 0.2 }}
              >
                WHERE LIFE
              </motion.div>
            </div>

            {/* Line 2 (The Italic part) */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const, delay: 0.4 }}
                className="italic text-gray-200"
              >
                TAKES SHAPE.
              </motion.div>
            </div>
          </h1>

          {/* Disciplines Minimalist Strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 25 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-1 sm:pt-2 flex flex-wrap items-center gap-2 sm:gap-6 font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.16em] sm:tracking-[0.2em] text-gray-300 uppercase font-light"
          >
            {STUDIO_INFO.disciplines.map((discipline, idx) => (
              <span key={discipline} className="inline-flex items-center gap-2 sm:gap-6">
                <span>{discipline}</span>
                {idx < STUDIO_INFO.disciplines.length - 1 && (
                  <span className="text-white/25">·</span>
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Architectural Bar & Scroll Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 max-w-[1700px] mx-auto w-full flex items-center justify-between pt-4 md:pt-6 border-t border-white/10 md:border-t-0 font-sans text-xs md:text-sm tracking-[0.2em] text-gray-400 uppercase"
      >
        <button
          onClick={scrollToNext}
          className="group inline-flex items-center gap-2.5 sm:gap-3 text-[#F2F2EE] hover:text-white transition-colors cursor-pointer focus:outline-none text-[11px] sm:text-xs md:text-sm"
        >
          <span className="font-medium tracking-[0.22em] sm:tracking-[0.25em]">DISCOVER THE FIRM</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform text-white/80" />
        </button>

        <div className="hidden sm:block text-xs text-gray-500 tracking-widest font-normal">
          STUDIO ASSIDUOUS · MANJERI, KERALA
        </div>
      </motion.div>
    </section>
  );
};
