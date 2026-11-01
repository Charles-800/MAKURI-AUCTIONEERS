'use client';

import React from 'react';
import SafeImage from '@/components/SafeImage';
import { Shield, CheckCircle2, Clock, MapPin, Building, Users, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const commitments = [
    {
      title: 'Professionalism',
      description: 'Every auction, recovery procedure, and consultancy engagement is conducted with executive precision, strict adherence to Kenyan statutory frameworks, and professional ethics.',
    },
    {
      title: 'Integrity',
      description: 'We prioritize total transparency, accurate asset accounting, objective valuations, and dependable reporting across every phase of service delivery.',
    },
    {
      title: 'Efficiency',
      description: 'Prompt coordination and timely execution ensure court warrants, commercial repossessions, and auction notices are processed without avoidable delays.',
    },
    {
      title: 'Client-Focused Solutions',
      description: 'We structure tailored engagement strategies for financial institutions, law firms, corporations, micro-financiers, and private property owners.',
    },
    {
      title: 'Responsible Service Delivery',
      description: 'Conducting sensitive asset recoveries, investigations, and dispute resolutions with civility, legal compliance, and community respect.',
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#163E72]/10 border border-[#163E72]/20 text-xs font-bold tracking-wider uppercase text-[#163E72] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B]"></span>
              <span>About Makuri Auctioneers &bull; Founded in 1995</span>
            </div>
            
            <h2 className="font-serif-heading text-2xl sm:text-3.5xl lg:text-4.5xl font-bold text-[#0B1730] leading-tight mb-5 text-balance">
              Your Trusted Partner in Professional Auctioneering &amp; Business Solutions
            </h2>

            <div className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed space-y-3.5 mb-8">
              <p>
                <strong>Founded in 1995</strong>, <strong>Makuri Auctioneers</strong> is a premier corporate auctioneering, repossession, private investigations, and asset management firm with offices in <strong>Mombasa</strong> (NSSF Building, Nkrumah Road) and <strong>Nairobi</strong> (All Saints Cathedral Office). Since our establishment in 1995, we have served commercial banks, micro-finance institutions, law firms, corporate entities, and property owners across Kenya.
              </p>
              <p>
                In a dynamic commercial landscape where legal compliance, asset security, and expeditious execution are critical, we coordinate every undertaking with unyielding integrity, procedural diligence, and professional responsibility.
              </p>
            </div>

            {/* Core Commitments List */}
            <div className="space-y-3.5 mb-8">
              {commitments.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#163E72]/10 text-[#163E72] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0B1730]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dual Branch Locations Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-[#F4F6F9] border border-slate-200/90 mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#0B1730] block">Mombasa (Headquarters)</span>
                  <span className="text-slate-600">Nkrumah Road, NSSF Building, 7th Flr, Door 733</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 pt-2 sm:pt-0 border-t sm:border-t-0 sm:border-l border-slate-200 sm:pl-3">
                <Building className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#0B1730] block">Nairobi Branch</span>
                  <span className="text-slate-600">All Saints Cathedral Office</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame & Authentic Implements */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-2xl border-2 border-[#C6A15B]/30 transform -rotate-1 hidden sm:block pointer-events-none" />
              
              {/* Primary Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-[#0B1730] aspect-[4/3] w-full min-h-[260px] sm:min-h-[360px]">
                <SafeImage
                  src="/images/about_office.jpg"
                  fallbackSrc="/images/about_makuri_office_1793440617755.jpg"
                  alt="Makuri Auctioneers Executive Consultation Office Mombasa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />

                {/* Floating "Founded in 1995" Heritage Badge */}
                <div className="absolute top-3.5 left-3.5 z-20 bg-[#0B1730]/90 backdrop-blur-md border border-[#C6A15B]/50 text-white rounded-lg px-3.5 py-2 shadow-xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-[#C6A15B]/20 border border-[#C6A15B] flex items-center justify-center shrink-0 text-[#C6A15B]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C6A15B] block leading-none">Heritage</span>
                    <span className="text-xs sm:text-sm font-bold text-white leading-tight">Founded in 1995</span>
                  </div>
                </div>
                
                {/* Clean Bottom Overlay Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1730] via-[#0B1730]/90 to-transparent p-4 sm:p-6 text-white z-10">
                  <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#C6A15B] mb-1">
                    <Building className="w-3.5 h-3.5" />
                    <span>NSSF Building &bull; Mombasa HQ</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    Fully equipped executive consulting, asset verification, and client reception facility.
                  </p>
                </div>
              </div>

              {/* Dual Authentic Trade Instruments Showcase */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 bg-[#F4F6F9] rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3.5">
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-lg bg-white border border-slate-300 shrink-0 overflow-hidden p-1 shadow-inner">
                    <SafeImage
                      src="/images/auction_gavel.jpeg"
                      fallbackSrc="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.28.03_PM_eeddc43c.jpeg"
                      alt="Official Makuri Auction Gavel"
                      fill
                      sizes="88px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="text-xs">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C6A15B] block">Official Regalia</span>
                    <span className="font-bold text-[#0B1730] text-sm block">The Official Gavel</span>
                    <span className="text-slate-600 text-xs leading-snug">Binding fall of the hammer at public auctions</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#F4F6F9] rounded-xl border border-slate-200/90 shadow-sm flex items-center gap-3.5">
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-lg bg-white border border-slate-300 shrink-0 overflow-hidden p-1 shadow-inner">
                    <SafeImage
                      src="/images/auction_bell.jpeg"
                      fallbackSrc="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.28.03_PM__1__2a5d19d1.jpeg"
                      alt="Official Makuri Auction Bell"
                      fill
                      sizes="88px"
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="text-xs">
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-[#C6A15B] block">Official Regalia</span>
                    <span className="font-bold text-[#0B1730] text-sm block">The Auction Bell</span>
                    <span className="text-slate-600 text-xs leading-snug">Formal lot declarations &amp; opening bidding calls</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
