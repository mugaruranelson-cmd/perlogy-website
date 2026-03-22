import type { Metadata } from 'next';

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
      url: "https://perlogy.africa",
      siteName: "Perlogy Technologies",
      locale: "en_AE",
      type: "website",
    },
  };
}
