import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  layoutStyle?: 'full' | 'split-left' | 'split-right' | 'compact';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  layoutStyle = 'full'
}) => {

  // Variations in layout composition
  const getContainerLayout = () => {
    switch (layoutStyle) {
      case 'split-left':
        return 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-center';
      case 'split-right':
        return 'grid grid-cols-1 lg:grid-cols-12 gap-8 items-center dir-rtl';
      case 'compact':
        return 'flex flex-col space-y-4';
      default:
        return 'flex flex-col space-y-6';
    }
  };

  const getImageSpan = () => {
    if (layoutStyle === 'split-left') return 'lg:col-span-7';
    if (layoutStyle === 'split-right') return 'lg:col-span-7 ltr';
    return 'w-full';
  };

  const getMetaSpan = () => {
    if (layoutStyle === 'split-left') return 'lg:col-span-5 space-y-4';
    if (layoutStyle === 'split-right') return 'lg:col-span-5 space-y-4 ltr';
    return 'flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group block"
    >
      <Link
        to={`/projects/${project.slug}`}
        className={getContainerLayout()}
        data-cursor="VIEW"
      >
        {/* Project Image Frame */}
        <div className={`relative overflow-hidden bg-[#0B0B0B] ${getImageSpan()}`}>
          <div className="relative overflow-hidden aspect-[16/10] w-full">
            <motion.img
              src={project.cover}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
              <h4 className="text-white text-lg tracking-wide font-display">{project.title}</h4>
            </div>
          </div>
        </div>

        {/* Metadata section */}
        <div className={getMetaSpan()}>
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-sm sm:text-base text-[#F2F2EE]/75 tracking-wider uppercase font-medium">
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.location}</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#F2F2EE] tracking-tight group-hover:text-white transition-colors">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="font-mono text-sm sm:text-base text-[#8A8A86] tracking-wide">
                {project.subtitle}
              </p>
            )}
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-[#F2F2EE] tracking-widest uppercase pt-2 group-hover:translate-x-1 transition-transform">
            <span>VIEW PROJECT</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
