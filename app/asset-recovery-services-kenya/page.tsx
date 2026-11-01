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
import { ShieldCheck, Search, Scale, Warehouse, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Asset Recovery Companies in Kenya | Makuri Auctioneers',
  description: 'Leading asset recovery company in Kenya. Tracing, physical securing & realization of distressed assets for banks, corporations & courts in Mombasa & Nairobi.',
  keywords: [
    'Asset recovery companies in Kenya',
    'Asset recovery services in Kenya',
    'Asset recovery services in Mombasa',
    'Asset recovery services in Nairobi',
    'Corporate asset recovery Kenya',
    'Secured creditor asset realization',
    'Distressed asset management Kenya',
    'Makuri Auctioneers'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/asset-recovery-services-kenya',
  },
  openGraph: {
    title: 'Asset Recovery Companies in Kenya | Makuri Auctioneers',
    description: 'Specialized asset recovery, tracing, bonded impoundment, and legal liquidation services across Mombasa, Nairobi, and Kenya nationwide.',
    url: 'https://makuri-auctioneers.co.ke/asset-recovery-services-kenya',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/asset_recovery.jpg', width: 1200, height: 630, alt: 'Asset Recovery Companies in Kenya' }],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function AssetRecoveryServicesKenyaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Asset Recovery Services',
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
    'description': 'Comprehensive asset recovery, debt realization, vehicle impoundment, and liquidation solutions for financial institutions and legal counsels across Kenya.',
  };

  const faqs: FaqItem[] = [
    {
      question: 'What is the difference between repossession and asset recovery?',
      answer:
        'While repossession specifically denotes the physical retrieval of a pledged movable asset (e.g. vehicle or machine) following contractual loan default, asset recovery is a comprehensive lifecycle that encompasses debtor tracing, forensic identification, physical securing, valuation, and final liquidation through public auction or negotiated settlement.',
    },
    {
      question: 'How do you safeguard assets once recovered?',
      answer:
        'We operate dedicated secure holding facilities with 24-hour physical guard patrols, comprehensive CCTV surveillance, and full perimeter security in both Mombasa and Nairobi. Detailed inventory receipts and photographic logs are generated immediately upon arrival.',
    },
    {
      question: 'Can Makuri Auctioneers recover assets hidden by evasive debtors?',
      answer:
        'Yes. Working alongside our internal private investigation wing, we deploy skip-tracing techniques, field intelligence, and public registry searches (NTSA, Lands Registry, Business Registration Service) to locate concealed or transferred assets.',
    },
    {
      question: 'What documentation is needed to initiate asset recovery?',
      answer:
        'Clients should provide certified copies of the underlying financing agreement, security deed, logbook or title deed, default notifications served on the debtor, and any relevant court decrees or warrants of attachment.',
    },
    {
      question: 'Which industries does Makuri Auctioneers serve for asset recovery?',
      answer:
        'We serve commercial banking institutions, SACCOs, microfinance organizations, asset leasing companies, logistics corporations, property developers, and legal practices throughout Kenya.',
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
          badge="Specialized Practice &bull; Protecting Institutional Capital"
          title="Asset Recovery Services in Kenya"
          description="Delivering strategic asset tracing, prompt physical recovery, secure bonded custody, and statutory liquidation for financial institutions, legal counsels, and corporate enterprises across Mombasa and Nairobi."
          breadcrumbs={[
            { label: 'Services', href: '/#services' },
            { label: 'Asset Recovery Services Kenya' },
          ]}
          primaryCtaText="Call Recovery Desk: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="Submit Recovery Instruction"
          secondaryCtaHref="#inquiry-form"
        />

        {/* Narrative & Capabilities Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163E72]">
                  <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                  <span>Institutional Recovery Protocol</span>
                </div>

                <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730] leading-snug">
                  Transforming Non-Performing Debt Into Recovered Value
                </h2>

                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    Non-performing loans and compromised credit facilities pose substantial risks to financial institutions. Since <strong>1995</strong>, <strong>Makuri Auctioneers</strong> has delivered decisive asset recovery solutions that bridge the gap between loan default and capital restoration.
                  </p>
                  <p>
                    From our corporate headquarters in <strong>Mombasa (NSSF Building)</strong> and our branch in <strong>Nairobi (All Saints Cathedral Office)</strong>, our multidisciplinary team coordinates every phase: establishing debtor whereabouts, executing peaceful physical repossessions, managing secure bonded storage, and orchestrating public auctions to maximize recovered funds.
                  </p>
                </div>

                {/* 4 Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#F4F6F9] border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1">
                      <Search className="w-4 h-4 text-[#C6A15B]" />
                      <span>Debtor &amp; Asset Tracing</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Rapid location of concealed transport fleets, industrial plant, and diverted securities across Kenya.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F4F6F9] border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1">
                      <Warehouse className="w-4 h-4 text-[#C6A15B]" />
                      <span>Bonded Yard Custody</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      High-security, fully insured holding yards in Mombasa and Nairobi with detailed intake condition reporting.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F4F6F9] border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1">
                      <Scale className="w-4 h-4 text-[#C6A15B]" />
                      <span>Judicial Decrees &amp; Warrants</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Lawful attachment and execution of High Court decrees, warrants of sale, and commercial dispute judgments.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#F4F6F9] border border-slate-200">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                      <span>Expeditious Liquidation</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Transparent public auctions to convert recovered assets into liquid capital with certified accounting.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 items-center text-xs">
                  <Link
                    href="/repossession-services-kenya"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Vehicle &amp; Machinery Repossession &rarr;
                  </Link>
                  <span className="text-slate-300">&bull;</span>
                  <Link
                    href="/auctioneering-services-kenya"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Public Auctioneering Services &rarr;
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Frame */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0B1730] aspect-[4/3]">
                  <SafeImage
                    src="/images/asset_recovery_machinery_1793440618886.jpg"
                    fallbackSrc="/images/asset_recovery.jpg"
                    alt="Makuri Auctioneers Asset Recovery Machinery and Plant Services Kenya"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block mb-1">
                      Comprehensive Recovery Cycle
                    </span>
                    <p className="text-xs font-semibold">
                      Trace &bull; Secure &bull; Impound &bull; Liquidate
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F4F6F9] border border-slate-200 text-xs text-slate-700 space-y-1.5">
                  <p className="font-bold text-[#0B1730]">
                    Direct Institutional Escalation:
                  </p>
                  <p className="leading-relaxed">
                    Financial controllers, credit recovery managers, and legal counsels can request dedicated matter managers for recurring or large-scale portfolio recoveries.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <ServiceInquiryForm
          defaultService="Repossession & Asset Recovery"
          defaultSubject="Corporate Asset Recovery Brief"
          title="Submit an Asset Recovery Mandate"
          subtitle="Our recovery teams in Mombasa and Nairobi are standing by to evaluate your collateral recovery requirements."
        />

        {/* Branch Offices */}
        <BranchContactCard
          title="Branch Coordination Centers"
          subtitle="Direct physical coordination in Mombasa (NSSF Building) and Nairobi (All Saints Cathedral Office)."
        />

        {/* FAQs */}
        <FaqAccordion
          items={faqs}
          title="Frequently Asked Questions &bull; Asset Recovery Kenya"
          subtitle="Practical details on asset storage, debtor tracing, and recovery execution."
        />

        {/* Related Services */}
        <RelatedServicesSection
          currentSlug="/asset-recovery-services-kenya"
          title="Related Services &amp; Solutions"
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
