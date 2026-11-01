'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function FaqAccordion({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common procedural, legal, and operational inquiries regarding our services in Kenya.',
  className = '',
}: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // first open by default

  const toggle = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className={`py-12 sm:py-16 bg-white border-y border-slate-200 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163E72] mb-2">
            <HelpCircle className="w-4 h-4 text-[#C6A15B]" />
            <span>Clear Guidance &bull; Legal Compliance</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-3.5xl font-bold text-[#0B1730]">
            {title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-3.5">
          {items.map((item, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#C6A15B]/60 bg-[#F4F6F9] shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#0B1730] min-h-[52px]"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1">{item.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#163E72] text-[#C6A15B] rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
