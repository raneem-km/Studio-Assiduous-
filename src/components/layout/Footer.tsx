import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUp, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO } from '../../data/projects';
import { FooterModal } from '../ui/FooterModal';
import { InstagramIcon, ThreadsIcon, TwitterXIcon, YoutubeIcon, WhatsAppIcon } from '../ui/SocialIcons';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'sitemap' | 'privacy' | 'faq' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#F2F2EE] border-t border-white/16 pt-20 md:pt-28 pb-12 px-5 sm:px-8 md:px-12 lg:px-16 2xl:px-24 relative font-sans">
      <div className="max-w-[1700px] mx-auto space-y-16 md:space-y-20">
        {/* Massive Thin-Font Call to Action: LET'S TALK. */}
        <div className="border-b border-white/10 pb-12 md:pb-16">
          <Link
            to="/contact"
            className="group block"
            data-cursor="CONTACT"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="font-display font-light text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white/90 group-hover:text-white transition-colors uppercase leading-[0.95]">
                LET'S TALK.
              </h2>
              <div className="inline-flex items-center gap-3 text-gray-400 group-hover:text-white font-sans text-xs sm:text-sm tracking-[0.25em] uppercase transition-colors pb-2">
                <span>START A CONVERSATION</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* 3-Column CSS Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pt-2">
          {/* Column 1: Logo & Tagline (Left) */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src="/brand/logo.png"
                alt="Studio Assiduous Design Co."
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <div className="space-y-3">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
                {STUDIO_INFO.tagline}
              </p>
              <p className="font-sans text-sm text-gray-400 leading-relaxed font-light max-w-md">
                {STUDIO_INFO.placeholderCopy.footerAbout}
              </p>
            </div>

            <p className="font-sans text-xs uppercase tracking-widest text-gray-500 font-medium">
              MANJERI · MALAPPURAM, KERALA · INDIA
            </p>
          </div>

          {/* Column 2: Quick Links (Middle) */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
              NAVIGATION
            </h3>
            <ul className="space-y-3 font-sans text-sm text-gray-300">
              <li>
                <Link
                  to="/projects"
                  className="hover:text-white transition-colors inline-block tracking-wider uppercase"
                >
                  PROJECTS ARCHIVE
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors inline-block tracking-wider uppercase"
                >
                  DISCIPLINES & SERVICES
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors inline-block tracking-wider uppercase"
                >
                  THE STUDIO
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-white transition-colors inline-block tracking-wider uppercase"
                >
                  OUR TEAM
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors inline-block tracking-wider uppercase"
                >
                  GET IN TOUCH
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address (Right) */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold">
              STUDIO CONTACT
            </h3>

            {/* Physical Address */}
            <p className="font-sans text-sm text-gray-300 leading-relaxed font-light">
              {STUDIO_INFO.fullAddress}
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-2.5 font-sans text-sm text-gray-300">
              <div>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-gray-400" />
                  <span>{STUDIO_INFO.email}</span>
                </a>
              </div>
              <div>
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-gray-400" />
                  <span>{STUDIO_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Borderless Social Icons Row */}
            <div className="pt-2">
              <span className="block font-sans text-[11px] uppercase tracking-[0.2em] text-gray-400 font-semibold mb-3">
                CONNECT
              </span>
              <div className="flex items-center gap-5">
                <a
                  href={STUDIO_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                >
                  <InstagramIcon size={20} />
                </a>

                <a
                  href={STUDIO_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                >
                  <WhatsAppIcon size={20} />
                </a>

                <a
                  href={STUDIO_INFO.threadsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Threads"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                >
                  <ThreadsIcon size={20} />
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                >
                  <TwitterXIcon size={20} />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                >
                  <YoutubeIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Utility & Legal Row */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-xs tracking-wider text-gray-400">
          {/* Policy Links */}
          <div className="flex items-center gap-6 uppercase">
            <button
              onClick={() => setModalType('sitemap')}
              className="hover:text-white transition-colors focus:outline-none cursor-pointer"
            >
              SITEMAP
            </button>
            <span>·</span>
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-white transition-colors focus:outline-none cursor-pointer"
            >
              PRIVACY POLICY
            </button>
            <span>·</span>
            <button
              onClick={() => setModalType('faq')}
              className="hover:text-white transition-colors focus:outline-none cursor-pointer"
            >
              FAQ
            </button>
          </div>

          {/* Copyright Text */}
          <div className="text-center font-normal">
            © 2026 Studio Assiduous | All Rights Reserved
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none uppercase cursor-pointer"
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
