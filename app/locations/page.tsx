import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import PageHero from '@/components/PageHero';
import BranchContactCard from '@/components/BranchContactCard';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import RelatedServicesSection from '@/components/RelatedServicesSection';
import ServiceInquiryForm from '@/components/ServiceInquiryForm';
import { MapPin, Building2, Phone, MessageSquare, Mail, Navigation, Compass, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Branch Locations & Regional Coverage | Makuri Auctioneers',
  description: 'Verified office locations: Mombasa HQ at NSSF Building, 7th Flr, Door 733 and Nairobi Branch at All Saints Cathedral Office. Serving Kenya nationwide.',
  keywords: [
    'Makuri Auctioneers locations',
    'Auctioneers in Mombasa',
    'Auctioneers in Nairobi',
    'Auctioneers NSSF Building Mombasa',
    'Auctioneers All Saints Cathedral Nairobi',
    'Auctioneers Coast Kenya',
    'Auctioneers Kenya nationwide'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/locations',
  },
  openGraph: {
    title: 'Branch Locations & Regional Coverage | Makuri Auctioneers',
    description: 'Explore Makuri Auctioneers verified physical offices in Mombasa and Nairobi, with nationwide operational capability across all 47 counties of Kenya.',
    url: 'https://makuri-auctioneers.co.ke/locations',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/hero_auction.jpg', width: 1200, height: 630, alt: 'Makuri Auctioneers Branch Locations' }],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function LocationsPage() {
  const regionalCorridors = [
    {
      region: 'Coast Region (Headquarters Hub)',
      base: 'Mombasa HQ - NSSF Building',
      coverage: 'Mombasa County, Kilifi, Malindi, Kwale, Diani, Lamu, Taita Taveta (Voi), Mariakani.',
      focus: 'Port logistics disposal, marine asset recovery, beachfront property auctions, commercial landlord distress.',
    },
    {
      region: 'Nairobi & Central Metropolitan Hub',
      base: 'Nairobi Branch - All Saints Cathedral Office',
      coverage: 'Nairobi County, Kiambu, Thika, Machakos, Athi River, Kajiado, Kitengela, Limuru.',
      focus: 'Corporate fleet repossession, industrial equipment auctions, commercial debt realization, court decree enforcement.',
    },
    {
      region: 'Rift Valley & Western Corridors',
      base: 'Coordinated via Nairobi Desk',
      coverage: 'Nakuru, Naivasha, Eldoret, Kericho, Kisumu, Kakamega, Kitale.',
      focus: 'Agricultural machinery recovery, commercial vehicle repossession, land auctions, due diligence.',
    },
    {
      region: 'Eastern & Northern Corridors',
      base: 'Coordinated via Mombasa & Nairobi Desks',
      coverage: 'Embu, Meru, Nanyuki, Garissa, Isiolo, Kitui.',
      focus: 'Secured collateral tracing, transport fleet recovery, estate asset liquidation.',
    },
  ];

  const locationFaqs: FaqItem[] = [
    {
      question: 'Which is the primary headquarters of Makuri Auctioneers?',
      answer:
        'Our corporate headquarters is in Mombasa, located on Nkrumah Road at the NSSF Building, 7th Floor, Door 733. Established in 1995, this office coordinates company governance and coast operations.',
    },
    {
      question: 'Can I engage Makuri Auctioneers in Nairobi for services across Central Kenya?',
      answer:
        'Yes. Our Nairobi branch at the All Saints Cathedral Office operates a full team of licensed officers and investigators servicing Nairobi, Kiambu, Machakos, Kajiado, and the wider Mount Kenya region.',
    },
    {
      question: 'Does Makuri Auctioneers handle asset repossession outside major cities?',
      answer:
        'Yes. Our mobile tracking and recovery teams operate across all 47 counties of Kenya, supported by secured towing networks and bonded holding yard access nationwide.',
    },
    {
      question: 'How do I find directions to your offices?',
      answer:
        'You can use the Google Maps navigation buttons on our website, or call 0720 934 476 for real-time guidance from our reception team.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F9] text-slate-900">
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Verified Offices &bull; Nationwide Operational Reach"
          title="Makuri Auctioneers Branch Locations &amp; Operational Corridors"
          description="Anchored by our corporate headquarters in Mombasa and our branch in Nairobi, Makuri Auctioneers provides seamless, lawful auctioneering and asset recovery across Kenya."
          breadcrumbs={[
            { label: 'Locations' },
          ]}
          primaryCtaText="Call Central Desk: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="Find Nearest Office"
          secondaryCtaHref="#branches"
        />

        {/* Dual Branch Cards Section */}
        <div id="branches">
          <BranchContactCard
            title="Our Verified Branch Network"
            subtitle="Visit our executive offices or connect with our regional case directors."
          />
        </div>

        {/* Regional Corridors Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#163E72] block mb-2">
                Operational Reach
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730] leading-snug mb-3">
                Nationwide Geographic Deployment Across Kenya
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                While our physical executive suites are established in Mombasa and Nairobi, our operational mandate as licensed auctioneers under the Auctioneers Act spans all 47 counties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regionalCorridors.map((corridor, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F4F6F9] border border-slate-200 hover:border-[#C6A15B] transition-all hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#163E72] text-[#C6A15B]">
                        Corridor {idx + 1}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {corridor.base}
                      </span>
                    </div>

                    <h3 className="font-serif-heading text-lg font-bold text-[#0B1730]">
                      {corridor.region}
                    </h3>

                    <div>
                      <span className="text-xs font-bold text-slate-700 block mb-0.5">
                        Key Counties &amp; Towns:
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {corridor.coverage}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-slate-700 block mb-0.5">
                        Primary Service Focus:
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {corridor.focus}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                    <a
                      href="tel:0720934476"
                      className="font-bold text-[#163E72] hover:text-[#C6A15B] inline-flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>Inquire for this region</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Between Mombasa & Nairobi Specific Pages */}
        <section className="py-12 bg-[#0B1730] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-serif-heading text-xl sm:text-2xl font-bold text-white mb-2">
                Dedicated City Landing Pages
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Explore comprehensive location-specific information, local case types, and verified office maps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Link
                href="/auctioneers-in-mombasa"
                className="group p-6 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#C6A15B] transition-all"
              >
                <div className="flex items-center gap-2 text-[#C6A15B] text-xs font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Coast Headquarters</span>
                </div>
                <h3 className="font-serif-heading text-lg font-bold text-white group-hover:text-[#C6A15B] transition-colors mb-2">
                  Auctioneers in Mombasa &rarr;
                </h3>
                <p className="text-xs text-slate-300">
                  NSSF Building, 7th Floor, Door 733, Nkrumah Road. Coastal asset sales, port cargo &amp; court warrants.
                </p>
              </Link>

              <Link
                href="/auctioneers-in-nairobi"
                className="group p-6 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#C6A15B] transition-all"
              >
                <div className="flex items-center gap-2 text-[#C6A15B] text-xs font-bold uppercase tracking-wider mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>Capital City Branch</span>
                </div>
                <h3 className="font-serif-heading text-lg font-bold text-white group-hover:text-[#C6A15B] transition-colors mb-2">
                  Auctioneers in Nairobi &rarr;
                </h3>
                <p className="text-xs text-slate-300">
                  All Saints Cathedral Office, Nairobi. Commercial property, corporate fleets &amp; bank charge recovery.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <ServiceInquiryForm
          title="Direct Your Regional Matter"
          subtitle="Our central case dispatch will route your instruction to the nearest field recovery unit."
        />

        {/* FAQs */}
        <FaqAccordion
          items={locationFaqs}
          title="Frequently Asked Questions &bull; Locations &amp; Jurisdictions"
          subtitle="Clear answers on branch operations and nationwide service coverage."
        />

        {/* Related Services */}
        <RelatedServicesSection
          currentSlug="/locations"
          title="Our Regulated Service Lines"
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
