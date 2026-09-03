import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { AnimatedHeading } from '../ui/AnimatedHeading';
import { STUDIO_INFO } from '../../data/projects';

export const ServicesOverview: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services = [
    {
      number: '01',
      title: 'ARCHITECTURE',
      desc: 'Residential villas, commercial structures, and spatial masterplanning guided by climate responsiveness, material integrity, and structural geometry.'
    },
    {
      number: '02',
      title: 'INTERIOR DESIGN',
      desc: 'Refined interior suites, custom cabinetry, lighting design, and curated tactile surfaces crafted for calm everyday living.'
    },
    {
      number: '03',
      title: 'LANDSCAPE',
      desc: 'Harmonious exterior courtyards, permeable hardscapes, native tropical planting, and seamless indoor-outdoor spatial transitions.'
    },
    {
      number: '04',
      title: 'ART',
      desc: 'Site-specific artistic installations, architectural visualizations, and spatial art curation designed with architectural intent.'
    }
  ];

  return (
    <section className="bg-[#050505] text-[#F2F2EE] py-16 md:py-24 px-6 md:px-12 border-b border-white/16">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        <div className="space-y-4">
          <SectionLabel label="DISCIPLINES & SERVICES" />
          <AnimatedHeading
            text="CORE DISCIPLINES"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight uppercase text-white"
          />
          <p className="font-editorial text-base sm:text-lg text-[#F2F2EE]/80 max-w-3xl leading-relaxed font-light pt-2">
            {STUDIO_INFO.placeholderCopy.servicesLeadIn}
          </p>
        </div>

        {/* Minimal List with Thin Horizontal Lines */}
        <div className="border-t border-white/16">
          {services.map((service, idx) => (
            <Link
              key={service.title}
              to="/services"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group block border-b border-white/16 py-8 md:py-12 transition-colors"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                {/* Title */}
                <div className="md:col-span-6">
                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-tight group-hover:translate-x-3 transition-transform duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Short Description */}
                <div className="md:col-span-5 font-editorial text-sm sm:text-base text-[#F2F2EE]/80 leading-relaxed font-light">
                  {service.desc}
                </div>

                {/* Arrow indicator */}
                <div className="md:col-span-1 flex justify-end">
                  <ArrowUpRight
                    size={24}
                    className={`text-[#F2F2EE] transition-transform duration-300 ${
                      hoveredIdx === idx ? 'translate-x-1 -translate-y-1 opacity-100' : 'opacity-40'
                    }`}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
