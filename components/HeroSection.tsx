import React from 'react';
import SafeImage from '@/components/SafeImage';
import { Phone, MessageSquare, ArrowDown, ShieldCheck, Scale, Building2, Gavel, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center bg-[#0B1730] overflow-hidden"
    >
      {/* Background Image with dual fallbacks and calibrated scrim overlay */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="/images/hero_auction.jpg"
          fallbackSrc="/images/hero_mombasa_auction_1793440617435.jpg"
          alt="Makuri Auctioneers Mombasa & Nairobi Executive Boardroom"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Calibrated contrast scrim: allows image texture and detail to be clearly seen while keeping text crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1730]/90 via-[#0B1730]/75 to-[#0B1730]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730] via-[#0B1730]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 text-white w-full">
        <div className="max-w-3xl">
          {/* Dual Branch Location & Trust Anchor */}
          <div className="inline-flex flex-wrap items-center gap-2 mb-4 sm:mb-6 text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-widest uppercase text-[#C6A15B] border-b border-[#C6A15B]/30 pb-1.5">
            <Scale className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
            <span>Mombasa (HQ) &amp; Nairobi Branch &bull; Kenya &bull; Est. 1995</span>
          </div>

          {/* Main Responsive Headline (Fluid typography preventing awkward breaks on 320px screens) */}
          <h1 className="font-serif-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6 text-balance">
            PROFESSIONAL AUCTIONEERING &amp; ASSET RECOVERY SOLUTIONS
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            Delivering professional auctioneering, repossession, private investigation, business consultancy and real estate management services with integrity, efficiency and professionalism.
          </p>

          {/* Touch-Friendly Action Buttons (Full width on mobile, inline on tablet/desktop) */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-14">
            {/* CTA 1: CALL US NOW */}
            <a
              href="tel:0720934476"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg bg-gradient-to-r from-[#C6A15B] to-[#dfc285] hover:from-[#b5914a] hover:to-[#C6A15B] text-[#0B1730] font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl active:scale-[0.98] transition-all min-h-[48px]"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#0B1730] shrink-0" />
              <span>CALL US NOW: 0720 934 476</span>
            </a>

            {/* CTA 2: MAKE AN INQUIRY */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg bg-[#163E72] hover:bg-[#1a4b8c] text-white font-semibold text-sm sm:text-base tracking-wide border border-slate-600/80 hover:border-[#C6A15B]/60 active:scale-[0.98] transition-all min-h-[48px]"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#C6A15B] shrink-0" />
              <span>MAKE AN INQUIRY</span>
            </a>

            {/* CTA 3: WHATSAPP US */}
            <a
              href="https://wa.me/254720934476?text=Hello%20Makuri%20Auctioneers,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white font-medium text-xs sm:text-sm tracking-wide border border-emerald-500/40 active:scale-[0.98] transition-all min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>

          {/* Quick Pillar Strip (2 cols on small phones, 4 cols on tablet & desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-slate-700/60 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Gavel className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span className="font-medium text-xs sm:text-sm">Public Auctions</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span className="font-medium text-xs sm:text-sm">Lawful Repossession</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span className="font-medium text-xs sm:text-sm">Asset Tracing</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <span className="font-medium text-xs sm:text-sm">Real Estate Advisory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
