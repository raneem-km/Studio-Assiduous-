import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { STUDIO_INFO } from '../../data/projects';

export const StudioOverview: React.FC = () => {
  return (
    <section className="bg-[#050505] text-[#F2F2EE] py-24 md:py-36 px-6 md:px-12 border-b border-white/16">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionLabel label="OUR PRACTICE" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Large Image on Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#0B0B0B] border border-white/16 overflow-hidden aspect-[4/3]"
          >
            <img
              src="/projects/interior-2100/03.jpg"
              alt="Studio Assiduous Architectural Space"
              className="w-full h-full object-cover filter brightness-95"
            />
          </motion.div>

          {/* Editorial Copy on Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tight uppercase">
              {STUDIO_INFO.placeholderCopy.aboutStatement}
            </h2>

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
