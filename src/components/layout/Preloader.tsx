import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Total animation cycle ~1.6s
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="studio-preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-[#F2F2EE] pointer-events-none"
        >
          {/* Subtle Architectural Blueprint Grid Background */}
          <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

          {/* Centered Animated Logo */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-6">
            {/* Logo Container with Glow & Scale */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-4"
            >
              <img
                src="/brand/logo.png"
                alt="Studio Assiduous Architectural Firm"
                className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-2xl"
              />

              {/* Animated Hairline Perimeter Trace */}
              <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-0 border border-white/20 pointer-events-none"
              />
            </motion.div>

            {/* Subtitle & Tagline Animation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-1.5 font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#8A8A86]"
            >
              <p className="text-[#F2F2EE] font-semibold">ARCHITECTURAL FIRM</p>
              <p className="text-white/60 text-[11px] tracking-[0.25em]">MANJERI · MALAPPURAM, KERALA · INDIA</p>
            </motion.div>

            {/* Minimal Progress Line Indicator */}
            <div className="w-36 h-[1.5px] bg-white/10 overflow-hidden relative mt-4">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: 'easeInOut'
                }}
                className="w-1/2 h-full bg-[#F2F2EE]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
