import type { Metadata } from "next";
import WebsiteSeoClient from "./website-seo-client";
import { FAQS } from "./faqs";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const title =
  "How to Set Up SEO for a Website: A Step-by-Step Setup Checklist";
const description =
  "The exact on-site SEO setup I run on every website I build — from mapping keywords to pages and crawlable HTML to title tags, sitemaps, canonical tags, schema, Core Web Vitals, and getting indexed in Google Search Console. A developer's step-by-step checklist, plus the 'People also ask' answers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/how-to-set-up-seo-for-a-website" },
  openGraph: {
    title,
    description,
    url: "/blog/how-to-set-up-seo-for-a-website",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}/blog/how-to-set-up-seo-for-a-website`,
  image: `${SITE_URL}/blog/how-to-set-up-seo-for-a-website/opengraph-image`,
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Person", name: SITE_NAME },
  keywords: [
    "How to Set Up SEO for a Website",
    "Website SEO Setup",
    "Set Up SEO for Website",
    "Technical SEO",
    "On-Page SEO",
    "Core Web Vitals",
    "Google Search Console",
    "XML Sitemap",
    "Structured Data",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Set Up SEO for a Website",
      item: `${SITE_URL}/blog/how-to-set-up-seo-for-a-website`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <WebsiteSeoClient />
    </>
  );
}
