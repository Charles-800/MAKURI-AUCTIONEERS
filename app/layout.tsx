import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B1730',
};

export const metadata: Metadata = {
  title: 'Makuri Auctioneers | Professional Auctioneering & Asset Recovery in Mombasa & Nairobi, Kenya',
  description: 'Licensed professional auctioneers, asset recovery & repossession, corporate private investigations, and real estate asset management with offices in Mombasa (NSSF Building) and Nairobi (All Saints Cathedral Office).',
  keywords: [
    'Auctioneers in Mombasa',
    'Auctioneers in Nairobi',
    'Auctioneering companies in Mombasa',
    'Professional auctioneers in Kenya',
    'Repossession services in Kenya',
    'Asset recovery services in Mombasa',
    'Asset recovery services in Nairobi',
    'Private investigators in Mombasa',
    'Business consultancy in Mombasa',
    'Real estate management in Mombasa',
    'Makuri Auctioneers',
    'NSSF Building Nkrumah Road auctioneers',
    'All Saints Cathedral Office auctioneers'
  ],
  authors: [{ name: 'Makuri Auctioneers' }],
  creator: 'Makuri Auctioneers',
  publisher: 'Makuri Auctioneers',
  openGraph: {
    title: 'Makuri Auctioneers | Professional Auctioneering & Asset Recovery Solutions',
    description: 'Delivering professional auctioneering, lawful repossession, private investigation, business consultancy, and real estate management services with integrity and efficiency in Mombasa and Nairobi, Kenya.',
    url: 'https://makuri-auctioneers.co.ke',
    siteName: 'Makuri Auctioneers',
    images: [
      {
        url: '/images/hero_auction.jpg',
        width: 1200,
        height: 630,
        alt: 'Makuri Auctioneers - Mombasa Corporate Auction Hall and Boardroom',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makuri Auctioneers | Mombasa & Nairobi, Kenya',
    description: 'Professional auctioneering, asset recovery, corporate private investigations, and real estate management in Mombasa and Nairobi.',
    images: ['/images/hero_auction.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'Makuri Auctioneers',
  'alternateName': 'Makuri Auctioneering & Asset Recovery Solutions',
  'image': 'https://makuri-auctioneers.co.ke/images/hero_auction.jpg',
  'telephone': '+254720934476',
  'email': 'info@makuriauctioneers.co.ke',
  'url': 'https://makuri-auctioneers.co.ke',
  'priceRange': 'KES',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Nkrumah Road, NSSF Building, 7th Floor, Door 733',
    'addressLocality': 'Mombasa',
    'addressRegion': 'Coast',
    'postalCode': '80100',
    'addressCountry': 'KE'
  },
  'location': [
    {
      '@type': 'Place',
      'name': 'Mombasa Headquarters',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Nkrumah Road, NSSF Building, 7th Floor, Door 733',
        'addressLocality': 'Mombasa',
        'addressCountry': 'KE'
      }
    },
    {
      '@type': 'Place',
      'name': 'Nairobi Branch Office',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'All Saints Cathedral Office',
        'addressLocality': 'Nairobi',
        'addressCountry': 'KE'
      }
    }
  ],
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': -4.062089,
    'longitude': 39.673852
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '08:00',
      'closes': '17:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Saturday'],
      'opens': '08:30',
      'closes': '13:00'
    }
  ],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Professional Corporate Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Auctioneering Services',
          'description': 'Public auctions, sale of movable and immovable assets, asset valuation coordination, and professional auction administration.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Repossession & Asset Recovery Services',
          'description': 'Asset recovery, vehicle repossession, machinery and equipment recovery, and collateral recovery under Kenyan law.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Private Investigation Services',
          'description': 'Corporate investigations, background verification, asset tracing, due diligence, and fraud investigative support.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Business Consultancy',
          'description': 'Business advisory services, corporate strategy, risk assessment, operational consultancy, and recovery advisory.'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Real Estate Management',
          'description': 'Property management, real estate consultancy, property marketing, tenancy administration, and property advisory.'
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#F4F6F9] text-slate-900 antialiased font-sans-body flex flex-col overflow-x-hidden w-full" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
