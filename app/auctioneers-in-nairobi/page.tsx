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
import { Gavel, Shield, MapPin, CheckCircle2, Building2, Scale, Landmark, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Auctioneers in Nairobi | Makuri Auctioneers All Saints Cathedral',
  description: 'Professional licensed auctioneers in Nairobi based at All Saints Cathedral Office. Specializing in commercial property auctions, vehicle repossession & plant asset sales.',
  keywords: [
    'Auctioneers in Nairobi',
    'Auctioneering companies in Nairobi',
    'Professional auctioneering companies in Nairobi',
    'Asset recovery services in Nairobi',
    'Repossession services in Nairobi',
    'All Saints Cathedral Office auctioneers',
    'Commercial asset auctions Nairobi Kenya',
    'Makuri Auctioneers Nairobi'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/auctioneers-in-nairobi',
  },
  openGraph: {
    title: 'Auctioneers in Nairobi | Makuri Auctioneers All Saints Cathedral',
    description: 'Premier licensed auctioneers in Nairobi, Kenya. All Saints Cathedral Office. Providing lawful asset recovery, commercial property disposal, and corporate fleet auctions.',
    url: 'https://makuri-auctioneers.co.ke/auctioneers-in-nairobi',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/hero_auction.jpg', width: 1200, height: 630, alt: 'Auctioneers in Nairobi All Saints Cathedral Office' }],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function AuctioneersInNairobiPage() {
  const nairobiLocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Makuri Auctioneers - Nairobi Branch Office',
    'image': 'https://makuri-auctioneers.co.ke/images/hero_auction.jpg',
    'telephone': '+254720934476',
    'email': 'info@makuriauctioneers.co.ke',
    'url': 'https://makuri-auctioneers.co.ke/auctioneers-in-nairobi',
    'priceRange': 'KES',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'All Saints Cathedral Office',
      'addressLocality': 'Nairobi',
      'addressRegion': 'Nairobi County',
      'addressCountry': 'KE',
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '08:00',
        'closes': '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Saturday'],
        'opens': '08:30',
        'closes': '13:00',
      },
    ],
  };

  const nairobiFaqs: FaqItem[] = [
    {
      question: 'Where is Makuri Auctioneers located in Nairobi?',
      answer:
        'Our Nairobi branch office is located at the All Saints Cathedral Office on Kenyatta Avenue / Processional Way, Nairobi, Kenya. This central location gives our clients swift access from Nairobi CBD, Upper Hill, Community, and Westlands.',
    },
    {
      question: 'What types of assets do you auction in Nairobi?',
      answer:
        'In Nairobi, we regularly coordinate the disposal of commercial real estate, corporate motor vehicle fleets, construction machinery, industrial plant assets, and secured credit collateral under the statutory instructions of banks, law firms, and court registries.',
    },
    {
      question: 'Do you handle commercial repossession across Nairobi and Kiambu?',
      answer:
        'Yes. Our licensed repossession officers operate across Nairobi County (Industrial Area, Westlands, Kilimani, Embakasi, Kasarani, Karen) as well as the larger Nairobi Metropolitan Area including Kiambu, Thika, Machakos, Athi River, and Kajiado.',
    },
    {
      question: 'Can you assist law firms with Court decree executions in Nairobi?',
      answer:
        'Absolutely. We act as court brokers and licensed auctioneers executing warrants of attachment, proclaimed debtor movable assets, and conducting public auctions in strict accordance with the Civil Procedure Act and Auctioneers Act.',
    },
    {
      question: 'How do I contact the Nairobi branch desk?',
      answer:
        'You can call our central telephone desk at 0720 934 476, chat with our case managers on WhatsApp, or send an instruction document to info@makuriauctioneers.co.ke.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F9] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nairobiLocalBusinessSchema) }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          badge="Nairobi Branch Office &bull; Central Kenya"
          title="Professional Licensed Auctioneers in Nairobi, Kenya"
          description="Operating from our All Saints Cathedral Office in Nairobi, Makuri Auctioneers delivers institutional-grade auctioneering, asset recovery, and commercial debt execution services across the capital city and nationwide."
          breadcrumbs={[
            { label: 'Locations', href: '/locations' },
            { label: 'Auctioneers in Nairobi' },
          ]}
          primaryCtaText="Call Nairobi Desk: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="Submit Nairobi Instruction"
          secondaryCtaHref="#inquiry-form"
        />

        {/* Nairobi Commercial & Legal Authority Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163E72]">
                  <Landmark className="w-4 h-4 text-[#C6A15B]" />
                  <span>All Saints Cathedral Office &bull; Nairobi Branch</span>
                </div>

                <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730] leading-snug">
                  Strategic Auctioneering &amp; Asset Realization for Nairobi&apos;s Corporate Community
                </h2>

                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    As Kenya&apos;s economic heartbeat, Nairobi demands auctioneering partners who operate with the highest standard of procedural exactness, speed, and discretion. From our <strong>All Saints Cathedral Office in Nairobi</strong>, <strong>Makuri Auctioneers</strong> provides direct legal and operational support to leading tier-1 banking institutions, commercial lenders, corporate enterprises, and premier legal practitioners.
                  </p>
                  <p>
                    Whether liquidating heavy earthmoving machinery in Industrial Area, auctioning residential property in Kilimani and Kileleshwa, or conducting court-ordered distress actions in Upper Hill and Westlands, our Nairobi operations ensure total compliance with the <em>Auctioneers Act (Cap. 526)</em> and the <em>Movable Property Security Rights Act (MPSRA)</em>.
                  </p>
                </div>

                {/* Nairobi Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-3.5 rounded-lg bg-[#F4F6F9] border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1">
                      <Gavel className="w-4 h-4 text-[#C6A15B]" />
                      <span>Commercial &amp; Residential Real Estate</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Disposal of office blocks, apartment developments, go-downs in Industrial Area, and residential parcels.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#F4F6F9] border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1">
                      <Shield className="w-4 h-4 text-[#C6A15B]" />
                      <span>Corporate Fleet &amp; Vehicle Auctions</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      High-frequency auctions for commercial trucks, logistics vans, passenger vehicles, and construction machinery.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#F4F6F9] border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1">
                      <Scale className="w-4 h-4 text-[#C6A15B]" />
                      <span>Bank Charge Realization</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Lawful service of statutory redemption notices and realization of charged securities on behalf of financial lenders.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#F4F6F9] border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1">
                      <Building2 className="w-4 h-4 text-[#C6A15B]" />
                      <span>Distress for Rent Actions</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Execution of distress for rent warrants for commercial towers, shopping centers, and office parks across Nairobi.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 items-center text-xs">
                  <Link
                    href="/repossession-services-kenya"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Nairobi Repossession Services &rarr;
                  </Link>
                  <span className="text-slate-300">&bull;</span>
                  <Link
                    href="/auctioneers-in-mombasa"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Explore our Mombasa HQ &rarr;
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Frame */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0B1730] aspect-[4/3]">
                  <SafeImage
                    src="/images/hero_auction.jpg"
                    fallbackSrc="/images/hero_mombasa_auction_1793440617435.jpg"
                    alt="Makuri Auctioneers Nairobi Corporate Auction Services"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block mb-1">
                      Nairobi Office
                    </span>
                    <p className="text-xs font-semibold">
                      All Saints Cathedral Office, Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F4F6F9] border border-slate-200 text-xs text-slate-700 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#0B1730]">
                    <MapPin className="w-4 h-4 text-[#C6A15B]" />
                    <span>Nairobi &amp; Central Metropolitan Coverage:</span>
                  </div>
                  <p className="leading-relaxed">
                    Nairobi CBD &bull; Upper Hill &bull; Westlands &bull; Industrial Area &bull; Kilimani &bull; Karen &bull; Gigiri &bull; Embakasi &bull; Thika &bull; Kiambu &bull; Machakos &bull; Athi River &bull; Kajiado.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Verified Physical Branch Details */}
        <BranchContactCard
          highlightBranch="nairobi"
          title="Visit Our Nairobi Branch Office"
          subtitle="Conveniently situated at All Saints Cathedral Office on Kenyatta Avenue."
        />

        {/* Lead Capture Form */}
        <ServiceInquiryForm
          defaultService="Auctioneering Services"
          defaultSubject="Nairobi Auction & Asset Instruction"
          title="Instruct Our Nairobi Case Management Team"
          subtitle="Submit your bank warrant, fleet recovery brief, or asset liquidation notice for rapid capital-city action."
        />

        {/* Local FAQs */}
        <FaqAccordion
          items={nairobiFaqs}
          title="Frequently Asked Questions &bull; Auctioneers in Nairobi"
          subtitle="Clear answers regarding our Nairobi auction timelines, legal compliance, and fee structures."
        />

        {/* Contextual Internal Links */}
        <RelatedServicesSection
          currentSlug="/auctioneers-in-nairobi"
          title="Related Services &amp; Branch Locations"
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
