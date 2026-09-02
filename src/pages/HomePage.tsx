import React from 'react';
import { Hero } from '../components/home/Hero';
import { StudioIntro } from '../components/home/StudioIntro';
import { SelectedWork } from '../components/home/SelectedWork';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { StudioOverview } from '../components/home/StudioOverview';
import { ArchitecturalQuote } from '../components/home/ArchitecturalQuote';
import { InstagramSection } from '../components/home/InstagramSection';
import { ContactCTA } from '../components/home/ContactCTA';
import { PageTransition } from '../components/layout/PageTransition';

export const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <main className="w-full bg-[#050505] text-[#F2F2EE]">
        <Hero />
        <StudioIntro />
        <SelectedWork />
        <ServicesOverview />
        <ArchitecturalQuote />
        <StudioOverview />
        <InstagramSection />
        <ContactCTA />
      </main>
    </PageTransition>
  );
};
