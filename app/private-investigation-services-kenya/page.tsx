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
import { Search, ShieldAlert, FileText, UserCheck, Eye, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Private Investigators in Kenya | Makuri Auctioneers',
  description: 'Discreet corporate investigations, asset tracing, fraud detection & background verification services in Kenya. Serving Mombasa & Nairobi with total confidentiality.',
  keywords: [
    'Private investigators in Kenya',
    'Private investigators in Mombasa',
    'Private investigation services in Nairobi',
    'Corporate investigations Kenya',
    'Background verification Kenya',
    'Asset tracing Kenya',
    'Fraud investigations Kenya',
    'Due diligence Kenya'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/private-investigation-services-kenya',
  },
  openGraph: {
    title: 'Private Investigators in Kenya | Makuri Auctioneers',
    description: 'Corporate fraud investigations, debtor asset tracing, pre-lending due diligence, and comprehensive background verification in Mombasa and Nairobi.',
    url: 'https://makuri-auctioneers.co.ke/private-investigation-services-kenya',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/investigation.jpg', width: 1200, height: 630, alt: 'Private Investigators in Kenya' }],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function PrivateInvestigationServicesKenyaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Private Investigation Services',
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
    'description': 'Discreet corporate investigations, forensic asset tracing, employment background verification, and fraud detection in Kenya.',
  };

  const faqs: FaqItem[] = [
    {
      question: 'How do Makuri Auctioneers maintain client confidentiality in investigations?',
      answer:
        'All private investigation mandates are managed under strict non-disclosure agreements (NDAs) and compartmentalized case protocols. Case records, identity details, and investigative findings are restricted exclusively to authorized senior case officers and the instructing principal.',
    },
    {
      question: 'What is asset tracing and how does it assist lenders and litigants?',
      answer:
        'Asset tracing involves identifying, locating, and legally connecting concealed or diverted assets (real property, vehicles, corporate shares, beneficial ownership) back to a judgment debtor or defaulting borrower. This evidence enables legal counsels to obtain freezing injunctions and execution warrants.',
    },
    {
      question: 'What types of corporate fraud investigations do you undertake?',
      answer:
        'We investigate corporate embezzlement, procurement irregularities, employee kickback arrangements, inventory shrinkage, fraudulent insurance claims, and deceptive business representations.',
    },
    {
      question: 'Can you verify prospective business partners or key executive hires?',
      answer:
        'Yes. Our background verification services cover academic and professional credentials, criminal record clearances, directorship histories, creditworthiness, and commercial reputation checks across Kenya.',
    },
    {
      question: 'Can investigative findings be presented as evidence in Kenyan courts?',
      answer:
        'Yes. Our reports are compiled following strict evidentiary standards, chain-of-custody protocols, and lawful fact-finding methods, allowing findings and supporting documentation to be utilized in civil or commercial litigation.',
    },
  ];

  const investigationPillars = [
    {
      icon: Search,
      title: 'Corporate Investigations',
      desc: 'In-depth examination of corporate internal misconduct, supply chain diversion, breach of fiduciary duty, and corporate theft.',
    },
    {
      icon: Eye,
      title: 'Forensic Asset Tracing',
      desc: 'Uncovering concealed properties, undisclosed vehicle registrations, directorships, and offshore beneficial ownership ties across Kenya.',
    },
    {
      icon: UserCheck,
      title: 'Background Verification',
      desc: 'Comprehensive vetting of prospective C-suite personnel, joint venture partners, commercial borrowers, and tender bidders.',
    },
    {
      icon: ShieldAlert,
      title: 'Fraud Investigations',
      desc: 'Detailed fact-finding into financial misrepresentation, loan application falsification, and fraudulent asset transfers.',
    },
    {
      icon: FileText,
      title: 'Due Diligence Inquiries',
      desc: 'Pre-acquisition property checks, title authenticity validation, encumbrance verification, and planning restriction audits.',
    },
    {
      icon: Lock,
      title: 'Litigation Support Intelligence',
      desc: 'Gathering verifiable documentary and physical evidence to support advocates handling commercial, contractual, and debt recovery suits.',
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
          badge="Confidential Intelligence &bull; Commercial Fact-Finding"
          title="Private Investigation Services in Kenya"
          description="Protecting enterprises and legal counsels with rigorous, confidential corporate investigations, debtor asset tracing, background verification, and fraud detection across Mombasa and Nairobi."
          breadcrumbs={[
            { label: 'Services', href: '/#services' },
            { label: 'Private Investigation Services Kenya' },
          ]}
          primaryCtaText="Confidential Desk: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="Request Investigative Brief"
          secondaryCtaHref="#inquiry-form"
        />

        {/* Narrative & Capabilities Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163E72]">
                  <Lock className="w-4 h-4 text-[#C6A15B]" />
                  <span>Discreet &bull; Evidentiary &bull; Lawful</span>
                </div>

                <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730] leading-snug">
                  Fact-Finding Precision for High-Stakes Corporate &amp; Legal Decisions
                </h2>

                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    Sound commercial strategy and successful litigation rely on verified facts. Founded in <strong>1995</strong>, <strong>Makuri Auctioneers</strong> operates an elite private investigations and intelligence division assisting financial corporations, law firms, multinational enterprises, and discerning private clients.
                  </p>
                  <p>
                    Whether tracing elusive judgment debtors who have transferred assets into proxies, uncovering fraudulent invoices, or performing exhaustive due diligence before a multi-million-shilling commercial land acquisition in Mombasa or Nairobi, our seasoned operatives deliver actionable, legally compliant intelligence.
                  </p>
                </div>

                {/* 6 Capabilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {investigationPillars.map((p, idx) => {
                    const Icon = p.icon;
                    return (
                      <div key={idx} className="p-4 rounded-xl bg-[#F4F6F9] border border-slate-200">
                        <div className="flex items-center gap-2 font-bold text-sm text-[#0B1730] mb-1">
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
                    href="/business-consultancy-kenya"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Business Risk &amp; Consultancy &rarr;
                  </Link>
                  <span className="text-slate-300">&bull;</span>
                  <Link
                    href="/asset-recovery-services-kenya"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Asset Recovery Services &rarr;
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Frame */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0B1730] aspect-[4/3]">
                  <SafeImage
                    src="/images/investigation.jpg"
                    fallbackSrc="/images/investigation_consultancy_1793440618628.jpg"
                    alt="Makuri Auctioneers Corporate Private Investigation and Due Diligence Kenya"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block mb-1">
                      Evidence &amp; Intelligence
                    </span>
                    <p className="text-xs font-semibold">
                      Actionable intelligence for boardrooms and courtrooms
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F4F6F9] border border-slate-200 text-xs text-slate-700 space-y-1.5">
                  <p className="font-bold text-[#0B1730]">
                    Strict Ethical Conduct:
                  </p>
                  <p className="leading-relaxed">
                    Our investigators operate exclusively within the bounds of Kenyan statutory law, data protection regulations, and constitutional privacy frameworks.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <ServiceInquiryForm
          defaultService="Private Investigations"
          defaultSubject="Confidential Investigation Request"
          title="Submit a Confidential Case Inquiry"
          subtitle="All correspondence is encrypted and handled exclusively by our senior directors in Mombasa and Nairobi."
        />

        {/* Branch Offices */}
        <BranchContactCard
          title="Confidential Consultation Rooms"
          subtitle="Private client conference suites available at our Mombasa HQ (NSSF Building) and Nairobi Branch (All Saints Cathedral)."
        />

        {/* FAQs */}
        <FaqAccordion
          items={faqs}
          title="Frequently Asked Questions &bull; Private Investigations"
          subtitle="Key information regarding investigative scope, report confidentiality, and evidence standards."
        />

        {/* Related Services */}
        <RelatedServicesSection
          currentSlug="/private-investigation-services-kenya"
          title="Related Services &amp; Solutions"
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
