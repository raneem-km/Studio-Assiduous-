import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  parallaxOffset?: number; // Distance in px to travel vertically during scroll (default: 30)
  aspectRatio?: string;
  onClick?: () => void;
  'data-cursor'?: string;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  parallaxOffset = 30,
  aspectRatio = 'aspect-[16/10]',
  onClick,
  'data-cursor': dataCursor,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track vertical scroll progress across the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax Y-axis translation
  const y = useTransform(scrollYProgress, [0, 1], [-parallaxOffset, parallaxOffset]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      data-cursor={dataCursor}
      className={`relative overflow-hidden bg-[#0A0A0A] ${aspectRatio} ${containerClassName}`}
    >
      <motion.div
        style={{ y }}
        className="w-full h-[120%] -top-[10%] relative"
      >
        <motion.img
          src={src}
          alt={alt}
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className={`${className} transform-gpu will-change-transform`}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedImage;
