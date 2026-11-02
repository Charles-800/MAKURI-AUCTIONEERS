'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, MapPin, Mail, ArrowUp, Building2, BookOpen, ShieldCheck, Navigation } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyModal?: () => void;
  onOpenTermsModal?: () => void;
}

export default function Footer({ onOpenPrivacyModal, onOpenTermsModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    { name: 'Auctioneering Services', href: '/auctioneering-services-kenya' },
    { name: 'Execution of Court Orders', href: '/execution-of-court-orders-kenya' },
    { name: 'Realization of Securities', href: '/realization-of-securities-kenya' },
    { name: 'Repossession Services', href: '/repossession-services-kenya' },
    { name: 'Asset Recovery Services', href: '/asset-recovery-services-kenya' },
    { name: 'Private Investigation Services', href: '/private-investigation-services-kenya' },
    { name: 'Business Consultancy', href: '/business-consultancy-kenya' },
    { name: 'Real Estate Management', href: '/real-estate-management-kenya' },
  ];

  const locationLinks = [
    { name: 'Auctioneers in Mombasa (HQ)', href: '/auctioneers-in-mombasa' },
    { name: 'Auctioneers in Nairobi Branch', href: '/auctioneers-in-nairobi' },
    { name: 'All Kenya Regional Corridors', href: '/locations' },
    { name: 'About Us (Est. 1995)', href: '/about-us' },
    { name: 'Contact & Consultation', href: '/contact-us' },
  ];

  const insightLinks = [
    { name: 'Understanding Auctioneering Process in Kenya', href: '/insights/understanding-auctioneering-process-kenya' },
    { name: 'Bidders Guide: Participating in Public Auctions', href: '/insights/what-to-know-before-participating-public-auction' },
    { name: 'Asset Repossession & MPSRA 2017 Framework', href: '/insights/understanding-asset-repossession-services-kenya' },
    { name: 'Importance of Professional Asset Recovery', href: '/insights/importance-professional-asset-recovery' },
    { name: 'How Property & Real Estate Auctions Work', href: '/insights/how-property-auctions-work-kenya' },
    { name: 'Private Investigations & Asset Tracing', href: '/insights/understanding-private-investigation-services' },
    { name: 'Property Management & Landlord Yields', href: '/insights/professional-property-management-kenya' },
  ];

  return (
    <footer className="bg-[#070e20] text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Regulatory Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-lg bg-[#163E72] border border-[#C6A15B]/60 flex items-center justify-center text-[#C6A15B] font-serif-heading font-bold text-lg group-hover:border-[#C6A15B] transition-colors">
                M
              </div>
              <div>
                <span className="font-serif-heading text-lg font-bold text-white tracking-tight">
                  MAKURI <span className="text-[#C6A15B]">AUCTIONEERS</span>
                </span>
                <p className="text-[10px] text-[#C6A15B] tracking-wider uppercase font-semibold">
                  Mombasa HQ &bull; Nairobi Branch &bull; Founded in 1995
                </p>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Makuri Auctioneers provides professional auctioneering, lawful asset recovery, confidential corporate investigations, strategic business consultancy, and real estate asset management across Kenya.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="text-slate-300 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                <span>Regulated Practice:</span>
              </p>
              <p>Operating pursuant to the Auctioneers Act (Cap. 526) &amp; relevant statutory enactments of Kenya.</p>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <Link
                href="/insights"
                className="text-[#C6A15B] hover:underline font-semibold flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Visit Knowledge Center</span>
              </Link>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Regulated Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesList.map((svc) => (
                <li key={svc.name}>
                  <Link
                    href={svc.href}
                    className="hover:text-[#C6A15B] transition-colors flex items-center gap-1.5 py-1 min-h-[32px]"
                  >
                    <span className="text-[#C6A15B]">&bull;</span>
                    <span>{svc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Insights & Guides (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Insights &amp; Guides
            </h4>
            <ul className="space-y-2 text-xs">
              {insightLinks.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-[#C6A15B] transition-colors block py-1 min-h-[32px] line-clamp-2"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/insights"
                  className="text-[#C6A15B] font-semibold hover:underline block pt-1"
                >
                  All 8 Legal Articles &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Dual Branch Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Verified Offices
            </h4>
            
            {/* Mombasa HQ */}
            <div className="text-xs space-y-1">
              <Link href="/auctioneers-in-mombasa" className="flex items-center gap-1.5 text-[#C6A15B] font-bold hover:underline">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>MOMBASA (HEADQUARTERS)</span>
              </Link>
              <p className="text-slate-300 pl-5 leading-relaxed">
                Nkrumah Road, NSSF Building,<br />
                7th Floor, Door 733, Mombasa.
              </p>
            </div>

            {/* Nairobi Branch */}
            <div className="text-xs space-y-1 pt-1">
              <Link href="/auctioneers-in-nairobi" className="flex items-center gap-1.5 text-[#C6A15B] font-bold hover:underline">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>NAIROBI BRANCH</span>
              </Link>
              <p className="text-slate-300 pl-5 leading-relaxed">
                All Saints Cathedral Office, Nairobi.
              </p>
            </div>

            {/* Direct Lines */}
            <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a
                  href="tel:0720934476"
                  className="font-bold text-white hover:text-[#C6A15B] transition-colors"
                >
                  0720 934 476
                </a>
              </p>

              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/254720934476?text=Hello%20Makuri%20Auctioneers,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: 0720 934 476
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a
                  href="mailto:info@makuriauctioneers.co.ke"
                  className="text-slate-200 hover:text-[#C6A15B] transition-colors break-all"
                >
                  info@makuriauctioneers.co.ke
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-800/80 bg-[#050a17] py-6 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Makuri Auctioneers. Founded in 1995. Mombasa &amp; Nairobi, Kenya.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/about-us" className="hover:text-slate-200 transition-colors">
              About Us
            </Link>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <Link href="/locations" className="hover:text-slate-200 transition-colors">
              Locations
            </Link>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <Link href="/contact-us" className="hover:text-slate-200 transition-colors">
              Contact
            </Link>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-slate-200 transition-colors underline"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <button
              onClick={onOpenTermsModal}
              className="hover:text-slate-200 transition-colors underline"
            >
              Terms of Service
            </button>
            <span className="text-slate-700 hidden sm:inline">&bull;</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#C6A15B] transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
