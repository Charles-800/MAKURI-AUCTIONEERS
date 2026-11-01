'use client';

import React from 'react';
import { Phone, Mail } from 'lucide-react';

interface CtaBannerProps {
  onSendInquiryClick?: () => void;
}

export default function CtaBanner({ onSendInquiryClick }: CtaBannerProps) {
  const handleInquiryScroll = () => {
    if (onSendInquiryClick) {
      onSendInquiryClick();
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-14 sm:py-20 bg-gradient-to-r from-[#070E20] via-[#0B1730] to-[#163E72] text-white overflow-hidden border-y border-slate-800">
      {/* Subtle gold decorative gradient line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C6A15B] mb-2 sm:mb-3">
              <span>Ready for Immediate Engagement &bull; Mombasa &amp; Nairobi</span>
            </div>
            
            <h2 className="font-serif-heading text-2xl sm:text-3.5xl lg:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4 leading-tight text-balance">
              NEED PROFESSIONAL AUCTIONEERING OR ASSET RECOVERY SERVICES?
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed">
              Speak with our executive team today and let us help you find the right professional and statutory solution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 shrink-0 w-full sm:w-auto">
            {/* Button 1: CALL 0720 934 476 */}
            <a
              href="tel:0720934476"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-md bg-gradient-to-r from-[#C6A15B] to-[#dfc285] hover:from-[#b5914a] hover:to-[#C6A15B] text-[#0B1730] font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Phone className="w-5 h-5 text-[#0B1730] shrink-0" />
              <span>CALL 0720 934 476</span>
            </a>

            {/* Button 2: SEND AN INQUIRY */}
            <button
              onClick={handleInquiryScroll}
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base tracking-wide border border-white/20 hover:border-[#C6A15B] transition-all duration-200"
            >
              <Mail className="w-5 h-5 text-[#C6A15B] shrink-0" />
              <span>SEND AN INQUIRY</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
