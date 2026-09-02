import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { ProjectCard } from '../projects/ProjectCard';
import { PROJECTS } from '../../data/projects';

export const SelectedWork: React.FC = () => {
  const selectedProjects = PROJECTS.filter((p) => p.featured).slice(0, 4);

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
    <section className="bg-[#050505] text-[#F2F2EE] py-24 md:py-36 px-6 md:px-12 border-b border-white/16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-4">
            <SectionLabel label="PORTFOLIO" />
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight uppercase">
              OUR PROJECTS
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm sm:text-base font-medium text-[#F2F2EE] hover:text-white tracking-widest uppercase transition-colors"
          >
            <span>VIEW ALL PROJECTS ({PROJECTS.length})</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Editorial Layout of Projects */}
        <div className="space-y-24 md:space-y-36">
          {selectedProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
              layoutStyle={getStyleForIndex(idx)}
            />
          ))}
        </div>

        {/* Bottom CTA to Projects Archive */}
        <div className="pt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 font-mono text-sm sm:text-base font-semibold text-[#F2F2EE] border border-white/20 hover:bg-white/10 px-10 py-5 tracking-[0.25em] uppercase transition-all duration-300"
          >
            <span>EXPLORE COMPLETE ARCHIVE</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
