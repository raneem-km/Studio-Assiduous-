import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { STUDIO_INFO } from '../../data/projects';
import { FooterModal } from '../ui/FooterModal';
import { InstagramIcon, ThreadsIcon, TwitterXIcon, YoutubeIcon, WhatsAppIcon } from '../ui/SocialIcons';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'sitemap' | 'privacy' | 'faq' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#F2F2EE] border-t border-white/16 pt-20 pb-12 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Centered Brand & Contact Section */}
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          {/* Prominent Logo */}
          <Link to="/" className="inline-block group">
            <img
              src="/brand/logo.png"
              alt="Studio Assiduous Design Co."
              className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Contact Bar (Email & Phone) */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-mono text-sm sm:text-base text-[#F2F2EE]/90">
            <a
              href={`mailto:${STUDIO_INFO.email}`}
              className="inline-flex items-center gap-2.5 hover:text-white transition-colors border-b border-transparent hover:border-white/40 pb-0.5"
            >
              <Mail size={18} className="text-[#F2F2EE]/70" />
              <span>{STUDIO_INFO.email}</span>
            </a>

            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="inline-flex items-center gap-2.5 hover:text-white transition-colors border-b border-transparent hover:border-white/40 pb-0.5"
            >
              <Phone size={18} className="text-[#F2F2EE]/70" />
              <span>{STUDIO_INFO.phone}</span>
            </a>
          </div>

          {/* Physical Address */}
          <p className="font-mono text-xs sm:text-sm text-[#8A8A86] tracking-wider max-w-lg leading-relaxed">
            {STUDIO_INFO.fullAddress}
          </p>

          {/* Social Icons Row */}
          <div className="flex items-center justify-center gap-6 sm:gap-8 pt-2">
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 bg-[#0B0B0B] border border-white/16 hover:border-white/50 text-[#F2F2EE] hover:scale-110 transition-all duration-300"
            >
              <InstagramIcon size={20} />
            </a>

            <a
              href={STUDIO_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-3 bg-[#0B0B0B] border border-white/16 hover:border-white/50 text-[#F2F2EE] hover:scale-110 transition-all duration-300"
            >
              <WhatsAppIcon size={20} />
            </a>

            <a
              href={STUDIO_INFO.threadsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="p-3 bg-[#0B0B0B] border border-white/16 hover:border-white/50 text-[#F2F2EE] hover:scale-110 transition-all duration-300"
            >
              <ThreadsIcon size={20} />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="p-3 bg-[#0B0B0B] border border-white/16 hover:border-white/50 text-[#F2F2EE] hover:scale-110 transition-all duration-300"
            >
              <TwitterXIcon size={20} />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-3 bg-[#0B0B0B] border border-white/16 hover:border-white/50 text-[#F2F2EE] hover:scale-110 transition-all duration-300"
            >
              <YoutubeIcon size={20} />
            </a>
          </div>
        </div>

        {/* Footer Navigation & Legal Row */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs tracking-widest text-[#8A8A86]">
          {/* Policy Links */}
          <div className="flex items-center gap-6 sm:gap-8 uppercase">
            <button
              onClick={() => setModalType('sitemap')}
              className="hover:text-[#F2F2EE] transition-colors focus:outline-none cursor-pointer"
            >
              SITEMAP
            </button>
            <span>·</span>
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-[#F2F2EE] transition-colors focus:outline-none cursor-pointer"
            >
              PRIVACY POLICY
            </button>
            <span>·</span>
            <button
              onClick={() => setModalType('faq')}
              className="hover:text-[#F2F2EE] transition-colors focus:outline-none cursor-pointer"
            >
              FAQ
            </button>
          </div>

          {/* Copyright Text */}
          <div className="text-center">
            © 2026 Studio Assiduous | All Rights Reserved
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#F2F2EE] transition-colors focus:outline-none uppercase cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* Interactive Modal for Sitemap, Privacy, FAQ */}
      <FooterModal type={modalType} onClose={() => setModalType(null)} />
    </footer>
  );
};
