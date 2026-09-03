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
      className="relative min-h-[100svh] min-h-screen w-full bg-[#050505] overflow-hidden selection:bg-[#F2F2EE] selection:text-[#050505]"
    >
      {/* ========================================================================= */}
      {/* 1. MOBILE LAYOUT (< md): Complete Uncropped Image Showcase with Editorial Typography */}
      {/* ========================================================================= */}
      <div className="flex md:hidden min-h-[100svh] flex-col justify-between pt-24 pb-8 px-5 w-full">
        {/* Top Typography & Badge */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 10 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-white/5 border border-white/15 rounded-full font-mono text-[10px] tracking-[0.2em] text-[#F2F2EE]/90 uppercase">
              Architectural Practice · Manjeri, Kerala
            </div>
          </motion.div>

          <h1 className="font-display font-light text-4xl text-white tracking-tight leading-[1.06]">
            {/* Line 1 */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const, delay: 0.15 }}
              >
                WHERE LIFE
              </motion.div>
            </div>

            {/* Line 2 */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as const, delay: 0.3 }}
                className="italic text-gray-200"
              >
                TAKES SHAPE.
              </motion.div>
            </div>
          </h1>
        </div>

        {/* 100% FULL UNCROPPED ARCHITECTURAL IMAGE SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.98 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/3] my-4 overflow-hidden border border-white/15 bg-[#0B0B0B] shadow-2xl"
        >
          <img
            src="/projects/meadow-view/01.jpg?v=2"
            alt="Meadow View Villa - Studio Assiduous Architecture"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-2.5 left-3 px-2 py-0.5 bg-black/60 backdrop-blur-sm border border-white/10 text-[9px] font-mono tracking-widest text-[#F2F2EE]/80 uppercase">
            MEADOW VIEW · MANJERI
          </div>
        </motion.div>

        {/* Bottom Metadata & Scroll CTA */}
        <div className="space-y-4 pt-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-2 font-sans text-[10px] tracking-[0.16em] text-gray-300 uppercase font-light"
          >
            {STUDIO_INFO.disciplines.map((discipline, idx) => (
              <span key={discipline} className="inline-flex items-center gap-2">
                <span>{discipline}</span>
                {idx < STUDIO_INFO.disciplines.length - 1 && (
                  <span className="text-white/25">·</span>
                )}
              </span>
            ))}
          </motion.div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={scrollToNext}
              className="group inline-flex items-center gap-2 text-[#F2F2EE] hover:text-white transition-colors cursor-pointer focus:outline-none text-[11px] font-mono tracking-widest uppercase font-medium"
            >
              <span>DISCOVER THE FIRM</span>
              <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform text-white/80" />
            </button>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
              KERALA
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. DESKTOP / TABLET LAYOUT (>= md): Panoramic Immersive Full-Bleed Hero */}
      {/* ========================================================================= */}
      <div className="hidden md:flex min-h-screen w-full flex-col justify-between py-32 md:py-40 px-8 md:px-12 lg:px-16 2xl:px-24">
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
            className="w-full h-full object-cover object-center filter contrast-[1.03]"
          />

          {/* Dual-Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/75 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Main Left-Aligned Editorial Headline Content */}
        <div className="relative z-10 max-w-[1700px] mx-auto w-full my-auto text-left">
          <div className="max-w-5xl 2xl:max-w-6xl space-y-6 md:space-y-8">
            {/* Location & Practice Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 15 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-block px-4 py-1.5 backdrop-blur-md bg-black/40 rounded-full border border-white/15 mb-4">
                <span className="text-xs tracking-[0.2em] text-white uppercase font-mono">
                  Architectural Firm · Manjeri · Malappuram, Kerala · India
                </span>
              </div>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-gray-400 font-medium"
            >
              DESIGN THAT LIVES WITH YOU.
            </motion.p>

            {/* Main Headline: WHERE LIFE TAKES SHAPE. */}
            <h1 className="font-display font-light text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-white leading-[1.08] tracking-tight drop-shadow-2xl">
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

              {/* Line 2 */}
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
              className="pt-2 flex flex-wrap items-center gap-6 font-sans text-xs md:text-sm tracking-[0.2em] text-gray-300 uppercase font-light"
            >
              {STUDIO_INFO.disciplines.map((discipline, idx) => (
                <span key={discipline} className="inline-flex items-center gap-6">
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
          className="relative z-10 max-w-[1700px] mx-auto w-full flex items-center justify-between pt-6 font-sans text-xs md:text-sm tracking-[0.2em] text-gray-400 uppercase"
        >
          <button
            onClick={scrollToNext}
            className="group inline-flex items-center gap-3 text-[#F2F2EE] hover:text-white transition-colors cursor-pointer focus:outline-none"
          >
            <span className="font-medium tracking-[0.25em]">DISCOVER THE FIRM</span>
            <ArrowDown size={15} className="group-hover:translate-y-1 transition-transform text-white/80" />
          </button>

          <div className="text-xs text-gray-500 tracking-widest font-normal">
            STUDIO ASSIDUOUS · MANJERI, KERALA
          </div>
        </motion.div>
      </div>
    </section>
  );
};
