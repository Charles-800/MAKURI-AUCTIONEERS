'use client';

import React from 'react';
import { ShieldCheck, UserCheck, Scale, Zap, Layers, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Professional Service Delivery',
      description: 'We adhere strictly to legal requirements, statutory auction timelines, court orders, and standard operating procedures to protect our clients from liability.',
    },
    {
      icon: UserCheck,
      title: 'Client-Centred Approach',
      description: 'We listen attentively to each client’s operational context and craft individualized service execution roadmaps with clear communication throughout.',
    },
    {
      icon: Scale,
      title: 'Integrity and Transparency',
      description: 'Honest valuations, clear accounting of proceeds, itemized recovery logs, and fair public auction bidding form the bedrock of our reputation.',
    },
    {
      icon: Zap,
      title: 'Efficient Service Coordination',
      description: 'From emergency repossession requests to expedited distress for rent enforcement, our field teams mobilize rapidly across Mombasa, Nairobi, and regional counties.',
    },
    {
      icon: Layers,
      title: 'Diverse Professional Services',
      description: 'Integrated capabilities spanning public auctions, recovery, investigations, corporate consultancy, and real estate management eliminate third-party friction.',
    },
    {
      icon: MapPin,
      title: 'Strategic Mombasa & Nairobi Offices',
      description: 'Centrally situated at NSSF Building, 7th Floor, Mombasa and All Saints Cathedral Office, Nairobi, providing direct access to courts and key financial centers.',
    },
  ];

  return (
    <section id="why-us" className="py-14 sm:py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#163E72] mb-3">
            <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
            Why Partner With Us
            <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3.5xl lg:text-4.5xl font-bold text-[#0B1730] mb-3 text-balance">
            Professionalism You Can Depend On
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Our operational standards are founded upon procedural rigor, ethical conduct, statutory compliance, and transparent accountability.
          </p>
        </div>

        {/* 6 Pillars Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-xl bg-[#F4F6F9] border border-slate-200 hover:border-[#C6A15B]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-md"
              >
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#0B1730] text-[#C6A15B] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-200">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B1730] mb-2 sm:mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-200/60 flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#163E72]">
                  <span>Pillar {idx + 1}</span>
                  <span className="text-[#C6A15B]">·</span>
                  <span className="text-slate-500">Standard of Practice</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
