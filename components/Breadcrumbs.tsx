import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const baseUrl = 'https://makuri-auctioneers.co.ke';

  // Construct JSON-LD BreadcrumbList
  const schemaItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.label,
      item: item.href ? (item.href.startsWith('http') ? item.href : `${baseUrl}${item.href}`) : undefined,
    })),
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className={`text-xs text-slate-400 ${className}`}>
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-[#C6A15B] transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span className="sr-only sm:not-sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="inline-flex items-center gap-1.5 sm:gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                {isLast || !item.href ? (
                  <span className="text-[#C6A15B] font-semibold truncate max-w-[220px] sm:max-w-none" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-[#C6A15B] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
