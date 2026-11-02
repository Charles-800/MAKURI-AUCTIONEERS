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
import { Landmark, ShieldCheck, Scale, FileText, CheckCircle2, TrendingUp, AlertTriangle, ArrowRight, Building2, Gavel } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Realization of Securities Kenya | Makuri Auctioneers',
  description: 'Statutory power of sale enforcement, charged property liquidation, and collateral realization for banks, SACCOs, and secured creditors across Kenya.',
  keywords: [
    'Realization of securities Kenya',
    'Statutory power of sale Kenya',
    'Bank collateral realization Kenya',
    'Charged property auction Kenya',
    'Section 90 Land Act default notice',
    'Section 96 Land Act notice to sell',
    'Movable Property Security Rights Act Kenya',
    'SACCO loan recovery auctioneers Kenya',
    'Makuri Auctioneers'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/realization-of-securities-kenya',
  },
  openGraph: {
    title: 'Realization of Securities in Kenya | Makuri Auctioneers',
    description: 'Specialized collateral liquidation and statutory powers of sale for financial institutions, commercial banks, and secured chargees in Mombasa, Nairobi, and Kenya.',
    url: 'https://makuri-auctioneers.co.ke/realization-of-securities-kenya',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/investigation.jpg', width: 1200, height: 630, alt: 'Realization of Securities Kenya' }],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function RealizationOfSecuritiesKenyaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Realization of Securities & Collateral Liquidation',
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
    'description': 'Enforcement of statutory powers of sale, mortgage realization, debenture recovery, and collateral workouts for commercial lenders throughout Kenya.',
  };

  const faqs: FaqItem[] = [
    {
      question: 'What is the legal framework for the Realization of Securities in Kenya?',
      answer:
        'The realization of land-backed securities is governed by Sections 90 through 96 of the Land Act (No. 6 of 2012) and the Land Registration Act. For movable assets and equipment, realization is regulated under the Movable Property Security Rights Act (MPSRA 2017) and the Auctioneers Act (Cap. 526). All public auctions must be conducted strictly by licensed Class "B" auctioneers.',
    },
    {
      question: 'What mandatory notices must be served before a charged property can be sold at auction?',
      answer:
        'The statutory process requires: (1) A Section 90 Notice of Default giving 90 days to rectify non-payment; (2) A Section 96 Notice of Intention to Sell giving 40 days to settle; (3) A 45-day Redemption Notice served by the licensed auctioneer upon notification of sale; and (4) A mandatory 14-day public newspaper advertisement in at least two national daily newspapers prior to the public auction date.',
    },
    {
      question: 'How do you determine the Reserve Price to avoid legal challenges under Section 97 of the Land Act?',
      answer:
        'Section 97 of the Land Act imposes a duty of care on chargees to obtain the best price reasonably obtainable. We coordinate independent professional valuations conducted by accredited registered valuers within 6 months of the sale date. By law, the property cannot be sold at auction below 75% of the forced sale valuation (reserve price) without court or chargee leave.',
    },
    {
      question: 'Can Makuri Auctioneers realize movable securities registered under the MPSRA?',
      answer:
        'Yes. We search the eCitizen Movable Property Security Rights Registry, verify initial financing statements, serve the mandatory default and disposition notices, retrieve the secured equipment or vehicles, and sell them via public auction or approved private treaty pursuant to the MPSRA 2017 regulations.',
    },
    {
      question: 'Which financial institutions does Makuri Auctioneers serve?',
      answer:
        'We act for commercial banks, Tier-1 SACCOs, microfinance banks, asset finance companies, leasing houses, and corporate debenture holders seeking lawful, expeditious loan recovery in Mombasa, Nairobi, and throughout Kenya.',
    },
  ];

  const securitiesPillars = [
    {
      icon: Landmark,
      title: 'Statutory Power of Sale on Land',
      desc: 'Enforcement of legal charges on commercial properties, agricultural estates, residential houses, and industrial plots under Sections 90–96 of the Land Act 2012.',
    },
    {
      icon: ShieldCheck,
      title: 'MPSRA Movable Securities Liquidation',
      desc: 'Realization of chattel mortgages, plant and machinery, heavy transport fleets, and inventory registered under the Movable Property Security Rights Act 2017.',
    },
    {
      icon: TrendingUp,
      title: 'Forced Sale Valuation Compliance',
      desc: 'Direct coordination with registered valuation surveyors to establish accurate Forced Sale Values (FSV) and uphold the 75% statutory reserve threshold.',
    },
    {
      icon: FileText,
      title: 'Statutory Notice & Gazette Management',
      desc: 'Meticulous drafting, personal service, affidavit sworn returns, and gazette / nationwide newspaper publication to guarantee procedural immunity against injunctions.',
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
        {/* Page Hero */}
        <PageHero
          badge="Banking &amp; Institutional Recovery &bull; Land Act 2012 &bull; MPSRA 2017"
          title="Realization of Securities in Kenya"
          description="Statutory powers of sale, charged land liquidation, debenture recoveries, and collateral workouts for commercial banks, SACCOs, and secured lenders across Kenya since 1995."
          breadcrumbs={[
            { label: 'Services', href: '/#services' },
            { label: 'Realization of Securities' },
          ]}
          primaryCtaText="Call Desk: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="Instruct Security Realization"
          secondaryCtaHref="#inquiry-form"
        />

        {/* Executive Summary Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#163E72] mb-3">
                  <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
                  Institutional Non-Performing Loan (NPL) Recovery
                </div>
                <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730] mb-5 text-balance">
                  Maximizing Asset Recovery While Safeguarding Lenders Against Procedural Injunctions
                </h2>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Non-performing loans (NPLs) erode balance sheet liquidity. When loan restructuring and amicable workouts fail, financial institutions require decisive legal realization of charged collateral. <strong>Makuri Auctioneers</strong> provides senior institutional leadership in executing statutory powers of sale across Kenya.
                  </p>
                  <p>
                    Our seasoned team understands that a single procedural omission—such as flawed statutory notice service, inadequate newspaper advertisements, or outdated forced sale valuations—can lead to protracted High Court injunctions under the Land Act. We eliminate that risk by enforcing strict, defensible statutory compliance at every milestone.
                  </p>
                  <p>
                    With operational seats in <strong>Mombasa</strong> (NSSF Building, 7th Floor) and <strong>Nairobi</strong> (All Saints Cathedral Office), we manage high-value real estate auctions, industrial plant dispersals, and movable collateral workouts throughout the Republic of Kenya.
                  </p>
                </div>

                {/* Institutional Badges */}
                <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-[#F4F6F9] rounded-lg border border-slate-200">
                    <span className="font-bold text-[#0B1730] block">Land Act 2012</span>
                    <span className="text-slate-500">Sections 90–96 Powers of Sale</span>
                  </div>
                  <div className="p-3 bg-[#F4F6F9] rounded-lg border border-slate-200">
                    <span className="font-bold text-[#0B1730] block">MPSRA 2017</span>
                    <span className="text-slate-500">Collateral Registry Enforcement</span>
                  </div>
                  <div className="p-3 bg-[#F4F6F9] rounded-lg border border-slate-200">
                    <span className="font-bold text-[#0B1730] block">Valuation Compliance</span>
                    <span className="text-slate-500">Section 97 FSV Reserve Safeguards</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Financial Visual & Recovery Metrics */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0B1730] aspect-[4/3]">
                  <SafeImage
                    src="/images/asset_recovery.jpg"
                    fallbackSrc="/images/hero_auction.jpg"
                    alt="Realization of Securities Kenya Makuri Auctioneers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block mb-1">
                      Bank &amp; SACCO Partner
                    </span>
                    <p className="text-xs sm:text-sm font-semibold">
                      Lawful Statutory Powers of Sale Across Coast &amp; Upcountry
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#0B1730] text-white rounded-xl border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#C6A15B] mb-2 flex items-center gap-1.5">
                    <Scale className="w-4 h-4" />
                    <span>Statutory Reserve Price Protection</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Under Section 97 of the Land Act, properties cannot be disposed of below <strong>75% of forced sale valuation</strong> without leave. Our team guarantees transparent reserve administration to prevent subsequent under-value litigation.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4 Pillars of Securities Realization */}
        <section className="py-14 sm:py-20 bg-[#F4F6F9] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#163E72] block mb-2">
                Core Specialization
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730]">
                Securities Realization Capabilities
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                End-to-end management of mortgage workouts, plant auctions, and debtor collateral liquidation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {securitiesPillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 bg-white rounded-xl border border-slate-200 hover:border-[#C6A15B]/60 shadow-sm transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#0B1730] text-[#C6A15B] flex items-center justify-center mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1730] mb-2 font-serif-heading">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Statutory 4-Phase Roadmap for Financial Institutions */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 sm:mb-14">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#163E72] block mb-2">
                Procedural Roadmap
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730]">
                The Statutory Power of Sale Process
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                How Makuri Auctioneers navigates statutory timelines from initial default notices to competitive auction execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-5 rounded-xl bg-[#F4F6F9] border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#C6A15B] font-serif-heading">01</span>
                  <h4 className="text-sm font-bold text-[#0B1730] mt-2 mb-1.5">Charge Instrument &amp; Search Audit</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Verification of the registered legal charge, official postal searches, and confirmative title verification at the Lands Registry.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#F4F6F9] border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#C6A15B] font-serif-heading">02</span>
                  <h4 className="text-sm font-bold text-[#0B1730] mt-2 mb-1.5">Statutory Notice Verification</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensuring lawful service of Section 90 (90-day) default and Section 96 (40-day) notices with incontestable proof of service.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#F4F6F9] border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#C6A15B] font-serif-heading">03</span>
                  <h4 className="text-sm font-bold text-[#0B1730] mt-2 mb-1.5">Valuation &amp; 45-Day Proclamation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Commissioning accredited valuation surveyors, serving the 45-day auctioneer redemption notice, and establishing statutory reserve pricing.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#F4F6F9] border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#C6A15B] font-serif-heading">04</span>
                  <h4 className="text-sm font-bold text-[#0B1730] mt-2 mb-1.5">14-Day Media Notice &amp; Sale</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Gazette &amp; dual national newspaper advertisement, transparent public bidding execution, and prompt return of proceeds to the chargee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Branch Offices Verification Card */}
        <section className="py-12 bg-[#F4F6F9] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BranchContactCard title="Engage Our Debt Recovery Directors" />
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#163E72] block mb-2">
                Regulatory Answers
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730]">
                Frequently Asked Questions: Realization of Securities
              </h2>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* Direct Instruction Form */}
        <ServiceInquiryForm
          defaultService="Realization of Securities"
          defaultSubject="Lender Instruction: Statutory Power of Sale & Collateral Liquidation"
          title="Instruct Realization of Securities"
          subtitle="Submit non-performing loan or charged asset details below. Our corporate recovery managers will review within 24 hours."
        />

        {/* Related Services Navigation */}
        <RelatedServicesSection
          currentSlug="/realization-of-securities-kenya"
          title="Related Regulated Services in Kenya"
          subtitle="Explore our comprehensive legal enforcement, auctioneering, repossession, and corporate advisory solutions."
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
