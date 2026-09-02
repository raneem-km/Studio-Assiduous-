import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { PageTransition } from '../components/layout/PageTransition';
import { FOUNDER_INFO, TEAM_MEMBERS, STUDIO_VALUES } from '../data/team';
import { STUDIO_INFO } from '../data/projects';

export const TeamPage: React.FC = () => {
  return (
    <PageTransition>
      <main className="bg-[#050505] text-[#F2F2EE] pt-32 pb-36 px-6 md:px-12 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-28">
          {/* Header */}
          <div className="space-y-6">
            <SectionLabel label="STUDIO PEOPLE" />
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-tight uppercase leading-[0.95]">
              OUR TEAM.
            </h1>
            <p className="font-editorial text-base sm:text-lg text-[#F2F2EE]/85 max-w-2xl font-light leading-relaxed">
              Studio Assiduous is driven by a multidisciplinary collective of architects, interior designers, landscape specialists, and spatial visualizers based in Manjeri, Kerala.
            </p>
          </div>

          {/* Founder & Principal Architect Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-white/16 bg-[#0B0B0B] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Founder Avatar Frame */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-[#050505] border border-white/16 text-center space-y-4">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-white/20 p-1 bg-[#141816] shadow-2xl">
                <img
                  src={FOUNDER_INFO.image}
                  alt="Ar. Athif Ali - Founder & Principal Architect"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-xs tracking-widest text-[#F2F2EE] uppercase border border-white/20 px-3 py-1 bg-[#0B0B0B] inline-block font-semibold">
                  PRINCIPAL ARCHITECT
                </span>
                <p className="font-mono text-xs text-[#8A8A86] pt-1">MANJERI, KERALA</p>
              </div>
            </div>

            {/* Founder Bio & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs sm:text-sm text-[#F2F2EE]/75 tracking-widest uppercase font-semibold">
                  LEADERSHIP & DIRECTION
                </span>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-[#F2F2EE]">
                  {FOUNDER_INFO.name}
                </h2>
                <p className="font-mono text-sm sm:text-base text-[#8A8A86] tracking-wider uppercase font-medium">
                  {FOUNDER_INFO.title}
                </p>
                {FOUNDER_INFO.credentials && (
                  <p className="font-mono text-xs sm:text-sm text-[#F2F2EE]/70 tracking-wider">
                    {FOUNDER_INFO.credentials}
                  </p>
                )}
              </div>

              {/* Bio description */}
              <p className="font-editorial text-base sm:text-lg text-[#F2F2EE]/85 font-light leading-relaxed">
                {FOUNDER_INFO.bio}
              </p>

              {/* Specialties */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="font-mono text-xs sm:text-sm text-[#8A8A86] tracking-widest uppercase block font-semibold">
                  CORE EXPERTISE:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs sm:text-sm text-[#F2F2EE]/80">
                  {FOUNDER_INFO.specialties.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-white/40">+</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Lead */}
              <div className="pt-4">
                <a
                  href={`mailto:${STUDIO_INFO.email}?subject=Project%20Inquiry%20for%20Ar.%20Athif%20Ali`}
                  className="inline-flex items-center gap-3 font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#F2F2EE] border border-white/20 hover:border-white/50 px-6 py-4 uppercase transition-colors"
                >
                  <Mail size={16} />
                  <span>CONSULT WITH AR. ATHIF ALI</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Core Team Grid */}
          <div className="space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/16 pb-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#8A8A86] tracking-widest uppercase">
                  DISCIPLINARY LEADS
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-light uppercase tracking-tight">
                  STUDIO PRACTITIONERS
                </h2>
              </div>
              <span className="font-mono text-xs sm:text-sm text-[#F2F2EE]/60 tracking-wider">
                MANJERI STUDIO
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {TEAM_MEMBERS.map((member, idx) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#0B0B0B] border border-white/16 p-8 space-y-6 flex flex-col justify-between"
                >
                  {/* Avatar & Title */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-5">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-white/20 p-1 bg-[#141816] flex-shrink-0 shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-xs text-[#8A8A86] tracking-widest uppercase">
                          {member.role}
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-light uppercase text-[#F2F2EE]">
                          {member.name}
                        </h3>
                        {member.credentials && (
                          <p className="font-mono text-xs text-[#F2F2EE]/60">
                            {member.credentials}
                          </p>
                        )}
                      </div>
                    </div>

                    <p className="font-editorial text-sm sm:text-base text-[#F2F2EE]/80 leading-relaxed font-light pt-2">
                      {member.bio}
                    </p>
                  </div>

                  {/* Specialties List */}
                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <span className="font-mono text-[11px] text-[#8A8A86] tracking-widest uppercase block">
                      FOCUS AREAS:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="font-mono text-xs bg-[#050505] text-[#F2F2EE]/80 border border-white/10 px-2.5 py-1"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Studio Values */}
          <div className="space-y-12 border-t border-white/16 pt-16">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#8A8A86] tracking-widest uppercase">
                PRACTICE VALUES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-light uppercase tracking-tight">
                OUR PHILOSOPHY IN ACTION
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {STUDIO_VALUES.map((val) => (
                <div
                  key={val.title}
                  className="p-8 bg-[#0B0B0B] border border-white/16 space-y-4"
                >
                  <h3 className="font-display text-xl sm:text-2xl font-light uppercase text-[#F2F2EE] tracking-wide">
                    {val.title}
                  </h3>
                  <p className="font-editorial text-sm sm:text-base text-[#F2F2EE]/80 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Career & Collaboration CTA */}
          <div className="p-10 sm:p-16 bg-[#0B0B0B] border border-white/16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="font-mono text-xs text-[#8A8A86] tracking-widest uppercase">
                JOIN THE PRACTICE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-light uppercase">
                WORK WITH STUDIO ASSIDUOUS
              </h2>
              <p className="font-editorial text-sm sm:text-base text-[#F2F2EE]/80 font-light">
                We are always open to passionate architects, interior stylists, structural detailers, and interns passionate about contextual spatial design.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#F2F2EE] text-[#050505] px-8 py-5 font-mono text-sm font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 flex-shrink-0"
            >
              <span>INQUIRE WITH STUDIO</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};
