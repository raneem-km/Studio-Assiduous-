import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  delay?: number;
  stagger?: number;
  splitBy?: 'words' | 'lines';
  once?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { stagger: number; delay: number }) => ({
    transition: {
      staggerChildren: custom.stagger,
      delayChildren: custom.delay,
    },
  }),
};

const itemVariants: Variants = {
  hidden: {
    y: '100%',
    opacity: 0,
  },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  },
};

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  className = '',
  as: Tag = 'h2',
  delay = 0,
  stagger = 0.04,
  splitBy = 'words',
  once = true,
}) => {
  const items = splitBy === 'lines' ? text.split('\n') : text.split(' ');

  return (
    <Tag className={className}>
      <motion.span
        className="inline-block"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-40px' }}
        custom={{ stagger, delay }}
      >
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="overflow-hidden inline-block align-top leading-tight mr-[0.28em] last:mr-0"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block will-change-transform"
            >
              {item}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default AnimatedHeading;
