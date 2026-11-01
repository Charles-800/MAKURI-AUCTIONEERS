import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import Breadcrumbs from '@/components/Breadcrumbs';
import BranchContactCard from '@/components/BranchContactCard';
import RelatedServicesSection from '@/components/RelatedServicesSection';
import { Calendar, Clock, User, Phone, MessageSquare, ArrowLeft, ArrowRight, ShieldCheck, BookOpen, Share2 } from 'lucide-react';

interface ArticleShellProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  slug: string;
  keyTakeaways: string[];
  tableOfContents?: { title: string; id: string }[];
  children: React.ReactNode;
}

export default function ArticleShell({
  title,
  excerpt,
  category,
  date,
  readTime,
  author,
  slug,
  keyTakeaways,
  tableOfContents,
  children,
}: ArticleShellProps) {
  const canonicalUrl = `https://makuri-auctioneers.co.ke/insights/${slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': title,
    'description': excerpt,
    'datePublished': '2026-10-15T08:00:00+03:00',
    'dateModified': '2026-10-30T10:00:00+03:00',
    'author': {
      '@type': 'Person',
      'name': author,
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Makuri Auctioneers',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://makuri-auctioneers.co.ke/images/hero_auction.jpg',
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F9] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      <main className="flex-1">
        {/* Article Header Hero */}
        <section className="bg-[#0B1730] text-white pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="mb-6">
              <Breadcrumbs
                items={[
                  { label: 'Insights & Resources', href: '/insights' },
                  { label: title },
                ]}
              />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163E72] text-[#C6A15B] text-xs font-bold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{category}</span>
            </div>

            <h1 className="font-serif-heading text-2xl sm:text-3.5xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4 text-balance">
              {title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800">
              <span className="flex items-center gap-1.5 text-slate-300">
                <User className="w-4 h-4 text-[#C6A15B]" />
                <span className="font-medium">{author}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#C6A15B]" />
                <span>{date}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C6A15B]" />
                <span>{readTime}</span>
              </span>
            </div>
          </div>
        </section>

        {/* Article Body Container */}
        <article className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            {/* Key Takeaways Box */}
            <div className="p-6 rounded-2xl bg-[#F4F6F9] border-2 border-[#C6A15B]/40 mb-10 shadow-xs">
              <div className="flex items-center gap-2 font-serif-heading text-base sm:text-lg font-bold text-[#0B1730] mb-3">
                <ShieldCheck className="w-5 h-5 text-[#C6A15B]" />
                <span>Executive Summary &amp; Key Legal Takeaways</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#163E72] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Table of Contents (if provided) */}
            {tableOfContents && tableOfContents.length > 0 && (
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-10 text-xs sm:text-sm">
                <span className="font-bold uppercase tracking-wider text-slate-700 text-xs block mb-2">
                  Table of Contents
                </span>
                <ul className="space-y-1.5 text-[#163E72]">
                  {tableOfContents.map((toc, idx) => (
                    <li key={idx}>
                      <a href={`#${toc.id}`} className="hover:text-[#C6A15B] hover:underline">
                        {idx + 1}. {toc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Main Content Body */}
            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
              {children}
            </div>

            {/* Article Author & Institutional Footer */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#F4F6F9] p-6 rounded-2xl">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block">
                  Published By
                </span>
                <h4 className="font-serif-heading text-base font-bold text-[#0B1730]">
                  Makuri Auctioneers Legal &amp; Research Unit
                </h4>
                <p className="text-xs text-slate-500">
                  Mombasa Headquarters: NSSF Building &bull; Nairobi Branch: All Saints Cathedral Office
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="tel:0720934476"
                  className="px-4 py-2.5 rounded-lg bg-[#0B1730] text-[#C6A15B] hover:text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Call 0720 934 476</span>
                </a>
                <a
                  href="https://wa.me/254720934476?text=Hello%20Makuri%20Auctioneers,%20I%20am%20inquiring%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs inline-flex items-center gap-1.5 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Back to Insights */}
            <div className="mt-8 flex items-center justify-between text-xs">
              <Link
                href="/insights"
                className="font-bold text-[#163E72] hover:text-[#C6A15B] inline-flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Insights &amp; Resources</span>
              </Link>
              <Link
                href="/contact-us"
                className="font-bold text-[#163E72] hover:text-[#C6A15B] inline-flex items-center gap-1.5"
              >
                <span>Request Case Evaluation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </article>

        {/* Verified Offices */}
        <BranchContactCard
          title="Consult Our Case Officers Directly"
          subtitle="Walk-in consultations welcomed at Mombasa HQ and Nairobi Branch."
        />

        {/* Related Services */}
        <RelatedServicesSection
          currentSlug={`/insights/${slug}`}
          title="Related Practice Areas"
        />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
