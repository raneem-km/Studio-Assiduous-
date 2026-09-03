import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { STUDIO_INFO } from '../../data/projects';

export const StudioIntro: React.FC = () => {
  return (
    <section className="bg-[#050505] text-[#F2F2EE] py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 2xl:px-24 border-b border-white/16">
      <div className="max-w-[1700px] mx-auto space-y-12">
        <SectionLabel label="OUR PHILOSOPHY" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Large typography on left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight uppercase leading-[1.05]">
              {STUDIO_INFO.placeholderCopy.introStatement}
            </h2>
          </motion.div>

          {/* Short supporting text on right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-6 pt-2 font-editorial text-base sm:text-lg text-[#F2F2EE]/85 font-light leading-relaxed"
          >
            <p>{STUDIO_INFO.placeholderCopy.introText}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
