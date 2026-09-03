import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { STUDIO_INFO } from '../../data/projects';

export const InstagramSection: React.FC = () => {
  const gridImages = [
    { src: '/projects/hero-meadow.jpg?v=2', alt: 'Meadow View Architecture' },
    { src: '/projects/aakruti/cover.jpg?v=2', alt: 'Aakruti Residence' },
    { src: '/projects/interior-2100/cover.jpg?v=2', alt: 'Residence Interior 2100' },
    { src: '/projects/avni-house/cover.jpg?v=2', alt: 'Avni House Manjeri' },
    { src: '/projects/interior-2100/02.jpg?v=2', alt: 'Dining & Concrete Staircase' },
    { src: '/projects/grids-n-boxes/cover.jpg?v=2', alt: 'Grids n Boxes Residence' },
  ];

  return (
    <section className="bg-[#050505] text-[#F2F2EE] py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 2xl:px-24 border-b border-white/16">
      <div className="max-w-[1700px] mx-auto space-y-12 md:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-4">
            <SectionLabel label="STUDIO JOURNAL" />
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight uppercase">
              STUDIO FEED
            </h2>
          </div>

          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm sm:text-base font-medium text-[#F2F2EE] hover:text-white tracking-widest uppercase transition-colors"
          >
            <span>FOLLOW @{STUDIO_INFO.instagram}</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* 6-Column Refined Photography Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {gridImages.map((img, idx) => (
            <motion.a
              key={img.src}
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group block relative overflow-hidden bg-[#0B0B0B] aspect-square border border-white/10"
              data-cursor="INSTAGRAM"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-[#050505]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-mono text-[10px] tracking-widest text-[#F2F2EE] uppercase border border-white/20 px-3 py-1 bg-[#050505]/80">
                  VIEW ON INSTAGRAM ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
