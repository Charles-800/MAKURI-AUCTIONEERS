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
import { LineChart, Briefcase, TrendingUp, AlertCircle, ShieldCheck, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business Consultancy in Mombasa & Kenya | Makuri Auctioneers',
  description: 'Expert business consultancy, corporate strategy & business recovery advisory in Mombasa & Nairobi. Led by Director Joel Titus Musya (PhD Cont, MBA).',
  keywords: [
    'Business consultancy in Mombasa',
    'Business consultancy in Kenya',
    'Business advisory services in Kenya',
    'Corporate strategy Mombasa',
    'Business risk assessment Kenya',
    'Business recovery advisory',
    'Operational consultancy Mombasa',
    'Makuri Auctioneers business consultancy'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/business-consultancy-kenya',
  },
  openGraph: {
    title: 'Business Consultancy in Mombasa & Kenya | Makuri Auctioneers',
    description: 'Corporate advisory, restructuring, debt recovery strategies, and operational risk mitigation for Kenyan businesses and lenders.',
    url: 'https://makuri-auctioneers.co.ke/business-consultancy-kenya',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/director_joel_titus_musya.jpeg', width: 1200, height: 630, alt: 'Business Consultancy Makuri Auctioneers' }],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function BusinessConsultancyKenyaPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'serviceType': 'Business Consultancy & Corporate Advisory',
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
    'description': 'Executive business advisory, corporate debt restructuring, risk assessment, and operational turnaround consulting for Kenyan businesses.',
  };

  const faqs: FaqItem[] = [
    {
      question: 'What types of businesses benefit from Makuri Auctioneers’ consultancy services?',
      answer:
        'We advise commercial banks managing non-performing asset portfolios, manufacturing and logistics firms facing operational bottlenecks, family-owned enterprises navigating restructuring, and corporate borrowers seeking debt reorganization.',
    },
    {
      question: 'Who leads the business consultancy division at Makuri Auctioneers?',
      answer:
        'Our corporate advisory wing is spearheaded by Director Joel Titus Musya, whose high-level academic and executive credentials include PhD BA (Cont), MBA in Strategic Management, and Bachelor of Business Administration (BBA).',
    },
    {
      question: 'How do your business recovery services prevent auction or liquidation?',
      answer:
        'By intervening early, our turnaround advisors evaluate cash flow viability, renegotiate credit terms with institutional lenders, identify cost leakages, and devise sustainable repayment structures that protect enterprise continuity without resorting to forced asset sale.',
    },
    {
      question: 'Can you assist with commercial risk assessment before extending credit?',
      answer:
        'Yes. We perform pre-credit risk audits examining market exposure, collateral adequacy, borrower financial health, and industry volatility, enabling financial institutions to price risk accurately.',
    },
    {
      question: 'How can an organization schedule an executive consultation?',
      answer:
        'You can call our direct executive line at 0720 934 476, schedule via WhatsApp, email info@makuriauctioneers.co.ke, or submit an advisory brief through the form on this page.',
    },
  ];

  const consultancyPillars = [
    {
      icon: LineChart,
      title: 'Business Advisory Services',
      desc: 'Holistic strategic counsel addressing competitive positioning, market expansion, governance standards, and executive decision-making frameworks.',
    },
    {
      icon: TrendingUp,
      title: 'Corporate Strategy',
      desc: 'Formulating actionable strategic plans tailored to Kenya’s macroeconomic reality, coastal trade dynamics, and national regulatory landscapes.',
    },
    {
      icon: AlertCircle,
      title: 'Business Risk Assessment',
      desc: 'In-depth diagnostics of enterprise vulnerability, credit risk exposure, asset pledge viability, and statutory compliance gaps.',
    },
    {
      icon: Briefcase,
      title: 'Operational Consultancy',
      desc: 'Streamlining operational workflows, inventory controls, asset utilization, and administrative overheads for sustainable profitability.',
    },
    {
      icon: ShieldCheck,
      title: 'Business Recovery Advisory',
      desc: 'Restructuring troubled commercial entities, facilitating workouts with institutional lenders, and designing turnaround roadmaps.',
    },
    {
      icon: Award,
      title: 'Professional Business Solutions',
      desc: 'Customized advisory packages integrating legal enforcement awareness, valuation insights, and asset security management.',
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
          badge="Executive Leadership &bull; PhD BA (Cont), MBA Strategic Mngt"
          title="Business Consultancy &amp; Corporate Advisory in Kenya"
          description="Empowering enterprises, financial institutions, and corporate leaders with decisive strategic planning, risk assessment, debt restructuring, and business turnaround advisory in Mombasa and Nairobi."
          breadcrumbs={[
            { label: 'Services', href: '/#services' },
            { label: 'Business Consultancy Kenya' },
          ]}
          primaryCtaText="Consult With Leadership: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="Request Advisory Brief"
          secondaryCtaHref="#inquiry-form"
        />

        {/* Narrative & Leadership Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163E72]">
                  <Briefcase className="w-4 h-4 text-[#C6A15B]" />
                  <span>Strategic Turnaround &bull; Corporate Governance</span>
                </div>

                <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730] leading-snug">
                  Strategic Clarity to Navigate Risk, Restructure Debt &amp; Drive Sustainable Value
                </h2>

                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    In an increasingly complex Kenyan economic landscape, businesses require seasoned strategic advisory grounded in commercial reality. At <strong>Makuri Auctioneers</strong>, our Business Consultancy division combines academic rigor with pragmatic enforcement experience.
                  </p>
                  <p>
                    Led by Director <strong>Joel Titus Musya</strong> (PhD BA Cont, MBA Strategic Management, BBA), our advisory practice assists corporate boards, SME founders, and financial lenders in structuring sound risk management frameworks, resolving debt distress, and optimizing operational vitality.
                  </p>
                </div>

                {/* 6 Capabilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {consultancyPillars.map((p, idx) => {
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
                    href="/about-us"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Learn More About Our Executive Leadership &rarr;
                  </Link>
                  <span className="text-slate-300">&bull;</span>
                  <Link
                    href="/real-estate-management-kenya"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Real Estate Asset Management &rarr;
                  </Link>
                </div>
              </div>

              {/* Right Column: Executive Profile Frame */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0B1730] aspect-[3/4] max-w-sm mx-auto">
                  <SafeImage
                    src="/images/director_joel_titus_musya.jpeg"
                    fallbackSrc="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.36.00_PM_4936689a.jpeg"
                    alt="Joel Titus Musya - Director Makuri Auctioneers"
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730] via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block mb-1">
                      Managing Director
                    </span>
                    <h3 className="text-lg font-bold font-serif-heading">Joel Titus Musya</h3>
                    <p className="text-xs text-slate-300 mt-1 font-mono">
                      PHD BA(CONT), MBA(STRATEGIC MNGT), BBA
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F4F6F9] border border-slate-200 text-xs text-slate-700 text-center max-w-sm mx-auto">
                  <p className="font-semibold text-[#0B1730]">
                    Direct Executive Counsel
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Consultations held at Mombasa HQ (NSSF Building) and Nairobi Branch.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <ServiceInquiryForm
          defaultService="Business Consultancy"
          defaultSubject="Corporate Consultancy Consultation"
          title="Book an Executive Advisory Session"
          subtitle="Direct dialogue with our strategic consulting directors in Mombasa or Nairobi."
        />

        {/* Branch Offices */}
        <BranchContactCard
          title="Consultation Locations"
          subtitle="Convenient executive boardroom suites in Mombasa and Nairobi."
        />

        {/* FAQs */}
        <FaqAccordion
          items={faqs}
          title="Frequently Asked Questions &bull; Business Consultancy"
          subtitle="Insights into restructuring protocols, enterprise risk diagnostics, and consulting engagements."
        />

        {/* Related Services */}
        <RelatedServicesSection
          currentSlug="/business-consultancy-kenya"
          title="Related Services &amp; Solutions"
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
