import React from 'react';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { BookOpen, Calendar, Clock, ArrowRight, Shield } from 'lucide-react';
import { articles } from '@/lib/articles';

export default function InsightsPreviewSection() {
  const featuredArticles = articles.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#163E72] mb-2">
              <span className="w-5 h-[2px] bg-[#C6A15B]"></span>
              Insights &amp; Auctioneering Resources
            </div>
            <h2 className="font-serif-heading text-2xl sm:text-3.5xl lg:text-4xl font-bold text-[#0B1730]">
              Statutory Knowledge &amp; Legal Guides
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Clear, practical publications on auction procedures, debt enforcement, and real estate management in Kenya.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#0B1730] hover:bg-[#163E72] text-[#C6A15B] hover:text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
            >
              <BookOpen className="w-4 h-4 text-[#C6A15B]" />
              <span>Explore All 8 Articles &rarr;</span>
            </Link>
          </div>
        </div>

        {/* 3 Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="group bg-[#F4F6F9] rounded-2xl border border-slate-200 hover:border-[#C6A15B] transition-all hover:shadow-lg overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                  <SafeImage
                    src={article.image}
                    fallbackSrc="/images/hero_auction.jpg"
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1730]/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-[#C6A15B] uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#C6A15B]" />
                      <span>{article.date}</span>
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#C6A15B]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-base sm:text-lg font-bold text-[#0B1730] group-hover:text-[#163E72] transition-colors line-clamp-2 mb-2">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[11px] font-medium text-slate-500">
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
  );
}
