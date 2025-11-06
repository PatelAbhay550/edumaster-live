interface ArticleStructuredDataProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  path: string;
  category: string;
}

export function ArticleStructuredData({
  title,
  description,
  datePublished,
  dateModified,
  path,
  category,
}: ArticleStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Organization",
      name: "Exam Preparation Portal",
      url: "https://yourwebsite.com",
    },
    datePublished: datePublished,
    dateModified: dateModified,
    publisher: {
      "@type": "Organization",
      name: "Exam Preparation Portal",
      logo: {
        "@type": "ImageObject",
        url: "https://yourwebsite.com/logo.png", // Add your logo URL
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yourwebsite.com${path}`,
    },
    image: "https://yourwebsite.com/og-image.png", // Add your image URL
    articleSection: category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}