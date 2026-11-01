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
import { Shield, Award, Users, CheckCircle2, Clock, Landmark, Scale, Gavel, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Makuri Auctioneers - Founded in 1995 Kenya',
  description: 'Learn about Makuri Auctioneers, founded in 1995. Led by Director Joel Titus Musya, serving Mombasa (NSSF Building) & Nairobi (All Saints Cathedral).',
  keywords: [
    'About Makuri Auctioneers',
    'Makuri Auctioneers Mombasa',
    'Makuri Auctioneers Nairobi',
    'Auctioneering companies in Kenya founded 1995',
    'Joel Titus Musya auctioneer',
    'Licensed auctioneers Kenya',
    'Professional auctioneers Mombasa'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/about-us',
  },
  openGraph: {
    title: 'About Us | Makuri Auctioneers - Founded in 1995 Kenya',
    description: 'Premier corporate auctioneers, asset recovery, and business advisory firm with headquarters in Mombasa and branch in Nairobi.',
    url: 'https://makuri-auctioneers.co.ke/about-us',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/about_office.jpg', width: 1200, height: 630, alt: 'About Makuri Auctioneers' }],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function AboutUsPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Makuri Auctioneers',
    'foundingDate': '1995',
    'founder': {
      '@type': 'Person',
      'name': 'Joel Titus Musya',
      'jobTitle': 'Managing Director',
    },
    'url': 'https://makuri-auctioneers.co.ke/about-us',
    'logo': 'https://makuri-auctioneers.co.ke/images/hero_auction.jpg',
    'telephone': '+254720934476',
    'email': 'info@makuriauctioneers.co.ke',
    'address': [
      {
        '@type': 'PostalAddress',
        'streetAddress': 'Nkrumah Road, NSSF Building, 7th Floor, Door 733',
        'addressLocality': 'Mombasa',
        'addressCountry': 'KE',
      },
      {
        '@type': 'PostalAddress',
        'streetAddress': 'All Saints Cathedral Office',
        'addressLocality': 'Nairobi',
        'addressCountry': 'KE',
      },
    ],
  };

  const faqs: FaqItem[] = [
    {
      question: 'When was Makuri Auctioneers founded?',
      answer:
        'Makuri Auctioneers was established in 1995. Over nearly three decades of continuous practice, the firm has evolved into a premier corporate auctioneering, asset recovery, and business advisory firm in Kenya.',
    },
    {
      question: 'What professional qualifications does your leadership hold?',
      answer:
        'Our Managing Director, Joel Titus Musya, holds a PhD BA (Cont), MBA in Strategic Management, and a Bachelor of Business Administration (BBA), alongside full licensing under the Auctioneers Act of Kenya.',
    },
    {
      question: 'Where are your physical offices located?',
      answer:
        'Our corporate headquarters is located at the NSSF Building, 7th Floor, Door 733, Nkrumah Road, Mombasa. Our Nairobi branch office is located at the All Saints Cathedral Office on Kenyatta Avenue.',
    },
    {
      question: 'How do you ensure ethical and legal compliance?',
      answer:
        'All procedures strictly conform to statutory enactments including the Auctioneers Act (Cap. 526), the Civil Procedure Act, the Movable Property Security Rights Act (MPSRA 2017), and the Land Act.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F9] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Company Heritage &bull; Established in 1995"
          title="About Makuri Auctioneers: Three Decades of Corporate Trust &amp; Integrity"
          description="Founded in 1995, Makuri Auctioneers is a recognized leader in professional auctioneering, lawful repossession, corporate private investigations, and real estate management across Kenya."
          breadcrumbs={[
            { label: 'About Us' },
          ]}
          primaryCtaText="Speak With Our Team: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="Explore Our Practice Areas"
          secondaryCtaHref="#services"
        />

        {/* Narrative & History Section */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#163E72]">
                  <Award className="w-4 h-4 text-[#C6A15B]" />
                  <span>Nearly 30 Years of Regulated Service</span>
                </div>

                <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730] leading-snug">
                  Built on Integrity, Procedural Precision &amp; Relentless Diligence
                </h2>

                <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    <strong>Founded in 1995</strong>, <strong>Makuri Auctioneers</strong> was established with a singular commitment: to provide financial institutions, corporate enterprises, legal counsels, and property owners with an auctioneering and asset recovery service characterized by absolute legal integrity and commercial rigor.
                  </p>
                  <p>
                    From our headquarters in <strong>Mombasa at the NSSF Building (Nkrumah Road)</strong> to our branch in <strong>Nairobi at the All Saints Cathedral Office</strong>, we have earned the trust of Kenya&apos;s leading commercial banks, insurance companies, court registries, and businesses by conducting every auction, repossession, and investigation with strict statutory fidelity.
                  </p>
                </div>

                {/* Core Values */}
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-lg bg-[#F4F6F9] border border-slate-200">
                    <h3 className="font-bold text-sm text-[#0B1730] mb-1">
                      1. Professionalism &amp; Statutory Diligence
                    </h3>
                    <p className="text-xs text-slate-600">
                      We execute warrants, public notices, and asset realisations strictly in compliance with the Auctioneers Act (Cap. 526) and relevant legal mandates.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#F4F6F9] border border-slate-200">
                    <h3 className="font-bold text-sm text-[#0B1730] mb-1">
                      2. Uncompromising Transparency
                    </h3>
                    <p className="text-xs text-slate-600">
                      Accurate reserve price determination, public declarations, documented asset condition logs, and prompt client remittance.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#F4F6F9] border border-slate-200">
                    <h3 className="font-bold text-sm text-[#0B1730] mb-1">
                      3. Responsible Enforcement
                    </h3>
                    <p className="text-xs text-slate-600">
                      Executing sensitive collateral repossessions and distress warrants with civility, preserving human dignity and avoiding breach of peace.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 items-center text-xs">
                  <Link
                    href="/auctioneers-in-mombasa"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Mombasa Head Office Details &rarr;
                  </Link>
                  <span className="text-slate-300">&bull;</span>
                  <Link
                    href="/auctioneers-in-nairobi"
                    className="font-bold text-[#163E72] hover:text-[#C6A15B] underline"
                  >
                    Nairobi Branch Details &rarr;
                  </Link>
                </div>
              </div>

              {/* Right Column: Authentic Visuals */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#0B1730] aspect-[4/3]">
                  <SafeImage
                    src="/images/about_office.jpg"
                    fallbackSrc="/images/about_makuri_office_1793440617755.jpg"
                    alt="Makuri Auctioneers Corporate Premises Mombasa"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1730] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block mb-1">
                      Corporate Seat
                    </span>
                    <p className="text-xs font-semibold">
                      Nkrumah Road, NSSF Building, 7th Floor, Door 733, Mombasa
                    </p>
                  </div>
                </div>

                {/* Implements Showcase */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="p-3 bg-[#F4F6F9] rounded-xl border border-slate-200 text-center">
                    <div className="relative w-16 h-16 mx-auto mb-2 bg-white rounded-lg p-1 border border-slate-300">
                      <SafeImage
                        src="/images/auction_gavel.jpeg"
                        fallbackSrc="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.28.03_PM_eeddc43c.jpeg"
                        alt="The Official Auction Gavel"
                        fill
                        sizes="64px"
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-bold text-[#0B1730] block">The Official Gavel</span>
                    <span className="text-[10px] text-slate-500">Binding Fall of Hammer</span>
                  </div>

                  <div className="p-3 bg-[#F4F6F9] rounded-xl border border-slate-200 text-center">
                    <div className="relative w-16 h-16 mx-auto mb-2 bg-white rounded-lg p-1 border border-slate-300">
                      <SafeImage
                        src="/images/auction_bell.jpeg"
                        fallbackSrc="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.28.03_PM__1__2a5d19d1.jpeg"
                        alt="The Official Auction Bell"
                        fill
                        sizes="64px"
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-bold text-[#0B1730] block">The Auction Bell</span>
                    <span className="text-[10px] text-slate-500">Lot Opening Summon</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Executive Leadership Section */}
        <section className="py-14 sm:py-20 bg-[#F4F6F9] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#163E72] block mb-2">
                Executive Leadership
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730]">
                Director &amp; Principal Lead
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Steering Makuri Auctioneers with strategic clarity and academic distinction.
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-36 h-48 sm:w-44 sm:h-56 rounded-xl overflow-hidden bg-[#0B1730] border-2 border-[#C6A15B] shrink-0 shadow-md">
                <SafeImage
                  src="/images/director_joel_titus_musya.jpeg"
                  fallbackSrc="/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.36.00_PM_4936689a.jpeg"
                  alt="Joel Titus Musya Director Makuri Auctioneers"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>

              <div className="space-y-3 text-center sm:text-left">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C6A15B] block">
                    Managing Director
                  </span>
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
                    Joel Titus Musya
                  </h3>
                </div>

                <div className="p-2.5 rounded-lg bg-[#F4F6F9] border border-slate-200/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Academic &amp; Professional Qualifications
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#163E72] font-mono mt-0.5">
                    PHD BA(CONT), MBA(STRATEGIC MNGT), BBA
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Overseeing company operations, strategic institutional engagements, asset valuation standards, and compliance governance across our Mombasa headquarters and Nairobi branch.
                </p>

                <div className="pt-1 flex flex-wrap gap-3 justify-center sm:justify-start">
                  <a
                    href="tel:0720934476"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1730] hover:text-[#C6A15B]"
                  >
                    <span>Direct: 0720 934 476</span>
                  </a>
                  <span className="text-slate-300">&bull;</span>
                  <a
                    href="mailto:info@makuriauctioneers.co.ke"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163E72] hover:text-[#C6A15B]"
                  >
                    <span>info@makuriauctioneers.co.ke</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <ServiceInquiryForm
          title="Initiate a Matter With Makuri Auctioneers"
          subtitle="Direct dialogue with our executive management team."
        />

        {/* Branch Offices */}
        <BranchContactCard
          title="Visit Our Physical Headquarters &amp; Branch"
          subtitle="Both locations are fully accredited and staffed for client meetings."
        />

        {/* FAQs */}
        <FaqAccordion
          items={faqs}
          title="Frequently Asked Questions &bull; About Makuri Auctioneers"
          subtitle="Learn more about our licensing, history, and executive structure."
        />

        {/* Related Services */}
        <RelatedServicesSection
          currentSlug="/about-us"
          title="Explore Our Core Practice Areas"
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
