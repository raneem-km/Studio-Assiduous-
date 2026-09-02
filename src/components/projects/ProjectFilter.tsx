import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory
}) => {
  return (
    <div className="flex flex-wrap items-center gap-6 md:gap-10 font-mono text-sm sm:text-base tracking-[0.15em] font-medium border-b border-white/16 pb-4">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`relative py-2 uppercase transition-colors duration-300 focus:outline-none ${
              isActive ? 'text-[#F2F2EE] font-semibold' : 'text-[#F2F2EE]/60 hover:text-[#F2F2EE]'
            }`}
          >
            {cat}
            {isActive && (
              <motion.div
                layoutId="activeFilterUnderline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F2F2EE]"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
