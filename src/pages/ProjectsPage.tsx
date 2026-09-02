import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectFilter } from '../components/projects/ProjectFilter';
import { PageTransition } from '../components/layout/PageTransition';
import { PROJECTS } from '../data/projects';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'ARCHITECTURE', 'INTERIORS', 'LANDSCAPE', 'ART'];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'INTERIORS') return p.category === 'Interior Design';
    return p.category.toUpperCase() === activeCategory;
  });

  const getStyleForIndex = (index: number): 'full' | 'split-left' | 'split-right' | 'compact' => {
    const styles: ('full' | 'split-left' | 'split-right')[] = [
      'full',
      'split-left',
      'split-right',
      'full'
    ];
    return styles[index % styles.length];
  };

  return (
    <PageTransition>
      <main className="bg-[#050505] text-[#F2F2EE] pt-32 pb-36 px-6 md:px-12 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="space-y-6">
            <SectionLabel label="PORTFOLIO" />
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-tight uppercase">
              PROJECTS
            </h1>
            <p className="font-editorial text-base sm:text-lg text-[#F2F2EE]/85 max-w-2xl font-light leading-relaxed">
              A curated catalog of architectural residences, interior suites, landscape masterplans, and spatial artwork across Kerala.
            </p>
          </div>

          {/* Category Filter */}
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {/* Project List / Grid */}
          <motion.div layout className="space-y-24 md:space-y-36 pt-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProjectCard
                      project={project}
                      index={idx}
                      layoutStyle={getStyleForIndex(idx)}
                    />
                  </motion.div>
                ))
              ) : (
                <div className="py-20 text-center font-mono text-xs text-[#8A8A86] tracking-widest uppercase">
                  NO PROJECTS FOUND IN THIS CATEGORY.
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};
