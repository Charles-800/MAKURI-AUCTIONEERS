import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import PageHero from '@/components/PageHero';
import SafeImage from '@/components/SafeImage';
import { BookOpen, Calendar, Clock, User, ArrowRight, Shield, Scale, Gavel, Building, Key } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights & Auctioneering Resources | Makuri Auctioneers Kenya',
  description: 'Authoritative guides on public auctions, asset repossession laws, property management, private investigations, and legal enforcement in Kenya.',
  keywords: [
    'Auctioneering insights Kenya',
    'Auction process in Kenya',
    'Repossession laws Kenya',
    'Property auctions Kenya',
    'Asset recovery guidelines Kenya',
    'Private investigations Kenya',
    'Makuri Auctioneers resources'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/insights',
  },
  openGraph: {
    title: 'Insights & Auctioneering Resources | Makuri Auctioneers Kenya',
    description: 'Expert publications and legal guidance on commercial auctions, collateral enforcement, and corporate asset recovery in Kenya.',
    url: 'https://makuri-auctioneers.co.ke/insights',
    siteName: 'Makuri Auctioneers',
    images: [{ url: '/images/hero_auction.jpg', width: 1200, height: 630, alt: 'Makuri Auctioneers Insights & Resources' }],
    locale: 'en_KE',
    type: 'website',
  },
};

import { articles } from '@/lib/articles';


export default function InsightsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F9] text-slate-900">
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Knowledge Center &bull; Statutory &amp; Market Insights"
          title="Insights &amp; Auctioneering Resources in Kenya"
          description="Authoritative legal analyses, statutory guidelines, and executive intelligence on public auctions, collateral repossession, asset recovery, and property administration."
          breadcrumbs={[
            { label: 'Insights & Resources' },
          ]}
          primaryCtaText="Speak With Our Team: 0720 934 476"
          primaryCtaHref="tel:0720934476"
          secondaryCtaText="Contact Us"
          secondaryCtaHref="/contact-us"
        />

        {/* Articles Grid */}
        <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#163E72] block mb-2">
                Published Editorial Intelligence
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730]">
                Practical Guidance for Creditors, Bidders &amp; Property Owners
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Ground-level knowledge compiled by our licensed practicing auctioneers and executive directors in Mombasa and Nairobi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-[#C6A15B] shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                      <SafeImage
                        src={article.image}
                        fallbackSrc="/images/hero_auction.jpg"
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-[#0B1730]/90 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-[#C6A15B] uppercase tracking-wider">
                        {article.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                          <span>{article.date}</span>
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                          <span>{article.readTime}</span>
                        </span>
                      </div>

                      <h3 className="font-serif-heading text-lg font-bold text-[#0B1730] group-hover:text-[#163E72] transition-colors line-clamp-2 mb-3">
                        <Link href={`/insights/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-500 truncate max-w-[170px]">
                      {article.author}
                    </span>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#163E72] group-hover:text-[#C6A15B] transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Direct Consultation Callout */}
        <section className="py-12 bg-[#0B1730] text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-serif-heading text-xl sm:text-2xl font-bold mb-3">
              Require Bespoke Advice for Your Organization?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Our directors and licensed auctioneers in Mombasa and Nairobi provide specialized counsel on loan recovery, asset auctions, and legal distress.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:0720934476"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#C6A15B] to-[#dfc285] text-[#0B1730] font-bold text-xs sm:text-sm shadow-md"
              >
                Call Desk: 0720 934 476
              </a>
              <Link
                href="/contact-us"
                className="px-6 py-3 rounded-lg bg-[#163E72] text-white font-semibold text-xs sm:text-sm border border-[#C6A15B]/40 hover:bg-[#1a4a88]"
              >
                Submit Written Brief &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
