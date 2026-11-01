import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import PageHero from '@/components/PageHero';
import BranchContactCard from '@/components/BranchContactCard';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import RelatedServicesSection from '@/components/RelatedServicesSection';
import ServiceInquiryForm from '@/components/ServiceInquiryForm';
import SafeImage from '@/components/SafeImage';
import { Gavel, CheckCircle2, FileText, Scale, Megaphone, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Auctioneering Services in Kenya | Makuri Auctioneers',
  description: 'Premier licensed auctioneering services in Kenya. Public auctions of movable & immovable assets, valuation coordination & notices in Mombasa & Nairobi.',
  keywords: [
    'Auctioneering services in Kenya',
    'Auctioneering companies in Kenya',
    'Public auctions Kenya',
    'Movable and immovable asset sales Kenya',
    'Asset valuation coordination',
    'Professional auction management',
    'Auction notices Kenya',
    'Makuri Auctioneers'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/auctioneering-services-kenya',
  },
  openGraph: {
    title: 'Auctioneering Services in Kenya | Makuri Auctioneers',
    description: 'Statutory public auctions, movable & immovable property realization, and professional auction management in Mombasa and Nairobi.',
    url: 'https://makuri-auctioneers.co.ke/auctioneering-services-kenya',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/hero_auction.jpg', width: 1200, height: 630, alt: 'Auctioneering Services in Kenya' }],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function AuctioneeringServicesKenyaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Auctioneering Services',
    'provider': {
      '@type': 'ProfessionalService',
      'name': 'Makuri Auctioneers',
      'telephone': '+254720934476',
      'email': 'info@makuriauctioneers.co.ke',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Nkrumah Road, NSSF Building, 7th Floor, Door 733',
        'addressLocality': 'Mombasa',
        'addressCountry': 'KE',
      },
    },
    'areaServed': [
      { '@type': 'Country', 'name': 'Kenya' },
      { '@type': 'City', 'name': 'Mombasa' },
      { '@type': 'City', 'name': 'Nairobi' },
    ],
    'description': 'Public auctions, movable and immovable asset disposal, valuation coordination, and statutory auction notices throughout Kenya.',
  };

  const faqs: FaqItem[] = [
    {
      question: 'What laws govern auctioneering services in Kenya?',
      answer:
        'All auctioneering in Kenya is regulated under the Auctioneers Act (Cap. 526) and the Auctioneers Rules, supervised by the Auctioneers Licensing Board (ALB). Additional procedural guidelines stem from the Civil Procedure Act and the Land Act regarding statutory notices of sale.',
    },
    {
      question: 'What is the standard notice period before a property auction in Kenya?',
      answer:
        'For immovable properties sold under a charge, statutory notices typically require a 3-month statutory notice of default, followed by a 40-day notice of intention to sell, and a mandatory 14-day public newspaper advertisement prior to auction day.',
    },
    {
      question: 'Can private individuals or corporations instruct you to auction assets?',
      answer:
        'Yes. In addition to commercial banks and court warrants, we assist private corporate entities, manufacturing firms, estates, and individual asset owners seeking transparent liquidation of surplus vehicles, machinery, or properties.',
    },
    {
      question: 'How do you coordinate asset valuation prior to public auction?',
      answer:
        'We work in direct coordination with accredited licensed practicing valuers registered under the Valuers Act of Kenya to establish forced sale values and current market values, ensuring transparency and legal reserve price compliance.',
    },
    {
      question: 'Where do public auctions take place?',
      answer:
        'Auctions can be conducted on-site at the asset location (such as commercial premises, yards, or farms) or at our verified branch offices in Mombasa (NSSF Building) or Nairobi (All Saints Cathedral Office).',
    },
  ];

  const servicePillars = [
    {
      title: 'Public Auctions',
      desc: 'Transparent, highly publicized open-cry bidding events conducted in strict compliance with statutory auction procedures to achieve true market realization.',
    },
    {
      title: 'Sale of Movable & Immovable Assets',
      desc: 'Comprehensive realization of real estate (land, commercial buildings, residential properties) and movable collateral (motor vehicles, earthmovers, office inventory).',
    },
    {
      title: 'Asset Valuation Coordination',
      desc: 'Liaising with certified registered valuers to determine market value and forced sale valuations in compliance with statutory reserve requirements.',
    },
    {
      title: 'Auction Administration & Accounting',
      desc: 'Full regulatory compliance, escrow deposit reconciliation, bidder registration, statutory record keeping, and prompt remittance of proceeds to instructing principals.',
    },
    {
      title: 'Auction Notices & National Announcements',
      desc: 'Preparation, publication, and legal service of official auction announcements in prominent Kenyan daily newspapers and the Kenya Gazette.',
    },
    {
      title: 'Professional Auction Management',
      desc: 'End-to-end execution from pre-auction site security and cataloging to hammer fall, purchase agreement execution, and title transfer assistance.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F9] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Regulated Professional Service &bull; Auctioneers Act (Cap. 526)"
          title="Professional Auctioneering Services in Kenya"
          description="Delivering transparent, lawful, and high-recovery public auctioneering across Mombasa, Nairobi, and Kenya nationwide. Partnering with commercial banks, corporations, law firms, and private principals since 1995."
          breadcrumbs={[
            { label: 'Services', href: '/#services' },
            { label: 'Auctioneering Services Kenya' },
          ]}
          primaryCtaText="Call Desk: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="Request Auction Services"
          secondaryCtaHref="#inquiry-form"
        />

        {/* In-Depth Service Narrative */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#163E72] block mb-2">
                Core Practice Area
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730] leading-snug mb-4">
                Transparent, High-Recovery Asset Liquidation Under Kenyan Law
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At <strong>Makuri Auctioneers</strong>, our auctioneering operations are engineered to deliver unmatched efficiency, complete legal safety, and optimal asset recovery. Founded in <strong>1995</strong>, our practice has overseen thousands of public sales encompassing industrial equipment, prime urban commercial property, agricultural land, vehicle fleets, and court-decreed attachments.
              </p>
            </div>

            {/* 6 Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {servicePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#F4F6F9] border border-slate-200 hover:border-[#C6A15B] transition-all hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#163E72] text-[#C6A15B] flex items-center justify-center font-bold text-sm mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="font-serif-heading text-lg font-bold text-[#0B1730] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dual Implements Visual Showcase */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1730] text-white border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C6A15B]">
                  <Scale className="w-4 h-4" />
                  <span>The Heritage of Public Auctioneering</span>
                </div>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
                  The Official Gavel &amp; Auction Bell
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  In statutory auction practice, every phase of the bidding process is clearly declared through official trade regalia. The ringing of the auction bell formally summons prospective bidders and signals the opening of lots, while the decisive fall of our traditional hardwood gavel represents the legally binding contract of sale.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs">
                  <Link
                    href="/auctioneers-in-mombasa"
                    className="text-[#C6A15B] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Mombasa Operations</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-slate-600">&bull;</span>
                  <Link
                    href="/auctioneers-in-nairobi"
                    className="text-[#C6A15B] font-bold hover:underline flex items-center gap-1"
                  >
                    <span>Nairobi Operations</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
                <div className="relative rounded-xl overflow-hidden aspect-square bg-slate-900 border border-slate-700/80 p-2">
                  <SafeImage
                    src="/images/auction_gavel.jpeg"
                    fallbackSrc="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.28.03_PM_eeddc43c.jpeg"
                    alt="Makuri Auctioneers Official Gavel"
                    fill
                    sizes="180px"
                    className="object-contain p-2"
                  />
                  <div className="absolute bottom-1.5 inset-x-2 text-center text-[10px] font-bold text-[#C6A15B] bg-black/60 rounded py-0.5">
                    Official Gavel
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden aspect-square bg-slate-900 border border-slate-700/80 p-2">
                  <SafeImage
                    src="/images/auction_bell.jpeg"
                    fallbackSrc="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.28.03_PM__1__2a5d19d1.jpeg"
                    alt="Makuri Auctioneers Official Auction Bell"
                    fill
                    sizes="180px"
                    className="object-contain p-2"
                  />
                  <div className="absolute bottom-1.5 inset-x-2 text-center text-[10px] font-bold text-[#C6A15B] bg-black/60 rounded py-0.5">
                    Auction Bell
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Lead Capture Form */}
        <ServiceInquiryForm
          defaultService="Auctioneering Services"
          defaultSubject="Auctioneering Services Instruction"
          title="Instruct Our Auctioneering Team"
          subtitle="Speak directly with our licensed case officers in Mombasa (NSSF Building) or Nairobi (All Saints Cathedral Office)."
        />

        {/* Verified Branch Locations */}
        <BranchContactCard
          title="Consult Our Auctioneering Offices"
          subtitle="Visit our verified premises or contact our case desk for confidential matter intake."
        />

        {/* FAQs */}
        <FaqAccordion
          items={faqs}
          title="Frequently Asked Questions &bull; Auctioneering in Kenya"
          subtitle="Statutory frameworks, auction notices, and bidder procedures explained clearly."
        />

        {/* Related Services */}
        <RelatedServicesSection
          currentSlug="/auctioneering-services-kenya"
          title="Related Services &amp; Locations"
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
