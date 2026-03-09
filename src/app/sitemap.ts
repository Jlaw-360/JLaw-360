import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jlaw360.com';

  const routes = [
    { path: '/', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/law-firms', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/hvac-trades', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/real-estate', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/manufacturing-b2b', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
