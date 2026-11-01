import React from 'react';
import Link from 'next/link';
import { ArrowRight, Gavel, ShieldAlert, Search, LineChart, Building, MapPin, BookOpen } from 'lucide-react';

interface RelatedItem {
  title: string;
  href: string;
  description: string;
  tag: string;
}

interface RelatedServicesSectionProps {
  currentSlug?: string;
  items?: RelatedItem[];
  title?: string;
  subtitle?: string;
}

const defaultRelatedServices: RelatedItem[] = [
  {
    title: 'Auctioneers in Mombasa',
    href: '/auctioneers-in-mombasa',
    description: 'Headquarters operations at NSSF Building handling coastal asset sales, court warrants, and commercial plant auctions.',
    tag: 'Location Focus',
  },
  {
    title: 'Auctioneers in Nairobi',
    href: '/auctioneers-in-nairobi',
    description: 'Nairobi branch at All Saints Cathedral serving financial institutions, commercial banks, and corporate entities.',
    tag: 'Location Focus',
  },
  {
    title: 'Auctioneering Services Kenya',
    href: '/auctioneering-services-kenya',
    description: 'Public auctions, movable and immovable asset disposal, valuation coordination, and official gazetted notices.',
    tag: 'Core Service',
  },
  {
    title: 'Repossession Services Kenya',
    href: '/repossession-services-kenya',
    description: 'Lawful vehicle repossession, heavy plant recovery, and secured collateral enforcement under Kenyan law.',
    tag: 'Core Service',
  },
  {
    title: 'Asset Recovery Services Kenya',
    href: '/asset-recovery-services-kenya',
    description: 'Securing, safeguarding, and liquidating default securities with physical trace operations nationwide.',
    tag: 'Core Service',
  },
  {
    title: 'Private Investigation Services',
    href: '/private-investigation-services-kenya',
    description: 'Corporate fraud investigations, debtor asset tracing, pre-lending due diligence, and background verification.',
    tag: 'Specialized',
  },
  {
    title: 'Business Consultancy Kenya',
    href: '/business-consultancy-kenya',
    description: 'Strategic risk mitigation, business recovery advisory, corporate restructuring, and statutory compliance.',
    tag: 'Advisory',
  },
  {
    title: 'Real Estate Management',
    href: '/real-estate-management-kenya',
    description: 'Comprehensive property administration, tenancy oversight, rental recovery, and commercial asset preservation.',
    tag: 'Asset Management',
  },
];

export default function RelatedServicesSection({
  currentSlug,
  items,
  title = 'Explore Related Services & Locations',
  subtitle = 'Discover our full range of regulated auctioneering, legal enforcement, and asset advisory solutions across Kenya.',
}: RelatedServicesSectionProps) {
  const displayItems = (items || defaultRelatedServices).filter(
    (item) => item.href !== currentSlug
  ).slice(0, 4);

  return (
    <section className="py-12 sm:py-16 bg-[#F4F6F9] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#163E72] block mb-1">
              Internal Directory &bull; Nationwide Reach
            </span>
            <h2 className="font-serif-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1730]">
              {title}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/locations"
              className="text-xs font-semibold text-[#163E72] hover:text-[#C6A15B] flex items-center gap-1 transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>All Branch Locations &rarr;</span>
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/insights"
              className="text-xs font-semibold text-[#163E72] hover:text-[#C6A15B] flex items-center gap-1 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Legal Insights &rarr;</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-xl p-5 border border-slate-200 hover:border-[#C6A15B] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#163E72] bg-slate-100 px-2 py-0.5 rounded mb-2.5">
                  {item.tag}
                </span>
                <h3 className="font-serif-heading text-base font-bold text-[#0B1730] group-hover:text-[#163E72] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-[#C6A15B] group-hover:text-[#b5914a] pt-3 border-t border-slate-100">
                <span>View Full Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
