import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Shield, ArrowRight } from 'lucide-react';
import Breadcrumbs, { BreadcrumbItem } from '@/components/Breadcrumbs';

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  showBranchPill?: boolean;
}

export default function PageHero({
  badge,
  title,
  description,
  breadcrumbs,
  primaryCtaText = 'Call Now: 0720 934 476',
  primaryCtaHref = 'tel:0720934476',
  secondaryCtaText = 'Request Our Services',
  secondaryCtaHref = '#inquiry-form',
  showBranchPill = true,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#0B1730] text-white pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-slate-800 overflow-hidden">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(22,62,114,0.5),transparent)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Trail */}
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        {/* Content Box */}
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#163E72]/70 border border-[#C6A15B]/40 text-xs font-bold uppercase tracking-wider text-[#C6A15B] mb-4">
            <Shield className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{badge}</span>
          </div>

          {/* Descriptive H1 */}
          <h1 className="font-serif-heading text-2xl sm:text-3.5xl lg:text-4.5xl font-bold text-white tracking-tight leading-tight mb-4 text-balance">
            {title}
          </h1>

          {/* Lead Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-8">
            {description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={primaryCtaHref}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg bg-gradient-to-r from-[#C6A15B] to-[#dfc285] hover:from-[#b5914a] hover:to-[#C6A15B] text-[#0B1730] font-bold text-xs sm:text-sm tracking-wide shadow-lg transition-all min-h-[48px]"
            >
              <Phone className="w-4 h-4 text-[#0B1730]" />
              <span>{primaryCtaText}</span>
            </a>

            <a
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-lg bg-[#163E72] hover:bg-[#1a4a88] border border-[#C6A15B]/40 text-white font-semibold text-xs sm:text-sm transition-all min-h-[48px]"
            >
              <span>{secondaryCtaText}</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
            </a>

            <a
              href="https://wa.me/254720934476?text=Hello%20Makuri%20Auctioneers,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm border border-emerald-500 transition-all min-h-[48px]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Verified Branch Footnote */}
          {showBranchPill && (
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="text-[#C6A15B] font-semibold">Head Office:</span>
              <span>NSSF Building, 7th Flr, Door 733, Mombasa</span>
              <span className="hidden sm:inline text-slate-600">&bull;</span>
              <span className="text-[#C6A15B] font-semibold">Nairobi:</span>
              <span>All Saints Cathedral Office</span>
              <span className="hidden sm:inline text-slate-600">&bull;</span>
              <span className="text-slate-300 font-medium">Founded in 1995</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
