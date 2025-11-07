import { Metadata } from "next";

const baseUrl = "https://edumaster-live.vercel.app";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
}

export function constructMetadata({
  title,
  description,
  keywords = [],
  path,
}: SEOProps): Metadata {
  return {
    title: `${title}`,
    description,
    keywords: [
      "exam preparation",
      "ssc exam",
      "railway exam",
      "banking exam",
      "competitive exams",
      "online study",
      "mcq practice",
      ...keywords,
    ].join(", "),
    metadataBase: new URL(baseUrl),
    authors: [{ name: "EduMaster" }],
    creator: "EduMaster",
    publisher: "EduMaster",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${baseUrl}${path}`,
      siteName: "EduMaster",
      title: `${title}`,
      description,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | EduMaster`,
      description,
      site: "@edumaster_live",
      creator: "@edumaster_live",
      images: [`${baseUrl}/og-image.png`],
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    manifest: `${baseUrl}/manifest.json`,
  };

}
