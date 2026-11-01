import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import PageHero from '@/components/PageHero';
import BranchContactCard from '@/components/BranchContactCard';
import FaqAccordion, { FaqItem } from '@/components/FaqAccordion';
import RelatedServicesSection from '@/components/RelatedServicesSection';
import ContactSection from '@/components/ContactSection';
import { Phone, Mail, MessageSquare, MapPin, Building2, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Makuri Auctioneers - Mombasa & Nairobi Offices',
  description: 'Contact Makuri Auctioneers. Tel: 0720 934 476. Mombasa HQ at NSSF Building, 7th Flr, Door 733. Nairobi Branch at All Saints Cathedral Office. Call or WhatsApp.',
  keywords: [
    'Contact Makuri Auctioneers',
    'Makuri Auctioneers phone number',
    'Makuri Auctioneers Mombasa address',
    'Makuri Auctioneers Nairobi office',
    'NSSF Building auctioneers Mombasa',
    'All Saints Cathedral Office auctioneers',
    'Auctioneers in Kenya contact'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/contact-us',
  },
  openGraph: {
    title: 'Contact Us | Makuri Auctioneers - Mombasa & Nairobi Offices',
    description: 'Get in touch with Makuri Auctioneers in Mombasa & Nairobi. Call 0720 934 476 or email info@makuriauctioneers.co.ke for professional services.',
    url: 'https://makuri-auctioneers.co.ke/contact-us',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/hero_auction.jpg', width: 1200, height: 630, alt: 'Contact Makuri Auctioneers' }],
    locale: 'en_KE',
    type: 'website',
  },
};

export default function ContactUsPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Makuri Auctioneers',
    'description': 'Contact details for Makuri Auctioneers Mombasa headquarters and Nairobi branch.',
    'url': 'https://makuri-auctioneers.co.ke/contact-us',
    'mainEntity': {
      '@type': 'ProfessionalService',
      'name': 'Makuri Auctioneers',
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
    },
  };

  const contactFaqs: FaqItem[] = [
    {
      question: 'What is the fastest way to reach Makuri Auctioneers for urgent instructions?',
      answer:
        'For urgent matters, including time-sensitive court warrants or repossession orders, telephone our direct central desk at 0720 934 476 or send an urgent brief via WhatsApp to the same number.',
    },
    {
      question: 'Do I need an appointment to visit your Mombasa or Nairobi office?',
      answer:
        'Walk-ins are welcomed during normal business hours (8:00 AM to 5:00 PM Monday through Friday, 8:30 AM to 1:00 PM Saturday). However, scheduling in advance ensures a director or senior case manager is immediately available.',
    },
    {
      question: 'Where should formal legal service documents and bank charges be delivered?',
      answer:
        'Physical court documents, loan charges, and statutory warrants can be served directly at our Mombasa Head Office (NSSF Building, 7th Floor, Door 733, Nkrumah Road) or our Nairobi Branch (All Saints Cathedral Office). Electronic service copies should be directed to info@makuriauctioneers.co.ke.',
    },
    {
      question: 'What response timeframe can I expect on formal inquiries?',
      answer:
        'All online inquiries and email briefs received before 3:00 PM on business days are reviewed and formally acknowledged within 2 to 4 hours.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F9] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Direct Corporate Contact &bull; Dual Branch Network"
          title="Contact Makuri Auctioneers: Mombasa Headquarters &amp; Nairobi Branch"
          description="Speak directly with our licensed auctioneers, case managers, and corporate consultants. Reach us by telephone, WhatsApp, verified email, or at our offices."
          breadcrumbs={[
            { label: 'Contact Us' },
          ]}
          primaryCtaText="Call Now: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="WhatsApp Inquiry Desk"
          secondaryCtaHref="https://wa.me/254720934476?text=Hello%20Makuri%20Auctioneers,%20I%20would%20like%20to%20inquire%20about%20your%20services."
        />

        {/* Full Contact Form & Dual Maps Section */}
        <ContactSection />

        {/* FAQs */}
        <FaqAccordion
          items={contactFaqs}
          title="Frequently Asked Questions &bull; Contacting Makuri Auctioneers"
          subtitle="Operating hours, response times, and service of legal documents."
        />

        {/* Related Services */}
        <RelatedServicesSection
          currentSlug="/contact-us"
          title="Our Regulated Service Portfolio"
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
