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
import { Scale, Gavel, ShieldCheck, FileText, CheckCircle2, AlertCircle, ArrowRight, BookOpen, Clock, Building2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Execution of Court Orders Kenya | Makuri Auctioneers',
  description: 'Licensed execution of court orders, warrants of attachment and sale, eviction orders, and distress for rent in Mombasa, Nairobi, and throughout Kenya.',
  keywords: [
    'Execution of court orders Kenya',
    'Warrants of attachment and sale Kenya',
    'Eviction orders execution Mombasa',
    'Eviction orders execution Nairobi',
    'Distress for rent Kenya',
    'Court decree enforcement Kenya',
    'Order 22 Civil Procedure Rules Kenya',
    'Licensed auctioneers execution of warrants Kenya',
    'Makuri Auctioneers'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/execution-of-court-orders-kenya',
  },
  openGraph: {
    title: 'Execution of Court Orders in Kenya | Makuri Auctioneers',
    description: 'Decisive, court-sanctioned enforcement of warrants of attachment, eviction orders, distress for rent, and decree executions across Mombasa, Nairobi, and Kenya.',
    url: 'https://makuri-auctioneers.co.ke/execution-of-court-orders-kenya',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/hero_auction.jpg', width: 1200, height: 630, alt: 'Execution of Court Orders Kenya' }],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function ExecutionOfCourtOrdersKenyaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Execution of Court Orders',
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
    'description': 'Lawful execution of warrants of attachment and sale, eviction orders, distress for rent, and decree enforcement issued by Kenyan courts.',
  };

  const faqs: FaqItem[] = [
    {
      question: 'What authority does Makuri Auctioneers possess to execute court orders in Kenya?',
      answer:
        'Makuri Auctioneers is fully licensed by the Auctioneers Licensing Board (ALB) under the Auctioneers Act (Cap. 526). Under the Civil Procedure Act (Cap. 21) and Order 22 of the Civil Procedure Rules, only licensed practicing Class "B" auctioneers are legally empowered to execute court warrants of attachment, eviction orders, and decrees of the High Court, Employment and Labour Relations Court, Environment and Land Court, and Magistrates\' Courts across Kenya.',
    },
    {
      question: 'How do you coordinate police escort during sensitive eviction or attachment proceedings?',
      answer:
        'To prevent breach of the peace and protect all parties, our senior officers liaise directly with the relevant Sub-County Police Commander (SCPC) and Officer Commanding Station (OCS) pursuant to the National Police Service Act. We provide verified court warrants, extract formal police deployment orders, and execute the mandate in an orderly, peaceful, and documented manner.',
    },
    {
      question: 'What is the statutory process for executing a Warrant of Attachment and Sale of movable property?',
      answer:
        'Upon receiving the warrant from the court registrar or instructing advocate, we serve a formal Proclamation of Attachment upon the judgment debtor, inventorying the attached goods with exact serials and descriptions. The debtor is given statutory time (usually 7 days) to settle the decretal sum. If default persists, statutory public auction notices are gazetted/advertised and the assets are auctioned at current market reserve values.',
    },
    {
      question: 'Can you enforce Distress for Rent for commercial and residential landlords?',
      answer:
        'Yes. We execute distress for rent under the Distress for Rent Act (Cap. 293). Upon receiving the landlord\'s written distress warrant, we proclaim the tenant\'s movable chattels on the premises, serve the statutory inventory, provide the mandatory 14-day redemption window, and—if rent remains unpaid—proceed to public auction to recover accrued arrears and costs.',
    },
    {
      question: 'How quickly do you file returns with the issuing court after execution?',
      answer:
        'We maintain strict compliance with judicial standards. A comprehensive Return to Court accompanied by a sworn Affidavit of Service, itemized inventories, photo/video logs, and payment receipts or certificates of sale is submitted to the court registry within the statutory timeline prescribed on the warrant.',
    },
  ];

  const executionPillars = [
    {
      icon: Gavel,
      title: 'Warrants of Attachment & Sale',
      desc: 'Execution against judgment debtors\' movable property (vehicles, stock, machinery) and immovable property pursuant to Order 22 of the Civil Procedure Rules.',
    },
    {
      icon: Building2,
      title: 'Eviction Orders Execution',
      desc: 'Enforcement of court-sanctioned eviction decrees, repossession of premises, and vacant possession handovers with official police presence and structured inventories.',
    },
    {
      icon: FileText,
      title: 'Distress for Rent Act Warrants',
      desc: 'Recovery of unpaid rental arrears for commercial complexes, shopping malls, godowns, and residential estates under Cap. 293 with meticulous statutory notices.',
    },
    {
      icon: ShieldCheck,
      title: 'Civil Arrest & Surrender Warrants',
      desc: 'Execution of warrants of arrest against judgment debtors in civil execution, presenting the debtor before the presiding magistrate or registrar for examination.',
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
          badge="Judicial Enforcement &bull; High Court &amp; Subordinate Courts &bull; Class B Licensed"
          title="Execution of Court Orders in Kenya"
          description="Court-sanctioned judicial enforcement, warrants of attachment and sale, eviction orders, and distress for rent across Mombasa, Nairobi, and Kenya nationwide. Partnering with legal advocates and decree holders since 1995."
          breadcrumbs={[
            { label: 'Services', href: '/#services' },
            { label: 'Execution of Court Orders' },
          ]}
          primaryCtaText="Call Desk: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="Instruct Court Execution"
          secondaryCtaHref="#inquiry-form"
        />

        {/* Executive Summary Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#163E72] mb-3">
                  <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
                  Statutory Power &bull; Decisive Enforcement
                </div>
                <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730] mb-5 text-balance">
                  Delivering Lawful, Prompt Enforcement for Legal Practitioners &amp; Decree Holders
                </h2>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    Winning a court judgment is only the first step. Translating that decree into tangible financial recovery or vacant possession demands experienced, fearless, and strictly lawful auctioneers. <strong>Makuri Auctioneers</strong> acts as the designated execution arm for leading law firms, commercial banks, parastatals, property managers, and private litigants across Kenya.
                  </p>
                  <p>
                    Operating from our headquarters in <strong>Mombasa</strong> (NSSF Building, 7th Floor) and branch in <strong>Nairobi</strong> (All Saints Cathedral Office), our licensed auctioneers carry out warrants issued across the entire Kenyan judicial hierarchy—including the Supreme Court, Court of Appeal, High Court, Environment and Land Court, Employment and Labour Relations Court, and Magistrates&apos; Courts nationwide.
                  </p>
                  <p>
                    Every operation is planned with procedural diligence: from advance reconnaissance and verified police security coverage to transparent inventories, compliance with proclamation timelines, and accurate returns to court.
                  </p>
                </div>

                {/* Statutory Badges */}
                <div className="mt-6 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-[#F4F6F9] rounded-lg border border-slate-200">
                    <span className="font-bold text-[#0B1730] block">Civil Procedure Rules</span>
                    <span className="text-slate-500">Order 22 Execution Mandate</span>
                  </div>
                  <div className="p-3 bg-[#F4F6F9] rounded-lg border border-slate-200">
                    <span className="font-bold text-[#0B1730] block">Auctioneers Act</span>
                    <span className="text-slate-500">Cap. 526 Full ALB License</span>
                  </div>
                  <div className="p-3 bg-[#F4F6F9] rounded-lg border border-slate-200">
                    <span className="font-bold text-[#0B1730] block">Distress For Rent Act</span>
                    <span className="text-slate-500">Cap. 293 Lawful Distraints</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Implements & Legal Visual */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0B1730] aspect-[4/3]">
                  <SafeImage
                    src="/images/auction_gavel.jpeg"
                    fallbackSrc="/images/hero_auction.jpg"
                    alt="Execution of Court Orders Kenya Makuri Auctioneers Gavel"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block mb-1">
                      Judicial Enforcement
                    </span>
                    <p className="text-xs sm:text-sm font-semibold">
                      Court Warrants, Evictions &amp; Attachment Across Kenya
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#0B1730] text-white rounded-xl border border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#C6A15B] mb-2 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>Expedited Mobilization Window</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Warrants of attachment and eviction instructions are vetted within <strong>24 hours</strong> of submission. Police escort notifications and field reconnaissance begin immediately to avoid preemptive asset asset-stripping.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4 Core Pillars of Court Execution */}
        <section className="py-14 sm:py-20 bg-[#F4F6F9] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#163E72] block mb-2">
                Scope of Practice
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730]">
                Court Execution &amp; Enforcement Competencies
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Rigorous operational procedures protecting instructing advocates and decree holders from civil liability and irregular execution claims.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {executionPillars.map((pillar, idx) => {
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

        {/* Detailed Statutory Workflow Step-by-Step */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-10 sm:mb-14">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#163E72] block mb-2">
                Step-by-Step Rigor
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730]">
                How We Execute Judicial Warrants
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Our proven methodology ensures complete procedural defensibility before the courts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-5 rounded-xl bg-[#F4F6F9] border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#C6A15B] font-serif-heading">01</span>
                  <h4 className="text-sm font-bold text-[#0B1730] mt-2 mb-1.5">Warrant Verification</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Authentication of the court seal, judge/registrar signature, valid dates, and exact decretal terms to eliminate procedural defects.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#F4F6F9] border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#C6A15B] font-serif-heading">02</span>
                  <h4 className="text-sm font-bold text-[#0B1730] mt-2 mb-1.5">Police Liaison &amp; Notice</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Requisitioning security coverage with local police leadership and serving formal proclamations or notices to vacate where required by law.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#F4F6F9] border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#C6A15B] font-serif-heading">03</span>
                  <h4 className="text-sm font-bold text-[#0B1730] mt-2 mb-1.5">Attachment or Vacant Possession</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Decisive physical execution, peaceful eviction, asset seizure, or transfer to secured bonded storage yards under digital video logging.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#F4F6F9] border border-slate-200 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-bold text-[#C6A15B] font-serif-heading">04</span>
                  <h4 className="text-sm font-bold text-[#0B1730] mt-2 mb-1.5">Court Return &amp; Accounting</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Filing the formal Return of Warrant and Affidavits of Service with the court registrar, followed by transparent proceeds disbursement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Branch Offices Verification Card */}
        <section className="py-12 bg-[#F4F6F9] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BranchContactCard title="Instruct Execution at Our Verified Branches" />
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold tracking-wider uppercase text-[#163E72] block mb-2">
                Legal Clarifications
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730]">
                Frequently Asked Questions: Court Order Execution
              </h2>
            </div>
            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* Direct Instruction Form */}
        <ServiceInquiryForm
          defaultService="Execution of Court Orders"
          defaultSubject="Urgent Court Warrant / Eviction / Distress Instruction"
          title="Submit a Court Execution Instruction"
          subtitle="Provide decree and warrant details below. Our legal desk in Mombasa or Nairobi will review and confirm mobilization within 24 hours."
        />

        {/* Related Services Navigation */}
        <RelatedServicesSection
          currentSlug="/execution-of-court-orders-kenya"
          title="Related Regulated Services in Kenya"
          subtitle="Comprehensive auctioneering, realization of securities, repossession, and corporate advisory solutions."
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
