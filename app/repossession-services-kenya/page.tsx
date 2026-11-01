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
import { ShieldAlert, Truck, Wrench, FileCheck, Lock, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Repossession Services in Kenya | Makuri Auctioneers',
  description: 'Lawful vehicle, machinery & collateral repossession services in Kenya. Compliant with the Movable Property Security Rights Act (MPSRA) in Mombasa & Nairobi.',
  keywords: [
    'Repossession services in Kenya',
    'Reliable repossession services in Kenya',
    'Vehicle repossession Kenya',
    'Machinery and equipment recovery Kenya',
    'Collateral recovery Kenya',
    'Lawful asset repossession Kenya',
    'Repossession companies in Mombasa',
    'Repossession companies in Nairobi'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/repossession-services-kenya',
  },
  openGraph: {
    title: 'Repossession Services in Kenya | Makuri Auctioneers',
    description: 'Securing default collateral, vehicles, and industrial plant equipment under Kenyan statutory framework with speed and civility.',
    url: 'https://makuri-auctioneers.co.ke/repossession-services-kenya',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/asset_recovery.jpg', width: 1200, height: 630, alt: 'Repossession Services in Kenya' }],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function RepossessionServicesKenyaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Repossession & Collateral Recovery',
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
    'description': 'Lawful vehicle repossession, industrial plant and heavy equipment recovery, and secured collateral enforcement across Kenya.',
  };

  const faqs: FaqItem[] = [
    {
      question: 'How is lawful repossession conducted in Kenya?',
      answer:
        'Lawful repossession must adhere strictly to the Movable Property Security Rights Act (MPSRA 2017) and the Auctioneers Act (Cap. 526). This requires a verified security agreement registered on the eCitizen Collateral Registry, formal notice of default, and execution exclusively by a licensed practicing auctioneer.',
    },
    {
      question: 'What types of assets can Makuri Auctioneers repossess?',
      answer:
        'We recover commercial motor vehicles, heavy earthmoving machinery, agricultural tractors, maritime support equipment, containerized goods, manufacturing plant systems, office hardware, and financial collateral.',
    },
    {
      question: 'Where are repossessed vehicles stored securely?',
      answer:
        'All recovered assets are impounded in licensed, perimeter-walled, 24/7 guarded holding yards located in Mombasa and Nairobi. Detailed vehicle condition reports, digital photographs, and odometer readings are documented immediately upon custody.',
    },
    {
      question: 'Do you handle repossession outside Mombasa and Nairobi?',
      answer:
        'Yes. Our tracking and recovery networks extend across all 47 counties of Kenya, with field retrieval teams operating along major transport corridors (Mombasa–Nairobi–Nakuru–Eldoret–Kisumu highway).',
    },
    {
      question: 'How quickly can Makuri Auctioneers initiate a recovery instruction?',
      answer:
        'Upon receiving valid instructions, certified logbook copies, or court warrants, our rapid deployment unit can initiate tracing and repossession within 24 to 48 hours.',
    },
  ];

  const repossessionFeatures = [
    {
      icon: Truck,
      title: 'Vehicle Repossession',
      desc: 'Retrieval of passenger cars, commercial transport trucks, distribution vans, PSVs, and motor fleets subject to defaulted hire purchase or asset financing agreements.',
    },
    {
      icon: Wrench,
      title: 'Machinery & Equipment Recovery',
      desc: 'Specialized recovery of heavy plant machinery, agricultural tractors, excavators, generators, and industrial processing units with trained rigging teams.',
    },
    {
      icon: Lock,
      title: 'Collateral Recovery for Lenders',
      desc: 'Acting for commercial banks, SACCOs, micro-finance institutions, and leasing houses to secure defaulted asset securities while preserving collateral condition.',
    },
    {
      icon: FileCheck,
      title: 'Strict Statutory Compliance',
      desc: 'Conducting every repossession pursuant to Kenyan legal guidelines, avoiding breach of the peace, and ensuring defensible documentation for legal proceedings.',
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
          badge="Lawful Asset Recovery &bull; MPSRA 2017 &amp; Cap. 526"
          title="Professional Repossession Services in Kenya"
          description="Protecting lender capital and creditor rights through lawful, orderly, and rapid repossession of vehicles, industrial plant, and commercial collateral across Mombasa, Nairobi, and Kenya nationwide."
          breadcrumbs={[
            { label: 'Services', href: '/#services' },
            { label: 'Repossession Services Kenya' },
          ]}
          primaryCtaText="Call Desk: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="Request Repossession Support"
          secondaryCtaHref="#inquiry-form"
        />

        {/* Narrative & Legal Framework Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163E72]">
                  <ShieldAlert className="w-4 h-4 text-[#C6A15B]" />
                  <span>Licensed Lawful Recovery Coordination</span>
                </div>

                <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730] leading-snug">
                  Securing Creditor Capital with Speed, Discretion &amp; Legal Precision
                </h2>

                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    When commercial borrowers or asset finance debtors default on contractual commitments, prompt and lawful recovery of the underlying security is paramount. Since <strong>1995</strong>, <strong>Makuri Auctioneers</strong> has served as the preferred asset recovery partner for tier-1 commercial banks, development finance institutions, SACCOs, and equipment leasing firms across Kenya.
                  </p>
                  <p>
                    We operate strictly within the legal mandate of the <em>Auctioneers Act (Cap. 526)</em> and the <em>Movable Property Security Rights Act (MPSRA)</em>. Our field officers prioritize peaceful, civil recovery protocols, de-escalating potential friction while safeguarding the physical and mechanical integrity of recovered assets.
                  </p>
                </div>

                {/* 4 Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {repossessionFeatures.map((feat, idx) => {
                    const Icon = feat.icon;
                    return (
                      <div key={idx} className="p-4 rounded-xl bg-[#F4F6F9] border border-slate-200">
                        <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1.5">
                          <Icon className="w-4 h-4 text-[#C6A15B] shrink-0" />
                          <span>{feat.title}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-2 flex flex-wrap gap-4 items-center text-xs">
                  <Link
                    href="/asset-recovery-services-kenya"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Asset Recovery Services &rarr;
                  </Link>
                  <span className="text-slate-300">&bull;</span>
                  <Link
                    href="/private-investigation-services-kenya"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Asset Tracing &amp; Investigations &rarr;
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Frame */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0B1730] aspect-[4/3]">
                  <SafeImage
                    src="/images/asset_recovery.jpg"
                    fallbackSrc="/images/asset_recovery_machinery_1793440618886.jpg"
                    alt="Makuri Auctioneers Industrial Machinery and Fleet Repossession Kenya"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block mb-1">
                      Bonded Yard Custody
                    </span>
                    <p className="text-xs font-semibold">
                      Secure, insured vehicle and machinery storage in Mombasa &amp; Nairobi
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-amber-900">
                    <AlertTriangle className="w-4 h-4 text-amber-700" />
                    <span>Statutory Compliance Notice:</span>
                  </div>
                  <p className="leading-relaxed">
                    Under Kenyan law, all repossession instructions must be accompanied by certified default records, notice proof, and registered security rights. Makuri Auctioneers does not engage in unlawful seizure.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <ServiceInquiryForm
          defaultService="Repossession & Asset Recovery"
          defaultSubject="Repossession Service Brief"
          title="Instruct Our Repossession Operations Desk"
          subtitle="Submit your debtor details, asset identifiers, and security documentation for urgent execution."
        />

        {/* Branch Offices */}
        <BranchContactCard
          title="Coordinated from Mombasa &amp; Nairobi"
          subtitle="Our recovery teams are stationed strategically to deploy across Coast, Central, Rift Valley, and Western Kenya."
        />

        {/* FAQs */}
        <FaqAccordion
          items={faqs}
          title="Frequently Asked Questions &bull; Repossession in Kenya"
          subtitle="Important legal guidelines on repossession notices, yard impoundment, and debtor rights."
        />

        {/* Related Services */}
        <RelatedServicesSection
          currentSlug="/repossession-services-kenya"
          title="Related Services &amp; Solutions"
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
