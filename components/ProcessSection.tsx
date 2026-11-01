'use client';

import React from 'react';
import { PhoneCall, SearchCheck, ClipboardList, CheckCircle } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: PhoneCall,
      title: 'Initial Consultation',
      summary: 'Contact our team and explain your requirements.',
      detail: 'Reach out via phone, WhatsApp, or through our inquiry portal with your scenario, legal orders, or service objectives.',
    },
    {
      number: '02',
      icon: SearchCheck,
      title: 'Assessment',
      summary: 'We understand your needs and establish the appropriate service requirements.',
      detail: 'Our officers review title documents, court warrants, asset locations, or risk factors to establish legal viability and required paperwork.',
    },
    {
      number: '03',
      icon: ClipboardList,
      title: 'Service Planning',
      summary: 'We develop an appropriate service approach.',
      detail: 'We formulate statutory notices, auction schedules, repossession logistics, or investigation plans tailored to procedural mandates.',
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Professional Execution',
      summary: 'We coordinate the agreed services professionally.',
      detail: 'Our licensed officers coordinate on-site execution, public bidding, secure custody, and provide comprehensive completion returns.',
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#0B1730] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C6A15B] mb-3">
            <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
            Standard Operating Procedure
            <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4.5xl font-bold text-white mb-4 text-balance">
            Our Structured Four-Step Process
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Every engagement follows a meticulous legal and operational protocol designed to protect asset value and ensure full statutory compliance.
          </p>
        </div>

        {/* Timeline Desktop (Horizontal) & Mobile (Vertical) */}
        <div className="relative">
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-14 left-16 right-16 h-[2px] bg-gradient-to-r from-[#163E72] via-[#C6A15B] to-[#163E72] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0f1d3d] border border-slate-800 rounded-xl p-6 flex flex-col justify-between group hover:border-[#C6A15B]/50 hover:bg-[#122349] transition-all duration-300"
                >
                  <div>
                    {/* Step Icon and Number Lockup */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#163E72] to-[#0B1730] border border-[#C6A15B]/40 text-[#C6A15B] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="font-serif-heading font-bold text-2xl text-[#C6A15B]/80 tabular-nums">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#C6A15B] mb-3 leading-snug">
                      {step.summary}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                    Step {idx + 1} of 4 · Operational Protocol
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
