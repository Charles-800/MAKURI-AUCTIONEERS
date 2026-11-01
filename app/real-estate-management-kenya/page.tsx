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
import { Building, Key, Users, TrendingUp, ShieldCheck, FileSpreadsheet, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Estate Management in Mombasa & Kenya | Makuri Auctioneers',
  description: 'Professional real estate management, commercial property administration & tenant oversight in Mombasa & Nairobi. Preserving property value since 1995.',
  keywords: [
    'Real estate management in Mombasa',
    'Real estate management companies in Mombasa',
    'Real estate management Kenya',
    'Property management Kenya',
    'Commercial property administration Mombasa',
    'Tenancy management Nairobi',
    'Property marketing Kenya',
    'Makuri Auctioneers property management'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/real-estate-management-kenya',
  },
  openGraph: {
    title: 'Real Estate Management in Mombasa & Kenya | Makuri Auctioneers',
    description: 'Comprehensive property management, commercial leasing administration, rental remittance, and real estate asset preservation across Kenya.',
    url: 'https://makuri-auctioneers.co.ke/real-estate-management-kenya',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/hero_auction.jpg', width: 1200, height: 630, alt: 'Real Estate Management Makuri Auctioneers' }],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function RealEstateManagementKenyaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Real Estate Management & Property Administration',
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
    'description': 'Commercial and residential property management, tenancy administration, lease compliance, and real estate asset preservation in Kenya.',
  };

  const faqs: FaqItem[] = [
    {
      question: 'What types of real estate properties does Makuri Auctioneers manage?',
      answer:
        'We manage commercial office towers, industrial go-downs and logistics warehouses, shopping complexes, mixed-use commercial developments, multi-unit residential apartment blocks, and vacant land holdings across Mombasa and Nairobi.',
    },
    {
      question: 'How do you handle delinquent tenants and rent collection?',
      answer:
        'Our property management framework couples proactive, automated rent invoicing and electronic payment tracking with our statutory authority under the Distress for Rent Act (Cap. 293). When tenants default, our in-house auctioneering arm enforces lawful distress remedies promptly, protecting landlord cash flows.',
    },
    {
      question: 'Do you manage property maintenance and statutory land rates?',
      answer:
        'Yes. We administer routine preventative maintenance, vendor contracts, security oversight, utility reconciliation, and ensure timely compliance with County Government land rates and National Land Commission ground rent obligations.',
    },
    {
      question: 'How often do property owners receive accounting statements?',
      answer:
        'Property owners receive detailed monthly financial statements including rental income receipts, vetted operational disbursements, net remittance schedules, and tenancy occupancy reports.',
    },
    {
      question: 'Can you assist property owners in leasing vacant commercial or residential units?',
      answer:
        'Yes. Our property marketing team screens prospective tenants through rigorous background, credit, and employment verification to secure reliable, creditworthy occupants.',
    },
  ];

  const propertyPillars = [
    {
      icon: Building,
      title: 'Property Management',
      desc: 'Day-to-day oversight of physical buildings, facilities maintenance, vendor management, and utility billing reconciliation.',
    },
    {
      icon: Users,
      title: 'Tenancy Administration',
      desc: 'Rigorous prospective tenant vetting, lease agreement drafting, prompt monthly rent collection, and tenancy dispute resolution.',
    },
    {
      icon: Key,
      title: 'Property Marketing & Leasing',
      desc: 'Strategic marketing across digital and commercial channels to minimize vacancy rates and attract reputable corporate occupants.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Property Accounting & Administration',
      desc: 'Transparent escrow management, monthly landlord income distribution, service charge administration, and audit-ready records.',
    },
    {
      icon: TrendingUp,
      title: 'Real Estate Asset Management',
      desc: 'Capital expenditure planning, property value enhancement, re-positioning older commercial assets, and yield optimization.',
    },
    {
      icon: ShieldCheck,
      title: 'Distress & Legal Enforcement',
      desc: 'Direct in-house synergy with our licensed auctioneers to execute lawful distress for rent warrants without costly third-party delays.',
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
          badge="Asset Stewardship &bull; Commercial &amp; Residential"
          title="Professional Real Estate Management in Kenya"
          description="Maximizing rental yields, ensuring rigorous tenant compliance, and preserving real estate capital across Mombasa, Nairobi, and key urban centers in Kenya since 1995."
          breadcrumbs={[
            { label: 'Services', href: '/#services' },
            { label: 'Real Estate Management Kenya' },
          ]}
          primaryCtaText="Contact Property Desk: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="Request Property Portfolio Review"
          secondaryCtaHref="#inquiry-form"
        />

        {/* Narrative & Capabilities Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163E72]">
                  <Building className="w-4 h-4 text-[#C6A15B]" />
                  <span>Commercial &bull; Industrial &bull; Residential</span>
                </div>

                <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730] leading-snug">
                  Protecting Real Estate Yields with Robust Administration &amp; Statutory Backing
                </h2>

                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    Real estate represents one of the most significant asset classes for Kenyan investors, corporations, and institutional landowners. Yet, delinquent tenancies, deferred maintenance, and administrative inefficiencies frequently erode investment yields.
                  </p>
                  <p>
                    Established in <strong>1995</strong>, <strong>Makuri Auctioneers</strong> delivers a uniquely powerful property management proposition: combining meticulous day-to-day administration, tenant screening, and transparent accounting with our in-house statutory authority as licensed auctioneers to execute lawful distress for rent when defaults arise.
                  </p>
                </div>

                {/* 6 Capabilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {propertyPillars.map((p, idx) => {
                    const Icon = p.icon;
                    return (
                      <div key={idx} className="p-4 rounded-xl bg-[#F4F6F9] border border-slate-200">
                        <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1.5">
                          <Icon className="w-4 h-4 text-[#C6A15B] shrink-0" />
                          <span>{p.title}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 flex flex-wrap gap-4 items-center text-xs">
                  <Link
                    href="/auctioneering-services-kenya"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Property Auctioneering Services &rarr;
                  </Link>
                  <span className="text-slate-300">&bull;</span>
                  <Link
                    href="/contact-us"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Consult With Our Property Desk &rarr;
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Frame */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0B1730] aspect-[4/3]">
                  <SafeImage
                    src="/images/about_office.jpg"
                    fallbackSrc="/images/about_makuri_office_1793440617755.jpg"
                    alt="Makuri Auctioneers Real Estate Management and Property Administration Kenya"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block mb-1">
                      Institutional Property Desk
                    </span>
                    <p className="text-xs font-semibold">
                      Serving property owners in Mombasa, Nairobi, and Coast region
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F4F6F9] border border-slate-200 text-xs text-slate-700 space-y-1.5">
                  <p className="font-bold text-[#0B1730]">
                    Synergy of Auctioneering &amp; Management:
                  </p>
                  <p className="leading-relaxed">
                    Unlike standard estate agencies, Makuri Auctioneers holds the statutory mandate to carry out distress for rent, recovery of vacant possession, and asset auctions under one roof.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <ServiceInquiryForm
          defaultService="Real Estate Management"
          defaultSubject="Property Management Portfolio Inquiry"
          title="Instruct Our Property Management Division"
          subtitle="Submit your building specifications or portfolio details for tailored management solutions."
        />

        {/* Branch Offices */}
        <BranchContactCard
          title="Property Management Desks"
          subtitle="Offices at Mombasa HQ (NSSF Building) and Nairobi Branch (All Saints Cathedral)."
        />

        {/* FAQs */}
        <FaqAccordion
          items={faqs}
          title="Frequently Asked Questions &bull; Real Estate Management"
          subtitle="Clear answers on landlord remittance cycles, tenancy compliance, and distress for rent."
        />

        {/* Related Services */}
        <RelatedServicesSection
          currentSlug="/real-estate-management-kenya"
          title="Related Services &amp; Solutions"
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
