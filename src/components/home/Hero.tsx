import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../../data/projects';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeDiscIdx, setActiveDiscIdx] = useState(0);
  const { scrollY } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  // Parallax on Scroll
  const imageScale = useTransform(scrollY, [0, 1000], [1, 1.08]);
  const imageOpacity = useTransform(scrollY, [0, 600], [0.92, 0.35]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  // Cycle through core disciplines dynamically every 3.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDiscIdx((prev) => (prev + 1) % STUDIO_INFO.disciplines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 24);
    mouseY.set(y * 24);
  };

  const line1Words = ["DESIGNING", "DREAMS", "INTO", "REALITY,"];
  const line2Words = ["ONE", "SPACE", "AT", "A", "TIME."];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen min-h-[760px] w-full bg-[#050505] overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 selection:bg-[#F2F2EE] selection:text-[#050505]"
    >
      {/* Background Architectural Visual with Slow Ambient Depth */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 1.08 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.img
          style={{ scale: imageScale, opacity: imageOpacity }}
          src="/projects/meadow-view/01.jpg"
          alt="Studio Assiduous Architecture"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-[1.06]"
        />
        {/* Layered Architectural Gradient Overlays */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/75 via-transparent to-[#050505]/55" />

        {/* Ambient Subtle Daylight Light Flare following cursor */}
        <motion.div
          style={{ x: smoothX, y: smoothY }}
          className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-radial from-white/[0.07] via-transparent to-transparent pointer-events-none blur-3xl"
        />

        {/* Hairline Architectural Blueprint Coordinates Lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: loaded ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/4 left-0 right-0 h-[1px] bg-white/10 origin-left pointer-events-none"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: loaded ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-white/5 origin-top pointer-events-none hidden md:block"
        />
      </motion.div>

      {/* Top Header Spacer */}
      <div className="relative z-10 pt-20" />

      {/* Main Center Content Hero with Dynamic 3D Spatial Feel */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="relative z-10 max-w-7xl mx-auto w-full my-auto space-y-8"
      >
        {/* Top Architectural Metadata Strip: Location & Practice Type */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 sm:gap-5 font-mono text-xs sm:text-sm tracking-[0.22em] uppercase text-[#F2F2EE]"
        >
          {/* Location Badge */}
          <div className="flex items-center gap-2 bg-[#0B0B0B]/90 border border-white/20 px-3.5 py-1.5 backdrop-blur-md shadow-2xl">
            <MapPin size={13} className="text-emerald-400" />
            <span className="font-semibold text-white tracking-widest">{STUDIO_INFO.location}</span>
          </div>

          <span className="text-white/40 hidden sm:inline">|</span>

          {/* Firm Tag */}
          <div className="bg-[#050505]/80 border border-white/15 px-3 py-1.5 text-[#F2F2EE]/90 font-medium tracking-wider backdrop-blur-sm">
            {STUDIO_INFO.tagline}
          </div>
        </motion.div>

        {/* World-Class Monolithic Architectural Headline */}
        <div className="space-y-3 sm:space-y-4 max-w-6xl">
          <h1 className="font-display font-light text-[#F2F2EE] tracking-tight uppercase leading-[0.98] drop-shadow-2xl">
            {/* Line 1: DESIGNING DREAMS INTO REALITY, */}
            <div className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl overflow-hidden py-1">
              {line1Words.map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block mr-3 sm:mr-5 overflow-hidden">
                  <motion.span
                    initial={{ y: '115%', opacity: 0, filter: 'blur(12px)' }}
                    animate={{
                      y: loaded ? 0 : '115%',
                      opacity: loaded ? 1 : 0,
                      filter: loaded ? 'blur(0px)' : 'blur(12px)'
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.3 + wordIdx * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="inline-block transition-transform duration-300 hover:scale-[1.03] hover:text-white"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </div>

            {/* Line 2: ONE SPACE AT A TIME. */}
            <div className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl pt-1 sm:pt-2 font-extralight text-[#F2F2EE]/90 overflow-hidden">
              {line2Words.map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block mr-3 sm:mr-5 overflow-hidden">
                  <motion.span
                    initial={{ y: '115%', opacity: 0, filter: 'blur(12px)' }}
                    animate={{
                      y: loaded ? 0 : '115%',
                      opacity: loaded ? 1 : 0,
                      filter: loaded ? 'blur(0px)' : 'blur(12px)'
                    }}
                    transition={{
                      duration: 0.9,
                      delay: 0.65 + wordIdx * 0.09,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="inline-block italic tracking-wider transition-transform duration-300 hover:scale-[1.03] hover:text-white"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </div>
          </h1>

          {/* Animated Hairline Underline Accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: loaded ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-48 sm:w-64 h-[2px] bg-gradient-to-r from-emerald-400 via-white/40 to-transparent origin-left mt-2"
          />

          {/* Dynamic Cycling Focus Ticker */}
          <div className="flex items-center gap-3 font-mono text-sm sm:text-base text-[#F2F2EE]/80 uppercase tracking-widest h-8 overflow-hidden pt-4">
            <span className="text-[#8A8A86] text-xs font-semibold">PRACTICE FOCUS:</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDiscIdx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="font-semibold text-white tracking-[0.2em] bg-white/10 px-3 py-0.5 border-l-2 border-emerald-400"
              >
                {STUDIO_INFO.disciplines[activeDiscIdx]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* High-Legibility Disciplines Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 25 }}
          transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2"
        >
          <div className="inline-flex flex-wrap items-center gap-3 sm:gap-6 font-mono text-sm sm:text-base md:text-lg tracking-[0.22em] font-semibold text-[#F2F2EE] uppercase bg-[#050505]/85 backdrop-blur-md border border-white/20 px-6 py-3.5 shadow-2xl">
            {STUDIO_INFO.disciplines.map((discipline, idx) => {
              const isActive = idx === activeDiscIdx;
              return (
                <span
                  key={discipline}
                  onClick={() => setActiveDiscIdx(idx)}
                  className={`cursor-pointer transition-all duration-300 inline-flex items-center gap-3 sm:gap-6 ${
                    isActive ? 'text-white underline underline-offset-8 decoration-emerald-400' : 'text-[#F2F2EE]/70 hover:text-white'
                  }`}
                >
                  <span>{discipline}</span>
                  {idx < STUDIO_INFO.disciplines.length - 1 && (
                    <span className="text-white/30 font-normal no-underline">·</span>
                  )}
                </span>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Floating Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 flex items-center justify-between border-t border-white/20 pt-6 font-mono text-sm tracking-[0.2em] text-[#F2F2EE] uppercase"
      >
        <div className="flex items-center gap-2.5 font-semibold text-white/95">
          <span>DISCOVER THE FIRM</span>
          <ArrowDown size={16} className="animate-bounce text-white" />
        </div>

        <div className="hidden sm:block text-xs sm:text-sm text-[#F2F2EE]/85 tracking-widest font-medium">
          STUDIO ASSIDUOUS ARCHITECTURAL FIRM · KERALA
        </div>
      </motion.div>
    </section>
  );
};
