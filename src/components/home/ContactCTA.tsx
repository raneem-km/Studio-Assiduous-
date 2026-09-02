import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { STUDIO_INFO } from '../../data/projects';

export const ContactCTA: React.FC = () => {
  return (
    <section className="bg-[#050505] text-[#F2F2EE] py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionLabel label="INITIATE PROJECT" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 space-y-6"
          >
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-tight uppercase leading-[0.95]">
              START A<br />CONVERSATION.
            </h2>
            <p className="font-editorial text-base sm:text-lg text-[#F2F2EE]/85 max-w-xl font-light leading-relaxed">
              We welcome architectural commissions, residential inquiries, interior design collaborations, and artistic spatial consultations across Kerala and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-4 bg-[#F2F2EE] text-[#050505] px-8 py-5 font-mono text-sm sm:text-base font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 w-full justify-between"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="font-mono text-sm text-[#F2F2EE]/75 tracking-widest uppercase space-y-1 pt-4 border-t border-white/10 font-medium">
              <p className="text-[#F2F2EE]">{STUDIO_INFO.name}</p>
              <p>{STUDIO_INFO.location}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
