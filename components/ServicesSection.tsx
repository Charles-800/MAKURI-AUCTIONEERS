'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { Gavel, Truck, Search, Briefcase, Building2, ArrowRight, Check, X, Shield, Phone, FileText, ExternalLink } from 'lucide-react';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  pageUrl: string;
  image: string;
  fallbackImage?: string;
  summary: string;
  highlights: string[];
  fullDetails: string;
  statutoryCompliance: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'auctioneering',
    number: '01',
    title: 'Auctioneering Services',
    subtitle: 'Public & Private Asset Liquidation',
    pageUrl: '/auctioneering-services-kenya',
    image: '/images/auction_gavel.jpeg',
    fallbackImage: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.28.03_PM_eeddc43c.jpeg',
    summary: 'Comprehensive public auction execution and asset sales for movable and immovable property conducted with transparent bidding procedures.',
    highlights: [
      'Public auctions and distress for rent execution',
      'Sale of movable and immovable assets',
      'Asset valuation coordination & reserve pricing',
      'Auction administration and documentation',
      'Auction notices and announcements',
      'Professional auction management & bidder reconciliation'
    ],
    fullDetails: 'Makuri Auctioneers manages high-stakes public auctions for commercial banks, government parastatals, liquidators, and private clients across Mombasa, Nairobi, and throughout Kenya. We coordinate statutory advertisement periods, site inspection days, secure registration of eligible bidders, cataloging, and professional execution on auction day in strict compliance with the Auctioneers Act of Kenya.',
    statutoryCompliance: 'Conducted under the Auctioneers Act (Cap. 526) & Auctioneers Rules of Kenya with transparent accounting and prompt return to court / instructing principals.'
  },
  {
    id: 'court-orders',
    number: '02',
    title: 'Execution of Court Orders',
    subtitle: 'Judicial Enforcement & Attachment Warrants',
    pageUrl: '/execution-of-court-orders-kenya',
    image: '/images/hero_auction.jpg',
    fallbackImage: '/images/about_office.jpg',
    summary: 'Lawful execution of warrants of attachment and sale, eviction orders, distress for rent warrants, and decree enforcement issued by courts of competent jurisdiction across Kenya.',
    highlights: [
      'Warrants of attachment and sale of movable & immovable assets',
      'Eviction orders execution with formal police escort & inventories',
      'Distress for Rent Act warrants execution for commercial & residential premises',
      'Orders of delivery, seizure, and judicial custody of chattels',
      'Civil warrants execution and debtor surrender to court',
      'Comprehensive, prompt returns to court with sworn affidavits of service'
    ],
    fullDetails: 'Makuri Auctioneers executes high-priority court decrees and warrants issued by the High Court, Employment and Labour Relations Court, Environment and Land Court, and Magistrates\' Courts across Kenya. In strict compliance with the Civil Procedure Act (Cap. 21), Order 22 of the Civil Procedure Rules, and the Auctioneers Act (Cap. 526), our officers coordinate with the National Police Service for peaceful enforcement, perform exhaustive asset cataloging, observe statutory proclamation timelines, and file authentic returns to court.',
    statutoryCompliance: 'Executed pursuant to the Civil Procedure Act (Cap. 21), Order 22 Civil Procedure Rules, Auctioneers Act (Cap. 526), and Distress for Rent Act (Cap. 293).'
  },
  {
    id: 'realization-securities',
    number: '03',
    title: 'Realization of Securities',
    subtitle: 'Statutory Power of Sale & Collateral Liquidation',
    pageUrl: '/realization-of-securities-kenya',
    image: '/images/investigation.jpg',
    fallbackImage: '/images/asset_recovery.jpg',
    summary: 'Enforcement of statutory powers of sale on charged properties, mortgages, debentures, and movable collateral on behalf of commercial banks, SACCOs, microfinance institutions, and secured chargees.',
    highlights: [
      'Statutory power of sale enforcement under the Land Act 2012 (Sections 90–96)',
      'Realization of charged land, commercial buildings, and industrial plants',
      'Chattel mortgages & movable securities realization under the MPSRA 2017',
      'Debenture enforcement, pledge liquidation, and bank collateral workouts',
      'Independent professional valuation coordination for reserve price compliance',
      'Preparation and service of statutory 3-month, 40-day, and 14-day auction notices'
    ],
    fullDetails: 'We act on behalf of leading commercial banks, Tier-1 SACCOs, asset finance companies, and corporate chargees to realize non-performing loan collateral. Our senior auctioneers oversee the rigorous statutory notification process under Sections 90 and 96 of the Land Act, verify entries in the Movable Property Security Rights Act (MPSRA) registry, conduct forced sale valuations with accredited valuers, publish nationwide gazetted auction notices, and manage transparent competitive bidding.',
    statutoryCompliance: 'Conducted in strict compliance with the Land Act (No. 6 of 2012), Land Registration Act, Movable Property Security Rights Act (2017), and Auctioneers Rules.'
  },
  {
    id: 'repossession',
    number: '04',
    title: 'Repossession & Asset Recovery',
    subtitle: 'Lawful Collateral Retrieval Across Kenya',
    pageUrl: '/repossession-services-kenya',
    image: '/images/asset_recovery.jpg',
    fallbackImage: '/images/asset_recovery_machinery_1793440618886.jpg',
    summary: 'Secure, legally compliant retrieval and storage of collateral assets, commercial fleets, heavy equipment, and secured chattels.',
    highlights: [
      'Asset recovery services across coastal & national corridors',
      'Vehicle repossession (private & commercial fleets)',
      'Machinery and industrial equipment recovery',
      'Collateral recovery for financial institutions',
      'Professional asset recovery coordination & staging',
      'Recovery services conducted in accordance with applicable Kenyan laws'
    ],
    fullDetails: 'We assist secured creditors, asset financing institutions, hire-purchase lenders, and leasing firms in recovering secured collateral where default occurs. Our experienced field team operates with police notification, detailed inventory checklists, condition video/photo logging, and transfer to secure bonded storage facilities.',
    statutoryCompliance: 'All repossessions strictly adhere to the Movable Property Security Rights Act, the Auctioneers Act, and relevant statutory redemption notice requirements.'
  },
  {
    id: 'investigations',
    number: '05',
    title: 'Private Investigation Services',
    subtitle: 'Confidential Corporate & Asset Inquiries',
    pageUrl: '/private-investigation-services-kenya',
    image: '/images/investigation.jpg',
    fallbackImage: '/images/investigation_consultancy_1793440618628.jpg',
    summary: 'Discreet corporate intelligence, asset tracing, due diligence, and fraud investigations for informed legal and financial decision-making.',
    highlights: [
      'Corporate investigations and internal audit support',
      'Background verification for key executive appointments',
      'Asset tracing for debt enforcement & judgment execution',
      'Due diligence investigations for acquisitions and tenders',
      'Fraud investigations and evidentiary documentation',
      'Information gathering and investigative litigation support'
    ],
    fullDetails: 'When legal proceedings or credit recovery require concrete intelligence, Makuri Auctioneers deploys professional investigative techniques. We trace hidden or transferred assets, verify company directorships, inspect business premises, and prepare admissible factual reports for instructing advocates.',
    statutoryCompliance: 'Conducted under strict professional discretion, data privacy safeguards, and lawful investigative methodologies admissible in Kenyan courts.'
  },
  {
    id: 'consultancy',
    number: '06',
    title: 'Business Consultancy',
    subtitle: 'Strategic Advisory & Risk Mitigation',
    pageUrl: '/business-consultancy-kenya',
    image: '/images/about_office.jpg',
    fallbackImage: '/images/about_makuri_office_1793440617755.jpg',
    summary: 'Advisory services designed to optimize corporate operations, manage financial risk, and structure effective debt and business turnaround strategies.',
    highlights: [
      'Business advisory services for local and regional enterprises',
      'Corporate strategy and commercial structuring',
      'Business risk assessment & credit exposure reviews',
      'Operational consultancy and logistics streamlining',
      'Business recovery advisory & debt restructuring',
      'Professional business solutions for organizational resilience'
    ],
    fullDetails: 'We assist enterprises navigating distressed balance sheets, credit default risks, and organizational transitions. Our advisory team provides practical recommendations on debt restructuring, workout arrangements, risk controls, and sustainable recovery strategies.',
    statutoryCompliance: 'Advising in alignment with commercial standards, the Insolvency Act of Kenya, and corporate governance best practices.'
  },
  {
    id: 'real-estate',
    number: '07',
    title: 'Real Estate Management',
    subtitle: 'Property Administration & Portfolio Marketing',
    pageUrl: '/real-estate-management-kenya',
    image: '/images/hero_auction.jpg',
    fallbackImage: '/images/hero_mombasa_auction_1793440617435.jpg',
    summary: 'End-to-end administration, tenancy oversight, asset marketing, and valuation advisory for residential and commercial real estate.',
    highlights: [
      'Property management and tenant administration',
      'Real estate consultancy for coastal & metropolitan properties',
      'Property marketing across digital & conventional channels',
      'Property administration & lease agreement supervision',
      'Real estate asset management & portfolio maintenance',
      'Property-related advisory services and rent collection oversight'
    ],
    fullDetails: 'Makuri Auctioneers provides rigorous property management services in Mombasa, Nyali, Bamburi, Diani, Kilifi, Nairobi, and broader regions. We manage tenant vetting, rent collection systems, routine maintenance, dispute resolution, and marketing of prime commercial and residential properties.',
    statutoryCompliance: 'Operating in accordance with Kenyan land registration laws, Sectional Properties Act, and landlord-tenant legislation.'
  }
];

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectServiceForInquiry }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleInquireClick = (serviceTitle: string) => {
    setSelectedService(null);
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(serviceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-28 bg-[#F4F6F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#163E72] mb-3">
            <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
            Our Core Competencies
            <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3.5xl lg:text-4.5xl font-bold text-[#0B1730] mb-3 text-balance">
            Specialized Corporate &amp; Statutory Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            From statutory public auctions, execution of court orders, and realization of securities to lawful repossession, confidential corporate investigations, and real estate management across Kenya.
          </p>
        </div>

        {/* 7 Service Cards Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#C6A15B]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Card Image */}
                  <div className="relative overflow-hidden bg-slate-900 h-48 sm:h-52 w-full">
                    <SafeImage
                      src={service.image}
                      fallbackSrc={service.fallbackImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730]/90 via-[#0B1730]/30 to-transparent z-10" />
                    
                    {/* Human Editorial Numbering */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0B1730]/85 backdrop-blur-sm rounded text-[11px] font-semibold text-[#C6A15B] border border-slate-700 z-10">
                      {service.number}
                    </div>

                    {/* Title overlay on bottom of image */}
                    <div className="absolute bottom-3 left-4 right-4 z-10">
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-[#C6A15B] mb-0.5">
                        {service.subtitle}
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-serif-heading">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6">
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      {service.highlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#C6A15B] mt-0.5 shrink-0" />
                          <span className="leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Touch-Friendly Actions */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                    <Link
                      href={service.pageUrl}
                      className="text-xs sm:text-sm font-bold text-[#163E72] hover:text-[#C6A15B] flex items-center gap-1 transition-colors min-h-[44px] py-1"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="text-xs font-semibold px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors min-h-[44px]"
                      >
                        Quick Overview
                      </button>
                      <button
                        onClick={() => handleInquireClick(service.title)}
                        className="text-xs font-bold px-3 py-2 rounded-lg bg-[#0B1730] hover:bg-[#163E72] text-[#C6A15B] hover:text-white transition-colors min-h-[44px]"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative bg-[#0B1730] text-white p-5 sm:p-7">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 p-2.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close service details"
              >
                <X className="w-5 h-5 text-slate-300" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A15B] mb-1">
                <span>{selectedService.number}</span>
                <span>&bull;</span>
                <span>{selectedService.subtitle}</span>
              </div>
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold pr-10">
                {selectedService.title}
              </h3>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-7 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Practice Scope
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedService.fullDetails}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Service Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#163E72]/10 text-[#163E72] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#C6A15B]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Implements Display for Auctioneering */}
              {selectedService.id === 'auctioneering' && (
                <div className="p-4 rounded-xl bg-[#0B1730] text-white border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                    <Gavel className="w-4 h-4" />
                    <span>Statutory Trade Regalia</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Makuri Auctioneers conducts every public sale with verified ceremonial instruments.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="bg-[#163E72]/40 rounded-lg p-2.5 flex items-center gap-3 border border-slate-700">
                      <div className="relative w-14 h-14 rounded bg-white/10 shrink-0 overflow-hidden">
                        <SafeImage
                          src="/images/auction_bell.jpeg"
                          fallbackSrc="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.28.03_PM__1__2a5d19d1.jpeg"
                          alt="Makuri Brass Auction Bell"
                          fill
                          sizes="56px"
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="text-[11px]">
                        <span className="font-bold text-white block">The Auction Bell</span>
                        <span className="text-slate-300">Opening lot declaration</span>
                      </div>
                    </div>

                    <div className="bg-[#163E72]/40 rounded-lg p-2.5 flex items-center gap-3 border border-slate-700">
                      <div className="relative w-14 h-14 rounded bg-white/10 shrink-0 overflow-hidden">
                        <SafeImage
                          src="/images/auction_gavel.jpeg"
                          fallbackSrc="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.28.03_PM_eeddc43c.jpeg"
                          alt="Makuri Auction Gavel"
                          fill
                          sizes="56px"
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="text-[11px]">
                        <span className="font-bold text-white block">The Auction Gavel</span>
                        <span className="text-slate-300">Binding fall of the hammer</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="p-3.5 sm:p-4 rounded-lg bg-blue-50/70 border border-blue-100 flex items-start gap-3">
                <Shield className="w-4 h-4 text-[#163E72] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-normal">
                  <span className="font-bold text-[#163E72] block mb-0.5">Statutory Framework &amp; Compliance</span>
                  {selectedService.statutoryCompliance}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <Link
                  href={selectedService.pageUrl}
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163E72] hover:text-[#C6A15B] py-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Dedicated Service Landing Page &rarr;</span>
                </Link>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-300 rounded-lg min-h-[44px]"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleInquireClick(selectedService.title)}
                    className="px-5 py-3 text-xs font-bold bg-[#0B1730] text-[#C6A15B] hover:bg-[#163E72] hover:text-white rounded-lg transition-colors shadow-sm min-h-[44px]"
                  >
                    Request This Service
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
