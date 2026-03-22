import type { Metadata } from 'next';
import { SEO } from './seo-config';

export function generateMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: SEO.siteUrl,
      siteName: "Perlogy Technologies",
      locale: "en_AE",
      type: "website",
    },
  };
}
