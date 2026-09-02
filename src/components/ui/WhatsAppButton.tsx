import React from 'react';
import { Link } from 'react-router-dom';
import { STUDIO_INFO } from '../../data/projects';
import { WhatsAppIcon } from './SocialIcons';

export const WhatsAppButton: React.FC = () => {
  const isBlank = STUDIO_INFO.whatsappUrl === '#' || !STUDIO_INFO.whatsappUrl;

  if (isBlank) {
    return (
      <Link
        to="/contact"
        aria-label="Contact Studio Assiduous"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[#0B0B0B] text-[#F2F2EE] hover:bg-[#1A1A1A] border border-white/30 px-4 py-3 shadow-2xl backdrop-blur-md group transition-all duration-300 hover:scale-105"
      >
        <div className="relative flex items-center justify-center">
          <WhatsAppIcon size={22} className="text-[#25D366] group-hover:brightness-110 transition-all" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#25D366] rounded-full animate-ping" />
        </div>
        <span className="hidden sm:inline font-mono text-xs tracking-widest uppercase font-semibold text-[#F2F2EE]">
          WHATSAPP
        </span>
      </Link>
    );
  }

  return (
    <a
      href={STUDIO_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Studio Assiduous on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-[#0B0B0B] text-[#F2F2EE] hover:bg-[#1A1A1A] border border-white/30 px-4 py-3 shadow-2xl backdrop-blur-md group transition-all duration-300 hover:scale-105"
    >
      <div className="relative flex items-center justify-center">
        <WhatsAppIcon size={22} className="text-[#25D366] group-hover:brightness-110 transition-all" />
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#25D366] rounded-full animate-ping" />
      </div>
      <span className="hidden sm:inline font-mono text-xs tracking-widest uppercase font-semibold text-[#F2F2EE]">
        WHATSAPP
      </span>
    </a>
  );
};
