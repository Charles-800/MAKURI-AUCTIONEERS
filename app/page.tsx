'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import ServiceReadinessGuide from '@/components/ServiceReadinessGuide';
import InsightsPreviewSection from '@/components/InsightsPreviewSection';
import CtaBanner from '@/components/CtaBanner';
import ContactSection from '@/components/ContactSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import LegalModals from '@/components/LegalModals';

export default function HomePage() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('Auctioneering Services');
  const [preselectedSubject, setPreselectedSubject] = useState<string>('');

  const handleSelectService = (serviceName: string, subjectText?: string) => {
    setPreselectedService(serviceName);
    if (subjectText) {
      setPreselectedSubject(subjectText);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#F4F6F9] text-slate-900 pb-16 sm:pb-0">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        onOpenTermsModal={() => setTermsModalOpen(true)}
      />

      {/* Main Corporate Content */}
      <main className="flex-1">
        {/* Section 2: Hero Section */}
        <HeroSection />

        {/* Section 3: Company Introduction */}
        <AboutSection />

        {/* Executive Leadership & Director Section */}
        <TeamSection onDirectInquiry={handleSelectService} />

        {/* Section 4: Our Services */}
        <ServicesSection
          onSelectServiceForInquiry={(svc) => handleSelectService(svc, `Inquiry regarding ${svc}`)}
        />

        {/* Section 5: Why Choose Makuri Auctioneers */}
        <WhyChooseUs />

        {/* Section 6: Our Four-Step Process */}
        <ProcessSection />

        {/* Client Advisory & Statutory Readiness Checklist */}
        <ServiceReadinessGuide
          onSelectServiceForInquiry={handleSelectService}
        />

        {/* Insights & Auctioneering Resources Editorial Section */}
        <InsightsPreviewSection />

        {/* Section 7: Call-to-Action Banner */}
        <CtaBanner
          onSendInquiryClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Section 8: Contact Section & Real Inquiry Form */}
        <ContactSection
          key={`${preselectedService}-${preselectedSubject}`}
          preselectedService={preselectedService}
          preselectedSubject={preselectedSubject}
        />
      </main>

      {/* Section 9: Footer */}
      <Footer
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        onOpenTermsModal={() => setTermsModalOpen(true)}
      />

      {/* Floating WhatsApp and Mobile Sticky Call Bar */}
      <FloatingActions />

      {/* Regulatory Privacy & Terms Dialogs */}
      <LegalModals
        privacyOpen={privacyModalOpen}
        termsOpen={termsModalOpen}
        onClose={() => {
          setPrivacyModalOpen(false);
          setTermsModalOpen(false);
        }}
      />
    </div>
  );
}
