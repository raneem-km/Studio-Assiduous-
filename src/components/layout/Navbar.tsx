import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'PROJECTS', path: '/projects' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'TEAM', path: '/team' },
    { label: 'CONTACT', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-sm border-white/16 py-3 md:py-4'
            : 'bg-transparent border-transparent py-5 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Left - Option 1: The Minimalist Divider */}
          <Link to="/" className="group flex items-center gap-3.5 sm:gap-4 focus:outline-none" aria-label="Studio Assiduous Home">
            {/* 1. The Logo Mark */}
            <img
              src="/brand/logo.png"
              alt="Studio Assiduous Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />

            {/* 2. The Subtle Vertical Divider */}
            <div className="h-5 sm:h-6 w-[1px] bg-white/20" />

            {/* 3. The Premium Firm Name */}
            <span className="text-xs sm:text-sm tracking-[0.25em] text-white font-medium uppercase mt-0.5 whitespace-nowrap transition-colors duration-300 group-hover:text-[#F2F2EE]/80">
              Studio Assiduous
            </span>
          </Link>

          {/* Desktop Nav Right */}
          <nav className="hidden md:flex items-center space-x-10 lg:space-x-12 font-mono text-sm lg:text-base tracking-[0.2em] font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1.5 transition-colors duration-300 ${
                    isActive ? 'text-[#F2F2EE] font-semibold' : 'text-[#F2F2EE]/80 hover:text-[#F2F2EE]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F2F2EE]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Icon Right */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-[#F2F2EE] hover:text-[#8A8A86] transition-colors p-2.5 focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};
