import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { STUDIO_INFO, PROJECTS } from '../../data/projects';

interface FooterModalProps {
  type: 'sitemap' | 'privacy' | 'faq' | null;
  onClose: () => void;
}

export const FooterModal: React.FC<FooterModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050505]/90 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#0B0B0B] border border-white/20 text-[#F2F2EE] w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6 sm:p-10 shadow-2xl z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-[#8A8A86] hover:text-[#F2F2EE] transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X size={22} />
          </button>

          {type === 'sitemap' && (
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="font-mono text-xs tracking-widest uppercase text-[#8A8A86]">STUDIO ASSIDUOUS</span>
                <h2 className="font-display text-3xl font-light uppercase">SITEMAP</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-sm tracking-wider">
                <div className="space-y-3">
                  <span className="text-[#8A8A86] text-xs uppercase block border-b border-white/10 pb-2">MAIN PAGES</span>
                  <div className="flex flex-col space-y-2">
                    <Link to="/" onClick={onClose} className="hover:text-white transition-colors">01. HOME</Link>
                    <Link to="/projects" onClick={onClose} className="hover:text-white transition-colors">02. PROJECTS</Link>
                    <Link to="/about" onClick={onClose} className="hover:text-white transition-colors">03. ABOUT</Link>
                    <Link to="/services" onClick={onClose} className="hover:text-white transition-colors">04. SERVICES</Link>
                    <Link to="/team" onClick={onClose} className="hover:text-white transition-colors">05. TEAM</Link>
                    <Link to="/contact" onClick={onClose} className="hover:text-white transition-colors">06. CONTACT</Link>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-[#8A8A86] text-xs uppercase block border-b border-white/10 pb-2">PROJECT DIRECTORY</span>
                  <div className="flex flex-col space-y-2">
                    {PROJECTS.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/projects/${p.slug}`}
                        onClick={onClose}
                        className="hover:text-white transition-colors text-xs text-[#8A8A86] hover:text-[#F2F2EE]"
                      >
                        · {p.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {type === 'privacy' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs tracking-widest uppercase text-[#8A8A86]">STUDIO ASSIDUOUS</span>
                <h2 className="font-display text-3xl font-light uppercase">PRIVACY POLICY</h2>
              </div>
              <div className="space-y-4 font-editorial text-sm sm:text-base text-[#8A8A86] font-light leading-relaxed">
                <p>
                  Studio Assiduous Design Co. respects the confidentiality and privacy of our clients, prospective patrons, and digital visitors.
                </p>
                <p>
                  Any information submitted via our consultation and project inquiry channels—including project scopes, site locations, emails, and phone contacts—is utilized solely for direct architectural consultations and is never sold or shared with third parties.
                </p>
                <p>
                  For inquiries regarding data integrity or consultation records, please contact us at <a href={`mailto:${STUDIO_INFO.email}`} className="text-[#F2F2EE] underline">{STUDIO_INFO.email}</a>.
                </p>
              </div>
            </div>
          )}

          {type === 'faq' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs tracking-widest uppercase text-[#8A8A86]">STUDIO ASSIDUOUS</span>
                <h2 className="font-display text-3xl font-light uppercase">FREQUENTLY ASKED QUESTIONS</h2>
              </div>
              <div className="space-y-6 font-mono text-xs sm:text-sm">
                <div className="space-y-2 border-b border-white/10 pb-4">
                  <p className="text-[#F2F2EE] font-medium uppercase tracking-wider">What regions does Studio Assiduous serve?</p>
                  <p className="text-[#8A8A86] font-editorial text-sm leading-relaxed">We undertake architectural, interior, and landscape commissions across Kerala (Malappuram, Kozhikode, Thrissur, Ernakulam, Trivandrum, Kannur, Wayanad) and select pan-India projects.</p>
                </div>
                <div className="space-y-2 border-b border-white/10 pb-4">
                  <p className="text-[#F2F2EE] font-medium uppercase tracking-wider">How do we initiate a project?</p>
                  <p className="text-[#8A8A86] font-editorial text-sm leading-relaxed">Reach out through our inquiry form, direct phone call, WhatsApp, or email with your site details and tentative brief. We schedule an initial spatial design consultation.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[#F2F2EE] font-medium uppercase tracking-wider">Do you handle interior & landscape as well as architecture?</p>
                  <p className="text-[#8A8A86] font-editorial text-sm leading-relaxed">Yes. We specialize in comprehensive turnkey design where architecture, interior materiality, and landscape courtyards operate as an integrated harmonious whole.</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
