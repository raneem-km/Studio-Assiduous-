import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor]');
      if (projectCard) {
        setIsHovered(true);
        setHoverText(projectCard.getAttribute('data-cursor') || 'VIEW');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full flex items-center justify-center border border-white/40 mix-blend-difference hidden md:flex"
      animate={{
        x: position.x - (isHovered ? 36 : 12),
        y: position.y - (isHovered ? 36 : 12),
        width: isHovered ? 72 : 24,
        height: isHovered ? 72 : 24,
        backgroundColor: isHovered ? 'rgba(242, 242, 238, 0.15)' : 'transparent',
      }}
      transition={{
        type: 'spring',
        damping: 28,
        stiffness: 350,
        mass: 0.2
      }}
    >
      {isHovered && (
        <span className="text-[10px] font-mono tracking-widest text-[#F2F2EE] uppercase">
          {hoverText}
        </span>
      )}
    </motion.div>
  );
};
