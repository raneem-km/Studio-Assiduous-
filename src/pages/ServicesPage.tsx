import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../components/ui/SectionLabel';
import { PageTransition } from '../components/layout/PageTransition';

export const ServicesPage: React.FC = () => {
  const serviceSections = [
    {
      number: '01',
      title: 'ARCHITECTURE',
      subtitle: 'RESIDENTIAL VILLAS & SPATIAL MASTERPLANNING',
      description: 'Comprehensive architectural planning and design for bespoke private residences, villas, and commercial structures across Kerala. Our architectural approach emphasizes thermal comfort, natural ventilation, terracotta brick jali screens, and structural geometry.',
      image: '/projects/aakruti/cover.jpg?v=2',
      deliverables: ['Conceptual Masterplanning', 'Detailed Architectural Schemes', 'Structural & Material Specification', 'Site Supervision & Quality Audits']
    },
    {
      number: '02',
      title: 'INTERIOR DESIGN',
      subtitle: 'REFINED RESIDENTIAL & SPATIAL SUITES',
      description: 'Custom interior environments designed with spatial restraint and quiet luxury. We craft bespoke modular joinery, dark timber paneling, concealed lighting, sheer drapery, and curated furniture layouts.',
      image: '/projects/interior-2100/cover.jpg?v=2',
      deliverables: ['Interior Layout Schemes', 'Custom Kitchen & Joinery Design', 'Lighting & Ceiling Layouts', 'Material & Furniture Selection']
    },
    {
      number: '03',
      title: 'LANDSCAPE',
      subtitle: 'INTEGRATED VERDANT COURTYARDS & HARDSCAPES',
      description: 'Landscape design that connects architectural structures seamlessly with native Malabar vegetation. We incorporate permeable grass pavers, bamboo screens, cascading planter terraces, and peaceful water elements.',
      image: '/projects/meadow-view/cover.jpg?v=2',
      deliverables: ['Site Landscape Design', 'Hardscape & Permeable Paver Layouts', 'Tropical Planting Schemes', 'Courtyard & Outdoor Lighting']
    },
    {
      number: '04',
      title: 'ART',
      subtitle: 'SITE-SPECIFIC INSTALLATIONS & VISUALIZATIONS',
      description: 'Spatial artwork, custom architectural murals, and high-fidelity 3D architectural visual art that embody the philosophical ethos of Studio Assiduous.',
      image: '/projects/avni-house/cover.jpg?v=2',
      deliverables: ['Architectural Visualizations', 'Site-Specific Art Curation', 'Textural Wall Murals', 'Design Documentation']
    }
  ];

  return (
    <PageTransition>
      <main className="bg-[#050505] text-[#F2F2EE] pt-24 md:pt-28 pb-16 md:pb-24 px-5 sm:px-8 md:px-12 lg:px-16 2xl:px-24 min-h-screen">
        <div className="max-w-[1700px] mx-auto space-y-16 md:space-y-24">
          {/* Header */}
          <div className="space-y-6 border-b border-white/16 pb-8 md:pb-12">
            <SectionLabel label="SERVICES & DISCIPLINES" />
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-tight uppercase leading-[0.95]">
              OUR PRACTICE
            </h1>
            <p className="font-editorial text-base sm:text-lg text-[#F2F2EE]/85 max-w-2xl font-light leading-relaxed">
              Studio Assiduous provides end-to-end design consultations from initial conceptual sketches to site realization across four core disciplines.
            </p>
          </div>

          {/* 4 Large Service Sections */}
          <div className="space-y-16 md:space-y-28">
            {serviceSections.map((section, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-white/16 pb-24"
                >
                  {/* Text Details */}
                  <div className={`space-y-6 ${isEven ? 'lg:col-span-6' : 'lg:col-span-6 lg:order-2'}`}>
                    <div className="flex items-center gap-3 font-mono text-sm sm:text-base font-semibold text-[#F2F2EE]/75 tracking-widest uppercase">
                      <span>DISCIPLINE</span>
                    </div>

                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight uppercase">
                      {section.title}
                    </h2>

                    <p className="font-mono text-sm sm:text-base text-[#F2F2EE]/75 tracking-wider uppercase font-medium">
                      {section.subtitle}
                    </p>

                    <p className="font-editorial text-base sm:text-lg text-[#F2F2EE]/85 leading-relaxed font-light">
                      {section.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="pt-4 space-y-2 border-t border-white/10">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#F2F2EE] tracking-widest uppercase block mb-3">
                        SERVICES INCLUDED:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-sm text-[#F2F2EE]/80">
                        {section.deliverables.map((item) => (
                          <div key={item} className="flex items-center gap-2 font-medium">
                            <span className="text-white/60">+</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image Display */}
                  <div className={`bg-[#0B0B0B] border border-white/16 overflow-hidden aspect-[4/3] group relative cursor-pointer ${isEven ? 'lg:col-span-6' : 'lg:col-span-6 lg:order-1'}`}>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover filter brightness-95 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                    />
                  </div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </main>
    </PageTransition>
  );
};
