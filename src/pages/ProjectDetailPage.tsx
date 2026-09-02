import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Lightbox } from '../components/projects/Lightbox';
import { PROJECTS } from '../data/projects';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[currentIndex];

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-[#050505] text-[#F2F2EE] pt-40 px-6 text-center space-y-6 font-mono text-xs tracking-widest uppercase">
          <p>PROJECT NOT FOUND.</p>
          <Link to="/projects" className="underline hover:text-[#8A8A86]">
            RETURN TO PROJECTS ARCHIVE
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Previous and Next Projects calculation
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageTransition>
      <main className="bg-[#050505] text-[#F2F2EE] pt-32 pb-36 px-6 md:px-12 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Top Breadcrumb & Section Label */}
          <div className="flex items-center justify-between border-b border-white/16 pb-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-sm sm:text-base font-semibold text-[#F2F2EE] hover:text-white tracking-widest uppercase transition-colors"
            >
              <ArrowLeft size={16} />
              <span>PROJECTS ARCHIVE</span>
            </Link>

            <SectionLabel label="PROJECT SPECIFICATION" />
          </div>

          {/* Project Title & Header Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-tight uppercase leading-[0.95]">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="font-mono text-sm sm:text-base text-[#F2F2EE]/75 tracking-wider uppercase font-medium">
                  {project.subtitle}
                </p>
              )}
            </div>

            {/* Sidebar Metadata */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-6 pt-2 font-mono text-sm sm:text-base text-[#F2F2EE]/85 tracking-wider border-t lg:border-t-0 lg:border-l border-white/16 lg:pl-8">
              <div>
                <span className="text-[#F2F2EE] font-bold block uppercase mb-1 text-xs sm:text-sm tracking-widest text-[#8A8A86]">CATEGORY</span>
                <p className="font-medium text-[#F2F2EE]">{project.category}</p>
              </div>

              <div>
                <span className="text-[#F2F2EE] font-bold block uppercase mb-1 text-xs sm:text-sm tracking-widest text-[#8A8A86]">LOCATION</span>
                <p className="font-medium text-[#F2F2EE]">{project.location}</p>
              </div>

              {project.year && (
                <div>
                  <span className="text-[#F2F2EE] font-bold block uppercase mb-1 text-xs sm:text-sm tracking-widest text-[#8A8A86]">YEAR</span>
                  <p className="font-medium text-[#F2F2EE]">{project.year}</p>
                </div>
              )}

              {project.area && (
                <div>
                  <span className="text-[#F2F2EE] font-bold block uppercase mb-1 text-xs sm:text-sm tracking-widest text-[#8A8A86]">AREA</span>
                  <p className="font-medium text-[#F2F2EE]">{project.area}</p>
                </div>
              )}

              {project.client && (
                <div className="col-span-2">
                  <span className="text-[#F2F2EE] font-bold block uppercase mb-1 text-xs sm:text-sm tracking-widest text-[#8A8A86]">CLIENT</span>
                  <p className="font-medium text-[#F2F2EE]">{project.client}</p>
                </div>
              )}

              {project.services && project.services.length > 0 && (
                <div className="col-span-2">
                  <span className="text-[#F2F2EE] font-bold block uppercase mb-1 text-xs sm:text-sm tracking-widest text-[#8A8A86]">SERVICES</span>
                  <p className="font-medium text-[#F2F2EE]">{project.services.join(' · ')}</p>
                </div>
              )}
            </div>
          </div>

          {/* Hero Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden bg-[#0B0B0B] border border-white/16 cursor-pointer group"
            onClick={() => handleOpenLightbox(0)}
            data-cursor="EXPAND"
          >
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-auto max-h-[85vh] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-4 right-4 bg-[#050505]/80 text-[#F2F2EE] p-3 border border-white/16 opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 size={18} />
            </div>
          </motion.div>

          {/* Project Description */}
          {project.description && (
            <div className="max-w-3xl space-y-6 pt-4">
              <span className="font-mono text-sm sm:text-base font-semibold text-[#F2F2EE]/75 tracking-widest uppercase">
                SPATIAL SYNOPSIS
              </span>
              <p className="font-editorial text-lg sm:text-xl text-[#F2F2EE] leading-relaxed font-light">
                {project.description}
              </p>
            </div>
          )}

          {/* Editorial Visual Gallery */}
          <div className="space-y-12 pt-8">
            <span className="font-mono text-sm sm:text-base font-semibold text-[#F2F2EE] tracking-widest uppercase block border-b border-white/16 pb-4">
              VISUAL GALLERY ({project.images.length})
            </span>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {project.images.map((imgSrc, imgIdx) => {
                // Vary gallery grid layout
                const isFull = imgIdx % 3 === 0;

                return (
                  <motion.div
                    key={imgSrc}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: imgIdx * 0.1 }}
                    className={`relative overflow-hidden bg-[#0B0B0B] border border-white/16 cursor-pointer group ${
                      isFull ? 'md:col-span-12' : 'md:col-span-6'
                    }`}
                    onClick={() => handleOpenLightbox(imgIdx)}
                    data-cursor="VIEW"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={imgSrc}
                        alt={`${project.title} slide ${imgIdx + 1}`}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Project Bottom Navigation */}
          <div className="pt-24 border-t border-white/16 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Previous Project */}
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group block space-y-2 p-6 border border-white/10 hover:border-white/30 transition-all bg-[#0B0B0B]/50"
            >
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#8A8A86] tracking-widest uppercase">
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                <span>PREVIOUS PROJECT</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-light text-[#F2F2EE] group-hover:text-white uppercase">
                {prevProject.title}
              </h4>
            </Link>

            {/* Next Project */}
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group block space-y-2 p-6 border border-white/10 hover:border-white/30 transition-all bg-[#0B0B0B]/50 text-right sm:text-right"
            >
              <div className="inline-flex items-center justify-end gap-2 font-mono text-xs text-[#8A8A86] tracking-widest uppercase w-full">
                <span>NEXT PROJECT</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-light text-[#F2F2EE] group-hover:text-white uppercase">
                {nextProject.title}
              </h4>
            </Link>
          </div>
        </div>

        {/* Fullscreen Interactive Lightbox */}
        <Lightbox
          isOpen={lightboxOpen}
          images={project.images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((prev) => (prev - 1 + project.images.length) % project.images.length)}
          onNext={() => setLightboxIndex((prev) => (prev + 1) % project.images.length)}
          projectTitle={project.title}
        />
      </main>
    </PageTransition>
  );
};
