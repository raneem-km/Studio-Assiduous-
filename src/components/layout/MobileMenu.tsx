import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X, Mail, Phone } from 'lucide-react';
import { STUDIO_INFO } from '../../data/projects';
import { InstagramIcon, ThreadsIcon, YoutubeIcon, WhatsAppIcon } from '../ui/SocialIcons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'PROJECTS', path: '/projects' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'TEAM', path: '/team' },
    { label: 'CONTACT', path: '/contact' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 bg-[#050505] text-[#F2F2EE] flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/16 pb-4">
            <Link to="/" onClick={onClose} className="flex items-center gap-3.5 focus:outline-none">
              <img
                src="/brand/logo.png"
                alt="Studio Assiduous Logo"
                className="h-10 w-auto object-contain"
              />
              <div className="h-5 w-[1px] bg-white/20" />
              <span className="text-xs tracking-[0.25em] text-white font-medium uppercase mt-0.5 whitespace-nowrap">
                Studio Assiduous
              </span>
            </Link>

            <button
              onClick={onClose}
              className="p-3 text-[#F2F2EE] hover:text-[#8A8A86] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close menu"
            >
              <X size={26} strokeWidth={1.5} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="my-auto py-8 text-center space-y-5">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.04, duration: 0.35 }}
                >
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`inline-block font-display text-2xl sm:text-3xl font-light tracking-[0.15em] uppercase transition-all duration-300 ${
                      isActive ? 'text-[#F2F2EE] font-medium scale-105' : 'text-[#8A8A86] hover:text-[#F2F2EE]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}

            {/* Direct Contact CTA Button */}
            <div className="pt-4 max-w-xs mx-auto">
              <Link
                to="/contact"
                onClick={onClose}
                className="block border border-white/25 hover:border-white/60 bg-white/5 text-[#F2F2EE] py-3.5 px-6 font-mono text-xs tracking-[0.2em] uppercase transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Contact Details & Working Social Icons */}
          <div className="pt-6 border-t border-white/16 space-y-4 text-center">
            <div className="flex flex-col items-center gap-2 font-mono text-xs text-[#8A8A86] tracking-wider">
              <a href={`mailto:${STUDIO_INFO.email}`} className="inline-flex items-center gap-2 hover:text-[#F2F2EE] transition-colors">
                <Mail size={14} />
                <span>{STUDIO_INFO.email}</span>
              </a>
              <a href={`tel:${STUDIO_INFO.phone}`} className="inline-flex items-center gap-2 hover:text-[#F2F2EE] transition-colors">
                <Phone size={14} />
                <span>{STUDIO_INFO.phone}</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-center gap-5 pt-2">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 text-[#8A8A86] hover:text-[#F2F2EE] transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 text-[#8A8A86] hover:text-[#F2F2EE] transition-colors"
              >
                <WhatsAppIcon size={20} />
              </a>
              <a
                href={STUDIO_INFO.threadsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="p-2 text-[#8A8A86] hover:text-[#F2F2EE] transition-colors"
              >
                <ThreadsIcon size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 text-[#8A8A86] hover:text-[#F2F2EE] transition-colors"
              >
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
