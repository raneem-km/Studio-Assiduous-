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
      className="relative min-h-[100svh] min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-between py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-12 lg:px-16 2xl:px-24 selection:bg-[#F2F2EE] selection:text-[#050505]"
    >
      {/* Background Architectural Photograph with Continuous 'Ken Burns' Slow Zoom Animation */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <motion.img
          src="/projects/meadow-view/01.jpg?v=2"
          alt="Studio Assiduous Architecture"
          animate={{
            scale: [1, 1.15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="w-full h-full object-cover object-[70%_center] md:object-center filter contrast-[1.04]"
        />

        {/* Dual-Gradient Scrim: Vertical and Horizontal to keep text readable while top right is 100% visible & vibrant */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 md:via-[#0a0a0a]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/85 via-[#0a0a0a]/40 md:from-[#0a0a0a]/70 md:via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Main Left-Aligned Editorial Headline Content */}
      <div className="relative z-10 max-w-[1700px] mx-auto w-full my-auto text-left">
        <div className="max-w-5xl 2xl:max-w-6xl space-y-5 sm:space-y-6 md:space-y-8">
          {/* Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 15 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-block px-3.5 sm:px-4 py-1.5 backdrop-blur-md bg-black/35 rounded-full border border-white/10 mb-4 sm:mb-6">
              <span className="text-[10px] sm:text-xs tracking-[0.2em] text-white uppercase font-mono">
                Architectural Firm · Manjeri · Malappuram, Kerala · India
              </span>
            </div>
          </motion.div>

          {/* Sub-headline: DESIGN THAT LIVES WITH YOU. */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400 font-medium"
          >
            DESIGN THAT LIVES WITH YOU.
          </motion.p>

          {/* Main Headline: WHERE LIFE TAKES SHAPE. with masked overflow reveal */}
          <h1 className="font-display font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-white leading-[1.08] tracking-tight drop-shadow-2xl">
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

          {/* Disciplines Minimalist Pill Strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 25 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-6 font-sans text-[11px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.2em] text-gray-300 uppercase font-light"
          >
            {STUDIO_INFO.disciplines.map((discipline, idx) => (
              <span key={discipline} className="inline-flex items-center gap-2.5 sm:gap-6">
                <span>{discipline}</span>
                {idx < STUDIO_INFO.disciplines.length - 1 && (
                  <span className="text-white/20">·</span>
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
        className="relative z-10 max-w-[1700px] mx-auto w-full flex items-center justify-between pt-6 font-sans text-xs md:text-sm tracking-[0.2em] text-gray-400 uppercase"
      >
        <button
          onClick={scrollToNext}
          className="group inline-flex items-center gap-3 text-[#F2F2EE] hover:text-white transition-colors cursor-pointer focus:outline-none"
        >
          <span className="font-medium tracking-[0.25em]">DISCOVER THE FIRM</span>
          <ArrowDown size={15} className="group-hover:translate-y-1 transition-transform text-white/80" />
        </button>

        <div className="hidden sm:block text-xs text-gray-500 tracking-widest font-normal">
          STUDIO ASSIDUOUS · MANJERI, KERALA
        </div>
      </motion.div>
    </section>
  );
};
