import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { PageTransition } from '../components/layout/PageTransition';
import { STUDIO_INFO } from '../data/projects';
import { WhatsAppIcon } from '../components/ui/SocialIcons';

/*
  =============================================================================
  BACKEND / EMAIL SERVICE INTEGRATION GUIDE:
  =============================================================================
  This form is currently configured as a pure frontend component.
  To connect a live backend or email provider later, replace the `handleSubmit`
  function below with your API call, for example:
  
  - Resend: fetch('/api/send', { method: 'POST', body: JSON.stringify(formData) })
  - Formspree: fetch('https://formspree.io/f/YOUR_FORM_ID', { ... })
  - EmailJS: emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formElement)
  =============================================================================
*/

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Architecture',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate clean submission state
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <main className="bg-[#050505] text-[#F2F2EE] pt-24 md:pt-28 pb-16 md:pb-24 px-6 md:px-12 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <SectionLabel label="CONTACT INQUIRY" />
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-tight uppercase leading-[0.95]">
              LET'S TALK.
            </h1>
            <p className="font-editorial text-base sm:text-lg text-[#F2F2EE]/85 max-w-xl font-light leading-relaxed">
              Initiate a dialogue for architectural design, residential commissions, interior styling, or landscape masterplanning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-white/16 pt-12">
            {/* Left Form */}
            <div className="lg:col-span-7 space-y-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 bg-[#0B0B0B] border border-white/16 space-y-4 text-center sm:text-left"
                >
                  <div className="inline-flex items-center gap-3 text-[#F2F2EE]">
                    <CheckCircle2 size={24} className="text-[#F2F2EE]" />
                    <span className="font-display text-xl uppercase font-light">INQUIRY RECEIVED</span>
                  </div>
                  <p className="font-editorial text-base text-[#F2F2EE]/85">
                    Thank you for reaching out to Studio Assiduous. We have logged your submission and our team will get in touch shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', projectType: 'Architecture', location: '', message: '' });
                    }}
                    className="font-mono text-sm text-[#F2F2EE] underline tracking-widest uppercase hover:text-white pt-4 font-semibold"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-mono text-sm text-[#F2F2EE]/80 tracking-wider uppercase font-medium">
                      NAME *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-[#0B0B0B] border border-white/20 p-4 text-base font-sans text-[#F2F2EE] placeholder-[#8A8A86]/50 focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-mono text-sm text-[#F2F2EE]/80 tracking-wider uppercase font-medium">
                        EMAIL *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@domain.com"
                        className="w-full bg-[#0B0B0B] border border-white/20 p-4 text-base font-sans text-[#F2F2EE] placeholder-[#8A8A86]/50 focus:outline-none focus:border-white/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block font-mono text-sm text-[#F2F2EE]/80 tracking-wider uppercase font-medium">
                        PHONE
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full bg-[#0B0B0B] border border-white/20 p-4 text-base font-sans text-[#F2F2EE] placeholder-[#8A8A86]/50 focus:outline-none focus:border-white/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="block font-mono text-sm text-[#F2F2EE]/80 tracking-wider uppercase font-medium">
                        PROJECT TYPE
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-[#0B0B0B] border border-white/20 p-4 text-base font-sans text-[#F2F2EE] focus:outline-none focus:border-white/50 transition-colors"
                      >
                        <option value="Architecture">Architecture</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Landscape">Landscape</option>
                        <option value="Art">Art & Visualization</option>
                        <option value="Comprehensive">Comprehensive / Full Design</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="location" className="block font-mono text-sm text-[#F2F2EE]/80 tracking-wider uppercase font-medium">
                        PROJECT LOCATION
                      </label>
                      <input
                        id="location"
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Manjeri, Kerala"
                        className="w-full bg-[#0B0B0B] border border-white/20 p-4 text-base font-sans text-[#F2F2EE] placeholder-[#8A8A86]/50 focus:outline-none focus:border-white/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block font-mono text-sm text-[#F2F2EE]/80 tracking-wider uppercase font-medium">
                      MESSAGE / PROJECT BRIEF *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details regarding your site area, vision, or timeline..."
                      className="w-full bg-[#0B0B0B] border border-white/20 p-4 text-base font-sans text-[#F2F2EE] placeholder-[#8A8A86]/50 focus:outline-none focus:border-white/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-between w-full bg-[#F2F2EE] text-[#050505] p-5 font-mono text-sm sm:text-base font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
                  >
                    <span>SEND INQUIRY</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Info Box */}
            <div className="lg:col-span-5 space-y-8 bg-[#0B0B0B] border border-white/16 p-8">
              <div className="space-y-4">
                <span className="font-mono text-sm text-[#F2F2EE]/75 tracking-widest uppercase block font-semibold">
                  STUDIO IDENTITY
                </span>
                
                {/* Studio Name & Logo on Right */}
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-display text-3xl sm:text-4xl font-light uppercase text-[#F2F2EE]">
                      {STUDIO_INFO.name}
                    </h3>
                    <p className="font-mono text-sm text-[#8A8A86] tracking-wider uppercase">
                      {STUDIO_INFO.tagline}
                    </p>
                  </div>
                  <img
                    src="/brand/logo.png"
                    alt="Studio Assiduous Design Co."
                    className="h-20 sm:h-24 w-auto object-contain flex-shrink-0"
                  />
                </div>
              </div>

              <div className="space-y-5 font-mono text-sm sm:text-base text-[#F2F2EE]/85 tracking-wide pt-4 border-t border-white/10">
                <div>
                  <span className="text-[#8A8A86] block text-xs tracking-widest uppercase mb-1">OFFICE LOCATION</span>
                  <p className="text-[#F2F2EE] leading-relaxed">{STUDIO_INFO.fullAddress}</p>
                </div>

                <div>
                  <span className="text-[#8A8A86] block text-xs tracking-widest uppercase mb-1">PHONE NUMBER</span>
                  <a href={`tel:${STUDIO_INFO.phone}`} className="text-[#F2F2EE] hover:text-white transition-colors underline underline-offset-4">
                    {STUDIO_INFO.phone}
                  </a>
                </div>

                <div>
                  <span className="text-[#8A8A86] block text-xs tracking-widest uppercase mb-1">EMAIL INQUIRIES</span>
                  <a href={`mailto:${STUDIO_INFO.email}`} className="text-[#F2F2EE] hover:text-white transition-colors underline underline-offset-4">
                    {STUDIO_INFO.email}
                  </a>
                </div>

                <div>
                  <span className="text-[#8A8A86] block text-xs tracking-widest uppercase mb-1">INSTAGRAM</span>
                  <a href={STUDIO_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#F2F2EE] hover:text-white transition-colors underline underline-offset-4">
                    @{STUDIO_INFO.instagram} ↗
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href={STUDIO_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full bg-[#1A1A1A] border border-white/20 hover:border-white/50 text-[#F2F2EE] p-4 text-sm font-semibold tracking-wider uppercase transition-colors group"
                  >
                    <WhatsAppIcon size={18} className="text-[#25D366] group-hover:scale-110 transition-transform" />
                    <span>CHAT ON WHATSAPP</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};
