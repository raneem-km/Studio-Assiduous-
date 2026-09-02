import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  projectTitle?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  projectTitle = ''
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images.length) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-[#050505] flex flex-col justify-between p-4 md:p-8"
        onClick={onClose}
      >
        {/* Lightbox Header Bar */}
        <div
          className="flex items-center justify-between z-10 w-full max-w-7xl mx-auto py-2 border-b border-white/10 font-mono text-xs text-[#8A8A86] tracking-widest uppercase"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {projectTitle && <span className="text-[#F2F2EE] mr-3">{projectTitle}</span>}
            <span>
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#F2F2EE] hover:text-[#8A8A86] transition-colors focus:outline-none flex items-center gap-1"
            aria-label="Close Lightbox"
          >
            <span>CLOSE</span>
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Center Image Container */}
        <div
          className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${projectTitle} detail ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-h-[82vh] max-w-full object-contain shadow-2xl select-none"
          />

          {/* Previous / Next Buttons overlay */}
          {images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-2 md:left-6 p-4 text-[#F2F2EE] hover:text-[#8A8A86] bg-[#050505]/60 hover:bg-[#050505] border border-white/16 transition-all focus:outline-none"
                aria-label="Previous Image"
              >
                <ArrowLeft size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={onNext}
                className="absolute right-2 md:right-6 p-4 text-[#F2F2EE] hover:text-[#8A8A86] bg-[#050505]/60 hover:bg-[#050505] border border-white/16 transition-all focus:outline-none"
                aria-label="Next Image"
              >
                <ArrowRight size={20} strokeWidth={1.5} />
              </button>
            </>
          )}
        </div>

        {/* Lightbox Footer Bar */}
        <div
          className="w-full max-w-7xl mx-auto pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#8A8A86] tracking-widest uppercase"
          onClick={(e) => e.stopPropagation()}
        >
          <span>STUDIO ASSIDUOUS ARCHITECTURE GALLERY</span>
          <span>PRESS ESC OR CLICK OUTSIDE TO CLOSE</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
