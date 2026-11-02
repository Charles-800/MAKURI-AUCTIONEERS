import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://makuri-auctioneers.co.ke';
  const now = new Date();

  // Core high-intent landing pages
  const corePages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/auctioneers-in-mombasa', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/auctioneers-in-nairobi', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/auctioneering-services-kenya', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/execution-of-court-orders-kenya', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/realization-of-securities-kenya', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/repossession-services-kenya', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/asset-recovery-services-kenya', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/private-investigation-services-kenya', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/business-consultancy-kenya', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/real-estate-management-kenya', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/locations', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about-us', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/contact-us', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/insights', priority: 0.85, changeFrequency: 'weekly' as const },
  ];

  // 8 Authority Insights & Editorial Articles
  const insightArticles = [
    '/insights/understanding-auctioneering-process-kenya',
    '/insights/what-to-know-before-participating-public-auction',
    '/insights/understanding-asset-repossession-services-kenya',
    '/insights/importance-professional-asset-recovery',
    '/insights/how-property-auctions-work-kenya',
    '/insights/understanding-private-investigation-services',
    '/insights/what-businesses-should-know-asset-recovery',
    '/insights/professional-property-management-kenya',
  ];

  return [
    ...corePages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...insightArticles.map((articlePath) => ({
      url: `${baseUrl}${articlePath}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ];
}
