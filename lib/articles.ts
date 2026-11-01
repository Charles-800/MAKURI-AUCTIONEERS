export interface ArticleSummary {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
}

export const articles: ArticleSummary[] = [
  {
    slug: 'understanding-auctioneering-process-kenya',
    title: 'Understanding the Auctioneering Process in Kenya: Legal Framework & Practice',
    excerpt: 'A comprehensive walkthrough of the Auctioneers Act (Cap. 526), statutory notice requirements, bidding rules, and the fall of the hammer.',
    category: 'Auctioneering Law',
    readTime: '6 min read',
    date: 'October 2026',
    author: 'Joel Titus Musya, Director',
    image: '/images/auction_gavel.jpeg',
  },
  {
    slug: 'what-to-know-before-participating-public-auction',
    title: 'What to Know Before Participating in a Public Auction in Kenya: Bidders Guide',
    excerpt: 'Essential due diligence, bidding deposits, reserve prices, and post-auction settlement requirements for prospective asset buyers.',
    category: 'Buyer Guide',
    readTime: '5 min read',
    date: 'October 2026',
    author: 'Makuri Auctioneers Advisory Desk',
    image: '/images/auction_bell.jpeg',
  },
  {
    slug: 'understanding-asset-repossession-services-kenya',
    title: 'Understanding Asset Repossession Services in Kenya: The MPSRA Framework',
    excerpt: 'How the Movable Property Security Rights Act (MPSRA 2017) governs the lawful seizure, impoundment, and realization of pledged collateral.',
    category: 'Repossession & Recovery',
    readTime: '7 min read',
    date: 'October 2026',
    author: 'Legal Enforcement Team',
    image: '/images/asset_recovery.jpg',
  },
  {
    slug: 'importance-professional-asset-recovery',
    title: 'The Importance of Professional Asset Recovery for Lenders & Financial Institutions',
    excerpt: 'Why commercial banks and credit providers rely on licensed auctioneers to protect capital integrity and mitigate non-performing debt.',
    category: 'Corporate Finance',
    readTime: '6 min read',
    date: 'October 2026',
    author: 'Joel Titus Musya, Director',
    image: '/images/asset_recovery_machinery_1793440618886.jpg',
  },
  {
    slug: 'how-property-auctions-work-kenya',
    title: 'How Property and Real Estate Auctions Work in Kenya: Land Act Compliance',
    excerpt: 'From default notifications and 40-day notices of sale to public gazettement and conveyancing transfer procedures.',
    category: 'Real Estate Auctions',
    readTime: '8 min read',
    date: 'October 2026',
    author: 'Property Advisory Desk',
    image: '/images/hero_auction.jpg',
  },
  {
    slug: 'understanding-private-investigation-services',
    title: 'Understanding Private Investigation Services: Asset Tracing & Fraud Audits',
    excerpt: 'Uncovering concealed debtor assets, performing corporate due diligence, and gathering admissible court evidence in commercial disputes.',
    category: 'Investigations & Intelligence',
    readTime: '6 min read',
    date: 'October 2026',
    author: 'Forensic Investigation Unit',
    image: '/images/investigation.jpg',
  },
  {
    slug: 'what-businesses-should-know-asset-recovery',
    title: 'What Businesses and Corporate Directors Should Know About Asset Recovery',
    excerpt: 'Practical strategies for securing commercial supply contracts, executing court decrees, and navigating distress for rent.',
    category: 'Business Advisory',
    readTime: '5 min read',
    date: 'October 2026',
    author: 'Corporate Advisory Wing',
    image: '/images/about_office.jpg',
  },
  {
    slug: 'professional-property-management-kenya',
    title: 'Professional Property Management in Kenya: Maximizing Yields & Enforcing Leases',
    excerpt: 'How structured tenancy administration, preventative maintenance, and distress for rent synergy preserve real estate capital.',
    category: 'Property Management',
    readTime: '6 min read',
    date: 'October 2026',
    author: 'Real Estate Division',
    image: '/images/hero_mombasa_auction_1793440617435.jpg',
  },
];
