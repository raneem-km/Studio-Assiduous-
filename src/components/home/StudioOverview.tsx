import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { AnimatedHeading } from '../ui/AnimatedHeading';
import { STUDIO_INFO } from '../../data/projects';

export const StudioOverview: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Use IntersectionObserver to play only when visible & pause when scrolled away
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#050505] text-[#F2F2EE] py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 2xl:px-24 border-b border-white/16">
      <div className="max-w-[1700px] mx-auto space-y-12 md:space-y-16">
        <SectionLabel label="OUR PRACTICE" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Living Studio Reel on Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#0B0B0B] border border-white/16 overflow-hidden aspect-[4/3] relative group"
          >
            <video
              ref={videoRef}
              src="/brand/studio-reel.mp4?v=2"
              poster="/projects/aakruti/cover.jpg?v=2"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover transform-gpu select-none transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
            />
            {/* Subtle frosted studio reel badge */}
            <div className="absolute bottom-4 left-4 z-10 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full pointer-events-none">
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-white uppercase font-medium">
                STUDIO REEL · 2026
              </span>
            </div>
          </motion.div>

          {/* Editorial Copy on Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <AnimatedHeading
              text={STUDIO_INFO.placeholderCopy.aboutStatement}
              className="font-display text-4xl sm:text-5xl font-light tracking-tight uppercase text-white"
            />

            <p className="font-editorial text-base sm:text-lg text-[#F2F2EE]/85 leading-relaxed font-light">
              {STUDIO_INFO.placeholderCopy.aboutDescription}
            </p>

            <div className="pt-4 border-t border-white/10">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 font-mono text-sm sm:text-base font-semibold text-[#F2F2EE] tracking-[0.2em] uppercase group hover:text-white transition-colors"
              >
                <span>ABOUT THE STUDIO</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
