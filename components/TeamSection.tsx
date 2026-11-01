'use client';

import React from 'react';
import SafeImage from '@/components/SafeImage';
import { GraduationCap, Award, Shield, Phone, Mail, MessageSquare, Briefcase, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';

interface TeamSectionProps {
  onDirectInquiry?: (serviceName: string, subjectText: string) => void;
}

export default function TeamSection({ onDirectInquiry }: TeamSectionProps) {
  const qualifications = [
    { label: 'PhD BA (Cont.)', desc: 'Doctor of Philosophy in Business Administration (Continuing)' },
    { label: 'MBA (Strategic Mngt)', desc: 'Master of Business Administration in Strategic Management' },
    { label: 'BBA', desc: 'Bachelor of Business Administration' },
  ];

  const operationalWings = [
    {
      title: 'Auctioneering & Court Execution',
      desc: 'Licensed bailiffs coordinating statutory advertisements, court returns, and transparent public bidding.',
      icon: Shield,
    },
    {
      title: 'Repossession & Logistics Staging',
      desc: 'Rapid field deployment team managing lawful chattel recovery and secure bonded storage across Kenya.',
      icon: Briefcase,
    },
    {
      title: 'Corporate Investigations & Tracing',
      desc: 'Discreet analysts conducting commercial due diligence, fraud assessments, and judgment debtor asset searches.',
      icon: UserCheck,
    },
  ];

  const handleInquireWithDirector = () => {
    if (onDirectInquiry) {
      onDirectInquiry('Business Consultancy', 'Direct Consultation Request with Director Joel Titus Musya');
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="leadership" className="py-14 sm:py-20 lg:py-28 bg-[#F4F6F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#163E72] mb-3">
            <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
            Executive Governance
            <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3.5xl lg:text-4.5xl font-bold text-[#0B1730] mb-3 text-balance">
            Leadership &amp; Professional Governance
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Makuri Auctioneers is steered by high-level strategic management expertise, advanced business acumen, and strict adherence to Kenyan legal frameworks.
          </p>
        </div>

        {/* Featured Director Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md overflow-hidden max-w-5xl mx-auto mb-10 sm:mb-14 transition-all duration-300 hover:shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Director Photo Frame (Responsive aspect ratio, clear object-top framing) */}
            <div className="lg:col-span-5 relative bg-[#0B1730] min-h-[340px] sm:min-h-[460px] flex items-center justify-center overflow-hidden">
              <SafeImage
                src="/images/director_joel_titus_musya.jpeg"
                fallbackSrc="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.36.00_PM_4936689a.jpeg"
                alt="Joel Titus Musya - Director at Makuri Auctioneers"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
                priority
              />
              {/* Luxury scrim overlay for mobile readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/90 via-transparent to-transparent lg:hidden" />
              
              <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#C6A15B] font-semibold block mb-0.5">
                  Executive Director
                </span>
                <h3 className="font-serif-heading text-xl font-bold">
                  Joel Titus Musya
                </h3>
                <p className="text-xs text-slate-300">
                  PhD BA (Cont.), MBA (Strategic Mngt), BBA
                </p>
              </div>
            </div>

            {/* Director Credentials & Bio (7 cols) */}
            <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5 sm:space-y-6">
              <div>
                {/* Director Header (Desktop & Tablet) */}
                <div className="border-b border-slate-100 pb-4 mb-4 sm:mb-5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#163E72] mb-1">
                    <Award className="w-4 h-4 text-[#C6A15B]" />
                    <span>Company Directorship</span>
                  </div>
                  <h3 className="font-serif-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1730] mb-1">
                    Joel Titus Musya
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#163E72]">
                    Director · Makuri Auctioneers
                  </p>
                </div>

                {/* Academic & Professional Qualifications */}
                <div className="mb-5 sm:mb-6">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#C6A15B]" />
                    <span>Academic &amp; Management Qualifications</span>
                  </h4>
                  <div className="space-y-2">
                    {qualifications.map((q, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-[#F4F6F9] border border-slate-200/80"
                      >
                        <span className="text-xs font-bold font-mono text-[#0B1730] bg-white px-2 py-0.5 rounded border border-slate-200 shrink-0 self-start">
                          {q.label}
                        </span>
                        <div className="text-xs text-slate-700 leading-snug">
                          <span className="font-medium">{q.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Narrative */}
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2.5">
                  <p>
                    Under the directorship of <strong>Joel Titus Musya</strong>, Makuri Auctioneers delivers authoritative, legally compliant, and results-oriented solutions to commercial banks, corporate enterprises, micro-finance institutions, advocates, and property owners across Mombasa, Nairobi, and throughout Kenya.
                  </p>
                  <p>
                    Drawing upon advanced competencies in strategic management and business administration, he oversees all institutional engagements, ensuring transparency in public auctions, disciplined coordination in repossession mandates, and high fiduciary integrity throughout our corporate consulting assignments.
                  </p>
                </div>
              </div>

              {/* Direct Leadership Contact Actions */}
              <div className="pt-4 sm:pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex flex-col text-[11px] sm:text-xs text-slate-500">
                  <span className="font-medium text-slate-700">Mombasa HQ &amp; Nairobi Operations:</span>
                  <span>Direct Executive Line Available</span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <button
                    onClick={handleInquireWithDirector}
                    className="w-full sm:w-auto px-4 py-3 rounded-lg bg-[#0B1730] hover:bg-[#163E72] text-[#C6A15B] hover:text-white font-bold text-xs tracking-wider transition-colors shadow-sm text-center min-h-[44px] flex items-center justify-center gap-2"
                  >
                    <span>Direct Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:0720934476"
                      className="flex-1 sm:flex-initial p-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-[#0B1730] transition-colors flex items-center justify-center min-h-[44px]"
                      aria-label="Call Joel Titus Musya"
                    >
                      <Phone className="w-4 h-4 text-[#C6A15B]" />
                    </a>
                    <a
                      href="mailto:info@makuriauctioneers.co.ke?subject=Inquiry%20for%20Director%20Joel%20Titus%20Musya"
                      className="flex-1 sm:flex-initial p-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-[#0B1730] transition-colors flex items-center justify-center min-h-[44px]"
                      aria-label="Email Joel Titus Musya"
                    >
                      <Mail className="w-4 h-4 text-[#163E72]" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Operational Governance Wings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {operationalWings.map((wing, i) => {
            const WingIcon = wing.icon;
            return (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0B1730] text-[#C6A15B] flex items-center justify-center mb-3 sm:mb-4">
                    <WingIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[#0B1730] mb-1.5 sm:mb-2">
                    {wing.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {wing.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#163E72] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Statutory Compliance Oversight</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
