import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/ui/SectionLabel';
import { PageTransition } from '../components/layout/PageTransition';
import { STUDIO_INFO } from '../data/projects';

export const AboutPage: React.FC = () => {
  return (
    <PageTransition>
      <main className="bg-[#050505] text-[#F2F2EE] pt-24 md:pt-28 pb-16 md:pb-24 px-6 md:px-12 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
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
              src="/projects/meadow-view/cover.jpg"
              alt="Studio Assiduous Architecture"
              className="w-full h-full object-cover filter brightness-95"
            />
          </motion.div>

          {/* Philosophy & Approach Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-sm sm:text-base font-semibold text-[#F2F2EE]/75 tracking-widest uppercase">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light uppercase">
                SPATIAL SERENITY & MATERIAL HONESTY
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 font-editorial text-lg sm:text-xl text-[#F2F2EE]/85 leading-relaxed font-light">
              <p>
                Founded in Manjeri, Kerala, Studio Assiduous operates as a multidisciplinary architecture and design practice. We explore the dialogue between traditional vernacular wisdom and minimalist contemporary geometry.
              </p>
              <p>
                Our projects are defined by tactile material palettes—exposed clay brick jali screens, natural timber joinery, raw concrete surfaces, and permeable green courtyards designed for Malabar climate conditions.
              </p>
            </div>
          </div>

          {/* Four Disciplines Grid */}
          <div className="space-y-12 border-t border-white/16 pt-16">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm sm:text-base font-semibold text-[#F2F2EE]/75 tracking-widest uppercase">
                CORE DISCIPLINES
              </span>
              <span className="font-mono text-sm text-[#F2F2EE]/60 tracking-wider">MANJERI · KERALA</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {STUDIO_INFO.disciplines.map((disc) => (
                <div
                  key={disc}
                  className="p-8 bg-[#0B0B0B] border border-white/16 space-y-4"
                >
                  <h3 className="font-display text-2xl font-light tracking-wide uppercase">
                    {disc}
                  </h3>
                  <p className="font-editorial text-sm sm:text-base text-[#F2F2EE]/80 leading-relaxed font-light">
                    Considered spatial design tailored to user intent, environmental harmony, and architectural precision.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Studio Image & Location Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/16 pt-12 md:pt-16">
            <div className="lg:col-span-6 bg-[#0B0B0B] border border-white/16 overflow-hidden aspect-[4/3] group relative cursor-pointer">
              <img
                src="/projects/interior-2100/02.jpg"
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
