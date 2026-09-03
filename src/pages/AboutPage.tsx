import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/ui/SectionLabel';
import { PageTransition } from '../components/layout/PageTransition';
import { STUDIO_INFO } from '../data/projects';

export const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <main className="bg-[#050505] text-[#F2F2EE] pt-24 md:pt-28 pb-16 md:pb-24 px-5 sm:px-8 md:px-12 lg:px-16 2xl:px-24 min-h-screen">
        <div className="max-w-[1700px] mx-auto space-y-16 md:space-y-24">
          {/* Header */}
          <div className="space-y-6">
            <SectionLabel label="STUDIO PROFILE" />
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-tight uppercase leading-[0.95]">
              STUDIO<br />ASSIDUOUS
            </h1>
            <p className="font-mono text-sm sm:text-base text-[#F2F2EE]/75 tracking-[0.25em] uppercase font-medium">
              ARCHITECTURAL FIRM · MANJERI · MALAPPURAM, KERALA · INDIA
            </p>
          </div>

          {/* Large Hero Studio Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden bg-[#0B0B0B] border border-white/16 aspect-[21/9]"
          >
            <img
              src="/projects/meadow-view/cover.jpg?v=2"
              alt="Studio Assiduous Architecture"
              className="w-full h-full object-cover filter brightness-95"
            />
          </motion.div>

          {/* Philosophy Statement */}
          <div className="max-w-4xl space-y-8">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight leading-snug">
              OPERATING AT THE INTERSECTION OF STRUCTURAL RIGOR, MATERIAL HONESTY, AND SPATIAL SERENITY.
            </h2>
            <div className="space-y-6 font-editorial text-base sm:text-lg text-[#F2F2EE]/85 font-light leading-relaxed">
              <p>
                Studio Assiduous is a multidisciplinary architectural practice rooted in Manjeri, Malappuram, Kerala. We explore architecture, bespoke interiors, landscape integration, and spatial art through an uncompromising commitment to climatic sensitivity, proportional clarity, and tactile material resonance.
              </p>
              <p>
                Every project begins with a careful reading of place, topography, and the micro-climate of Kerala. We reject generic trends in favor of timeless spaces that age with dignity—weaving brick masonry, natural clay roof tiles, exposed structural concrete, and handcrafted timber into contemporary domestic and commercial narratives.
              </p>
            </div>
          </div>

          {/* Key Principles Grid */}
          <div className="space-y-8 border-t border-white/16 pt-12 md:pt-16">
            <span className="font-mono text-sm sm:text-base font-semibold text-[#F2F2EE]/75 tracking-widest uppercase">
              GUIDING PRINCIPLES
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'CLIMATIC SENSITIVITY', desc: 'Passive cooling, deep roof overhangs, cross-ventilation, and terracotta brick jali screens tailored to Kerala tropical rainfall and sunlight.' },
                { title: 'MATERIAL INTEGRITY', desc: 'Honest expression of raw materials—exposed laterite, concrete, warm teak joinery, and natural slate that develop character over time.' },
                { title: 'SPATIAL ARTISTRY', desc: 'Interiors and landscapes conceived as extensions of architecture, crafting fluid transitions between indoor sanctuary and lush garden courtyards.' },
              ].map((principle) => (
                <div key={principle.title} className="border border-white/16 p-8 space-y-4 bg-[#080808]">
                  <h3 className="font-display text-xl sm:text-2xl font-light tracking-wide uppercase text-white">
                    {principle.title}
                  </h3>
                  <p className="font-editorial text-sm sm:text-base text-[#F2F2EE]/80 leading-relaxed font-light">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Studio Image & Location Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/16 pt-12 md:pt-16">
            <div className="lg:col-span-6 bg-[#0B0B0B] border border-white/16 overflow-hidden aspect-[4/3] group relative cursor-pointer">
              <img
                src="/projects/interior-2100/02.jpg?v=2"
                alt="Studio Assiduous Staircase Detail"
                className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-sm sm:text-base font-semibold text-[#F2F2EE]/75 tracking-widest uppercase">
                LOCATION & REGION
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light uppercase">
                MANJERI, KERALA
              </h2>
              <p className="font-editorial text-base sm:text-lg text-[#F2F2EE]/85 leading-relaxed font-light">
                Operating out of Manjeri, Malappuram district, Studio Assiduous draws deep inspiration from Kerala's rich architectural heritage—reinterpreting steep sloping roofs, deep overhangs, and shaded verandahs into quiet, contemporary spaces.
              </p>
              <div className="pt-4 border-t border-white/10 font-mono text-sm text-[#F2F2EE] tracking-widest uppercase font-medium">
                STUDIO ASSIDUOUS ARCHITECTURAL FIRM · {STUDIO_INFO.location}
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};
