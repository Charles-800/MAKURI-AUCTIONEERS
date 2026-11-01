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
import { Gavel, Shield, MapPin, CheckCircle2, Clock, Phone, Building, Scale, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Auctioneers in Mombasa | Makuri Auctioneers NSSF Building',
  description: 'Licensed professional auctioneers in Mombasa based at NSSF Building, 7th Flr, Door 733, Nkrumah Rd. Expert public auctions, asset recovery & commercial sales.',
  keywords: [
    'Auctioneers in Mombasa',
    'Auctioneering companies in Mombasa',
    'Professional auctioneers in Mombasa',
    'NSSF Building auctioneers Mombasa',
    'Asset recovery services in Mombasa',
    'Court broker Mombasa',
    'Commercial property auctions Mombasa',
    'Makuri Auctioneers Mombasa'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/auctioneers-in-mombasa',
  },
  openGraph: {
    title: 'Auctioneers in Mombasa | Makuri Auctioneers NSSF Building',
    description: 'Premier licensed auctioneers in Mombasa, Kenya. Headquartered at NSSF Building, Nkrumah Road since 1995. Conducting lawful public auctions and asset realization.',
    url: 'https://makuri-auctioneers.co.ke/auctioneers-in-mombasa',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/hero_auction.jpg', width: 1200, height: 630, alt: 'Auctioneers in Mombasa NSSF Building' }],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function AuctioneersInMombasaPage() {
  const mombasaLocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Makuri Auctioneers - Mombasa Head Office',
    'image': 'https://makuri-auctioneers.co.ke/images/hero_auction.jpg',
    'telephone': '+254720934476',
    'email': 'info@makuriauctioneers.co.ke',
    'url': 'https://makuri-auctioneers.co.ke/auctioneers-in-mombasa',
    'priceRange': 'KES',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Nkrumah Road, NSSF Building, 7th Floor, Door 733',
      'addressLocality': 'Mombasa',
      'addressRegion': 'Coast',
      'postalCode': '80100',
      'addressCountry': 'KE',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -4.062089,
      'longitude': 39.673852,
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

  const mombasaFaqs: FaqItem[] = [
    {
      question: 'Where is Makuri Auctioneers located in Mombasa?',
      answer:
        'Our Mombasa corporate headquarters is situated on Nkrumah Road, inside the NSSF Building, 7th Floor, Door 733, Mombasa, Kenya. We welcome walk-in consultations, bank instruction deliveries, and legal brief submissions during regular business hours.',
    },
    {
      question: 'What types of auctioneering services do you offer in Mombasa and Coast region?',
      answer:
        'We execute public auctions for movable assets (vehicles, machinery, plant equipment, office inventory, port clearing items) and immovable property (residential, commercial, industrial land and buildings). We also coordinate distress for rent, bank charge sales, and court decree warrants.',
    },
    {
      question: 'Are Makuri Auctioneers licensed under the Auctioneers Act in Kenya?',
      answer:
        'Yes. Makuri Auctioneers operates with full statutory accreditation pursuant to the Auctioneers Act (Cap. 526) of the Laws of Kenya, adhering strictly to procedural notification rules, statutory gazette timelines, and transparent bidding protocols.',
    },
    {
      question: 'How do you coordinate property auctions across Kilifi, Kwale, and Malindi?',
      answer:
        'From our Mombasa central headquarters, our rapid deployment field team covers the entire Coast region—including Mombasa Island, Nyali, Bamburi, Changamwe, Mtwapa, Kilifi, Malindi, Diani, Kwale, and Voi. We conduct on-site inspections, coordinate valuations, and run public auctions with maximum buyer turnout.',
    },
    {
      question: 'How do I instruct Makuri Auctioneers for an auction in Mombasa?',
      answer:
        'You can call our direct line at 0720 934 476, message our Mombasa desk via WhatsApp, email info@makuriauctioneers.co.ke, or submit an instruction form on this page with your warrant, bank charge, or asset schedule.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F9] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mombasaLocalBusinessSchema) }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Page Hero */}
        <PageHero
          badge="Mombasa Head Office &bull; Founded in 1995"
          title="Licensed Professional Auctioneers in Mombasa, Kenya"
          description="Headquartered at NSSF Building on Nkrumah Road, Makuri Auctioneers provides premier auctioneering, lawful asset realization, and court-mandated commercial sales across Mombasa and the entire Coast region."
          breadcrumbs={[
            { label: 'Locations', href: '/locations' },
            { label: 'Auctioneers in Mombasa' },
          ]}
          primaryCtaText="Call Mombasa Desk: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="Submit Auction Instruction"
          secondaryCtaHref="#inquiry-form"
        />

        {/* Local Authority & Geographic Coverage Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163E72]">
                  <MapPin className="w-4 h-4 text-[#C6A15B]" />
                  <span>Nkrumah Road &bull; NSSF Building &bull; Coast Headquarters</span>
                </div>

                <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730] leading-snug">
                  Mombasa&apos;s Foremost Corporate Auctioneering &amp; Asset Realization Firm
                </h2>

                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    Established in <strong>1995</strong>, <strong>Makuri Auctioneers</strong> has maintained its primary corporate seat at the prestigious <strong>NSSF Building, 7th Floor, Door 733, on Nkrumah Road, Mombasa</strong>. Over nearly three decades of dedicated service, we have built an unblemished reputation as the trusted auctioneering firm for leading commercial banks, tier-1 financial institutions, micro-finance lenders, law firms, and private asset owners throughout Mombasa County.
                  </p>
                  <p>
                    From port and logistics hub inventory at Kilindini to prime beachfront hospitality real estate in Nyali, Diani, and Malindi, our licensed auctioneers carry out each engagement with rigorous adherence to the <em>Auctioneers Act (Cap. 526)</em>, ensuring transparent bidding, lawful public gazettement, and optimum asset realization for our principals.
                  </p>
                </div>

                {/* Local Competencies */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="p-3.5 rounded-lg bg-[#F4F6F9] border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1">
                      <Gavel className="w-4 h-4 text-[#C6A15B]" />
                      <span>Commercial &amp; Land Auctions</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Disposal of prime commercial plots, residential homes, beach plots, and warehouses across Coast Kenya.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#F4F6F9] border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1">
                      <Scale className="w-4 h-4 text-[#C6A15B]" />
                      <span>Court Brokerage &amp; Warrants</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Execution of High Court and Magistrates Court decrees, warrants of attachment, and sale of judgment debtor goods.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#F4F6F9] border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1">
                      <Shield className="w-4 h-4 text-[#C6A15B]" />
                      <span>Secured Yard Storage</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Secured holding yards in Mombasa for recovered motor vehicles, transport trucks, containers, and industrial machinery.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#F4F6F9] border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1">
                      <Building className="w-4 h-4 text-[#C6A15B]" />
                      <span>Distress for Rent Services</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Prompt, civil, and legally compliant distress for rent enforcement on behalf of commercial landlords.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 items-center text-xs">
                  <Link
                    href="/auctioneering-services-kenya"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    View Our Full Auctioneering Services &rarr;
                  </Link>
                  <span className="text-slate-300">&bull;</span>
                  <Link
                    href="/auctioneers-in-nairobi"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Explore our Nairobi Branch &rarr;
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Frame */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0B1730] aspect-[4/3]">
                  <SafeImage
                    src="/images/about_office.jpg"
                    fallbackSrc="/images/about_makuri_office_1793440617755.jpg"
                    alt="Makuri Auctioneers Mombasa NSSF Building Head Office"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block mb-1">
                      Mombasa Headquarters
                    </span>
                    <p className="text-xs font-semibold">
                      Nkrumah Road, NSSF Building, 7th Floor, Door 733, Mombasa
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F4F6F9] border border-slate-200 text-xs text-slate-700 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-[#0B1730]">
                    <Award className="w-4 h-4 text-[#C6A15B]" />
                    <span>Coast Regional Jurisdiction Covered:</span>
                  </div>
                  <p className="leading-relaxed">
                    Mombasa CBD &bull; Nyali &bull; Bamburi &bull; Kisauni &bull; Changamwe &bull; Port Reitz &bull; Likoni &bull; Diani &bull; Kwale &bull; Kilifi &bull; Malindi &bull; Mariakani &bull; Voi &bull; Lamu.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Verified Physical Branch Details */}
        <BranchContactCard
          highlightBranch="mombasa"
          title="Visit Makuri Auctioneers Mombasa Office"
          subtitle="Located in the heart of Mombasa Island on Nkrumah Road at the NSSF Building."
        />

        {/* Lead Capture Form */}
        <ServiceInquiryForm
          defaultService="Auctioneering Services"
          defaultSubject="Mombasa Auction Instruction"
          title="Instruct Our Mombasa Auctioneering Team"
          subtitle="Submit your bank warrant, distress for rent brief, or asset liquidation notice for rapid Coast execution."
        />

        {/* Local FAQs */}
        <FaqAccordion
          items={mombasaFaqs}
          title="Frequently Asked Questions &bull; Auctioneers in Mombasa"
          subtitle="Learn more about auction procedures, statutory notice timelines, and fee guidelines in Mombasa."
        />

        {/* Contextual Internal Links */}
        <RelatedServicesSection
          currentSlug="/auctioneers-in-mombasa"
          title="Related Services &amp; Branch Locations"
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
